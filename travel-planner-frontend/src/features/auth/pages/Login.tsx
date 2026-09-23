import { useState } from "react";
import { Link } from "react-router-dom";
import { AuthLayout } from "../components/AuthLayout";
import { PasswordInput } from "../components/PasswordInput";

export function Login() {
  const [rememberMe, setRememberMe] = useState(false);

  return (
    <AuthLayout
      title="Welcome back!"
      subtitle="Log in to continue your adventures."
      footer={
        <>
          Don&apos;t have an account?{" "}
          <Link to="/signup" className="text-blue-600 font-medium">
            Sign up
          </Link>
        </>
      }
    >
      <form className="space-y-4">
        <div>
          <label
            htmlFor="email"
            className="block text-sm font-medium text-gray-700 mb-1.5"
          >
            Email
          </label>
          <input
            id="email"
            type="email"
            placeholder="you@example.com"
            className="w-full rounded-xl border border-gray-200 px-4 py-2.5 text-sm placeholder:text-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-600/20 focus:border-blue-600"
          />
        </div>

        <PasswordInput id="password" label="Password" placeholder="••••••••" />

        <div className="flex items-center justify-between text-sm">
          <label className="flex items-center gap-2 text-gray-600 cursor-pointer">
            <input
              type="checkbox"
              checked={rememberMe}
              onChange={(e) => setRememberMe(e.target.checked)}
              className="rounded border-gray-300 text-blue-600 focus:ring-blue-600/20"
            />
            Remember me
          </label>
          <Link to="/forgot-password" className="text-blue-600 font-medium">
            Forgot password?
          </Link>
        </div>

        <button
          type="submit"
          className="w-full bg-blue-600 text-white rounded-xl py-2.5 text-sm font-semibold hover:bg-blue-700 transition-colors"
        >
          Log In
        </button>
      </form>
    </AuthLayout>
  );
}
