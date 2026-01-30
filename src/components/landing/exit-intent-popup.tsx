"use client";

import { useCallback, useEffect, useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";

const STORAGE_KEY = "dammyola-exit-popup-seen";

export function ExitIntentPopup() {
  const [open, setOpen] = useState(false);
  const [email, setEmail] = useState("");
  const [name, setName] = useState("");

  const handleExitIntent = useCallback((e: MouseEvent) => {
    if (e.clientY <= 0 && typeof window !== "undefined") {
      try {
        const seen = sessionStorage.getItem(STORAGE_KEY);
        if (!seen) {
          setOpen(true);
          sessionStorage.setItem(STORAGE_KEY, "1");
        }
      } catch {
        setOpen(true);
      }
    }
  }, []);

  useEffect(() => {
    document.addEventListener("mouseout", handleExitIntent);
    return () => document.removeEventListener("mouseout", handleExitIntent);
  }, [handleExitIntent]);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!email.trim()) return;
    window.location.href = "#download";
    setOpen(false);
  };

  const handleClose = () => setOpen(false);

  if (!open) return null;

  return (
    <div
      className="fixed inset-0 z-[100] flex items-center justify-center p-4"
      role="dialog"
      aria-modal="true"
      aria-labelledby="exit-popup-title"
      aria-describedby="exit-popup-desc"
    >
      <div
        className="absolute inset-0 bg-black/50 backdrop-blur-sm"
        onClick={handleClose}
        onKeyDown={(e) => e.key === "Escape" && handleClose()}
        tabIndex={-1}
        aria-hidden
      />
      <div className="relative z-10 w-full max-w-md rounded-lg border border-border bg-card p-6 shadow-lg">
        <h2 id="exit-popup-title" className="text-xl font-semibold text-foreground">
          Get Our Free Product Brief Template
        </h2>
        <p id="exit-popup-desc" className="mt-2 text-sm text-muted-foreground">
          Before you hire a developer, you need a clear product brief. Download
          our template and learn what to include (and what to skip).
        </p>
        <form onSubmit={handleSubmit} className="mt-6 space-y-4">
          <div>
            <Label htmlFor="exit-popup-email">Email address</Label>
            <Input
              id="exit-popup-email"
              type="email"
              required
              placeholder="you@example.com"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="mt-1.5"
            />
          </div>
          <div>
            <Label htmlFor="exit-popup-name">Name (optional)</Label>
            <Input
              id="exit-popup-name"
              type="text"
              placeholder="Your name"
              value={name}
              onChange={(e) => setName(e.target.value)}
              className="mt-1.5"
            />
          </div>
          <div className="flex gap-2 pt-2">
            <Button type="submit" size="lg" className="flex-1">
              Download Free Template
            </Button>
            <Button
              type="button"
              variant="outline"
              size="lg"
              onClick={handleClose}
            >
              Close
            </Button>
          </div>
        </form>
      </div>
    </div>
  );
}
