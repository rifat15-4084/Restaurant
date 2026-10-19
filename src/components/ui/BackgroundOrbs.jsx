/**
 * Slow-moving gradient orbs behind the page content.
 * CSS animations only — automatically neutralised by prefers-reduced-motion.
 */
export default function BackgroundOrbs() {
  return (
    <div
      aria-hidden="true"
      className="pointer-events-none fixed inset-0 -z-10 overflow-hidden"
    >
      <div className="absolute -left-40 top-[-10%] h-[520px] w-[520px] animate-float-slow rounded-full bg-[radial-gradient(circle,rgba(245,181,68,0.16),transparent_65%)] blur-3xl" />
      <div
        className="absolute right-[-15%] top-[35%] h-[460px] w-[460px] animate-float rounded-full bg-[radial-gradient(circle,rgba(61,240,224,0.10),transparent_65%)] blur-3xl"
        style={{ animationDelay: '-2.5s' }}
      />
      <div
        className="absolute bottom-[-10%] left-[25%] h-[420px] w-[420px] animate-float-slow rounded-full bg-[radial-gradient(circle,rgba(245,181,68,0.08),transparent_65%)] blur-3xl"
        style={{ animationDelay: '-5s' }}
      />
    </div>
  );
}
