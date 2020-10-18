import React from "react";
import { v4 as uuidv4 } from "uuid";

const RecipeInfo = ({ ingredients }) => {
  return ingredients.map((ingredient) => {
    return (
      <div>
        <ul className="ingredient-list" key={uuidv4}></ul>
        <li className="ingredient-text">{ingredient.text}</li>
        <li className="ingredient-weight">{ingredient.weight}</li>
      </div>
    );
  });
};

export default RecipeInfo;
