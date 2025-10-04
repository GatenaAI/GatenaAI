import React from 'react';
import PropTypes from 'prop-types';
import { useLanguage } from '../../context/LanguageContext';
import { useNavigate } from 'react-router-dom';
import '../../styles/home/AboutUsSection.css';

export default function AboutUsSection({ t }) {
  const { language } = useLanguage();
  const navigate = useNavigate();

  const scrollMarginTop = language === 'de' ? '50px' : '90px';

  const handleWallOfFame = () => {
    navigate('/walloffame');
  };

  return (
    <section
      id="aboutUs"
      className="about-section"
      style={{ scrollMarginTop }}
    >
      <div className="about-container">
        <div className="about-left fade-in">
          <div className="about-left-inner">
            <h2 className="about-title">{t.aboutUs}</h2>
            <p className="about-description">{t.aboutContentOne}</p>
            <p className="about-description">{t.aboutContentTwo}</p>
            <p className="about-description">{t.aboutContentThree}</p>
            <button className="wallOfFame-btn" onClick={handleWallOfFame}>
              {t.wallOfFame}
            </button>
          </div>
        </div>

        <div className="about-right slide-in">
          <div className="about-block">
            <h3 className="block-title">{t.mission}</h3>
            <p>{t.mission_goal}</p>
            <p>{t.mission_social}</p>
          </div>
          <div className="about-block">
            <h3 className="block-title">{t.vision}</h3>
            <p>{t.vision_goal}</p>
            <p>{t.vision_social}</p>
          </div>
        </div>
      </div>
    </section>
  );
}

AboutUsSection.propTypes = {
  t: PropTypes.shape({
    aboutUs: PropTypes.string.isRequired,
    aboutContentOne: PropTypes.string.isRequired,
    aboutContentTwo: PropTypes.string.isRequired,
    aboutContentThree: PropTypes.string.isRequired,
    wallOfFame: PropTypes.string.isRequired,
    mission: PropTypes.string.isRequired,
    mission_goal: PropTypes.string.isRequired,
    mission_social: PropTypes.string.isRequired,
    vision: PropTypes.string.isRequired,
    vision_goal: PropTypes.string.isRequired,
    vision_social: PropTypes.string.isRequired,
  }).isRequired,
};
