"use client";
import { useState } from "react";

export default function ContactPage() {
  const [status, setStatus] = useState<string | null>(null);

  async function onSubmit(formData: FormData) {
    setStatus(null);
    const res = await fetch("/api/lead", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        name: formData.get("name"),
        email: formData.get("email"),
        company: formData.get("company"),
        message: formData.get("message")
      })
    });
    const json = await res.json();
    setStatus(json.ok ? "Thanks ? we?ll be in touch." : json.error ?? "Something went wrong");
  }

  return (
    <div className="container-balanced py-16 md:py-24">
      <h1 className="text-4xl font-bold tracking-tight text-slate-900">Request Access</h1>
      <p className="mt-4 max-w-2xl text-slate-700">Tell us about your team and current PE/VC program. We?ll enable a pilot inbox and dashboard.</p>

      <form className="mt-10 grid gap-4 max-w-xl" action={onSubmit as any}>
        <input name="name" required placeholder="Name" className="rounded-md border border-slate-300 px-3 py-2" />
        <input name="email" type="email" required placeholder="Email" className="rounded-md border border-slate-300 px-3 py-2" />
        <input name="company" required placeholder="Company" className="rounded-md border border-slate-300 px-3 py-2" />
        <textarea name="message" placeholder="What problems are you solving today?" className="rounded-md border border-slate-300 px-3 py-2" rows={4} />
        <button className="btn-primary" type="submit">Request Access</button>
        {status && <div className="text-sm text-slate-700">{status}</div>}
      </form>
    </div>
  );
}
