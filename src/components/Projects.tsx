import { ExternalLink, Github, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";

const projects = [
  {
    title: "AskAI",
    description:
      "Your personal AI assistant that answers questions, processes meetings, and summarizes content in real-time. Upload recordings or documents, and let AI extract key insights and action items for you.",
    image: "https://www.m0nis.com/_next/image?url=%2Fask-ai.png&w=640&q=75",
    liveUrl: "https://askai-nu.vercel.app/",
    githubUrl: "https://github.com/MonisMS/askai",
    status: "operational",
    gradient: "from-red-500/20 via-orange-500/20 to-yellow-500/20",
  },
  {
    title: "FolderMage",
    description:
      "A desktop app that transforms your messy Downloads and cluttered folders into organized bliss. Features smart auto-sorting, undo functionality, background job queues, and a clean dashboard.",
    image: "https://www.m0nis.com/_next/image?url=%2Ffolder-mage.png&w=640&q=75",
    githubUrl: "https://github.com/MonisMS/folder-organizer",
    status: "in-development",
    gradient: "from-slate-500/20 via-gray-500/20 to-zinc-500/20",
  },
  {
    title: "Beats Generator",
    description:
      "An AI-powered music generator that creates unique tunes using the Gemini API. Just describe the vibe you want, and it generates beats for you. Features a vinyl-inspired UI with full playback controls.",
    image: "https://www.m0nis.com/_next/image?url=%2Ftunes-generator-image%20(2).png&w=640&q=75",
    liveUrl: "https://tunes-generator.vercel.app/",
    githubUrl: "https://github.com/MonisMS/Tunes-generator-",
    status: "operational",
    gradient: "from-purple-500/20 via-pink-500/20 to-rose-500/20",
  },
];

export const Projects = () => {
  return (
    <section id="projects" className="py-24 px-4">
      <div className="container max-w-6xl">
        {/* Section Header */}
        <div className="mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-3">Projects</h2>
          <p className="text-muted-foreground text-lg">Some things I've built.</p>
        </div>

        {/* Projects Grid */}
        <div className="grid md:grid-cols-2 gap-6 mb-8">
          {projects.map((project, index) => (
            <div
              key={project.title}
              className="group relative rounded-2xl overflow-hidden bg-card border border-border hover:border-muted-foreground/50 transition-all duration-500 shadow-card"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              {/* Image */}
              <div className={`relative h-48 overflow-hidden bg-gradient-to-br ${project.gradient}`}>
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover opacity-90 group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-card via-transparent to-transparent" />
              </div>

              {/* Content */}
              <div className="p-6">
                {/* Title & Links */}
                <div className="flex items-start justify-between mb-3">
                  <a
                    href={project.liveUrl || project.githubUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-xl font-semibold hover:text-primary transition-colors"
                  >
                    {project.title}
                  </a>
                  <div className="flex items-center gap-2">
                    {project.liveUrl && (
                      <a
                        href={project.liveUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="p-2 rounded-lg text-muted-foreground hover:text-foreground hover:bg-secondary transition-all"
                      >
                        <ExternalLink className="w-4 h-4" />
                      </a>
                    )}
                    <a
                      href={project.githubUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="p-2 rounded-lg text-muted-foreground hover:text-foreground hover:bg-secondary transition-all"
                    >
                      <Github className="w-4 h-4" />
                    </a>
                  </div>
                </div>

                {/* Description */}
                <p className="text-muted-foreground text-sm mb-4 line-clamp-3">
                  {project.description}
                </p>

                {/* Status */}
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <span
                      className={`w-2 h-2 rounded-full ${
                        project.status === "operational"
                          ? "bg-available"
                          : "bg-in-progress"
                      }`}
                    />
                    <span className="text-xs text-muted-foreground">
                      {project.status === "operational"
                        ? "All Systems Operational"
                        : "In Development"}
                    </span>
                  </div>
                  <a
                    href={project.liveUrl || project.githubUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-xs text-muted-foreground hover:text-primary transition-colors flex items-center gap-1"
                  >
                    View Details
                    <ArrowRight className="w-3 h-3" />
                  </a>
                </div>
              </div>
            </div>
          ))}

          {/* More Projects Card */}
          <a
            href="https://github.com/MonisMS"
            target="_blank"
            rel="noopener noreferrer"
            className="group flex flex-col items-center justify-center min-h-[280px] rounded-2xl border border-dashed border-border hover:border-muted-foreground/50 bg-card/50 transition-all duration-300"
          >
            <div className="text-center p-6">
              <h3 className="text-lg font-semibold mb-2 group-hover:text-primary transition-colors">
                More projects coming soon
              </h3>
              <p className="text-muted-foreground text-sm">
                Visit my GitHub to see what I'm currently working on.
              </p>
            </div>
          </a>
        </div>
      </div>
    </section>
  );
};
