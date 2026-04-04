import { useState } from "react";
import { Card, Separator } from "./Card";
import Badge  from "./Badge";
const FAQ = () => {
  const [open, setOpen] = useState(null);
 
  const faqs = [
    { q: "Do I need to install anything?", a: "No — CollabIDE runs entirely in your browser. Just create a session and start coding. Nothing to download or configure." },
    { q: "How does real-time collaboration work?", a: "Multiple users join the same session and edit code in real time with instant sync — like Google Docs but for code." },
    { q: "Is my code saved automatically?", a: "Yes — your code is continuously auto-saved. You also get full version history so you can roll back anytime." },
    { q: "Can I invite others easily?", a: "Absolutely. Just share a link — your team joins instantly with no sign-up required on their end." },
    { q: "Is there a free plan?", a: "Yes — you can start for free with core features and upgrade any time as your needs grow." },
    { q: "How many people can collaborate at once?", a: "Depending on your plan: 2 on Free, 5 on Pro, and unlimited on the Team plan." },
  ];
 
  return (
    <section id="faq" style={{ padding: "100px 0" }}>
      <div className="divider" />
      <div className="max-w-3xl mx-auto px-6 pt-20">
        <div className="text-center mb-14">
          <Badge>FAQ</Badge>
          <h2 className="font-display font-extrabold mt-4" style={{ fontSize: "clamp(2rem,4vw,3rem)", letterSpacing: "-0.03em" }}>
            Frequently asked <span className="grad-text">questions</span>
          </h2>
        </div>
        <div className="flex flex-col gap-3">
          {faqs.map((f, i) => (
            <Card key={i} style={{
              background: "rgba(13,17,28,0.7)",
              border: open === i ? "1px solid rgba(139,92,246,0.35)" : "1px solid rgba(255,255,255,0.07)",
              transition: "border-color 0.25s ease",
            }}>
              <button onClick={() => setOpen(open === i ? null : i)}
                className="w-full flex items-center justify-between px-6 py-5 text-left"
                style={{ cursor: "pointer", background: "none", border: "none", color: "#F9FAFB" }}>
                <span className="font-display font-semibold text-sm">{f.q}</span>
                <span style={{
                  color: open === i ? "#8B5CF6" : "#4B5563",
                  fontSize: 18,
                  transition: "transform 0.3s, color 0.2s",
                  transform: open === i ? "rotate(45deg)" : "none",
                  display: "inline-block",
                }}>+</span>
              </button>
              <div className={`accordion-content ${open === i ? "open" : ""}`}>
                <Separator />
                <p className="px-6 py-4 text-sm leading-relaxed" style={{ color: "#6B7280" }}>{f.a}</p>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FAQ