import { useContext, useState } from "react";
import { NavLink } from "react-router-dom";
import { GlobalContext } from "./Context";
import { IoSearchSharp } from "react-icons/io5";
import { GiFoodTruck } from "react-icons/gi";
import ScrollIndicator from "./Scroll_indicator";
function Navbar() {
  const { search, setSearch, handleSubmit,scrollValue,getScrollPercentage } = useContext(GlobalContext);
  

  return (
    <nav className="sticky top-0 z-50 backdrop-blur-md bg-white/80 border-b border-gray-200">
      <div className="max-w-7xl mx-auto px-6 py-4 flex flex-col md:flex-row md:items-center md:justify-between gap-4">
        
        <NavLink
          to="/"
          className=" flex flex-row text-2xl font-extrabold tracking-wide text-orange-600 hover:scale-105 transition"
        >
        FoodRecipe<GiFoodTruck size={30} />
        </NavLink>

        <form  onSubmit={handleSubmit} className="w-full md:max-w-md relative">
          <input
            type="text"
            placeholder="Search recipes..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            className="w-full px-5 py-2.5 rounded-full border border-gray-300 bg-white/90
            focus:outline-none focus:ring-2 focus:ring-orange-400 focus:border-orange-400
            placeholder:text-gray-400"
          />
          <button
            type="submit"
            className="absolute right-1 top-1 bottom-1 px-5 rounded-full
            bg-orange-500 text-white font-semibold hover:bg-orange-600 transition"
          >
            <IoSearchSharp size={20} />
          </button>
        </form>

        <ul className="flex gap-8 text-lg font-medium justify-center">
          {["/", "/favorites"].map((path, index) => (
            <li key={path}>
              <NavLink
                to={path}
                className={({ isActive }) =>
                  `relative transition ${
                    isActive
                      ? "text-orange-600 font-semibold"
                      : "text-gray-700 hover:text-orange-500"
                  }`
                }
              >
                {index === 0 ? "Home" : "Favorites"}
                <span className="absolute left-0 -bottom-1 h-[2px] w-0 bg-orange-500 transition-all duration-300 group-hover:w-full"></span>
              </NavLink>
            </li>
          ))}
        </ul>
      </div>
      <ScrollIndicator onScroll={getScrollPercentage}/>
      <div className="w-full h-1 bg-slate-200 overflow-hidden">
        <div
          className="h-full rounded-full transition-all duration-150 ease-out"
          style={{
            width: `${scrollValue}%`,
            background: "linear-gradient(90deg, #38bdf8, #0ea5e9)",
          }}
        />
      </div>
    </nav>
  );
}

export default Navbar;
