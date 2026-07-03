import { useMemo, useState } from 'react';
import { GameButton } from './GameButton.jsx';

const initialPositions = {
  love: { left: 58, top: 44 },
  car: { left: 58, top: 44 },
};

function getNextPosition(current) {
  const left = 8 + Math.floor(Math.random() * 72);
  const top = 18 + Math.floor(Math.random() * 58);

  if (Math.abs(left - current.left) < 12 && Math.abs(top - current.top) < 12) {
    return {
      left: Math.max(8, Math.min(80, left + 22)),
      top: Math.max(18, Math.min(76, top + 18)),
    };
  }

  return { left, top };
}

export function HumorGame({ content }) {
  const [step, setStep] = useState('love');
  const [positions, setPositions] = useState(initialPositions);

  const question = step === 'love' ? content.loveQuestion : content.carQuestion;
  const noPosition = positions[step] ?? initialPositions.love;

  const moveNoButton = () => {
    setPositions((current) => ({
      ...current,
      [step]: getNextPosition(current[step] ?? initialPositions.love),
    }));
  };

  const handleYes = () => {
    setStep((current) => (current === 'love' ? 'car' : 'success'));
  };

  const sparkleStyles = useMemo(
    () =>
      Array.from({ length: 9 }, (_, index) => ({
        left: `${10 + ((index * 17) % 76)}%`,
        top: `${12 + ((index * 23) % 68)}%`,
        animationDelay: `${index * 90}ms`,
      })),
    [],
  );

  if (step === 'success') {
    return (
      <section className="game-panel game-success" aria-live="polite">
        <div className="success-media">
          <img src={content.finalGif} alt="Comemoracao animada" />
        </div>
        <h1>{content.finalTitle}</h1>
        <p>{content.finalMessage}</p>
        <GameButton onClick={() => setStep('love')}>Jogar de novo</GameButton>
      </section>
    );
  }

  return (
    <section className="game-panel" aria-live="polite">
      {sparkleStyles.map((style, index) => (
        <span aria-hidden="true" className="sparkle" key={index} style={style} />
      ))}
      <p className="eyebrow">Mini game oficial</p>
      <h1>{question}</h1>
      <div className="game-stage">
        <GameButton className="yes-button" onClick={handleYes}>
          {content.yes}
        </GameButton>
        <GameButton
          aria-label={`${content.no}, opcao brincalhona que muda de lugar`}
          className="no-button"
          onClick={moveNoButton}
          onFocus={moveNoButton}
          onMouseEnter={moveNoButton}
          onTouchStart={moveNoButton}
          style={{
            left: `${noPosition.left}%`,
            top: `${noPosition.top}%`,
          }}
        >
          {content.no}
        </GameButton>
      </div>
    </section>
  );
}
