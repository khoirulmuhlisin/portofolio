
import { useEffect, useRef } from "react";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { ExternalLink, Github, Calendar, Bookmark } from "lucide-react";

export function ProjectsSection() {
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

  const projects = [
    {
      title: "Vero Design",
      description: "Designing spaces, creating experiences – architectural designs that inspire and endure.",
      image: "https://images.unsplash.com/photo-1488972685288-c3fd157d7c7a?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8YXJjaGl0ZWN0dXJlfGVufDB8fDB8fHww",
      tags: ["Vite", "Tailwind CSS", "React", "Shadcn-ui", "TypeScript"],
      link: "https://verodesign.vercel.app",
      github: "#",
      year: "2024",
      featured: false
    },
    {
      title: "Vero Design",
      description: "Designing spaces, creating experiences – architectural designs that inspire and endure.",
      image: "https://images.unsplash.com/photo-1488972685288-c3fd157d7c7a?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8YXJjaGl0ZWN0dXJlfGVufDB8fDB8fHww",
      tags: ["Vite", "Tailwind CSS", "React", "Shadcn-ui", "TypeScript"],
      link: "https://verodesign.vercel.app",
      github: "#",
      year: "2024",
      featured: false
    },
    {
      title: "NgopiKuy",
      description: "Modern coffee shop website with online ordering capabilities, customer accounts, and admin dashboard.",
      image: "https://images.unsplash.com/photo-1498804103079-a6351b050096?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      tags: ["Vite", "Tailwind CSS", "React", "Shadcn-ui", "TypeScript"],
      link: "https://ngopikuy.vercel.app",
      github: "#",
      year: "2023",
      featured: true
    },
    {
      title: "Warung Bu Ade",
      description: "School canteen website with interactive menu, ordering system, and inventory management.",
      image: "https://plus.unsplash.com/premium_photo-1663126629970-f76cf591361d?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8Zm9vZCUyMGNvdXJ0fGVufDB8fDB8fHww",
      tags: ["Vite", "Tailwind CSS", "React", "Shadcn-ui", "TypeScript"],
      link: "https://warungbuade.vercel.app",
      github: "#",
      year: "2025",
      featured: true
    },
    {
      title: "Odading Mang Abo",
      description: "Traditional cake business website with online store, payment integration, and order tracking.",
      image: "https://i0.wp.com/resepkoki.id/wp-content/uploads/2018/04/Resep-Odading.jpg?fit=1481%2C1144&ssl=1",
      tags: ["Vite", "Tailwind CSS", "React", "Shadcn-ui", "TypeScript"],
      link: "https://odadingmangabo.vercel.app",
      github: "#",
      year: "2022",
      featured: false
    },
    {
      title: "Selamat Ulang Tahun",
      description: "Interactive birthday greeting website with customizable messages, animations, and music.",
      image: "https://memesbams.com/wp-content/uploads/2019/05/Cool-Happy-Birthday-To-You-Images-3.jpg",
      tags: ["Vite", "Tailwind CSS", "React", "Shadcn-ui", "TypeScript"],
      link: "https://selamatulangtahun.vercel.app",
      github: "#",
      year: "2021",
      featured: false
    },
    {
      title: "Bakso Kaisar",
      description: "Delicious and Authentic Meatball Delights – A Taste of Tradition in Every Bite!",
      image: "https://1.bp.blogspot.com/-rPscTos01qE/XoSc5x-Av8I/AAAAAAAAGaM/kGdd2q5_9KUR5LNdZnMNueGEtou0J_e7wCLcBGAsYHQ/s640/resep-bakso-mercon-simple.jpg",
      tags: ["Vite", "Tailwind CSS", "React", "Shadcn-ui", "TypeScript"],
      link: "https://baksokaisar.vercel.app",
      github: "#",
      year: "2024",
      featured: false
    },
    {
      title: "DapoeRasa",
      description: "DapoeRasa is a premium catering service offering delicious, high-quality meals for daily needs, corporate events, and special occasions.",
      image: "https://th.bing.com/th/id/OIP.yZMqqi85Ca8zNpe8aSyCWwHaE8?rs=1&pid=ImgDetMain",
      tags: ["Next.js", "Styled Components", "Sanity CMS", "Three.js"],
      link: "https://dapoerasa.vercel.app",
      github: "#",
      year: "2025",
      featured: true
    },
    {
      title: "Jajana Lulu",
      description: "Dare to take a bite? Experience the crunch, feel the melt, taste the magic!.",
      image: "https://down-id.img.susercontent.com/file/sg-11134201-23020-883x3sd6i4mv04",
      tags: ["Next.js", "Styled Components", "Sanity CMS", "Three.js"],
      link: "https://jajananlulu.vercel.app",
      github: "#",
      year: "2025",
      featured: true
    },
    {
      title: "Ardisia Design",
      description: "Professional architecture service website with portfolio showcase, 3D models, and consultation booking.",
      image: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1050&q=80",
      tags: ["Next.js", "Styled Components", "Sanity CMS", "Three.js"],
      link: "https://ardisia.vercel.app",
      github: "#",
      year: "2023",
      featured: true
    },
  ];

  return (
    <section
      ref={sectionRef}
      id="projects"
      className="py-20 bg-muted/50 smooth-scroll-section relative overflow-hidden"
    >
      {/* Background decorative elements */}
      <div className="absolute -top-24 -right-24 w-96 h-96 bg-primary/5 rounded-full blur-3xl"></div>
      <div className="absolute -bottom-24 -left-24 w-96 h-96 bg-primary/5 rounded-full blur-3xl"></div>

      <div className="container px-4 md:px-6 relative z-10">
        <div className="flex flex-col items-center text-center mb-12">
          <p className="text-sm font-medium px-3 py-1 bg-primary/10 text-primary rounded-full mb-4">
            Portfolio
          </p>
          <h2 className="text-3xl md:text-4xl font-bold font-heading">
            Featured Projects
          </h2>
          <div className="w-20 h-1 bg-primary mt-4 rounded"></div>
          <p className="mt-4 text-muted-foreground max-w-2xl">
            A showcase of my work spanning web applications, e-commerce sites, and interactive experiences.
            Each project represents problem-solving, innovation, and attention to detail.
          </p>
        </div>

        {/* Featured Projects - Updated with consistent sizes */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-10">
          {projects.filter(p => p.featured).map((project, index) => (
            <Card 
              key={index} 
              className="overflow-hidden group transition-all duration-300 hover:shadow-md border-border/50 hover:border-primary/20 bg-card/80 backdrop-blur-sm flex flex-col h-full"
            >
              <div className="aspect-video w-full relative overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
                <div className="absolute bottom-2 right-2 flex gap-1">
                  <Badge variant="outline" className="bg-black/50 text-white border-none backdrop-blur-md text-xs">
                    {project.year}
                  </Badge>
                  {project.featured && (
                    <Badge variant="default" className="backdrop-blur-md text-xs">
                      Featured
                    </Badge>
                  )}
                </div>
              </div>
              <div className="flex flex-col flex-grow">
                <CardHeader className="pb-2">
                  <CardTitle className="text-lg group-hover:text-primary transition-colors">{project.title}</CardTitle>
                  <CardDescription className="line-clamp-2">{project.description}</CardDescription>
                </CardHeader>
                <CardContent className="pb-2 flex-grow">
                  <div className="flex flex-wrap gap-2 my-2">
                    {project.tags.slice(0, 3).map((tag, i) => (
                      <Badge key={i} variant="outline" className="font-normal text-xs">
                        {tag}
                      </Badge>
                    ))}
                    {project.tags.length > 3 && (
                      <Badge variant="outline" className="font-normal text-xs">
                        +{project.tags.length - 3} more
                      </Badge>
                    )}
                  </div>
                </CardContent>
                <CardFooter className="flex gap-2 mt-auto">
                  <Button asChild variant="outline" size="sm" className="w-full gap-2 group">
                    <a href={project.link} target="_blank" rel="noopener noreferrer">
                      View Project 
                      <ExternalLink className="h-3 w-3 transition-transform group-hover:translate-x-1" />
                    </a>
                  </Button>
                  <Button asChild variant="ghost" size="icon" className="h-8 w-8">
                    <a href={project.github} target="_blank" rel="noopener noreferrer">
                      <Github className="h-3.5 w-3.5" />
                    </a>
                  </Button>
                </CardFooter>
              </div>
            </Card>
          ))}
        </div>

        {/* Regular Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {projects.filter(p => !p.featured).map((project, index) => (
            <Card key={index} className="overflow-hidden group transition-all duration-300 hover:shadow-md border-border/50 hover:border-primary/20 bg-card/80 backdrop-blur-sm flex flex-col h-full">
              <div className="aspect-video w-full relative overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
                <div className="absolute bottom-2 right-2">
                  <Badge variant="outline" className="bg-black/50 text-white border-none backdrop-blur-md text-xs">
                    {project.year}
                  </Badge>
                </div>
              </div>
              <div className="flex flex-col flex-grow">
                <CardHeader className="pb-2">
                  <CardTitle className="text-lg group-hover:text-primary transition-colors">{project.title}</CardTitle>
                  <CardDescription className="line-clamp-2">{project.description}</CardDescription>
                </CardHeader>
                <CardContent className="pb-2 flex-grow">
                  <div className="flex flex-wrap gap-2 my-2">
                    {project.tags.slice(0, 3).map((tag, i) => (
                      <Badge key={i} variant="outline" className="font-normal text-xs">
                        {tag}
                      </Badge>
                    ))}
                    {project.tags.length > 3 && (
                      <Badge variant="outline" className="font-normal text-xs">
                        +{project.tags.length - 3} more
                      </Badge>
                    )}
                  </div>
                </CardContent>
                <CardFooter className="flex gap-2 mt-auto">
                  <Button asChild variant="outline" size="sm" className="w-full gap-2 group">
                    <a href={project.link} target="_blank" rel="noopener noreferrer">
                      View Project 
                      <ExternalLink className="h-3 w-3 transition-transform group-hover:translate-x-1" />
                    </a>
                  </Button>
                  <Button asChild variant="ghost" size="icon" className="h-8 w-8">
                    <a href={project.github} target="_blank" rel="noopener noreferrer">
                      <Github className="h-3.5 w-3.5" />
                    </a>
                  </Button>
                </CardFooter>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
