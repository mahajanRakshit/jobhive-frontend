import { useState, useEffect } from "react";

const OPEN_ROLES = [
  { id: 1, title: "Senior React Developer", type: "Full-time", location: "Bangalore", salary: "₹18–25 LPA", posted: "2 days ago" },
  { id: 2, title: "UI/UX Designer", type: "Remote", location: "Remote", salary: "₹10–15 LPA", posted: "Today" },
  { id: 3, title: "Backend Engineer", type: "Full-time", location: "Mumbai", salary: "₹20–30 LPA", posted: "1 day ago" },
  { id: 4, title: "DevOps Engineer", type: "Hybrid", location: "Hyderabad", salary: "₹16–22 LPA", posted: "3 days ago" },
];

const REVIEWS = [
  { id: 1, name: "Rahul S.", role: "Software Engineer", rating: 5, date: "Nov 2025", text: "Great work culture and excellent growth opportunities. Management is supportive and the tech stack is modern." },
  { id: 2, name: "Priya M.", role: "Product Manager", rating: 4, date: "Oct 2025", text: "Good company overall. Work life balance could be better but the team is amazing and projects are interesting." },
  { id: 3, name: "Amit K.", role: "DevOps Engineer", rating: 5, date: "Sep 2025", text: "Best company I have worked at. Great benefits, flexible hours, and very knowledgeable colleagues." },
];

const PERKS = [
  { icon: "🏥", label: "Health Insurance" },
  { icon: "🏠", label: "Work from Home" },
  { icon: "📚", label: "Learning Budget" },
  { icon: "🍽️", label: "Free Meals" },
  { icon: "💰", label: "Stock Options" },
  { icon: "🎯", label: "Performance Bonus" },
  { icon: "🧘", label: "Wellness Program" },
  { icon: "✈️", label: "Paid Leaves" },
];

function Stars({ rating }) {
  return (
    <div style={{ display: "flex", gap: 2 }}>
      {[1, 2, 3, 4, 5].map(i => (
        <span key={i} style={{ fontSize: 16, color: i <= rating ? "#f59e0b" : "#e2e8f0" }}>★</span>
      ))}
    </div>
  );
}

