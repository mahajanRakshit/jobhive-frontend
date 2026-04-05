import { useState, useEffect } from "react";

const STATS = [
  { label: "Total Jobs", value: "1,284", change: "+12%", icon: "💼", color: "#2563eb", bg: "#eff6ff" },
  { label: "Total Users", value: "48,320", change: "+8%", icon: "👥", color: "#7c3aed", bg: "#f5f3ff" },
  { label: "Companies", value: "4,521", change: "+5%", icon: "🏢", color: "#059669", bg: "#ecfdf5" },
  { label: "Revenue", value: "₹9.4L", change: "+21%", icon: "💰", color: "#d97706", bg: "#fffbeb" },
  { label: "Applications", value: "32,100", change: "+18%", icon: "📄", color: "#dc2626", bg: "#fef2f2" },
  { label: "Hired", value: "2,840", change: "+9%", icon: "🎉", color: "#0891b2", bg: "#ecfeff" },
];

const RECENT_JOBS = [
  { id: 1, title: "Senior React Developer", company: "TechCorp", location: "Bangalore", status: "Active", date: "Today", logo: "TC", color: "#2563eb" },
  { id: 2, title: "UI/UX Designer", company: "DesignStudio", location: "Remote", status: "Pending", date: "Today", logo: "DS", color: "#7c3aed" },
  { id: 3, title: "Backend Engineer", company: "FinStack", location: "Mumbai", status: "Active", date: "Yesterday", logo: "FS", color: "#059669" },
  { id: 4, title: "Product Manager", company: "GrowthLabs", location: "Delhi", status: "Rejected", date: "2 days ago", logo: "GL", color: "#d97706" },
  { id: 5, title: "DevOps Engineer", company: "CloudBase", location: "Hyderabad", status: "Active", date: "3 days ago", logo: "CB", color: "#dc2626" },
  { id: 6, title: "Data Scientist", company: "AIForge", location: "Pune", status: "Pending", date: "3 days ago", logo: "AF", color: "#0891b2" },
];

const RECENT_USERS = [
  { id: 1, name: "Rahul Sharma", email: "rahul@gmail.com", role: "Job Seeker", joined: "Today", avatar: "RS", status: "Active" },
  { id: 2, name: "Priya Mehta", email: "priya@techcorp.com", role: "Employer", joined: "Today", avatar: "PM", status: "Active" },
  { id: 3, name: "Amit Kumar", email: "amit@gmail.com", role: "Job Seeker", joined: "Yesterday", avatar: "AK", status: "Active" },
  { id: 4, name: "Sneha Patel", email: "sneha@designstudio.com", role: "Employer", joined: "2 days ago", avatar: "SP", status: "Suspended" },
  { id: 5, name: "Vikram Singh", email: "vikram@gmail.com", role: "Job Seeker", joined: "3 days ago", avatar: "VS", status: "Active" },
];

const PAYMENTS = [
  { id: "#INV001", company: "TechCorp India", plan: "Premium", amount: "₹9,999", date: "Today", status: "Paid" },
  { id: "#INV002", company: "DesignStudio", plan: "Basic", amount: "₹2,999", date: "Yesterday", status: "Paid" },
  { id: "#INV003", company: "FinStack", plan: "Featured", amount: "₹5,999", date: "2 days ago", status: "Pending" },
  { id: "#INV004", company: "GrowthLabs", plan: "Premium", amount: "₹9,999", date: "3 days ago", status: "Failed" },
  { id: "#INV005", company: "CloudBase", plan: "Basic", amount: "₹2,999", date: "4 days ago", status: "Paid" },
];

const NAV_ITEMS = [
  { icon: "🏠", label: "Dashboard", id: "dashboard" },
  { icon: "💼", label: "Jobs", id: "jobs" },
  { icon: "👥", label: "Users", id: "users" },
  { icon: "🏢", label: "Companies", id: "companies" },
  { icon: "💰", label: "Payments", id: "payments" },
  { icon: "📊", label: "Analytics", id: "analytics" },
  { icon: "📝", label: "Blog", id: "blog" },
  { icon: "⚙️", label: "Settings", id: "settings" },
];

