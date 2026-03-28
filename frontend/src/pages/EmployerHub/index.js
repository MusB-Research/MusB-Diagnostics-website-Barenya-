import React, { useEffect, useState, useCallback } from 'react';
import { Link } from 'react-router-dom';
import { 
  Building2, Users, TrendingUp, Shield, CheckCircle, 
  ArrowRight, HeartHandshake, Check, Minus,
  Loader2
} from 'lucide-react';
import { employersAPI } from '../../services/api';
import './EmployerHub.css';

const EmployerHub = () => {
  const [plans, setPlans] = useState([]);
  const [comparison, setComparison] = useState([]);
  const [loading, setLoading] = useState(true);

  const fetchData = useCallback(async () => {
    setLoading(true);
    const [plansRes, compRes] = await Promise.all([
      employersAPI.getPlans(),
      employersAPI.getComparison()
    ]);
    if (plansRes.ok) setPlans(plansRes.data);
    if (compRes.ok) setComparison(compRes.data);
    setLoading(false);
  }, []);

  useEffect(() => {
    fetchData();
  }, [fetchData]);



  return (
    <div className="employer-page fade-in">
      {/* Hero Section */}
      <section className="employer-hero">
        <div className="employer-hero-content">
          <div className="hero-badge-corporate">Corporate Health Programs</div>
          <h1 className="employer-hero-title">
            Invest in Your Team's Health & Productivity
          </h1>
          <p className="employer-hero-subtitle">
            Comprehensive diagnostic testing packages designed for companies of all sizes. Enhance retention, recruitment, and preventive care.
          </p>
          <div className="hero-actions">
            <Link to="/contact?type=employer" className="btn btn-primary btn-lg">Partner With Us</Link>
            <a href="#plans" className="btn btn-outline btn-white btn-lg">View Plans</a>
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="benefits-section">
        <div className="section-container">
          <h2 className="section-title text-center">Why Corporate Diagnostics?</h2>
          <div className="benefits-grid">
            <div className="benefit-card glass">
              <div className="benefit-icon"><Users size={32}/></div>
              <h3>Retention & Recruitment</h3>
              <p>Top-tier proactive health benefits attract premier talent and strengthen employee loyalty in a competitive market.</p>
            </div>
            <div className="benefit-card glass">
              <div className="benefit-icon"><TrendingUp size={32}/></div>
              <h3>Reduced Absenteeism</h3>
              <p>Preventative annual checkups catch chronic conditions early, reducing long-term sickness and lost productivity.</p>
            </div>
            <div className="benefit-card glass">
              <div className="benefit-icon"><Shield size={32}/></div>
              <h3>Preventive Care Focus</h3>
              <p>Shift corporate culture from reactive sick-care to proactive wellness by encouraging routine biometric monitoring.</p>
            </div>
            <div className="benefit-card glass">
              <div className="benefit-icon"><Building2 size={32}/></div>
              <h3>Onsite Convenience</h3>
              <p>We bring the clinic to your office. Same-day onsite collections mean zero time wasted commuting to a lab.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Operations (Onsite & Credits) */}
      <section className="operations-section bg-light-alt text-center">
        <div className="section-container">
          <h2 className="section-title">Logistics & Rewards</h2>
          <div className="ops-grid">
            <div className="ops-card glass">
              <div className="ops-card-icon"><Building2 size={40}/></div>
              <h3>Onsite Collections Rule</h3>
              <p className="ops-highlight">“5+ Same-Day Rule”</p>
              <p>If <strong>5 or more employees</strong> schedule their blood draw on the same day, we will dispatch our mobile phlebotomy team directly to your office or facility at absolutely no additional cost.</p>
            </div>
            <div className="ops-card glass">
              <div className="ops-card-icon"><HeartHandshake size={40}/></div>
              <h3>Owner & Family Credits</h3>
              <p className="ops-highlight">Built-in Perks</p>
              <p>We reward your investment: Register <strong>5 employees</strong>, and 1 owner/executive gets a complimentary annual checkup. Register <strong>20+ employees</strong>, and earn a free comprehensive wellness structure for a family of 4.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Plan Cards */}
      <section id="plans" className="plans-section">
        <div className="section-container">
          <div className="text-center mb-5">
            <h2 className="section-title">Flexible Corporate Plans</h2>
            <p className="section-subtitle">Choose the tier that fits your company size and budget.</p>
          </div>
          
          <div className="plans-grid">
            {loading ? (
              <div className="loading-state full-width">
                <Loader2 className="animate-spin text-primary" size={48}/>
                <p>Loading plans...</p>
              </div>
            ) : plans.map((plan) => (
              <div key={plan.id} className={`plan-card glass ${plan.is_featured ? 'plan-featured' : ''}`}>
                {plan.tag_label && <div className="plan-tag">{plan.tag_label}</div>}
                <h3>{plan.name}</h3>
                <div className="plan-price">
                  {plan.price_display} <span className="price-suffix">{plan.price_suffix}</span>
                </div>
                <p className="plan-desc">{plan.description}</p>
                <ul className="plan-features">
                  {plan.features.map((feat) => (
                    <li key={feat.id}><CheckCircle size={16}/> {feat.text}</li>
                  ))}
                </ul>
                <Link to={`/contact?type=employer&plan=${plan.id}`} className={`btn ${plan.is_featured ? 'btn-primary' : 'btn-outline'} plan-btn`}>
                  Select Plan {plan.id}
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Comparison Table */}
      <section className="comparison-section bg-light-alt">
        <div className="section-container">
          <h2 className="section-title text-center">Feature Comparison Matrix</h2>
          <div className="table-responsive">
            <table className="comparison-table glass">
              <thead>
                <tr>
                  <th>Features</th>
                  <th>Annual Coverage</th>
                  <th>20% Match</th>
                  <th>Free Membership</th>
                  <th>Medical Advice</th>
                </tr>
              </thead>
              <tbody>
                {comparison.map((row) => (
                  <tr key={row.id}>
                    <td>{row.feature_name}</td>
                    <td>{row.annual_coverage ? <Check className="text-secondary"/> : <Minus className="text-muted"/>}</td>
                    <td>{row.match_program ? <Check className="text-secondary"/> : <Minus className="text-muted"/>}</td>
                    <td>{row.free_membership ? <Check className="text-secondary"/> : <Minus className="text-muted"/>}</td>
                    <td>{row.medical_advice ? <Check className="text-secondary"/> : <Minus className="text-muted"/>}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* CTA Bottom Banner */}
      <section className="employer-cta-banner">
        <div className="cta-content">
          <h2>Ready to upgrade your company's health?</h2>
          <p>Join dozens of progressive companies ensuring their teams stay vibrant, healthy, and productive.</p>
          <Link to="/contact?type=employer" className="btn btn-secondary btn-lg CTA-btn">
            Employer Signup <ArrowRight size={20}/>
          </Link>
        </div>
      </section>

    </div>
  );
};

export default EmployerHub;
