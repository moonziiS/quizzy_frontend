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

const Login = () => {
  const navigate = useNavigate();
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    // Simple validation demo
    if (formData.email && formData.password) {
      toast({
        title: "Login Berhasil! 🎉",
        description: "Selamat datang kembali!",
      });
      navigate("/dashboard");
    } else {
      toast({
        title: "Ups! Password-nya salah nih 😿",
        description: "Coba cek lagi email dan password-mu ya!",
        variant: "destructive",
      });
    }
  };

  return (
    <div className="min-h-screen relative overflow-hidden flex items-center justify-center px-4">
      <FloatingElements />
      <MusicToggle />
      
      <div className="relative z-10 w-full max-w-md">
        {/* Back button */}
        <Button
          onClick={() => navigate("/")}
          variant="ghost"
          className="mb-8 rounded-full hover:bg-primary/20"
        >
          <ArrowLeft className="mr-2 h-4 w-4" />
          Kembali
        </Button>

        {/* Login Card */}
        <div className="bubble-card p-8 animate-pop-in">
          {/* Mascot */}
          <div className="flex justify-center mb-6">
            <Mascot size="md" mood="happy" />
          </div>

          {/* Header */}
          <div className="text-center mb-8">
            <h1 className="text-3xl font-bold mb-2 gradient-text">
              Selamat Datang! 👋
            </h1>
            <p className="text-muted-foreground">
              Masuk untuk melanjutkan petualangan belajarmu!
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

            <Button
              type="submit"
              className="w-full btn-bubbly bg-primary hover:bg-primary/90 text-primary-foreground h-14 text-lg"
            >
              🚀 Masuk
            </Button>
          </form>

          {/* Links */}
          <div className="mt-6 space-y-3 text-center">
            <Button
              variant="link"
              className="text-sm hover:text-primary"
              onClick={() => toast({ title: "Fitur akan segera hadir! 🔜" })}
            >
              🔐 Lupa Password?
            </Button>
            
            <div className="pt-4 border-t">
              <p className="text-sm text-muted-foreground mb-2">
                Belum punya akun?
              </p>
              <Button
                variant="outline"
                className="w-full rounded-full border-2"
                onClick={() => navigate("/register")}
              >
                ✨ Buat Akun Baru
              </Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
