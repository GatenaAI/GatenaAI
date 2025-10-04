import React from 'react';
import '../../styles/wallOfFame/wallOfFame.css';
import cat1 from '../../imgs/cat1.jpeg';
import cat2 from '../../imgs/cat2.jpeg';
import { useLanguage } from '../../context/LanguageContext';

const otherCats = [cat1, cat2];

export default function CatPostal() {
    const { t } = useLanguage();
    const usedPositions = [];

    const safeT = t || {
        wofTitle: '',
        wofCaption: '',
        wofCompanion: '',
    };

    const randomStyles = (index, total) => {
        const baseSize = Math.max(220 - total * 20, 140);
        let top = 0, left = 0;
        let attempts = 0;

        const checkCollision = (t, l) =>
            usedPositions.some(pos =>
                Math.abs(pos.top - t) < baseSize * 0.7 &&
                Math.abs(pos.left - l) < baseSize * 0.7
            );

        do {
            top = 8 + Math.random() * 85;
            left = Math.random() * 90;
            attempts++;
        } while (checkCollision(top, left) && attempts < 50);

        usedPositions.push({ top, left });

        return {
            top: `${top}%`,
            left: `${left}%`,
            width: `${baseSize}px`,
            height: `${baseSize}px`,
            transform: `rotate(${Math.random() * 40 - 20}deg)`,
            zIndex: 5,
        };
    };


    return (
        <section className="cat-postal-section">
            <div className="centerpiece-wrapper">
                <div className="postal-card">
                    <iframe
                        src="https://www.youtube.com/embed/FLb9EIiSyG8"
                        title={safeT.wofTitle}
                        frameBorder="0"
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                        allowFullScreen
                    ></iframe>
                    <div className="centerpiece-text">
                        <h3>{safeT.wofTitle}</h3>
                        <p>{safeT.wofCaption}</p>
                    </div>
                </div>
            </div>

            <div className="cats-area">
                <div className="cats-message">{safeT.wofCompanion}</div>
                {otherCats.map((img, index) => (
                    <img
                        key={index}
                        src={img}
                        alt={`cat ${index + 1}`}
                        className="cat-postal-img"
                        style={randomStyles(index, otherCats.length)}
                        loading="lazy"
                    />
                ))}
            </div>
        </section>
    );
}
