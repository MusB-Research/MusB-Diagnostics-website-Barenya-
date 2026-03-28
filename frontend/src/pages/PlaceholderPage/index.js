import React from 'react';
import { useLocation, Link } from 'react-router-dom';
import { Construction } from 'lucide-react';
import '../../styles/index.css';

const PlaceholderPage = () => {
  const location = useLocation();
  const pathParts = location.pathname.split('/').filter(Boolean);
  
  // Create a readable title from the URL path
  const readableTitle = pathParts.length > 0 
    ? pathParts[pathParts.length - 1].replace(/-/g, ' ').replace(/\b\w/g, l => l.toUpperCase())
    : 'Page';

  return (
    <div className="section fade-in" style={{ minHeight: '80vh', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
      <div className="glass" style={{ maxWidth: '600px', width: '100%', padding: '4rem 2rem', textAlign: 'center', borderRadius: '24px' }}>
        <div style={{ color: 'var(--primary)', marginBottom: '1.5rem', display: 'flex', justifyContent: 'center' }}>
          <Construction size={64} />
        </div>
        <h1 style={{ fontSize: '2.5rem', marginBottom: '1rem', color: 'var(--text-main)' }}>
          {readableTitle}
        </h1>
        <p style={{ fontSize: '1.1rem', color: 'var(--text-muted)', marginBottom: '2rem' }}>
          This page (`{location.pathname}`) is currently under construction and will be launching soon.
        </p>
        <Link to="/" className="btn btn-primary">
          Return to Home
        </Link>
      </div>
    </div>
  );
};

export default PlaceholderPage;
