import React from "react";
import "./globals.css";
import Link from "next/link";

const HomePage = () => {
  return (
    <main className="min-h-screen bg-gray-50">
      <header className="bg-white shadow-sm">
        <nav className="container mx-auto flex items-center justify-between px-4 py-4">
          <div className="logo">
            <h1 className="text-2xl font-bold text-indigo-600">Authoring</h1>
          </div>
          <ul className="flex space-x-6">
            <li>
              <a href="#home" className="text-gray-600 hover:text-indigo-600">
                Home
              </a>
            </li>
            <li>
              <a href="#about" className="text-gray-600 hover:text-indigo-600">
                About
              </a>
            </li>
            <li>
              <a
                href="#features"
                className="text-gray-600 hover:text-indigo-600"
              >
                Features
              </a>
            </li>
            <li>
              <a
                href="#contact"
                className="text-gray-600 hover:text-indigo-600"
              >
                Contact
              </a>
            </li>
          </ul>
        </nav>
      </header>

      <section id="hero" className="container mx-auto px-4 py-16 text-center">
        <h1 className="mb-4 text-4xl font-bold text-gray-800 md:text-5xl">
          Write Your Future with Authoring
        </h1>
        <p className="mb-6 text-lg text-gray-600">
          Plan, dream, and create your path forward with our intuitive tools.
        </p>
        <Link href="/guide">
          {" "}
          <button className="focus:ring-opacity-50 inline-block rounded-md bg-indigo-600 px-6 py-3 text-white transition hover:bg-indigo-700 focus:ring-2 focus:ring-indigo-500 focus:outline-none">
            Start Planning
          </button>
        </Link>
      </section>

      <section id="about" className="container mx-auto px-4 py-12">
        <h2 className="mb-6 text-center text-3xl font-semibold text-gray-800">
          About Authoring
        </h2>
        <p className="mx-auto max-w-2xl text-center text-gray-600">
          Authoring is your space to craft a vision for your future. Whether
          it's setting goals, tracking progress, or exploring possibilities,
          we're here to help you shape your story.
        </p>
      </section>

      <section id="features" className="container mx-auto px-4 py-12">
        <h2 className="mb-8 text-center text-3xl font-semibold text-gray-800">
          What You Can Do
        </h2>
        <div className="grid grid-cols-1 gap-8 md:grid-cols-2">
          <div className="rounded-lg bg-white p-6 shadow-sm">
            <h3 className="mb-2 text-xl font-semibold text-gray-800">
              Goal Setting
            </h3>
            <p className="text-gray-600">
              Define and track your personal and professional goals with ease.
            </p>
          </div>
          <div className="rounded-lg bg-white p-6 shadow-sm">
            <h3 className="mb-2 text-xl font-semibold text-gray-800">
              Timeline Planning
            </h3>
            <p className="text-gray-600">
              Visualize your future with customizable timelines and milestones.
            </p>
          </div>
        </div>
      </section>

      <footer className="bg-gray-800 py-6 text-center text-white">
        <p>
          © 2025 Brilliant Keanu. All rights reserved. Made with ❤️ from
          Yogyakarta .
        </p>
      </footer>
    </main>
  );
};

export default HomePage;
