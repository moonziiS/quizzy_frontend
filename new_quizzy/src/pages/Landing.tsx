import { Button } from "@/components/ui/button";
import { Mascot } from "@/components/Mascot";
import { MusicToggle } from "@/components/MusicToggle";
import { FloatingElements } from "@/components/FloatingElements";
import { useNavigate } from "react-router-dom";
import { Mail, Instagram, Facebook, Twitter } from "lucide-react";

const Landing = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen relative overflow-hidden">
      <FloatingElements />
      <MusicToggle />
      
      <div className="relative z-10 flex flex-col items-center justify-center min-h-screen px-4">
        {/* Mascot */}
        <div className="mb-8 animate-pop-in">
          <Mascot size="lg" mood="happy" />
        </div>

        {/* Title */}
        <h1 className="text-5xl md:text-7xl font-bold text-center mb-4 animate-pop-in gradient-text" style={{ animationDelay: "0.1s" }}>
          Welcome to Quizzy! 🎉
        </h1>
        
        <p className="text-xl md:text-2xl text-center text-foreground/80 mb-12 max-w-2xl animate-pop-in" style={{ animationDelay: "0.2s" }}>
          Belajar Coding dengan Cara Menyenangkan! ✨
        </p>

        {/* Buttons */}
        <div className="flex flex-col sm:flex-row gap-6 mb-16 animate-pop-in" style={{ animationDelay: "0.3s" }}>
          <Button
            onClick={() => navigate("/login")}
            className="btn-bubbly bg-primary hover:bg-primary/90 text-primary-foreground text-xl px-12 py-6 h-auto"
          >
            🚀 Start Learning
          </Button>
          
          <Button
            onClick={() => navigate("/contact")}
            variant="outline"
            className="btn-bubbly border-2 text-xl px-12 py-6 h-auto"
          >
            💌 Contact Us
          </Button>
        </div>

        {/* Social Media Footer */}
        <div className="flex gap-6 animate-pop-in" style={{ animationDelay: "0.4s" }}>
          <Button
            variant="ghost"
            size="icon"
            className="rounded-full w-12 h-12 hover:bg-primary/20 transition-all hover:scale-110"
          >
            <Instagram className="h-5 w-5" />
          </Button>
          <Button
            variant="ghost"
            size="icon"
            className="rounded-full w-12 h-12 hover:bg-secondary/20 transition-all hover:scale-110"
          >
            <Facebook className="h-5 w-5" />
          </Button>
          <Button
            variant="ghost"
            size="icon"
            className="rounded-full w-12 h-12 hover:bg-accent/20 transition-all hover:scale-110"
          >
            <Twitter className="h-5 w-5" />
          </Button>
          <Button
            variant="ghost"
            size="icon"
            className="rounded-full w-12 h-12 hover:bg-warning/20 transition-all hover:scale-110"
          >
            <Mail className="h-5 w-5" />
          </Button>
        </div>
      </div>
    </div>
  );
};

export default Landing;
