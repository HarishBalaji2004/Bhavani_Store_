/**
 * Rates page disclaimer box
 */
export default function RatesDisclaimer() {
  return (
    <div className="bg-amber-50 dark:bg-amber-950/20 border border-amber-200 dark:border-amber-800/50 rounded-xl p-6">
      <div className="flex gap-3">
        <span className="text-xl flex-shrink-0" aria-hidden="true">⚠️</span>
        <div>
          <h3 className="font-semibold text-foreground mb-1.5">
            Important Disclaimer
          </h3>
          <p className="text-sm text-muted-foreground leading-relaxed">
            The rates displayed are indicative and based on prevailing market
            conditions. Actual prices may vary depending on quality, quantity,
            delivery location, and specific buyer-seller negotiations. Bhavani
            Store serves as a trading facilitator and does not guarantee these
            exact rates. For confirmed pricing and availability, please contact
            us directly.
          </p>
        </div>
      </div>
    </div>
  );
}
