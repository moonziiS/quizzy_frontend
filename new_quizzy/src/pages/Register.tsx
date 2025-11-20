import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Mascot } from "@/components/Mascot";
import { MusicToggle } from "@/components/MusicToggle";
import { FloatingElements } from "@/components/FloatingElements";
import { useNavigate } from "react-router-dom";
import { ArrowLeft } from "lucide-react";
import { useState } from "react";
import { useToast } from "@/hooks/use-toast";
import confetti from "canvas-confetti";

const Register = () => {
  const navigate = useNavigate();
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    email: "",
    password: "",
    confirmPassword: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    if (formData.password !== formData.confirmPassword) {
      toast({
        title: "Password tidak cocok! 😅",
        description: "Pastikan password dan konfirmasi password sama ya!",
        variant: "destructive",
      });
      return;
    }

    // Trigger confetti
    confetti({
      particleCount: 150,
      spread: 100,
      origin: { y: 0.6 }
    });

    toast({
      title: "Pendaftaran Berhasil! 🎉",
      description: "Akun kamu sudah dibuat! Sekarang mari masuk ke Quizzy!",
    });

    setTimeout(() => {
      navigate("/login");
    }, 2000);
  };

  return (
    <div className="min-h-screen relative overflow-hidden flex items-center justify-center px-4 py-12">
      <FloatingElements />
      <MusicToggle />
      
      <div className="relative z-10 w-full max-w-md">
        {/* Back button */}
        <Button
          onClick={() => navigate("/login")}
          variant="ghost"
          className="mb-8 rounded-full hover:bg-primary/20"
        >
          <ArrowLeft className="mr-2 h-4 w-4" />
          Kembali ke Login
        </Button>

        {/* Register Card */}
        <div className="bubble-card p-8 animate-pop-in">
          {/* Mascot */}
          <div className="flex justify-center mb-6">
            <Mascot size="md" mood="excited" />
          </div>

          {/* Header */}
          <div className="text-center mb-8">
            <h1 className="text-3xl font-bold mb-2 gradient-text">
              Bergabung dengan Quizzy! 🌟
            </h1>
            <p className="text-muted-foreground">
              Buat akun baru dan mulai petualangan belajarmu!
            </p>
          </div>

          {/* Form */}
          <form onSubmit={handleSubmit} className="space-y-6">
            <div>
              <Label htmlFor="email" className="text-base font-semibold">
                Email
              </Label>
              <Input
                id="email"
                type="email"
                value={formData.email}
                onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                placeholder="nama@email.com"
                required
                className="mt-2 rounded-2xl border-2 h-12"
              />
            </div>

            <div>
              <Label htmlFor="password" className="text-base font-semibold">
                Password
              </Label>
              <Input
                id="password"
                type="password"
                value={formData.password}
                onChange={(e) => setFormData({ ...formData, password: e.target.value })}
                placeholder="••••••••"
                required
                className="mt-2 rounded-2xl border-2 h-12"
              />
            </div>

            <div>
              <Label htmlFor="confirmPassword" className="text-base font-semibold">
                Konfirmasi Password
              </Label>
              <Input
                id="confirmPassword"
                type="password"
                value={formData.confirmPassword}
                onChange={(e) => setFormData({ ...formData, confirmPassword: e.target.value })}
                placeholder="••••••••"
                required
                className="mt-2 rounded-2xl border-2 h-12"
              />
            </div>

            <Button
              type="submit"
              className="w-full btn-bubbly bg-secondary hover:bg-secondary/90 text-secondary-foreground h-14 text-lg"
            >
              ✨ Register Now
            </Button>
          </form>

          {/* Link back to login */}
          <div className="mt-6 text-center">
            <p className="text-sm text-muted-foreground mb-2">
              Sudah punya akun?
            </p>
            <Button
              variant="link"
              className="text-primary hover:text-primary/80 font-semibold"
              onClick={() => navigate("/login")}
            >
              Masuk di sini! →
            </Button>
          </div>
        </div>

        {/* Decorative */}
        <div className="text-center mt-6 animate-pop-in" style={{ animationDelay: "0.2s" }}>
          <p className="text-sm text-muted-foreground">
            🎓 Siap untuk belajar dengan cara yang menyenangkan?
          </p>
        </div>
      </div>
    </div>
  );
};

export default Register;
