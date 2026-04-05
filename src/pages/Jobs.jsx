import { useState, useEffect } from "react";

const ALL_JOBS = [
  { id: 1, title: "Senior React Developer", company: "TechCorp India", location: "Bangalore", type: "Full-time", salary: "₹18–25 LPA", logo: "TC", color: "#2563eb", tags: ["React", "Node.js", "MongoDB"], experience: "3–5 years", posted: "2 days ago", category: "Technology" },
  { id: 2, title: "UI/UX Designer", company: "DesignStudio", location: "Remote", type: "Remote", salary: "₹10–15 LPA", logo: "DS", color: "#7c3aed", tags: ["Figma", "Prototyping", "Adobe XD"], experience: "2–4 years", posted: "1 day ago", category: "Design" },
  { id: 3, title: "Backend Engineer", company: "FinStack", location: "Mumbai", type: "Full-time", salary: "₹20–30 LPA", logo: "FS", color: "#059669", tags: ["Python", "AWS", "PostgreSQL"], experience: "4–6 years", posted: "3 days ago", category: "Technology" },
  { id: 4, title: "Product Manager", company: "GrowthLabs", location: "Delhi", type: "Hybrid", salary: "₹22–32 LPA", logo: "GL", color: "#d97706", tags: ["Agile", "Roadmap", "Analytics"], experience: "5+ years", posted: "Today", category: "Management" },
  { id: 5, title: "DevOps Engineer", company: "CloudBase", location: "Hyderabad", type: "Full-time", salary: "₹16–22 LPA", logo: "CB", color: "#dc2626", tags: ["Docker", "Kubernetes", "CI/CD"], experience: "3–5 years", posted: "5 days ago", category: "Technology" },
  { id: 6, title: "Data Scientist", company: "AIForge", location: "Pune", type: "Hybrid", salary: "₹24–35 LPA", logo: "AF", color: "#0891b2", tags: ["Python", "ML", "TensorFlow"], experience: "3–5 years", posted: "Today", category: "Technology" },
  { id: 7, title: "Marketing Manager", company: "BrandBoost", location: "Mumbai", type: "Full-time", salary: "₹12–18 LPA", logo: "BB", color: "#be185d", tags: ["SEO", "Social Media", "Content"], experience: "3–5 years", posted: "1 day ago", category: "Marketing" },
  { id: 8, title: "Flutter Developer", company: "AppWorks", location: "Remote", type: "Remote", salary: "₹14–20 LPA", logo: "AW", color: "#0284c7", tags: ["Flutter", "Dart", "Firebase"], experience: "2–4 years", posted: "2 days ago", category: "Technology" },
  { id: 9, title: "Financial Analyst", company: "MoneyTree", location: "Delhi", type: "Full-time", salary: "₹10–16 LPA", logo: "MT", color: "#15803d", tags: ["Excel", "Tally", "Finance"], experience: "1–3 years", posted: "4 days ago", category: "Finance" },
  { id: 10, title: "Graphic Designer", company: "CreativeHub", location: "Bangalore", type: "Hybrid", salary: "₹8–12 LPA", logo: "CH", color: "#9333ea", tags: ["Photoshop", "Illustrator", "Canva"], experience: "1–3 years", posted: "3 days ago", category: "Design" },
  { id: 11, title: "Node.js Developer", company: "ServerPro", location: "Hyderabad", type: "Full-time", salary: "₹15–22 LPA", logo: "SP", color: "#16a34a", tags: ["Node.js", "Express", "MongoDB"], experience: "2–4 years", posted: "Today", category: "Technology" },
  { id: 12, title: "HR Manager", company: "PeopleFirst", location: "Chennai", type: "Full-time", salary: "₹10–15 LPA", logo: "PF", color: "#ea580c", tags: ["Recruitment", "Payroll", "HRMS"], experience: "3–5 years", posted: "6 days ago", category: "Management" },
];

