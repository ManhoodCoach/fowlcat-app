export function getReferrer(): string | null {
  if (typeof window === "undefined") return null;
  const url = new URL(window.location.href);
  const ref = url.searchParams.get("ref");
  if (ref) {
    try { localStorage.setItem("fowlcat_ref", ref); } catch {}
    return ref;
  }
  try { return localStorage.getItem("fowlcat_ref"); } catch { return null; }
}
