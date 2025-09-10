import React from "react";

export default function Hero() {
  return (
    <section className="relative flex items-center justify-center min-h-screen bg-gradient-to-b from-gray-100 to-white">
      {/* Main Content */}
      <div className="text-center max-w-2xl px-6">
        <div className="flex h-[300px] justify-center">
          <img
            className="border rounded-full"
            src="../src/assets/profile-img.jpg"
          />
        </div>
        <h1 className="text-4xl md:text-5xl font-extrabold text-gray-900 mb-4">
          HEY, I'M BINUTIRI HABIB
        </h1>
        <p className="text-lg text-gray-600 mb-8">
          A Result-Oriented Web Developer building and managing Websites and Web
          Applications that leads to the success of the overall product
        </p>
        <a
          href="#projects"
          className="px-6 py-3 bg-blue-900 text-white font-semibold rounded-lg shadow hover:bg-blue-500 transition"
        >
          PROJECTS
        </a>
      </div>
    </section>
  );
}