const LOCATIONS = ["All Locations", "Bangalore", "Mumbai", "Delhi", "Hyderabad", "Pune", "Chennai", "Remote"];
const JOB_TYPES = ["All Types", "Full-time", "Part-time", "Remote", "Hybrid", "Contract"];
const CATEGORIES = ["All Categories", "Technology", "Design", "Marketing", "Finance", "Management"];
const EXPERIENCE = ["Any Experience", "0–1 years", "1–3 years", "2–4 years", "3–5 years", "5+ years"];

export default function Jobs() {
  const [search, setSearch] = useState("");
  const [location, setLocation] = useState("All Locations");
  const [jobType, setJobType] = useState("All Types");
  const [category, setCategory] = useState("All Categories");
  const [experience, setExperience] = useState("Any Experience");
  const [savedJobs, setSavedJobs] = useState([]);
  const [sortBy, setSortBy] = useState("newest");
  const [showFilters, setShowFilters] = useState(true);

  useEffect(() => {
    const link = document.createElement("link");
    link.href = "https://fonts.googleapis.com/css2?family=Playfair+Display:wght@700;800&display=swap";
    link.rel = "stylesheet";
    document.head.appendChild(link);
    document.body.style.margin = "0";
    document.body.style.fontFamily = "'Inter', -apple-system, sans-serif";
    document.body.style.background = "#f8faff";
  }, []);

  const filtered = ALL_JOBS.filter(job => {
    const matchSearch = job.title.toLowerCase().includes(search.toLowerCase()) ||
      job.company.toLowerCase().includes(search.toLowerCase()) ||
      job.tags.some(t => t.toLowerCase().includes(search.toLowerCase()));
    const matchLocation = location === "All Locations" || job.location === location;
    const matchType = jobType === "All Types" || job.type === jobType;
    const matchCategory = category === "All Categories" || job.category === category;
    const matchExp = experience === "Any Experience" || job.experience === experience;
    return matchSearch && matchLocation && matchType && matchCategory && matchExp;
  });

  const toggleSave = (id) => {
    setSavedJobs(prev => prev.includes(id) ? prev.filter(j => j !== id) : [...prev, id]);
  };

  const clearFilters = () => {
    setSearch(""); setLocation("All Locations");
    setJobType("All Types"); setCategory("All Categories");
    setExperience("Any Experience");
  };

  const selectStyle = {
    padding: "10px 14px", borderRadius: 10, border: "1.5px solid #e2e8f0",
    background: "white", fontSize: 14, color: "#374151", cursor: "pointer",
    outline: "none", width: "100%", appearance: "none",
    backgroundImage: `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='12' height='12' viewBox='0 0 12 12'%3E%3Cpath fill='%2394a3b8' d='M6 8L1 3h10z'/%3E%3C/svg%3E")`,
    backgroundRepeat: "no-repeat", backgroundPosition: "right 12px center",
  };

  return (
    <div style={{ minHeight: "100vh", background: "#f8faff" }}>

      {/* Navbar */}
      <nav style={{ background: "white", borderBottom: "1px solid #e2e8f0", padding: "0 5%", position: "sticky", top: 0, zIndex: 100, boxShadow: "0 1px 12px rgba(0,0,0,0.06)" }}>
        <div style={{ maxWidth: 1200, margin: "0 auto", display: "flex", alignItems: "center", height: 64, justifyContent: "space-between" }}>
          <div style={{ display: "flex", alignItems: "center", gap: 10 }}>
            <div style={{ width: 34, height: 34, background: "linear-gradient(135deg,#1d4ed8,#7c3aed)", borderRadius: 9, display: "flex", alignItems: "center", justifyContent: "center" }}>
              <span style={{ color: "#fff", fontWeight: 800, fontSize: 17 }}>J</span>
            </div>
            <span style={{ fontFamily: "'Playfair Display', serif", fontWeight: 700, fontSize: 20, color: "#0f172a" }}>JobHive</span>
          </div>
          <div style={{ display: "flex", gap: 28 }}>
            {["Find Jobs", "Companies", "Blog", "About"].map(link => (
              <a key={link} href="#" style={{ fontSize: 14, fontWeight: 500, color: link === "Find Jobs" ? "#1d4ed8" : "#64748b", textDecoration: "none" }}>{link}</a>
            ))}
          </div>
          <div style={{ display: "flex", gap: 10 }}>
            <button style={{ padding: "8px 18px", borderRadius: 8, border: "1.5px solid #e2e8f0", background: "white", fontSize: 13, fontWeight: 600, color: "#1d4ed8", cursor: "pointer" }}>Login</button>
            <button style={{ padding: "8px 18px", borderRadius: 8, border: "none", background: "linear-gradient(135deg,#1d4ed8,#7c3aed)", fontSize: 13, fontWeight: 600, color: "white", cursor: "pointer" }}>Post a Job</button>
          </div>
        </div>
      </nav>

      {/* Header */}
      <div style={{ background: "linear-gradient(135deg,#1e3a8a,#4c1d95)", padding: "48px 5%" }}>
        <div style={{ maxWidth: 1200, margin: "0 auto" }}>
          <h1 style={{ fontFamily: "'Playfair Display', serif", fontSize: "clamp(28px,4vw,48px)", fontWeight: 800, color: "white", marginBottom: 8, letterSpacing: "-1px" }}>Browse All Jobs</h1>
          <p style={{ color: "#a5b4fc", fontSize: 16, marginBottom: 28 }}>Find your perfect role from {ALL_JOBS.length}+ opportunities</p>

          {/* Search bar */}
          <div style={{ display: "flex", background: "white", borderRadius: 14, overflow: "hidden", boxShadow: "0 8px 32px rgba(0,0,0,0.2)", maxWidth: 700 }}>
            <div style={{ flex: 1, display: "flex", alignItems: "center", padding: "0 18px", gap: 10, borderRight: "1px solid #f1f5f9" }}>
              <span style={{ fontSize: 18 }}>🔍</span>
              <input value={search} onChange={e => setSearch(e.target.value)} placeholder="Job title, skill or company..." style={{ border: "none", outline: "none", fontSize: 15, color: "#0f172a", background: "transparent", width: "100%", padding: "16px 0" }} />
              {search && <button onClick={() => setSearch("")} style={{ border: "none", background: "none", cursor: "pointer", fontSize: 18, color: "#94a3b8" }}>✕</button>}
            </div>
            <button style={{ padding: "0 28px", background: "linear-gradient(135deg,#1d4ed8,#7c3aed)", color: "white", border: "none", fontSize: 14, fontWeight: 700, cursor: "pointer" }}>Search</button>
          </div>
        </div>
      </div>

      {/* Main content */}
      <div style={{ maxWidth: 1200, margin: "0 auto", padding: "32px 5%", display: "flex", gap: 28, alignItems: "flex-start" }}>

        {/* Sidebar Filters */}
        <div style={{ width: 260, flexShrink: 0, background: "white", borderRadius: 16, border: "1.5px solid #f1f5f9", padding: "24px", boxShadow: "0 2px 12px rgba(0,0,0,0.04)", position: "sticky", top: 84 }}>
          <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: 20 }}>
            <span style={{ fontSize: 16, fontWeight: 700, color: "#0f172a" }}>🔧 Filters</span>
            <button onClick={clearFilters} style={{ fontSize: 12, color: "#7c3aed", fontWeight: 600, border: "none", background: "none", cursor: "pointer" }}>Clear all</button>
          </div>

          {[
            { label: "Location", value: location, set: setLocation, options: LOCATIONS },
            { label: "Job Type", value: jobType, set: setJobType, options: JOB_TYPES },
            { label: "Category", value: category, set: setCategory, options: CATEGORIES },
            { label: "Experience", value: experience, set: setExperience, options: EXPERIENCE },
          ].map(filter => (
            <div key={filter.label} style={{ marginBottom: 20 }}>
              <label style={{ fontSize: 13, fontWeight: 700, color: "#374151", display: "block", marginBottom: 8, textTransform: "uppercase", letterSpacing: "0.05em" }}>{filter.label}</label>
              <select value={filter.value} onChange={e => filter.set(e.target.value)} style={selectStyle}>
                {filter.options.map(opt => <option key={opt}>{opt}</option>)}
              </select>
            </div>
          ))}

          {/* Active filters summary */}
          {(location !== "All Locations" || jobType !== "All Types" || category !== "All Categories" || experience !== "Any Experience") && (
            <div style={{ marginTop: 8, padding: "12px", background: "#f0f9ff", borderRadius: 10, border: "1px solid #bae6fd" }}>
              <p style={{ fontSize: 12, color: "#0369a1", fontWeight: 600, margin: "0 0 6px" }}>Active filters:</p>
              {[location, jobType, category, experience].filter(f => !f.startsWith("All") && f !== "Any Experience").map(f => (
                <span key={f} style={{ display: "inline-block", fontSize: 11, background: "#e0f2fe", color: "#0369a1", borderRadius: 4, padding: "2px 8px", marginRight: 4, marginBottom: 4, fontWeight: 600 }}>{f}</span>
              ))}
            </div>
          )}
        </div>

        {/* Job list */}
        <div style={{ flex: 1, minWidth: 0 }}>
          {/* Results bar */}
          <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: 20, flexWrap: "wrap", gap: 12 }}>
            <div>
              <span style={{ fontSize: 16, fontWeight: 700, color: "#0f172a" }}>{filtered.length} jobs found</span>
              {search && <span style={{ fontSize: 14, color: "#64748b", marginLeft: 8 }}>for "{search}"</span>}
            </div>
            <div style={{ display: "flex", alignItems: "center", gap: 10 }}>
              <span style={{ fontSize: 13, color: "#64748b" }}>Sort by:</span>
              <select value={sortBy} onChange={e => setSortBy(e.target.value)} style={{ ...selectStyle, width: "auto", padding: "8px 32px 8px 12px" }}>
                <option value="newest">Newest first</option>
                <option value="salary">Highest salary</option>
                <option value="company">Company A–Z</option>
              </select>
            </div>
          </div>

          {/* No results */}
          {filtered.length === 0 && (
            <div style={{ textAlign: "center", padding: "60px 20px", background: "white", borderRadius: 16, border: "1.5px solid #f1f5f9" }}>
              <p style={{ fontSize: 48, marginBottom: 16 }}>🔍</p>
              <p style={{ fontSize: 18, fontWeight: 700, color: "#0f172a", marginBottom: 8 }}>No jobs found</p>
              <p style={{ fontSize: 14, color: "#64748b", marginBottom: 20 }}>Try adjusting your filters or search term</p>
              <button onClick={clearFilters} style={{ padding: "10px 24px", borderRadius: 10, border: "none", background: "linear-gradient(135deg,#1d4ed8,#7c3aed)", color: "white", fontWeight: 700, cursor: "pointer" }}>Clear Filters</button>
            </div>
          )}

          {/* Job cards */}
          <div style={{ display: "flex", flexDirection: "column", gap: 16 }}>
            {filtered.map(job => (
              <div key={job.id}
                style={{ background: "white", borderRadius: 16, border: "1.5px solid #f1f5f9", padding: "24px", transition: "all 0.2s", cursor: "pointer" }}
                onMouseEnter={e => { e.currentTarget.style.borderColor = "#c7d2fe"; e.currentTarget.style.boxShadow = "0 6px 24px rgba(99,102,241,0.1)"; e.currentTarget.style.transform = "translateX(4px)"; }}
                onMouseLeave={e => { e.currentTarget.style.borderColor = "#f1f5f9"; e.currentTarget.style.boxShadow = "none"; e.currentTarget.style.transform = "translateX(0)"; }}>

                <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start", gap: 12 }}>
                  <div style={{ display: "flex", gap: 16, flex: 1 }}>
                    {/* Logo */}
                    <div style={{ width: 54, height: 54, borderRadius: 13, background: job.color + "15", display: "flex", alignItems: "center", justifyContent: "center", fontWeight: 800, fontSize: 17, color: job.color, flexShrink: 0, border: `1.5px solid ${job.color}25` }}>{job.logo}</div>

                    {/* Info */}
                    <div style={{ flex: 1 }}>
                      <div style={{ display: "flex", alignItems: "center", gap: 10, flexWrap: "wrap", marginBottom: 4 }}>
                        <span style={{ fontSize: 17, fontWeight: 700, color: "#0f172a" }}>{job.title}</span>
                        {job.posted === "Today" && <span style={{ fontSize: 11, background: "#dcfce7", color: "#15803d", borderRadius: 6, padding: "2px 8px", fontWeight: 700 }}>NEW</span>}
                      </div>
                      <div style={{ fontSize: 14, color: "#64748b", marginBottom: 12 }}>{job.company}</div>

                      <div style={{ display: "flex", gap: 16, flexWrap: "wrap", marginBottom: 14 }}>
                        <span style={{ fontSize: 13, color: "#64748b", display: "flex", alignItems: "center", gap: 4 }}>📍 {job.location}</span>
                        <span style={{ fontSize: 13, color: "#64748b", display: "flex", alignItems: "center", gap: 4 }}>⏱ {job.type}</span>
                        <span style={{ fontSize: 13, color: "#64748b", display: "flex", alignItems: "center", gap: 4 }}>💼 {job.experience}</span>
                        <span style={{ fontSize: 13, color: "#64748b", display: "flex", alignItems: "center", gap: 4 }}>🕐 {job.posted}</span>
                      </div>

                      <div style={{ display: "flex", gap: 8, flexWrap: "wrap" }}>
                        {job.tags.map(tag => (
                          <span key={tag} style={{ padding: "4px 10px", background: "#f8f7ff", border: "1px solid #e0e7ff", borderRadius: 6, fontSize: 12, fontWeight: 600, color: "#4338ca" }}>{tag}</span>
                        ))}
                      </div>
                    </div>
                  </div>

                  {/* Right side */}
                  <div style={{ display: "flex", flexDirection: "column", alignItems: "flex-end", gap: 12, flexShrink: 0 }}>
                    <button onClick={() => toggleSave(job.id)} style={{ border: "none", background: "none", cursor: "pointer", fontSize: 22, transition: "transform 0.2s" }}
                      onMouseEnter={e => e.target.style.transform = "scale(1.2)"}
                      onMouseLeave={e => e.target.style.transform = "scale(1)"}>
                      {savedJobs.includes(job.id) ? "❤️" : "🤍"}
                    </button>
                    <span style={{ fontSize: 16, fontWeight: 800, color: "#059669", whiteSpace: "nowrap" }}>{job.salary}</span>
                    <button style={{ padding: "10px 22px", borderRadius: 10, border: "none", background: "linear-gradient(135deg,#1d4ed8,#7c3aed)", color: "white", fontSize: 13, fontWeight: 700, cursor: "pointer", whiteSpace: "nowrap", boxShadow: "0 4px 12px rgba(29,78,216,0.25)", transition: "all 0.2s" }}
                      onMouseEnter={e => e.target.style.transform = "translateY(-1px)"}
                      onMouseLeave={e => e.target.style.transform = "translateY(0)"}>
                      Apply Now →
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Load more */}
          {filtered.length > 0 && (
            <div style={{ textAlign: "center", marginTop: 32 }}>
              <button style={{ padding: "14px 40px", borderRadius: 12, border: "1.5px solid #c7d2fe", background: "white", fontSize: 15, fontWeight: 700, color: "#4338ca", cursor: "pointer", transition: "all 0.2s" }}
                onMouseEnter={e => { e.target.style.background = "#eef2ff"; }}
                onMouseLeave={e => { e.target.style.background = "white"; }}>
                Load More Jobs ↓
              </button>
            </div>
          )}
        </div>
      </div>

      {/* Footer */}
      <footer style={{ background: "#0f172a", padding: "32px 5%", marginTop: 48, textAlign: "center" }}>
        <p style={{ color: "#475569", fontSize: 14 }}>© 2025 JobHive. All rights reserved. Made with ❤️ in India</p>
      </footer>
    </div>
  );
}
