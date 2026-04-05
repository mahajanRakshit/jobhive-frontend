import { useState, useEffect } from "react";

const POSTED_JOBS = [
  { id: 1, title: "Senior React Developer", applicants: 48, views: 320, status: "Active", deadline: "Dec 30, 2025", type: "Full-time", logo: "TC", color: "#2563eb" },
  { id: 2, title: "UI/UX Designer", applicants: 23, views: 180, status: "Active", deadline: "Jan 5, 2026", type: "Remote", logo: "TC", color: "#7c3aed" },
  { id: 3, title: "Backend Engineer", applicants: 61, views: 410, status: "Closed", deadline: "Dec 10, 2025", type: "Full-time", logo: "TC", color: "#059669" },
  { id: 4, title: "DevOps Engineer", applicants: 15, views: 95, status: "Draft", deadline: "Jan 15, 2026", type: "Hybrid", logo: "TC", color: "#d97706" },
];

const APPLICANTS = [
  { id: 1, name: "Rahul Sharma", role: "Senior React Developer", exp: "4 years", location: "Bangalore", applied: "Today", status: "New", avatar: "RS", match: 95 },
  { id: 2, name: "Priya Mehta", role: "Senior React Developer", exp: "3 years", location: "Mumbai", applied: "Today", status: "Reviewed", avatar: "PM", match: 88 },
  { id: 3, name: "Amit Kumar", role: "UI/UX Designer", exp: "5 years", location: "Delhi", applied: "Yesterday", status: "Shortlisted", avatar: "AK", match: 92 },
  { id: 4, name: "Sneha Patel", role: "Backend Engineer", exp: "6 years", location: "Pune", applied: "2 days ago", status: "Interview", avatar: "SP", match: 97 },
  { id: 5, name: "Vikram Singh", role: "UI/UX Designer", exp: "2 years", location: "Hyderabad", applied: "3 days ago", status: "Rejected", avatar: "VS", match: 62 },
  { id: 6, name: "Anita Roy", role: "Backend Engineer", exp: "4 years", location: "Chennai", applied: "3 days ago", status: "New", avatar: "AR", match: 84 },
];

const NAV_ITEMS = [
  { icon: "🏠", label: "Overview", id: "overview" },
  { icon: "💼", label: "My Jobs", id: "jobs" },
  { icon: "👥", label: "Applicants", id: "applicants" },
  { icon: "📊", label: "Analytics", id: "analytics" },
  { icon: "🏢", label: "Company Profile", id: "company" },
  { icon: "💰", label: "Billing", id: "billing" },
  { icon: "⚙️", label: "Settings", id: "settings" },
];

const STATUS_COLORS = {
  New:         { bg: "#eff6ff", color: "#2563eb" },
  Reviewed:    { bg: "#f5f3ff", color: "#7c3aed" },
  Shortlisted: { bg: "#fef9c3", color: "#a16207" },
  Interview:   { bg: "#dcfce7", color: "#15803d" },
  Rejected:    { bg: "#fee2e2", color: "#dc2626" },
  Active:      { bg: "#dcfce7", color: "#15803d" },
  Closed:      { bg: "#fee2e2", color: "#dc2626" },
  Draft:       { bg: "#f1f5f9", color: "#64748b" },
};

function StatusBadge({ status }) {
  const s = STATUS_COLORS[status] || { bg: "#f1f5f9", color: "#64748b" };
  return (
    <span style={{ padding: "4px 12px", borderRadius: 20, fontSize: 12, fontWeight: 700, background: s.bg, color: s.color }}>
      {status}
    </span>
  );
}

function Sidebar({ active, setActive, collapsed, setCollapsed }) {
  return (
    <div style={{ width: collapsed ? 68 : 240, flexShrink: 0, background: "#0f172a", minHeight: "100vh", transition: "width 0.3s ease", display: "flex", flexDirection: "column", position: "sticky", top: 0 }}>
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
        <div style={{ width: 36, height: 36, borderRadius: "50%", background: "linear-gradient(135deg,#1d4ed8,#7c3aed)", display: "flex", alignItems: "center", justifyContent: "center", fontWeight: 700, fontSize: 14, color: "white", flexShrink: 0 }}>T</div>
        {!collapsed && (
          <div>
            <div style={{ fontSize: 13, fontWeight: 700, color: "white" }}>TechCorp India</div>
            <div style={{ fontSize: 11, color: "#475569" }}>Employer Account</div>
          </div>
        )}
      </div>
    </div>
  );
}

