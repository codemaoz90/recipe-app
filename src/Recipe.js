import React from "react";
import style from "./recipe.module.css";
const Recipe = ({ image, calories, title, ingredients }) => {
  return (
    <div className={style.recipe}>
      <h1>{title}</h1>
      <ol>
        {ingredients.map((ingredient) => (
          <li>{ingredient.text}</li>
        ))}
      </ol>
      <p className={style.calories}>
        Calories: <span className={style.text}>{Math.round(calories)} cal</span>
      </p>
      <img className={style.image} src={image} alt="" />
    </div>
  );
};

export default Recipe;
