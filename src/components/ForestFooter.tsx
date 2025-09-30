export const ForestFooter = () => {
  return (
    <footer className="relative z-10 bg-gradient-to-b from-black/60 to-black/80 text-white py-8 mt-12">
      <div className="max-w-4xl mx-auto text-center px-6">
        <div className="bg-black/30 backdrop-blur-sm rounded-2xl shadow-lg p-6 inline-block">
          <p className="text-lg md:text-xl leading-relaxed font-medium">
            Termin wird noch koordiniert – aka: Wir gucken mal in unsere vollen
            Kalender und lachen!
          </p>
        </div>
        <p className="mt-6 text-sm text-white/60">
          © {new Date().getFullYear()} – Made with ❤️ & 2 Gehirnzellen
        </p>
      </div>
    </footer>
  );
};