function Overview({ setActive }) {
  return (
    <div>
      {/* Welcome banner */}
      <div style={{ background: "linear-gradient(135deg,#1e3a8a,#4c1d95)", borderRadius: 16, padding: "28px 32px", marginBottom: 24, display: "flex", justifyContent: "space-between", alignItems: "center", flexWrap: "wrap", gap: 16 }}>
        <div>
          <div style={{ fontSize: 22, fontWeight: 800, color: "white", marginBottom: 6 }}>Welcome back, TechCorp! 👋</div>
          <div style={{ fontSize: 14, color: "#a5b4fc" }}>You have 4 active job listings and 48 new applicants today</div>
        </div>
        <button onClick={() => setActive("jobs")} style={{ padding: "12px 28px", borderRadius: 12, border: "none", background: "white", color: "#1d4ed8", fontSize: 14, fontWeight: 700, cursor: "pointer", whiteSpace: "nowrap" }}>
          + Post New Job
        </button>
      </div>

      {/* Stat cards */}
      <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(180px, 1fr))", gap: 16, marginBottom: 24 }}>
        {[
          { label: "Active Jobs", value: "4", icon: "💼", color: "#2563eb", bg: "#eff6ff" },
          { label: "Total Applicants", value: "147", icon: "👥", color: "#7c3aed", bg: "#f5f3ff" },
          { label: "Shortlisted", value: "23", icon: "⭐", color: "#d97706", bg: "#fffbeb" },
          { label: "Interviews Set", value: "8", icon: "📅", color: "#059669", bg: "#ecfdf5" },
          { label: "Hired", value: "3", icon: "🎉", color: "#0891b2", bg: "#ecfeff" },
        ].map(s => (
          <div key={s.label} style={{ background: "white", borderRadius: 14, border: "1.5px solid #f1f5f9", padding: "20px", transition: "all 0.2s", cursor: "pointer" }}
            onMouseEnter={e => { e.currentTarget.style.boxShadow = "0 6px 24px rgba(0,0,0,0.08)"; e.currentTarget.style.transform = "translateY(-2px)"; }}
            onMouseLeave={e => { e.currentTarget.style.boxShadow = "none"; e.currentTarget.style.transform = "translateY(0)"; }}>
            <div style={{ width: 42, height: 42, borderRadius: 12, background: s.bg, display: "flex", alignItems: "center", justifyContent: "center", fontSize: 20, marginBottom: 12 }}>{s.icon}</div>
            <div style={{ fontSize: 28, fontWeight: 800, color: "#0f172a", marginBottom: 4 }}>{s.value}</div>
            <div style={{ fontSize: 13, color: "#64748b" }}>{s.label}</div>
          </div>
        ))}
      </div>

      <div style={{ display: "grid", gridTemplateColumns: "1.4fr 1fr", gap: 20 }}>
        {/* Recent applicants */}
        <div style={{ background: "white", borderRadius: 16, border: "1.5px solid #f1f5f9", padding: "24px" }}>
          <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: 20 }}>
            <div style={{ fontSize: 16, fontWeight: 700, color: "#0f172a" }}>Recent Applicants</div>
            <button onClick={() => setActive("applicants")} style={{ fontSize: 13, color: "#4338ca", fontWeight: 600, border: "none", background: "none", cursor: "pointer" }}>View all →</button>
          </div>
          {APPLICANTS.slice(0, 4).map(a => (
            <div key={a.id} style={{ display: "flex", alignItems: "center", gap: 12, padding: "12px 0", borderBottom: "1px solid #f8faff" }}>
              <div style={{ width: 40, height: 40, borderRadius: "50%", background: "linear-gradient(135deg,#e0e7ff,#c7d2fe)", display: "flex", alignItems: "center", justifyContent: "center", fontWeight: 700, fontSize: 13, color: "#4338ca", flexShrink: 0 }}>{a.avatar}</div>
              <div style={{ flex: 1, minWidth: 0 }}>
                <div style={{ fontSize: 14, fontWeight: 700, color: "#0f172a" }}>{a.name}</div>
                <div style={{ fontSize: 12, color: "#94a3b8", overflow: "hidden", textOverflow: "ellipsis", whiteSpace: "nowrap" }}>{a.role} · {a.applied}</div>
              </div>
              <div style={{ display: "flex", alignItems: "center", gap: 8, flexShrink: 0 }}>
                <span style={{ fontSize: 12, fontWeight: 700, color: "#059669" }}>{a.match}%</span>
                <StatusBadge status={a.status} />
              </div>
            </div>
          ))}
        </div>

        {/* Job performance */}
        <div style={{ background: "white", borderRadius: 16, border: "1.5px solid #f1f5f9", padding: "24px" }}>
          <div style={{ fontSize: 16, fontWeight: 700, color: "#0f172a", marginBottom: 6 }}>Job Performance</div>
          <div style={{ fontSize: 13, color: "#94a3b8", marginBottom: 20 }}>Applicants per listing</div>
          {POSTED_JOBS.map(job => (
            <div key={job.id} style={{ marginBottom: 16 }}>
              <div style={{ display: "flex", justifyContent: "space-between", marginBottom: 6 }}>
                <span style={{ fontSize: 13, fontWeight: 600, color: "#374151", overflow: "hidden", textOverflow: "ellipsis", whiteSpace: "nowrap", maxWidth: 160 }}>{job.title}</span>
                <span style={{ fontSize: 13, fontWeight: 700, color: "#0f172a", flexShrink: 0 }}>{job.applicants}</span>
              </div>
              <div style={{ height: 8, borderRadius: 4, background: "#f1f5f9", overflow: "hidden" }}>
                <div style={{ height: "100%", borderRadius: 4, background: `linear-gradient(135deg,#1d4ed8,#7c3aed)`, width: `${(job.applicants / 65) * 100}%`, transition: "width 1s ease" }} />
              </div>
            </div>
          ))}

          <div style={{ marginTop: 20, padding: "14px", background: "#f8faff", borderRadius: 12, border: "1px solid #e0e7ff", textAlign: "center" }}>
            <div style={{ fontSize: 12, color: "#64748b", marginBottom: 4 }}>Current Plan</div>
            <div style={{ fontSize: 18, fontWeight: 800, color: "#1d4ed8" }}>Premium</div>
            <div style={{ fontSize: 12, color: "#94a3b8", marginTop: 2 }}>Renews Jan 1, 2026</div>
          </div>
        </div>
      </div>
    </div>
  );
}

