import React, { useState } from "react";
import { Leaf, Droplets, DollarSign, Trees } from "lucide-react";

export const EcoCalculator: React.FC = () => {
  const [dailyQueries, setDailyQueries] = useState<number>(45);

  // Benchmarks based on average cloud LLM inference:
  // Cloud query: ~4.5g CO2 (including datacenter PUE, network routing, storage, GPU cooling)
  // Cloud query cooling water: ~35mL clean water consumed in data center cooling towers
  // Cloud API cost: ~$0.03 per prompt/completion cycle or $20/mo subscription
  const co2PerQueryGrams = 4.5;
  const waterPerQueryMl = 35;
  const costPerQueryUsd = 0.035;

  const annualQueries = dailyQueries * 365;
  const annualCo2Kg = ((annualQueries * co2PerQueryGrams) / 1000).toFixed(1);
  const annualWaterLiters = ((annualQueries * waterPerQueryMl) / 1000).toFixed(1);
  const annualMoneySaved = Math.round(annualQueries * costPerQueryUsd);

  return (
    <section id="eco-impact" className="section" style={{ background: "rgba(2, 10, 5, 0.45)" }}>
      <div className="container">
        
        {/* Section Header */}
        <div className="section-header">
          <div className="badge-pill" style={{ marginBottom: "1rem" }}>
            <Leaf size={14} />
            <span>SUSTAINABILITY BY DESIGN</span>
          </div>
          <h2>
            The <span className="text-lime-gradient">Eco Impact</span> of Local AI
          </h2>
          <p>
            Cloud data centers consume gigawatts of electricity and billions of gallons of drinking water for server cooling. Running your models locally via Termalime eliminates cloud overhead. Calculate your impact below:
          </p>
        </div>

        {/* Calculator Card */}
        <div
          className="m3-card"
          style={{
            maxWidth: "960px",
            margin: "0 auto",
            background: "linear-gradient(145deg, #041208, #020704)",
            borderColor: "rgba(52, 211, 153, 0.35)",
            boxShadow: "0 25px 70px rgba(0, 0, 0, 0.8), 0 0 35px rgba(0, 255, 145, 0.12)",
          }}
        >
          {/* Slider Control */}
          <div style={{ marginBottom: "2.5rem", textAlign: "center" }}>
            <label style={{ fontSize: "1.1rem", fontWeight: 600, color: "#fff", display: "block", marginBottom: "0.8rem" }}>
              How many shell &amp; code prompts do you run each day?
            </label>
            
            <div style={{ display: "inline-flex", alignItems: "center", gap: "10px", marginBottom: "1.2rem" }}>
              <span style={{ fontSize: "2.4rem", fontWeight: 800, color: "var(--lime-bright)", fontFamily: "var(--font-display)" }}>
                {dailyQueries}
              </span>
              <span style={{ fontSize: "1rem", color: "var(--text-secondary)", fontWeight: 600 }}>prompts / day</span>
            </div>

            <input
              type="range"
              min="5"
              max="250"
              value={dailyQueries}
              onChange={(e) => setDailyQueries(+e.target.value)}
              style={{
                width: "100%",
                maxWidth: "600px",
                accentColor: "var(--lime-bright)",
                height: "8px",
                cursor: "pointer",
              }}
            />
            <div style={{ display: "flex", justifyContent: "space-between", maxWidth: "600px", margin: "6px auto 0", fontSize: "0.75rem", color: "var(--text-muted)" }}>
              <span>Casual dev (5)</span>
              <span>Daily power user (50)</span>
              <span>Intensive prompt engineer (250)</span>
            </div>
          </div>

          {/* Metric Cards Grid */}
          <div className="grid-3" style={{ gap: "1.5rem", marginBottom: "2rem" }}>
            
            {/* Metric 1: CO2 */}
            <div
              style={{
                padding: "1.5rem",
                borderRadius: "14px",
                background: "rgba(0, 0, 0, 0.5)",
                border: "1px solid rgba(52, 211, 153, 0.25)",
                textAlign: "center",
              }}
            >
              <div style={{ display: "inline-flex", padding: "10px", borderRadius: "10px", background: "rgba(52, 211, 153, 0.1)", marginBottom: "0.8rem" }}>
                <Leaf size={24} style={{ color: "var(--lime-bright)" }} />
              </div>
              <h3 style={{ fontSize: "2.2rem", fontWeight: 800, color: "#fff", margin: "0 0 4px" }}>
                {annualCo2Kg} <span style={{ fontSize: "1.1rem", fontWeight: 500, color: "var(--lime-bright)" }}>kg CO₂</span>
              </h3>
              <p style={{ fontSize: "0.85rem", color: "var(--text-secondary)", margin: 0 }}>
                Emissions kept out of the atmosphere each year.
              </p>
            </div>

            {/* Metric 2: Water */}
            <div
              style={{
                padding: "1.5rem",
                borderRadius: "14px",
                background: "rgba(0, 0, 0, 0.5)",
                border: "1px solid rgba(56, 189, 248, 0.25)",
                textAlign: "center",
              }}
            >
              <div style={{ display: "inline-flex", padding: "10px", borderRadius: "10px", background: "rgba(56, 189, 248, 0.1)", marginBottom: "0.8rem" }}>
                <Droplets size={24} style={{ color: "#38bdf8" }} />
              </div>
              <h3 style={{ fontSize: "2.2rem", fontWeight: 800, color: "#fff", margin: "0 0 4px" }}>
                {annualWaterLiters} <span style={{ fontSize: "1.1rem", fontWeight: 500, color: "#38bdf8" }}>Liters</span>
              </h3>
              <p style={{ fontSize: "0.85rem", color: "var(--text-secondary)", margin: 0 }}>
                Data center cooling water spared from evaporation.
              </p>
            </div>

            {/* Metric 3: Money Saved */}
            <div
              style={{
                padding: "1.5rem",
                borderRadius: "14px",
                background: "rgba(0, 0, 0, 0.5)",
                border: "1px solid rgba(251, 191, 36, 0.25)",
                textAlign: "center",
              }}
            >
              <div style={{ display: "inline-flex", padding: "10px", borderRadius: "10px", background: "rgba(251, 191, 36, 0.1)", marginBottom: "0.8rem" }}>
                <DollarSign size={24} style={{ color: "#fbbf24" }} />
              </div>
              <h3 style={{ fontSize: "2.2rem", fontWeight: 800, color: "#fff", margin: "0 0 4px" }}>
                ${annualMoneySaved} <span style={{ fontSize: "1.1rem", fontWeight: 500, color: "#fbbf24" }}>/ yr</span>
              </h3>
              <p style={{ fontSize: "0.85rem", color: "var(--text-secondary)", margin: 0 }}>
                Saved in recurring cloud token API charges.
              </p>
            </div>

          </div>

          <div
            style={{
              padding: "1rem 1.4rem",
              borderRadius: "10px",
              background: "rgba(52, 211, 153, 0.06)",
              border: "1px solid rgba(52, 211, 153, 0.15)",
              display: "flex",
              alignItems: "center",
              gap: "12px",
            }}
          >
            <Trees size={20} style={{ color: "var(--lime-bright)", flexShrink: 0 }} />
            <p style={{ fontSize: "0.88rem", color: "var(--text-secondary)", margin: 0 }}>
              <strong style={{ color: "#fff" }}>Eco Dividend:</strong> Saving {annualCo2Kg} kg of CO₂ is equivalent to planting{" "}
              <strong style={{ color: "var(--lime-bright)" }}>
                {Math.max(1, Math.round(+annualCo2Kg / 12))} mature urban trees
              </strong>{" "}
              or avoiding {Math.round(+annualCo2Kg * 2.5)} miles of vehicle emissions.
            </p>
          </div>

        </div>

      </div>
    </section>
  );
};
