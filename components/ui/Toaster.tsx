"use client";

import { useEffect, useState } from "react";
import { X, CheckCircle, AlertCircle } from "lucide-react";

type Toast = {
  id: string;
  title: string;
  description?: string;
  type?: "success" | "error" | "info";
};

// Simple global toast store
let toastListeners: ((toast: Toast) => void)[] = [];

export function toast(options: Omit<Toast, "id">) {
  const id = Math.random().toString(36).slice(2);
  const newToast = { ...options, id };
  toastListeners.forEach((listener) => listener(newToast));
}

/**
 * Accessible toast notification system
 */
export function Toaster() {
  const [toasts, setToasts] = useState<Toast[]>([]);

  useEffect(() => {
    const listener = (newToast: Toast) => {
      setToasts((prev) => [...prev, newToast]);
      // Auto-remove after 5 seconds
      setTimeout(() => {
        setToasts((prev) => prev.filter((t) => t.id !== newToast.id));
      }, 5000);
    };

    toastListeners.push(listener);
    return () => {
      toastListeners = toastListeners.filter((l) => l !== listener);
    };
  }, []);

  const removeToast = (id: string) => {
    setToasts((prev) => prev.filter((t) => t.id !== id));
  };

  if (toasts.length === 0) return null;

  return (
    <div
      aria-live="polite"
      aria-label="Notifications"
      className="fixed bottom-6 left-6 z-50 flex flex-col gap-3 max-w-sm"
    >
      {toasts.map((t) => (
        <div
          key={t.id}
          role="alert"
          className="bg-card border border-border rounded-lg shadow-warm p-4 flex items-start gap-3 animate-fade-in"
        >
          {t.type === "error" ? (
            <AlertCircle className="h-5 w-5 text-destructive flex-shrink-0 mt-0.5" />
          ) : (
            <CheckCircle className="h-5 w-5 text-field-green flex-shrink-0 mt-0.5" />
          )}
          <div className="flex-1 min-w-0">
            <p className="font-semibold text-foreground text-sm">{t.title}</p>
            {t.description && (
              <p className="text-muted-foreground text-xs mt-1">{t.description}</p>
            )}
          </div>
          <button
            onClick={() => removeToast(t.id)}
            className="text-muted-foreground hover:text-foreground transition-colors flex-shrink-0"
            aria-label="Dismiss notification"
          >
            <X className="h-4 w-4" />
          </button>
        </div>
      ))}
    </div>
  );
}