function StatusBadge({ status }) {
  const styles = {
    Active:    { bg: "#dcfce7", color: "#15803d" },
    Pending:   { bg: "#fef9c3", color: "#a16207" },
    Rejected:  { bg: "#fee2e2", color: "#dc2626" },
    Suspended: { bg: "#fee2e2", color: "#dc2626" },
    Paid:      { bg: "#dcfce7", color: "#15803d" },
    Failed:    { bg: "#fee2e2", color: "#dc2626" },
  };
  const s = styles[status] || { bg: "#f1f5f9", color: "#64748b" };
  return (
    <span style={{ padding: "4px 10px", borderRadius: 20, fontSize: 12, fontWeight: 700, background: s.bg, color: s.color }}>
      {status}
    </span>
  );
}

function Sidebar({ active, setActive, collapsed, setCollapsed }) {
  return (
    <div style={{
      width: collapsed ? 68 : 240, flexShrink: 0, background: "#0f172a",
      minHeight: "100vh", transition: "width 0.3s ease", display: "flex",
      flexDirection: "column", position: "sticky", top: 0,
    }}>
      {/* Logo */}
      <div style={{ padding: collapsed ? "20px 16px" : "20px 24px", display: "flex", alignItems: "center", gap: 12, borderBottom: "1px solid #1e293b" }}>
        <div style={{ width: 36, height: 36, background: "linear-gradient(135deg,#1d4ed8,#7c3aed)", borderRadius: 10, display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0 }}>
          <span style={{ color: "#fff", fontWeight: 800, fontSize: 18 }}>J</span>
        </div>
        {!collapsed && <span style={{ fontFamily: "'Playfair Display', serif", fontWeight: 700, fontSize: 18, color: "white" }}>JobHive</span>}
      </div>

      {/* Toggle button */}
      <button onClick={() => setCollapsed(!collapsed)} style={{ margin: "12px auto", width: 32, height: 32, borderRadius: 8, border: "1px solid #1e293b", background: "#1e293b", color: "#64748b", cursor: "pointer", fontSize: 14, display: "flex", alignItems: "center", justifyContent: "center" }}>
        {collapsed ? "→" : "←"}
      </button>

      {/* Nav items */}
      <nav style={{ flex: 1, padding: "8px 12px" }}>
        {NAV_ITEMS.map(item => (
          <button key={item.id} onClick={() => setActive(item.id)}
            style={{
              width: "100%", display: "flex", alignItems: "center", gap: 12,
              padding: collapsed ? "12px 8px" : "12px 16px", borderRadius: 10,
              border: "none", cursor: "pointer", marginBottom: 4, transition: "all 0.2s",
              background: active === item.id ? "linear-gradient(135deg,#1d4ed8,#7c3aed)" : "transparent",
              color: active === item.id ? "white" : "#64748b", justifyContent: collapsed ? "center" : "flex-start",
            }}
            onMouseEnter={e => { if (active !== item.id) e.currentTarget.style.background = "#1e293b"; }}
            onMouseLeave={e => { if (active !== item.id) e.currentTarget.style.background = "transparent"; }}>
            <span style={{ fontSize: 18, flexShrink: 0 }}>{item.icon}</span>
            {!collapsed && <span style={{ fontSize: 14, fontWeight: 600 }}>{item.label}</span>}
          </button>
        ))}
      </nav>

      {/* Admin profile */}
      <div style={{ padding: collapsed ? "16px 12px" : "16px 20px", borderTop: "1px solid #1e293b", display: "flex", alignItems: "center", gap: 12 }}>
        <div style={{ width: 36, height: 36, borderRadius: "50%", background: "linear-gradient(135deg,#1d4ed8,#7c3aed)", display: "flex", alignItems: "center", justifyContent: "center", fontWeight: 700, fontSize: 14, color: "white", flexShrink: 0 }}>A</div>
        {!collapsed && (
          <div>
            <div style={{ fontSize: 13, fontWeight: 700, color: "white" }}>Admin User</div>
            <div style={{ fontSize: 11, color: "#475569" }}>admin@jobhive.com</div>
          </div>
        )}
      </div>
    </div>
  );
}

