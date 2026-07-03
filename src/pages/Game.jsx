import { HumorGame } from '../components/HumorGame.jsx';
import { siteContent } from '../data/siteContent.js';

export function Game() {
  return (
    <section className="section-wrap game-page">
      <HumorGame content={siteContent.game} />
    </section>
  );
}
