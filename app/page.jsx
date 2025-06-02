import React from "react";
import "./globals.css";

const HomePage = () => {
  return (
    <div>
      <header>
        <nav>
          <div>
            <h1>Authoring</h1>
          </div>
          <ul>
            <li>
              <a href="#home">Home</a>
            </li>
            <li>
              <a href="#about">About</a>
            </li>
            <li>
              <a href="#features">Features</a>
            </li>
            <li>
              <a href="#contact">Contact</a>
            </li>
          </ul>
        </nav>
      </header>

      <main>
        <section id="hero">
          <h1>Write Your Future with Authoring</h1>
          <p>
            Plan, dream, and create your path forward with our intuitive tools.
          </p>
          <a href="/guide">
            <button>Start Planning</button>
          </a>
        </section>
      </main>

      <footer>
        <p>
          © 2025 Brilliant Keanu. All rights reserved. Made with ❤️ from
          Yogyakarta.
        </p>
      </footer>
    </div>
  );
};

export default HomePage;
