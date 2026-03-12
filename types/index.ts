// Shared TypeScript types for the Bhavani Store application

export interface Product {
  name: string;
  image: string;
  description: string;
  category: string;
  quality: string;
  keywords: string;
  slug: string;
}

export interface Rate {
  commodity: string;
  variety: string;
  unit: string;
  currentRate: string;
  yesterdayRate: string;
  trend: "up" | "down" | "stable";
  quality: string;
}

export interface Testimonial {
  name: string;
  location: string;
  content: string;
  rating: number;
}

export interface FAQ {
  question: string;
  answer: string;
  category: string;
}

export interface ContactInfo {
  icon: string;
  title: string;
  details: string[];
  action: string;
  isExternal: boolean;
}

export interface NavItem {
  href: string;
  label: string;
}

export interface Stat {
  number: string;
  label: string;
  description?: string;
}

export interface ValueCard {
  icon: string;
  title: string;
  description: string;
}
