import { useEffect, useState } from "react";
import forestHeroBg from "@/assets/forest-hero-bg.jpg";

export const ForestHero = () => {
  const [leaves, setLeaves] = useState<
    { id: number; left: string; delay: string; leaf: string }[]
  >([]);

  useEffect(() => {
    const leafTypes = ["🍂", "🍁", "🍃"];
    const particles = Array.from({ length: 25 }).map((_, i) => ({
      id: i,
      left: `${Math.random() * 100}%`,
      delay: `${Math.random() * 5}s`,
      leaf: leafTypes[Math.floor(Math.random() * leafTypes.length)],
    }));
    setLeaves(particles);
  }, []);

  return (
    <header
      className="relative h-screen flex items-center justify-center bg-cover bg-center bg-no-repeat overflow-hidden"
      style={{ backgroundImage: `url(${forestHeroBg})` }}
    >
      {/* Overlay for better text readability */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-black/30 to-black/50"></div>

      {/* Falling Leaves Layer */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        {leaves.map((leaf) => (
          <span
            key={leaf.id}
            className="absolute text-3xl animate-fall"
            style={{
              left: leaf.left,
              animationDelay: leaf.delay,
            }}
          >
            {leaf.leaf}
          </span>
        ))}
      </div>

      {/* Hero Content */}
      <div className="relative z-10 text-center px-4">
        <div className="bg-black/30 backdrop-blur-sm rounded-2xl p-6 md:p-10 max-w-3xl mx-auto shadow-lg">
          <h1
            className="title-forest text-5xl md:text-7xl lg:text-8xl font-extrabold mb-4 animate-fade-in 
                       bg-gradient-to-r from-pink-500 via-yellow-400 via-green-400 via-blue-500 to-purple-600 
                       text-transparent bg-clip-text"
          >
            Happy Birthday!
          </h1>

          <h2
            className="text-white text-xl md:text-2xl font-semibold leading-relaxed animate-fade-in"
            style={{
              animationDelay: "0.5s",
              textShadow: "1px 1px 3px rgba(0,0,0,0.8)",
            }}
          >
            „Ich bin bei Geburtstagen easy – Bastel oder plan was Süßes, wo wir
            zusammen hingehen könnten.“
          </h2>

          <p
            className="mt-4 text-lg md:text-xl text-white/90 animate-fade-in"
            style={{ animationDelay: "1s" }}
          >
            Und damit herzlich Willkommen zu <br />
            <span className="bg-gradient-to-r from-lime-500 to-orange-600 text-transparent bg-clip-text font-bold">
              Tinas Tollem Tag!
            </span>
          </p>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-earth-cream rounded-full flex justify-center">
          <div className="w-1 h-3 bg-earth-cream rounded-full mt-2 animate-pulse"></div>
        </div>
      </div>

      {/* Keyframes for falling leaves */}
      <style>
        {`
          @keyframes fall {
            0% {
              transform: translateY(-10vh) rotate(0deg);
              opacity: 1;
            }
            100% {
              transform: translateY(110vh) rotate(360deg);
              opacity: 0.8;
            }
          }
          .animate-fall {
            animation: fall 10s linear infinite;
          }
        `}
      </style>
    </header>
  );
};
