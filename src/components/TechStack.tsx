const technologies = [
  { name: "React", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg" },
  { name: "Java", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/java/java-original.svg" },
  { name: "Bootstrap", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/bootstrap/bootstrap-original.svg" },
  { name: "TypeScript", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg" },
  { name: "JavaScript", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg" },
  { name: "Tailwind", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/tailwindcss/tailwindcss-original.svg" },
  { name: "Node.js", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg" },
  { name: "MongoDB", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg" },
  { name: "Git", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg" },
  { name: "GitHub", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original.svg", invert: true },
  { name: "Docker", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/docker/docker-original.svg" },
  { name: "Vercel", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/vercel/vercel-original.svg", invert: true },
  { name: "Framer Motion", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/framermotion/framermotion-original.svg", invert: true },
];

export const TechStack = () => {
  return (
    <section id="skills" className="py-24 px-4 bg-dark">
      <div className="container max-w-4xl">
        {/* Section Header */}
        <div className="mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-3">Stack</h2>
          <p className="text-muted-foreground text-lg">Tools I work with.</p>
        </div>

        {/* Tech Grid */}
        <div className="flex flex-wrap gap-3">
          {technologies.map((tech, index) => (
            <div
              key={tech.name}
              className="flex items-center gap-5.5 px-4 py-2.5 rounded-2xl bg-secondary/50 border border-border hover:border-primary transition-transform duration-300 ease-out hover:scale-105 hover:bg-secondary transition-all duration-300"
              style={{ animationDelay: `${index * 0.03}s` }}
            >
              <img
                src={tech.icon}
                alt={tech.name}
                className={`w-5 h-5 ${tech.invert ? "invert" : ""}`}
                onError={(e) => {
                  e.currentTarget.style.display = "none";
                }}
              />
              <span className="text-sm font-medium">{tech.name}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
