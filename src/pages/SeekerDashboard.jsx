import { useState, useEffect } from "react";

const APPLIED_JOBS = [
  { id: 1, title: "Senior React Developer", company: "TechCorp India", location: "Bangalore", salary: "₹18–25 LPA", logo: "TC", color: "#2563eb", applied: "Today", status: "Under Review" },
  { id: 2, title: "UI/UX Designer", company: "DesignStudio", location: "Remote", salary: "₹10–15 LPA", logo: "DS", color: "#7c3aed", applied: "Yesterday", status: "Shortlisted" },
  { id: 3, title: "Backend Engineer", company: "FinStack", location: "Mumbai", salary: "₹20–30 LPA", logo: "FS", color: "#059669", applied: "3 days ago", status: "Interview" },
  { id: 4, title: "Product Manager", company: "GrowthLabs", location: "Delhi", salary: "₹22–32 LPA", logo: "GL", color: "#d97706", applied: "5 days ago", status: "Rejected" },
  { id: 5, title: "DevOps Engineer", company: "CloudBase", location: "Hyderabad", salary: "₹16–22 LPA", logo: "CB", color: "#dc2626", applied: "1 week ago", status: "Under Review" },
];

const SAVED_JOBS = [
  { id: 1, title: "Data Scientist", company: "AIForge", location: "Pune", salary: "₹24–35 LPA", logo: "AF", color: "#0891b2", posted: "Today" },
  { id: 2, title: "Flutter Developer", company: "AppWorks", location: "Remote", salary: "₹14–20 LPA", logo: "AW", color: "#0284c7", posted: "2 days ago" },
  { id: 3, title: "Node.js Developer", company: "ServerPro", location: "Hyderabad", salary: "₹15–22 LPA", logo: "SP", color: "#16a34a", posted: "3 days ago" },
];

const NAV_ITEMS = [
  { icon: "🏠", label: "Overview", id: "overview" },
  { icon: "📄", label: "Applied Jobs", id: "applied" },
  { icon: "❤️", label: "Saved Jobs", id: "saved" },
  { icon: "👤", label: "My Profile", id: "profile" },
  { icon: "🔔", label: "Alerts", id: "alerts" },
  { icon: "⚙️", label: "Settings", id: "settings" },
];

const STATUS_STYLES = {
  "Under Review": { bg: "#eff6ff", color: "#2563eb" },
  "Shortlisted":  { bg: "#fef9c3", color: "#a16207" },
  "Interview":    { bg: "#dcfce7", color: "#15803d" },
  "Rejected":     { bg: "#fee2e2", color: "#dc2626" },
  "Offered":      { bg: "#f0fdf4", color: "#15803d" },
};

function StatusBadge({ status }) {
  const s = STATUS_STYLES[status] || { bg: "#f1f5f9", color: "#64748b" };
  return <span style={{ padding: "4px 12px", borderRadius: 20, fontSize: 12, fontWeight: 700, background: s.bg, color: s.color }}>{status}</span>;
}

