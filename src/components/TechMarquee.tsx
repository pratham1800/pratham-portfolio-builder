const techs = [
  "React", "TypeScript", "Node.js", "Python", "Figma", "SQL",
  "AWS", "Docker", "Jira", "Mixpanel", "Amplitude", "Notion",
];

const TechMarquee = () => (
  <section className="py-12 border-y border-border overflow-hidden">
    <div className="flex animate-marquee whitespace-nowrap">
      {[...techs, ...techs].map((t, i) => (
        <span
          key={i}
          className="mx-8 text-sm font-medium text-muted-foreground/60 uppercase tracking-widest select-none"
        >
          {t}
        </span>
      ))}
    </div>
  </section>
);

export default TechMarquee;
