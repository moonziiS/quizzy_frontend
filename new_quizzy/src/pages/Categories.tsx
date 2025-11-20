import { Button } from "@/components/ui/button";
import { MusicToggle } from "@/components/MusicToggle";
import { FloatingElements } from "@/components/FloatingElements";
import { useNavigate } from "react-router-dom";
import { ArrowLeft, Lock, Star } from "lucide-react";
import { Badge } from "@/components/ui/badge";

interface Level {
  id: number;
  number: number;
  xp: number;
  locked: boolean;
}

interface Category {
  id: string;
  name: string;
  difficulty: "Easy" | "Medium" | "Hard";
  color: string;
  emoji: string;
  levels: Level[];
}

const Categories = () => {
  const navigate = useNavigate();

  const categories: Category[] = [
    {
      id: "easy",
      name: "Easy Level",
      difficulty: "Easy",
      color: "bg-success",
      emoji: "😊",
      levels: [
        { id: 1, number: 1, xp: 50, locked: false },
        { id: 2, number: 2, xp: 50, locked: false },
        { id: 3, number: 3, xp: 50, locked: true },
        { id: 4, number: 4, xp: 75, locked: true },
        { id: 5, number: 5, xp: 100, locked: true },
      ],
    },
    {
      id: "medium",
      name: "Medium Level",
      difficulty: "Medium",
      color: "bg-warning",
      emoji: "🤔",
      levels: [
        { id: 6, number: 1, xp: 100, locked: true },
        { id: 7, number: 2, xp: 100, locked: true },
        { id: 8, number: 3, xp: 125, locked: true },
        { id: 9, number: 4, xp: 125, locked: true },
        { id: 10, number: 5, xp: 150, locked: true },
      ],
    },
    {
      id: "hard",
      name: "Hard Level",
      difficulty: "Hard",
      color: "bg-destructive",
      emoji: "🔥",
      levels: [
        { id: 11, number: 1, xp: 150, locked: true },
        { id: 12, number: 2, xp: 175, locked: true },
        { id: 13, number: 3, xp: 200, locked: true },
        { id: 14, number: 4, xp: 225, locked: true },
        { id: 15, number: 5, xp: 250, locked: true },
      ],
    },
  ];

  const handleLevelClick = (level: Level, categoryId: string) => {
    if (!level.locked) {
      navigate(`/quiz/${categoryId}/${level.number}`);
    }
  };

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
            📚 Pilih Level Soal
          </h1>
          <p className="text-lg text-foreground/80">
            Mulai dari level mudah dan buktikan kemampuanmu! 🚀
          </p>
        </div>

        {/* Categories */}
        <div className="space-y-8">
          {categories.map((category, catIndex) => (
            <div
              key={category.id}
              className="bubble-card p-8 animate-pop-in"
              style={{ animationDelay: `${catIndex * 0.1}s` }}
            >
              {/* Category Header */}
              <div className="flex items-center justify-between mb-6">
                <div className="flex items-center gap-4">
                  <div className={`${category.color} w-16 h-16 rounded-2xl flex items-center justify-center text-3xl`}>
                    {category.emoji}
                  </div>
                  <div>
                    <h2 className="text-2xl font-bold">{category.name}</h2>
                    <p className="text-muted-foreground">
                      {category.difficulty === "Easy" && "Perfect untuk pemula! 🌱"}
                      {category.difficulty === "Medium" && "Siap tantangan lebih? 💪"}
                      {category.difficulty === "Hard" && "Hanya untuk yang terbaik! 🏆"}
                    </p>
                  </div>
                </div>
                <Badge className="text-lg px-4 py-2" variant="outline">
                  {category.difficulty}
                </Badge>
              </div>

              {/* Levels */}
              <div className="grid grid-cols-2 md:grid-cols-5 gap-4">
                {category.levels.map((level, levelIndex) => (
                  <button
                    key={level.id}
                    onClick={() => handleLevelClick(level, category.id)}
                    disabled={level.locked}
                    className={`bubble-card p-6 transition-all duration-300 ${
                      level.locked
                        ? "opacity-50 cursor-not-allowed bg-muted"
                        : "hover:scale-105 cursor-pointer"
                    }`}
                    style={{ animationDelay: `${catIndex * 0.1 + levelIndex * 0.05}s` }}
                  >
                    <div className="text-center">
                      {level.locked ? (
                        <Lock className="h-8 w-8 mx-auto mb-2 text-muted-foreground" />
                      ) : (
                        <div className="text-4xl mb-2">💻</div>
                      )}
                      <p className="font-bold text-lg mb-1">Level {level.number}</p>
                      <div className="flex items-center justify-center gap-1 text-sm text-muted-foreground">
                        <Star className="h-4 w-4 text-warning fill-warning" />
                        <span>{level.xp} XP</span>
                      </div>
                    </div>
                  </button>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Fun fact */}
        <div className="text-center mt-12 animate-pop-in" style={{ animationDelay: "0.4s" }}>
          <p className="text-lg text-muted-foreground">
            💡 Tips: Selesaikan semua level Easy untuk unlock level Medium!
          </p>
        </div>
      </div>
    </div>
  );
};

export default Categories;
