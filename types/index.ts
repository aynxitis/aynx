export type ProjectStatus = "live" | "current" | "client";

type BaseProject = { id: number };

export type RealProject = BaseProject & {
  isEmpty?: false;
  status: ProjectStatus;
  label: string;
  year: number;
  name: string;
  logoSrc?: string;
  logoAlt?: string;
  badge?: string;
  description: string[];
  stack: string[];
  link?: string;
  linkLabel?: string;
  disabled?: boolean;
  disabledLabel?: string;
};

export type EmptyProject = BaseProject & { isEmpty: true };

export type Project = RealProject | EmptyProject;

export interface ContactFormData {
  name: string;
  email: string;
  subject: "" | "freelance" | "internship" | "other";
  message: string;
}

export type ContactFormStatus = "idle" | "submitting" | "success" | "error";