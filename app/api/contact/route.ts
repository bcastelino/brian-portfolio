import { NextResponse } from "next/server";

export async function POST(req: Request) {
  const { email, title, message } = await req.json();
  const res = await fetch("https://xqnotdjoaxsgkbriamje.supabase.co/functions/v1/email", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ email, title, message }),
  });

  if (!res.ok) return NextResponse.error();
  return NextResponse.json({ success: true });
}