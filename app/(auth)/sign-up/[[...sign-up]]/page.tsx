import Link from "next/link";
import { Button } from "@/components/ui/button";

const SignUpPage = () => {
  return (
    <div className="flex min-h-screen flex-col items-center justify-center bg-gradient-to-b from-blue-50 to-white p-4">
      <div className="w-full max-w-md space-y-8">
        {/* Header */}
        <div className="text-center space-y-2">
          <h1 className="text-3xl font-bold text-neutral-900">Get Started</h1>
          <p className="text-neutral-600">Create an account and start mastering financial literacy</p>
        </div>

        {/* Form */}
        <div className="space-y-4 rounded-lg border border-neutral-200 bg-white p-6 shadow-sm">
          <div className="space-y-2">
            <label className="text-sm font-medium text-neutral-700">Full Name</label>
            <input
              type="text"
              placeholder="Your Name"
              className="w-full rounded-md border border-neutral-300 px-4 py-2 text-sm focus:border-blue-500 focus:outline-none"
            />
          </div>

          <div className="space-y-2">
            <label className="text-sm font-medium text-neutral-700">Email</label>
            <input
              type="email"
              placeholder="you@example.com"
              className="w-full rounded-md border border-neutral-300 px-4 py-2 text-sm focus:border-blue-500 focus:outline-none"
            />
          </div>

          <div className="space-y-2">
            <label className="text-sm font-medium text-neutral-700">Password</label>
            <input
              type="password"
              placeholder="••••••••"
              className="w-full rounded-md border border-neutral-300 px-4 py-2 text-sm focus:border-blue-500 focus:outline-none"
            />
          </div>

          <div className="text-xs text-neutral-600">
            By signing up, you agree to our Terms of Service and Privacy Policy.
          </div>

          <Button size="lg" className="w-full bg-blue-500 hover:bg-blue-600" asChild>
            <Link href="/learn">Create Account</Link>
          </Button>
        </div>

        {/* Footer */}
        <div className="text-center space-y-2">
          <p className="text-sm text-neutral-600">
            Already have an account?{" "}
            <Link href="/sign-in" className="font-semibold text-purple-600 hover:text-purple-700">
              Sign in
            </Link>
          </p>
          <p className="text-xs text-neutral-500">
            <Link href="/learn" className="text-purple-600 hover:text-purple-700">
              Continue without creating an account
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
};

export default SignUpPage;
