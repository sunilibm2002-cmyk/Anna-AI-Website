import { NextResponse } from "next/server";
import { createSupabaseAdminClient } from "@/lib/supabase/server";

function unauthorized() {
  return NextResponse.json({ ok: false, error: "Unauthorized" }, { status: 401 });
}

export async function GET(request: Request) {
  const token = request.headers.get("x-admin-token") ?? "";
  const expected = process.env.ADMIN_TOKEN ?? "";

  if (!expected || token !== expected) return unauthorized();

  try {
    const supabase = createSupabaseAdminClient();
    const { data, error } = await supabase
      .from("contact_submissions")
      .select("id, created_at, full_name, email, subject, message, is_read")
      .order("created_at", { ascending: false })
      .limit(500);

    if (error) {
      return NextResponse.json({ ok: false, error: error.message }, { status: 500 });
    }

    return NextResponse.json({ ok: true, items: data ?? [] });
  } catch (err: any) {
    return NextResponse.json({ ok: false, error: err?.message ?? "Failed to read submissions" }, { status: 500 });
  }
}