export default function CompanyProfile() {
  const [activeTab, setActiveTab] = useState("overview");
  const [following, setFollowing] = useState(false);

  useEffect(() => {
    const link = document.createElement("link");
    link.href = "https://fonts.googleapis.com/css2?family=Playfair+Display:wght@700;800&display=swap";
    link.rel = "stylesheet";
    document.head.appendChild(link);
    document.body.style.margin = "0";
    document.body.style.fontFamily = "'Inter', -apple-system, sans-serif";
    document.body.style.background = "#f8faff";
  }, []);

  const tabs = ["overview", "jobs", "reviews", "culture"];

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
          <div style={{ display: "flex", gap: 10 }}>
            <a href="/auth" style={{ padding: "8px 18px", borderRadius: 8, border: "1.5px solid #e2e8f0", background: "white", fontSize: 13, fontWeight: 600, color: "#1d4ed8", textDecoration: "none" }}>Login</a>
            <a href="/jobs" style={{ padding: "8px 18px", borderRadius: 8, border: "none", background: "linear-gradient(135deg,#1d4ed8,#7c3aed)", fontSize: 13, fontWeight: 600, color: "white", textDecoration: "none" }}>Browse Jobs</a>
          </div>
        </div>
      </nav>

      {/* Cover & Profile */}
      <div style={{ background: "linear-gradient(135deg,#1e3a8a,#4c1d95)", height: 200, position: "relative" }}>
        <div style={{ position: "absolute", inset: 0, opacity: 0.1, backgroundImage: "radial-gradient(circle at 20% 50%, white 1px, transparent 1px)", backgroundSize: "30px 30px" }} />
      </div>

      <div style={{ maxWidth: 1100, margin: "0 auto", padding: "0 5%" }}>
        {/* Company header card */}
        <div style={{ background: "white", borderRadius: 20, border: "1.5px solid #f1f5f9", padding: "28px 32px", marginTop: -60, position: "relative", boxShadow: "0 8px 32px rgba(0,0,0,0.08)", marginBottom: 24 }}>
          <div style={{ display: "flex", alignItems: "flex-start", gap: 24, flexWrap: "wrap" }}>
            {/* Logo */}
            <div style={{ width: 90, height: 90, borderRadius: 18, background: "#eff6ff", border: "3px solid white", display: "flex", alignItems: "center", justifyContent: "center", fontWeight: 800, fontSize: 32, color: "#2563eb", flexShrink: 0, boxShadow: "0 4px 16px rgba(29,78,216,0.15)", marginTop: -10 }}>TC</div>

            <div style={{ flex: 1, minWidth: 200 }}>
              <div style={{ display: "flex", alignItems: "center", gap: 12, flexWrap: "wrap", marginBottom: 6 }}>
                <h1 style={{ fontFamily: "'Playfair Display', serif", fontSize: 28, fontWeight: 800, color: "#0f172a", margin: 0 }}>TechCorp India</h1>
                <span style={{ padding: "4px 12px", background: "#dcfce7", color: "#15803d", borderRadius: 20, fontSize: 12, fontWeight: 700 }}>✓ Verified</span>
              </div>
              <p style={{ fontSize: 15, color: "#64748b", margin: "0 0 14px" }}>Leading technology company building next-gen software solutions</p>
              <div style={{ display: "flex", gap: 20, flexWrap: "wrap" }}>
                {[
                  { icon: "🏢", text: "Technology" },
                  { icon: "📍", text: "Bangalore, India" },
                  { icon: "👥", text: "1,000–5,000 employees" },
                  { icon: "📅", text: "Founded 2010" },
                  { icon: "🌐", text: "techcorp.in" },
                ].map(item => (
                  <span key={item.text} style={{ fontSize: 13, color: "#64748b", display: "flex", alignItems: "center", gap: 5 }}>{item.icon} {item.text}</span>
                ))}
              </div>
            </div>

            <div style={{ display: "flex", gap: 10, flexShrink: 0, flexWrap: "wrap" }}>
              <button onClick={() => setFollowing(!following)} style={{ padding: "10px 22px", borderRadius: 10, border: `1.5px solid ${following ? "#e0e7ff" : "#1d4ed8"}`, background: following ? "#eff6ff" : "white", fontSize: 14, fontWeight: 700, color: "#1d4ed8", cursor: "pointer", transition: "all 0.2s" }}>
                {following ? "✓ Following" : "+ Follow"}
              </button>
              <a href="/jobs" style={{ padding: "10px 22px", borderRadius: 10, border: "none", background: "linear-gradient(135deg,#1d4ed8,#7c3aed)", fontSize: 14, fontWeight: 700, color: "white", textDecoration: "none", display: "inline-block" }}>
                View Jobs ({OPEN_ROLES.length})
              </a>
            </div>
          </div>

          {/* Quick stats */}
          <div style={{ display: "flex", gap: 0, marginTop: 24, borderTop: "1px solid #f1f5f9", paddingTop: 20, flexWrap: "wrap" }}>
            {[
              { value: "4.7", label: "Rating", icon: "⭐" },
              { value: "320+", label: "Reviews", icon: "💬" },
              { value: "4", label: "Open Roles", icon: "💼" },
              { value: "92%", label: "Recommend", icon: "👍" },
            ].map((s, i) => (
              <div key={s.label} style={{ flex: 1, minWidth: 100, textAlign: "center", padding: "0 16px", borderRight: i < 3 ? "1px solid #f1f5f9" : "none" }}>
                <div style={{ fontSize: 22, fontWeight: 800, color: "#0f172a" }}>{s.icon} {s.value}</div>
                <div style={{ fontSize: 13, color: "#94a3b8", marginTop: 2 }}>{s.label}</div>
              </div>
            ))}
          </div>
        </div>

        {/* Tabs */}
        <div style={{ display: "flex", gap: 4, background: "white", borderRadius: 12, padding: 4, border: "1px solid #f1f5f9", marginBottom: 24, width: "fit-content" }}>
          {tabs.map(tab => (
            <button key={tab} onClick={() => setActiveTab(tab)} style={{ padding: "9px 22px", borderRadius: 10, border: "none", cursor: "pointer", fontSize: 14, fontWeight: 600, background: activeTab === tab ? "linear-gradient(135deg,#1d4ed8,#7c3aed)" : "transparent", color: activeTab === tab ? "white" : "#64748b", transition: "all 0.2s", textTransform: "capitalize" }}>
              {tab}
            </button>
          ))}
        </div>

        {/* Tab content */}
        <div style={{ display: "grid", gridTemplateColumns: "1fr 320px", gap: 24, alignItems: "flex-start", paddingBottom: 48 }}>
          <div>
            {/* OVERVIEW */}
            {activeTab === "overview" && (
              <div style={{ display: "flex", flexDirection: "column", gap: 20 }}>
                <div style={{ background: "white", borderRadius: 16, border: "1.5px solid #f1f5f9", padding: "28px" }}>
                  <h3 style={{ fontSize: 18, fontWeight: 700, color: "#0f172a", marginBottom: 14 }}>About TechCorp India</h3>
                  <p style={{ fontSize: 15, color: "#64748b", lineHeight: 1.8, marginBottom: 12 }}>
                    TechCorp India is a leading technology company founded in 2010, specializing in building enterprise-grade software solutions. We serve over 500 clients across 20+ countries and have a team of 2,000+ talented professionals.
                  </p>
                  <p style={{ fontSize: 15, color: "#64748b", lineHeight: 1.8 }}>
                    Our mission is to democratize technology and make cutting-edge software accessible to businesses of all sizes. We are passionate about innovation, diversity, and creating products that make a real difference.
                  </p>
                </div>

                {/* Perks */}
                <div style={{ background: "white", borderRadius: 16, border: "1.5px solid #f1f5f9", padding: "28px" }}>
                  <h3 style={{ fontSize: 18, fontWeight: 700, color: "#0f172a", marginBottom: 18 }}>Perks & Benefits</h3>
                  <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(160px, 1fr))", gap: 12 }}>
                    {PERKS.map(perk => (
                      <div key={perk.label} style={{ display: "flex", alignItems: "center", gap: 10, padding: "12px 16px", background: "#f8faff", borderRadius: 10, border: "1px solid #e0e7ff" }}>
                        <span style={{ fontSize: 20 }}>{perk.icon}</span>
                        <span style={{ fontSize: 13, fontWeight: 600, color: "#374151" }}>{perk.label}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            )}

            {/* JOBS */}
            {activeTab === "jobs" && (
              <div style={{ background: "white", borderRadius: 16, border: "1.5px solid #f1f5f9", padding: "28px" }}>
                <h3 style={{ fontSize: 18, fontWeight: 700, color: "#0f172a", marginBottom: 18 }}>Open Positions ({OPEN_ROLES.length})</h3>
                <div style={{ display: "flex", flexDirection: "column", gap: 14 }}>
                  {OPEN_ROLES.map(job => (
                    <div key={job.id} style={{ padding: "20px", borderRadius: 12, border: "1.5px solid #f1f5f9", transition: "all 0.2s", cursor: "pointer" }}
                      onMouseEnter={e => { e.currentTarget.style.borderColor = "#c7d2fe"; e.currentTarget.style.background = "#fafbff"; }}
                      onMouseLeave={e => { e.currentTarget.style.borderColor = "#f1f5f9"; e.currentTarget.style.background = "white"; }}>
                      <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start", flexWrap: "wrap", gap: 12 }}>
                        <div>
                          <div style={{ fontSize: 16, fontWeight: 700, color: "#0f172a", marginBottom: 6 }}>{job.title}</div>
                          <div style={{ display: "flex", gap: 14, flexWrap: "wrap" }}>
                            <span style={{ fontSize: 13, color: "#64748b" }}>📍 {job.location}</span>
                            <span style={{ fontSize: 13, color: "#64748b" }}>⏱ {job.type}</span>
                            <span style={{ fontSize: 13, color: "#059669", fontWeight: 600 }}>{job.salary}</span>
                            <span style={{ fontSize: 12, color: "#94a3b8" }}>🕐 {job.posted}</span>
                          </div>
                        </div>
                        <button style={{ padding: "9px 20px", borderRadius: 9, border: "none", background: "linear-gradient(135deg,#1d4ed8,#7c3aed)", color: "white", fontSize: 13, fontWeight: 700, cursor: "pointer", whiteSpace: "nowrap" }}>Apply Now →</button>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* REVIEWS */}
            {activeTab === "reviews" && (
              <div style={{ display: "flex", flexDirection: "column", gap: 16 }}>
                <div style={{ background: "white", borderRadius: 16, border: "1.5px solid #f1f5f9", padding: "24px", display: "flex", gap: 32, alignItems: "center", flexWrap: "wrap" }}>
                  <div style={{ textAlign: "center" }}>
                    <div style={{ fontFamily: "'Playfair Display', serif", fontSize: 56, fontWeight: 800, color: "#0f172a", lineHeight: 1 }}>4.7</div>
                    <Stars rating={5} />
                    <div style={{ fontSize: 13, color: "#94a3b8", marginTop: 6 }}>320 reviews</div>
                  </div>
                  <div style={{ flex: 1, minWidth: 200 }}>
                    {[5, 4, 3, 2, 1].map(r => (
                      <div key={r} style={{ display: "flex", alignItems: "center", gap: 10, marginBottom: 8 }}>
                        <span style={{ fontSize: 13, color: "#64748b", width: 8 }}>{r}</span>
                        <span style={{ fontSize: 14, color: "#f59e0b" }}>★</span>
                        <div style={{ flex: 1, height: 8, borderRadius: 4, background: "#f1f5f9", overflow: "hidden" }}>
                          <div style={{ height: "100%", borderRadius: 4, background: "#f59e0b", width: r === 5 ? "70%" : r === 4 ? "20%" : r === 3 ? "7%" : "2%" }} />
                        </div>
                        <span style={{ fontSize: 12, color: "#94a3b8", width: 30 }}>{r === 5 ? "70%" : r === 4 ? "20%" : r === 3 ? "7%" : r === 2 ? "2%" : "1%"}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {REVIEWS.map(r => (
                  <div key={r.id} style={{ background: "white", borderRadius: 14, border: "1.5px solid #f1f5f9", padding: "22px 24px" }}>
                    <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start", marginBottom: 12 }}>
                      <div style={{ display: "flex", gap: 12, alignItems: "center" }}>
                        <div style={{ width: 40, height: 40, borderRadius: "50%", background: "linear-gradient(135deg,#e0e7ff,#c7d2fe)", display: "flex", alignItems: "center", justifyContent: "center", fontWeight: 700, fontSize: 14, color: "#4338ca" }}>{r.name[0]}</div>
                        <div>
                          <div style={{ fontSize: 14, fontWeight: 700, color: "#0f172a" }}>{r.name}</div>
                          <div style={{ fontSize: 12, color: "#94a3b8" }}>{r.role}</div>
                        </div>
                      </div>
                      <div style={{ textAlign: "right" }}>
                        <Stars rating={r.rating} />
                        <div style={{ fontSize: 12, color: "#94a3b8", marginTop: 2 }}>{r.date}</div>
                      </div>
                    </div>
                    <p style={{ fontSize: 14, color: "#64748b", lineHeight: 1.7, margin: 0 }}>{r.text}</p>
                  </div>
                ))}
              </div>
            )}

            {/* CULTURE */}
            {activeTab === "culture" && (
              <div style={{ background: "white", borderRadius: 16, border: "1.5px solid #f1f5f9", padding: "28px" }}>
                <h3 style={{ fontSize: 18, fontWeight: 700, color: "#0f172a", marginBottom: 18 }}>Our Culture & Values</h3>
                <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 16 }}>
                  {[
                    { icon: "🚀", title: "Innovation First", desc: "We encourage bold ideas and experimentation. Failure is seen as a learning opportunity." },
                    { icon: "🤝", title: "Teamwork", desc: "Collaboration is at the heart of everything we do. We win together as one team." },
                    { icon: "🌍", title: "Diversity & Inclusion", desc: "We celebrate differences and build an inclusive workplace where everyone belongs." },
                    { icon: "📈", title: "Growth Mindset", desc: "We invest heavily in learning and development to help you reach your full potential." },
                  ].map(v => (
                    <div key={v.title} style={{ padding: "20px", background: "#f8faff", borderRadius: 12, border: "1px solid #e0e7ff" }}>
                      <div style={{ fontSize: 32, marginBottom: 10 }}>{v.icon}</div>
                      <div style={{ fontSize: 15, fontWeight: 700, color: "#0f172a", marginBottom: 6 }}>{v.title}</div>
                      <div style={{ fontSize: 13, color: "#64748b", lineHeight: 1.7 }}>{v.desc}</div>
                    </div>
                  ))}
                </div>
              </div>
            )}
          </div>

          {/* Sidebar */}
          <div style={{ display: "flex", flexDirection: "column", gap: 16 }}>
            <div style={{ background: "white", borderRadius: 16, border: "1.5px solid #f1f5f9", padding: "22px" }}>
              <h4 style={{ fontSize: 15, fontWeight: 700, color: "#0f172a", marginBottom: 16 }}>Company Info</h4>
              {[
                { label: "Industry", value: "Technology" },
                { label: "Company size", value: "1,000–5,000" },
                { label: "Headquarters", value: "Bangalore, India" },
                { label: "Founded", value: "2010" },
                { label: "Type", value: "Private" },
                { label: "Website", value: "techcorp.in" },
              ].map(item => (
                <div key={item.label} style={{ display: "flex", justifyContent: "space-between", padding: "8px 0", borderBottom: "1px solid #f8faff" }}>
                  <span style={{ fontSize: 13, color: "#94a3b8" }}>{item.label}</span>
                  <span style={{ fontSize: 13, fontWeight: 600, color: "#374151" }}>{item.value}</span>
                </div>
              ))}
            </div>

            <div style={{ background: "linear-gradient(135deg,#1e3a8a,#4c1d95)", borderRadius: 16, padding: "22px", textAlign: "center" }}>
              <div style={{ fontSize: 28, marginBottom: 8 }}>💼</div>
              <div style={{ fontSize: 16, fontWeight: 700, color: "white", marginBottom: 6 }}>Join Our Team</div>
              <div style={{ fontSize: 13, color: "#a5b4fc", marginBottom: 16 }}>{OPEN_ROLES.length} open positions available</div>
              <a href="/jobs" style={{ display: "block", padding: "11px", borderRadius: 10, background: "white", color: "#1d4ed8", fontSize: 14, fontWeight: 700, textDecoration: "none" }}>See All Jobs →</a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}