import { siteContent } from '../data/siteContent.js';

const particles = Array.from({ length: 22 }, (_, index) => ({
  id: index,
  left: `${(index * 4.5 + 2) % 100}%`,
  top: `${(index * 6.7 + 5) % 100}%`,
  size: 2 + (index % 4),
  delay: `${(index * 0.4) % 4}s`,
  duration: `${3 + (index % 5)}s`,
  color: index % 3 === 0 ? '#9f0000' : index % 3 === 1 ? '#b48478' : '#3d1010',
}));

export function Home() {
  const { graduate, declarations } = siteContent;

  return (
    <>
      <section className="figma-hero">
        {particles.map((particle) => (
          <span
            aria-hidden="true"
            className="hero-particle"
            key={particle.id}
            style={{
              left: particle.left,
              top: particle.top,
              width: particle.size,
              height: particle.size,
              backgroundColor: particle.color,
              animationDelay: particle.delay,
              animationDuration: particle.duration,
            }}
          />
        ))}
        <span aria-hidden="true" className="hero-line" />
        <div className="figma-hero-content reveal-up">
          <p className="figma-kicker">
            Formatura {graduate.year} · {graduate.course}
          </p>
          <h1>{graduate.name}</h1>
          <div className="hero-divider" />
          <p className="hero-quote">{graduate.heroQuote}</p>
          <p className="hero-university">{graduate.university}</p>
        </div>
        <a className="scroll-cue" href="#declaracoes">
          <span>Rolar</span>
          <i aria-hidden="true" />
        </a>
      </section>

      <section className="declarations-section" id="declaracoes">
        <div className="section-inner">
          <div className="section-title reveal-up">
            <p className="figma-kicker">do fundo do coração</p>
            <h2>Declarações</h2>
          </div>
          <div className="declaration-grid">
            {declarations.map((declaration, index) => (
              <article
                className="declaration-card reveal-up"
                key={declaration.title}
                style={{ animationDelay: `${index * 90}ms` }}
              >
                <span aria-hidden="true" className="corner-line corner-line-x" />
                <span aria-hidden="true" className="corner-line corner-line-y" />
                <div className="declaration-icon">{declaration.icon}</div>
                <h3>{declaration.title}</h3>
                <p>{declaration.text}</p>
                <strong>{declaration.author}</strong>
              </article>
            ))}
          </div>
          <div className="love-note">
            <span aria-hidden="true" />
            <b>♥</b>
            <span aria-hidden="true" />
          </div>
          <p className="final-note">Te amo demais, Letícia!</p>
          <div className="declarations-actions reveal-up">
            <a className="gallery-cta" href="/fotos">
              Ver fotos
            </a>
          </div>
        </div>
      </section>
    </>
  );
}
