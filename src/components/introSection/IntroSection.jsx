export default function IntroSection() {
  return (
    <section className="max-w-6xl mx-auto px-4 sm:px-6 lg:px8 pt-12">
      <div className="text-center mb-12">
        <h2 className="text-4xl font-bold mb-4 text-balance">
          Aprende React con Componentes y Estados
        </h2>

        <p className="text-xl text-gray-500 max-w-2xl mx-auto text-pretty">
          Esta aplicación demuestra{' '}
          <code className="px-2 py-1 bg-gray-200 rounded text-blue-600 font-mono text-sm ">
            usesState
          </code>{' '}
          para manejar el estado y aplicar estilos condicionales
        </p>
      </div>
    </section>
  );
}
