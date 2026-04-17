"use client";

import { useCallback, useState, type FormEvent } from "react";
import { buildLightDemoMailto } from "@/data/lightDemoConcept";

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

      const href = buildLightDemoMailto({
        subject: "SCS Nova — Coworking redesign concept inquiry",
        body,
      });
      window.location.href = href;
    },
    [name, email, message]
  );

  const inputClass =
    "w-full rounded-xl border border-neutral-200/90 bg-white px-4 py-3 text-sm text-neutral-900 shadow-sm outline-none ring-1 ring-neutral-100/80 transition-colors placeholder:text-neutral-400 focus:border-blue-300 focus:ring-2 focus:ring-blue-200/60";

  return (
    <form onSubmit={onSubmit} className="mx-auto max-w-md space-y-5 text-left sm:mx-0 lg:max-w-none">
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
        className="w-full min-h-12 rounded-xl bg-blue-600 px-6 text-sm font-semibold text-white shadow-[0_4px_20px_rgba(37,99,235,0.22)] transition-all hover:bg-blue-700 hover:shadow-[0_6px_28px_rgba(37,99,235,0.3)] focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-offset-2 focus-visible:ring-offset-white"
      >
        Send message
      </button>
      <p className="text-center text-xs leading-relaxed text-neutral-600">
        Opens your email app with this note filled in — add or edit before sending.
      </p>
    </form>
  );
}
