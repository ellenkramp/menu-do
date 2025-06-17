export default function Hero() {
  return (
    <section
      className="relative h-64 flex items-center justify-center text-white bg-cover bg-center before:absolute before:inset-0 before:bg-black before:opacity-40 before:content-['']"
      style={{ backgroundImage: "url('/images/restaurant.jpg')" }}
    >
      <div className="relative z-10 text-center">
        <h1 className="text-5xl font-bold font-secondary">Welcome to Bloom Bistro</h1>
        <p className="text-2xl mt-2">Crafted with passion. Served with care.</p>
      </div>
    </section>
  );
}
