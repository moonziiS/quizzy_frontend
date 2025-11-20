import { Button } from "@/components/ui/button";
import { Mascot } from "@/components/Mascot";
import { MusicToggle } from "@/components/MusicToggle";
import { FloatingElements } from "@/components/FloatingElements";
import { useNavigate } from "react-router-dom";
import { ArrowLeft, Trophy, Medal, Award } from "lucide-react";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";

interface Player {
  rank: number;
  username: string;
  points: number;
  isCurrentUser?: boolean;
}

const Leaderboard = () => {
  const navigate = useNavigate();

  const topPlayers: Player[] = [
    { rank: 1, username: "CodeNinja99", points: 5420 },
    { rank: 2, username: "QuizMaster", points: 4890 },
    { rank: 3, username: "DevGuru123", points: 3750 },
    { rank: 4, username: "TechWizard", points: 3240 },
    { rank: 5, username: "ByteBoss", points: 2980 },
    { rank: 6, username: "LogicLord", points: 2750 },
    { rank: 7, username: "CodingKing", points: 2450 },
    { rank: 8, username: "AlgoAce", points: 2100 },
    { rank: 9, username: "WebWarrior", points: 1850 },
    { rank: 10, username: "DataDuke", points: 1650 },
  ];

  const currentUserRank = 27;
  const currentUserPoints = 1250;

  const getRankIcon = (rank: number) => {
    if (rank === 1) return <Trophy className="h-8 w-8 text-warning fill-warning" />;
    if (rank === 2) return <Medal className="h-8 w-8 text-muted-foreground" />;
    if (rank === 3) return <Award className="h-8 w-8 text-warning/60" />;
    return null;
  };

  const getRankColor = (rank: number) => {
    if (rank === 1) return "from-warning/30 to-warning/10";
    if (rank === 2) return "from-muted/30 to-muted/10";
    if (rank === 3) return "from-warning/20 to-warning/5";
    return "";
  };

  return (
    <div className="min-h-screen relative overflow-hidden py-12 px-4">
      <FloatingElements />
      <MusicToggle />
      
      <div className="relative z-10 max-w-4xl mx-auto">
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
          <div className="flex justify-center mb-4">
            <Mascot size="md" mood="celebrating" />
          </div>
          <h1 className="text-4xl md:text-5xl font-bold mb-4 gradient-text">
            🏆 Leaderboard
          </h1>
          <p className="text-lg text-foreground/80">
            Top 10 Pemain Terbaik Quizzy! ✨
          </p>
        </div>

        {/* Top 3 Podium */}
        <div className="grid grid-cols-3 gap-4 mb-12 animate-pop-in" style={{ animationDelay: "0.1s" }}>
          {/* 2nd Place */}
          <div className="bubble-card p-6 text-center bg-gradient-to-br from-muted/30 to-muted/10 order-1">
            <div className="mb-4">
              <Medal className="h-12 w-12 mx-auto text-muted-foreground mb-2" />
              <p className="text-3xl font-bold">2nd</p>
            </div>
            <Avatar className="w-16 h-16 mx-auto mb-3 bg-gradient-to-br from-accent to-info">
              <AvatarFallback className="text-xl font-bold">
                {topPlayers[1].username.slice(0, 2)}
              </AvatarFallback>
            </Avatar>
            <p className="font-bold text-lg mb-1">{topPlayers[1].username}</p>
            <p className="text-2xl font-bold text-accent">{topPlayers[1].points}</p>
          </div>

          {/* 1st Place */}
          <div className="bubble-card p-6 text-center bg-gradient-to-br from-warning/30 to-warning/10 order-2 transform scale-110">
            <div className="mb-4">
              <Trophy className="h-16 w-16 mx-auto text-warning fill-warning mb-2 animate-bounce-gentle" />
              <p className="text-4xl font-bold">1st</p>
            </div>
            <Avatar className="w-20 h-20 mx-auto mb-3 bg-gradient-to-br from-warning to-primary ring-4 ring-warning/30">
              <AvatarFallback className="text-2xl font-bold">
                {topPlayers[0].username.slice(0, 2)}
              </AvatarFallback>
            </Avatar>
            <p className="font-bold text-xl mb-1">{topPlayers[0].username}</p>
            <p className="text-3xl font-bold text-warning">{topPlayers[0].points}</p>
          </div>

          {/* 3rd Place */}
          <div className="bubble-card p-6 text-center bg-gradient-to-br from-warning/20 to-warning/5 order-3">
            <div className="mb-4">
              <Award className="h-12 w-12 mx-auto text-warning/60 mb-2" />
              <p className="text-3xl font-bold">3rd</p>
            </div>
            <Avatar className="w-16 h-16 mx-auto mb-3 bg-gradient-to-br from-secondary to-warning">
              <AvatarFallback className="text-xl font-bold">
                {topPlayers[2].username.slice(0, 2)}
              </AvatarFallback>
            </Avatar>
            <p className="font-bold text-lg mb-1">{topPlayers[2].username}</p>
            <p className="text-2xl font-bold text-warning/80">{topPlayers[2].points}</p>
          </div>
        </div>

        {/* Full Leaderboard List */}
        <div className="bubble-card p-6 animate-pop-in" style={{ animationDelay: "0.2s" }}>
          <h2 className="text-2xl font-bold mb-6">📊 Top 10 Players</h2>
          <div className="space-y-3">
            {topPlayers.map((player) => (
              <div
                key={player.rank}
                className={`flex items-center gap-4 p-4 rounded-2xl transition-all hover:scale-[1.02] ${
                  player.rank <= 3
                    ? `bg-gradient-to-r ${getRankColor(player.rank)}`
                    : "bg-muted/30 hover:bg-muted/50"
                }`}
              >
                <div className="w-12 flex items-center justify-center">
                  {getRankIcon(player.rank) || (
                    <span className="text-2xl font-bold text-muted-foreground">
                      {player.rank}
                    </span>
                  )}
                </div>
                
                <Avatar className="w-12 h-12 bg-gradient-to-br from-primary to-accent">
                  <AvatarFallback className="font-bold">
                    {player.username.slice(0, 2)}
                  </AvatarFallback>
                </Avatar>

                <div className="flex-1">
                  <p className="font-bold text-lg">{player.username}</p>
                </div>

                <div className="text-right">
                  <p className="text-2xl font-bold text-primary">{player.points}</p>
                  <p className="text-xs text-muted-foreground">points</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Current User Position */}
        <div className="bubble-card p-6 mt-8 bg-gradient-to-br from-primary/20 to-primary/5 border-2 border-primary animate-pop-in" style={{ animationDelay: "0.3s" }}>
          <p className="text-center text-lg font-semibold mb-4">
            🎯 Posisi Kamu:
          </p>
          <div className="flex items-center gap-4 p-4 bg-background/50 rounded-2xl">
            <div className="w-12 flex items-center justify-center">
              <span className="text-3xl font-bold text-primary">#{currentUserRank}</span>
            </div>
            
            <Avatar className="w-14 h-14 bg-gradient-to-br from-primary to-secondary ring-2 ring-primary">
              <AvatarFallback className="font-bold text-lg">QM</AvatarFallback>
            </Avatar>

            <div className="flex-1">
              <p className="font-bold text-xl">QuizMaster123</p>
              <p className="text-sm text-muted-foreground">That's you! 🌟</p>
            </div>

            <div className="text-right">
              <p className="text-3xl font-bold text-primary">{currentUserPoints}</p>
              <p className="text-sm text-muted-foreground">points</p>
            </div>
          </div>
        </div>

        {/* Motivational message */}
        <div className="text-center mt-8 animate-pop-in" style={{ animationDelay: "0.4s" }}>
          <p className="text-lg text-muted-foreground">
            💪 Terus main dan naik ke posisi teratas! Kamu pasti bisa!
          </p>
        </div>
      </div>
    </div>
  );
};

export default Leaderboard;