function Sidebar({ active, setActive, collapsed, setCollapsed }) {
  return (
    <div style={{ width: collapsed ? 68 : 240, flexShrink: 0, background: "#0f172a", minHeight: "100vh", transition: "width 0.3s", display: "flex", flexDirection: "column", position: "sticky", top: 0 }}>
      <div style={{ padding: collapsed ? "20px 16px" : "20px 24px", display: "flex", alignItems: "center", gap: 12, borderBottom: "1px solid #1e293b" }}>
        <div style={{ width: 36, height: 36, background: "linear-gradient(135deg,#1d4ed8,#7c3aed)", borderRadius: 10, display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0 }}>
          <span style={{ color: "#fff", fontWeight: 800, fontSize: 18 }}>J</span>
        </div>
        {!collapsed && <span style={{ fontFamily: "serif", fontWeight: 700, fontSize: 18, color: "white" }}>JobHive</span>}
      </div>
      <button onClick={() => setCollapsed(!collapsed)} style={{ margin: "12px auto", width: 32, height: 32, borderRadius: 8, border: "1px solid #1e293b", background: "#1e293b", color: "#64748b", cursor: "pointer", fontSize: 14, display: "flex", alignItems: "center", justifyContent: "center" }}>
        {collapsed ? "→" : "←"}
      </button>
      <nav style={{ flex: 1, padding: "8px 12px" }}>
        {NAV_ITEMS.map(item => (
          <button key={item.id} onClick={() => setActive(item.id)}
            style={{ width: "100%", display: "flex", alignItems: "center", gap: 12, padding: collapsed ? "12px 8px" : "12px 16px", borderRadius: 10, border: "none", cursor: "pointer", marginBottom: 4, transition: "all 0.2s", background: active === item.id ? "linear-gradient(135deg,#1d4ed8,#7c3aed)" : "transparent", color: active === item.id ? "white" : "#64748b", justifyContent: collapsed ? "center" : "flex-start" }}
            onMouseEnter={e => { if (active !== item.id) e.currentTarget.style.background = "#1e293b"; }}
            onMouseLeave={e => { if (active !== item.id) e.currentTarget.style.background = "transparent"; }}>
            <span style={{ fontSize: 18, flexShrink: 0 }}>{item.icon}</span>
            {!collapsed && <span style={{ fontSize: 14, fontWeight: 600 }}>{item.label}</span>}
          </button>
        ))}
      </nav>
      <div style={{ padding: collapsed ? "16px 12px" : "16px 20px", borderTop: "1px solid #1e293b", display: "flex", alignItems: "center", gap: 12 }}>
        <div style={{ width: 36, height: 36, borderRadius: "50%", background: "linear-gradient(135deg,#1d4ed8,#7c3aed)", display: "flex", alignItems: "center", justifyContent: "center", fontWeight: 700, fontSize: 14, color: "white", flexShrink: 0 }}>R</div>
        {!collapsed && <div><div style={{ fontSize: 13, fontWeight: 700, color: "white" }}>Rahul Sharma</div><div style={{ fontSize: 11, color: "#475569" }}>Job Seeker</div></div>}
      </div>
    </div>
  );
}

