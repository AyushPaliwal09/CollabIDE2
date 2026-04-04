import { Card, CardHeader, CardTitle, CardContent, CardDescription, Separator } from "./Card";
import  Badge from "./Badge";

const Testimonials = () => {
  const reviews = [
    { name: "Priya Sharma", role: "Frontend Engineer @ Razorpay", avatar: "#8B5CF6", quote: "CollabIDE made pair programming feel like we're sitting next to each other. It just works — instant, smooth, no lag." },
    { name: "Marcus Chen", role: "Indie Dev & Open Source Contributor", avatar: "#EC4899", quote: "I've tried every collaborative editor out there. Nothing comes close to how seamless CollabIDE is. The cursor sync is magic." },
    { name: "Aditi Nair", role: "Engineering Lead @ Groww", avatar: "#22C55E", quote: "We use it for technical interviews. Candidates love the live environment. Way better than anything else we've used." },
    { name: "Luca Ferrara", role: "Fullstack Developer @ Remote", avatar: "#F59E0B", quote: "The fact that you don't need to install anything is a game changer. Share a link and you're in — that's it." },
    { name: "Aman Verma", role: "CS Student, IIT Bombay", avatar: "#06B6D4", quote: "My study group uses CollabIDE every day. It's like Google Docs but for code — and way more fun to use." },
    { name: "Neha Kapoor", role: "CTO @ BuildSpace", avatar: "#F97316", quote: "Shipped 30% faster since our team moved to CollabIDE. The version history alone has saved us multiple times." },
  ];
 
  return (
    <section style={{ padding: "100px 0" }}>
      <div className="divider" />
      <div className="max-w-7xl mx-auto px-6 pt-20 text-center">
        <Badge>Testimonials</Badge>
        <h2 className="font-display font-extrabold mt-4 mb-12" style={{ fontSize: "clamp(2rem,4vw,3rem)", letterSpacing: "-0.03em" }}>
          Loved by <span className="grad-text">developers worldwide</span>
        </h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
          {reviews.map((r, i) => (
            <Card key={i} hover style={{ background: "rgba(13,17,28,0.7)" }}>
              <CardHeader>
                <div className="flex items-center gap-3">
                  <div style={{ width:40,height:40,borderRadius:"50%",background:r.avatar,display:"flex",alignItems:"center",justifyContent:"center",fontSize:16,color:"#fff",fontWeight:700,flexShrink:0 }}>
                    {r.name[0]}
                  </div>
                  <div>
                    <CardTitle className="text-sm">{r.name}</CardTitle>
                    <p style={{ fontSize: 11, color: "#6B7280" }}>{r.role}</p>
                  </div>
                </div>
              </CardHeader>
              <CardContent>
                <Separator className="mb-4" />
                <CardDescription>"{r.quote}"</CardDescription>
                <div className="flex gap-0.5 mt-4">
                  {[...Array(5)].map((_,j) => <span key={j} style={{ color: "#F59E0B", fontSize: 12 }}>★</span>)}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};
export default Testimonials