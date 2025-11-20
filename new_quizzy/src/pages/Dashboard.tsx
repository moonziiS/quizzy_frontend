import { Button } from "@/components/ui/button";
import { Mascot } from "@/components/Mascot";
import { MusicToggle } from "@/components/MusicToggle";
import { FloatingElements } from "@/components/FloatingElements";
import { useNavigate } from "react-router-dom";
import { BookOpen, User, BarChart3, Trophy, LogOut } from "lucide-react";
import { Progress } from "@/components/ui/progress";
import { Badge } from "@/components/ui/badge";

const Dashboard = () => {
  const navigate = useNavigate();

  const menuItems = [
    { title: "Daftar Soal", icon: BookOpen, color: "bg-primary", path: "/categories" },
    { title: "My Profile", icon: User, color: "bg-secondary", path: "/profile" },
    { title: "My Stats", icon: BarChart3, color: "bg-accent", path: "/stats" },
    { title: "Leaderboard", icon: Trophy, color: "bg-warning", path: "/leaderboard" },
  ];

  return (
    <div className="min-h-screen relative overflow-hidden py-12 px-4">
      <FloatingElements />
      <MusicToggle />
      
      <div className="relative z-10 max-w-6xl mx-auto">
        {/* Header with greeting */}
        <div className="flex flex-col md:flex-row items-center justify-between mb-12 gap-6">
          <div className="flex items-center gap-6 animate-pop-in">
            <Mascot size="md" mood="happy" />
            <div>
              <h1 className="text-3xl md:text-4xl font-bold gradient-text">
                🎉 Halo, Quizzer!
              </h1>
              <p className="text-muted-foreground text-lg">
                Siap main hari ini?
              </p>
            </div>
          </div>

          <Button
            onClick={() => navigate("/")}
            variant="outline"
            className="rounded-full border-2 hover:bg-destructive/10 animate-pop-in"
            style={{ animationDelay: "0.1s" }}
          >
            <LogOut className="mr-2 h-4 w-4" />
            Logout
          </Button>
        </div>

        {/* Stats Overview */}
        <div className="grid md:grid-cols-3 gap-6 mb-12">
          {/* XP Progress */}
          <div className="bubble-card p-6 animate-pop-in" style={{ animationDelay: "0.1s" }}>
            <div className="flex items-center justify-between mb-3">
              <h3 className="font-semibold text-lg">⚡ XP Progress</h3>
              <span className="text-2xl font-bold text-primary">350</span>
            </div>
            <Progress value={70} className="h-3 mb-2" />
            <p className="text-xs text-muted-foreground">150 XP lagi untuk level up!</p>
          </div>

          {/* Total Points */}
          <div className="bubble-card p-6 bg-gradient-to-br from-secondary/20 to-secondary/5 animate-pop-in" style={{ animationDelay: "0.2s" }}>
            <h3 className="font-semibold text-lg mb-2">🏆 Total Points</h3>
            <p className="text-4xl font-bold text-secondary">1,250</p>
            <p className="text-xs text-muted-foreground mt-1">Keep up the great work!</p>
          </div>

          {/* Badges Preview */}
          <div className="bubble-card p-6 animate-pop-in" style={{ animationDelay: "0.3s" }}>
            <h3 className="font-semibold text-lg mb-3">🎖️ Badges</h3>
            <div className="flex gap-2">
              <Badge className="text-2xl px-3 py-1 bg-primary/20">🌟</Badge>
              <Badge className="text-2xl px-3 py-1 bg-accent/20">🎯</Badge>
              <Badge className="text-2xl px-3 py-1 bg-warning/20">⚡</Badge>
              <Badge className="text-2xl px-3 py-1 bg-info/20">💎</Badge>
            </div>
          </div>
        </div>

        {/* Menu Cards */}
        <div className="grid md:grid-cols-2 gap-6">
          {menuItems.map((item, index) => (
            <button
              key={item.title}
              onClick={() => navigate(item.path)}
              className="bubble-card p-8 text-left group hover:scale-105 transition-all duration-300 animate-pop-in"
              style={{ animationDelay: `${0.4 + index * 0.1}s` }}
            >
              <div className={`${item.color} w-16 h-16 rounded-2xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300`}>
                <item.icon className="h-8 w-8 text-white" />
              </div>
              <h2 className="text-2xl font-bold mb-2 group-hover:text-primary transition-colors">
                {item.title}
              </h2>
              <p className="text-muted-foreground">
                {item.title === "Daftar Soal" && "Pilih level dan mulai belajar! 📚"}
                {item.title === "My Profile" && "Lihat dan edit profilmu 👤"}
                {item.title === "My Stats" && "Cek perkembangan belajarmu 📊"}
                {item.title === "Leaderboard" && "Lihat peringkat pemain terbaik! 🏅"}
              </p>
            </button>
          ))}
        </div>

        {/* Fun motivational message */}
        <div className="text-center mt-12 animate-pop-in" style={{ animationDelay: "0.8s" }}>
          <p className="text-lg text-muted-foreground">
            💪 "Setiap soal yang kamu selesaikan adalah langkah menuju kesuksesan!"
          </p>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
