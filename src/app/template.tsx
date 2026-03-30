/**
 * Remounts on client navigations — enables a single restrained entry motion
 * via `.cauris-route-enter` in globals.css (see motion tokens on :root).
 */
export default function Template({ children }: { children: React.ReactNode }) {
  return <div className="cauris-route-enter min-h-0">{children}</div>;
}
