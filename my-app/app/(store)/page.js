import Link from 'next/link';

export default function HomePage() {
  return (
    <main>
      <div
      className="sm:bg-contain md:bg-cover w-full min-h-screen pt-20 bg-cover bg-center bg-no-repeat" style={{ backgroundImage: "url('/bg.jpg')" }}>
      </div>
      {/* CONTENT SECTION */}
      <section className="w-full px-6 py-12 bg-white text-center">
        <h2 className="text-4xl font-georgia text-[#54946C] mb-6">🌻Celebrate every moment with beautiful blooms🌻</h2>
        <p className="text-gray-700 mb-8 text-2xl">
          Discover the freshest and most loved bouquets by our customers.
        </p>

        {/* You can place bouquet cards or images here */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
          <div className="p-4 border rounded-lg shadow">
            <img src="/sunset_bloom.jpg" alt="Bouquet 1" className="w-full h-100 object-cover rounded" />
            <h3 className="mt-4 text-lg font-semibold text-[#54946C]">Sunset Bloom</h3>
          </div>

          <div className="p-4 border rounded-lg shadow">
            <img src="/elegant_roses.jpg" alt="Bouquet 2" className="w-full h-100 object-cover rounded" />
            <h3 className="mt-4 text-lg font-semibold text-[#54946C]">Elegant Roses</h3>
          </div>
          <div className="p-4 border rounded-lg shadow">
            <img src="/tulip.jpg" alt="Bouquet 2" className="w-full h-100 object-cover rounded" />
            <h3 className="mt-4 text-lg font-semibold text-[#54946C]">Tulip Treasures</h3>
          </div>

        </div>
        {/* Shop More Button */}
        <Link href="/shop">
          <button className="mt-10 inline-flex items-center gap-2 px-6 py-3 bg-[#54946C] text-white text-lg font-medium rounded-full group hover:bg-[#3d6d4f] transition duration-300">
            Shop for More
            <span className="ml-1 transition-transform group-hover:translate-x-1 duration-200">
              &rarr;
            </span>
          </button>
        </Link>
      </section>
      
    </main>
    
  );
}
