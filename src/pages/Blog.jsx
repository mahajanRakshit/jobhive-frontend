import { useState, useEffect } from "react";

const POSTS = [
  { id: 1, title: "10 Resume Tips That Will Get You Hired in 2025", category: "Career Tips", author: "Priya Sharma", avatar: "PS", date: "Dec 20, 2025", readTime: "5 min read", image: "📄", tags: ["Resume", "Career"], excerpt: "Your resume is your first impression. Learn the top 10 tips that hiring managers say make candidates stand out from the crowd instantly.", featured: true },
  { id: 2, title: "How to Ace Your Technical Interview at Top Tech Companies", category: "Interview Tips", author: "Rahul Mehta", avatar: "RM", date: "Dec 18, 2025", readTime: "8 min read", image: "💻", tags: ["Interview", "Tech"], excerpt: "From DSA to system design — a complete guide to cracking technical interviews at companies like Google, Microsoft and startups." },
  { id: 3, title: "Remote Work in 2025: Best Companies Hiring Remotely in India", category: "Remote Work", author: "Anita Roy", avatar: "AR", date: "Dec 15, 2025", readTime: "4 min read", image: "🏠", tags: ["Remote", "Jobs"], excerpt: "The remote work revolution is here to stay. Discover the top companies offering full-remote positions to Indian professionals." },
  { id: 4, title: "Salary Negotiation: How to Ask for More and Actually Get It", category: "Career Tips", author: "Vikram Singh", avatar: "VS", date: "Dec 12, 2025", readTime: "6 min read", image: "💰", tags: ["Salary", "Negotiation"], excerpt: "Most people leave money on the table by not negotiating. Here is a proven script and strategy to get the salary you deserve." },
  { id: 5, title: "Top 10 In-Demand Skills for Software Engineers in 2025", category: "Industry News", author: "Sneha Patel", avatar: "SP", date: "Dec 10, 2025", readTime: "7 min read", image: "🚀", tags: ["Skills", "Tech"], excerpt: "AI, cloud computing, and full-stack development dominate the job market. Find out which skills employers are paying top rupees for." },
  { id: 6, title: "From Fresher to First Job: A Complete Roadmap", category: "Career Tips", author: "Amit Kumar", avatar: "AK", date: "Dec 8, 2025", readTime: "10 min read", image: "🎓", tags: ["Fresher", "Career"], excerpt: "Just graduated? Here is everything you need to know about landing your first job — from building a portfolio to acing HR rounds." },
  { id: 7, title: "How LinkedIn Can 10x Your Job Search Success", category: "Job Search", author: "Priya Sharma", avatar: "PS", date: "Dec 5, 2025", readTime: "5 min read", image: "🔗", tags: ["LinkedIn", "Networking"], excerpt: "LinkedIn is not just an online resume. Learn how to use it strategically to attract recruiters and land dream opportunities." },
  { id: 8, title: "Work Life Balance: Myths and Realities in the Indian IT Sector", category: "Industry News", author: "Rahul Mehta", avatar: "RM", date: "Dec 2, 2025", readTime: "6 min read", image: "⚖️", tags: ["Work Life", "IT"], excerpt: "Is work life balance achievable in Indian tech? We spoke to 50 professionals across top companies to find out the truth." },
];

const CATEGORIES = ["All", "Career Tips", "Interview Tips", "Remote Work", "Industry News", "Job Search"];

