import '../components/header/Header.jsx';
import { useState } from 'react';
import Header from '../components/header/Header.jsx';
import ThemeToggle from '../components/themeToggle.jsx/ThemeToggle.jsx';

function App() {
  const [theme, setTheme] = useState('light');

  const toggleTheme = () => {
    setTheme((prevTheme) => (prevTheme === 'light' ? 'dark' : 'light'));
  };
  return (
    <div>
      <main className="min-h-screen bg-white text-zinc-900">
        <Header>
          <ThemeToggle theme={theme} onToggle={toggleTheme} />
        </Header>
      </main>
    </div>
  );
}

export default App;
