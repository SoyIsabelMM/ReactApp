export default function ThemeToggle({ theme, onToggle }) {
  return (
    <button
      onClick={onToggle}
      className="flex items-center gap-2 px-4 py-2 bg-sky-600 text-white rounded-lg font-medium hover:opacity-90 transition-opacity focus:outline-none focus:ring-2 focus:ring-sky-700 focus:ring-offset-2"
      aria-label={`toggle theme to ${theme === 'light' ? 'dark' : 'light'}`}
    >
      <span className="text-xl">{theme === 'light' ? '🌙' : '☀️'}</span>
      <span>{theme === 'light' ? 'Modo Oscuro' : 'Modo Claro'}</span>
    </button>
  );
}
