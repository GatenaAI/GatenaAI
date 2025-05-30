import React from 'react';
import PropTypes from 'prop-types';
import '../../styles/home/AboutUsSection.css';

export default function AboutUsSection({ t }) {
  return (
    <section id="aboutUs" className="about-section">
      <div className="about-container">
        <div className="about-left fade-in">
          <div className="about-left-inner">
            <h2 className="about-title">{t.aboutUs}</h2>
            <p className="about-description">{t.aboutContent}</p>
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
    aboutContent: PropTypes.string.isRequired,
    mission: PropTypes.string.isRequired,
    mission_goal: PropTypes.string.isRequired,
    mission_social: PropTypes.string.isRequired,
    vision: PropTypes.string.isRequired,
    vision_goal: PropTypes.string.isRequired,
    vision_social: PropTypes.string.isRequired,
  }).isRequired,
};
