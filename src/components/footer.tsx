
import { Github, Instagram, Linkedin, Globe } from "lucide-react";

export function Footer() {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="border-t border-border">
      <div className="container mx-auto py-8 px-4 md:px-6">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <h3 className="text-lg font-bold mb-4">Khoirul Muhlisin</h3>
            <p className="text-muted-foreground mb-4">
              Web Developer with over 5 years of experience building modern web applications.
            </p>
            <div className="flex space-x-4">
              <a
                href="https://www.instagram.com/khoirulmuhlisin1984/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-foreground/80 hover:text-primary transition-colors"
                aria-label="Instagram"
              >
                <Instagram size={20} />
              </a>
              <a
                href="https://id.linkedin.com/in/khoerul-muhlisin-91760021a"
                target="_blank"
                rel="noopener noreferrer"
                className="text-foreground/80 hover:text-primary transition-colors"
                aria-label="LinkedIn"
              >
                <Linkedin size={20} />
              </a>
              <a
                href="https://github.com/khoerulmuhlisin"
                target="_blank"
                rel="noopener noreferrer"
                className="text-foreground/80 hover:text-primary transition-colors"
                aria-label="GitHub"
              >
                <Github size={20} />
              </a>
              <a
                href="https://khoirulmuhlisin.my.id"
                target="_blank"
                rel="noopener noreferrer"
                className="text-foreground/80 hover:text-primary transition-colors"
                aria-label="Website"
              >
                <Globe size={20} />
              </a>
            </div>
          </div>
          <div>
            <h3 className="text-lg font-bold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li><a href="#home" className="text-foreground/80 hover:text-primary transition-colors">Home</a></li>
              <li><a href="#about" className="text-foreground/80 hover:text-primary transition-colors">About</a></li>
              <li><a href="#projects" className="text-foreground/80 hover:text-primary transition-colors">Projects</a></li>
              <li><a href="#skills" className="text-foreground/80 hover:text-primary transition-colors">Skills</a></li>
              <li><a href="#contact" className="text-foreground/80 hover:text-primary transition-colors">Contact</a></li>
            </ul>
          </div>
          <div>
            <h3 className="text-lg font-bold mb-4">Contact</h3>
            <p className="text-muted-foreground mb-2">Feel free to reach out if you have any questions.</p>
            <p className="text-foreground/80">Email: info@khoirulmuhlisin.my.id</p>
          </div>
        </div>
        <div className="mt-8 pt-6 border-t border-border/30 text-center text-muted-foreground">
          <p>&copy; {currentYear} Khoirul Muhlisin. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
