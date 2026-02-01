import { useContext } from "react"
import { GlobalContext } from "../Context"
import RecipeCard from "../recipeCard";
import {ThreeDots } from "react-loader-spinner";

function Home() {
    const { recipeList, loading } = useContext(GlobalContext)
    console.log("recipeList", recipeList);

    if (loading) {
  return (
    <div className="flex items-center justify-center min-h-[60vh]">
     <span className="flex items-center gap-3 text-3xl font-bold text-orange-600">
  Loading
  <ThreeDots height={32} width={64} color="#ea580c" ariaLabel="loading"/>
</span>
    </div> );
}
    return (
        <div className="py-8 max-w-7xl mx-auto px-4 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-10">
            {
                recipeList && recipeList.length > 0 ?
                    recipeList.map((item) => <RecipeCard key={item.id} item={item} />)
                    : <div className="col-span-full flex justify-center items-center">
                        <p className="text-xl lg:text-4xl font-semibold whitespace-nowrap text-center">
                            Nothing to show. please search something
                        </p>
                    </div>

            }
        </div>
    )
}
export default Home