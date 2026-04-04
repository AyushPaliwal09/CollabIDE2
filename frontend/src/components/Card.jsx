export const Card = ({ children, className = "", hover = false, style = {} }) => (
  <div
    className={`glass rounded-2xl ${hover ? "glow-card" : ""} ${className}`}
    style={{ borderRadius: 16, border: "1px solid rgba(255,255,255,0.07)", ...style }}
  >
    {children}
  </div>
);

export const CardHeader = ({ children, className = "" }) => (
  <div className={`flex flex-col gap-1.5 p-6 pb-0 ${className}`}>{children}</div>
);
 
export const CardTitle = ({ children, className = "" }) => (
  <h3 className={`font-display font-bold text-base leading-snug text-white ${className}`}>{children}</h3>
);
 
export const CardDescription = ({ children, className = "" }) => (
  <p className={`text-sm leading-relaxed ${className}`} style={{ color: "#6B7280" }}>{children}</p>
);
 
export const CardContent = ({ children, className = "" }) => (
  <div className={`p-6 pt-4 ${className}`}>{children}</div>
);
 
export const Separator = ({ className = "" }) => (
  <div className={`h-px w-full ${className}`} style={{ background: "rgba(255,255,255,0.06)" }} />
);

