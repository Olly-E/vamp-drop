import { isValidPhoneNumber } from "react-phone-number-input";
import { object, string, z } from "zod";

export const contactUsSchema = object({
  firstName: string({ required_error: "Password is required" }).min(
    8,
    "Password must be at least 8 characters"
  ),
  lastName: string({ required_error: "Password is required" }).min(
    8,
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
    8,
    "Password must be at least 8 characters"
  ),
});

export type ContactUsInputType = z.infer<typeof contactUsSchema>;
