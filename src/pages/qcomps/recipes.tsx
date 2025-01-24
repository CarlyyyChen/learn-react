// interface for a single recipe
interface Recipe {
  id: string;
  name: string;
  ingredients: Set<string>;
}

// interface for ingredient list props
interface IngredientListProps {
  ingredients: string[];
}

// interface for recipe list item props
interface RecipeListItemProps {
  recipes: Recipe[];
}

export const recipes: Recipe[] = [
  {
    id: "greek-salad",
    name: "Greek Salad",
    ingredients: new Set(["tomatoes", "cucumber", "onion", "olives", "feta"]),
  },
  {
    id: "hawaiian-pizza",
    name: "Hawaiian Pizza",
    ingredients: new Set([
      "pizza crust",
      "pizza sauce",
      "mozzarella",
      "ham",
      "pineapple",
    ]),
  },
  {
    id: "hummus",
    name: "Hummus",
    ingredients: new Set([
      "chickpeas",
      "olive oil",
      "garlic cloves",
      "lemon",
      "tahini",
    ]),
  },
];

function IngredientList({ ingredients }: IngredientListProps) {
  const listItems = ingredients.map((ingredient) => (
    <li key={ingredient}>{ingredient}</li>
  ));
  return <ul>{listItems}</ul>;
}

function RecipeListItem({ recipes }: RecipeListItemProps) {
  const listItems = recipes.map((recipe) => (
    <li key={recipe.id}>
      <h2>{recipe.name}</h2>
      <IngredientList ingredients={Array.from(recipe.ingredients)} />
    </li>
  ));
  return <ul>{listItems}</ul>;
}

export default function RecipeList() {
  return (
    <div>
      <h1>Recipes</h1>
      <RecipeListItem recipes={recipes} />
    </div>
  );
}
