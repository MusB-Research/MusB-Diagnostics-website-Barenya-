import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { 
  Search, ArrowRight, User, Briefcase, Stethoscope, Home as HomeIcon, 
  Truck, HeartHandshake, Microscope, Dna, MousePointerClick, CalendarCheck, 
  FileText, ShieldCheck, Award, CheckCircle, Activity, Droplets, Heart, 
  AlertCircle, Zap, Star, Users, Quote, Mail, Clock, Share2, Loader2
} from 'lucide-react';
import { homeAPI } from '../../services/api';
import './Home.css';

const Home = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [heroData, setHeroData] = useState(null);
  const [services, setServices] = useState([]);
  const [testimonials, setTestimonials] = useState([]);
  const [popularPanels, setPopularPanels] = useState([]);
  const [newsletterEmail, setNewsletterEmail] = useState('');
  const [newsletterStatus, setNewsletterStatus] = useState({ loading: false, message: '', error: false });
  const [loading, setLoading] = useState(true);

  const [currentOfferIndex, setCurrentOfferIndex] = useState(0);
  const offers = [
    "Weekly Deal: Essential Vitamin Profile - $69!",
    "Monthly Bundle: Complete Men's/Women's Health - $149!",
    "Seasonal Special: Allergy & Immunity Panel - $99!",
    "Limited Time: 45% Off All Wellness Packages!"
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentOfferIndex((prev) => (prev + 1) % offers.length);
    }, 4000);
    return () => clearInterval(timer);
  }, [offers.length]);

  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);
      try {
        const [heroRes, servicesRes, testimonialsRes, panelsRes] = await Promise.all([
          homeAPI.getHero(),
          homeAPI.getServices(),
          homeAPI.getTestimonials(),
          homeAPI.getPopularPanels()
        ]);

        if (heroRes.ok) setHeroData(heroRes.data[0]);
        if (servicesRes.ok) setServices(servicesRes.data);
        if (testimonialsRes.ok) setTestimonials(testimonialsRes.data);
        if (panelsRes.ok) setPopularPanels(panelsRes.data);
      } catch (error) {
        console.error("Error fetching home data:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  const handleSearch = (e) => {
    e.preventDefault();
    if (searchQuery.trim()) {
      window.location.href = `/tests?q=${encodeURIComponent(searchQuery)}`;
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
      setNewsletterStatus({ loading: false, message: 'Subscription failed. Please try again.', error: true });
    }
  };

  const getIcon = (iconName) => {
    const icons = { User, Briefcase, Stethoscope, Home: HomeIcon, Truck, HeartHandshake, Microscope, Dna, Activity, Droplets, AlertCircle, Heart, Zap };
    const IconComp = icons[iconName] || Activity;
    return <IconComp />;
  };

  return (
    <div className="home-page fade-in">
      {loading && (
        <div className="loading-overlay">
          <Loader2 className="animate-spin text-primary" size={48}/>
        </div>
      )}
      {/* Section A: Hero + Quick Actions */}
      <section className="home-hero">
        <div className="hero-background"></div>
        <div className="home-hero-content">
          <Link to="/offers" className="hero-offer-banner">
            <span key={currentOfferIndex} className="offer-text fade-in-text">
              <Zap size={14} className="inline-icon" /> {offers[currentOfferIndex]}
            </span>
          </Link>
          <div className="hero-badge-modern">
            <span className="live-dot"></span> Next-Gen Diagnostics
          </div>
          <h1 className="home-hero-title">
            {heroData?.title || 'Affordable Lab Testing + Mobile Collections + Research-Grade Quality'}
          </h1>
          <p className="home-hero-subtitle">
            {heroData?.subtitle || 'Self-pay, employer plans, physicians, facilities, research & biomarker validation.'}
          </p>
          
          <div className="home-hero-actions">
            <Link to="/tests" className="btn btn-primary btn-lg">
              Browse Tests <ArrowRight size={20} />
            </Link>
            <Link to="/book" className="btn btn-secondary btn-lg">
              Book Appointment
            </Link>
            <Link to="/offers" className="btn btn-outline btn-lg btn-white">
              View Offers
            </Link>
          </div>

          <div className="hero-search-widget glass">
            <form onSubmit={handleSearch}>
              <Search className="search-icon" size={24} />
              <input 
                type="text" 
                placeholder="Type to search for tests (e.g., Thyroid, Vitamin D)..." 
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
              />
              <button type="submit" className="btn btn-primary">Search</button>
            </form>
          </div>
        </div>
      </section>


      {/* Section C: Live Offers Strip */}
      <section className="section offers-section">
        <div className="offers-header">
          <h2 className="section-title">Live Health Offers</h2>
          <p className="section-subtitle">Exclusive weekly, monthly, and seasonal bundles.</p>
        </div>
        <div className="offers-grid">
          {/* Weekly Deal */}
          <div className="offer-tile deal-weekly">
            <div className="offer-tag">Weekly Deal</div>
            <h3>Essential Vitamin Profile</h3>
            <div className="offer-price">
              <span className="price-strike">$120</span> <span className="price-new">$69</span>
            </div>
            <ul className="offer-includes">
              <li><CheckCircle size={16}/> Vitamin D total</li>
              <li><CheckCircle size={16}/> Vitamin B12</li>
              <li><CheckCircle size={16}/> Iron Panel</li>
            </ul>
            <div className="offer-timer">
              <Clock size={16} /> Ends in 3d 14h 22m
            </div>
            <div className="offer-actions">
              <button className="btn btn-outline btn-white btn-sm">Book Deal</button>
              <button className="btn-icon"><Share2 size={18}/></button>
            </div>
          </div>
          
          {/* Monthly Bundle */}
          <div className="offer-tile deal-monthly">
            <div className="offer-tag">Monthly Bundle</div>
            <h3>Complete Men's/Women's Health</h3>
            <div className="offer-price">
              <span className="price-strike">$250</span> <span className="price-new">$149</span>
            </div>
            <ul className="offer-includes">
              <li><CheckCircle size={16}/> Full Hormone Panel</li>
              <li><CheckCircle size={16}/> Comprehensive Metabolic</li>
              <li><CheckCircle size={16}/> CBC & Lipid Profile</li>
            </ul>
            <div className="offer-timer">
              <Clock size={16} /> Ends on Mar 31
            </div>
            <div className="offer-actions">
              <button className="btn btn-outline btn-white btn-sm">Book Bundle</button>
              <button className="btn-icon"><Share2 size={18}/></button>
            </div>
          </div>

          {/* Seasonal */}
          <div className="offer-tile deal-seasonal">
            <div className="offer-tag">Spring Campaign</div>
            <h3>Allergy & Immunity Panel</h3>
            <div className="offer-price">
              <span className="price-strike">$180</span> <span className="price-new">$99</span>
            </div>
            <ul className="offer-includes">
              <li><CheckCircle size={16}/> Environmental Allergens</li>
              <li><CheckCircle size={16}/> IgG / IgE markers</li>
              <li><CheckCircle size={16}/> CRP Inflammation</li>
            </ul>
            <div className="offer-timer">
              <Clock size={16} /> Limited Time
            </div>
            <div className="offer-actions">
              <button className="btn btn-outline btn-white btn-sm">Book Seasonal</button>
              <button className="btn-icon"><Share2 size={18}/></button>
            </div>
          </div>
        </div>
      </section>

      {/* Section D: How It Works */}
      <section className="section bg-light-alt how-it-works">
        <h2 className="section-title">Seamless Testing Experience</h2>
        <div className="steps-container">
          <div className="step-card">
            <div className="step-number">1</div>
            <div className="step-icon"><MousePointerClick size={40} /></div>
            <h3>Choose Test</h3>
            <p>Browse our catalog and order tests online. No doctor visit required for self-pay.</p>
          </div>
          <div className="step-connector"></div>
          <div className="step-card">
            <div className="step-number">2</div>
            <div className="step-icon"><CalendarCheck size={40} /></div>
            <h3>Book Draw</h3>
            <p>Select in-clinic, mobile phlebotomy at your home, or onsite facility collection.</p>
          </div>
          <div className="step-connector"></div>
          <div className="step-card">
            <div className="step-number">3</div>
            <div className="step-icon"><FileText size={40} /></div>
            <h3>Get Results</h3>
            <p>View secure digital results fast. Optional medical review available.</p>
          </div>
        </div>
      </section>

      {/* Section E: Trust & Compliance */}
      <section className="trust-section">
        <div className="trust-content">
          <div className="trust-text">
            <h2>Uncompromising Quality & Compliance</h2>
            <p>Your health data is secure, and our results are research-grade accurate.</p>
            <ul className="trust-list">
              <li><CheckCircle className="text-primary"/> <strong>HIPAA Compliant</strong> - Total privacy and data security.</li>
              <li><CheckCircle className="text-primary"/> <strong>Fast Turnaround</strong> - 24-48 hours for standard panels.</li>
              <li><CheckCircle className="text-primary"/> <strong>Precision Assured</strong> - State-of-the-art analyzers.</li>
            </ul>
          </div>
          <div className="trust-badges">
            <div className="badge-item glass">
              <ShieldCheck size={40} className="text-primary" />
              <span>CLIA Certified</span>
            </div>
            <div className="badge-item glass">
              <Award size={40} className="text-primary" />
              <span>COLA Accredited</span>
            </div>
            <div className="badge-item glass">
              <Activity size={40} className="text-primary" />
              <span>CAP Proficiency</span>
            </div>
          </div>
        </div>
      </section>

      {/* Section F: Popular Panels */}
      <section className="section panels-section">
        <h2 className="section-title">Popular Test Panels</h2>
        <div className="panels-grid">
          {popularPanels.map((panel, i) => (
            <div key={i} className="panel-card">
              <div className="panel-card-icon">{getIcon(panel.icon_name)}</div>
              <h4>{panel.name}</h4>
              <div className="panel-bot">
                <span className="panel-price">${panel.price}</span>
                <Link to={panel.link} className="btn-link">View Details <ArrowRight size={16}/></Link>
              </div>
            </div>
          ))}
        </div>
        <div className="center-btn-wrap">
          <Link to="/tests" className="btn btn-outline">Explore All Panels</Link>
        </div>
      </section>

      {/* Section G: Social proof + community */}
      <section className="section bg-light-alt community-section">
        <h2 className="section-title">Trusted by the Community</h2>
        <div className="community-grid">
          <div className="testimonials glass">
            <Quote className="quote-icon" size={40} />
            {testimonials.length > 0 ? (
              <>
                <p className="testimonial-text">"{testimonials[0].content}"</p>
                <div className="testimonial-author">
                  <div className="author-avatar"><User size={24}/></div>
                  <div>
                    <strong>{testimonials[0].author_name}</strong>
                    <div className="stars">
                      {[...Array(testimonials[0].rating)].map((_, i) => <Star key={i} size={14}/>)}
                    </div>
                  </div>
                </div>
              </>
            ) : (
              <p>No testimonials available.</p>
            )}
          </div>
          <div className="community-heroes glass">
            <Users className="heroes-icon" size={40} />
            <h3>Community Heroes</h3>
            <p>
              Supporting non-profits and study participants across the nation. Over <strong>10,000+</strong> subsidized tests provided for underserved communities and clinical research trials.
            </p>
            <Link to="/contact" className="btn btn-primary btn-sm">Join Our Mission</Link>
          </div>
        </div>
      </section>

      {/* Section H: Newsletter + Blog preview */}
      <section className="newsletter-section">
        <div className="newsletter-card glass">
          <div className="ns-icon"><Mail size={48} /></div>
          <h2>Monthly Health Offers & Tips</h2>
          <p>Subscribe to stay updated with our newest test panels, seasonal discounts, and wellness advice.</p>
          <form className="newsletter-form" onSubmit={handleNewsletterSubmit}>
            <input 
              type="email" 
              placeholder="Enter your email address" 
              required 
              value={newsletterEmail}
              onChange={(e) => setNewsletterEmail(e.target.value)}
              disabled={newsletterStatus.loading}
            />
            <button type="submit" className="btn btn-secondary" disabled={newsletterStatus.loading}>
              {newsletterStatus.loading ? <Loader2 className="animate-spin" size={20}/> : 'Subscribe Now'}
            </button>
            {newsletterStatus.message && (
              <p className={`newsletter-msg ${newsletterStatus.error ? 'error' : 'success'}`}>
                {newsletterStatus.message}
              </p>
            )}
          </form>
        </div>
      </section>

    </div>
  );
};

export default Home;