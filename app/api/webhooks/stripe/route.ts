import { NextResponse, type NextRequest } from "next/server";

// STRIPE WEBHOOKS DISABLED - Will be re-enabled later

export async function POST(req: NextRequest) {
  return new NextResponse("Stripe webhooks are currently disabled.", { status: 200 });
}
