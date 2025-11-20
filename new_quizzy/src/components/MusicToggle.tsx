import { Volume2, VolumeX } from "lucide-react";
import { Button } from "./ui/button";
import { useState } from "react";

export const MusicToggle = () => {
  const [isMusicOn, setIsMusicOn] = useState(true);

  const toggleMusic = () => {
    setIsMusicOn(!isMusicOn);
    // In a real implementation, this would control background music
    console.log("Music toggled:", !isMusicOn);
  };

  return (
    <Button
      onClick={toggleMusic}
      size="icon"
      className="fixed top-4 right-4 z-50 rounded-full w-12 h-12 bg-primary hover:bg-primary/90 text-primary-foreground shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-110"
    >
      {isMusicOn ? (
        <Volume2 className="h-5 w-5" />
      ) : (
        <VolumeX className="h-5 w-5" />
      )}
    </Button>
  );
};
