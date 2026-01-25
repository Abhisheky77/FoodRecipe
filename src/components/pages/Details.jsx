import { useContext, useEffect } from "react";
import { useParams } from "react-router-dom";
import { GlobalContext } from "../Context";
import { Button } from "../ui/button";

function Details() {
  const { id } = useParams();
  const {
    recipeDetailsData,
    setRecipeDetailsData,
    handleAddToFavorites,
    favoritesList
  } = useContext(GlobalContext);

  useEffect(() => {
    async function getRecipeDetails() {
      const response = await fetch(
        `https://forkify-api.jonas.io/api/v2/recipes/${id}`
      );
      const data = await response.json();

      if (data?.data?.recipe) {
        setRecipeDetailsData(data.data.recipe);
      }
    }
    getRecipeDetails();
  }, [id]);

 
  if (!recipeDetailsData) {
    return (
      <div className="h-[60vh] flex items-center justify-center text-xl font-semibold">
        Loading recipe details...
      </div>
    );
  }

  return (
    <div className="container mx-auto py-12 px-4 grid grid-cols-1 lg:grid-cols-2 gap-12">
      
      <div>
        <div className="rounded-3xl shadow-xl overflow-hidden bg-white flex flex-col">
          <img
            src={recipeDetailsData.image_url}
            alt={recipeDetailsData.title}
            className="w-full h-[500px] object-cover"
          />

          <Button
            onClick={() => handleAddToFavorites(recipeDetailsData)}
            className="w-full h-13 rounded-none rounded-b-3xl bg-orange-500 py-4 text-white font-semibold hover:bg-orange-600 transition"
          >
               {
                favoritesList.findIndex(item=>item.id ===recipeDetailsData?.id) !== -1 ? 'Remove from favorites':'Add to favorites'
               } 
          </Button>
        </div>
      </div>

      <div className="flex flex-col gap-6 pr-4 no-scrollbar">
        <span className="text-sm uppercase tracking-wide text-cyan-600 font-semibold">
          {recipeDetailsData.publisher}
        </span>

        <h1 className="text-3xl lg:text-4xl font-bold text-gray-900">
          {recipeDetailsData.title}
        </h1>

        <div className="flex gap-5 text-sm text-gray-700">
          <span className="bg-gray-200 px-4 py-1 rounded-lg">
            Servings: {recipeDetailsData.servings}
          </span>
          <span className="bg-gray-200 px-4 py-1 rounded-lg">
            Time: {recipeDetailsData.cooking_time} min
          </span>
        </div>

        <div className="ml-5">
          <span className="text-2xl font-semibold text-black">
            Ingredients :
          </span>

          <ul className="flex flex-col gap-3 mt-3">
            {recipeDetailsData.ingredients?.map((ingredient, index) => (
              <li key={index}>
                <span className="text-lg font-semibold text-gray-900">
                  {ingredient.quantity} {ingredient.unit}
                </span>
                <span className="text-lg text-gray-900">
                  {" "}{ingredient.description}
                </span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Details;
