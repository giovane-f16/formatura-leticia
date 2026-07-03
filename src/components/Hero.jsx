import { CallToAction } from './CallToAction.jsx';

export function Hero({ content, photo }) {
  return (
    <section className="hero-section section-wrap">
      <div className="hero-copy">
        <p className="eyebrow">{content.eyebrow}</p>
        <h1>{content.title}</h1>
        <p className="hero-intro">{content.intro}</p>
        <div className="hero-actions" aria-label="Acoes principais">
          <CallToAction href="/fotos">Ver fotos</CallToAction>
          <CallToAction href="/jogo" variant="secondary">
            Jogar agora
          </CallToAction>
        </div>
      </div>
      <figure className="hero-photo">
        <img src={photo.src} alt={photo.alt} />
        <figcaption>{photo.title}</figcaption>
      </figure>
    </section>
  );
}
