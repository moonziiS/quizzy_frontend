import { Button } from "@/components/ui/button";
import { Mascot } from "@/components/Mascot";
import { MusicToggle } from "@/components/MusicToggle";
import { FloatingElements } from "@/components/FloatingElements";
import { useNavigate, useLocation } from "react-router-dom";
import { Trophy, Star, Clock, Target } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { useEffect } from "react";
import confetti from "canvas-confetti";

const QuizResult = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const { score = 0, total = 5, answers = [], category = "easy", level = "1" } = location.state || {};

  const correctCount = score;
  const wrongCount = total - score;
  const percentage = Math.round((score / total) * 100);
  const xpEarned = score * 20;

  // Trigger confetti on mount
  useEffect(() => {
    if (percentage >= 60) {
      confetti({
        particleCount: 200,
        spread: 120,
        origin: { y: 0.6 },
        colors: ['#A8E6CF', '#FFB6C1', '#89CFF0', '#E6E6FA', '#FFEAA7'],
      });
    }
  }, [percentage]);

  const getMascotMood = () => {
    if (percentage >= 80) return "celebrating";
    if (percentage >= 60) return "excited";
    if (percentage >= 40) return "happy";
    return "thinking";
  };

  const getMessage = () => {
    if (percentage >= 80) return "🎉 Luar Biasa! Kamu Hebat!";
    if (percentage >= 60) return "👍 Bagus! Pertahankan!";
    if (percentage >= 40) return "💪 Terus Belajar!";
    return "🌱 Jangan Menyerah!";
  };

  return (
    <div className="min-h-screen relative overflow-hidden py-12 px-4">
      <FloatingElements />
      <MusicToggle />
      
      <div className="relative z-10 max-w-3xl mx-auto">
        {/* Mascot celebrating */}
        <div className="flex justify-center mb-8 animate-pop-in">
          <Mascot size="lg" mood={getMascotMood()} />
        </div>

        {/* Main message */}
        <div className="text-center mb-8 animate-pop-in" style={{ animationDelay: "0.1s" }}>
          <h1 className="text-4xl md:text-5xl font-bold mb-4 gradient-text">
            {getMessage()}
          </h1>
          <p className="text-xl text-foreground/80">
            Quiz {category} Level {level} selesai!
          </p>
        </div>

        {/* Results Card */}
        <div className="bubble-card p-8 mb-8 animate-pop-in" style={{ animationDelay: "0.2s" }}>
          {/* Score Circle */}
          <div className="flex justify-center mb-8">
            <div className="relative">
              <svg className="w-48 h-48 transform -rotate-90">
                <circle
                  cx="96"
                  cy="96"
                  r="88"
                  stroke="currentColor"
                  strokeWidth="12"
                  fill="none"
                  className="text-muted"
                />
                <circle
                  cx="96"
                  cy="96"
                  r="88"
                  stroke="currentColor"
                  strokeWidth="12"
                  fill="none"
                  strokeDasharray={`${2 * Math.PI * 88}`}
                  strokeDashoffset={`${2 * Math.PI * 88 * (1 - percentage / 100)}`}
                  className="text-primary transition-all duration-1000"
                  strokeLinecap="round"
                />
              </svg>
              <div className="absolute inset-0 flex items-center justify-center flex-col">
                <span className="text-5xl font-bold gradient-text">{percentage}%</span>
                <span className="text-sm text-muted-foreground">Akurasi</span>
              </div>
            </div>
          </div>

          {/* Stats Grid */}
          <div className="grid md:grid-cols-4 gap-4">
            <div className="bubble-card p-4 bg-success/10 text-center">
              <Target className="h-8 w-8 mx-auto mb-2 text-success" />
              <p className="text-2xl font-bold text-success">{correctCount}</p>
              <p className="text-sm text-muted-foreground">Benar</p>
            </div>

            <div className="bubble-card p-4 bg-destructive/10 text-center">
              <Target className="h-8 w-8 mx-auto mb-2 text-destructive" />
              <p className="text-2xl font-bold text-destructive">{wrongCount}</p>
              <p className="text-sm text-muted-foreground">Salah</p>
            </div>

            <div className="bubble-card p-4 bg-warning/10 text-center">
              <Clock className="h-8 w-8 mx-auto mb-2 text-warning" />
              <p className="text-2xl font-bold text-warning">25s</p>
              <p className="text-sm text-muted-foreground">Total Waktu</p>
            </div>

            <div className="bubble-card p-4 bg-primary/10 text-center">
              <Star className="h-8 w-8 mx-auto mb-2 text-primary" />
              <p className="text-2xl font-bold text-primary">+{xpEarned}</p>
              <p className="text-sm text-muted-foreground">XP Earned</p>
            </div>
          </div>

          {/* Badge earned */}
          {percentage >= 80 && (
            <div className="mt-8 text-center animate-pop-in" style={{ animationDelay: "0.3s" }}>
              <p className="text-lg font-semibold mb-3">🎖️ Badge Baru Unlocked!</p>
              <Badge className="text-3xl px-6 py-3 bg-primary/20">⭐</Badge>
              <p className="text-sm text-muted-foreground mt-2">Perfect Score Master</p>
            </div>
          )}
        </div>

        {/* Action Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 animate-pop-in" style={{ animationDelay: "0.4s" }}>
          <Button
            onClick={() => navigate("/categories")}
            className="flex-1 btn-bubbly bg-primary hover:bg-primary/90 text-primary-foreground h-14 text-lg"
          >
            ➡️ Next Level
          </Button>
          <Button
            onClick={() => navigate("/dashboard")}
            variant="outline"
            className="flex-1 btn-bubbly border-2 h-14 text-lg"
          >
            🏠 Kembali ke Dashboard
          </Button>
        </div>

        {/* Motivational message */}
        <div className="text-center mt-8 animate-pop-in" style={{ animationDelay: "0.5s" }}>
          <p className="text-muted-foreground">
            {percentage >= 60
              ? "💪 Keren! Terus tingkatkan skormu!"
              : "🌟 Jangan menyerah! Coba lagi dan kamu pasti bisa!"}
          </p>
        </div>
      </div>
    </div>
  );
};

export default QuizResult;
