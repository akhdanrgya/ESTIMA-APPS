"use client";
import { useState } from "react";
import { authClient } from "@/lib/auth-client";
import { Button } from "@/components/ui/button";
export function LogoutButton() {
  const [pending, setPending] = useState(false);
  const [error, setError] = useState(false);
  async function logout() {
    setPending(true); setError(false);
    try {
      const result = await authClient.signOut();
      if (result.error) throw new Error("Sign out failed");
      // Clear the in-memory router and query caches when the session ends.
      // eslint-disable-next-line @next/next/no-location-assign-relative-destination
      window.location.assign("/login");
    } catch { setError(true); setPending(false); }
  }
  return <div><Button variant="outline" size="sm" onClick={logout} disabled={pending}>{pending ? "Signing out…" : "Sign out"}</Button>{error && <p role="alert" className="mt-1 text-xs text-red-700">Could not sign out. Try again.</p>}</div>;
}
