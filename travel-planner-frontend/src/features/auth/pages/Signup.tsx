import { Link } from "react-router-dom";
import { AuthLayout } from "../components/AuthLayout";
import { PasswordInput } from "../components/PasswordInput";

export function SignUp() {
  return (
    <AuthLayout
      title="Create account"
      subtitle="Start planning your next trip."
      footer={
        <>
          Already have an account?{" "}
          <Link to="/login" className="text-blue-600 font-medium">
            Log in
          </Link>
        </>
      }
    >
      <form className="space-y-4">
        <div>
          <label
            htmlFor="fullName"
            className="block text-sm font-medium text-gray-700 mb-1.5"
          >
            Full Name
          </label>
          <input
            id="fullName"
            type="text"
            placeholder="Ahmed Al Mansoori"
            className="w-full rounded-xl border border-gray-200 px-4 py-2.5 text-sm placeholder:text-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-600/20 focus:border-blue-600"
          />
        </div>

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

        <button
          type="submit"
          className="w-full bg-blue-600 text-white rounded-xl py-2.5 text-sm font-semibold hover:bg-blue-700 transition-colors"
        >
          Sign Up
        </button>
      </form>
    </AuthLayout>
  );
}
