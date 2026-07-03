import { siteContent } from '../data/siteContent.js';
import { Navigation } from './Navigation.jsx';

export function Layout({ children }) {
  return (
    <div className="app-shell">
      <Navigation items={siteContent.nav} siteName={siteContent.siteName} />
      <main>{children}</main>
      <footer className="site-footer">
        <p>Feito por Giovane para celebrar Leticia.</p>
      </footer>
    </div>
  );
}
