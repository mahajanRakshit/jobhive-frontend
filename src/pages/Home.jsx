import { useState, useEffect } from "react";

const JOBS = [
  { id: 1, title: "Senior React Developer", company: "TechCorp India", location: "Bangalore", type: "Full-time", salary: "₹18–25 LPA", logo: "TC", color: "#2563eb", tags: ["React", "Node.js", "MongoDB"] },
  { id: 2, title: "UI/UX Designer", company: "DesignStudio", location: "Remote", type: "Remote", salary: "₹10–15 LPA", logo: "DS", color: "#7c3aed", tags: ["Figma", "Prototyping"] },
  { id: 3, title: "Backend Engineer", company: "FinStack", location: "Mumbai", type: "Full-time", salary: "₹20–30 LPA", logo: "FS", color: "#059669", tags: ["Python", "AWS", "PostgreSQL"] },
  { id: 4, title: "Product Manager", company: "GrowthLabs", location: "Delhi", type: "Hybrid", salary: "₹22–32 LPA", logo: "GL", color: "#d97706", tags: ["Agile", "Roadmap", "Analytics"] },
  { id: 5, title: "DevOps Engineer", company: "CloudBase", location: "Hyderabad", type: "Full-time", salary: "₹16–22 LPA", logo: "CB", color: "#dc2626", tags: ["Docker", "Kubernetes", "CI/CD"] },
  { id: 6, title: "Data Scientist", company: "AIForge", location: "Pune", type: "Hybrid", salary: "₹24–35 LPA", logo: "AF", color: "#0891b2", tags: ["Python", "ML", "TensorFlow"] },
];

const CATEGORIES = [
  { icon: "💻", label: "Technology", count: "1,240 jobs" },
  { icon: "🎨", label: "Design", count: "430 jobs" },
  { icon: "📈", label: "Marketing", count: "610 jobs" },
  { icon: "💰", label: "Finance", count: "520 jobs" },
  { icon: "🏥", label: "Healthcare", count: "380 jobs" },
  { icon: "📚", label: "Education", count: "290 jobs" },
  { icon: "⚙️", label: "Engineering", count: "870 jobs" },
  { icon: "🎯", label: "Sales", count: "740 jobs" },
];

const STATS = [
  { value: "12,000+", label: "Live Jobs" },
  { value: "4,500+", label: "Companies" },
  { value: "2.8M+", label: "Job Seekers" },
  { value: "98%", label: "Success Rate" },
];

const COMPANIES = [
  { name: "Google", logo: "G", color: "#4285F4" },
  { name: "Microsoft", logo: "M", color: "#00A4EF" },
  { name: "Amazon", logo: "A", color: "#FF9900" },
  { name: "Infosys", logo: "I", color: "#007CC3" },
  { name: "Wipro", logo: "W", color: "#341C66" },
  { name: "TCS", logo: "T", color: "#E31837" },
];
function Navbar() {
  const [scrolled, setScrolled] = useState(false);

  const links = [
    { label: "Find Jobs", path: "/jobs" },
    { label: "Companies", path: "/company" },
    { label: "Pricing", path: "/pricing" },
    { label: "About", path: "#" },
  ];

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <nav style={{
      position: "fixed", top: 0, left: 0, right: 0, zIndex: 100,
      background: scrolled ? "rgba(255,255,255,0.97)" : "transparent",
      backdropFilter: scrolled ? "blur(12px)" : "none",
      boxShadow: scrolled ? "0 1px 24px rgba(0,0,0,0.08)" : "none",
      transition: "all 0.3s ease",
      padding: "0 5%",
    }}>
      <div style={{ maxWidth: 1200, margin: "0 auto", display: "flex", alignItems: "center", height: 68, justifyContent: "space-between" }}>
        <a href="/" style={{ display: "flex", alignItems: "center", gap: 10, textDecoration: "none" }}>
          <div style={{ width: 36, height: 36, background: "linear-gradient(135deg,#1d4ed8,#7c3aed)", borderRadius: 10, display: "flex", alignItems: "center", justifyContent: "center" }}>
            <span style={{ color: "#fff", fontWeight: 800, fontSize: 18 }}>J</span>
          </div>
          <span style={{ fontFamily: "'Playfair Display', serif", fontWeight: 700, fontSize: 22, color: "#0f172a", letterSpacing: "-0.5px" }}>JobHive</span>
        </a>

        <div style={{ display: "flex", gap: 32, alignItems: "center" }}>
          {links.map(link => (
            <a key={link.label} href={link.path}
              style={{ fontSize: 14, fontWeight: 500, color: scrolled ? "#374151" : "#1e293b", textDecoration: "none", letterSpacing: "0.01em", transition: "color 0.2s" }}
              onMouseEnter={e => e.target.style.color = "#2563eb"}
              onMouseLeave={e => e.target.style.color = scrolled ? "#374151" : "#1e293b"}>
              {link.label}
            </a>
          ))}
        </div>

        <div style={{ display: "flex", gap: 12, alignItems: "center" }}>
          <a href="/auth" style={{ padding: "9px 20px", borderRadius: 8, border: "1.5px solid #e2e8f0", background: "white", fontSize: 14, fontWeight: 600, color: "#1d4ed8", cursor: "pointer", textDecoration: "none" }}>
            Login
          </a>
          <a href="/employer" style={{ padding: "9px 20px", borderRadius: 8, border: "none", background: "linear-gradient(135deg,#1d4ed8,#7c3aed)", fontSize: 14, fontWeight: 600, color: "white", cursor: "pointer", textDecoration: "none" }}>
            Post a Job
          </a>
        </div>
      </div>
    </nav>
  );
}

