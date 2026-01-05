import { Button } from "@/components/ui/button";
import { Mail, Calendar, Github, Linkedin, Instagram } from "lucide-react";

const socialLinks = [
  { icon: Mail, href: "feluopi@gmail.com", label: "Email" },
  { icon: Github, href: "https://github.com/kenolsph", label: "GitHub" },
  { icon: Linkedin, href: "https://www.linkedin.com/in/isaac-adebisi/", label: "LinkedIn" },
  { icon: Instagram, href: "https://www.instagram.com/ii.tolu", label: "Instagram" },
];

export const Contact = () => {
  return (
    <section id="contact" className="py-24 px-4">
      <div className="container max-w-4xl text-center">
        {/* Section Header */}
        <div className="mb-8">
          <h2 className="text-3xl md:text-4xl font-bold mb-3">Let's talk</h2>
          <p className="text-muted-foreground text-lg">
            Have a project or opportunity? Reach out.
          </p>
        </div>

        {/* CTAs */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-8">
          <Button variant="hero-outline" size="lg" asChild>
            <a href="feluopi@gmail.com">
              <Mail className="w-4 h-4" />
              feluopi@gmail.com
            </a>
          </Button>
          <Button variant="hero" size="lg" asChild>
            <a href="https://cal.com/isaac-adebisi-vrytfb" target="_blank" rel="noopener noreferrer">
              <Calendar className="w-4 h-4" />
              Book a call
            </a>
          </Button>
        </div>

        {/* Social Links */}
        <div className="flex items-center justify-center gap-3">
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
