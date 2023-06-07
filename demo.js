const fs = require("fs");
const jsonData = require("./src/data/recipe.json");
let json = {
  Srno: 1,
  RecipeName: "Masala Karela Recipe",
  TranslatedRecipeName: "Masala Karela Recipe",
  Ingredients:
    "6 Karela (Bitter Gourd/ Pavakkai) - deseeded,Salt - to taste,1 Onion - thinly sliced,3 tablespoon Gram flour (besan),2 teaspoons Turmeric powder (Haldi),1 tablespoon Red Chilli powder,2 teaspoons Cumin seeds (Jeera),1 tablespoon Coriander Powder (Dhania),1 tablespoon Amchur (Dry Mango Powder),Sunflower Oil - as required",
  TranslatedIngredients:
    "6 Karela (Bitter Gourd/ Pavakkai) - deseeded,Salt - to taste,1 Onion - thinly sliced,3 tablespoon Gram flour (besan),2 teaspoons Turmeric powder (Haldi),1 tablespoon Red Chilli powder,2 teaspoons Cumin seeds (Jeera),1 tablespoon Coriander Powder (Dhania),1 tablespoon Amchur (Dry Mango Powder),Sunflower Oil - as required",
  PrepTimeInMins: 15,
  CookTimeInMins: 30,
  TotalTimeInMins: 45,
  Servings: 6,
  Cuisine: "Indian",
  Course: "Side Dish",
  Diet: "Diabetic Friendly",
  Instructions:
    "To begin making the Masala Karela Recipe,de-seed the karela and slice. Do not remove the skin as the skin has all the nutrients. Add the karela to the pressure cooker with 3 tablespoon of water, salt and turmeric powder and pressure cook for three whistles. Release the pressure immediately and open the lids. Keep aside.Heat oil in a heavy bottomed pan or a kadhai. Add cumin seeds and let it sizzle.Once the cumin seeds have sizzled, add onions and saute them till it turns golden brown in color.Add the karela, red chilli powder, amchur powder, coriander powder and besan. Stir to combine the masalas into the karela.Drizzle a little extra oil on the top and mix again. Cover the pan and simmer Masala Karela stirring occasionally until everything comes together well. Turn off the heat.Transfer Masala Karela into a serving bowl and serve.Serve Masala Karela along with Panchmel Dal and Phulka for a weekday meal with your family. \n",
  TranslatedInstructions:
    "To begin making the Masala Karela Recipe,de-seed the karela and slice. Do not remove the skin as the skin has all the nutrients. Add the karela to the pressure cooker with 3 tablespoon of water, salt and turmeric powder and pressure cook for three whistles. Release the pressure immediately and open the lids. Keep aside.Heat oil in a heavy bottomed pan or a kadhai. Add cumin seeds and let it sizzle.Once the cumin seeds have sizzled, add onions and saute them till it turns golden brown in color.Add the karela, red chilli powder, amchur powder, coriander powder and besan. Stir to combine the masalas into the karela.Drizzle a little extra oil on the top and mix again. Cover the pan and simmer Masala Karela stirring occasionally until everything comes together well. Turn off the heat.Transfer Masala Karela into a serving bowl and serve.Serve Masala Karela along with Panchmel Dal and Phulka for a weekday meal with your family. ",
  URL: "https://www.archanaskitchen.com/masala-karela-recipe",
};

let cuisines = new Set();
let courses = new Set();
let diets = new Set();

jsonData.forEach((recipe) => {
  cuisines.add(recipe.Cuisine);
  courses.add(recipe.Course);
  diets.add(recipe.Diet);
});

cuisines = Array.from(cuisines);
courses = Array.from(courses);
diets = Array.from(diets);

fs.writeFileSync("./src/data/cuisines.json", JSON.stringify(cuisines, null, 4));
fs.writeFileSync("./src/data/courses.json", JSON.stringify(courses, null, 4));
fs.writeFileSync("./src/data/diets.json", JSON.stringify(diets, null, 4));
