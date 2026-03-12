"use client";

import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { Send, Loader2 } from "lucide-react";
import { toast } from "@/components/ui/Toaster";
import { formatWhatsAppUrl } from "@/lib/utils";
import { BUSINESS } from "@/lib/data";

// Zod validation schema
const contactSchema = z.object({
  name: z
    .string()
    .min(2, "Name must be at least 2 characters")
    .max(100, "Name is too long"),
  phone: z
    .string()
    .min(10, "Please enter a valid phone number")
    .max(15, "Phone number is too long")
    .regex(/^[\+\d\s\-\(\)]+$/, "Please enter a valid phone number"),
  email: z
    .string()
    .email("Please enter a valid email address")
    .optional()
    .or(z.literal("")),
  requirement: z
    .string()
    .min(10, "Please describe your requirement (at least 10 characters)")
    .max(1000, "Message is too long"),
});

type ContactFormData = z.infer<typeof contactSchema>;

/**
 * Contact enquiry form with React Hook Form + Zod validation
 * Submits via WhatsApp on success
 */
export default function ContactForm() {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isSubmitting },
  } = useForm<ContactFormData>({
    resolver: zodResolver(contactSchema),
    defaultValues: {
      name: "",
      phone: "",
      email: "",
      requirement: "",
    },
  });

  const onSubmit = async (data: ContactFormData) => {
    // Small delay for UX
    await new Promise((resolve) => setTimeout(resolve, 800));

    // Format WhatsApp message with form data
    const message = `New Enquiry from Website:\nName: ${data.name}\nPhone: ${data.phone}\nEmail: ${data.email || "Not provided"}\nRequirement: ${data.requirement}`;
    const url = formatWhatsAppUrl(message, BUSINESS.whatsappNumber);

    window.open(url, "_blank", "noopener,noreferrer");

    toast({
      title: "Enquiry Submitted!",
      description: "We'll contact you within 2 hours during business hours.",
      type: "success",
    });

    reset();
  };

  return (
    <div className="bg-card rounded-lg shadow-warm p-6 md:p-8">
      <div className="flex items-center gap-2 mb-6">
        <Send className="h-5 w-5 text-primary" aria-hidden="true" />
        <h2 className="text-xl font-semibold text-foreground">
          Send us an Enquiry
        </h2>
      </div>

      <form
        onSubmit={handleSubmit(onSubmit)}
        noValidate
        className="space-y-5"
        aria-label="Contact enquiry form"
      >
        {/* Name */}
        <div className="space-y-1.5">
          <label
            htmlFor="name"
            className="block text-sm font-medium text-foreground"
          >
            Full Name <span aria-label="required">*</span>
          </label>
          <input
            id="name"
            type="text"
            autoComplete="name"
            placeholder="Enter your full name"
            {...register("name")}
            aria-describedby={errors.name ? "name-error" : undefined}
            aria-invalid={!!errors.name}
            className="w-full px-3 py-2.5 bg-background border border-input rounded-md text-sm placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-ring focus:border-transparent transition-colors"
          />
          {errors.name && (
            <p id="name-error" role="alert" className="text-xs text-destructive">
              {errors.name.message}
            </p>
          )}
        </div>

        {/* Phone */}
        <div className="space-y-1.5">
          <label
            htmlFor="phone"
            className="block text-sm font-medium text-foreground"
          >
            Phone Number <span aria-label="required">*</span>
          </label>
          <input
            id="phone"
            type="tel"
            autoComplete="tel"
            placeholder="+91 XXXXX XXXXX"
            {...register("phone")}
            aria-describedby={errors.phone ? "phone-error" : undefined}
            aria-invalid={!!errors.phone}
            className="w-full px-3 py-2.5 bg-background border border-input rounded-md text-sm placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-ring focus:border-transparent transition-colors"
          />
          {errors.phone && (
            <p id="phone-error" role="alert" className="text-xs text-destructive">
              {errors.phone.message}
            </p>
          )}
        </div>

        {/* Email */}
        <div className="space-y-1.5">
          <label
            htmlFor="email"
            className="block text-sm font-medium text-foreground"
          >
            Email Address{" "}
            <span className="text-muted-foreground font-normal">(optional)</span>
          </label>
          <input
            id="email"
            type="email"
            autoComplete="email"
            placeholder="your.email@example.com"
            {...register("email")}
            aria-describedby={errors.email ? "email-error" : undefined}
            aria-invalid={!!errors.email}
            className="w-full px-3 py-2.5 bg-background border border-input rounded-md text-sm placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-ring focus:border-transparent transition-colors"
          />
          {errors.email && (
            <p id="email-error" role="alert" className="text-xs text-destructive">
              {errors.email.message}
            </p>
          )}
        </div>

        {/* Requirement */}
        <div className="space-y-1.5">
          <label
            htmlFor="requirement"
            className="block text-sm font-medium text-foreground"
          >
            Your Requirement <span aria-label="required">*</span>
          </label>
          <textarea
            id="requirement"
            rows={5}
            placeholder="Please describe your commodity requirements, quantity needed, and any specific quality parameters..."
            {...register("requirement")}
            aria-describedby={errors.requirement ? "requirement-error" : undefined}
            aria-invalid={!!errors.requirement}
            className="w-full px-3 py-2.5 bg-background border border-input rounded-md text-sm placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-ring focus:border-transparent transition-colors resize-y min-h-[120px]"
          />
          {errors.requirement && (
            <p
              id="requirement-error"
              role="alert"
              className="text-xs text-destructive"
            >
              {errors.requirement.message}
            </p>
          )}
        </div>

        <button
          type="submit"
          disabled={isSubmitting}
          className="w-full flex items-center justify-center gap-2 bg-primary hover:bg-primary/90 text-primary-foreground font-medium px-6 py-3 rounded-md transition-colors focus:outline-none focus:ring-4 focus:ring-primary/30 disabled:opacity-60 disabled:cursor-not-allowed"
        >
          {isSubmitting ? (
            <>
              <Loader2 className="h-4 w-4 animate-spin" aria-hidden="true" />
              Submitting...
            </>
          ) : (
            <>
              <Send className="h-4 w-4" aria-hidden="true" />
              Submit Enquiry
            </>
          )}
        </button>

        <p className="text-xs text-muted-foreground text-center">
          By submitting this form, you agree to be contacted by our team. Your
          enquiry will open WhatsApp for confirmation.
        </p>
      </form>
    </div>
  );
}
