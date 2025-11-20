import { Button } from "@/components/ui/button";
import { MusicToggle } from "@/components/MusicToggle";
import { FloatingElements } from "@/components/FloatingElements";
import { useNavigate } from "react-router-dom";
import { ArrowLeft, Target, Clock, Trophy, Zap } from "lucide-react";
import { Progress } from "@/components/ui/progress";

const Stats = () => {
  const navigate = useNavigate();

  const stats = {
    bestScore: 5,
    averageTime: "4.2s",
    totalPoints: 1250,
    accuracy: 85,
    totalQuizzes: 15,
    perfectScores: 3,
  };

  const categoryProgress = [
    { name: "Easy", completed: 2, total: 5, color: "bg-success", percent: 40 },
    { name: "Medium", completed: 0, total: 5, color: "bg-warning", percent: 0 },
    { name: "Hard", completed: 0, total: 5, color: "bg-destructive", percent: 0 },
  ];

  const xpProgress = [
    { week: "Week 1", xp: 150 },
    { week: "Week 2", xp: 220 },
    { week: "Week 3", xp: 300 },
    { week: "Week 4", xp: 350 },
  ];

  const maxXp = Math.max(...xpProgress.map(w => w.xp));

  return (
    <div className="min-h-screen relative overflow-hidden py-12 px-4">
      <FloatingElements />
      <MusicToggle />
      
      <div className="relative z-10 max-w-6xl mx-auto">
        {/* Back button */}
        <Button
          onClick={() => navigate("/dashboard")}
          variant="ghost"
          className="mb-8 rounded-full hover:bg-primary/20"
        >
          <ArrowLeft className="mr-2 h-4 w-4" />
          Kembali ke Dashboard
        </Button>

        {/* Header */}
        <div className="text-center mb-12 animate-pop-in">
          <h1 className="text-4xl md:text-5xl font-bold mb-4 gradient-text">
            📊 My Stats
          </h1>
          <p className="text-lg text-foreground/80">
            Lihat perkembangan belajarmu di sini! 📈
          </p>
        </div>

        {/* Key Stats Grid */}
        <div className="grid md:grid-cols-4 gap-6 mb-12">
          <div className="bubble-card p-6 bg-gradient-to-br from-primary/20 to-primary/5 animate-pop-in">
            <Target className="h-10 w-10 text-primary mb-3" />
            <h3 className="text-sm font-semibold text-muted-foreground mb-1">Best Score</h3>
            <p className="text-4xl font-bold text-primary">{stats.bestScore}/5</p>
          </div>

          <div className="bubble-card p-6 bg-gradient-to-br from-accent/20 to-accent/5 animate-pop-in" style={{ animationDelay: "0.1s" }}>
            <Clock className="h-10 w-10 text-accent mb-3" />
            <h3 className="text-sm font-semibold text-muted-foreground mb-1">Avg Time</h3>
            <p className="text-4xl font-bold text-accent">{stats.averageTime}</p>
          </div>

          <div className="bubble-card p-6 bg-gradient-to-br from-warning/20 to-warning/5 animate-pop-in" style={{ animationDelay: "0.2s" }}>
            <Trophy className="h-10 w-10 text-warning mb-3" />
            <h3 className="text-sm font-semibold text-muted-foreground mb-1">Total Points</h3>
            <p className="text-4xl font-bold text-warning">{stats.totalPoints}</p>
          </div>

          <div className="bubble-card p-6 bg-gradient-to-br from-success/20 to-success/5 animate-pop-in" style={{ animationDelay: "0.3s" }}>
            <Zap className="h-10 w-10 text-success mb-3" />
            <h3 className="text-sm font-semibold text-muted-foreground mb-1">Accuracy</h3>
            <p className="text-4xl font-bold text-success">{stats.accuracy}%</p>
          </div>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {/* Category Progress */}
          <div className="bubble-card p-8 animate-pop-in" style={{ animationDelay: "0.4s" }}>
            <h2 className="text-2xl font-bold mb-6 flex items-center gap-2">
              📚 Progress per Kategori
            </h2>
            <div className="space-y-6">
              {categoryProgress.map((category, index) => (
                <div key={index}>
                  <div className="flex items-center justify-between mb-2">
                    <span className="font-semibold">{category.name}</span>
                    <span className="text-sm text-muted-foreground">
                      {category.completed}/{category.total} selesai
                    </span>
                  </div>
                  <Progress 
                    value={category.percent} 
                    className={`h-4 ${category.color}`}
                  />
                </div>
              ))}
            </div>
          </div>

          {/* XP Progress Chart */}
          <div className="bubble-card p-8 animate-pop-in" style={{ animationDelay: "0.5s" }}>
            <h2 className="text-2xl font-bold mb-6 flex items-center gap-2">
              📈 Grafik XP Mingguan
            </h2>
            <div className="space-y-4">
              {xpProgress.map((week, index) => (
                <div key={index} className="flex items-center gap-4">
                  <span className="text-sm font-semibold w-20">{week.week}</span>
                  <div className="flex-1 bg-muted rounded-full h-10 overflow-hidden">
                    <div
                      className="bg-gradient-to-r from-primary to-accent h-full rounded-full flex items-center justify-end pr-3 transition-all duration-500"
                      style={{ width: `${(week.xp / maxXp) * 100}%` }}
                    >
                      <span className="text-sm font-bold text-white">{week.xp} XP</span>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Additional Stats */}
          <div className="bubble-card p-8 animate-pop-in" style={{ animationDelay: "0.6s" }}>
            <h2 className="text-2xl font-bold mb-6">🎯 Pencapaian</h2>
            <div className="space-y-4">
              <div className="flex items-center justify-between p-4 bg-muted rounded-2xl">
                <span className="font-semibold">Total Quiz Selesai</span>
                <span className="text-2xl font-bold text-primary">{stats.totalQuizzes}</span>
              </div>
              <div className="flex items-center justify-between p-4 bg-muted rounded-2xl">
                <span className="font-semibold">Perfect Scores</span>
                <span className="text-2xl font-bold text-warning">{stats.perfectScores}</span>
              </div>
              <div className="flex items-center justify-between p-4 bg-muted rounded-2xl">
                <span className="font-semibold">Current Streak</span>
                <span className="text-2xl font-bold text-destructive">7 🔥</span>
              </div>
            </div>
          </div>

          {/* Motivational Mascot Tips */}
          <div className="bubble-card p-8 bg-gradient-to-br from-info/20 to-info/5 animate-pop-in" style={{ animationDelay: "0.7s" }}>
            <h2 className="text-2xl font-bold mb-6">💡 Tips dari Quizzy</h2>
            <div className="space-y-4">
              <div className="flex gap-3">
                <div className="text-2xl">🎯</div>
                <p className="text-sm">Kamu sudah sangat bagus! Coba challenge level Medium untuk XP lebih banyak!</p>
              </div>
              <div className="flex gap-3">
                <div className="text-2xl">⚡</div>
                <p className="text-sm">Akurasi kamu {stats.accuracy}%! Pertahankan konsistensimu!</p>
              </div>
              <div className="flex gap-3">
                <div className="text-2xl">🏆</div>
                <p className="text-sm">Main setiap hari untuk mendapatkan streak bonus!</p>
              </div>
            </div>
          </div>
        </div>

        {/* Fun encouragement */}
        <div className="text-center mt-12 animate-pop-in" style={{ animationDelay: "0.8s" }}>
          <p className="text-lg text-muted-foreground">
            🌟 Keep learning and growing! Kamu luar biasa!
          </p>
        </div>
      </div>
    </div>
  );
};

export default Stats;