function Hero() {
  const [query, setQuery] = useState("");
  const [location, setLocation] = useState("");

  return (
    <section style={{
      minHeight: "100vh", display: "flex", alignItems: "center", justifyContent: "center",
      background: "linear-gradient(135deg, #f8faff 0%, #eef2ff 40%, #fdf4ff 100%)",
      position: "relative", overflow: "hidden", padding: "100px 5% 60px",
    }}>
      {/* Decorative blobs */}
      <div style={{ position: "absolute", top: "10%", right: "5%", width: 400, height: 400, borderRadius: "50%", background: "radial-gradient(circle, rgba(124,58,237,0.08) 0%, transparent 70%)", pointerEvents: "none" }} />
      <div style={{ position: "absolute", bottom: "10%", left: "5%", width: 300, height: 300, borderRadius: "50%", background: "radial-gradient(circle, rgba(29,78,216,0.08) 0%, transparent 70%)", pointerEvents: "none" }} />

      <div style={{ maxWidth: 820, margin: "0 auto", textAlign: "center", position: "relative" }}>
        <div style={{ display: "inline-flex", alignItems: "center", gap: 8, background: "white", border: "1px solid #e0e7ff", borderRadius: 100, padding: "6px 16px", marginBottom: 28, boxShadow: "0 2px 12px rgba(29,78,216,0.08)" }}>
          <span style={{ width: 8, height: 8, borderRadius: "50%", background: "#22c55e", display: "inline-block" }} />
          <span style={{ fontSize: 13, fontWeight: 600, color: "#4338ca", letterSpacing: "0.04em" }}>12,000+ Live Openings Right Now</span>
        </div>

        <h1 style={{ fontFamily: "'Playfair Display', serif", fontSize: "clamp(38px, 6vw, 72px)", fontWeight: 800, color: "#0f172a", lineHeight: 1.1, marginBottom: 20, letterSpacing: "-2px" }}>
          Find Your <span style={{ background: "linear-gradient(135deg,#1d4ed8,#7c3aed)", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent" }}>Dream Job</span>
          <br />in India & Beyond
        </h1>

        <p style={{ fontSize: 18, color: "#64748b", maxWidth: 540, margin: "0 auto 40px", lineHeight: 1.7, fontWeight: 400 }}>
          Connect with top companies hiring right now. Upload your resume once and let employers find you.
        </p>

        {/* Search bar */}
        <div style={{ display: "flex", gap: 0, background: "white", borderRadius: 16, boxShadow: "0 8px 40px rgba(0,0,0,0.12)", border: "1px solid #e2e8f0", overflow: "hidden", maxWidth: 700, margin: "0 auto 20px" }}>
          <div style={{ flex: 1, display: "flex", alignItems: "center", padding: "0 20px", gap: 10, borderRight: "1px solid #f1f5f9" }}>
            <span style={{ fontSize: 18 }}>🔍</span>
            <input value={query} onChange={e => setQuery(e.target.value)} placeholder="Job title, skill, company..." style={{ border: "none", outline: "none", fontSize: 15, color: "#0f172a", background: "transparent", width: "100%", padding: "18px 0" }} />
          </div>
          <div style={{ flex: 1, display: "flex", alignItems: "center", padding: "0 20px", gap: 10 }}>
            <span style={{ fontSize: 18 }}>📍</span>
            <input value={location} onChange={e => setLocation(e.target.value)} placeholder="City, state or remote..." style={{ border: "none", outline: "none", fontSize: 15, color: "#0f172a", background: "transparent", width: "100%", padding: "18px 0" }} />
          </div>
          <button style={{ padding: "0 32px", background: "linear-gradient(135deg,#1d4ed8,#7c3aed)", color: "white", border: "none", fontSize: 15, fontWeight: 700, cursor: "pointer", whiteSpace: "nowrap", letterSpacing: "0.02em", transition: "opacity 0.2s" }}
            onMouseEnter={e => e.target.style.opacity = 0.9}
            onMouseLeave={e => e.target.style.opacity = 1}>
            Search Jobs
          </button>
        </div>

        <p style={{ fontSize: 13, color: "#94a3b8", marginBottom: 48 }}>
          Popular: <span style={{ color: "#4338ca", cursor: "pointer", fontWeight: 600 }}>React Developer</span> · <span style={{ color: "#4338ca", cursor: "pointer", fontWeight: 600 }}>Data Analyst</span> · <span style={{ color: "#4338ca", cursor: "pointer", fontWeight: 600 }}>Product Manager</span> · <span style={{ color: "#4338ca", cursor: "pointer", fontWeight: 600 }}>Remote Jobs</span>
        </p>

        {/* Stats */}
        <div style={{ display: "flex", justifyContent: "center", gap: 48, flexWrap: "wrap" }}>
          {STATS.map(s => (
            <div key={s.label} style={{ textAlign: "center" }}>
              <div style={{ fontFamily: "'Playfair Display', serif", fontSize: 30, fontWeight: 800, color: "#1d4ed8", letterSpacing: "-1px" }}>{s.value}</div>
              <div style={{ fontSize: 13, color: "#64748b", fontWeight: 500, marginTop: 2 }}>{s.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function Categories() {
  return (
    <section style={{ padding: "80px 5%", background: "white" }}>
      <div style={{ maxWidth: 1200, margin: "0 auto" }}>
        <div style={{ textAlign: "center", marginBottom: 48 }}>
          <p style={{ fontSize: 13, fontWeight: 700, color: "#7c3aed", letterSpacing: "0.1em", textTransform: "uppercase", marginBottom: 10 }}>Browse by Category</p>
          <h2 style={{ fontFamily: "'Playfair Display', serif", fontSize: "clamp(26px, 4vw, 42px)", fontWeight: 800, color: "#0f172a", letterSpacing: "-1px" }}>Find Jobs in Every Field</h2>
        </div>
        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(200px, 1fr))", gap: 16 }}>
          {CATEGORIES.map(cat => (
            <div key={cat.label}
              style={{ padding: "24px 20px", borderRadius: 14, border: "1.5px solid #f1f5f9", background: "white", cursor: "pointer", transition: "all 0.25s", display: "flex", flexDirection: "column", gap: 8 }}
              onMouseEnter={e => { e.currentTarget.style.borderColor = "#c7d2fe"; e.currentTarget.style.background = "#f8f7ff"; e.currentTarget.style.transform = "translateY(-4px)"; e.currentTarget.style.boxShadow = "0 8px 24px rgba(99,102,241,0.1)"; }}
              onMouseLeave={e => { e.currentTarget.style.borderColor = "#f1f5f9"; e.currentTarget.style.background = "white"; e.currentTarget.style.transform = "translateY(0)"; e.currentTarget.style.boxShadow = "none"; }}>
              <span style={{ fontSize: 32 }}>{cat.icon}</span>
              <span style={{ fontSize: 15, fontWeight: 700, color: "#0f172a" }}>{cat.label}</span>
              <span style={{ fontSize: 13, color: "#94a3b8", fontWeight: 500 }}>{cat.count}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function JobCard({ job }) {
  const [saved, setSaved] = useState(false);
  return (
    <div style={{ background: "white", borderRadius: 16, border: "1.5px solid #f1f5f9", padding: "24px", transition: "all 0.25s", cursor: "pointer" }}
      onMouseEnter={e => { e.currentTarget.style.borderColor = "#c7d2fe"; e.currentTarget.style.boxShadow = "0 8px 32px rgba(99,102,241,0.1)"; e.currentTarget.style.transform = "translateY(-3px)"; }}
      onMouseLeave={e => { e.currentTarget.style.borderColor = "#f1f5f9"; e.currentTarget.style.boxShadow = "none"; e.currentTarget.style.transform = "translateY(0)"; }}>
      <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start", marginBottom: 16 }}>
        <div style={{ display: "flex", alignItems: "center", gap: 14 }}>
          <div style={{ width: 48, height: 48, borderRadius: 12, background: job.color + "18", display: "flex", alignItems: "center", justifyContent: "center", fontWeight: 800, fontSize: 16, color: job.color, flexShrink: 0 }}>{job.logo}</div>
          <div>
            <div style={{ fontSize: 16, fontWeight: 700, color: "#0f172a", marginBottom: 3 }}>{job.title}</div>
            <div style={{ fontSize: 13, color: "#64748b" }}>{job.company}</div>
          </div>
        </div>
        <button onClick={() => setSaved(!saved)} style={{ border: "none", background: "none", cursor: "pointer", fontSize: 20, transition: "transform 0.2s" }}
          onMouseEnter={e => e.target.style.transform = "scale(1.2)"}
          onMouseLeave={e => e.target.style.transform = "scale(1)"}>
          {saved ? "❤️" : "🤍"}
        </button>
      </div>

      <div style={{ display: "flex", gap: 8, flexWrap: "wrap", marginBottom: 16 }}>
        {job.tags.map(tag => (
          <span key={tag} style={{ padding: "4px 10px", background: "#f8faff", border: "1px solid #e0e7ff", borderRadius: 6, fontSize: 12, fontWeight: 600, color: "#4338ca" }}>{tag}</span>
        ))}
      </div>

      <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
        <div style={{ display: "flex", gap: 14 }}>
          <span style={{ fontSize: 12, color: "#94a3b8", display: "flex", alignItems: "center", gap: 4 }}>📍 {job.location}</span>
          <span style={{ fontSize: 12, color: "#94a3b8", display: "flex", alignItems: "center", gap: 4 }}>⏱ {job.type}</span>
        </div>
        <span style={{ fontSize: 14, fontWeight: 700, color: "#059669" }}>{job.salary}</span>
      </div>

      <button style={{ width: "100%", marginTop: 16, padding: "11px", borderRadius: 10, border: "1.5px solid #e0e7ff", background: "white", fontSize: 13, fontWeight: 700, color: "#1d4ed8", cursor: "pointer", transition: "all 0.2s" }}
        onMouseEnter={e => { e.target.style.background = "linear-gradient(135deg,#1d4ed8,#7c3aed)"; e.target.style.color = "white"; e.target.style.border = "1.5px solid transparent"; }}
        onMouseLeave={e => { e.target.style.background = "white"; e.target.style.color = "#1d4ed8"; e.target.style.border = "1.5px solid #e0e7ff"; }}>
        Apply Now →
      </button>
    </div>
  );
}

function FeaturedJobs() {
  return (
    <section style={{ padding: "80px 5%", background: "#fafbff" }}>
      <div style={{ maxWidth: 1200, margin: "0 auto" }}>
        <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-end", marginBottom: 40, flexWrap: "wrap", gap: 16 }}>
          <div>
            <p style={{ fontSize: 13, fontWeight: 700, color: "#7c3aed", letterSpacing: "0.1em", textTransform: "uppercase", marginBottom: 10 }}>Featured Listings</p>
            <h2 style={{ fontFamily: "'Playfair Display', serif", fontSize: "clamp(26px, 4vw, 42px)", fontWeight: 800, color: "#0f172a", letterSpacing: "-1px", margin: 0 }}>Jobs Handpicked for You</h2>
          </div>
          <button style={{ padding: "11px 24px", borderRadius: 10, border: "1.5px solid #c7d2fe", background: "white", fontSize: 14, fontWeight: 700, color: "#4338ca", cursor: "pointer", transition: "all 0.2s", whiteSpace: "nowrap" }}
            onMouseEnter={e => { e.target.style.background = "#eef2ff"; }}
            onMouseLeave={e => { e.target.style.background = "white"; }}>
            View All Jobs →
          </button>
        </div>
        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(320px, 1fr))", gap: 20 }}>
          {JOBS.map(job => <JobCard key={job.id} job={job} />)}
        </div>
      </div>
    </section>
  );
}

function HowItWorks() {
  const steps = [
    { num: "01", icon: "📝", title: "Create Your Profile", desc: "Sign up in 60 seconds. Upload your resume and set your job preferences." },
    { num: "02", icon: "🔍", title: "Discover Opportunities", desc: "Browse thousands of jobs or let our smart algorithm match you with the best fit." },
    { num: "03", icon: "🚀", title: "Apply with One Click", desc: "Apply instantly using your saved profile. Track all your applications in one place." },
    { num: "04", icon: "🎉", title: "Get Hired", desc: "Connect with employers, schedule interviews, and land your dream role." },
  ];
  return (
    <section style={{ padding: "80px 5%", background: "white" }}>
      <div style={{ maxWidth: 1200, margin: "0 auto" }}>
        <div style={{ textAlign: "center", marginBottom: 56 }}>
          <p style={{ fontSize: 13, fontWeight: 700, color: "#7c3aed", letterSpacing: "0.1em", textTransform: "uppercase", marginBottom: 10 }}>Simple Process</p>
          <h2 style={{ fontFamily: "'Playfair Display', serif", fontSize: "clamp(26px, 4vw, 42px)", fontWeight: 800, color: "#0f172a", letterSpacing: "-1px" }}>Get Hired in 4 Easy Steps</h2>
        </div>
        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(220px, 1fr))", gap: 32 }}>
          {steps.map((step, i) => (
            <div key={i} style={{ textAlign: "center", padding: "32px 24px", borderRadius: 16, background: "#f8faff", border: "1px solid #e0e7ff", position: "relative" }}>
              <div style={{ position: "absolute", top: 20, right: 24, fontFamily: "'Playfair Display', serif", fontSize: 48, fontWeight: 800, color: "#e0e7ff", lineHeight: 1 }}>{step.num}</div>
              <div style={{ fontSize: 40, marginBottom: 16 }}>{step.icon}</div>
              <div style={{ fontSize: 17, fontWeight: 700, color: "#0f172a", marginBottom: 10 }}>{step.title}</div>
              <div style={{ fontSize: 14, color: "#64748b", lineHeight: 1.7 }}>{step.desc}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function TopCompanies() {
  return (
    <section style={{ padding: "80px 5%", background: "#0f172a" }}>
      <div style={{ maxWidth: 1200, margin: "0 auto", textAlign: "center" }}>
        <p style={{ fontSize: 13, fontWeight: 700, color: "#818cf8", letterSpacing: "0.1em", textTransform: "uppercase", marginBottom: 10 }}>Trusted By</p>
        <h2 style={{ fontFamily: "'Playfair Display', serif", fontSize: "clamp(26px, 4vw, 42px)", fontWeight: 800, color: "white", letterSpacing: "-1px", marginBottom: 48 }}>Top Companies Hiring Now</h2>
        <div style={{ display: "flex", justifyContent: "center", gap: 20, flexWrap: "wrap", marginBottom: 56 }}>
          {COMPANIES.map(c => (
            <div key={c.name} style={{ width: 100, height: 100, borderRadius: 20, background: c.color + "22", border: `1.5px solid ${c.color}44`, display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center", gap: 6, cursor: "pointer", transition: "all 0.2s" }}
              onMouseEnter={e => { e.currentTarget.style.transform = "scale(1.08)"; e.currentTarget.style.background = c.color + "44"; }}
              onMouseLeave={e => { e.currentTarget.style.transform = "scale(1)"; e.currentTarget.style.background = c.color + "22"; }}>
              <span style={{ fontSize: 28, fontWeight: 800, color: c.color }}>{c.logo}</span>
              <span style={{ fontSize: 11, color: "#94a3b8", fontWeight: 600 }}>{c.name}</span>
            </div>
          ))}
        </div>
        <div style={{ display: "flex", gap: 16, justifyContent: "center", flexWrap: "wrap" }}>
          <button style={{ padding: "14px 32px", borderRadius: 12, border: "none", background: "linear-gradient(135deg,#1d4ed8,#7c3aed)", color: "white", fontSize: 15, fontWeight: 700, cursor: "pointer", boxShadow: "0 4px 20px rgba(29,78,216,0.4)", transition: "all 0.2s" }}
            onMouseEnter={e => e.target.style.transform = "translateY(-2px)"}
            onMouseLeave={e => e.target.style.transform = "translateY(0)"}>
            Find a Job →
          </button>
          <button style={{ padding: "14px 32px", borderRadius: 12, border: "1.5px solid #334155", background: "transparent", color: "white", fontSize: 15, fontWeight: 700, cursor: "pointer", transition: "all 0.2s" }}
            onMouseEnter={e => { e.target.style.borderColor = "#818cf8"; e.target.style.color = "#818cf8"; }}
            onMouseLeave={e => { e.target.style.borderColor = "#334155"; e.target.style.color = "white"; }}>
            Post a Job
          </button>
        </div>
      </div>
    </section>
  );
}

function NewsletterBanner() {
  const [email, setEmail] = useState("");
  const [sent, setSent] = useState(false);
  return (
    <section style={{ padding: "80px 5%", background: "linear-gradient(135deg,#eef2ff,#fdf4ff)" }}>
      <div style={{ maxWidth: 640, margin: "0 auto", textAlign: "center" }}>
        <p style={{ fontSize: 36 }}>📬</p>
        <h2 style={{ fontFamily: "'Playfair Display', serif", fontSize: "clamp(24px, 4vw, 38px)", fontWeight: 800, color: "#0f172a", letterSpacing: "-1px", marginBottom: 14 }}>Get Job Alerts in Your Inbox</h2>
        <p style={{ color: "#64748b", fontSize: 16, marginBottom: 32, lineHeight: 1.7 }}>Subscribe and be the first to know about new openings matching your skills.</p>
        {sent ? (
          <div style={{ padding: "16px 32px", background: "#dcfce7", borderRadius: 12, color: "#15803d", fontWeight: 700, fontSize: 16 }}>✅ You're subscribed! Check your inbox.</div>
        ) : (
          <div style={{ display: "flex", gap: 0, background: "white", borderRadius: 12, boxShadow: "0 4px 24px rgba(0,0,0,0.08)", border: "1px solid #e2e8f0", overflow: "hidden" }}>
            <input value={email} onChange={e => setEmail(e.target.value)} placeholder="Enter your email address..." style={{ flex: 1, border: "none", outline: "none", fontSize: 15, padding: "16px 20px", color: "#0f172a" }} />
            <button onClick={() => email && setSent(true)} style={{ padding: "0 28px", background: "linear-gradient(135deg,#1d4ed8,#7c3aed)", color: "white", border: "none", fontSize: 14, fontWeight: 700, cursor: "pointer", whiteSpace: "nowrap" }}>
              Subscribe
            </button>
          </div>
        )}
      </div>
    </section>
  );
}

function Footer() {
  const links = {
    "For Job Seekers": ["Browse Jobs", "Company Reviews", "Resume Builder", "Career Advice", "Salary Guide"],
    "For Employers": ["Post a Job", "Browse Resumes", "Pricing Plans", "Recruiter Tools", "Hire in Bulk"],
    "Company": ["About Us", "Blog", "Press", "Careers", "Contact"],
    "Legal": ["Privacy Policy", "Terms of Use", "Cookie Policy", "Accessibility"],
  };
  return (
    <footer style={{ background: "#0f172a", padding: "64px 5% 32px", color: "#94a3b8" }}>
      <div style={{ maxWidth: 1200, margin: "0 auto" }}>
        <div style={{ display: "grid", gridTemplateColumns: "2fr 1fr 1fr 1fr 1fr", gap: 40, marginBottom: 48 }}>
          <div>
            <div style={{ display: "flex", alignItems: "center", gap: 10, marginBottom: 16 }}>
              <div style={{ width: 36, height: 36, background: "linear-gradient(135deg,#1d4ed8,#7c3aed)", borderRadius: 10, display: "flex", alignItems: "center", justifyContent: "center" }}>
                <span style={{ color: "#fff", fontWeight: 800, fontSize: 18 }}>J</span>
              </div>
              <span style={{ fontFamily: "'Playfair Display', serif", fontWeight: 700, fontSize: 20, color: "white" }}>JobHive</span>
            </div>
            <p style={{ fontSize: 14, lineHeight: 1.8, maxWidth: 260 }}>India's fastest growing job portal connecting top talent with great companies.</p>
            <div style={{ display: "flex", gap: 12, marginTop: 20 }}>
              {["𝕏", "in", "f", "ig"].map(icon => (
                <div key={icon} style={{ width: 36, height: 36, borderRadius: 8, background: "#1e293b", display: "flex", alignItems: "center", justifyContent: "center", cursor: "pointer", fontSize: 13, fontWeight: 700, color: "#64748b", transition: "all 0.2s" }}
                  onMouseEnter={e => { e.currentTarget.style.background = "#1d4ed8"; e.currentTarget.style.color = "white"; }}
                  onMouseLeave={e => { e.currentTarget.style.background = "#1e293b"; e.currentTarget.style.color = "#64748b"; }}>
                  {icon}
                </div>
              ))}
            </div>
          </div>
          {Object.entries(links).map(([heading, items]) => (
            <div key={heading}>
              <div style={{ fontSize: 13, fontWeight: 700, color: "white", letterSpacing: "0.06em", textTransform: "uppercase", marginBottom: 16 }}>{heading}</div>
              {items.map(item => (
                <a key={item} href="#" style={{ display: "block", fontSize: 14, color: "#64748b", textDecoration: "none", marginBottom: 10, transition: "color 0.2s" }}
                  onMouseEnter={e => e.target.style.color = "#a5b4fc"}
                  onMouseLeave={e => e.target.style.color = "#64748b"}>{item}</a>
              ))}
            </div>
          ))}
        </div>
        <div style={{ borderTop: "1px solid #1e293b", paddingTop: 24, display: "flex", justifyContent: "space-between", alignItems: "center", flexWrap: "wrap", gap: 12 }}>
          <span style={{ fontSize: 13 }}>© 2025 JobHive. All rights reserved.</span>
          <span style={{ fontSize: 13 }}>Made with ❤️ in India</span>
        </div>
      </div>
    </footer>
  );
}

export default function Home() {
  useEffect(() => {
    const link = document.createElement("link");
    link.href = "https://fonts.googleapis.com/css2?family=Playfair+Display:wght@700;800&display=swap";
    link.rel = "stylesheet";
    document.head.appendChild(link);
    document.body.style.margin = "0";
    document.body.style.fontFamily = "'Inter', -apple-system, sans-serif";
  }, []);

  return (
    <div>
      <Navbar />
      <Hero />
      <Categories />
      <FeaturedJobs />
      <HowItWorks />
      <TopCompanies />
      <NewsletterBanner />
      <Footer />
    </div>
  );
}
