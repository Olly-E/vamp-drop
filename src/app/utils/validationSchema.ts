import { isValidPhoneNumber } from "react-phone-number-input";
import { object, string, z } from "zod";

export const contactUsSchema = object({
  firstName: string({ required_error: "Password is required" }).min(
    1,
    "Password must be at least 8 characters"
  ),
  lastName: string({ required_error: "Password is required" }).min(
    1,
    "Password must be at least 8 characters"
  ),
  email: string().email("Please enter a valid email"),
  phone: string()
    .refine(
      (value) => isValidPhoneNumber(value || ""), // Ensure value is a string and validate it
      { message: "Invalid phone number" } // Custom error message
    )
    .optional(),
  message: string({ required_error: "Password is required" }).min(
    1,
    "Password must be at least 8 characters"
  ),
  screenshot: z
    .any()
    .optional()
    .refine(
      (fileList) => {
        if (!fileList?.[0]) return true; // ✅ allow empty (optional)
        const file = fileList[0];
        const allowedTypes = ["image/jpeg", "image/png", "application/pdf", "image/webp"];
        return allowedTypes.includes(file.type);
      },
      {
        message: "Invalid file type. Only PDF, JPG, and PNG allowed.",
      }
    ),
});

export type ContactUsInputType = z.infer<typeof contactUsSchema>;
