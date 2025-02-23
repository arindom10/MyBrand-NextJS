import Link from "next/link";

interface SingleCard {
  image: string;
  name: string;
  description?: string;
  price?: number;
  id: number;
  isVisible?: boolean;
}

const fajkeData: SingleCard[] = [
  {
    image: "",
    name: "",
    id: 333,
  },
];
export default function Home() {
  return (
    <div className="min-h-screen bg-gray-100 dark:bg-gray-900 text-gray-900 dark:text-white">
      {/* Hero Section */}
      <section className="flex flex-col items-center justify-center text-center py-20 px-6">
        <h1 className="text-5xl font-bold mb-4">Welcome to Our Next.js Site</h1>
        <p className="text-lg text-gray-600 dark:text-gray-300 max-w-2xl">
          Explore the best features, modern design, and seamless performance.
        </p>
        <div className="mt-6 flex space-x-4">
          <Link href="/about">
            <button className="px-6 py-3 bg-blue-600 text-white rounded-lg shadow-lg hover:bg-blue-500 transition">
              Learn More
            </button>
          </Link>
          <Link href="/shop">
            <button className="px-6 py-3 border border-gray-600 dark:border-gray-300 rounded-lg hover:bg-gray-200 dark:hover:bg-gray-700 transition">
              Shop Now
            </button>
          </Link>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 px-6 bg-white dark:bg-gray-800">
        <div className="max-w-6xl mx-auto text-center">
          <h2 className="text-3xl font-semibold">Why Choose Us?</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-10">
            {[
              {
                title: "Fast Performance",
                desc: "Optimized for speed and efficiency.",
              },
              { title: "Modern UI", desc: "Beautiful and intuitive design." },
              {
                title: "SEO Optimized",
                desc: "Rank higher with SEO-friendly structure.",
              },
            ].map((feature, index) => (
              <div
                key={index}
                className="p-6 bg-gray-100 dark:bg-gray-700 rounded-lg shadow-lg"
              >
                <h3 className="text-xl font-semibold">{feature.title}</h3>
                <p className="mt-2 text-gray-600 dark:text-gray-300">
                  {feature.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>
      {/* Features Section */}
      <section className="py-20 px-6 bg-white dark:bg-gray-800">
        <div className="max-w-6xl mx-auto text-center">
          <h2 className="text-3xl font-semibold">Why Choose Us?</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-10">
            {fajkeData.map((feature: SingleCard, index) => (
              <div
                key={index}
                className="p-6 bg-gray-100 dark:bg-gray-700 rounded-lg shadow-lg"
              >
                <h3 className="text-xl font-semibold">{feature.name}</h3>
                <p className="mt-2 text-gray-600 dark:text-gray-300">
                  {feature.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-20 px-6 text-center">
        <h2 className="text-3xl font-semibold">Get Started Today</h2>
        <p className="text-lg text-gray-600 dark:text-gray-300 mt-2">
          Join us and experience the best.
        </p>
        <Link href="/contact">
          <button className="mt-6 px-6 py-3 bg-green-600 text-white rounded-lg shadow-lg hover:bg-green-500 transition">
            Contact Us
          </button>
        </Link>
      </section>
    </div>
  );
}
