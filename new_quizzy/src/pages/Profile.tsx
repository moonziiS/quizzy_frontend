import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Mascot } from "@/components/Mascot";
import { MusicToggle } from "@/components/MusicToggle";
import { FloatingElements } from "@/components/FloatingElements";
import { useNavigate } from "react-router-dom";
import { ArrowLeft, Edit2, Trophy } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Progress } from "@/components/ui/progress";
import { useState } from "react";
import { useToast } from "@/hooks/use-toast";

const Profile = () => {
  const navigate = useNavigate();
  const { toast } = useToast();
  const [isEditing, setIsEditing] = useState(false);
  const [profile, setProfile] = useState({
    username: "QuizMaster123",
    age: "15",
    email: "quizmaster@email.com",
    occupation: "Pelajar SMA",
  });

  const stats = {
    level: 8,
    xp: 350,
    maxXp: 500,
    totalPoints: 1250,
    lastCategory: "Easy",
  };

  const badges = [
    { emoji: "🌟", name: "First Win", unlocked: true },
    { emoji: "🎯", name: "Accuracy Master", unlocked: true },
    { emoji: "⚡", name: "Speed Demon", unlocked: true },
    { emoji: "💎", name: "Perfectionist", unlocked: true },
    { emoji: "🏆", name: "Champion", unlocked: false },
    { emoji: "🔥", name: "Streak King", unlocked: false },
  ];

  const handleSave = () => {
    setIsEditing(false);
    toast({
      title: "Profil Berhasil Diupdate! ✨",
      description: "Perubahan sudah disimpan.",
    });
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
          <h1 className="text-4xl md:text-5xl font-bold mb-4 gradient-text">
            👤 My Profile
          </h1>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {/* Left Column - Avatar & Quick Stats */}
          <div className="space-y-6">
            {/* Avatar Card */}
            <div className="bubble-card p-8 text-center animate-pop-in">
              <div className="flex justify-center mb-4">
                <Mascot size="lg" mood="happy" />
              </div>
              <h2 className="text-2xl font-bold mb-2">{profile.username}</h2>
              <Badge className="text-lg px-4 py-1">Level {stats.level}</Badge>
            </div>

            {/* XP Progress */}
            <div className="bubble-card p-6 animate-pop-in" style={{ animationDelay: "0.1s" }}>
              <div className="flex items-center justify-between mb-3">
                <h3 className="font-semibold">⚡ XP Progress</h3>
                <span className="text-lg font-bold text-primary">{stats.xp}/{stats.maxXp}</span>
              </div>
              <Progress value={(stats.xp / stats.maxXp) * 100} className="h-3" />
              <p className="text-xs text-muted-foreground mt-2">
                {stats.maxXp - stats.xp} XP lagi untuk level up!
              </p>
            </div>

            {/* Total Points */}
            <div className="bubble-card p-6 bg-gradient-to-br from-warning/20 to-warning/5 animate-pop-in" style={{ animationDelay: "0.2s" }}>
              <Trophy className="h-8 w-8 text-warning mb-2" />
              <h3 className="font-semibold mb-1">Total Points</h3>
              <p className="text-3xl font-bold text-warning">{stats.totalPoints}</p>
            </div>
          </div>

          {/* Right Column - Profile Info & Badges */}
          <div className="md:col-span-2 space-y-6">
            {/* Profile Info */}
            <div className="bubble-card p-8 animate-pop-in" style={{ animationDelay: "0.1s" }}>
              <div className="flex items-center justify-between mb-6">
                <h2 className="text-2xl font-bold">📝 Informasi Profil</h2>
                {!isEditing ? (
                  <Button
                    onClick={() => setIsEditing(true)}
                    variant="outline"
                    className="rounded-full"
                  >
                    <Edit2 className="mr-2 h-4 w-4" />
                    Edit Profile
                  </Button>
                ) : (
                  <div className="flex gap-2">
                    <Button
                      onClick={handleSave}
                      className="rounded-full bg-primary"
                    >
                      💾 Simpan
                    </Button>
                    <Button
                      onClick={() => setIsEditing(false)}
                      variant="outline"
                      className="rounded-full"
                    >
                      ✕ Batal
                    </Button>
                  </div>
                )}
              </div>

              <div className="space-y-6">
                <div>
                  <Label className="text-base font-semibold">Username</Label>
                  <Input
                    value={profile.username}
                    onChange={(e) => setProfile({ ...profile, username: e.target.value })}
                    disabled={!isEditing}
                    className="mt-2 rounded-2xl border-2 h-12"
                  />
                </div>

                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <Label className="text-base font-semibold">Age</Label>
                    <Input
                      value={profile.age}
                      onChange={(e) => setProfile({ ...profile, age: e.target.value })}
                      disabled={!isEditing}
                      className="mt-2 rounded-2xl border-2 h-12"
                    />
                  </div>
                  <div>
                    <Label className="text-base font-semibold">Occupation</Label>
                    <Input
                      value={profile.occupation}
                      onChange={(e) => setProfile({ ...profile, occupation: e.target.value })}
                      disabled={!isEditing}
                      className="mt-2 rounded-2xl border-2 h-12"
                    />
                  </div>
                </div>

                <div>
                  <Label className="text-base font-semibold">Email</Label>
                  <Input
                    type="email"
                    value={profile.email}
                    onChange={(e) => setProfile({ ...profile, email: e.target.value })}
                    disabled={!isEditing}
                    className="mt-2 rounded-2xl border-2 h-12"
                  />
                </div>

                <div className="pt-4 border-t">
                  <p className="text-sm text-muted-foreground">
                    <span className="font-semibold">Level Tercapai:</span> Level {stats.level}
                  </p>
                  <p className="text-sm text-muted-foreground mt-1">
                    <span className="font-semibold">Kategori Terakhir:</span> {stats.lastCategory}
                  </p>
                </div>
              </div>
            </div>

            {/* Badges Collection */}
            <div className="bubble-card p-8 animate-pop-in" style={{ animationDelay: "0.2s" }}>
              <h2 className="text-2xl font-bold mb-6">🎖️ Koleksi Badge</h2>
              <div className="grid grid-cols-3 md:grid-cols-6 gap-4">
                {badges.map((badge, index) => (
                  <div
                    key={index}
                    className={`bubble-card p-4 text-center transition-all ${
                      badge.unlocked
                        ? "bg-primary/10 hover:scale-110"
                        : "bg-muted opacity-50"
                    }`}
                  >
                    <div className="text-4xl mb-2">{badge.emoji}</div>
                    <p className="text-xs font-semibold">{badge.name}</p>
                  </div>
                ))}
              </div>
              <p className="text-sm text-muted-foreground text-center mt-6">
                🌟 Unlock lebih banyak badge dengan menyelesaikan challenge!
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Profile;