export default function Blog() {
  const [activeCategory, setActiveCategory] = useState("All");
  const [search, setSearch] = useState("");

  useEffect(() => {
    const link = document.createElement("link");
    link.href = "https://fonts.googleapis.com/css2?family=Playfair+Display:wght@700;800&display=swap";
    link.rel = "stylesheet";
    document.head.appendChild(link);
    document.body.style.margin = "0";
    document.body.style.fontFamily = "'Inter', -apple-system, sans-serif";
    document.body.style.background = "#f8faff";
  }, []);

  const filtered = POSTS.filter(p => {
    const matchCat = activeCategory === "All" || p.category === activeCategory;
    const matchSearch = p.title.toLowerCase().includes(search.toLowerCase()) ||
      p.excerpt.toLowerCase().includes(search.toLowerCase());
    return matchCat && matchSearch;
  });

  const featured = POSTS.find(p => p.featured);
  const rest = filtered.filter(p => !p.featured || activeCategory !== "All" || search);

  return (
    <div style={{ minHeight: "100vh", background: "#f8faff" }}>
      {/* Navbar */}
      <nav style={{ background: "white", borderBottom: "1px solid #e2e8f0", padding: "0 5%", position: "sticky", top: 0, zIndex: 100, boxShadow: "0 1px 12px rgba(0,0,0,0.06)" }}>
        <div style={{ maxWidth: 1100, margin: "0 auto", display: "flex", alignItems: "center", height: 64, justifyContent: "space-between" }}>
          <a href="/" style={{ display: "flex", alignItems: "center", gap: 10, textDecoration: "none" }}>
            <div style={{ width: 34, height: 34, background: "linear-gradient(135deg,#1d4ed8,#7c3aed)", borderRadius: 9, display: "flex", alignItems: "center", justifyContent: "center" }}>
              <span style={{ color: "#fff", fontWeight: 800, fontSize: 17 }}>J</span>
            </div>
            <span style={{ fontFamily: "'Playfair Display', serif", fontWeight: 700, fontSize: 20, color: "#0f172a" }}>JobHive</span>
          </a>
          <div style={{ display: "flex", gap: 24 }}>
            {[{ label: "Find Jobs", path: "/jobs" }, { label: "Companies", path: "/company" }, { label: "Blog", path: "/blog" }, { label: "Pricing", path: "/pricing" }].map(l => (
              <a key={l.label} href={l.path} style={{ fontSize: 14, fontWeight: 500, color: l.label === "Blog" ? "#1d4ed8" : "#64748b", textDecoration: "none" }}>{l.label}</a>
            ))}
          </div>
          <div style={{ display: "flex", gap: 10 }}>
            <a href="/auth" style={{ padding: "8px 18px", borderRadius: 8, border: "1.5px solid #e2e8f0", background: "white", fontSize: 13, fontWeight: 600, color: "#1d4ed8", textDecoration: "none" }}>Login</a>
            <a href="/jobs" style={{ padding: "8px 18px", borderRadius: 8, border: "none", background: "linear-gradient(135deg,#1d4ed8,#7c3aed)", fontSize: 13, fontWeight: 600, color: "white", textDecoration: "none" }}>Find Jobs</a>
          </div>
        </div>
      </nav>

      {/* Header */}
      <div style={{ background: "linear-gradient(135deg,#1e3a8a,#4c1d95)", padding: "56px 5%", textAlign: "center" }}>
        <p style={{ fontSize: 13, fontWeight: 700, color: "#818cf8", letterSpacing: "0.1em", textTransform: "uppercase", marginBottom: 12 }}>JobHive Blog</p>
        <h1 style={{ fontFamily: "'Playfair Display', serif", fontSize: "clamp(28px,5vw,52px)", fontWeight: 800, color: "white", letterSpacing: "-1.5px", marginBottom: 14 }}>Career Advice & Industry Insights</h1>
        <p style={{ fontSize: 16, color: "#a5b4fc", marginBottom: 32, maxWidth: 500, margin: "0 auto 32px" }}>Tips, guides and news to help you grow your career and land your dream job.</p>
        <div style={{ display: "flex", background: "white", borderRadius: 12, overflow: "hidden", maxWidth: 480, margin: "0 auto", boxShadow: "0 8px 32px rgba(0,0,0,0.2)" }}>
          <input value={search} onChange={e => setSearch(e.target.value)} placeholder="Search articles..." style={{ flex: 1, border: "none", outline: "none", fontSize: 15, padding: "14px 20px", color: "#0f172a" }} />
          <button style={{ padding: "0 24px", background: "linear-gradient(135deg,#1d4ed8,#7c3aed)", color: "white", border: "none", fontSize: 14, fontWeight: 700, cursor: "pointer" }}>Search</button>
        </div>
      </div>

      <div style={{ maxWidth: 1100, margin: "0 auto", padding: "40px 5% 64px" }}>
        {/* Category filters */}
        <div style={{ display: "flex", gap: 8, marginBottom: 36, flexWrap: "wrap" }}>
          {CATEGORIES.map(cat => (
            <button key={cat} onClick={() => setActiveCategory(cat)}
              style={{ padding: "8px 20px", borderRadius: 20, border: `1.5px solid ${activeCategory === cat ? "#1d4ed8" : "#e2e8f0"}`, background: activeCategory === cat ? "#eff6ff" : "white", fontSize: 13, fontWeight: 600, color: activeCategory === cat ? "#1d4ed8" : "#64748b", cursor: "pointer", transition: "all 0.2s" }}>
              {cat}
            </button>
          ))}
        </div>

        {/* Featured post */}
        {activeCategory === "All" && !search && featured && (
          <div style={{ background: "white", borderRadius: 20, border: "1.5px solid #f1f5f9", overflow: "hidden", marginBottom: 36, display: "grid", gridTemplateColumns: "1fr 1fr", cursor: "pointer", transition: "all 0.2s", boxShadow: "0 4px 24px rgba(0,0,0,0.06)" }}
            onMouseEnter={e => { e.currentTarget.style.boxShadow = "0 12px 40px rgba(29,78,216,0.12)"; e.currentTarget.style.transform = "translateY(-2px)"; }}
            onMouseLeave={e => { e.currentTarget.style.boxShadow = "0 4px 24px rgba(0,0,0,0.06)"; e.currentTarget.style.transform = "translateY(0)"; }}>
            <div style={{ background: "linear-gradient(135deg,#1e3a8a,#4c1d95)", display: "flex", alignItems: "center", justifyContent: "center", minHeight: 280, fontSize: 96 }}>
              {featured.image}
            </div>
            <div style={{ padding: "36px 32px", display: "flex", flexDirection: "column", justifyContent: "center" }}>
              <div style={{ display: "flex", gap: 8, marginBottom: 16 }}>
                <span style={{ padding: "4px 12px", background: "#eff6ff", color: "#1d4ed8", borderRadius: 20, fontSize: 12, fontWeight: 700 }}>⭐ Featured</span>
                <span style={{ padding: "4px 12px", background: "#f5f3ff", color: "#7c3aed", borderRadius: 20, fontSize: 12, fontWeight: 700 }}>{featured.category}</span>
              </div>
              <h2 style={{ fontFamily: "'Playfair Display', serif", fontSize: 26, fontWeight: 800, color: "#0f172a", lineHeight: 1.3, marginBottom: 14 }}>{featured.title}</h2>
              <p style={{ fontSize: 15, color: "#64748b", lineHeight: 1.7, marginBottom: 20 }}>{featured.excerpt}</p>
              <div style={{ display: "flex", alignItems: "center", gap: 12 }}>
                <div style={{ width: 36, height: 36, borderRadius: "50%", background: "linear-gradient(135deg,#e0e7ff,#c7d2fe)", display: "flex", alignItems: "center", justifyContent: "center", fontWeight: 700, fontSize: 12, color: "#4338ca" }}>{featured.avatar}</div>
                <div>
                  <div style={{ fontSize: 13, fontWeight: 700, color: "#0f172a" }}>{featured.author}</div>
                  <div style={{ fontSize: 12, color: "#94a3b8" }}>{featured.date} · {featured.readTime}</div>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* Grid of posts */}
        {filtered.length === 0 ? (
          <div style={{ textAlign: "center", padding: "60px 20px", background: "white", borderRadius: 16, border: "1.5px solid #f1f5f9" }}>
            <div style={{ fontSize: 48, marginBottom: 16 }}>🔍</div>
            <div style={{ fontSize: 18, fontWeight: 700, color: "#0f172a", marginBottom: 8 }}>No articles found</div>
            <div style={{ fontSize: 14, color: "#94a3b8" }}>Try a different search term or category</div>
          </div>
        ) : (
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(300px, 1fr))", gap: 22 }}>
            {(activeCategory === "All" && !search ? rest : filtered).map(post => (
              <div key={post.id}
                style={{ background: "white", borderRadius: 16, border: "1.5px solid #f1f5f9", overflow: "hidden", cursor: "pointer", transition: "all 0.25s" }}
                onMouseEnter={e => { e.currentTarget.style.borderColor = "#c7d2fe"; e.currentTarget.style.boxShadow = "0 8px 28px rgba(99,102,241,0.1)"; e.currentTarget.style.transform = "translateY(-4px)"; }}
                onMouseLeave={e => { e.currentTarget.style.borderColor = "#f1f5f9"; e.currentTarget.style.boxShadow = "none"; e.currentTarget.style.transform = "translateY(0)"; }}>
                <div style={{ height: 140, background: "linear-gradient(135deg,#f8faff,#eef2ff)", display: "flex", alignItems: "center", justifyContent: "center", fontSize: 56 }}>
                  {post.image}
                </div>
                <div style={{ padding: "20px" }}>
                  <div style={{ display: "flex", gap: 6, marginBottom: 12 }}>
                    <span style={{ padding: "3px 10px", background: "#f5f3ff", color: "#7c3aed", borderRadius: 20, fontSize: 11, fontWeight: 700 }}>{post.category}</span>
                    <span style={{ padding: "3px 10px", background: "#f8faff", color: "#64748b", borderRadius: 20, fontSize: 11, fontWeight: 600 }}>{post.readTime}</span>
                  </div>
                  <h3 style={{ fontFamily: "'Playfair Display', serif", fontSize: 17, fontWeight: 800, color: "#0f172a", lineHeight: 1.4, marginBottom: 10 }}>{post.title}</h3>
                  <p style={{ fontSize: 13, color: "#64748b", lineHeight: 1.7, marginBottom: 16, display: "-webkit-box", WebkitLineClamp: 2, WebkitBoxOrient: "vertical", overflow: "hidden" }}>{post.excerpt}</p>
                  <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between" }}>
                    <div style={{ display: "flex", alignItems: "center", gap: 8 }}>
                      <div style={{ width: 28, height: 28, borderRadius: "50%", background: "linear-gradient(135deg,#e0e7ff,#c7d2fe)", display: "flex", alignItems: "center", justifyContent: "center", fontWeight: 700, fontSize: 10, color: "#4338ca" }}>{post.avatar}</div>
                      <div>
                        <div style={{ fontSize: 12, fontWeight: 700, color: "#0f172a" }}>{post.author}</div>
                        <div style={{ fontSize: 11, color: "#94a3b8" }}>{post.date}</div>
                      </div>
                    </div>
                    <button style={{ padding: "6px 14px", borderRadius: 8, border: "1px solid #e0e7ff", background: "white", fontSize: 12, fontWeight: 700, color: "#4338ca", cursor: "pointer" }}>Read →</button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>

      <footer style={{ background: "#0f172a", padding: "32px 5%", textAlign: "center" }}>
        <p style={{ color: "#475569", fontSize: 14 }}>© 2025 JobHive. All rights reserved.</p>
      </footer>
    </div>
  );
}