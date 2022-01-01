db.recipes.insert([
  {
    recipe_title: "Dutch Baby Pancakes",
    author: "Lauren Allen",
    food_type: "Breakfast",
    cuisine: "German",
    main_ingredients: ["eggs", "milk", "flour"],
    all_ingredients: ["6 large eggs", "1 cup milk", "1 cup all-purpose flour", "dash salt", "1 teaspoon vanilla extract", "5 Tablespoons butter"],
    url: "https://tastesbetterfromscratch.com/german-pancakes-2/",
    diet_restrictions: {
      dairy_free: false,
      vegan: false,
      gluten_free: false,
      low_sodium: true,
      high_protein: false,
      keto: false,
      vegetarian: true,
      pescatarian: true,
      drsebi_supported: false,
    },
    nutritional_info: {
      servings: 5,
      calories: "300 kcal",
      fat: "18 g",
      saturated_fat: "9 g",
      cholesterol: "231 mg",
      sodium: "197 mg",
      carbs: "21 g",
      fiber: "3g",
      protein: "10g",
      sugar: "2g",
      nutrients: ["potassium 164 mg", "calcium 92 mg"],
    },
    occasion: "brunch",
    way_of_cooking: "baked",
    time: {
      prep: "5",
      cook: "25",
      total: "30",
    },
  },
  {
    recipe_title: 'Sesame Sriracha Buddha Bowl',
    author: 'Lindsay',
    food_type: 'Lunch or Dinner',
    cuisine: 'Asian',
    main_ingredients: ['black rice', 'tofu', 'kale'],
    all_ingredients: {
      base: ['1 cup black rice', '1 1/2 cups water'],
      sesame_kale: ['3 large ribs curly kale', '2 teaspoons toasted sesame oil', '1/2 teaspoon McCormick Gourmet™ Sicilian Sea Salt', '1 teaspoon McCormick Gourmet™ Toasted Sesame Seeds'],
      sesame_sriracha_vinaigrette: ['2 tablespoons rice vinegar', '4 teaspoons low-sodium soy sauce', '2 teaspoons toasted sesame oil', '1 teaspoon McCormick Gourmet™ Sriracha Seasoning', '1/4 cup grapeseed or light olive oil'],
      assembly: ['1 cup frozen shelled edamame', '8 ounces baked tofu', '1/2 English seedless cucumber', '1 avocado', 'additional McCormick Gourmet™ Toasted Sesame Seeds']
    },
    url: 'https://www.loveandoliveoil.com/2016/05/sesame-sriracha-buddha-bowls.html',
    diet_restrictions: {
      dairy_free: true,
      vegan: true,
      gluten_free: false,
      low_sodium: false,
      high_protein: true,
      keto: false,
      vegetarian: true,
      pescatarian: true,
      drsebi_supported: false,
    },
    nutritional_info: {
      servings: 4,
      calories: '488 kcal',
      fat: '38 g',
      saturated_fat: '2 g',
      cholesterol: '5 mg',
      sodium: '645 mg',
      carbs: '32 g',
      fiber: '14g',
      protein: '20g',
      sugar: '4g',
      nutrients: ['vitamin b-6 114%', 'vitamin k 139%', 'magnesium 104%', 'phosphorus 112%', 'manganese 316%'],
    },
    occasion: 'brunch',
    way_of_cooking: 'multi-process',
    time: {
      prep: '20',
      cook: '40',
      total: '60',
    },
  },
]);
