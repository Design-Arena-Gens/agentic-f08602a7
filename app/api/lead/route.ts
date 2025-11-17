import { NextResponse } from "next/server";

export async function POST(req: Request) {
  try {
    const contentType = req.headers.get("content-type") || "";
    let body: any;
    if (contentType.includes("application/json")) {
      body = await req.json();
    } else {
      const formData = await req.formData();
      body = Object.fromEntries(formData.entries());
    }

    const name = String(body.name || "").slice(0, 200);
    const email = String(body.email || "").slice(0, 200);
    const company = String(body.company || "").slice(0, 200);
    const message = String(body.message || "").slice(0, 4000);

    if (!email || !email.includes("@")) {
      return NextResponse.json({ ok: false, error: "Valid email required" }, { status: 400 });
    }

    // Placeholder: In production, send to CRM/email or persist securely
    console.log("Lead:", { name, email, company, message, at: new Date().toISOString() });

    return NextResponse.json({ ok: true });
  } catch (err) {
    return NextResponse.json({ ok: false, error: "Unexpected error" }, { status: 500 });
  }
}

export async function GET() {
  return NextResponse.json({ ok: true });
}