function Overview({ setActive }) {
  return (
    <div>
      {/* Welcome */}
      <div style={{ background: "linear-gradient(135deg,#1e3a8a,#4c1d95)", borderRadius: 16, padding: "28px 32px", marginBottom: 24, display: "flex", justifyContent: "space-between", alignItems: "center", flexWrap: "wrap", gap: 16 }}>
        <div>
          <div style={{ fontSize: 22, fontWeight: 800, color: "white", marginBottom: 6 }}>Welcome back, Rahul! 👋</div>
          <div style={{ fontSize: 14, color: "#a5b4fc" }}>You have 2 interviews scheduled this week</div>
        </div>
        <a href="/jobs" style={{ padding: "12px 28px", borderRadius: 12, border: "none", background: "white", color: "#1d4ed8", fontSize: 14, fontWeight: 700, cursor: "pointer", textDecoration: "none" }}>Browse Jobs →</a>
      </div>

      {/* Stats */}
      <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(160px, 1fr))", gap: 16, marginBottom: 24 }}>
        {[
          { label: "Applied", value: "12", icon: "📄", color: "#2563eb", bg: "#eff6ff" },
          { label: "Shortlisted", value: "4", icon: "⭐", color: "#d97706", bg: "#fffbeb" },
          { label: "Interviews", value: "2", icon: "📅", color: "#059669", bg: "#ecfdf5" },
          { label: "Saved Jobs", value: "8", icon: "❤️", color: "#dc2626", bg: "#fef2f2" },
          { label: "Profile Views", value: "34", icon: "👁", color: "#7c3aed", bg: "#f5f3ff" },
        ].map(s => (
          <div key={s.label} style={{ background: "white", borderRadius: 14, border: "1.5px solid #f1f5f9", padding: "20px", transition: "all 0.2s", cursor: "pointer" }}
            onMouseEnter={e => { e.currentTarget.style.boxShadow = "0 6px 24px rgba(0,0,0,0.08)"; e.currentTarget.style.transform = "translateY(-2px)"; }}
            onMouseLeave={e => { e.currentTarget.style.boxShadow = "none"; e.currentTarget.style.transform = "translateY(0)"; }}>
            <div style={{ width: 40, height: 40, borderRadius: 12, background: s.bg, display: "flex", alignItems: "center", justifyContent: "center", fontSize: 18, marginBottom: 12 }}>{s.icon}</div>
            <div style={{ fontSize: 26, fontWeight: 800, color: "#0f172a", marginBottom: 4 }}>{s.value}</div>
            <div style={{ fontSize: 13, color: "#64748b" }}>{s.label}</div>
          </div>
        ))}
      </div>

      <div style={{ display: "grid", gridTemplateColumns: "1.4fr 1fr", gap: 20 }}>
        {/* Recent applications */}
        <div style={{ background: "white", borderRadius: 16, border: "1.5px solid #f1f5f9", padding: "24px" }}>
          <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: 20 }}>
            <div style={{ fontSize: 16, fontWeight: 700, color: "#0f172a" }}>Recent Applications</div>
            <button onClick={() => setActive("applied")} style={{ fontSize: 13, color: "#4338ca", fontWeight: 600, border: "none", background: "none", cursor: "pointer" }}>View all →</button>
          </div>
          {APPLIED_JOBS.slice(0, 4).map(job => (
            <div key={job.id} style={{ display: "flex", alignItems: "center", gap: 12, padding: "12px 0", borderBottom: "1px solid #f8faff" }}>
              <div style={{ width: 38, height: 38, borderRadius: 10, background: job.color + "15", display: "flex", alignItems: "center", justifyContent: "center", fontWeight: 800, fontSize: 12, color: job.color, flexShrink: 0 }}>{job.logo}</div>
              <div style={{ flex: 1, minWidth: 0 }}>
                <div style={{ fontSize: 14, fontWeight: 700, color: "#0f172a", overflow: "hidden", textOverflow: "ellipsis", whiteSpace: "nowrap" }}>{job.title}</div>
                <div style={{ fontSize: 12, color: "#94a3b8" }}>{job.company} · {job.applied}</div>
              </div>
              <StatusBadge status={job.status} />
            </div>
          ))}
        </div>

        {/* Profile completion */}
        <div style={{ background: "white", borderRadius: 16, border: "1.5px solid #f1f5f9", padding: "24px" }}>
          <div style={{ fontSize: 16, fontWeight: 700, color: "#0f172a", marginBottom: 6 }}>Profile Completion</div>
          <div style={{ fontSize: 13, color: "#94a3b8", marginBottom: 20 }}>Complete your profile to get more views</div>

          <div style={{ textAlign: "center", marginBottom: 20 }}>
            <div style={{ fontSize: 40, fontWeight: 800, color: "#1d4ed8", fontFamily: "'Playfair Display', serif" }}>72%</div>
            <div style={{ height: 10, borderRadius: 5, background: "#f1f5f9", overflow: "hidden", marginTop: 8 }}>
              <div style={{ height: "100%", borderRadius: 5, background: "linear-gradient(135deg,#1d4ed8,#7c3aed)", width: "72%" }} />
            </div>
          </div>

          {[
            { label: "Basic info", done: true },
            { label: "Upload resume", done: true },
            { label: "Add skills", done: true },
            { label: "Work experience", done: false },
            { label: "Profile photo", done: false },
          ].map(item => (
            <div key={item.label} style={{ display: "flex", alignItems: "center", gap: 10, marginBottom: 10 }}>
              <span style={{ fontSize: 16, color: item.done ? "#059669" : "#e2e8f0" }}>{item.done ? "✅" : "⭕"}</span>
              <span style={{ fontSize: 13, color: item.done ? "#374151" : "#94a3b8", fontWeight: item.done ? 600 : 400, textDecoration: item.done ? "none" : "none" }}>{item.label}</span>
            </div>
          ))}

          <button onClick={() => setActive("profile")} style={{ width: "100%", marginTop: 14, padding: "11px", borderRadius: 10, border: "none", background: "linear-gradient(135deg,#1d4ed8,#7c3aed)", color: "white", fontSize: 13, fontWeight: 700, cursor: "pointer" }}>
            Complete Profile →
          </button>
        </div>
      </div>
    </div>
  );
}

