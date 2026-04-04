import { Card, CardHeader, CardTitle, CardContent, CardDescription } from "./Card";
import Badge  from "./Badge";
const HowItWorks = () => {
  const steps = [
    { num: "01", icon: "🚀", title: "Create your workspace", desc: "Start a new coding session instantly — no setup, no configuration required." },
    { num: "02", icon: "🔗", title: "Share with your team", desc: "Invite teammates with a single link. They join immediately, no accounts needed." },
    { num: "03", icon: "🤝", title: "Collaborate live", desc: "Write, edit, and debug together with real-time cursors and instant sync." },
  ];
 
  return (
    <section id="demo" style={{ padding: "100px 0" }}>
      <div className="divider" />
      <div className="max-w-6xl mx-auto px-6 pt-20 text-center">
        <Badge>How it works</Badge>
        <h2 className="font-display font-extrabold mt-4" style={{ fontSize: "clamp(2rem,4vw,3rem)", letterSpacing: "-0.03em" }}>
          Start collaborating in <span className="grad-text">seconds</span>
        </h2>
        <p className="mt-4 mb-16 text-sm" style={{ color: "#6B7280" }}>
          No setup, no installs — just create a session and start coding together.
        </p>
 
        <div className="flex flex-col md:flex-row items-start gap-4">
          {steps.map((s, i) => (
            <div key={i} className="flex flex-col md:flex-row items-center flex-1">
              <Card hover style={{ background: "rgba(13,17,28,0.7)" }} className="w-full">
                <CardHeader>
                  <div className="flex items-center gap-3 mb-1">
                    <span className="font-mono font-bold text-xs grad-text">{s.num}</span>
                    <span style={{ fontSize: 22 }}>{s.icon}</span>
                  </div>
                  <CardTitle className="text-lg">{s.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription>{s.desc}</CardDescription>
                </CardContent>
              </Card>
              {i < 2 && <div className="step-line hidden md:block mx-2" />}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
export default HowItWorks