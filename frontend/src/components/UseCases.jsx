import Badge from "./Badge";

const UseCases = () => {
  const cases = [
    { icon: "🏗️", title: "Teams & Startups", desc: "Collaborate in real time, review code instantly, and ship faster together.", accent: "#8B5CF6" },
    { icon: "🤝", title: "Pair Programming", desc: "Code side-by-side without screen sharing — smooth and distraction-free.", accent: "#EC4899" },
    { icon: "🎯", title: "Coding Interviews", desc: "Conduct live coding interviews with real-time feedback and instant evaluation.", accent: "#F59E0B" },
    { icon: "🎓", title: "Students & Learners", desc: "Learn, practice, and build projects together with classmates or mentors.", accent: "#22C55E" },
    { icon: "🌍", title: "Remote & Open Source", desc: "Collaborate across time zones with one shared coding workspace.", accent: "#06B6D4" },
  ];
 
  return (
    <section id="use-cases" style={{ padding: "100px 0" }}>
      <div className="divider" />
      <div className="max-w-7xl mx-auto px-6 pt-20">
        <div className="text-center mb-16">
          <Badge>Use cases</Badge>
          <h2 className="font-display font-extrabold mt-4" style={{ fontSize: "clamp(2rem,4vw,3rem)", letterSpacing: "-0.03em" }}>
            Built for every kind of <span className="grad-text">developer</span>
          </h2>
          <p className="mt-4 text-sm" style={{ color: "#6B7280" }}>
            Whether you're coding solo or working with a team, CollabIDE adapts to your workflow.
          </p>
        </div>
 
        <div className="usecase-wrap grid md:grid-cols-3 lg:grid-cols-5 gap-4">
          {cases.map((c, i) => (
            <div key={i} className="usecase-card glass rounded-2xl p-6 text-center cursor-default"
              style={{ border: `1px solid rgba(255,255,255,0.07)`, borderRadius: 18 }}>
              <div style={{ fontSize: 32, marginBottom: 12 }}>{c.icon}</div>
              <h3 className="font-display font-bold text-sm mb-2" style={{ color: "#F9FAFB" }}>{c.title}</h3>
              <p className="text-xs leading-relaxed" style={{ color: "#6B7280" }}>{c.desc}</p>
              <div className="mt-4 h-0.5 rounded-full" style={{ background: `linear-gradient(90deg, transparent, ${c.accent}, transparent)` }} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
export default UseCases