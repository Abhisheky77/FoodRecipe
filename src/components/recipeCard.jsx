import { Link } from "react-router-dom";

function RecipeCard({ item }) {
  const { image_url, publisher, title, id } = item;

  return (
    <div
      className="w-full sm:w-[280px]  md:w-[300px]  h-[320px] bg-white rounded-3xl shadow-lg hover:shadow-2xl hover:-translate-y-1 transition-allduration-300 grid grid-rows-[200px_1fr]" >
      <img src={image_url} alt="recipe item" className="w-full h-full object-cover rounded-t-3xl p-3" />

      <div className="grid grid-rows-[auto_auto_1fr] px-4 pb-4">
        <span className="text-xs uppercase text-cyan-700 font-semibold">
          {publisher}
        </span>

        <h1 className="text-sm font-bold text-gray-900 line-clamp-2">
          {title}
        </h1>

        <Link to={`/details/${id}`}
          className="self-end text-center text-sm font-semibold text-white bg-orange-500 py-2 rounded-xl hover:bg-orange-600 transition"
        >
          Recipe Details
        </Link>
      </div>
    </div>
  );
}

export default RecipeCard;
