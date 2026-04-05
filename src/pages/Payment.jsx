import { useState, useEffect } from "react";

const PLANS = [
  {
    id: "basic", name: "Basic", icon: "🌱",
    monthly: 2999, yearly: 1999,
    color: "#059669", bg: "#ecfdf5", border: "#bbf7d0",
    features: [
      "3 job postings per month",
      "Basic applicant management",
      "Email support",
      "7-day job listing",
      "Standard visibility",
    ],
    notIncluded: ["Featured listing", "Resume database access", "Priority support", "Analytics dashboard"],
  },
  {
    id: "featured", name: "Featured", icon: "⭐",
    monthly: 5999, yearly: 3999,
    color: "#1d4ed8", bg: "#eff6ff", border: "#bfdbfe",
    popular: true,
    features: [
      "10 job postings per month",
      "Featured job placement",
      "Advanced applicant tracking",
      "30-day job listing",
      "Resume database access (50/mo)",
      "Priority email support",
      "Basic analytics",
    ],
    notIncluded: ["Unlimited postings", "Dedicated account manager"],
  },
  {
    id: "premium", name: "Premium", icon: "👑",
    monthly: 9999, yearly: 6999,
    color: "#7c3aed", bg: "#f5f3ff", border: "#ddd6fe",
    features: [
      "Unlimited job postings",
      "Top featured placement",
      "Full applicant management",
      "60-day job listing",
      "Unlimited resume database access",
      "Dedicated account manager",
      "Full analytics & reports",
      "Branded company profile",
      "Priority phone support",
    ],
    notIncluded: [],
  },
];

const FAQS = [
  { q: "Can I switch plans anytime?", a: "Yes, you can upgrade or downgrade your plan at any time. Changes take effect immediately and billing is prorated." },
  { q: "Is there a free trial?", a: "We offer a 7-day free trial on all paid plans. No credit card required to start." },
  { q: "What payment methods are accepted?", a: "We accept all major credit/debit cards, UPI, net banking, and wallets via Razorpay." },
  { q: "Can I get a refund?", a: "We offer a 30-day money-back guarantee on all plans, no questions asked." },
];

