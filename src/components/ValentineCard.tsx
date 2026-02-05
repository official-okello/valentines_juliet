import { useState, useRef } from "react";
import { Heart, Sparkles } from "lucide-react";
import { Button } from "@/components/ui/button";
import confetti from "canvas-confetti";

const ValentineCard = () => {
  const [answered, setAnswered] = useState(false);
  const [noButtonPosition, setNoButtonPosition] = useState({ x: 0, y: 0 });
  const noButtonRef = useRef<HTMLButtonElement>(null);

  const handleYes = () => {
    setAnswered(true);
    
    // Trigger confetti celebration
    const duration = 3000;
    const end = Date.now() + duration;

    const colors = ["#5D4037", "#64B5F6", "#F48FB1", "#FFFFFF"];

    (function frame() {
      confetti({
        particleCount: 4,
        angle: 60,
        spread: 55,
        origin: { x: 0 },
        colors: colors,
      });
      confetti({
        particleCount: 4,
        angle: 120,
        spread: 55,
        origin: { x: 1 },
        colors: colors,
      });

      if (Date.now() < end) {
        requestAnimationFrame(frame);
      }
    })();
  };

  const handleNoHover = () => {
    const randomX = (Math.random() - 0.5) * 200;
    const randomY = (Math.random() - 0.5) * 100;
    setNoButtonPosition({ x: randomX, y: randomY });
  };

  if (answered) {
    return (
      <div className="text-center space-y-8 animate-scale-in">
        <div className="relative inline-block">
          <Heart className="w-32 h-32 text-rose fill-rose animate-pulse-love mx-auto" />
          <Sparkles className="absolute -top-2 -right-2 w-8 h-8 text-sky animate-wiggle" />
          <Sparkles className="absolute -bottom-2 -left-2 w-6 h-6 text-chocolate-light animate-wiggle" style={{ animationDelay: "0.2s" }} />
        </div>
        <h2 className="text-5xl md:text-7xl font-script text-chocolate">
          Yay! 💕
        </h2>
        <p className="text-2xl md:text-3xl text-chocolate-light font-display">
          You just made me the happiest person!
        </p>
        <p className="text-xl text-muted-foreground font-display">
          Can't wait to celebrate with you! 🍫💙🤍
        </p>
      </div>
    );
  }

  return (
    <div className="text-center space-y-8">
      <div className="relative inline-block animate-float">
        <Heart className="w-24 h-24 md:w-32 md:h-32 text-rose fill-rose animate-pulse-love mx-auto drop-shadow-lg" />
      </div>
      
      <div className="space-y-4">
        <h1 className="text-4xl md:text-6xl lg:text-7xl font-script text-chocolate leading-tight">
          Hey Beautiful...
        </h1>
        <p className="text-xl md:text-2xl text-chocolate-light font-display">
          I have a very important question for you
        </p>
      </div>

      <div className="py-8">
        <h2 className="text-3xl md:text-5xl lg:text-6xl font-display font-bold text-transparent bg-clip-text bg-gradient-to-r from-chocolate via-sky to-rose animate-shimmer">
          Will You Be My Valentine?
        </h2>
      </div>

      <div className="flex flex-col sm:flex-row items-center justify-center gap-6 pt-4">
        <Button
          onClick={handleYes}
          className="group relative px-12 py-8 text-2xl font-script bg-chocolate hover:bg-chocolate-dark text-primary-foreground rounded-full shadow-xl hover:shadow-2xl transition-all duration-300 hover:scale-110"
        >
          <span className="flex items-center gap-3">
            Yes! 
            <Heart className="w-6 h-6 fill-current group-hover:animate-pulse-love" />
          </span>
        </Button>

        <Button
          ref={noButtonRef}
          onMouseEnter={handleNoHover}
          onTouchStart={handleNoHover}
          variant="outline"
          className="px-8 py-6 text-lg font-display border-2 border-muted-foreground/30 text-muted-foreground rounded-full transition-all duration-200"
          style={{
            transform: `translate(${noButtonPosition.x}px, ${noButtonPosition.y}px)`,
          }}
        >
          No...
        </Button>
      </div>

      <p className="text-sm text-muted-foreground/70 font-display italic pt-4">
        (Hint: The "No" button is a bit shy 😉)
      </p>
    </div>
  );
};

export default ValentineCard;
