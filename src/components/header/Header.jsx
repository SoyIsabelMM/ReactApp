export default function Header({ children }) {
  return (
    <header className="border-b border-zinc-300 ">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-4 flex justify-between items-center">
        <div>
          <h1 className="text-2xl font-bold font-sans">Cambiador de tema</h1>
          <p className="text-s text-zinc-400 ">Proyecto educativo react</p>
        </div>
        {children}
      </div>
    </header>
  );
}
