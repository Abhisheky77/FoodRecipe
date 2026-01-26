import { createContext, useState } from "react";
import { useNavigate } from "react-router-dom";

export const GlobalContext = createContext(null);

export default function GlobalState({ children }) {
  const [search, setSearch] = useState("");
  const [loading, setLoading] = useState(false);
  const [recipeList, setRecipeList] = useState([]);
  const [recipeDetailsData, setRecipeDetailsData] = useState(null);
  const [favoritesList, setFavoritesList] = useState([]);

  const navigate = useNavigate();

  /* 🔍 SEARCH HANDLER */
  async function handleSubmit(event) {
    event.preventDefault();
    setLoading(true);

    try {
      const res = await fetch(
        `https://forkify-api.jonas.io/api/v2/recipes?search=${search}`
      );
      const data = await res.json();

      if (data?.data?.recipes) {
        setRecipeList(data.data.recipes);
        navigate("/");
      } else {
        setRecipeList([]);
      }
    } catch (e) {
      console.log(e);
      
    } finally {
      setLoading(false);
      setSearch("");
    }
  }

  /*  FAVORITES HANDLER */
  function handleAddToFavorites(getCurrentItem) {
    let cpyFavoritesList = [...favoritesList];

    const index = cpyFavoritesList.findIndex(
      (item) => item.id === getCurrentItem.id
    );

    if (index === -1) {
      cpyFavoritesList.push(getCurrentItem); // add
    } else {
      cpyFavoritesList.splice(index, 1); // remove
    }

    setFavoritesList(cpyFavoritesList);
  }

  return (
    <GlobalContext.Provider
      value={{
        search,
        setSearch,
        loading,
        recipeList,
        recipeDetailsData,
        setRecipeDetailsData,
        favoritesList,
        handleSubmit,
        handleAddToFavorites,
      }}
    >
      {children}
    </GlobalContext.Provider>
  );
}
