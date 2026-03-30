/** Fixed starfield + grid stack used by both product demos. */
export function DemoAmbient() {
  return (
    <div className="pointer-events-none fixed inset-0 -z-10" aria-hidden>
      <div className="cauris-ambient absolute inset-0">
        <div className="cauris-grid" />
        <div className="cauris-starfield animate-twinkle" />
        <div className="cauris-vignette" />
        <div className="cauris-grain" />
      </div>
    </div>
  );
}
