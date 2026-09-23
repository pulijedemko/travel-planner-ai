import { Plane } from "lucide-react";
import type { ReactNode } from "react";

interface AuthLayoutProps {
  title: string;
  subtitle: string;
  children: ReactNode;
  footer: ReactNode;
}

export function AuthLayout({
  title,
  subtitle,
  children,
  footer,
}: AuthLayoutProps) {
  return (
    <div className="min-h-screen bg-slate-50 flex items-center justify-center p-4">
      <div className="w-full max-w-sm bg-white rounded-3xl shadow-sm border border-gray-100 p-8">
        <div className="flex items-center gap-2 mb-8">
          <div className="w-9 h-9 rounded-xl bg-blue-600 flex items-center justify-center">
            <Plane size={18} className="text-white" />
          </div>
          <span className="font-bold text-gray-900">
            Travel Planner <span className="text-blue-600">AI</span>
          </span>
        </div>

        <h1 className="text-2xl font-bold text-gray-900">{title}</h1>
        <p className="text-sm text-gray-500 mt-1 mb-6">{subtitle}</p>

        {children}

        <p className="text-sm text-gray-500 text-center mt-6">{footer}</p>
      </div>
    </div>
  );
}
