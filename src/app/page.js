"use client";

import { useEffect, useState } from "react";
import { FaGithub, FaLinkedin, FaInstagram } from "react-icons/fa";

export default function Home() {
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);
  }, []);

  return (
    <div className="min-h-screen bg-gray-900 text-white flex flex-col items-center p-4">
      <header className="text-4xl font-bold mt-10">Mihail</header>
      <p className="text-gray-400 mt-2">Java & Unity Developer</p>

      <section className="mt-10 max-w-2xl text-center">
        <h2 className="text-2xl font-semibold">About Me</h2>
        <p className="text-gray-300 mt-2">
          I'm a passionate Java and Unity developer, currently learning Spring and SQL.
          I love working on game development and backend technologies.
        </p>
      </section>

      <section className="mt-10 max-w-2xl text-center">
        <h2 className="text-2xl font-semibold">Projects</h2>
        <div className="mt-4">
          <p className="text-gray-300">- Horror Game "bio" (Unity, C#)</p>
          <p className="text-gray-300">- Java Backend API (Spring Boot, SQL)</p>
        </div>
      </section>

      <section className="mt-10">
        <h2 className="text-2xl font-semibold">Contact</h2>
        {isClient && (
          <div className="flex space-x-4 mt-2">
            <a href="https://github.com/mihailkanev01" target="_blank" className="text-gray-400 hover:text-white">
              <FaGithub size={30} />
            </a>
            <a href="https://www.linkedin.com/in/mihail-kanev/" target="_blank" className="text-gray-400 hover:text-white">
              <FaLinkedin size={30} />
            </a>
            <a href="https://www.instagram.com/_mihail_01/" target="_blank" className="text-gray-400 hover:text-white">
              <FaInstagram size={30} />
            </a>
          </div>
        )}
      </section>
    </div>
  );
}
