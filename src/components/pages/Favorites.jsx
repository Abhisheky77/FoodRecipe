import { useContext } from "react";
import { GlobalContext } from "../Context";
import RecipeCard from "../recipeCard";

function Favorites() {
  const { favoritesList } = useContext(GlobalContext);

  return (
    <div className="min-h-[70vh] py-10 max-w-7xl mx-auto px-4">
      
      {favoritesList && favoritesList.length > 0 ? (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-10 place-items-center">
          {favoritesList.map((item) => (
            <RecipeCard key={item.id} item={item} />
          ))}
        </div>
      ) : (
        <div className="flex justify-center items-center h-[50vh]">
          <p className="text-xl md:text-3xl lg:text-4xl font-semibold text-gray-600 text-center">
            Nothing added to favorites.
          </p>
        </div>
      )}
      
    </div>
  );
}
export default Favorites;