export default function Payment() {
  const [billing, setBilling] = useState("monthly");
  const [selected, setSelected] = useState("featured");
  const [payStep, setPayStep] = useState("plans"); // plans | checkout | success
  const [openFaq, setOpenFaq] = useState(null);
  const [payMethod, setPayMethod] = useState("card");
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const link = document.createElement("link");
    link.href = "https://fonts.googleapis.com/css2?family=Playfair+Display:wght@700;800&display=swap";
    link.rel = "stylesheet";
    document.head.appendChild(link);
    document.body.style.margin = "0";
    document.body.style.fontFamily = "'Inter', -apple-system, sans-serif";
    document.body.style.background = "#f8faff";
  }, []);

  const selectedPlan = PLANS.find(p => p.id === selected);
  const price = billing === "monthly" ? selectedPlan.monthly : selectedPlan.yearly;

  const handlePay = () => {
    setLoading(true);
    setTimeout(() => { setLoading(false); setPayStep("success"); }, 2000);
  };

  if (payStep === "success") {
    return (
      <div style={{ minHeight: "100vh", background: "linear-gradient(135deg,#f0fdf4,#ecfdf5)", display: "flex", alignItems: "center", justifyContent: "center", padding: 20 }}>
        <div style={{ background: "white", borderRadius: 24, padding: "52px 44px", maxWidth: 480, width: "100%", textAlign: "center", boxShadow: "0 20px 60px rgba(0,0,0,0.08)" }}>
          <div style={{ fontSize: 72, marginBottom: 16 }}>✅</div>
          <h2 style={{ fontFamily: "'Playfair Display', serif", fontSize: 30, fontWeight: 800, color: "#0f172a", marginBottom: 10 }}>Payment Successful!</h2>
          <p style={{ color: "#64748b", fontSize: 15, lineHeight: 1.8, marginBottom: 16 }}>
            You are now on the <strong>{selectedPlan.name}</strong> plan. Your account has been upgraded successfully.
          </p>
          <div style={{ background: "#f0fdf4", borderRadius: 12, padding: "16px", border: "1px solid #bbf7d0", marginBottom: 28 }}>
            <div style={{ fontSize: 13, color: "#15803d", fontWeight: 700 }}>✓ Invoice sent to your email</div>
            <div style={{ fontSize: 13, color: "#64748b", marginTop: 4 }}>Transaction ID: TXN-2025-089421</div>
          </div>
          <div style={{ display: "flex", gap: 12, justifyContent: "center" }}>
            <a href="/employer" style={{ padding: "12px 24px", borderRadius: 10, background: "linear-gradient(135deg,#059669,#0891b2)", color: "white", fontSize: 14, fontWeight: 700, textDecoration: "none" }}>Go to Dashboard →</a>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div style={{ minHeight: "100vh", background: "#f8faff" }}>
      {/* Navbar */}
      <nav style={{ background: "white", borderBottom: "1px solid #e2e8f0", padding: "0 5%", position: "sticky", top: 0, zIndex: 100 }}>
        <div style={{ maxWidth: 1100, margin: "0 auto", display: "flex", alignItems: "center", height: 64, justifyContent: "space-between" }}>
          <a href="/" style={{ display: "flex", alignItems: "center", gap: 10, textDecoration: "none" }}>
            <div style={{ width: 34, height: 34, background: "linear-gradient(135deg,#1d4ed8,#7c3aed)", borderRadius: 9, display: "flex", alignItems: "center", justifyContent: "center" }}>
              <span style={{ color: "#fff", fontWeight: 800, fontSize: 17 }}>J</span>
            </div>
            <span style={{ fontFamily: "'Playfair Display', serif", fontWeight: 700, fontSize: 20, color: "#0f172a" }}>JobHive</span>
          </a>
          {payStep === "checkout" && (
            <button onClick={() => setPayStep("plans")} style={{ fontSize: 14, color: "#64748b", border: "none", background: "none", cursor: "pointer", fontWeight: 500 }}>← Back to Plans</button>
          )}
        </div>
      </nav>

      {payStep === "plans" && (
        <div style={{ maxWidth: 1100, margin: "0 auto", padding: "48px 5%" }}>
          {/* Header */}
          <div style={{ textAlign: "center", marginBottom: 48 }}>
            <p style={{ fontSize: 13, fontWeight: 700, color: "#7c3aed", letterSpacing: "0.1em", textTransform: "uppercase", marginBottom: 10 }}>Employer Plans</p>
            <h1 style={{ fontFamily: "'Playfair Display', serif", fontSize: "clamp(28px,5vw,52px)", fontWeight: 800, color: "#0f172a", letterSpacing: "-1.5px", marginBottom: 14 }}>Simple, Transparent Pricing</h1>
            <p style={{ fontSize: 16, color: "#64748b", maxWidth: 480, margin: "0 auto 28px" }}>Choose the plan that fits your hiring needs. Upgrade or cancel anytime.</p>

            {/* Billing toggle */}
            <div style={{ display: "inline-flex", background: "#f1f5f9", borderRadius: 12, padding: 4, gap: 4 }}>
              {["monthly", "yearly"].map(b => (
                <button key={b} onClick={() => setBilling(b)} style={{ padding: "9px 24px", borderRadius: 10, border: "none", cursor: "pointer", fontSize: 14, fontWeight: 700, background: billing === b ? "white" : "transparent", color: billing === b ? "#1d4ed8" : "#64748b", boxShadow: billing === b ? "0 2px 8px rgba(0,0,0,0.08)" : "none", transition: "all 0.2s", position: "relative" }}>
                  {b === "yearly" ? "Yearly" : "Monthly"}
                  {b === "yearly" && <span style={{ marginLeft: 6, fontSize: 11, background: "#dcfce7", color: "#15803d", padding: "2px 6px", borderRadius: 4, fontWeight: 800 }}>-33%</span>}
                </button>
              ))}
            </div>
          </div>

          {/* Plan cards */}
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))", gap: 20, marginBottom: 64 }}>
            {PLANS.map(plan => (
              <div key={plan.id} onClick={() => setSelected(plan.id)}
                style={{ background: "white", borderRadius: 20, border: `2px solid ${selected === plan.id ? plan.color : "#f1f5f9"}`, padding: "32px 28px", cursor: "pointer", transition: "all 0.25s", position: "relative", boxShadow: selected === plan.id ? `0 8px 32px ${plan.color}20` : "none" }}
                onMouseEnter={e => { if (selected !== plan.id) e.currentTarget.style.borderColor = "#e0e7ff"; }}
                onMouseLeave={e => { if (selected !== plan.id) e.currentTarget.style.borderColor = "#f1f5f9"; }}>

                {plan.popular && (
                  <div style={{ position: "absolute", top: -13, left: "50%", transform: "translateX(-50%)", background: "linear-gradient(135deg,#1d4ed8,#7c3aed)", color: "white", fontSize: 12, fontWeight: 700, padding: "4px 20px", borderRadius: 20, whiteSpace: "nowrap" }}>
                    Most Popular ⭐
                  </div>
                )}

                <div style={{ display: "flex", alignItems: "center", gap: 12, marginBottom: 20 }}>
                  <div style={{ width: 48, height: 48, borderRadius: 14, background: plan.bg, display: "flex", alignItems: "center", justifyContent: "center", fontSize: 24 }}>{plan.icon}</div>
                  <div>
                    <div style={{ fontSize: 20, fontWeight: 800, color: "#0f172a" }}>{plan.name}</div>
                    <div style={{ fontSize: 13, color: "#94a3b8" }}>per month billed {billing}</div>
                  </div>
                </div>

                <div style={{ marginBottom: 24 }}>
                  <span style={{ fontFamily: "'Playfair Display', serif", fontSize: 44, fontWeight: 800, color: plan.color }}>₹{(billing === "monthly" ? plan.monthly : plan.yearly).toLocaleString()}</span>
                  <span style={{ fontSize: 14, color: "#94a3b8" }}>/mo</span>
                  {billing === "yearly" && (
                    <div style={{ fontSize: 13, color: "#15803d", fontWeight: 600, marginTop: 4 }}>Save ₹{((plan.monthly - plan.yearly) * 12).toLocaleString()}/year</div>
                  )}
                </div>

                <div style={{ display: "flex", flexDirection: "column", gap: 10, marginBottom: 24 }}>
                  {plan.features.map(f => (
                    <div key={f} style={{ display: "flex", gap: 10, alignItems: "flex-start" }}>
                      <span style={{ color: "#059669", fontWeight: 700, flexShrink: 0 }}>✓</span>
                      <span style={{ fontSize: 14, color: "#374151" }}>{f}</span>
                    </div>
                  ))}
                  {plan.notIncluded.map(f => (
                    <div key={f} style={{ display: "flex", gap: 10, alignItems: "flex-start", opacity: 0.4 }}>
                      <span style={{ color: "#94a3b8", fontWeight: 700, flexShrink: 0 }}>✕</span>
                      <span style={{ fontSize: 14, color: "#94a3b8", textDecoration: "line-through" }}>{f}</span>
                    </div>
                  ))}
                </div>

                <button onClick={() => { setSelected(plan.id); setPayStep("checkout"); }}
                  style={{ width: "100%", padding: "14px", borderRadius: 12, border: "none", background: selected === plan.id ? `linear-gradient(135deg,${plan.color},${plan.color}cc)` : "#f8faff", color: selected === plan.id ? "white" : plan.color, fontSize: 15, fontWeight: 700, cursor: "pointer", transition: "all 0.2s", border: selected === plan.id ? "none" : `1.5px solid ${plan.border}` }}>
                  {selected === plan.id ? "Get Started →" : `Choose ${plan.name}`}
                </button>
              </div>
            ))}
          </div>

          {/* FAQ */}
          <div style={{ maxWidth: 680, margin: "0 auto" }}>
            <h2 style={{ fontFamily: "'Playfair Display', serif", fontSize: 28, fontWeight: 800, color: "#0f172a", textAlign: "center", marginBottom: 28 }}>Frequently Asked Questions</h2>
            {FAQS.map((faq, i) => (
              <div key={i} style={{ background: "white", borderRadius: 12, border: "1.5px solid #f1f5f9", marginBottom: 12, overflow: "hidden" }}>
                <button onClick={() => setOpenFaq(openFaq === i ? null : i)}
                  style={{ width: "100%", padding: "18px 22px", display: "flex", justifyContent: "space-between", alignItems: "center", border: "none", background: "none", cursor: "pointer", textAlign: "left" }}>
                  <span style={{ fontSize: 15, fontWeight: 700, color: "#0f172a" }}>{faq.q}</span>
                  <span style={{ fontSize: 20, color: "#94a3b8", transition: "transform 0.2s", transform: openFaq === i ? "rotate(45deg)" : "rotate(0deg)" }}>+</span>
                </button>
                {openFaq === i && (
                  <div style={{ padding: "0 22px 18px", fontSize: 14, color: "#64748b", lineHeight: 1.8 }}>{faq.a}</div>
                )}
              </div>
            ))}
          </div>
        </div>
      )}

      {/* CHECKOUT */}
      {payStep === "checkout" && (
        <div style={{ maxWidth: 900, margin: "0 auto", padding: "40px 5%", display: "grid", gridTemplateColumns: "1fr 380px", gap: 28, alignItems: "flex-start" }}>
          {/* Payment form */}
          <div style={{ background: "white", borderRadius: 20, border: "1.5px solid #f1f5f9", padding: "32px" }}>
            <h2 style={{ fontFamily: "'Playfair Display', serif", fontSize: 24, fontWeight: 800, color: "#0f172a", marginBottom: 24 }}>Complete Payment</h2>

            {/* Payment method */}
            <div style={{ marginBottom: 24 }}>
              <label style={{ fontSize: 13, fontWeight: 700, color: "#374151", display: "block", marginBottom: 10 }}>Payment Method</label>
              <div style={{ display: "flex", gap: 10 }}>
                {[
                  { id: "card", label: "Card", icon: "💳" },
                  { id: "upi", label: "UPI", icon: "📱" },
                  { id: "netbanking", label: "Net Banking", icon: "🏦" },
                ].map(m => (
                  <button key={m.id} onClick={() => setPayMethod(m.id)} style={{ flex: 1, padding: "12px 8px", borderRadius: 10, border: `1.5px solid ${payMethod === m.id ? "#1d4ed8" : "#e2e8f0"}`, background: payMethod === m.id ? "#eff6ff" : "white", cursor: "pointer", fontSize: 13, fontWeight: 700, color: payMethod === m.id ? "#1d4ed8" : "#64748b", transition: "all 0.2s" }}>
                    <div style={{ fontSize: 20, marginBottom: 4 }}>{m.icon}</div>
                    {m.label}
                  </button>
                ))}
              </div>
            </div>

            {payMethod === "card" && (
              <div style={{ display: "flex", flexDirection: "column", gap: 16 }}>
                <div>
                  <label style={{ fontSize: 13, fontWeight: 700, color: "#374151", display: "block", marginBottom: 6 }}>Cardholder Name</label>
                  <input placeholder="Name on card" style={{ width: "100%", padding: "12px 16px", borderRadius: 10, border: "1.5px solid #e2e8f0", fontSize: 15, outline: "none", boxSizing: "border-box" }} onFocus={e => e.target.style.borderColor = "#1d4ed8"} onBlur={e => e.target.style.borderColor = "#e2e8f0"} />
                </div>
                <div>
                  <label style={{ fontSize: 13, fontWeight: 700, color: "#374151", display: "block", marginBottom: 6 }}>Card Number</label>
                  <input placeholder="1234 5678 9012 3456" maxLength={19} style={{ width: "100%", padding: "12px 16px", borderRadius: 10, border: "1.5px solid #e2e8f0", fontSize: 15, outline: "none", boxSizing: "border-box", letterSpacing: "0.1em" }} onFocus={e => e.target.style.borderColor = "#1d4ed8"} onBlur={e => e.target.style.borderColor = "#e2e8f0"} />
                </div>
                <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 16 }}>
                  <div>
                    <label style={{ fontSize: 13, fontWeight: 700, color: "#374151", display: "block", marginBottom: 6 }}>Expiry Date</label>
                    <input placeholder="MM / YY" style={{ width: "100%", padding: "12px 16px", borderRadius: 10, border: "1.5px solid #e2e8f0", fontSize: 15, outline: "none", boxSizing: "border-box" }} onFocus={e => e.target.style.borderColor = "#1d4ed8"} onBlur={e => e.target.style.borderColor = "#e2e8f0"} />
                  </div>
                  <div>
                    <label style={{ fontSize: 13, fontWeight: 700, color: "#374151", display: "block", marginBottom: 6 }}>CVV</label>
                    <input placeholder="•••" maxLength={3} type="password" style={{ width: "100%", padding: "12px 16px", borderRadius: 10, border: "1.5px solid #e2e8f0", fontSize: 15, outline: "none", boxSizing: "border-box" }} onFocus={e => e.target.style.borderColor = "#1d4ed8"} onBlur={e => e.target.style.borderColor = "#e2e8f0"} />
                  </div>
                </div>
              </div>
            )}

            {payMethod === "upi" && (
              <div>
                <label style={{ fontSize: 13, fontWeight: 700, color: "#374151", display: "block", marginBottom: 6 }}>UPI ID</label>
                <input placeholder="yourname@upi" style={{ width: "100%", padding: "12px 16px", borderRadius: 10, border: "1.5px solid #e2e8f0", fontSize: 15, outline: "none", boxSizing: "border-box" }} onFocus={e => e.target.style.borderColor = "#1d4ed8"} onBlur={e => e.target.style.borderColor = "#e2e8f0"} />
              </div>
            )}

            {payMethod === "netbanking" && (
              <div>
                <label style={{ fontSize: 13, fontWeight: 700, color: "#374151", display: "block", marginBottom: 10 }}>Select Your Bank</label>
                <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 10 }}>
                  {["SBI", "HDFC", "ICICI", "Axis", "Kotak", "Yes Bank"].map(bank => (
                    <button key={bank} style={{ padding: "12px", borderRadius: 10, border: "1.5px solid #e2e8f0", background: "white", fontSize: 14, fontWeight: 600, color: "#374151", cursor: "pointer", transition: "all 0.2s" }}
                      onMouseEnter={e => { e.target.style.borderColor = "#1d4ed8"; e.target.style.color = "#1d4ed8"; }}
                      onMouseLeave={e => { e.target.style.borderColor = "#e2e8f0"; e.target.style.color = "#374151"; }}>
                      {bank}
                    </button>
                  ))}
                </div>
              </div>
            )}

            <button onClick={handlePay} disabled={loading} style={{ width: "100%", marginTop: 24, padding: "15px", borderRadius: 12, border: "none", background: loading ? "#c7d2fe" : "linear-gradient(135deg,#1d4ed8,#7c3aed)", color: "white", fontSize: 16, fontWeight: 700, cursor: loading ? "not-allowed" : "pointer", boxShadow: "0 4px 20px rgba(29,78,216,0.3)", transition: "all 0.2s" }}>
              {loading ? "Processing..." : `Pay ₹${price.toLocaleString()} →`}
            </button>
            <div style={{ display: "flex", alignItems: "center", justifyContent: "center", gap: 6, marginTop: 14 }}>
              <span style={{ fontSize: 14 }}>🔒</span>
              <span style={{ fontSize: 13, color: "#94a3b8" }}>Secured by Razorpay · 256-bit SSL encryption</span>
            </div>
          </div>

          {/* Order summary */}
          <div style={{ display: "flex", flexDirection: "column", gap: 16 }}>
            <div style={{ background: "white", borderRadius: 16, border: "1.5px solid #f1f5f9", padding: "24px" }}>
              <h3 style={{ fontSize: 16, fontWeight: 700, color: "#0f172a", marginBottom: 16 }}>Order Summary</h3>
              <div style={{ display: "flex", alignItems: "center", gap: 14, padding: "16px", background: selectedPlan.bg, borderRadius: 12, border: `1px solid ${selectedPlan.border}`, marginBottom: 16 }}>
                <div style={{ fontSize: 32 }}>{selectedPlan.icon}</div>
                <div>
                  <div style={{ fontSize: 16, fontWeight: 800, color: "#0f172a" }}>{selectedPlan.name} Plan</div>
                  <div style={{ fontSize: 13, color: "#64748b" }}>Billed {billing}</div>
                </div>
              </div>
              {[
                { label: "Plan price", value: `₹${price.toLocaleString()}` },
                { label: "GST (18%)", value: `₹${Math.round(price * 0.18).toLocaleString()}` },
              ].map(item => (
                <div key={item.label} style={{ display: "flex", justifyContent: "space-between", padding: "8px 0", borderBottom: "1px solid #f1f5f9" }}>
                  <span style={{ fontSize: 14, color: "#64748b" }}>{item.label}</span>
                  <span style={{ fontSize: 14, fontWeight: 600, color: "#0f172a" }}>{item.value}</span>
                </div>
              ))}
              <div style={{ display: "flex", justifyContent: "space-between", padding: "14px 0 0" }}>
                <span style={{ fontSize: 15, fontWeight: 800, color: "#0f172a" }}>Total</span>
                <span style={{ fontSize: 18, fontWeight: 800, color: selectedPlan.color }}>₹{Math.round(price * 1.18).toLocaleString()}</span>
              </div>
            </div>
            <div style={{ background: "#f0fdf4", borderRadius: 12, border: "1px solid #bbf7d0", padding: "14px 16px" }}>
              <div style={{ fontSize: 13, color: "#15803d", fontWeight: 700, marginBottom: 4 }}>✓ 30-day money-back guarantee</div>
              <div style={{ fontSize: 12, color: "#64748b" }}>Cancel anytime. No questions asked.</div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
