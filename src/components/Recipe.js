import React, { useState } from "react";
import RecipeInfo from "./RecipeInfo";

const Recipe = ({ recipe }) => {
  const [show, setShow] = useState(false);
  const { label, image, url, ingredients } = recipe.recipe;

  return (
    <div className="recipe">
      <h2>{label}</h2>
      <img src={image} alt={label} />
      <a href={url} target="_blank" rel="noopener noreferrer">
        URL
      </a>
      <button onClick={() => setShow(!show)}>ingredients</button>
      {show && <RecipeInfo ingredients={ingredients} />}
    </div>
  );
};

export default Recipe;

//rafce
