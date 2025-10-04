import React from 'react';
import { useLanguage } from '../context/LanguageContext';
import { Instagram, Facebook, Linkedin } from 'lucide-react';
import '../styles/Footer.css';

const startupName = process.env.REACT_APP_STARTUP_NAME;

export default function Footer() {
  const { t } = useLanguage();

  return (
    <footer className="footer">
      <div className="footer-left">
        <div className="startup-name">{t.madeBy}</div>
        <div className="footer-location">{t.location}</div>
      </div>

      <div className="footer-logo">
        <img
          src="/logo.png"
          alt={`${startupName} logo`}
          className="footer-logo-img"
          draggable={false}
        />
      </div>

      <div className="footer-right">
        <a href="https://www.instagram.com/gatenaai/" aria-label="Instagram" target="_blank" rel="noopener noreferrer">
          <Instagram />
        </a>
        <a href="https://www.facebook.com/gatenaai/" aria-label="Facebook" target="_blank" rel="noopener noreferrer">
          <Facebook />
        </a>
        <a href="https://www.linkedin.com/company/gatenaai/" aria-label="LinkedIn" target="_blank" rel="noopener noreferrer">
          <Linkedin />
        </a>
      </div>
    </footer>
  );
}
