export default function FeatureList() {
  const projectFeature = [
    {
      title: 'HTML Semántico',
      description:
        'Uso de etiquetas header, main, section para estructura clara',
    },
    {
      title: 'CSS Moderno',
      description:
        'Tailwind CSS con variables personalizadas y transiciones suaves',
    },
    {
      title: 'Responsive Design',
      description: 'Diseño adaptable para móvil, tablet y desktop',
    },
    {
      title: 'Interactividad',
      description: 'Cambio de tema instantáneo con feedback visual',
    },
  ];
  return (
    <section className=" bg-gray-200 border   border-zinc-300 rounded-lg p-8 my-12 mx-5 hover:shadow-lg">
      <h3 className="text-2xl font-bold mb-6 text-black ">
        Características del Proyecto
      </h3>
      <ul className="space-y-3">
        {projectFeature.map((feature, index) => (
          <li key={feature.title} className="flex items-start gap-3">
            <span className="text-blue-900 text-xl">✓</span>
            <span className=" text-gray-500">
              <strong className="text-black">{feature.title}:</strong>{' '}
              {feature.description}
            </span>
          </li>
        ))}
      </ul>
    </section>
  );
}
