import { Layout } from '../components/Layout.jsx';
import { Home } from '../pages/Home.jsx';
import { Photos } from '../pages/Photos.jsx';
import { Game } from '../pages/Game.jsx';

const routes = {
  '/': Home,
  '/fotos': Photos,
  '/jogo': Game,
};

function getCurrentPage() {
  return routes[window.location.pathname] ?? Home;
}

export default function App() {
  const Page = getCurrentPage();

  return (
    <Layout>
      <Page />
    </Layout>
  );
}
