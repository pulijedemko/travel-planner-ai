import { getToken } from "./auth";

const API_URL = import.meta.env.VITE_API_URL ?? "http://localhost:3000";

interface ApiErrorBody {
  message?: string;
}

export async function apiFetch<T>(
  path: string,
  options: RequestInit = {},
): Promise<T> {
  const token = getToken();

  let response: Response;
  try {
    response = await fetch(`${API_URL}${path}`, {
      ...options,
      headers: {
        "Content-Type": "application/json",
        ...(token ? { Authorization: `Bearer ${token}` } : {}),
        ...options.headers,
      },
    });
  } catch {
    throw new Error("Unable to reach the server. Please try again later.");
  }

  const text = await response.text();
  let data: (T & ApiErrorBody) | null = null;
  if (text) {
    try {
      data = JSON.parse(text) as T & ApiErrorBody;
    } catch {
      data = null;
    }
  }

  if (!response.ok) {
    throw new Error(data?.message ?? "Something went wrong");
  }

  return data as T;
}
