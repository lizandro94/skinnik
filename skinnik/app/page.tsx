export default function Home() {
  return (
    <div className="relative min-h-screen overflow-hidden bg-black text-white">
      <video
        className="absolute inset-0 h-full w-full object-cover"
        src="/intro.mp4"
        autoPlay
        muted
        loop
        playsInline
      />

      <div className="absolute inset-0 bg-black/50" />

      <main className="relative z-10 flex min-h-screen items-center justify-center px-6 py-24">
        <div className="max-w-3xl text-center">
          <p className="mb-4 uppercase tracking-[0.35em] text-sm text-zinc-200/80">
            Skincare made simple
          </p>
          <h1 className="mx-auto max-w-3xl text-5xl font-semibold leading-tight tracking-tight sm:text-6xl">
            Glow with confidence.
          </h1>
          <p className="mx-auto mt-6 max-w-2xl text-lg leading-8 text-zinc-200/90">
            Discover clean, effective skincare designed for every skin type. Nourish your glow with gentle formulas and natural ingredients.
          </p>
          <div className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row">
            <a
              href="#"
              className="inline-flex rounded-full bg-white px-8 py-4 text-sm font-semibold text-black transition hover:bg-zinc-100"
            >
              Shop now
            </a>
            <a
              href="#"
              className="inline-flex rounded-full border border-white/40 px-8 py-4 text-sm font-semibold text-white transition hover:border-white hover:bg-white/10"
            >
              Learn more
            </a>
          </div>
        </div>
      </main>
    </div>
  );
}
