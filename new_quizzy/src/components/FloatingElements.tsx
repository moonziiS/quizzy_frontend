export const FloatingElements = () => {
  return (
    <div className="fixed inset-0 pointer-events-none overflow-hidden z-0">
      {/* Floating bubbles */}
      <div className="absolute top-10 left-10 w-16 h-16 rounded-full bg-primary/20 animate-float" style={{ animationDelay: "0s" }} />
      <div className="absolute top-32 right-20 w-12 h-12 rounded-full bg-secondary/20 animate-float" style={{ animationDelay: "1s" }} />
      <div className="absolute bottom-20 left-32 w-20 h-20 rounded-full bg-accent/20 animate-float" style={{ animationDelay: "2s" }} />
      <div className="absolute bottom-40 right-40 w-14 h-14 rounded-full bg-warning/20 animate-float" style={{ animationDelay: "1.5s" }} />
      <div className="absolute top-1/2 left-1/4 w-10 h-10 rounded-full bg-info/20 animate-float" style={{ animationDelay: "0.5s" }} />
      
      {/* Stars */}
      <div className="absolute top-20 right-32 text-2xl animate-pulse" style={{ animationDelay: "0s" }}>⭐</div>
      <div className="absolute top-1/3 left-1/3 text-xl animate-pulse" style={{ animationDelay: "1s" }}>✨</div>
      <div className="absolute bottom-1/4 right-1/4 text-2xl animate-pulse" style={{ animationDelay: "2s" }}>🌟</div>
    </div>
  );
};
