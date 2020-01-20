import React, { useState } from 'react';
import Select from 'react-select';
import { recipeOptions } from './data';

export default function App() {
  const [recipe, setRecipe] = useState();

  function handleOnChangeClick(value) {
    setRecipe(value);
  }

  return (
    <div>
      <Select
        isClearable
        isSearchable
        name="recipes"
        options={recipeOptions}
        onChange={handleOnChangeClick}
      />
      {recipe && (
        <div>
          <h1>{recipe.label}</h1>
          <p>
            <b>Description:</b> &nbsp;
            {recipe.description}
          </p>
          <img src={recipe.image} alt="" className="image" />
          <p>
            <b>Ingredient:</b>
            <ol>
              {recipe.ingredient.map((ingredient, index) => (
                <li
                  key={index}
                >{`${ingredient.amount} ${ingredient.unit} of ${ingredient.label}`}</li>
              ))}
            </ol>
          </p>
        </div>
      )}
    </div>
  );
}
