import Stripe from "stripe";

// STRIPE DISABLED - Will be re-enabled later
export const stripe = new Stripe(process.env.STRIPE_API_SECRET_KEY || "sk_test_disabled", {
  apiVersion: "2026-02-25.clover",
  typescript: true,
});
