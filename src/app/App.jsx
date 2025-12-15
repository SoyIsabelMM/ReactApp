import '../components/header/Header.jsx';
import { useState } from 'react';
import Header from '../components/header/Header.jsx';
import ThemeToggle from '../components/themeToggle.jsx/ThemeToggle.jsx';
import IntroSection from '../components/introSection/IntroSection.jsx';
import CardGrid from '../components/cardGrid/CardGrid.jsx';
import ThemeCard from '../components/themeCard/ThemeCard.jsx';
import FeatureList from '../components/featureList/FeatureList.jsx';
import Footer from '../components/footer/Footer.jsx';

function App() {
  const [theme, setTheme] = useState('light');

  const toggleTheme = () => {
    setTheme((prevTheme) => (prevTheme === 'light' ? 'dark' : 'light'));
  };
  return (
    <>
      <main className="min-h-screen bg-white text-zinc-900">
        <Header>
          <ThemeToggle theme={theme} onToggle={toggleTheme} />
        </Header>
        <IntroSection />
        <CardGrid>
          <ThemeCard
            title="Componentes React"
            icon="🧩"
            description="Esta app está construida con múltiples componentes reutilizables: App, ThemeCard y ThemeToggle."
          />
          <ThemeCard
            title="Hook useState"
            icon="🪝"
            description="Usamos useState para mantener el estado del tema actual y actualizarlo cuando el usuario hace clic."
          />

          <ThemeCard
            title="CSS Condicional"
            icon="🎨"
            description="Los estilos cambian dinámicamente aplicando la clase 'dark' al contenedor principal según el estado."
          />
        </CardGrid>
        <FeatureList />
        <Footer />
      </main>
    </>
  );
}

export default App;
