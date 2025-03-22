
import { useEffect, useRef } from "react";
import { Timer, Code, Globe, Users } from "lucide-react";

export function AboutSection() {
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

  const stats = [
    {
      icon: <Timer className="h-6 w-6" />,
      value: "5+",
      label: "Years Experience",
    },
    {
      icon: <Code className="h-6 w-6" />,
      value: "20+",
      label: "Projects Completed",
    },
    {
      icon: <Users className="h-6 w-6" />,
      value: "15+",
      label: "Satisfied Clients",
    },
    {
      icon: <Globe className="h-6 w-6" />,
      value: "5+",
      label: "Countries Reached",
    },
  ];

  return (
    <section
      ref={sectionRef}
      id="about"
      className="py-20 smooth-scroll-section"
    >
      <div className="container px-4 md:px-6">
        <div className="flex flex-col items-center text-center mb-12">
          <p className="text-sm font-medium px-3 py-1 bg-primary/10 text-primary rounded-full mb-4">
            About Me
          </p>
          <h2 className="text-3xl md:text-4xl font-bold font-heading">
            My Journey
          </h2>
          <div className="w-20 h-1 bg-primary mt-4 rounded"></div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
          <div className="space-y-6">
            <h3 className="text-2xl font-bold">
              I'm Khoirul Muhlisin, a passionate Web Developer
            </h3>
            <p className="text-muted-foreground leading-relaxed">
              With over 5 years of experience in web development, I specialize in creating responsive, 
              user-friendly websites and applications that deliver exceptional user experiences.
            </p>
            <p className="text-muted-foreground leading-relaxed">
              My journey in web development began with a curiosity about how websites work, which 
              quickly evolved into a passion for crafting beautiful, functional digital experiences.
              I'm constantly learning and exploring new technologies to stay at the forefront of web development.
            </p>
            <p className="text-muted-foreground leading-relaxed">
              I believe that great design combines aesthetics with functionality, and I strive to create
              solutions that not only look great but also solve real problems for users and businesses.
            </p>
            
            <div className="pt-4">
              <h4 className="font-bold mb-3">My expertise includes:</h4>
              <ul className="grid grid-cols-2 gap-y-2 gap-x-4">
                <li className="flex items-center">
                  <span className="w-2 h-2 bg-primary rounded-full mr-2"></span>
                  Frontend Development
                </li>
                <li className="flex items-center">
                  <span className="w-2 h-2 bg-primary rounded-full mr-2"></span>
                  Backend Development
                </li>
                <li className="flex items-center">
                  <span className="w-2 h-2 bg-primary rounded-full mr-2"></span>
                  Responsive Design
                </li>
                <li className="flex items-center">
                  <span className="w-2 h-2 bg-primary rounded-full mr-2"></span>
                  UI/UX Design
                </li>
                <li className="flex items-center">
                  <span className="w-2 h-2 bg-primary rounded-full mr-2"></span>
                  API Integration
                </li>
                <li className="flex items-center">
                  <span className="w-2 h-2 bg-primary rounded-full mr-2"></span>
                  Database Management
                </li>
              </ul>
            </div>
          </div>
          
          <div>
            <div className="relative">
              <div className="aspect-[4/3] overflow-hidden rounded-lg border border-border">
                <img
                  src="https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTV8fHdlYiUyMGRlbGV2b3BlcnxlbnwwfHwwfHx8MA%3D%3D"
                  alt="Khoirul working"
                  className="w-full h-full object-cover transition-all duration-500 hover:scale-105"
                />
              </div>
              
              <div className="absolute -bottom-6 -right-6 p-6 bg-card shadow-lg rounded-lg border border-border max-w-xs">
                <div className="grid grid-cols-2 gap-4">
                  {stats.map((stat, index) => (
                    <div key={index} className="text-center">
                      <div className="flex justify-center text-primary mb-2">
                        {stat.icon}
                      </div>
                      <div className="font-bold text-xl">{stat.value}</div>
                      <div className="text-xs text-muted-foreground">{stat.label}</div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
