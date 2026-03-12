import { type ClassValue, clsx } from "clsx";
import { twMerge } from "tailwind-merge";

/**
 * Merges Tailwind CSS classes intelligently, resolving conflicts
 */
export function cn(...inputs: ClassValue[]): string {
  return twMerge(clsx(inputs));
}

/**
 * Formats a WhatsApp URL with a pre-filled message
 */
export function formatWhatsAppUrl(message: string, phone = "919360333025"): string {
  return `https://wa.me/${phone}?text=${encodeURIComponent(message)}`;
}

/**
 * Formats a date in Indian locale
 */
export function formatIndianDate(date: Date = new Date()): string {
  return date.toLocaleDateString("en-IN", {
    weekday: "long",
    year: "numeric",
    month: "long",
    day: "numeric",
  });
}

/**
 * Generates a product enquiry WhatsApp message
 */
export function generateProductEnquiry(productName: string): string {
  return `Hello! I'm interested in ${productName}. Please share pricing and availability details.`;
}

/**
 * Slugifies a string for URL usage
 */
export function slugify(text: string): string {
  return text
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/(^-|-$)/g, "");
}

/**
 * Truncates text to a given length
 */
export function truncate(text: string, length: number): string {
  if (text.length <= length) return text;
  return text.slice(0, length).trim() + "...";
}

/**
 * Returns the trend color class based on market trend
 */
export function getTrendColorClass(trend: "up" | "down" | "stable"): string {
  switch (trend) {
    case "up":
      return "text-green-600 dark:text-green-400";
    case "down":
      return "text-red-600 dark:text-red-400";
    default:
      return "text-gray-500 dark:text-gray-400";
  }
}

/**
 * Checks if a URL is external
 */
export function isExternalUrl(url: string): boolean {
  return url.startsWith("http://") || url.startsWith("https://");
}

/**
 * Validates an Indian phone number
 */
export function isValidIndianPhone(phone: string): boolean {
  const cleaned = phone.replace(/[\s\-\(\)]/g, "");
  return /^(\+91|91)?[6-9]\d{9}$/.test(cleaned);
}
