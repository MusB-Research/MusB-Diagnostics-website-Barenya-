import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { 
  Dna, Database, GraduationCap, FileText, Mail, 
  CheckCircle, PackageSearch, Users, TestTube, Loader2
} from 'lucide-react';
import { researchAPI, homeAPI } from '../../services/api';
import './ResearchCentralLab.css';

const ResearchCentralLab = () => {
  const [stats, setStats] = useState({ reliability: '99.99%', capacity: 'Millions+' });
  const [quoteForm, setQuoteForm] = useState({ pi_name: '', email: '', overview: '' });
  const [quoteStatus, setQuoteStatus] = useState({ loading: false, message: '', error: false });
  const [newsletterEmail, setNewsletterEmail] = useState('');
  const [newsletterStatus, setNewsletterStatus] = useState({ loading: false, message: '', error: false });

  useEffect(() => {
    const fetchStats = async () => {
      const res = await researchAPI.getStats();
      if (res.ok) setStats(res.data);
    };
    fetchStats();
  }, []);

  const handleQuoteSubmit = async (e) => {
    e.preventDefault();
    setQuoteStatus({ loading: true, message: '', error: false });
    const res = await researchAPI.submitQuote(quoteForm);
    if (res.ok) {
      setQuoteStatus({ loading: false, message: 'Proposal request sent successfully!', error: false });
      setQuoteForm({ pi_name: '', email: '', overview: '' });
    } else {
      setQuoteStatus({ loading: false, message: 'Failed to send request. Please try again.', error: true });
    }
  };

  const handleNewsletterSubmit = async (e) => {
    e.preventDefault();
    setNewsletterStatus({ loading: true, message: '', error: false });
    const res = await homeAPI.subscribeNewsletter(newsletterEmail);
    if (res.ok) {
      setNewsletterStatus({ loading: false, message: res.data.message, error: false });
      setNewsletterEmail('');
    } else {
      setNewsletterStatus({ loading: false, message: 'Subscription failed.', error: true });
    }
  };

  return (
    <div className="research-page fade-in">
      {/* Hero Section */}
      <section className="research-hero">
        <div className="research-hero-content">
          <div className="hero-badge-research">Research & Clinical Trials</div>
          <h1 className="research-hero-title">
            Comprehensive Central Lab Services
          </h1>
          <p className="research-hero-subtitle">
            Empowering your scientific progress through rigorous diagnostics, end-to-end sample management, and dedicated academic partnerships.
          </p>
          <div className="hero-actions">
            <a href="#quote" className="btn btn-primary btn-lg">Request Quote</a>
            <Link to="/portal/research" className="btn btn-outline btn-white btn-lg">Portal Login</Link>
          </div>
        </div>
      </section>

      {/* Study Support Services */}
      <section className="support-section">
        <div className="section-container">
          <h2 className="section-title text-center">Study Support Services</h2>
          <p className="section-subtitle text-center mb-5">
            End-to-end solutions tailored for clinical trials, longitudinal studies, and advanced diagnostic validations.
          </p>
          
          <div className="support-grid">
            <div className="support-card glass">
              <div className="support-icon"><TestTube size={32}/></div>
              <h3>Sample Collection</h3>
              <p>Standardized Phlebotomy, mobile teams, and customized kits to ensure high-fidelity sample acquisition worldwide.</p>
            </div>
            
            <div className="support-card glass">
              <div className="support-icon"><Dna size={32}/></div>
              <h3>Advanced Processing</h3>
              <p>PBMC isolation, aliquoting, DNA/RNA extraction, and specialized biomarker handling per complex protocol requirements.</p>
            </div>

            <div className="support-card glass">
              <div className="support-icon"><Database size={32}/></div>
              <h3>Secure Storage</h3>
              <p>GLP-compliant ambient, -20°C, -80°C, and cryopreservation capabilities ensuring absolute sample integrity.</p>
            </div>

            <div className="support-card glass">
              <div className="support-icon"><PackageSearch size={32}/></div>
              <h3>Global Shipping</h3>
              <p>Cold-chain logistics coordination, ambient transport, and strict adherence to IATA regulations for biological substances.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Biorepository & Sample Tracking */}
      <section className="biorepository-section bg-light-alt">
        <div className="section-container">
          <div className="biorepository-content">
            <div className="biorepository-text">
              <h2 className="section-title">Biorepository & Sample Tracking</h2>
              <p className="mb-4">
                Our state-of-the-art biorepository system offers complete transparency and absolute traceability for every specimen. From the moment of collection to deep-freeze storage and eventual assay, your study materials are meticulously monitored.
              </p>
              <ul className="feature-list">
                <li><CheckCircle className="text-primary"/> <strong>24/7 Monitoring:</strong> Real-time temperature logs and automated alert systems.</li>
                <li><CheckCircle className="text-primary"/> <strong>LIMS Integration:</strong> Full digital chain-of-custody tracking with barcoding.</li>
                <li><CheckCircle className="text-primary"/> <strong>Redundancy:</strong> Complete backup power generation and duplicate cooling systems.</li>
                <li><CheckCircle className="text-primary"/> <strong>Retrieval Agility:</strong> Rapid specimen locating and dispatch for downstream analysis.</li>
              </ul>
            </div>
            <div className="biorepository-visual glass">
              <div className="visual-stat">
                <h3>{stats.reliability}</h3>
                <p>Uptime & Reliability</p>
              </div>
              <div className="visual-stat">
                <h3>{stats.capacity}</h3>
                <p>Sample Capacity</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Academic Collaboration */}
      <section className="academic-section">
        <div className="section-container">
          <div className="academic-content text-center">
            <GraduationCap size={48} className="academic-icon mx-auto mb-4 text-primary" />
            <h2 className="section-title">Academic Collaboration Focus</h2>
            <p className="section-subtitle max-w-3xl mx-auto mb-5">
              We actively partner with leading universities, research institutions, and principal investigators to push the boundaries of medical science. Our infrastructure is designed to scale with your grant requirements.
            </p>
            <div className="academic-pillars">
              <div className="pillar glass">
                <Users size={28} className="mb-3 text-secondary" />
                <h4>Joint Grant Applications</h4>
                <p>Providing the laboratory infrastructure and core facility data required to strengthen NIH, NSF, and foundation proposals.</p>
              </div>
              <div className="pillar glass">
                <FileText size={28} className="mb-3 text-secondary" />
                <h4>Publication Support</h4>
                <p>Rigorous documentation, transparent methodology, and publication-ready data sets to support your manuscript submissions.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Request Quote & Portal */}
      <section id="quote" className="quote-portal-section bg-light-alt">
        <div className="section-container">
          <div className="quote-portal-grid">
            <div className="quote-card glass">
              <h2>Request a Proposal</h2>
              <p>Detail your study protocol, processing requirements, and expected volume to receive a customized laboratory services proposal.</p>
              <form className="quote-form" onSubmit={handleQuoteSubmit}>
                <input 
                  type="text" 
                  placeholder="Principal Investigator / Company" 
                  required 
                  value={quoteForm.pi_name}
                  onChange={(e) => setQuoteForm({...quoteForm, pi_name: e.target.value})}
                  disabled={quoteStatus.loading}
                />
                <input 
                  type="email" 
                  placeholder="Official Email Address" 
                  required 
                  value={quoteForm.email}
                  onChange={(e) => setQuoteForm({...quoteForm, email: e.target.value})}
                  disabled={quoteStatus.loading}
                />
                <textarea 
                  placeholder="Brief Study Overview & Specific Lab Needs..." 
                  rows="4" 
                  required
                  value={quoteForm.overview}
                  onChange={(e) => setQuoteForm({...quoteForm, overview: e.target.value})}
                  disabled={quoteStatus.loading}
                ></textarea>
                <button type="submit" className="btn btn-primary w-100" disabled={quoteStatus.loading}>
                  {quoteStatus.loading ? <Loader2 className="animate-spin inline mr-2" size={18}/> : 'Submit Request'}
                </button>
                {quoteStatus.message && (
                  <p className={`status-msg mt-3 ${quoteStatus.error ? 'error' : 'success'}`}>
                    {quoteStatus.message}
                  </p>
                )}
              </form>
            </div>
            
            <div className="portal-card glass">
              <h2>Sponsor / Investigator Portal</h2>
              <p>Access your real-time LIMS dashboard, track sample manifests, review analytical reports, and download raw data sets.</p>
              <div className="portal-login-box">
                <p className="mb-4">Already have active studies with us?</p>
                <Link to="/portal/research" className="btn btn-outline btn-lg w-100">
                  <Database size={20} className="me-2 d-inline" /> Login to LIMS Portal
                </Link>
                <div className="mt-4 text-sm text-muted">
                  Need access credentials? <a href="#quote" className="text-primary">Contact your project manager</a>.
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Newsletter */}
      <section className="research-newsletter-section">
        <div className="section-container">
          <div className="newsletter-wrapper glass text-center">
            <Mail size={40} className="mx-auto mb-3 text-primary" />
            <h2>Research Insights Newsletter</h2>
            <p className="mb-4 max-w-2xl mx-auto">
              Join our exclusive research segment to receive monthly updates on new assay validations, biorepository capabilities, and funding opportunities.
            </p>
            <form className="newsletter-form-inline mx-auto" onSubmit={handleNewsletterSubmit}>
              <input 
                type="email" 
                placeholder="Enter your academic/corporate email" 
                required 
                value={newsletterEmail}
                onChange={(e) => setNewsletterEmail(e.target.value)}
                disabled={newsletterStatus.loading}
              />
              <button type="submit" className="btn btn-secondary" disabled={newsletterStatus.loading}>
                {newsletterStatus.loading ? 'Subscribing...' : 'Subscribe'}
              </button>
              {newsletterStatus.message && (
                <p className={`newsletter-msg mt-2 ${newsletterStatus.error ? 'error' : 'success'}`}>
                  {newsletterStatus.message}
                </p>
              )}
            </form>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ResearchCentralLab;