function AppliedJobs() {
  const [filter, setFilter] = useState("All");
  const statuses = ["All", "Under Review", "Shortlisted", "Interview", "Rejected"];
  const filtered = filter === "All" ? APPLIED_JOBS : APPLIED_JOBS.filter(j => j.status === filter);

  return (
    <div>
      <div style={{ fontSize: 18, fontWeight: 700, color: "#0f172a", marginBottom: 20 }}>Applied Jobs ({APPLIED_JOBS.length})</div>
      <div style={{ display: "flex", gap: 8, marginBottom: 24, flexWrap: "wrap" }}>
        {statuses.map(s => (
          <button key={s} onClick={() => setFilter(s)} style={{ padding: "8px 18px", borderRadius: 20, border: `1.5px solid ${filter === s ? "#1d4ed8" : "#e2e8f0"}`, background: filter === s ? "#eff6ff" : "white", fontSize: 13, fontWeight: 600, color: filter === s ? "#1d4ed8" : "#64748b", cursor: "pointer", transition: "all 0.2s" }}>
            {s}
          </button>
        ))}
      </div>
      <div style={{ display: "flex", flexDirection: "column", gap: 14 }}>
        {filtered.map(job => (
          <div key={job.id} style={{ background: "white", borderRadius: 14, border: "1.5px solid #f1f5f9", padding: "20px 24px", display: "flex", alignItems: "center", gap: 16, transition: "all 0.2s", flexWrap: "wrap" }}
            onMouseEnter={e => { e.currentTarget.style.borderColor = "#c7d2fe"; e.currentTarget.style.boxShadow = "0 4px 16px rgba(99,102,241,0.08)"; }}
            onMouseLeave={e => { e.currentTarget.style.borderColor = "#f1f5f9"; e.currentTarget.style.boxShadow = "none"; }}>
            <div style={{ width: 48, height: 48, borderRadius: 12, background: job.color + "15", display: "flex", alignItems: "center", justifyContent: "center", fontWeight: 800, fontSize: 15, color: job.color, flexShrink: 0 }}>{job.logo}</div>
            <div style={{ flex: 1, minWidth: 160 }}>
              <div style={{ fontSize: 15, fontWeight: 700, color: "#0f172a", marginBottom: 3 }}>{job.title}</div>
              <div style={{ fontSize: 13, color: "#64748b" }}>{job.company} · {job.location} · {job.salary}</div>
            </div>
            <div style={{ fontSize: 12, color: "#94a3b8", flexShrink: 0 }}>Applied {job.applied}</div>
            <StatusBadge status={job.status} />
            <button style={{ padding: "7px 16px", borderRadius: 8, border: "1px solid #e0e7ff", background: "white", fontSize: 12, fontWeight: 600, color: "#4338ca", cursor: "pointer" }}>View</button>
          </div>
        ))}
      </div>
    </div>
  );
}

