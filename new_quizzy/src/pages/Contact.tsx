import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { MusicToggle } from "@/components/MusicToggle";
import { FloatingElements } from "@/components/FloatingElements";
import { useNavigate } from "react-router-dom";
import { Instagram, Facebook, Twitter, Mail, MapPin, ArrowLeft } from "lucide-react";
import { useState } from "react";
import { useToast } from "@/hooks/use-toast";
import confetti from "canvas-confetti";

const Contact = () => {
  const navigate = useNavigate();
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    fullname: "",
    email: "",
    message: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    // Trigger confetti
    confetti({
      particleCount: 100,
      spread: 70,
      origin: { y: 0.6 }
    });

    toast({
      title: "Pesan Terkirim! 🎉",
      description: "Terima kasih sudah menghubungi kami! Kami akan segera membalas pesanmu.",
    });

    // Reset form
    setFormData({ fullname: "", email: "", message: "" });
  };

  return (
    <div className="min-h-screen relative overflow-hidden py-12 px-4">
      <FloatingElements />
      <MusicToggle />
      
      <div className="relative z-10 max-w-4xl mx-auto">
        {/* Back button */}
        <Button
          onClick={() => navigate("/")}
          variant="ghost"
          className="mb-8 rounded-full hover:bg-primary/20"
        >
          <ArrowLeft className="mr-2 h-4 w-4" />
          Kembali ke Home
        </Button>

        {/* Header */}
        <div className="text-center mb-12 animate-pop-in">
          <h1 className="text-4xl md:text-5xl font-bold mb-4 gradient-text">
            💌 Hubungi Kami
          </h1>
          <p className="text-lg text-foreground/80">
            Ada pertanyaan? Kami siap membantu! ✨
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {/* Form */}
          <div className="bubble-card p-8 animate-pop-in" style={{ animationDelay: "0.1s" }}>
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <Label htmlFor="fullname" className="text-base font-semibold">
                  Nama Lengkap
                </Label>
                <Input
                  id="fullname"
                  value={formData.fullname}
                  onChange={(e) => setFormData({ ...formData, fullname: e.target.value })}
                  placeholder="Masukkan nama lengkap"
                  required
                  className="mt-2 rounded-2xl border-2 h-12"
                />
              </div>

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
                <Label htmlFor="message" className="text-base font-semibold">
                  Pesan
                </Label>
                <Textarea
                  id="message"
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  placeholder="Tulis pesanmu di sini..."
                  required
                  rows={5}
                  className="mt-2 rounded-2xl border-2 resize-none"
                />
              </div>

              <Button
                type="submit"
                className="w-full btn-bubbly bg-primary hover:bg-primary/90 text-primary-foreground h-14 text-lg"
              >
                📤 Kirim Pesan
              </Button>
            </form>
          </div>

          {/* Info & Map */}
          <div className="space-y-6">
            {/* Social Media */}
            <div className="bubble-card p-8 animate-pop-in" style={{ animationDelay: "0.2s" }}>
              <h3 className="text-2xl font-bold mb-6 flex items-center gap-2">
                🌟 Media Sosial Kami
              </h3>
              <div className="space-y-4">
                <Button
                  variant="ghost"
                  className="w-full justify-start rounded-2xl h-14 hover:bg-primary/10"
                >
                  <Instagram className="mr-3 h-5 w-5 text-secondary" />
                  <span className="font-semibold">@quizzy_app</span>
                </Button>
                <Button
                  variant="ghost"
                  className="w-full justify-start rounded-2xl h-14 hover:bg-accent/10"
                >
                  <Facebook className="mr-3 h-5 w-5 text-accent" />
                  <span className="font-semibold">Quizzy Learning</span>
                </Button>
                <Button
                  variant="ghost"
                  className="w-full justify-start rounded-2xl h-14 hover:bg-info/10"
                >
                  <Twitter className="mr-3 h-5 w-5 text-info" />
                  <span className="font-semibold">@quizzy_learn</span>
                </Button>
                <Button
                  variant="ghost"
                  className="w-full justify-start rounded-2xl h-14 hover:bg-warning/10"
                >
                  <Mail className="mr-3 h-5 w-5 text-warning" />
                  <span className="font-semibold">hello@quizzy.app</span>
                </Button>
              </div>
            </div>

            {/* Cute Map */}
            <div className="bubble-card p-8 animate-pop-in" style={{ animationDelay: "0.3s" }}>
              <h3 className="text-2xl font-bold mb-6 flex items-center gap-2">
                <MapPin className="h-6 w-6 text-destructive" />
                Lokasi Kami
              </h3>
              <div className="bg-muted rounded-2xl h-48 flex items-center justify-center">
                <div className="text-center">
                  <p className="text-6xl mb-2">🗺️</p>
                  <p className="text-sm text-muted-foreground">Jakarta, Indonesia</p>
                  <p className="text-xs text-muted-foreground mt-1">📍 Jl. Coding No. 123</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Decorative elements */}
        <div className="text-center mt-12 space-y-2 animate-pop-in" style={{ animationDelay: "0.4s" }}>
          <p className="text-2xl">💝</p>
          <p className="text-sm text-muted-foreground">Kami akan membalas pesanmu secepat kilat! ⚡</p>
        </div>
      </div>
    </div>
  );
};

export default Contact;
