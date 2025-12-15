import '../components/header/Header.jsx';
import { useEffect, useState } from 'react';
import Header from '../components/header/Header.jsx';
import ThemeToggle from '../components/themeToggle.jsx/ThemeToggle.jsx';
import IntroSection from '../components/introSection/IntroSection.jsx';
import CardGrid from '../components/cardGrid/CardGrid.jsx';
import ThemeCard from '../components/themeCard/ThemeCard.jsx';
import FeatureList from '../components/featureList/FeatureList.jsx';
import Footer from '../components/footer/Footer.jsx';

function App() {
  const [theme, setTheme] = useState(() => {
    const saved = localStorage.getItem('theme');

    if (saved) {
      return saved;
    }

    const prefersDark =
      window.matchMedia &&
      window.matchMedia('(prefers-color-scheme: dark)').matches;

    return prefersDark ? 'dark' : 'light';
  });

  const toggleClasses = (element, classes, isDark) => {
    element?.classList[isDark ? 'add' : 'remove'](...classes);
  };

  const applyToSelectors = (selectors, classes, isDark) => {
    selectors.forEach((selector) => {
      document.querySelectorAll(selector).forEach((el) => {
        el.classList[isDark ? 'add' : 'remove'](...classes);
      });
    });
  };

  useEffect(() => {
    const isDark = theme === 'dark';

    toggleClasses(
      document.querySelector('main'),
      ['dark:bg-zinc-900', 'dark:text-zinc-100'],
      isDark
    );
    toggleClasses(
      document.querySelector('code'),
      ['dark:bg-blue-900', 'dark:text-blue-100'],
      isDark
    );

    applyToSelectors(
      ['#card', '#two', '#three'],
      ['dark:border-white', 'dark:bg-gray-800', 'dark:text-white'],
      isDark
    );

    toggleClasses(
      document.getElementById('four'),
      ['dark:border-white', 'dark:bg-gray-800', 'dark:text-white'],
      isDark
    );

    applyToSelectors(['#four strong'], ['dark:text-white'], isDark);

    localStorage.setItem('theme', theme);
  }, [theme]);

  const toggleTheme = () => {
    setTheme(theme === 'light' ? 'dark' : 'light');
  };

  return (
    <main className="min-h-screen bg-white text-zinc-900 transition-colors duration-300 ">
      <Header>
        <ThemeToggle theme={theme} onToggle={toggleTheme} />
      </Header>
      <IntroSection />
      <CardGrid>
        <ThemeCard
          id="card"
          title="Componentes React"
          icon="🧩"
          description="Esta app está construida con múltiples componentes reutilizables: App, ThemeCard y ThemeToggle."
        />
        <ThemeCard
          id="two"
          title="Hook useState"
          icon="🪝"
          description="Usamos useState para mantener el estado del tema actual y actualizarlo cuando el usuario hace clic."
        />

        <ThemeCard
          id="three"
          title="CSS Condicional"
          icon="🎨"
          description="Los estilos cambian dinámicamente aplicando la clase 'dark' al contenedor principal según el estado."
        />
      </CardGrid>
      <FeatureList id="four" />
      <Footer />
    </main>
  );
}

export default App;
