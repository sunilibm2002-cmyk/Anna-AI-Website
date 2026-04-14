import { NextResponse } from "next/server";
import { createSupabaseAdminClient } from "@/lib/supabase/server";

/**
 * Lead capture endpoint. Replace console with CRM/email provider (HubSpot, Salesforce, etc.).
 */
export async function POST(request: Request) {
  try {
    const body = await request.json();
    const { full_name, email, subject, message } = body ?? {};
    if (!full_name || !email || !message) {
      return NextResponse.json({ ok: false, error: "Missing fields" }, { status: 400 });
    }

    const supabase = createSupabaseAdminClient();
    const { error } = await supabase.from("contact_submissions").insert({
      full_name: String(full_name),
      email: String(email),
      subject: String(subject ?? ""),
      message: String(message),
    });
    if (error) {
      return NextResponse.json({ ok: false, error: error.message }, { status: 500 });
    }

    if (process.env.NODE_ENV === "development") {
      console.info("[contact]", { full_name, email, subject, messageLength: String(message).length });
    }
    return NextResponse.json({ ok: true });
  } catch {
    return NextResponse.json({ ok: false }, { status: 400 });
  }
}

