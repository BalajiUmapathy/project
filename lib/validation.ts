import { z } from "zod";

export const UserFormValidation = z.object({
  name: z
    .string()
    .min(2, "Name must be at least 2 characters")
    .max(50, "Name must be at most 50 characters"),
  email: z.string().email("Invalid email address"),
  // phone: z
  //   .string()
  //   .refine((phone) => /^\+\d{10,15}$/.test(phone), "Invalid phone number"),
    password: z
    .string()
    .min(8, "Password must be at least 8 characters")
    .refine((password) => /[a-z]/.test(password), {
      message: "Password must include at least one lowercase letter",
    })
    .refine((password) => /[A-Z]/.test(password), {
      message: "Password must include at least one uppercase letter",
    })
    .refine((password) => /[0-9]/.test(password), {
      message: "Password must include at least one digit",
    })
    .refine(
      (password) => /[@$!%*?&#]/.test(password) || !/[~`[\]{}()<>+]/.test(password),
      {
        message: "Password must include at least one special character",
      }
    ),
});

export const PatientFormValidation = z.object({
  name: z
  .string()
  .min(2, "Name must be at least 2 characters")
  .max(50, "Name must be at most 50 characters"),
email: z.string().email("Invalid email address"),
phone: z
  .string()
  .refine((phone) => /^\+\d{10,15}$/.test(phone), "Invalid phone number"),
birthDate: z.coerce.date(),
gender: z.enum(["male", "female", "other"]),
role: z.string().min(2, "Select at least one role"),
department: z
  .string()
  .min(2, "Department must be at least 2 characters")
  .max(100, "Department must be at most 100 characters"),
  password: z
  .string()
  .min(8, "Password must be at least 8 characters")
  .refine((password) => /[a-z]/.test(password), {
    message: "Password must include at least one lowercase letter",
  })
  .refine((password) => /[A-Z]/.test(password), {
    message: "Password must include at least one uppercase letter",
  })
  .refine((password) => /[0-9]/.test(password), {
    message: "Password must include at least one digit",
  })
  .refine(
    (password) => /[@$!%*?&#]/.test(password) || !/[~`[\]{}()<>+]/.test(password),
    {
      message: "Password must include at least one special character",
    }
  ),
designation: z
  .string()
  .min(2, "Designation must be at least 2 characters")
  .max(100, "Designation must be at most 100 characters"),
identificationType: z.string().optional(),
identificationNumber: z.string().optional(),
identificationDocument: z.custom<File[]>().optional(),
});

export const CreateAppointmentSchema = z.object({
  primaryPhysician: z.string().min(2, "Select at least one doctor"),
  schedule: z.coerce.date(),
  reason: z
    .string()
    .min(2, "Reason must be at least 2 characters")
    .max(500, "Reason must be at most 500 characters"),
  note: z.string().optional(),
  cancellationReason: z.string().optional(),
});

export const ScheduleAppointmentSchema = z.object({
  primaryPhysician: z.string().min(2, "Select at least one doctor"),
  schedule: z.coerce.date(),
  reason: z.string().optional(),
  note: z.string().optional(),
  cancellationReason: z.string().optional(),
});

export const CancelAppointmentSchema = z.object({
  primaryPhysician: z.string().min(2, "Select at least one doctor"),
  schedule: z.coerce.date(),
  reason: z.string().optional(),
  note: z.string().optional(),
  cancellationReason: z
    .string()
    .min(2, "Reason must be at least 2 characters")
    .max(500, "Reason must be at most 500 characters"),
});

export function getAppointmentSchema(type: string) {
  switch (type) {
    case "create":
      return CreateAppointmentSchema;
    case "cancel":
      return CancelAppointmentSchema;
    default:
      return ScheduleAppointmentSchema;
  }
}