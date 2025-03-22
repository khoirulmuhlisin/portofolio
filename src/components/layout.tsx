
import { ReactNode } from "react";
import { Navbar } from "./navbar";
import { Footer } from "./footer";
import { ScrollToTop } from "./scroll-to-top";
import { ThemeProvider } from "./theme-provider";

interface LayoutProps {
  children: ReactNode;
}

export function Layout({ children }: LayoutProps) {
  return (
    <ThemeProvider>
      <div className="min-h-screen flex flex-col relative overflow-hidden">
        {/* Background elements */}
        <div className="fixed inset-0 -z-10 bg-grid opacity-20"></div>
        <div className="fixed -top-[30%] -left-[10%] w-[70%] h-[70%] bg-primary/5 rounded-full filter blur-[120px] animate-spin-slow"></div>
        <div className="fixed -bottom-[40%] -right-[10%] w-[80%] h-[80%] bg-secondary/5 rounded-full filter blur-[120px] animate-spin-reverse"></div>
        
        <Navbar />
        <main className="flex-1 pt-16">{children}</main>
        <Footer />
        <ScrollToTop />
      </div>
    </ThemeProvider>
  );
}
