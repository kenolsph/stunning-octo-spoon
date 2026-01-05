const experiences = [
  {
    title: "Pisciner 42 Berlin",
    period: "Aug - Sep 2025",
    company: "Berlin, Germany",
    description:
      "Pursuing Software Engineering, diving deep into algorithms, system design, and software engineering fundamentals.",
  },
  {
    title: "SWE Student",
    period: "2021 - 2025",
    company: "Babcock University",
    description:
      "Pursuing Software Engineering, diving deep into algorithms, system design, and software engineering fundamentals.",
  },
  {
  title: "Engineering Intern",
    period: "Feb 2024 - June 2024",
    company: "IHS Towers",
    description:
      "Supported IT services operations by assisting with data collection, quality assurance, and maintaining detailed documentation for client projects.",
  },
  {
  title: "Front End Intern",
    period: "Jan 2021 - March 2021",
    company: "Alusoft Technologies",
    description:
      "Front-End Development: Proficient in HTML5, CSS3, Bootstrap, and JavaScript for creating clean, responsive interfaces.",
  },
];

export const Experience = () => {
  return (
    <section id="experience" className="py-24 px-4 bg-dark">
      <div className="container max-w-4xl">
        {/* Section Header */}
        <div className="mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-3">Background</h2>
          <p className="text-muted-foreground text-lg">Where I'm at right now.</p>
        </div>

        {/* Timeline */}
        <div className="space-y-6">
          {experiences.map((exp, index) => (
            <div
              key={exp.title}
              className="relative pl-8 pb-6 border-l border-border last:border-l-0 last:pb-0"
            >
              {/* Timeline dot */}
              <div className="absolute left-0 top-0 w-3 h-3 -translate-x-1.5 rounded-full bg-primary" />

              {/* Content */}
              <div className="bg-card rounded-xl p-6 border border-border hover:border-primary border-muted-foreground/50 transition-all duration-300 shadow-card">
                <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2 mb-3">
                  <h3 className="text-lg font-semibold">{exp.title}</h3>
                  <span className=" text-primary text-sm text-muted-foreground">{exp.period}</span>
                </div>
                <p className="text-sm text-primary mb-2">{exp.company}</p>
                <p className="text-muted-foreground text-sm">{exp.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};