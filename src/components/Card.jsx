export default function Card({ name, image }) {
  return (
    <>
      <div className="max-w-sm rounded-xl bg-white overflow-hidden shadow-lg hover:scale-105 transition-all ease-in-out">
        <img className="w-full p-5" src={image} alt="Imagen" />
        <div className="px-6 py-4">
          <div className="font-bold text-xl mb-2 text-center">{name}</div>
        </div>
      </div>
    </>
  );
}
