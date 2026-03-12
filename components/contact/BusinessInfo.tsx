import { Clock, MapPin, FileText } from "lucide-react";
import { BUSINESS } from "@/lib/data";

/**
 * Business hours, GST info, and embedded map.
 * Updated with the real Google Maps URL for Bhavani Store.
 */
export default function BusinessInfo() {
  return (
    <div className="space-y-5">
      {/* Business Hours */}
      <div className="bg-card rounded-2xl shadow-soft border border-border p-6">
        <div className="flex items-center gap-2.5 mb-5">
          <div className="w-8 h-8 bg-primary/10 rounded-lg flex items-center justify-center">
            <Clock className="h-4 w-4 text-primary" aria-hidden="true" />
          </div>
          <h2 className="font-bold text-foreground">Business Hours</h2>
        </div>
        <dl className="space-y-3">
          {[
            { day: "Monday – Friday", hours: BUSINESS.hours.weekdays },
            { day: "Saturday", hours: BUSINESS.hours.saturday },
            { day: "Sunday", hours: BUSINESS.hours.sunday },
          ].map((item, i) => (
            <div
              key={i}
              className="flex justify-between items-center text-sm py-1 border-b border-border/50 last:border-0"
            >
              <dt className="text-muted-foreground">{item.day}</dt>
              <dd
                className={`font-semibold ${
                  item.hours === "Closed"
                    ? "text-red-500 dark:text-red-400"
                    : "text-foreground"
                }`}
              >
                {item.hours}
              </dd>
            </div>
          ))}
          <div className="flex justify-between items-center text-sm pt-2">
            <dt className="text-muted-foreground">WhatsApp Support</dt>
            <dd className="font-bold text-green-600 dark:text-green-400">
              {BUSINESS.hours.whatsapp}
            </dd>
          </div>
        </dl>
      </div>

      {/* GST & Legal Info */}
      <div className="bg-card rounded-2xl shadow-soft border border-border p-6">
        <div className="flex items-center gap-2.5 mb-5">
          <div className="w-8 h-8 bg-harvest-gold/10 rounded-lg flex items-center justify-center">
            <FileText className="h-4 w-4 text-harvest-gold" aria-hidden="true" />
          </div>
          <h2 className="font-bold text-foreground">GST &amp; Legal Info</h2>
        </div>
        <dl className="space-y-2.5 text-sm">
          {[
            { term: "GST Number", def: BUSINESS.gst },
            { term: "Business Type", def: "Agricultural Commodity Trading" },
            { term: "Established", def: `${BUSINESS.established} (50 Years)` },
            { term: "Location", def: `${BUSINESS.address.city}, ${BUSINESS.address.state}` },
          ].map((item, i) => (
            <div key={i} className="flex gap-2 items-baseline">
              <dt className="text-muted-foreground min-w-0 flex-shrink-0">
                {item.term}:
              </dt>
              <dd className="font-semibold text-foreground truncate">{item.def}</dd>
            </div>
          ))}
        </dl>
      </div>

      {/* Embedded Map */}
      <div className="bg-card rounded-2xl shadow-soft border border-border overflow-hidden">
        <div className="px-6 pt-5 pb-4 flex items-center gap-2.5">
          <div className="w-8 h-8 bg-red-50 dark:bg-red-950/30 rounded-lg flex items-center justify-center">
            <MapPin className="h-4 w-4 text-red-500" aria-hidden="true" />
          </div>
          <h2 className="font-bold text-foreground">Our Location</h2>
        </div>

        {/* Map embed */}
        <div className="relative aspect-video">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3929.2967!2d78.3456!3d9.5839!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zOcKwMzUnMDIuMCJOIDc4wrAyMCc0NC4wIkU!5e0!3m2!1sen!2sin!4v1700000000000!5m2!1sen!2sin"
            width="100%"
            height="100%"
            className="absolute inset-0"
            style={{ border: 0 }}
            allowFullScreen
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            title="Bhavani Store Location – Paramakudi, Tamil Nadu"
          />
        </div>

        <div className="px-6 py-4">
          <a
            href={BUSINESS.mapsUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 text-sm font-medium bg-red-50 dark:bg-red-950/30 hover:bg-red-100 dark:hover:bg-red-900/40 text-red-600 dark:text-red-400 px-4 py-2 rounded-lg transition-colors focus:outline-none focus:ring-2 focus:ring-red-500/30 w-full justify-center"
          >
            <MapPin className="h-4 w-4" aria-hidden="true" />
            Open in Google Maps
          </a>
        </div>
      </div>
    </div>
  );
}
