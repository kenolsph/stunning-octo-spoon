import { Button } from "@/components/ui/button";
import { ArrowRight, FileText, Github, Linkedin, Twitter, Instagram, Mail } from "lucide-react";

const techBadges = [
  { name: "TypeScript", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg" },
  { name: "Node.js", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg" },
  { name: "Next.js", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nextjs/nextjs-original.svg", invert: true },
  { name: "PostgreSQL", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postgresql/postgresql-original.svg" },
];

const socialLinks = [
  { icon: Github, href: "https://github.com/MonisMS", label: "GitHub" },
  { icon: Linkedin, href: "https://www.linkedin.com/in/syed-monis-sarwar-sms47/", label: "LinkedIn" },
  { icon: Twitter, href: "https://x.com/SMSarwar47", label: "Twitter" },
  { icon: Instagram, href: "https://www.instagram.com/monis_sarwar/", label: "Instagram" },
  { icon: Mail, href: "mailto:monissms16@gmail.com", label: "Email" },
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
              src="https://www.m0nis.com/_next/image?url=%2Fprofile-pic-1.jpeg&w=384&q=75"
              alt="Monis profile"
              className="w-full h-full object-cover"
            />
          </div>
          {/* Available indicator */}
          <div className="absolute -bottom-2 left-1/2 -translate-x-1/2 flex items-center gap-2 px-3 py-1.5 rounded-full bg-secondary border border-border text-xs">
            <span className="w-2 h-2 rounded-full bg-available animate-pulse" />
            <span className="text-muted-foreground">Available for opportunities</span>
          </div>
        </div>

        {/* Heading */}
        <h1
          className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight mb-6 animate-slide-up"
          style={{ animationDelay: "0.1s" }}
        >
          Hi, I'm <span className="text-gradient">Monis</span>—a full-stack web developer.
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
              {index < techBadges.length - 1 && (index === techBadges.length - 2 ? ", and " : ", ")}
            </span>
          ))}
          , with a strong focus on <strong className="text-foreground">backend architecture</strong> and{" "}
          <strong className="text-foreground">database design</strong>. I care about{" "}
          <strong className="text-foreground">system performance</strong> and building software that
          actually holds up in production.
        </p>

        {/* CTAs */}
        <div
          className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-8 animate-slide-up"
          style={{ animationDelay: "0.3s" }}
        >
          <Button variant="hero" size="lg" asChild>
            <a href="https://cal.com/monis-sarwar-vvbnfn" target="_blank" rel="noopener noreferrer">
              Book a call
              <ArrowRight className="w-4 h-4" />
            </a>
          </Button>
          <Button variant="hero-outline" size="lg" asChild>
            <a href="#contact">
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
