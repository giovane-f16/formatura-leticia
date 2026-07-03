import { useEffect, useState } from 'react';

const navIcons = {
  '/': (
    <svg aria-hidden="true" viewBox="0 0 24 24">
      <path d="m3 11 9-8 9 8" />
      <path d="M5 10v10h14V10" />
      <path d="M9 20v-6h6v6" />
    </svg>
  ),
  '/fotos': (
    <svg aria-hidden="true" viewBox="0 0 24 24">
      <path d="M14.5 4h-5L8 7H5a2 2 0 0 0-2 2v9a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V9a2 2 0 0 0-2-2h-3l-1.5-3Z" />
      <circle cx="12" cy="13" r="3" />
    </svg>
  ),
  '/jogo': (
    <svg aria-hidden="true" viewBox="0 0 24 24">
      <rect x="3" y="8" width="18" height="12" rx="2" />
      <path d="M8 8V6a4 4 0 0 1 8 0v2" />
      <path d="M8 14h4" />
      <path d="M10 12v4" />
      <path d="M16.5 13.5h.01" />
      <path d="M18.5 16.5h.01" />
    </svg>
  ),
};

export function Navigation({ items, siteName }) {
  const currentPath = window.location.pathname;
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 40);

    handleScroll();
    window.addEventListener('scroll', handleScroll, { passive: true });

    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header className={isScrolled ? 'site-header site-header-scrolled' : 'site-header'}>
      <div className="site-header-inner">
        <a className="brand" href="/" aria-label={`${siteName} - inicio`}>
          {siteName}
        </a>
        <nav className="nav-links" aria-label="Navegacao principal">
          {items.map((item) => (
            <a
              aria-current={currentPath === item.href ? 'page' : undefined}
              href={item.href}
              key={item.href}
            >
              {navIcons[item.href]}
              <span>{item.label}</span>
            </a>
          ))}
        </nav>
      </div>
    </header>
  );
}
