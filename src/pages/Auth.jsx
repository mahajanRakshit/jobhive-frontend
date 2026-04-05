import { useState, useEffect } from "react";

export default function Auth() {
  const [mode, setMode] = useState("login"); // login | register
  const [role, setRole] = useState("seeker"); // seeker | employer
  const [step, setStep] = useState(1);
  const [showPass, setShowPass] = useState(false);
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);

  const [form, setForm] = useState({
    name: "", email: "", password: "", confirm: "",
    company: "", phone: "", location: "",
  });

  useEffect(() => {
    const link = document.createElement("link");
    link.href = "https://fonts.googleapis.com/css2?family=Playfair+Display:wght@700;800&display=swap";
    link.rel = "stylesheet";
    document.head.appendChild(link);
    document.body.style.margin = "0";
    document.body.style.fontFamily = "'Inter', -apple-system, sans-serif";
  }, []);

  const update = (field, val) => setForm(prev => ({ ...prev, [field]: val }));

  const handleSubmit = () => {
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      setSuccess(true);
    }, 1500);
  };

  const inputStyle = {
    width: "100%", padding: "12px 16px", borderRadius: 10,
    border: "1.5px solid #e2e8f0", fontSize: 15, color: "#0f172a",
    outline: "none", background: "white", boxSizing: "border-box",
    transition: "border-color 0.2s",
  };

  const labelStyle = {
    fontSize: 13, fontWeight: 700, color: "#374151",
    display: "block", marginBottom: 6,
  };

  if (success) {
    return (
      <div style={{ minHeight: "100vh", background: "linear-gradient(135deg,#f8faff,#eef2ff,#fdf4ff)", display: "flex", alignItems: "center", justifyContent: "center", padding: 20 }}>
        <div style={{ background: "white", borderRadius: 24, padding: "48px 40px", maxWidth: 440, width: "100%", textAlign: "center", boxShadow: "0 20px 60px rgba(0,0,0,0.1)" }}>
          <div style={{ fontSize: 64, marginBottom: 16 }}>🎉</div>
          <h2 style={{ fontFamily: "'Playfair Display', serif", fontSize: 28, fontWeight: 800, color: "#0f172a", marginBottom: 10 }}>
            {mode === "login" ? "Welcome Back!" : "Account Created!"}
          </h2>
          <p style={{ color: "#64748b", fontSize: 15, lineHeight: 1.7, marginBottom: 28 }}>
            {mode === "login"
              ? "You have successfully logged in to your JobHive account."
              : "Your account has been created. You can now start exploring jobs!"}
          </p>
          <div style={{ display: "flex", gap: 12, justifyContent: "center", flexWrap: "wrap" }}>
            <a href="/" style={{ padding: "12px 24px", borderRadius: 10, background: "linear-gradient(135deg,#1d4ed8,#7c3aed)", color: "white", fontSize: 14, fontWeight: 700, textDecoration: "none" }}>Go to Home →</a>
            <a href="/jobs" style={{ padding: "12px 24px", borderRadius: 10, border: "1.5px solid #e0e7ff", color: "#4338ca", fontSize: 14, fontWeight: 700, textDecoration: "none" }}>Browse Jobs</a>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div style={{ minHeight: "100vh", background: "linear-gradient(135deg,#f8faff 0%,#eef2ff 50%,#fdf4ff 100%)", display: "flex", alignItems: "center", justifyContent: "center", padding: 20 }}>

      {/* Decorative blobs */}
      <div style={{ position: "fixed", top: "5%", right: "5%", width: 300, height: 300, borderRadius: "50%", background: "radial-gradient(circle,rgba(124,58,237,0.07) 0%,transparent 70%)", pointerEvents: "none" }} />
      <div style={{ position: "fixed", bottom: "5%", left: "5%", width: 250, height: 250, borderRadius: "50%", background: "radial-gradient(circle,rgba(29,78,216,0.07) 0%,transparent 70%)", pointerEvents: "none" }} />

      <div style={{ width: "100%", maxWidth: 480 }}>
        {/* Logo */}
        <div style={{ textAlign: "center", marginBottom: 28 }}>
          <a href="/" style={{ display: "inline-flex", alignItems: "center", gap: 10, textDecoration: "none" }}>
            <div style={{ width: 40, height: 40, background: "linear-gradient(135deg,#1d4ed8,#7c3aed)", borderRadius: 12, display: "flex", alignItems: "center", justifyContent: "center" }}>
              <span style={{ color: "#fff", fontWeight: 800, fontSize: 20 }}>J</span>
            </div>
            <span style={{ fontFamily: "'Playfair Display', serif", fontWeight: 800, fontSize: 24, color: "#0f172a" }}>JobHive</span>
          </a>
        </div>

        {/* Card */}
        <div style={{ background: "white", borderRadius: 24, padding: "36px 36px", boxShadow: "0 20px 60px rgba(0,0,0,0.08)", border: "1px solid #f1f5f9" }}>

          {/* Mode toggle */}
          <div style={{ display: "flex", background: "#f8faff", borderRadius: 12, padding: 4, marginBottom: 28 }}>
            {["login", "register"].map(m => (
              <button key={m} onClick={() => { setMode(m); setStep(1); setSuccess(false); }} style={{ flex: 1, padding: "10px", borderRadius: 10, border: "none", cursor: "pointer", fontSize: 14, fontWeight: 700, transition: "all 0.2s", background: mode === m ? "white" : "transparent", color: mode === m ? "#1d4ed8" : "#94a3b8", boxShadow: mode === m ? "0 2px 8px rgba(0,0,0,0.08)" : "none" }}>
                {m === "login" ? "🔐 Login" : "✨ Register"}
              </button>
            ))}
          </div>

          {/* Role selector (register only) */}
          {mode === "register" && (
            <div style={{ marginBottom: 24 }}>
              <label style={labelStyle}>I am a:</label>
              <div style={{ display: "flex", gap: 10 }}>
                {[
                  { id: "seeker", icon: "👤", label: "Job Seeker" },
                  { id: "employer", icon: "🏢", label: "Employer" },
                ].map(r => (
                  <button key={r.id} onClick={() => setRole(r.id)} style={{ flex: 1, padding: "14px", borderRadius: 12, border: `2px solid ${role === r.id ? "#1d4ed8" : "#e2e8f0"}`, background: role === r.id ? "#eff6ff" : "white", cursor: "pointer", transition: "all 0.2s", textAlign: "center" }}>
                    <div style={{ fontSize: 24, marginBottom: 4 }}>{r.icon}</div>
                    <div style={{ fontSize: 14, fontWeight: 700, color: role === r.id ? "#1d4ed8" : "#374151" }}>{r.label}</div>
                  </button>
                ))}
              </div>
            </div>
          )}

          {/* Register step indicator */}
          {mode === "register" && (
            <div style={{ display: "flex", alignItems: "center", gap: 8, marginBottom: 24 }}>
              {[1, 2].map(s => (
                <div key={s} style={{ display: "flex", alignItems: "center", gap: 8 }}>
                  <div style={{ width: 28, height: 28, borderRadius: "50%", display: "flex", alignItems: "center", justifyContent: "center", fontSize: 13, fontWeight: 700, background: step >= s ? "linear-gradient(135deg,#1d4ed8,#7c3aed)" : "#f1f5f9", color: step >= s ? "white" : "#94a3b8" }}>{s}</div>
                  {s < 2 && <div style={{ width: 40, height: 2, background: step > s ? "#1d4ed8" : "#e2e8f0", borderRadius: 2 }} />}
                </div>
              ))}
              <span style={{ fontSize: 13, color: "#94a3b8", marginLeft: 4 }}>
                {step === 1 ? "Basic Info" : "Additional Details"}
              </span>
            </div>
          )}

          {/* Title */}
          <h2 style={{ fontFamily: "'Playfair Display', serif", fontSize: 26, fontWeight: 800, color: "#0f172a", marginBottom: 6 }}>
            {mode === "login" ? "Welcome back" : step === 1 ? "Create account" : "Almost done!"}
          </h2>
          <p style={{ color: "#64748b", fontSize: 14, marginBottom: 24, lineHeight: 1.6 }}>
            {mode === "login"
              ? "Sign in to your JobHive account"
              : step === 1
              ? `Set up your ${role === "employer" ? "employer" : "job seeker"} account`
              : "Just a few more details"}
          </p>

          {/* LOGIN FORM */}
          {mode === "login" && (
            <div style={{ display: "flex", flexDirection: "column", gap: 16 }}>
              <div>
                <label style={labelStyle}>Email Address</label>
                <input value={form.email} onChange={e => update("email", e.target.value)} type="email" placeholder="you@example.com" style={inputStyle}
                  onFocus={e => e.target.style.borderColor = "#1d4ed8"}
                  onBlur={e => e.target.style.borderColor = "#e2e8f0"} />
              </div>
              <div>
                <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: 6 }}>
                  <label style={{ ...labelStyle, marginBottom: 0 }}>Password</label>
                  <a href="#" style={{ fontSize: 12, color: "#4338ca", fontWeight: 600, textDecoration: "none" }}>Forgot password?</a>
                </div>
                <div style={{ position: "relative" }}>
                  <input value={form.password} onChange={e => update("password", e.target.value)} type={showPass ? "text" : "password"} placeholder="Enter your password" style={{ ...inputStyle, paddingRight: 48 }}
                    onFocus={e => e.target.style.borderColor = "#1d4ed8"}
                    onBlur={e => e.target.style.borderColor = "#e2e8f0"} />
                  <button onClick={() => setShowPass(!showPass)} style={{ position: "absolute", right: 14, top: "50%", transform: "translateY(-50%)", border: "none", background: "none", cursor: "pointer", fontSize: 16, color: "#94a3b8" }}>
                    {showPass ? "🙈" : "👁"}
                  </button>
                </div>
              </div>

              <button onClick={handleSubmit} disabled={loading} style={{ padding: "14px", borderRadius: 12, border: "none", background: loading ? "#c7d2fe" : "linear-gradient(135deg,#1d4ed8,#7c3aed)", color: "white", fontSize: 15, fontWeight: 700, cursor: loading ? "not-allowed" : "pointer", transition: "all 0.2s", marginTop: 4 }}>
                {loading ? "Signing in..." : "Sign In →"}
              </button>

              <div style={{ display: "flex", alignItems: "center", gap: 12, margin: "4px 0" }}>
                <div style={{ flex: 1, height: 1, background: "#f1f5f9" }} />
                <span style={{ fontSize: 13, color: "#94a3b8" }}>or continue with</span>
                <div style={{ flex: 1, height: 1, background: "#f1f5f9" }} />
              </div>

              <div style={{ display: "flex", gap: 12 }}>
                {[{ icon: "G", label: "Google", color: "#4285F4" }, { icon: "in", label: "LinkedIn", color: "#0077B5" }].map(p => (
                  <button key={p.label} style={{ flex: 1, padding: "11px", borderRadius: 10, border: "1.5px solid #e2e8f0", background: "white", fontSize: 14, fontWeight: 600, color: "#374151", cursor: "pointer", display: "flex", alignItems: "center", justifyContent: "center", gap: 8, transition: "all 0.2s" }}
                    onMouseEnter={e => e.currentTarget.style.borderColor = p.color}
                    onMouseLeave={e => e.currentTarget.style.borderColor = "#e2e8f0"}>
                    <span style={{ fontWeight: 800, color: p.color }}>{p.icon}</span> {p.label}
                  </button>
                ))}
              </div>
            </div>
          )}

          {/* REGISTER FORM - Step 1 */}
          {mode === "register" && step === 1 && (
            <div style={{ display: "flex", flexDirection: "column", gap: 16 }}>
              <div>
                <label style={labelStyle}>{role === "employer" ? "Company Name" : "Full Name"}</label>
                <input value={role === "employer" ? form.company : form.name} onChange={e => update(role === "employer" ? "company" : "name", e.target.value)} placeholder={role === "employer" ? "e.g. TechCorp India" : "e.g. Rahul Sharma"} style={inputStyle}
                  onFocus={e => e.target.style.borderColor = "#1d4ed8"}
                  onBlur={e => e.target.style.borderColor = "#e2e8f0"} />
              </div>
              <div>
                <label style={labelStyle}>Email Address</label>
                <input value={form.email} onChange={e => update("email", e.target.value)} type="email" placeholder="you@example.com" style={inputStyle}
                  onFocus={e => e.target.style.borderColor = "#1d4ed8"}
                  onBlur={e => e.target.style.borderColor = "#e2e8f0"} />
              </div>
              <div>
                <label style={labelStyle}>Password</label>
                <div style={{ position: "relative" }}>
                  <input value={form.password} onChange={e => update("password", e.target.value)} type={showPass ? "text" : "password"} placeholder="Min 8 characters" style={{ ...inputStyle, paddingRight: 48 }}
                    onFocus={e => e.target.style.borderColor = "#1d4ed8"}
                    onBlur={e => e.target.style.borderColor = "#e2e8f0"} />
                  <button onClick={() => setShowPass(!showPass)} style={{ position: "absolute", right: 14, top: "50%", transform: "translateY(-50%)", border: "none", background: "none", cursor: "pointer", fontSize: 16 }}>
                    {showPass ? "🙈" : "👁"}
                  </button>
                </div>
                {/* Password strength */}
                {form.password && (
                  <div style={{ marginTop: 8 }}>
                    <div style={{ display: "flex", gap: 4, marginBottom: 4 }}>
                      {[1, 2, 3, 4].map(i => (
                        <div key={i} style={{ flex: 1, height: 4, borderRadius: 2, background: form.password.length >= i * 2 ? (form.password.length >= 8 ? "#059669" : "#d97706") : "#f1f5f9" }} />
                      ))}
                    </div>
                    <span style={{ fontSize: 12, color: form.password.length >= 8 ? "#059669" : "#d97706", fontWeight: 600 }}>
                      {form.password.length < 4 ? "Weak" : form.password.length < 8 ? "Medium" : "Strong"} password
                    </span>
                  </div>
                )}
              </div>
              <button onClick={() => setStep(2)} style={{ padding: "14px", borderRadius: 12, border: "none", background: "linear-gradient(135deg,#1d4ed8,#7c3aed)", color: "white", fontSize: 15, fontWeight: 700, cursor: "pointer", marginTop: 4 }}>
                Continue →
              </button>
            </div>
          )}

          {/* REGISTER FORM - Step 2 */}
          {mode === "register" && step === 2 && (
            <div style={{ display: "flex", flexDirection: "column", gap: 16 }}>
              {role === "seeker" && (
                <div>
                  <label style={labelStyle}>Full Name</label>
                  <input value={form.name} onChange={e => update("name", e.target.value)} placeholder="e.g. Rahul Sharma" style={inputStyle}
                    onFocus={e => e.target.style.borderColor = "#1d4ed8"}
                    onBlur={e => e.target.style.borderColor = "#e2e8f0"} />
                </div>
              )}
              <div>
                <label style={labelStyle}>Phone Number</label>
                <input value={form.phone} onChange={e => update("phone", e.target.value)} placeholder="+91 9876543210" style={inputStyle}
                  onFocus={e => e.target.style.borderColor = "#1d4ed8"}
                  onBlur={e => e.target.style.borderColor = "#e2e8f0"} />
              </div>
              <div>
                <label style={labelStyle}>Location</label>
                <input value={form.location} onChange={e => update("location", e.target.value)} placeholder="e.g. Bangalore, India" style={inputStyle}
                  onFocus={e => e.target.style.borderColor = "#1d4ed8"}
                  onBlur={e => e.target.style.borderColor = "#e2e8f0"} />
              </div>
              {role === "employer" && (
                <div>
                  <label style={labelStyle}>Company Website</label>
                  <input placeholder="https://yourcompany.com" style={inputStyle}
                    onFocus={e => e.target.style.borderColor = "#1d4ed8"}
                    onBlur={e => e.target.style.borderColor = "#e2e8f0"} />
                </div>
              )}

              <div style={{ display: "flex", gap: 12, marginTop: 4 }}>
                <button onClick={() => setStep(1)} style={{ flex: 1, padding: "14px", borderRadius: 12, border: "1.5px solid #e2e8f0", background: "white", fontSize: 15, fontWeight: 700, color: "#374151", cursor: "pointer" }}>
                  ← Back
                </button>
                <button onClick={handleSubmit} disabled={loading} style={{ flex: 2, padding: "14px", borderRadius: 12, border: "none", background: loading ? "#c7d2fe" : "linear-gradient(135deg,#1d4ed8,#7c3aed)", color: "white", fontSize: 15, fontWeight: 700, cursor: loading ? "not-allowed" : "pointer" }}>
                  {loading ? "Creating account..." : "Create Account 🎉"}
                </button>
              </div>

              <p style={{ fontSize: 12, color: "#94a3b8", textAlign: "center", lineHeight: 1.6 }}>
                By registering you agree to our{" "}
                <a href="#" style={{ color: "#4338ca", fontWeight: 600, textDecoration: "none" }}>Terms of Service</a>
                {" "}and{" "}
                <a href="#" style={{ color: "#4338ca", fontWeight: 600, textDecoration: "none" }}>Privacy Policy</a>
              </p>
            </div>
          )}

          {/* Bottom switch */}
          <p style={{ textAlign: "center", marginTop: 24, fontSize: 14, color: "#64748b" }}>
            {mode === "login" ? "Don't have an account? " : "Already have an account? "}
            <button onClick={() => { setMode(mode === "login" ? "register" : "login"); setStep(1); }} style={{ border: "none", background: "none", color: "#1d4ed8", fontWeight: 700, cursor: "pointer", fontSize: 14 }}>
              {mode === "login" ? "Sign up free →" : "Sign in →"}
            </button>
          </p>
        </div>
      </div>
    </div>
  );
}