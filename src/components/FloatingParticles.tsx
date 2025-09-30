export const FloatingParticles = () => {
  const leaves = Array.from({ length: 12 }, (_, i) => ({
    id: i,
    delay: `${i * 0.5}s`,
    duration: `${6 + (i % 3)}s`,
    left: `${10 + (i * 7)}%`,
    size: 12 + (i % 8)
  }));

  return (
    <div className="absolute inset-0 pointer-events-none overflow-hidden">
      {leaves.map((leaf) => (
        <div
          key={leaf.id}
          className="floating-leaf absolute opacity-30"
          style={{
            left: leaf.left,
            top: `${10 + (leaf.id % 5) * 15}%`,
            animationDelay: leaf.delay,
            animationDuration: leaf.duration,
            fontSize: `${leaf.size}px`
          }}
        >
          🍃
        </div>
      ))}
      
      {/* Additional decorative elements */}
      <div className="absolute top-20 right-10 text-2xl opacity-20 floating-leaf" style={{animationDelay: '2s'}}>
        🦋
      </div>
      <div className="absolute top-40 left-8 text-xl opacity-25 floating-leaf" style={{animationDelay: '4s'}}>
        🌿
      </div>
      <div className="absolute bottom-40 right-16 text-lg opacity-20 floating-leaf" style={{animationDelay: '1s'}}>
        🍂
      </div>
    </div>
  );
};