import { useEffect } from "react";
import {
  CommandDialog,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
  CommandList,
} from "@/components/ui/command";
import { Home, Briefcase, FileText, FolderKanban, FileUser, Code2, MessageSquare, Github, Linkedin, Mail, Instagram } from "lucide-react";

const navigationItems = [
  { label: "Go to Home", href: "#home", icon: Home },
  { label: "Go to Background", href: "#experience", icon: Briefcase },
  { label: "Go to Writing", href: "#blog", icon: FileText },
  { label: "Go to Projects", href: "#projects", icon: FolderKanban },
  { label: "Go to Resume", href: "/Isaac_Adebisi_Resume.pdf", icon: FileUser, external: true },
  { label: "Go to Skills", href: "#skills", icon: Code2 },
  { label: "Go to Contact", href: "#contact", icon: MessageSquare },
];

const socialItems = [
  { label: "GitHub", href: "https://github.com/kenolsph", icon: Github },
  { label: "LinkedIn", href: "https://www.linkedin.com/in/isaac-adebisi/", icon: Linkedin },
  { label: "Send Email", href: "mailto:feluopi@gmail.com", icon: Mail },
  { label: "Instagram", href: "https://instagram.com/ii.tolu", icon: Instagram },
];

interface CommandPaletteProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
}

export const CommandPalette = ({ open, onOpenChange }: CommandPaletteProps) => {
  useEffect(() => {
    const down = (e: KeyboardEvent) => {
      if (e.key === "k" && (e.metaKey || e.ctrlKey)) {
        e.preventDefault();
        onOpenChange(!open);
      }
    };

    document.addEventListener("keydown", down);
    return () => document.removeEventListener("keydown", down);
  }, [open, onOpenChange]);

  const handleNavigate = (href: string, external?: boolean) => {
    onOpenChange(false);
    if (external) {
      window.open(href, "_blank");
    } else if (href.startsWith("#")) {
      const element = document.getElementById(href.substring(1));
      if (element) {
        element.scrollIntoView({ behavior: "smooth" });
      }
    } else {
      window.open(href, "_blank");
    }
  };

  return (
    <CommandDialog open={open} onOpenChange={onOpenChange}>
      <CommandInput placeholder="Type a command or search..." />
      <CommandList>
        <CommandEmpty>No results found.</CommandEmpty>
        <CommandGroup heading="Navigation">
          {navigationItems.map((item) => (
            <CommandItem
              key={item.label}
              onSelect={() => handleNavigate(item.href, item.external)}
            >
              <item.icon className="mr-2 h-4 w-4" />
              <span>{item.label}</span>
            </CommandItem>
          ))}
        </CommandGroup>
        <CommandGroup heading="Socials">
          {socialItems.map((item) => (
            <CommandItem
              key={item.label}
              onSelect={() => handleNavigate(item.href, true)}
            >
              <item.icon className="mr-2 h-4 w-4" />
              <span>{item.label}</span>
            </CommandItem>
          ))}
        </CommandGroup>
      </CommandList>
    </CommandDialog>
  );
};