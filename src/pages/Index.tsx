import FloatingHearts from "@/components/FloatingHearts";
import ValentineCard from "@/components/ValentineCard";
import { Sparkles } from "lucide-react";

const Index = () => {
  return (
    <div className="min-h-screen bg-gradient-sky relative overflow-hidden">
      <FloatingHearts />
      
      {/* Decorative elements */}
      <div className="absolute top-10 left-10 opacity-30">
        <Sparkles className="w-8 h-8 text-sky animate-wiggle" />
      </div>
      <div className="absolute top-20 right-16 opacity-30">
        <Sparkles className="w-6 h-6 text-chocolate animate-wiggle" style={{ animationDelay: "0.3s" }} />
      </div>
      <div className="absolute bottom-32 left-20 opacity-30">
        <Sparkles className="w-10 h-10 text-rose animate-wiggle" style={{ animationDelay: "0.6s" }} />
      </div>
      <div className="absolute bottom-20 right-10 opacity-30">
        <Sparkles className="w-7 h-7 text-sky-light animate-wiggle" style={{ animationDelay: "0.9s" }} />
      </div>

      {/* Main content */}
      <main className="relative z-10 flex items-center justify-center min-h-screen px-4 py-12">
        <div className="w-full max-w-3xl">
          <div className="bg-cream/80 backdrop-blur-sm rounded-3xl shadow-2xl p-8 md:p-12 lg:p-16 border border-chocolate/10">
            <ValentineCard />
          </div>
          
          {/* Footer decoration */}
          <div className="text-center mt-8 space-y-2">
            <p className="text-chocolate-light/60 font-script text-lg">
              Made with 💙 just for you
            </p>
            <div className="flex justify-center gap-2">
              <span className="w-2 h-2 rounded-full bg-chocolate/40"></span>
              <span className="w-2 h-2 rounded-full bg-sky/40"></span>
              <span className="w-2 h-2 rounded-full bg-rose/40"></span>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default Index;
