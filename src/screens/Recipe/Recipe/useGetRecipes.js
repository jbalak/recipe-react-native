import { useEffect, useState } from "react";
import recipeJson from "../../../data/recipe.json";
recipeJson.length = 10;

const useGetRecipes = (recipeId) => {
  const [recipes, setRecipes] = useState([]);
  useEffect(() => {
    if (recipeId) {
      let recipe = recipeJson.find((recipe) => recipe.Srno == recipeId);
      setRecipes([recipe]);
    } else setRecipes(recipeJson);
  }, [recipeId]);
  return recipes;
};

export default useGetRecipes;