function SavedJobs() {
  const [saved, setSaved] = useState(SAVED_JOBS);
  return (
    <div>
      <div style={{ fontSize: 18, fontWeight: 700, color: "#0f172a", marginBottom: 20 }}>Saved Jobs ({saved.length})</div>
      {saved.length === 0 ? (
        <div style={{ textAlign: "center", padding: "60px", background: "white", borderRadius: 16, border: "1.5px solid #f1f5f9" }}>
          <div style={{ fontSize: 48, marginBottom: 16 }}>❤️</div>
          <div style={{ fontSize: 18, fontWeight: 700, color: "#0f172a", marginBottom: 8 }}>No saved jobs yet</div>
          <a href="/jobs" style={{ padding: "11px 24px", borderRadius: 10, background: "linear-gradient(135deg,#1d4ed8,#7c3aed)", color: "white", fontSize: 14, fontWeight: 700, textDecoration: "none", display: "inline-block" }}>Browse Jobs</a>
        </div>
      ) : (
        <div style={{ display: "flex", flexDirection: "column", gap: 14 }}>
          {saved.map(job => (
            <div key={job.id} style={{ background: "white", borderRadius: 14, border: "1.5px solid #f1f5f9", padding: "20px 24px", display: "flex", alignItems: "center", gap: 16, flexWrap: "wrap" }}>
              <div style={{ width: 48, height: 48, borderRadius: 12, background: job.color + "15", display: "flex", alignItems: "center", justifyContent: "center", fontWeight: 800, fontSize: 15, color: job.color, flexShrink: 0 }}>{job.logo}</div>
              <div style={{ flex: 1, minWidth: 160 }}>
                <div style={{ fontSize: 15, fontWeight: 700, color: "#0f172a", marginBottom: 3 }}>{job.title}</div>
                <div style={{ fontSize: 13, color: "#64748b" }}>{job.company} · {job.location} · {job.salary}</div>
              </div>
              <div style={{ fontSize: 12, color: "#94a3b8" }}>Posted {job.posted}</div>
              <div style={{ display: "flex", gap: 8 }}>
                <a href="/apply" style={{ padding: "7px 16px", borderRadius: 8, border: "none", background: "linear-gradient(135deg,#1d4ed8,#7c3aed)", fontSize: 12, fontWeight: 700, color: "white", textDecoration: "none" }}>Apply</a>
                <button onClick={() => setSaved(saved.filter(j => j.id !== job.id))} style={{ padding: "7px 16px", borderRadius: 8, border: "1px solid #fee2e2", background: "white", fontSize: 12, fontWeight: 600, color: "#dc2626", cursor: "pointer" }}>Remove</button>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

function MyProfile() {
  const [form, setForm] = useState({ name: "Rahul Sharma", email: "rahul@gmail.com", phone: "+91 9876543210", location: "Bangalore", title: "Senior React Developer", bio: "Passionate frontend developer with 4 years of experience building scalable web applications." });
  const [saved, setSavedMsg] = useState(false);

  return (
    <div style={{ display: "flex", flexDirection: "column", gap: 20 }}>
      <div style={{ background: "white", borderRadius: 16, border: "1.5px solid #f1f5f9", padding: "28px" }}>
        <div style={{ display: "flex", alignItems: "center", gap: 20, marginBottom: 28 }}>
          <div style={{ width: 72, height: 72, borderRadius: "50%", background: "linear-gradient(135deg,#1d4ed8,#7c3aed)", display: "flex", alignItems: "center", justifyContent: "center", fontWeight: 800, fontSize: 28, color: "white" }}>R</div>
          <div>
            <div style={{ fontSize: 20, fontWeight: 800, color: "#0f172a" }}>{form.name}</div>
            <div style={{ fontSize: 14, color: "#64748b" }}>{form.title}</div>
            <button style={{ marginTop: 8, padding: "6px 14px", borderRadius: 8, border: "1px solid #e0e7ff", background: "white", fontSize: 12, fontWeight: 600, color: "#4338ca", cursor: "pointer" }}>Change Photo</button>
          </div>
        </div>
        <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 16 }}>
          {[
            { label: "Full Name", field: "name" },
            { label: "Email", field: "email" },
            { label: "Phone", field: "phone" },
            { label: "Location", field: "location" },
            { label: "Job Title", field: "title" },
          ].map(({ label, field }) => (
            <div key={field}>
              <label style={{ fontSize: 13, fontWeight: 700, color: "#374151", display: "block", marginBottom: 6 }}>{label}</label>
              <input value={form[field]} onChange={e => setForm({ ...form, [field]: e.target.value })}
                style={{ width: "100%", padding: "11px 14px", borderRadius: 10, border: "1.5px solid #e2e8f0", fontSize: 14, color: "#0f172a", outline: "none", boxSizing: "border-box" }}
                onFocus={e => e.target.style.borderColor = "#1d4ed8"}
                onBlur={e => e.target.style.borderColor = "#e2e8f0"} />
            </div>
          ))}
          <div style={{ gridColumn: "1 / -1" }}>
            <label style={{ fontSize: 13, fontWeight: 700, color: "#374151", display: "block", marginBottom: 6 }}>Bio</label>
            <textarea value={form.bio} onChange={e => setForm({ ...form, bio: e.target.value })} rows={3}
              style={{ width: "100%", padding: "11px 14px", borderRadius: 10, border: "1.5px solid #e2e8f0", fontSize: 14, color: "#0f172a", outline: "none", resize: "vertical", boxSizing: "border-box" }}
              onFocus={e => e.target.style.borderColor = "#1d4ed8"}
              onBlur={e => e.target.style.borderColor = "#e2e8f0"} />
          </div>
        </div>
        <button onClick={() => { setSavedMsg(true); setTimeout(() => setSavedMsg(false), 2000); }}
          style={{ marginTop: 20, padding: "12px 32px", borderRadius: 10, border: "none", background: "linear-gradient(135deg,#1d4ed8,#7c3aed)", color: "white", fontSize: 14, fontWeight: 700, cursor: "pointer" }}>
          {saved ? "✅ Saved!" : "Save Changes"}
        </button>
      </div>
    </div>
  );
}

function PlaceholderPage({ title, icon }) {
  return (
    <div style={{ display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center", minHeight: 400, background: "white", borderRadius: 16, border: "1.5px solid #f1f5f9" }}>
      <div style={{ fontSize: 56, marginBottom: 16 }}>{icon}</div>
      <div style={{ fontSize: 22, fontWeight: 700, color: "#0f172a", marginBottom: 8 }}>{title}</div>
      <div style={{ fontSize: 15, color: "#94a3b8" }}>Coming soon</div>
    </div>
  );
}

export default function SeekerDashboard() {
  const [activeNav, setActiveNav] = useState("overview");
  const [collapsed, setCollapsed] = useState(false);
  const [notifications, setNotifications] = useState(2);

  useEffect(() => {
    const link = document.createElement("link");
    link.href = "https://fonts.googleapis.com/css2?family=Playfair+Display:wght@700;800&display=swap";
    link.rel = "stylesheet";
    document.head.appendChild(link);
    document.body.style.margin = "0";
    document.body.style.fontFamily = "'Inter', -apple-system, sans-serif";
    document.body.style.background = "#f8faff";
  }, []);

  const pageTitles = { overview: "My Dashboard", applied: "Applied Jobs", saved: "Saved Jobs", profile: "My Profile", alerts: "Job Alerts", settings: "Settings" };

  const renderPage = () => {
    if (activeNav === "overview") return <Overview setActive={setActiveNav} />;
    if (activeNav === "applied") return <AppliedJobs />;
    if (activeNav === "saved") return <SavedJobs />;
    if (activeNav === "profile") return <MyProfile />;
    return <PlaceholderPage title={pageTitles[activeNav]} icon={activeNav === "alerts" ? "🔔" : "⚙️"} />;
  };

  return (
    <div style={{ display: "flex", minHeight: "100vh", background: "#f8faff" }}>
      <Sidebar active={activeNav} setActive={setActiveNav} collapsed={collapsed} setCollapsed={setCollapsed} />
      <div style={{ flex: 1, display: "flex", flexDirection: "column", minWidth: 0 }}>
        <div style={{ background: "white", borderBottom: "1px solid #f1f5f9", padding: "0 28px", height: 64, display: "flex", alignItems: "center", justifyContent: "space-between", position: "sticky", top: 0, zIndex: 50 }}>
          <div>
            <div style={{ fontSize: 18, fontWeight: 700, color: "#0f172a" }}>{pageTitles[activeNav]}</div>
            <div style={{ fontSize: 12, color: "#94a3b8" }}>Rahul Sharma · Job Seeker</div>
          </div>
          <div style={{ display: "flex", alignItems: "center", gap: 16 }}>
            <div style={{ display: "flex", alignItems: "center", gap: 8, background: "#f8faff", border: "1px solid #e2e8f0", borderRadius: 10, padding: "8px 14px" }}>
              <span style={{ fontSize: 14 }}>🔍</span>
              <input placeholder="Search jobs..." style={{ border: "none", outline: "none", background: "transparent", fontSize: 14, color: "#374151", width: 140 }} />
            </div>
            <button onClick={() => setNotifications(0)} style={{ position: "relative", width: 40, height: 40, borderRadius: 10, border: "1px solid #e2e8f0", background: "white", cursor: "pointer", fontSize: 18, display: "flex", alignItems: "center", justifyContent: "center" }}>
              🔔
              {notifications > 0 && <span style={{ position: "absolute", top: 6, right: 6, width: 16, height: 16, borderRadius: "50%", background: "#dc2626", color: "white", fontSize: 10, fontWeight: 700, display: "flex", alignItems: "center", justifyContent: "center" }}>{notifications}</span>}
            </button>
            <div style={{ width: 40, height: 40, borderRadius: "50%", background: "linear-gradient(135deg,#1d4ed8,#7c3aed)", display: "flex", alignItems: "center", justifyContent: "center", fontWeight: 700, fontSize: 15, color: "white", cursor: "pointer" }}>R</div>
          </div>
        </div>
        <div style={{ flex: 1, padding: "28px", overflowY: "auto" }}>
          {renderPage()}
        </div>
      </div>
    </div>
  );
}