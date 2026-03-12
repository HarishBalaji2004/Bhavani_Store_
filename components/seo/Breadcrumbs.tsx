import Link from "next/link";
import { ChevronRight, Home } from "lucide-react";

interface BreadcrumbItem {
  label: string;
  href?: string;
}

interface BreadcrumbsProps {
  items: BreadcrumbItem[];
}

/**
 * Accessible breadcrumb navigation with structured data markup
 */
export default function Breadcrumbs({ items }: BreadcrumbsProps) {
  return (
    <nav aria-label="Breadcrumb" className="flex items-center gap-1 text-sm text-muted-foreground">
      <Link
        href="/"
        className="flex items-center gap-1 hover:text-foreground transition-colors focus:outline-none focus:text-foreground"
        aria-label="Home"
      >
        <Home className="h-4 w-4" aria-hidden="true" />
      </Link>

      {items.map((item, index) => (
        <span key={index} className="flex items-center gap-1">
          <ChevronRight className="h-4 w-4 flex-shrink-0" aria-hidden="true" />
          {item.href && index < items.length - 1 ? (
            <Link
              href={item.href}
              className="hover:text-foreground transition-colors focus:outline-none focus:text-foreground"
            >
              {item.label}
            </Link>
          ) : (
            <span
              className="text-foreground font-medium"
              aria-current={index === items.length - 1 ? "page" : undefined}
            >
              {item.label}
            </span>
          )}
        </span>
      ))}
    </nav>
  );
}