function MyJobs() {
  const [showForm, setShowForm] = useState(false);
  const [jobs, setJobs] = useState(POSTED_JOBS);
  const [form, setForm] = useState({ title: "", type: "Full-time", location: "", deadline: "" });

  const handlePost = () => {
    if (!form.title || !form.location) return;
    const newJob = { id: jobs.length + 1, ...form, applicants: 0, views: 0, status: "Active", logo: "TC", color: "#2563eb" };
    setJobs([newJob, ...jobs]);
    setForm({ title: "", type: "Full-time", location: "", deadline: "" });
    setShowForm(false);
  };

  const inputStyle = { width: "100%", padding: "10px 14px", borderRadius: 10, border: "1.5px solid #e2e8f0", fontSize: 14, color: "#0f172a", outline: "none", background: "white", boxSizing: "border-box" };

  return (
    <div>
      <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: 20 }}>
        <div style={{ fontSize: 18, fontWeight: 700, color: "#0f172a" }}>My Job Listings ({jobs.length})</div>
        <button onClick={() => setShowForm(!showForm)} style={{ padding: "10px 24px", borderRadius: 10, border: "none", background: "linear-gradient(135deg,#1d4ed8,#7c3aed)", color: "white", fontSize: 14, fontWeight: 700, cursor: "pointer" }}>
          {showForm ? "✕ Cancel" : "+ Post New Job"}
        </button>
      </div>

      {/* Post job form */}
      {showForm && (
        <div style={{ background: "white", borderRadius: 16, border: "1.5px solid #e0e7ff", padding: "24px", marginBottom: 24 }}>
          <div style={{ fontSize: 16, fontWeight: 700, color: "#0f172a", marginBottom: 20 }}>📝 Post a New Job</div>
          <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 16, marginBottom: 16 }}>
            <div>
              <label style={{ fontSize: 13, fontWeight: 700, color: "#374151", display: "block", marginBottom: 6 }}>Job Title *</label>
              <input value={form.title} onChange={e => setForm({ ...form, title: e.target.value })} placeholder="e.g. Senior React Developer" style={inputStyle} />
            </div>
            <div>
              <label style={{ fontSize: 13, fontWeight: 700, color: "#374151", display: "block", marginBottom: 6 }}>Job Type</label>
              <select value={form.type} onChange={e => setForm({ ...form, type: e.target.value })} style={{ ...inputStyle, appearance: "none" }}>
                {["Full-time", "Part-time", "Remote", "Hybrid", "Contract"].map(t => <option key={t}>{t}</option>)}
              </select>
            </div>
            <div>
              <label style={{ fontSize: 13, fontWeight: 700, color: "#374151", display: "block", marginBottom: 6 }}>Location *</label>
              <input value={form.location} onChange={e => setForm({ ...form, location: e.target.value })} placeholder="e.g. Bangalore or Remote" style={inputStyle} />
            </div>
            <div>
              <label style={{ fontSize: 13, fontWeight: 700, color: "#374151", display: "block", marginBottom: 6 }}>Application Deadline</label>
              <input type="date" value={form.deadline} onChange={e => setForm({ ...form, deadline: e.target.value })} style={inputStyle} />
            </div>
          </div>
          <button onClick={handlePost} style={{ padding: "12px 32px", borderRadius: 10, border: "none", background: "linear-gradient(135deg,#1d4ed8,#7c3aed)", color: "white", fontSize: 14, fontWeight: 700, cursor: "pointer" }}>
            Post Job →
          </button>
        </div>
      )}

      {/* Jobs table */}
      <div style={{ background: "white", borderRadius: 16, border: "1.5px solid #f1f5f9", padding: "24px" }}>
        <div style={{ overflowX: "auto" }}>
          <table style={{ width: "100%", borderCollapse: "collapse" }}>
            <thead>
              <tr style={{ borderBottom: "1.5px solid #f1f5f9" }}>
                {["Job Title", "Type", "Applicants", "Views", "Deadline", "Status", "Actions"].map(h => (
                  <th key={h} style={{ padding: "10px 12px", textAlign: "left", fontSize: 12, fontWeight: 700, color: "#94a3b8", textTransform: "uppercase", letterSpacing: "0.05em" }}>{h}</th>
                ))}
              </tr>
            </thead>
            <tbody>
              {jobs.map(job => (
                <tr key={job.id} style={{ borderBottom: "1px solid #f8faff", transition: "background 0.15s" }}
                  onMouseEnter={e => e.currentTarget.style.background = "#fafbff"}
                  onMouseLeave={e => e.currentTarget.style.background = "transparent"}>
                  <td style={{ padding: "14px 12px" }}>
                    <div style={{ fontSize: 14, fontWeight: 700, color: "#0f172a" }}>{job.title}</div>
                  </td>
                  <td style={{ padding: "14px 12px", fontSize: 13, color: "#64748b" }}>{job.type}</td>
                  <td style={{ padding: "14px 12px" }}>
                    <span style={{ fontSize: 15, fontWeight: 800, color: "#1d4ed8" }}>{job.applicants}</span>
                  </td>
                  <td style={{ padding: "14px 12px", fontSize: 14, color: "#64748b" }}>{job.views}</td>
                  <td style={{ padding: "14px 12px", fontSize: 13, color: "#94a3b8" }}>{job.deadline || "—"}</td>
                  <td style={{ padding: "14px 12px" }}><StatusBadge status={job.status} /></td>
                  <td style={{ padding: "14px 12px" }}>
                    <div style={{ display: "flex", gap: 6 }}>
                      <button style={{ padding: "5px 12px", borderRadius: 6, border: "1px solid #e0e7ff", background: "white", fontSize: 12, fontWeight: 600, color: "#4338ca", cursor: "pointer" }}>Edit</button>
                      <button style={{ padding: "5px 12px", borderRadius: 6, border: "1px solid #fee2e2", background: "white", fontSize: 12, fontWeight: 600, color: "#dc2626", cursor: "pointer" }}>Close</button>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}

function Applicants() {
  const [filter, setFilter] = useState("All");
  const statuses = ["All", "New", "Reviewed", "Shortlisted", "Interview", "Rejected"];
  const filtered = filter === "All" ? APPLICANTS : APPLICANTS.filter(a => a.status === filter);

  return (
    <div>
      <div style={{ fontSize: 18, fontWeight: 700, color: "#0f172a", marginBottom: 20 }}>All Applicants ({APPLICANTS.length})</div>

      {/* Filter tabs */}
      <div style={{ display: "flex", gap: 8, marginBottom: 24, flexWrap: "wrap" }}>
        {statuses.map(s => (
          <button key={s} onClick={() => setFilter(s)} style={{ padding: "8px 18px", borderRadius: 20, border: "1.5px solid", borderColor: filter === s ? "#1d4ed8" : "#e2e8f0", background: filter === s ? "#eff6ff" : "white", fontSize: 13, fontWeight: 600, color: filter === s ? "#1d4ed8" : "#64748b", cursor: "pointer", transition: "all 0.2s" }}>
            {s} {s === "All" ? `(${APPLICANTS.length})` : `(${APPLICANTS.filter(a => a.status === s).length})`}
          </button>
        ))}
      </div>

      {/* Applicant cards */}
      <div style={{ display: "flex", flexDirection: "column", gap: 14 }}>
        {filtered.map(a => (
          <div key={a.id} style={{ background: "white", borderRadius: 14, border: "1.5px solid #f1f5f9", padding: "20px 24px", display: "flex", alignItems: "center", gap: 16, transition: "all 0.2s", flexWrap: "wrap" }}
            onMouseEnter={e => { e.currentTarget.style.borderColor = "#c7d2fe"; e.currentTarget.style.boxShadow = "0 4px 16px rgba(99,102,241,0.08)"; }}
            onMouseLeave={e => { e.currentTarget.style.borderColor = "#f1f5f9"; e.currentTarget.style.boxShadow = "none"; }}>
            <div style={{ width: 48, height: 48, borderRadius: "50%", background: "linear-gradient(135deg,#e0e7ff,#c7d2fe)", display: "flex", alignItems: "center", justifyContent: "center", fontWeight: 700, fontSize: 15, color: "#4338ca", flexShrink: 0 }}>{a.avatar}</div>
            <div style={{ flex: 1, minWidth: 160 }}>
              <div style={{ fontSize: 15, fontWeight: 700, color: "#0f172a", marginBottom: 3 }}>{a.name}</div>
              <div style={{ fontSize: 13, color: "#64748b" }}>{a.role} · {a.exp} exp · {a.location}</div>
            </div>
            <div style={{ display: "flex", alignItems: "center", gap: 8, flexShrink: 0 }}>
              <div style={{ textAlign: "center", padding: "6px 12px", background: a.match >= 90 ? "#dcfce7" : a.match >= 80 ? "#fef9c3" : "#f1f5f9", borderRadius: 8 }}>
                <div style={{ fontSize: 16, fontWeight: 800, color: a.match >= 90 ? "#15803d" : a.match >= 80 ? "#a16207" : "#64748b" }}>{a.match}%</div>
                <div style={{ fontSize: 10, color: "#94a3b8", fontWeight: 600 }}>Match</div>
              </div>
            </div>
            <div style={{ flexShrink: 0 }}><StatusBadge status={a.status} /></div>
            <div style={{ fontSize: 12, color: "#94a3b8", flexShrink: 0 }}>{a.applied}</div>
            <div style={{ display: "flex", gap: 8, flexShrink: 0 }}>
              <button style={{ padding: "7px 14px", borderRadius: 8, border: "1px solid #e0e7ff", background: "white", fontSize: 12, fontWeight: 600, color: "#4338ca", cursor: "pointer" }}>View CV</button>
              <button style={{ padding: "7px 14px", borderRadius: 8, border: "none", background: "linear-gradient(135deg,#1d4ed8,#7c3aed)", fontSize: 12, fontWeight: 600, color: "white", cursor: "pointer" }}>Message</button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

function PlaceholderPage({ title, icon }) {
  return (
    <div style={{ display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center", minHeight: 400, background: "white", borderRadius: 16, border: "1.5px solid #f1f5f9" }}>
      <div style={{ fontSize: 56, marginBottom: 16 }}>{icon}</div>
      <div style={{ fontSize: 22, fontWeight: 700, color: "#0f172a", marginBottom: 8 }}>{title}</div>
      <div style={{ fontSize: 15, color: "#94a3b8" }}>This section is coming soon</div>
    </div>
  );
}

export default function EmployerDashboard() {
  const [activeNav, setActiveNav] = useState("overview");
  const [collapsed, setCollapsed] = useState(false);
  const [notifications, setNotifications] = useState(3);

  useEffect(() => {
    const link = document.createElement("link");
    link.href = "https://fonts.googleapis.com/css2?family=Playfair+Display:wght@700;800&display=swap";
    link.rel = "stylesheet";
    document.head.appendChild(link);
    document.body.style.margin = "0";
    document.body.style.fontFamily = "'Inter', -apple-system, sans-serif";
    document.body.style.background = "#f8faff";
  }, []);

  const pageTitles = {
    overview: "Employer Overview",
    jobs: "My Job Listings",
    applicants: "Applicants",
    analytics: "Analytics",
    company: "Company Profile",
    billing: "Billing & Plans",
    settings: "Settings",
  };

  const renderPage = () => {
    if (activeNav === "overview") return <Overview setActive={setActiveNav} />;
    if (activeNav === "jobs") return <MyJobs />;
    if (activeNav === "applicants") return <Applicants />;
    const icons = { analytics: "📊", company: "🏢", billing: "💰", settings: "⚙️" };
    return <PlaceholderPage title={pageTitles[activeNav]} icon={icons[activeNav]} />;
  };

  return (
    <div style={{ display: "flex", minHeight: "100vh", background: "#f8faff" }}>
      <Sidebar active={activeNav} setActive={setActiveNav} collapsed={collapsed} setCollapsed={setCollapsed} />
      <div style={{ flex: 1, display: "flex", flexDirection: "column", minWidth: 0 }}>
        {/* Top bar */}
        <div style={{ background: "white", borderBottom: "1px solid #f1f5f9", padding: "0 28px", height: 64, display: "flex", alignItems: "center", justifyContent: "space-between", position: "sticky", top: 0, zIndex: 50 }}>
          <div>
            <div style={{ fontSize: 18, fontWeight: 700, color: "#0f172a" }}>{pageTitles[activeNav]}</div>
            <div style={{ fontSize: 12, color: "#94a3b8" }}>TechCorp India · Premium Plan</div>
          </div>
          <div style={{ display: "flex", alignItems: "center", gap: 16 }}>
            <div style={{ display: "flex", alignItems: "center", gap: 8, background: "#f8faff", border: "1px solid #e2e8f0", borderRadius: 10, padding: "8px 14px" }}>
              <span style={{ fontSize: 14 }}>🔍</span>
              <input placeholder="Search..." style={{ border: "none", outline: "none", background: "transparent", fontSize: 14, color: "#374151", width: 140 }} />
            </div>
            <button onClick={() => setNotifications(0)} style={{ position: "relative", width: 40, height: 40, borderRadius: 10, border: "1px solid #e2e8f0", background: "white", cursor: "pointer", fontSize: 18, display: "flex", alignItems: "center", justifyContent: "center" }}>
              🔔
              {notifications > 0 && (
                <span style={{ position: "absolute", top: 6, right: 6, width: 16, height: 16, borderRadius: "50%", background: "#dc2626", color: "white", fontSize: 10, fontWeight: 700, display: "flex", alignItems: "center", justifyContent: "center" }}>{notifications}</span>
              )}
            </button>
            <div style={{ width: 40, height: 40, borderRadius: "50%", background: "linear-gradient(135deg,#1d4ed8,#7c3aed)", display: "flex", alignItems: "center", justifyContent: "center", fontWeight: 700, fontSize: 15, color: "white", cursor: "pointer" }}>T</div>
          </div>
        </div>
        <div style={{ flex: 1, padding: "28px", overflowY: "auto" }}>
          {renderPage()}
        </div>
      </div>
    </div>
  );
}