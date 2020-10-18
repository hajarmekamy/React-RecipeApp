import React, { useState } from "react";
import Axios from "axios";
import "./App.css";
import Recipe from "./components/Recipe";
import { v4 as uuidv4 } from "uuid";

export default function App() {
  const [query, setQuery] = useState("");
  const [recipes, setRecipes] = useState([]);

  const APP_ID = "7b97805e";
  const APP_KEY = "74ce1cf748252dd568e79c874f3fe890	";

  const url = `https://api.edamam.com/search?q=${query}&app_id=${APP_ID}&app_key=${APP_KEY}`;

  const getData = async () => {
    const dataResult = await Axios.get(url);
    setRecipes(dataResult.data.hits);
    console.log(dataResult);
    setQuery("");
  };

  const onChange = (e) => setQuery(e.target.value);

  const onSubmit = (e) => {
    e.preventDefault();
    getData();
  };

  return (
    <div className="App">
      <h1>Find your recept</h1>
      <form alert={alert} onSubmit={onSubmit} className="submit-form">
        <input
          type="text"
          id="input"
          name="query"
          onChange={onChange}
          value={query}
        />
        <button type="submit" id="search">
          <b>SEARCH</b>
        </button>
      </form>
      <div className="recipes">
        {recipes !== [] &&
          recipes.map((recipe) => <Recipe key={uuidv4()} recipe={recipe} />)}
      </div>
    </div>
  );
}
