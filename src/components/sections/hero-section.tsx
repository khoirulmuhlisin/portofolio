
import { Button } from "@/components/ui/button";
import { ArrowRight, Download } from "lucide-react";
import { useEffect, useRef } from "react";

export function HeroSection() {
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("active");
          }
        });
      },
      { threshold: 0.1 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, []);

  return (
    <section
      ref={sectionRef}
      id="home"
      className="min-h-screen flex items-center py-20 smooth-scroll-section relative"
    >
      <div className="absolute inset-0 -z-10 overflow-hidden">
        <div className="absolute -z-10 top-0 right-0 w-[500px] h-[500px] bg-primary/10 rounded-full blur-[100px] opacity-50 animate-spin-slow" />
        <div className="absolute -z-10 bottom-0 left-0 w-[400px] h-[400px] bg-secondary/10 rounded-full blur-[100px] opacity-50 animate-spin-slow" style={{ animationDirection: 'reverse' }} />
      </div>
      
      <div className="container px-4 md:px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12 items-center">
          <div className="space-y-8 order-2 md:order-1">
            <div className="space-y-4">
              <p className="inline-block text-sm font-medium px-3 py-1 bg-primary/10 text-primary rounded-full animate-fadeIn animate-delay-100">
                Hi, I'm Khoirul Muhlisin
              </p>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold font-heading tracking-tight animate-fadeIn animate-delay-200">
                <span className="block">Web Developer</span>
                <span className="block text-primary mt-1">& Designer</span>
              </h1>
              <p className="text-lg md:text-xl text-muted-foreground max-w-md animate-fadeIn animate-delay-300">
                Creating elegant and functional web experiences with over 5 years of professional expertise.
              </p>
            </div>
            
            <div className="flex flex-wrap gap-4 animate-fadeIn animate-delay-400">
              <Button asChild size="lg" className="rounded-full">
                <a href="#contact">
                  Hire Me <ArrowRight className="ml-2 h-4 w-4" />
                </a>
              </Button>
              <Button asChild size="lg" variant="outline" className="rounded-full">
                <a href="#projects">
                  View Portfolio
                </a>
              </Button>
            </div>
          </div>
          
          <div className="relative order-1 md:order-2 animate-fadeIn">
            <div className="aspect-square max-w-md mx-auto relative">
              <div className="absolute inset-0 bg-gradient-to-tr from-primary/20 to-secondary/20 rounded-full animate-float"></div>
              <div className="absolute inset-4 overflow-hidden rounded-full border border-border/50 bg-background/30 backdrop-blur-sm">
                <img
                  src="https://tse3.mm.bing.net/th/id/OIP.Y188xgyBEQPB6CAFmu1drAHaHa?rs=1&pid=ImgDetMain"
                  alt="Khoirul Muhlisin"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
      
      <div className="scroll-indicator hidden md:flex">
        <span className="sr-only">Scroll down</span>
        <span></span>
      </div>
    </section>
  );
}
