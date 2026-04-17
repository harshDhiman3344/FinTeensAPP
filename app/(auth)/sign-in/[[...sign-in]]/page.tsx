import Link from "next/link";
import { Button } from "@/components/ui/button";

const SignInPage = () => {
  return (
    <div className="flex min-h-screen flex-col items-center justify-center bg-gradient-to-b from-purple-50 to-white p-4">
      <div className="w-full max-w-md space-y-8">
        {/* Header */}
        <div className="text-center space-y-2">
          <h1 className="text-3xl font-bold text-neutral-900">Welcome Back</h1>
          <p className="text-neutral-600">Sign in to continue your financial learning journey</p>
        </div>

        {/* Form */}
        <div className="space-y-4 rounded-lg border border-neutral-200 bg-white p-6 shadow-sm">
          <div className="space-y-2">
            <label className="text-sm font-medium text-neutral-700">Email</label>
            <input
              type="email"
              placeholder="you@example.com"
              className="w-full rounded-md border border-neutral-300 px-4 py-2 text-sm focus:border-green-500 focus:outline-none"
            />
          </div>

          <div className="space-y-2">
            <label className="text-sm font-medium text-neutral-700">Password</label>
            <input
              type="password"
              placeholder="••••••••"
              className=\"w-full rounded-md border border-neutral-300 px-4 py-2 text-sm focus:border-purple-500 focus:outline-none\"
            />
          </div>

          <Button size="lg" className="w-full bg-purple-500 hover:bg-purple-600" asChild>
            <Link href="/learn">Sign In</Link>
          </Button>
        </div>

        {/* Footer */}
        <div className="text-center space-y-2">
          <p className="text-sm text-neutral-600">
            Don't have an account?{" "}
            <Link href="/sign-up" className="font-semibold text-purple-600 hover:text-purple-700">
              Sign up
            </Link>
          </p>
          <p className="text-xs text-neutral-500">
            <Link href="/learn" className="text-purple-600 hover:text-purple-700">
              Continue without signing in
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
};

export default SignInPage;
