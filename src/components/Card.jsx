export default function Card({ name, url, description, image }) {
  return (
    <div className="max-w-sm bg-slate-900 hover:shadow-cyan-100/20 p-10 rounded-xl overflow-hidden hover:shadow-lg transition-all ease-in-out duration-200">
      <div className="px-6 py-4">
        <div className="flex-col items-center font-bold text-xl mb-2 flex justify-center">
          {name}
          <img className="rounded-xl my-5" src={image} alt={name} />
        </div>
        <p className="text-gray-500 text-base">{description}</p>
      </div>
      <div className="flex justify-center">
        <button className="text-amber-400 font-bold py-2 px-4 rounded-lg shadow-md hover:bg-slate-800">
          <a target="_blank" href={url}>
            Visit Me
          </a>
        </button>
      </div>
    </div>
  );
}