function DashboardHome() {
  const barData = [40, 65, 50, 80, 70, 90, 75, 95, 85, 100, 88, 110];
  const months = ["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"];
  const maxVal = Math.max(...barData);

  return (
    <div>
      {/* Stat cards */}
      <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(200px, 1fr))", gap: 16, marginBottom: 28 }}>
        {STATS.map(s => (
          <div key={s.label} style={{ background: "white", borderRadius: 14, border: "1.5px solid #f1f5f9", padding: "20px", transition: "all 0.2s" }}
            onMouseEnter={e => { e.currentTarget.style.boxShadow = "0 6px 24px rgba(0,0,0,0.08)"; e.currentTarget.style.transform = "translateY(-2px)"; }}
            onMouseLeave={e => { e.currentTarget.style.boxShadow = "none"; e.currentTarget.style.transform = "translateY(0)"; }}>
            <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start", marginBottom: 12 }}>
              <div style={{ width: 42, height: 42, borderRadius: 12, background: s.bg, display: "flex", alignItems: "center", justifyContent: "center", fontSize: 20 }}>{s.icon}</div>
              <span style={{ fontSize: 12, fontWeight: 700, color: "#15803d", background: "#dcfce7", padding: "3px 8px", borderRadius: 20 }}>{s.change}</span>
            </div>
            <div style={{ fontSize: 24, fontWeight: 800, color: "#0f172a", marginBottom: 4 }}>{s.value}</div>
            <div style={{ fontSize: 13, color: "#64748b", fontWeight: 500 }}>{s.label}</div>
          </div>
        ))}
      </div>

      <div style={{ display: "grid", gridTemplateColumns: "1.6fr 1fr", gap: 20, marginBottom: 24 }}>
        {/* Bar chart */}
        <div style={{ background: "white", borderRadius: 16, border: "1.5px solid #f1f5f9", padding: "24px" }}>
          <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: 24 }}>
            <div>
              <div style={{ fontSize: 16, fontWeight: 700, color: "#0f172a" }}>Job Postings Overview</div>
              <div style={{ fontSize: 13, color: "#94a3b8" }}>Monthly job listings this year</div>
            </div>
            <select style={{ padding: "6px 12px", borderRadius: 8, border: "1px solid #e2e8f0", fontSize: 13, color: "#374151", background: "white" }}>
              <option>2025</option><option>2024</option>
            </select>
          </div>
          <div style={{ display: "flex", alignItems: "flex-end", gap: 8, height: 160 }}>
            {barData.map((val, i) => (
              <div key={i} style={{ flex: 1, display: "flex", flexDirection: "column", alignItems: "center", gap: 6 }}>
                <div style={{ width: "100%", background: i === 11 ? "linear-gradient(135deg,#1d4ed8,#7c3aed)" : "#e0e7ff", borderRadius: "4px 4px 0 0", height: `${(val / maxVal) * 140}px`, transition: "all 0.3s", cursor: "pointer" }}
                  onMouseEnter={e => { if (i !== 11) e.target.style.background = "#c7d2fe"; }}
                  onMouseLeave={e => { if (i !== 11) e.target.style.background = "#e0e7ff"; }} />
                <span style={{ fontSize: 10, color: "#94a3b8", fontWeight: 600 }}>{months[i]}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Quick stats donut-style */}
        <div style={{ background: "white", borderRadius: 16, border: "1.5px solid #f1f5f9", padding: "24px" }}>
          <div style={{ fontSize: 16, fontWeight: 700, color: "#0f172a", marginBottom: 6 }}>Job Status Breakdown</div>
          <div style={{ fontSize: 13, color: "#94a3b8", marginBottom: 20 }}>Current listing status</div>
          {[
            { label: "Active Jobs", value: 820, total: 1284, color: "#2563eb" },
            { label: "Pending Review", value: 312, total: 1284, color: "#d97706" },
            { label: "Rejected", value: 152, total: 1284, color: "#dc2626" },
          ].map(item => (
            <div key={item.label} style={{ marginBottom: 18 }}>
              <div style={{ display: "flex", justifyContent: "space-between", marginBottom: 6 }}>
                <span style={{ fontSize: 13, fontWeight: 600, color: "#374151" }}>{item.label}</span>
                <span style={{ fontSize: 13, fontWeight: 700, color: "#0f172a" }}>{item.value}</span>
              </div>
              <div style={{ height: 8, borderRadius: 4, background: "#f1f5f9", overflow: "hidden" }}>
                <div style={{ height: "100%", borderRadius: 4, background: item.color, width: `${(item.value / item.total) * 100}%`, transition: "width 1s ease" }} />
              </div>
            </div>
          ))}

          <div style={{ marginTop: 24, padding: "16px", background: "#f8faff", borderRadius: 12, border: "1px solid #e0e7ff" }}>
            <div style={{ fontSize: 13, color: "#64748b", marginBottom: 4 }}>Total Revenue This Month</div>
            <div style={{ fontSize: 28, fontWeight: 800, color: "#1d4ed8" }}>₹9,40,000</div>
            <div style={{ fontSize: 12, color: "#15803d", fontWeight: 600, marginTop: 4 }}>↑ +21% from last month</div>
          </div>
        </div>
      </div>

      {/* Recent jobs table */}
      <div style={{ background: "white", borderRadius: 16, border: "1.5px solid #f1f5f9", padding: "24px", marginBottom: 24 }}>
        <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: 20 }}>
          <div style={{ fontSize: 16, fontWeight: 700, color: "#0f172a" }}>Recent Job Listings</div>
          <button style={{ padding: "8px 18px", borderRadius: 8, border: "1.5px solid #e0e7ff", background: "white", fontSize: 13, fontWeight: 600, color: "#4338ca", cursor: "pointer" }}>View All →</button>
        </div>
        <div style={{ overflowX: "auto" }}>
          <table style={{ width: "100%", borderCollapse: "collapse" }}>
            <thead>
              <tr style={{ borderBottom: "1.5px solid #f1f5f9" }}>
                {["Job Title", "Company", "Location", "Status", "Posted", "Action"].map(h => (
                  <th key={h} style={{ padding: "10px 12px", textAlign: "left", fontSize: 12, fontWeight: 700, color: "#94a3b8", textTransform: "uppercase", letterSpacing: "0.05em" }}>{h}</th>
                ))}
              </tr>
            </thead>
            <tbody>
              {RECENT_JOBS.map(job => (
                <tr key={job.id} style={{ borderBottom: "1px solid #f8faff", transition: "background 0.15s" }}
                  onMouseEnter={e => e.currentTarget.style.background = "#fafbff"}
                  onMouseLeave={e => e.currentTarget.style.background = "transparent"}>
                  <td style={{ padding: "14px 12px" }}>
                    <div style={{ display: "flex", alignItems: "center", gap: 10 }}>
                      <div style={{ width: 36, height: 36, borderRadius: 9, background: job.color + "15", display: "flex", alignItems: "center", justifyContent: "center", fontWeight: 800, fontSize: 13, color: job.color }}>{job.logo}</div>
                      <span style={{ fontSize: 14, fontWeight: 600, color: "#0f172a" }}>{job.title}</span>
                    </div>
                  </td>
                  <td style={{ padding: "14px 12px", fontSize: 14, color: "#64748b" }}>{job.company}</td>
                  <td style={{ padding: "14px 12px", fontSize: 14, color: "#64748b" }}>{job.location}</td>
                  <td style={{ padding: "14px 12px" }}><StatusBadge status={job.status} /></td>
                  <td style={{ padding: "14px 12px", fontSize: 13, color: "#94a3b8" }}>{job.date}</td>
                  <td style={{ padding: "14px 12px" }}>
                    <div style={{ display: "flex", gap: 6 }}>
                      <button style={{ padding: "5px 12px", borderRadius: 6, border: "1px solid #e0e7ff", background: "white", fontSize: 12, fontWeight: 600, color: "#4338ca", cursor: "pointer" }}>Edit</button>
                      <button style={{ padding: "5px 12px", borderRadius: 6, border: "1px solid #fee2e2", background: "white", fontSize: 12, fontWeight: 600, color: "#dc2626", cursor: "pointer" }}>Delete</button>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      {/* Recent users */}
      <div style={{ background: "white", borderRadius: 16, border: "1.5px solid #f1f5f9", padding: "24px" }}>
        <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: 20 }}>
          <div style={{ fontSize: 16, fontWeight: 700, color: "#0f172a" }}>Recent Users</div>
          <button style={{ padding: "8px 18px", borderRadius: 8, border: "1.5px solid #e0e7ff", background: "white", fontSize: 13, fontWeight: 600, color: "#4338ca", cursor: "pointer" }}>View All →</button>
        </div>
        <div style={{ overflowX: "auto" }}>
          <table style={{ width: "100%", borderCollapse: "collapse" }}>
            <thead>
              <tr style={{ borderBottom: "1.5px solid #f1f5f9" }}>
                {["User", "Email", "Role", "Joined", "Status", "Action"].map(h => (
                  <th key={h} style={{ padding: "10px 12px", textAlign: "left", fontSize: 12, fontWeight: 700, color: "#94a3b8", textTransform: "uppercase", letterSpacing: "0.05em" }}>{h}</th>
                ))}
              </tr>
            </thead>
            <tbody>
              {RECENT_USERS.map(user => (
                <tr key={user.id} style={{ borderBottom: "1px solid #f8faff", transition: "background 0.15s" }}
                  onMouseEnter={e => e.currentTarget.style.background = "#fafbff"}
                  onMouseLeave={e => e.currentTarget.style.background = "transparent"}>
                  <td style={{ padding: "14px 12px" }}>
                    <div style={{ display: "flex", alignItems: "center", gap: 10 }}>
                      <div style={{ width: 36, height: 36, borderRadius: "50%", background: "linear-gradient(135deg,#e0e7ff,#c7d2fe)", display: "flex", alignItems: "center", justifyContent: "center", fontWeight: 700, fontSize: 12, color: "#4338ca" }}>{user.avatar}</div>
                      <span style={{ fontSize: 14, fontWeight: 600, color: "#0f172a" }}>{user.name}</span>
                    </div>
                  </td>
                  <td style={{ padding: "14px 12px", fontSize: 13, color: "#64748b" }}>{user.email}</td>
                  <td style={{ padding: "14px 12px" }}>
                    <span style={{ padding: "4px 10px", borderRadius: 6, fontSize: 12, fontWeight: 600, background: user.role === "Employer" ? "#f0fdf4" : "#f0f9ff", color: user.role === "Employer" ? "#15803d" : "#0369a1" }}>{user.role}</span>
                  </td>
                  <td style={{ padding: "14px 12px", fontSize: 13, color: "#94a3b8" }}>{user.joined}</td>
                  <td style={{ padding: "14px 12px" }}><StatusBadge status={user.status} /></td>
                  <td style={{ padding: "14px 12px" }}>
                    <div style={{ display: "flex", gap: 6 }}>
                      <button style={{ padding: "5px 12px", borderRadius: 6, border: "1px solid #e0e7ff", background: "white", fontSize: 12, fontWeight: 600, color: "#4338ca", cursor: "pointer" }}>View</button>
                      <button style={{ padding: "5px 12px", borderRadius: 6, border: "1px solid #fee2e2", background: "white", fontSize: 12, fontWeight: 600, color: "#dc2626", cursor: "pointer" }}>Ban</button>
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

function PaymentsPage() {
  return (
    <div>
      <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(200px, 1fr))", gap: 16, marginBottom: 28 }}>
        {[
          { label: "Total Revenue", value: "₹94,000", icon: "💰", color: "#059669", bg: "#ecfdf5" },
          { label: "This Month", value: "₹9,400", icon: "📅", color: "#2563eb", bg: "#eff6ff" },
          { label: "Pending", value: "₹5,999", icon: "⏳", color: "#d97706", bg: "#fffbeb" },
          { label: "Failed", value: "₹9,999", icon: "❌", color: "#dc2626", bg: "#fef2f2" },
        ].map(s => (
          <div key={s.label} style={{ background: "white", borderRadius: 14, border: "1.5px solid #f1f5f9", padding: "20px" }}>
            <div style={{ width: 42, height: 42, borderRadius: 12, background: s.bg, display: "flex", alignItems: "center", justifyContent: "center", fontSize: 20, marginBottom: 12 }}>{s.icon}</div>
            <div style={{ fontSize: 24, fontWeight: 800, color: "#0f172a", marginBottom: 4 }}>{s.value}</div>
            <div style={{ fontSize: 13, color: "#64748b" }}>{s.label}</div>
          </div>
        ))}
      </div>

      <div style={{ background: "white", borderRadius: 16, border: "1.5px solid #f1f5f9", padding: "24px" }}>
        <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: 20 }}>
          <div style={{ fontSize: 16, fontWeight: 700, color: "#0f172a" }}>Payment History</div>
          <button style={{ padding: "8px 18px", borderRadius: 8, border: "none", background: "linear-gradient(135deg,#1d4ed8,#7c3aed)", fontSize: 13, fontWeight: 600, color: "white", cursor: "pointer" }}>Export CSV</button>
        </div>
        <table style={{ width: "100%", borderCollapse: "collapse" }}>
          <thead>
            <tr style={{ borderBottom: "1.5px solid #f1f5f9" }}>
              {["Invoice", "Company", "Plan", "Amount", "Date", "Status"].map(h => (
                <th key={h} style={{ padding: "10px 12px", textAlign: "left", fontSize: 12, fontWeight: 700, color: "#94a3b8", textTransform: "uppercase" }}>{h}</th>
              ))}
            </tr>
          </thead>
          <tbody>
            {PAYMENTS.map(p => (
              <tr key={p.id} style={{ borderBottom: "1px solid #f8faff" }}
                onMouseEnter={e => e.currentTarget.style.background = "#fafbff"}
                onMouseLeave={e => e.currentTarget.style.background = "transparent"}>
                <td style={{ padding: "14px 12px", fontSize: 14, fontWeight: 700, color: "#4338ca" }}>{p.id}</td>
                <td style={{ padding: "14px 12px", fontSize: 14, color: "#0f172a", fontWeight: 600 }}>{p.company}</td>
                <td style={{ padding: "14px 12px" }}>
                  <span style={{ padding: "4px 10px", borderRadius: 6, fontSize: 12, fontWeight: 600, background: p.plan === "Premium" ? "#f5f3ff" : "#f0fdf4", color: p.plan === "Premium" ? "#7c3aed" : "#15803d" }}>{p.plan}</span>
                </td>
                <td style={{ padding: "14px 12px", fontSize: 14, fontWeight: 700, color: "#059669" }}>{p.amount}</td>
                <td style={{ padding: "14px 12px", fontSize: 13, color: "#94a3b8" }}>{p.date}</td>
                <td style={{ padding: "14px 12px" }}><StatusBadge status={p.status} /></td>
              </tr>
            ))}
          </tbody>
        </table>
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

export default function AdminDashboard() {
  const [activeNav, setActiveNav] = useState("dashboard");
  const [collapsed, setCollapsed] = useState(false);
  const [notifications, setNotifications] = useState(5);

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
    dashboard: "Dashboard Overview",
    jobs: "Manage Jobs",
    users: "Manage Users",
    companies: "Manage Companies",
    payments: "Payments & Revenue",
    analytics: "Analytics",
    blog: "Blog Manager",
    settings: "Settings",
  };

  const renderPage = () => {
    if (activeNav === "dashboard") return <DashboardHome />;
    if (activeNav === "payments") return <PaymentsPage />;
    const icons = { jobs: "💼", users: "👥", companies: "🏢", analytics: "📊", blog: "📝", settings: "⚙️" };
    return <PlaceholderPage title={pageTitles[activeNav]} icon={icons[activeNav]} />;
  };

  return (
    <div style={{ display: "flex", minHeight: "100vh", background: "#f8faff" }}>
      <Sidebar active={activeNav} setActive={setActiveNav} collapsed={collapsed} setCollapsed={setCollapsed} />

      {/* Main content */}
      <div style={{ flex: 1, display: "flex", flexDirection: "column", minWidth: 0 }}>

        {/* Top bar */}
        <div style={{ background: "white", borderBottom: "1px solid #f1f5f9", padding: "0 28px", height: 64, display: "flex", alignItems: "center", justifyContent: "space-between", position: "sticky", top: 0, zIndex: 50 }}>
          <div>
            <div style={{ fontSize: 18, fontWeight: 700, color: "#0f172a" }}>{pageTitles[activeNav]}</div>
            <div style={{ fontSize: 12, color: "#94a3b8" }}>Welcome back, Admin 👋</div>
          </div>
          <div style={{ display: "flex", alignItems: "center", gap: 16 }}>
            {/* Search */}
            <div style={{ display: "flex", alignItems: "center", gap: 8, background: "#f8faff", border: "1px solid #e2e8f0", borderRadius: 10, padding: "8px 14px" }}>
              <span style={{ fontSize: 14 }}>🔍</span>
              <input placeholder="Search..." style={{ border: "none", outline: "none", background: "transparent", fontSize: 14, color: "#374151", width: 160 }} />
            </div>
            {/* Notification */}
            <button onClick={() => setNotifications(0)} style={{ position: "relative", width: 40, height: 40, borderRadius: 10, border: "1px solid #e2e8f0", background: "white", cursor: "pointer", fontSize: 18, display: "flex", alignItems: "center", justifyContent: "center" }}>
              🔔
              {notifications > 0 && (
                <span style={{ position: "absolute", top: 6, right: 6, width: 16, height: 16, borderRadius: "50%", background: "#dc2626", color: "white", fontSize: 10, fontWeight: 700, display: "flex", alignItems: "center", justifyContent: "center" }}>{notifications}</span>
              )}
            </button>
            {/* Avatar */}
            <div style={{ width: 40, height: 40, borderRadius: "50%", background: "linear-gradient(135deg,#1d4ed8,#7c3aed)", display: "flex", alignItems: "center", justifyContent: "center", fontWeight: 700, fontSize: 15, color: "white", cursor: "pointer" }}>A</div>
          </div>
        </div>

        {/* Page content */}
        <div style={{ flex: 1, padding: "28px", overflowY: "auto" }}>
          {renderPage()}
        </div>
      </div>
    </div>
  );
}