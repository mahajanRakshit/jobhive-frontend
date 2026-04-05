import { useState, useEffect } from "react";

const STEPS = ["Personal Info", "Resume & Skills", "Questions", "Review & Submit"];

export default function ApplyJob() {
  const [step, setStep] = useState(0);
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);
  const [form, setForm] = useState({
    name: "", email: "", phone: "", location: "",
    linkedin: "", portfolio: "",
    experience: "", noticePeriod: "", expectedSalary: "",
    skills: [], coverLetter: "",
    q1: "", q2: "", q3: "",
    resume: null,
  });

  useEffect(() => {
    const link = document.createElement("link");
    link.href = "https://fonts.googleapis.com/css2?family=Playfair+Display:wght@700;800&display=swap";
    link.rel = "stylesheet";
    document.head.appendChild(link);
    document.body.style.margin = "0";
    document.body.style.fontFamily = "'Inter', -apple-system, sans-serif";
    document.body.style.background = "#f8faff";
  }, []);

  const update = (field, val) => setForm(prev => ({ ...prev, [field]: val }));

  const SKILL_OPTIONS = ["React", "Node.js", "Python", "Java", "MongoDB", "AWS", "Docker", "Figma", "TypeScript", "PostgreSQL"];

  const toggleSkill = (skill) => {
    setForm(prev => ({
      ...prev,
      skills: prev.skills.includes(skill) ? prev.skills.filter(s => s !== skill) : [...prev.skills, skill]
    }));
  };

  const handleSubmit = () => {
    setLoading(true);
    setTimeout(() => { setLoading(false); setSubmitted(true); }, 2000);
  };

  const inputStyle = {
    width: "100%", padding: "12px 16px", borderRadius: 10,
    border: "1.5px solid #e2e8f0", fontSize: 15, color: "#0f172a",
    outline: "none", background: "white", boxSizing: "border-box", transition: "border-color 0.2s",
  };
  const labelStyle = { fontSize: 13, fontWeight: 700, color: "#374151", display: "block", marginBottom: 6 };

  if (submitted) {
    return (
      <div style={{ minHeight: "100vh", background: "linear-gradient(135deg,#f8faff,#eef2ff,#fdf4ff)", display: "flex", alignItems: "center", justifyContent: "center", padding: 20 }}>
        <div style={{ background: "white", borderRadius: 24, padding: "52px 44px", maxWidth: 480, width: "100%", textAlign: "center", boxShadow: "0 20px 60px rgba(0,0,0,0.1)" }}>
          <div style={{ fontSize: 72, marginBottom: 16 }}>🎉</div>
          <h2 style={{ fontFamily: "'Playfair Display', serif", fontSize: 30, fontWeight: 800, color: "#0f172a", marginBottom: 10 }}>Application Submitted!</h2>
          <p style={{ color: "#64748b", fontSize: 15, lineHeight: 1.8, marginBottom: 10 }}>Your application for <strong>Senior React Developer</strong> at <strong>TechCorp India</strong> has been successfully submitted.</p>
          <div style={{ background: "#f0fdf4", borderRadius: 12, padding: "16px", border: "1px solid #bbf7d0", marginBottom: 28 }}>
            <div style={{ fontSize: 13, color: "#15803d", fontWeight: 600 }}>✓ Application ID: #APP-2025-04821</div>
            <div style={{ fontSize: 13, color: "#64748b", marginTop: 4 }}>You will hear back within 3–5 business days</div>
          </div>
          <div style={{ display: "flex", gap: 12, justifyContent: "center", flexWrap: "wrap" }}>
            <a href="/jobs" style={{ padding: "12px 24px", borderRadius: 10, background: "linear-gradient(135deg,#1d4ed8,#7c3aed)", color: "white", fontSize: 14, fontWeight: 700, textDecoration: "none" }}>Browse More Jobs</a>
            <a href="/" style={{ padding: "12px 24px", borderRadius: 10, border: "1.5px solid #e0e7ff", color: "#4338ca", fontSize: 14, fontWeight: 700, textDecoration: "none" }}>Go Home</a>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div style={{ minHeight: "100vh", background: "#f8faff" }}>
      {/* Navbar */}
      <nav style={{ background: "white", borderBottom: "1px solid #e2e8f0", padding: "0 5%", position: "sticky", top: 0, zIndex: 100 }}>
        <div style={{ maxWidth: 900, margin: "0 auto", display: "flex", alignItems: "center", height: 64, justifyContent: "space-between" }}>
          <a href="/" style={{ display: "flex", alignItems: "center", gap: 10, textDecoration: "none" }}>
            <div style={{ width: 34, height: 34, background: "linear-gradient(135deg,#1d4ed8,#7c3aed)", borderRadius: 9, display: "flex", alignItems: "center", justifyContent: "center" }}>
              <span style={{ color: "#fff", fontWeight: 800, fontSize: 17 }}>J</span>
            </div>
            <span style={{ fontFamily: "'Playfair Display', serif", fontWeight: 700, fontSize: 20, color: "#0f172a" }}>JobHive</span>
          </a>
          <a href="/jobs" style={{ fontSize: 14, color: "#64748b", textDecoration: "none", fontWeight: 500 }}>← Back to Jobs</a>
        </div>
      </nav>

      <div style={{ maxWidth: 760, margin: "0 auto", padding: "32px 5% 60px" }}>
        {/* Job info banner */}
        <div style={{ background: "white", borderRadius: 16, border: "1.5px solid #f1f5f9", padding: "22px 28px", marginBottom: 28, display: "flex", alignItems: "center", gap: 18, flexWrap: "wrap" }}>
          <div style={{ width: 56, height: 56, borderRadius: 13, background: "#eff6ff", display: "flex", alignItems: "center", justifyContent: "center", fontWeight: 800, fontSize: 18, color: "#2563eb", flexShrink: 0 }}>TC</div>
          <div style={{ flex: 1 }}>
            <div style={{ fontSize: 18, fontWeight: 800, color: "#0f172a", marginBottom: 3 }}>Senior React Developer</div>
            <div style={{ fontSize: 14, color: "#64748b" }}>TechCorp India · Bangalore · Full-time · ₹18–25 LPA</div>
          </div>
          <span style={{ padding: "6px 14px", background: "#dcfce7", color: "#15803d", borderRadius: 20, fontSize: 13, fontWeight: 700 }}>Active</span>
        </div>

        {/* Step progress */}
        <div style={{ background: "white", borderRadius: 16, border: "1.5px solid #f1f5f9", padding: "22px 28px", marginBottom: 24 }}>
          <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between" }}>
            {STEPS.map((s, i) => (
              <div key={s} style={{ display: "flex", alignItems: "center", flex: i < STEPS.length - 1 ? 1 : "none" }}>
                <div style={{ display: "flex", flexDirection: "column", alignItems: "center", gap: 6, cursor: i <= step ? "pointer" : "default" }} onClick={() => i <= step && setStep(i)}>
                  <div style={{ width: 36, height: 36, borderRadius: "50%", display: "flex", alignItems: "center", justifyContent: "center", fontSize: 14, fontWeight: 700, background: i < step ? "#059669" : i === step ? "linear-gradient(135deg,#1d4ed8,#7c3aed)" : "#f1f5f9", color: i <= step ? "white" : "#94a3b8", transition: "all 0.3s" }}>
                    {i < step ? "✓" : i + 1}
                  </div>
                  <span style={{ fontSize: 11, fontWeight: 600, color: i === step ? "#1d4ed8" : i < step ? "#059669" : "#94a3b8", whiteSpace: "nowrap" }}>{s}</span>
                </div>
                {i < STEPS.length - 1 && <div style={{ flex: 1, height: 2, background: i < step ? "#059669" : "#f1f5f9", margin: "0 8px", marginBottom: 20, transition: "background 0.3s" }} />}
              </div>
            ))}
          </div>
        </div>

        {/* Form card */}
        <div style={{ background: "white", borderRadius: 20, border: "1.5px solid #f1f5f9", padding: "32px", boxShadow: "0 4px 24px rgba(0,0,0,0.04)" }}>
          <h2 style={{ fontFamily: "'Playfair Display', serif", fontSize: 22, fontWeight: 800, color: "#0f172a", marginBottom: 6 }}>{STEPS[step]}</h2>
          <p style={{ fontSize: 14, color: "#94a3b8", marginBottom: 28 }}>Step {step + 1} of {STEPS.length}</p>

          {/* Step 0: Personal Info */}
          {step === 0 && (
            <div style={{ display: "flex", flexDirection: "column", gap: 18 }}>
              <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 16 }}>
                <div>
                  <label style={labelStyle}>Full Name *</label>
                  <input value={form.name} onChange={e => update("name", e.target.value)} placeholder="Rahul Sharma" style={inputStyle} onFocus={e => e.target.style.borderColor = "#1d4ed8"} onBlur={e => e.target.style.borderColor = "#e2e8f0"} />
                </div>
                <div>
                  <label style={labelStyle}>Email Address *</label>
                  <input value={form.email} onChange={e => update("email", e.target.value)} type="email" placeholder="rahul@gmail.com" style={inputStyle} onFocus={e => e.target.style.borderColor = "#1d4ed8"} onBlur={e => e.target.style.borderColor = "#e2e8f0"} />
                </div>
                <div>
                  <label style={labelStyle}>Phone Number *</label>
                  <input value={form.phone} onChange={e => update("phone", e.target.value)} placeholder="+91 9876543210" style={inputStyle} onFocus={e => e.target.style.borderColor = "#1d4ed8"} onBlur={e => e.target.style.borderColor = "#e2e8f0"} />
                </div>
                <div>
                  <label style={labelStyle}>Current Location *</label>
                  <input value={form.location} onChange={e => update("location", e.target.value)} placeholder="Bangalore, India" style={inputStyle} onFocus={e => e.target.style.borderColor = "#1d4ed8"} onBlur={e => e.target.style.borderColor = "#e2e8f0"} />
                </div>
                <div>
                  <label style={labelStyle}>LinkedIn Profile</label>
                  <input value={form.linkedin} onChange={e => update("linkedin", e.target.value)} placeholder="linkedin.com/in/rahul" style={inputStyle} onFocus={e => e.target.style.borderColor = "#1d4ed8"} onBlur={e => e.target.style.borderColor = "#e2e8f0"} />
                </div>
                <div>
                  <label style={labelStyle}>Portfolio / GitHub</label>
                  <input value={form.portfolio} onChange={e => update("portfolio", e.target.value)} placeholder="github.com/rahul" style={inputStyle} onFocus={e => e.target.style.borderColor = "#1d4ed8"} onBlur={e => e.target.style.borderColor = "#e2e8f0"} />
                </div>
              </div>
            </div>
          )}

          {/* Step 1: Resume & Skills */}
          {step === 1 && (
            <div style={{ display: "flex", flexDirection: "column", gap: 20 }}>
              {/* Resume upload */}
              <div>
                <label style={labelStyle}>Upload Resume *</label>
                <div style={{ border: "2px dashed #c7d2fe", borderRadius: 12, padding: "32px", textAlign: "center", background: "#f8f7ff", cursor: "pointer", transition: "all 0.2s" }}
                  onMouseEnter={e => { e.currentTarget.style.borderColor = "#1d4ed8"; e.currentTarget.style.background = "#eff6ff"; }}
                  onMouseLeave={e => { e.currentTarget.style.borderColor = "#c7d2fe"; e.currentTarget.style.background = "#f8f7ff"; }}>
                  {form.resume ? (
                    <div>
                      <div style={{ fontSize: 32, marginBottom: 8 }}>📄</div>
                      <div style={{ fontSize: 15, fontWeight: 700, color: "#1d4ed8" }}>{form.resume}</div>
                      <button onClick={() => update("resume", null)} style={{ marginTop: 8, fontSize: 12, color: "#dc2626", border: "none", background: "none", cursor: "pointer", fontWeight: 600 }}>Remove</button>
                    </div>
                  ) : (
                    <div onClick={() => update("resume", "Resume_Rahul_Sharma.pdf")}>
                      <div style={{ fontSize: 40, marginBottom: 10 }}>📤</div>
                      <div style={{ fontSize: 15, fontWeight: 700, color: "#0f172a", marginBottom: 4 }}>Drop your resume here</div>
                      <div style={{ fontSize: 13, color: "#94a3b8" }}>PDF, DOC, DOCX up to 5MB · Click to browse</div>
                    </div>
                  )}
                </div>
              </div>

              {/* Skills */}
              <div>
                <label style={labelStyle}>Your Skills (select all that apply)</label>
                <div style={{ display: "flex", gap: 10, flexWrap: "wrap" }}>
                  {SKILL_OPTIONS.map(skill => (
                    <button key={skill} onClick={() => toggleSkill(skill)} style={{ padding: "8px 16px", borderRadius: 20, border: `1.5px solid ${form.skills.includes(skill) ? "#1d4ed8" : "#e2e8f0"}`, background: form.skills.includes(skill) ? "#eff6ff" : "white", fontSize: 13, fontWeight: 600, color: form.skills.includes(skill) ? "#1d4ed8" : "#64748b", cursor: "pointer", transition: "all 0.2s" }}>
                      {form.skills.includes(skill) ? "✓ " : ""}{skill}
                    </button>
                  ))}
                </div>
              </div>

              <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr 1fr", gap: 16 }}>
                <div>
                  <label style={labelStyle}>Total Experience</label>
                  <select value={form.experience} onChange={e => update("experience", e.target.value)} style={{ ...inputStyle, appearance: "none" }}>
                    <option value="">Select</option>
                    {["Fresher", "1 year", "2 years", "3–5 years", "5+ years"].map(o => <option key={o}>{o}</option>)}
                  </select>
                </div>
                <div>
                  <label style={labelStyle}>Notice Period</label>
                  <select value={form.noticePeriod} onChange={e => update("noticePeriod", e.target.value)} style={{ ...inputStyle, appearance: "none" }}>
                    <option value="">Select</option>
                    {["Immediate", "15 days", "30 days", "60 days", "90 days"].map(o => <option key={o}>{o}</option>)}
                  </select>
                </div>
                <div>
                  <label style={labelStyle}>Expected Salary</label>
                  <input value={form.expectedSalary} onChange={e => update("expectedSalary", e.target.value)} placeholder="e.g. ₹20 LPA" style={inputStyle} onFocus={e => e.target.style.borderColor = "#1d4ed8"} onBlur={e => e.target.style.borderColor = "#e2e8f0"} />
                </div>
              </div>

              <div>
                <label style={labelStyle}>Cover Letter</label>
                <textarea value={form.coverLetter} onChange={e => update("coverLetter", e.target.value)} placeholder="Tell the employer why you are the best fit for this role..." rows={5} style={{ ...inputStyle, resize: "vertical", lineHeight: 1.7 }} onFocus={e => e.target.style.borderColor = "#1d4ed8"} onBlur={e => e.target.style.borderColor = "#e2e8f0"} />
              </div>
            </div>
          )}

          {/* Step 2: Questions */}
          {step === 2 && (
            <div style={{ display: "flex", flexDirection: "column", gap: 22 }}>
              {[
                { field: "q1", q: "Why do you want to work at TechCorp India?", placeholder: "Share your motivation and what excites you about this company..." },
                { field: "q2", q: "Describe a challenging project you worked on and how you handled it.", placeholder: "Walk us through the problem, your approach, and the outcome..." },
                { field: "q3", q: "Where do you see yourself in 3 years?", placeholder: "Describe your career goals and how this role fits in..." },
              ].map(({ field, q, placeholder }) => (
                <div key={field}>
                  <label style={labelStyle}>{q}</label>
                  <textarea value={form[field]} onChange={e => update(field, e.target.value)} placeholder={placeholder} rows={4} style={{ ...inputStyle, resize: "vertical", lineHeight: 1.7 }} onFocus={e => e.target.style.borderColor = "#1d4ed8"} onBlur={e => e.target.style.borderColor = "#e2e8f0"} />
                </div>
              ))}
            </div>
          )}

          {/* Step 3: Review */}
          {step === 3 && (
            <div style={{ display: "flex", flexDirection: "column", gap: 16 }}>
              <div style={{ background: "#f8faff", borderRadius: 12, border: "1px solid #e0e7ff", padding: "20px" }}>
                <div style={{ fontSize: 14, fontWeight: 700, color: "#0f172a", marginBottom: 12 }}>📋 Application Summary</div>
                {[
                  { label: "Name", value: form.name || "Not filled" },
                  { label: "Email", value: form.email || "Not filled" },
                  { label: "Phone", value: form.phone || "Not filled" },
                  { label: "Location", value: form.location || "Not filled" },
                  { label: "Resume", value: form.resume || "Not uploaded" },
                  { label: "Skills", value: form.skills.length > 0 ? form.skills.join(", ") : "None selected" },
                  { label: "Experience", value: form.experience || "Not specified" },
                  { label: "Notice Period", value: form.noticePeriod || "Not specified" },
                  { label: "Expected Salary", value: form.expectedSalary || "Not specified" },
                ].map(item => (
                  <div key={item.label} style={{ display: "flex", gap: 12, padding: "8px 0", borderBottom: "1px solid #e0e7ff" }}>
                    <span style={{ fontSize: 13, color: "#94a3b8", width: 130, flexShrink: 0 }}>{item.label}</span>
                    <span style={{ fontSize: 13, fontWeight: 600, color: item.value === "Not filled" || item.value === "Not uploaded" ? "#dc2626" : "#0f172a" }}>{item.value}</span>
                  </div>
                ))}
              </div>
              <div style={{ display: "flex", alignItems: "flex-start", gap: 10, padding: "14px", background: "#fffbeb", borderRadius: 10, border: "1px solid #fde68a" }}>
                <span style={{ fontSize: 18 }}>⚠️</span>
                <div style={{ fontSize: 13, color: "#92400e", lineHeight: 1.6 }}>Please review your application carefully. Once submitted, you cannot edit it. Make sure all information is accurate.</div>
              </div>
            </div>
          )}

          {/* Navigation buttons */}
          <div style={{ display: "flex", justifyContent: "space-between", marginTop: 32, gap: 12 }}>
            <button onClick={() => setStep(s => s - 1)} disabled={step === 0} style={{ padding: "13px 28px", borderRadius: 12, border: "1.5px solid #e2e8f0", background: step === 0 ? "#f8faff" : "white", fontSize: 15, fontWeight: 700, color: step === 0 ? "#cbd5e1" : "#374151", cursor: step === 0 ? "not-allowed" : "pointer", transition: "all 0.2s" }}>
              ← Back
            </button>
            {step < STEPS.length - 1 ? (
              <button onClick={() => setStep(s => s + 1)} style={{ padding: "13px 36px", borderRadius: 12, border: "none", background: "linear-gradient(135deg,#1d4ed8,#7c3aed)", color: "white", fontSize: 15, fontWeight: 700, cursor: "pointer", boxShadow: "0 4px 14px rgba(29,78,216,0.25)" }}>
                Continue →
              </button>
            ) : (
              <button onClick={handleSubmit} disabled={loading} style={{ padding: "13px 36px", borderRadius: 12, border: "none", background: loading ? "#c7d2fe" : "linear-gradient(135deg,#059669,#0891b2)", color: "white", fontSize: 15, fontWeight: 700, cursor: loading ? "not-allowed" : "pointer", boxShadow: "0 4px 14px rgba(5,150,105,0.25)" }}>
                {loading ? "Submitting..." : "🚀 Submit Application"}
              </button>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}