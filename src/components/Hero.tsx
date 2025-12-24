import { Button } from "@/components/ui/button";
import { ArrowRight, FileText, Github, Linkedin, Twitter, Instagram, Mail } from "lucide-react";

const techBadges = [
  { name: "TypeScript", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg" },
  { name: "React", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg" },
  { name: "Node.js", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg" },
  { name: "PostgreSQL", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postgresql/postgresql-original.svg" },
];

const socialLinks = [
 { icon: Mail, href: "mailto:feluopi@gmail.com", label: "Email" },
  { icon: Github, href: "https://github.com/kenolsph", label: "GitHub" },
  { icon: Linkedin, href: "https://www.linkedin.com/in/isaac-adebisi/", label: "LinkedIn" },
  { icon: Instagram, href: "https://www.instagram.com/ii.tolu", label: "Instagram" },
];

export const Hero = () => {
  return (
    <section
      id="home"
      className="min-h-screen flex flex-col items-center justify-center pt-20 pb-16 px-4"
    >
       <div className="container max-w-4xl text-center">
        {/* Profile Image */}
        <div className="relative inline-block mb-6 animate-fade-in">
          <div className="w-40 h-40 md:w-48 md:h-48 rounded-full overflow-hidden border-4 border-secondary shadow-card">
            <img
              src="/me.jpg"
              alt="Monis profile"
              className="w-full h-full object-cover object-top"
            />
          </div>
          {/* Available indicator on border */}
          <div className="group absolute bottom-[12%] right-[12%] cursor-pointer">
            <span className="block w-4 h-4 rounded-full bg-available border-2 border-background animate-pulse shadow-lg" />
            <div className="absolute left-1/2 -translate-x-1/2 top-full mt-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none z-10">
              <div className="px-3 py-1.5 rounded-full bg-secondary border border-border text-xs whitespace-nowrap">
                <span className="text-muted-foreground">Available for opportunities</span>
              </div>
            </div>
          </div>
        </div>

        {/* Heading */}
        <h1
          className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight mb-6 animate-slide-up"
          style={{ animationDelay: "0.1s" }}
        >
          Hi, I'm <span className="text-gradient">Isaac</span> a Software
          Engineer.
        </h1>

        {/* Description */}
        <p
          className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto mb-6 animate-slide-up"
          style={{ animationDelay: "0.2s" }}
        >
          I build scalable web applications using{" "}
          {techBadges.map((tech, index) => (
            <span key={tech.name}>
              <span className="inline-flex items-center gap-1.5 px-2 py-0.5 rounded-md bg-secondary text-foreground text-sm mx-0.5">
                <img
                  src={tech.icon}
                  alt={tech.name}
                  className={`w-4 h-4 ${tech.invert ? "invert" : ""}`}
                />
                {tech.name}
              </span>
              {index < techBadges.length - 1 &&
                (index === techBadges.length - 2 ? ", and " : ", ")}
            </span>
          ))}
          , with a strong focus on{" "}
          <strong className="text-foreground">frontend architecture</strong> and{" "}
          <strong className="text-foreground">database design</strong>. I care
          about <strong className="text-foreground">system performance</strong>{" "}
          and building software that actually holds up in production.
        </p>

        {/* CTAs */}
        <div
          className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-8 animate-slide-up"
          style={{ animationDelay: "0.3s" }}
        >
          <Button variant="hero" size="lg" asChild>
            <a
              href="https://cal.com/isaac-adebisi-vrytfb"
              target="_blank"
              rel="noopener noreferrer"
            >
              Book a call
              <ArrowRight className="w-4 h-4" />
            </a>
            
          </Button>
          <Button variant="hero-outline" size="lg" asChild>
            <a href="/resume.pdf" download>
              <FileText className="w-4 h-4" />
              Resume
            </a>
          </Button>
        </div>

        {/* Social Links */}
        <div
          className="flex items-center justify-center gap-3 animate-slide-up"
          style={{ animationDelay: "0.4s" }}
        >
          {socialLinks.map((social) => (
            <a
              key={social.label}
              href={social.href}
              target="_blank"
              rel="noopener noreferrer"
              className="p-2.5 rounded-lg text-muted-foreground hover:text-foreground hover:bg-secondary transition-all duration-300"
              aria-label={social.label}
            >
              <social.icon className="w-5 h-5" />
            </a>
          ))}
        </div>
      </div>
    </section>
  );
};
