import { Resend } from "resend";
import { NextResponse } from "next/server";
import type { ContactFormData } from "@/types";
import { rateLimit } from "@/lib/rate-limit";

const TO_EMAIL = "blmed.anis@gmail.com";
const FROM_EMAIL = "Portfolio <onboarding@resend.dev>"; // replace with verified domain later

const SUBJECT_MAP: Record<Exclude<ContactFormData["subject"], "">, string> = {
  freelance: "Freelance Project",
  internship: "Internship Opportunity",
  other: "General Inquiry",
};

function isValidEmail(email: string): boolean {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
}

type ValidContactFormData = Omit<ContactFormData, "subject"> & {
  subject: "freelance" | "internship" | "other";
};

function isValidBody(body: unknown): body is ValidContactFormData {
  if (typeof body !== "object" || body === null) return false;
  const b = body as Record<string, unknown>;
  return (
    typeof b.name === "string" &&
    typeof b.email === "string" &&
    typeof b.message === "string" &&
    (b.subject === "freelance" || b.subject === "internship" || b.subject === "other")
  );
}

export async function POST(request: Request): Promise<NextResponse> {
  // --- Rate limiting ---
  const forwarded = request.headers.get("x-forwarded-for");
  const ip = forwarded?.split(",")[0].trim() ?? "unknown";
  const { allowed, retryAfterMs } = rateLimit(ip);

  if (!allowed) {
    const retryAfterSec = Math.ceil((retryAfterMs ?? 0) / 1000);
    return NextResponse.json(
      { error: "Too many messages sent. Please try again later." },
      {
        status: 429,
        headers: { "Retry-After": String(retryAfterSec) },
      },
    );
  }

  const body: unknown = await request.json().catch(() => null);

  if (!isValidBody(body)) {
    return NextResponse.json({ error: "Invalid request body" }, { status: 400 });
  }

  const resend = new Resend(process.env.RESEND_API_KEY);
  const { name, email, subject, message } = body;

  if (!name.trim() || !email.trim() || !message.trim()) {
    return NextResponse.json({ error: "All fields are required" }, { status: 400 });
  }

  if (!isValidEmail(email)) {
    return NextResponse.json({ error: "Invalid email address" }, { status: 400 });
  }

  const { error } = await resend.emails.send({
    from: FROM_EMAIL,
    to: TO_EMAIL,
    replyTo: email,
    subject: `[Portfolio] ${SUBJECT_MAP[subject]} — ${name}`,
    text: [
      `Name: ${name}`,
      `Email: ${email}`,
      `Subject: ${SUBJECT_MAP[subject]}`,
      ``,
      `Message:`,
      message,
    ].join("\n"),
  });

  if (error) {
    console.error("Resend error:", JSON.stringify(error, null, 2));
    return NextResponse.json({ error: "Failed to send message" }, { status: 500 });
  }

  return NextResponse.json({ success: true });
}