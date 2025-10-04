import React, { useState, useEffect } from 'react';
import { useLanguage } from '../context/LanguageContext';
import { useNavigate, useLocation } from 'react-router-dom';
import '../styles/Navbar.css';

const flags = {
  en: 'https://flagcdn.com/w40/gb.png',
  es: 'https://flagcdn.com/w40/es.png',
  de: 'https://flagcdn.com/w40/de.png',
  pt: 'https://flagcdn.com/w40/pt.png',
};

export default function Navbar({ isWorkingWithUs, setIsWorkingWithUs }) {
  const [menuActive, setMenuActive] = useState(false);
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const [isClosing, setIsClosing] = useState(false);

  const { language, switchLanguage, t } = useLanguage();
  const navigate = useNavigate();
  const location = useLocation();

  const startupName = process.env.REACT_APP_STARTUP_NAME;
  const navSections = ['services', 'aboutUs', 'workWithUs', 'contact'];
  const languageOptions = [
    { code: 'en', label: 'English' },
    { code: 'es', label: 'Español' },
    { code: 'de', label: 'Deutsch' },
    { code: 'pt', label: 'Português' },
  ];

  const sectionScrollMap = {
    services: 'services',
    aboutUs: 'aboutUs',
    workWithUs: 'workTogether',
    contact: 'workTogether',
  };

  const scrollToSection = (id) => {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
    setMenuActive(false);
  };

  const handleNavClick = (section) => {
    const targetId = sectionScrollMap[section] || section.toLowerCase();
    if (section === 'workWithUs') setIsWorkingWithUs(true);
    else if (section === 'contact') setIsWorkingWithUs(false);

    if (location.pathname !== '/') {
      navigate(`/#${targetId}`);
      setTimeout(() => scrollToSection(targetId), 250);
    } else {
      scrollToSection(targetId);
    }
  };

  const handleLogoClick = () => {
    if (location.pathname !== '/') navigate('/');
    setTimeout(() => window.scrollTo({ top: 0, behavior: 'smooth' }), 200);
    setIsWorkingWithUs(false);
  };

  const toggleMenu = () => setMenuActive((prev) => !prev);
  const toggleDropdown = () => {
    if (dropdownOpen) {
      setIsClosing(true);
      setTimeout(() => {
        setDropdownOpen(false);
        setIsClosing(false);
      }, 250);
    } else setDropdownOpen(true);
  };

  const handleLanguageChange = (code) => {
    switchLanguage(code);
    setIsClosing(true);
    setTimeout(() => {
      setDropdownOpen(false);
      setIsClosing(false);
    }, 250);
  };

  // Handle hash scrolling on page load
  useEffect(() => {
    if (location.hash) {
      const targetId = location.hash.replace('#', '');
      setTimeout(() => scrollToSection(targetId), 200);
    }
  }, [location]);

  return (
    <nav className="navbar" role="navigation" aria-label="Main navigation">
      <div className="navbar-left">
        <div className="title-logo-wrapper" onClick={handleLogoClick} style={{ cursor: 'pointer' }}>
          <img src="/logo.png" alt="Logo" className="logo-img" draggable={false} />
          <h1 className="enterprise-title">{startupName}</h1>
        </div>

        <div className={`nav-links${menuActive ? ' active' : ''}`}>
          {navSections.map((section) => (
            <a
              key={section}
              href={`#${sectionScrollMap[section] || section.toLowerCase()}`}
              onClick={(e) => {
                e.preventDefault();
                handleNavClick(section);
              }}
              className="nav-link"
              tabIndex={menuActive ? 0 : -1}
            >
              {t[section]}
            </a>
          ))}
        </div>
      </div>

      <div className="navbar-right" style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
        <div className="language-dropdown">
          <button
            className="language-button"
            onClick={toggleDropdown}
            title={t.language}
            aria-haspopup="listbox"
            aria-expanded={dropdownOpen}
            type="button"
          >
            <img src={flags[language]} alt={`${language} flag`} className="flag-icon" draggable={false} />
            {language.toUpperCase()}
            <span className={`dropdown-arrow${dropdownOpen ? ' open' : ''}`} aria-hidden="true">
              &#9662;
            </span>
          </button>

          {(dropdownOpen || isClosing) && (
            <ul
              className={`language-menu${dropdownOpen && !isClosing ? ' opening' : ''}${
                isClosing ? ' closing' : ''
              }`}
              role="listbox"
              tabIndex={-1}
            >
              {languageOptions.map(({ code, label }) => (
                <li
                  key={code}
                  role="option"
                  aria-selected={language === code}
                  className={language === code ? 'active' : ''}
                  onClick={() => handleLanguageChange(code)}
                  onKeyDown={(e) => {
                    if (e.key === 'Enter' || e.key === ' ') {
                      e.preventDefault();
                      handleLanguageChange(code);
                    }
                  }}
                  tabIndex={0}
                >
                  <img src={flags[code]} alt={`${label} flag`} className="flag-icon" draggable={false} />
                  {label}
                </li>
              ))}
            </ul>
          )}
        </div>

        <button
          className="nav-toggle"
          onClick={toggleMenu}
          aria-label={menuActive ? 'Close menu' : 'Open menu'}
          aria-expanded={menuActive}
          type="button"
        >
          {menuActive ? (
            <span className="close-icon" aria-hidden="true">
              &times;
            </span>
          ) : (
            <span className="menu-icon" aria-hidden="true">
              &#9776;
            </span>
          )}
        </button>
      </div>
    </nav>
  );
}
