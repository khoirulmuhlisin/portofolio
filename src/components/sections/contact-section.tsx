
import { useEffect, useRef, useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Mail, Phone, MapPin, Send, Github, Instagram, Linkedin, Globe } from "lucide-react";
import { toast } from "sonner";

export function ContactSection() {
  const sectionRef = useRef<HTMLElement>(null);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

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

  const contactInfo = [
    {
      icon: <Mail className="h-5 w-5" />,
      title: "Email",
      value: "info@khoirulmuhlisin.my.id",
    },
    {
      icon: <Phone className="h-5 w-5" />,
      title: "Phone",
      value: "+62 812 1062 2374",
    },
    {
      icon: <MapPin className="h-5 w-5" />,
      title: "Location",
      value: "Bogor, Indonesia",
    },
  ];

  const socialLinks = [
    {
      icon: <Instagram className="h-5 w-5" />,
      name: "Instagram",
      url: "https://www.instagram.com/khoirulmuhlisin1984/",
    },
    {
      icon: <Linkedin className="h-5 w-5" />,
      name: "LinkedIn",
      url: "https://id.linkedin.com/in/khoerul-muhlisin-91760021a",
    },
    {
      icon: <Github className="h-5 w-5" />,
      name: "GitHub",
      url: "https://github.com/khoerulmuhlisin",
    },
    {
      icon: <Globe className="h-5 w-5" />,
      name: "Website",
      url: "https://khoirulmuhlisin.my.id",
    },
  ];

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate form submission
    setTimeout(() => {
      toast.success("Message sent successfully! I'll get back to you soon.");
      setFormData({ name: "", email: "", message: "" });
      setIsSubmitting(false);
    }, 1500);
  };

  return (
    <section
      ref={sectionRef}
      id="contact"
      className="py-20 bg-muted smooth-scroll-section"
    >
      <div className="container px-4 md:px-6">
        <div className="flex flex-col items-center text-center mb-12">
          <p className="text-sm font-medium px-3 py-1 bg-primary/10 text-primary rounded-full mb-4">
            Contact Me
          </p>
          <h2 className="text-3xl md:text-4xl font-bold font-heading">
            Get In Touch
          </h2>
          <div className="w-20 h-1 bg-primary mt-4 rounded mb-6"></div>
          <p className="text-muted-foreground max-w-lg">
            Feel free to reach out if you're looking to collaborate, have a project in mind, or just want to say hello!
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
          <div className="bg-card p-6 rounded-lg border border-border">
            <h3 className="text-xl font-bold mb-6">Send Me a Message</h3>
            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label htmlFor="name" className="block text-sm font-medium mb-1">
                  Your Name
                </label>
                <Input
                  id="name"
                  name="name"
                  placeholder="Your Name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                />
              </div>
              <div>
                <label htmlFor="email" className="block text-sm font-medium mb-1">
                  Your Email
                </label>
                <Input
                  id="email"
                  name="email"
                  type="email"
                  placeholder="email@example.com"
                  value={formData.email}
                  onChange={handleChange}
                  required
                />
              </div>
              <div>
                <label htmlFor="message" className="block text-sm font-medium mb-1">
                  Your Message
                </label>
                <Textarea
                  id="message"
                  name="message"
                  placeholder="Hello, I'd like to discuss a project..."
                  rows={5}
                  value={formData.message}
                  onChange={handleChange}
                  required
                />
              </div>
              <Button 
                type="submit" 
                className="w-full gap-2" 
                disabled={isSubmitting}
              >
                {isSubmitting ? "Sending..." : "Send Message"}
                <Send className="h-4 w-4" />
              </Button>
            </form>
          </div>

          <div className="space-y-8">
            <div className="bg-card p-6 rounded-lg border border-border">
              <h3 className="text-xl font-bold mb-6">Contact Information</h3>
              <div className="space-y-4">
                {contactInfo.map((info, index) => (
                  <div key={index} className="flex items-start">
                    <div className="p-3 bg-muted rounded-md text-primary mr-4">
                      {info.icon}
                    </div>
                    <div>
                      <h4 className="font-medium">{info.title}</h4>
                      <p className="text-muted-foreground">{info.value}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="bg-card p-6 rounded-lg border border-border">
              <h3 className="text-xl font-bold mb-6">Connect With Me</h3>
              <div className="grid grid-cols-2 gap-4">
                {socialLinks.map((link, index) => (
                  <a 
                    key={index}
                    href={link.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-3 p-3 rounded-md border border-border hover:bg-muted transition-colors"
                  >
                    <div className="text-primary">
                      {link.icon}
                    </div>
                    <span>{link.name}</span>
                  </a>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
