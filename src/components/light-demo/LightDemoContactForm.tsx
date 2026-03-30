"use client";

import { useCallback, useState, type FormEvent } from "react";
import { buildBusinessMailto } from "@/data/siteContact";

export function LightDemoContactForm() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  const onSubmit = useCallback(
    (e: FormEvent) => {
      e.preventDefault();
      const body = [
        name.trim() && `Name: ${name.trim()}`,
        email.trim() && `Reply-to: ${email.trim()}`,
        "",
        message.trim() || "(No message provided)",
      ]
        .filter(Boolean)
        .join("\n");

      const href = buildBusinessMailto({
        subject: "SCS Nova — Light demo contact",
        body,
      });
      window.location.href = href;
    },
    [name, email, message]
  );

  const inputClass =
    "w-full rounded-lg border border-neutral-200 bg-white px-4 py-3 text-sm text-neutral-900 shadow-sm outline-none transition-colors placeholder:text-neutral-400 focus:border-blue-300 focus:ring-2 focus:ring-blue-200/60";

  return (
    <form onSubmit={onSubmit} className="mx-auto mt-10 max-w-md space-y-5 text-left">
      <div>
        <label htmlFor="ld-contact-name" className="block text-sm font-medium text-neutral-700">
          Name
        </label>
        <input
          id="ld-contact-name"
          name="name"
          type="text"
          autoComplete="name"
          value={name}
          onChange={(e) => setName(e.target.value)}
          className={`${inputClass} mt-1.5`}
        />
      </div>
      <div>
        <label htmlFor="ld-contact-email" className="block text-sm font-medium text-neutral-700">
          Email
        </label>
        <input
          id="ld-contact-email"
          name="email"
          type="email"
          autoComplete="email"
          inputMode="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className={`${inputClass} mt-1.5`}
        />
      </div>
      <div>
        <label htmlFor="ld-contact-message" className="block text-sm font-medium text-neutral-700">
          Message
        </label>
        <textarea
          id="ld-contact-message"
          name="message"
          rows={4}
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          className={`${inputClass} mt-1.5 resize-y min-h-[7.5rem]`}
        />
      </div>
      <button
        type="submit"
        className="w-full min-h-12 rounded-lg bg-blue-600 px-6 text-sm font-semibold text-white shadow-sm transition-colors hover:bg-blue-700 focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-offset-2 focus-visible:ring-offset-sky-50"
      >
        Send message
      </button>
      <p className="text-center text-xs leading-relaxed text-neutral-500">
        Opens your email app with this note filled in — add or edit before sending.
      </p>
    </form>
  );
}
