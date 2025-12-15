export default function ThemeCard({ title, description, icon }) {
  return (
    <section
      id="card"
      className=" bg-gray-200 border   text-black border-zinc-300 rounded-lg p-6 hover:shadow-lg "
    >
      <div className="text-4xl mb-4"> {icon} </div>
      <h3 className="text-xl font-bold mb-2"> {title} </h3>
      <p className="text-pretty text-gray-500 "> {description} </p>
    </section>
  );
}
