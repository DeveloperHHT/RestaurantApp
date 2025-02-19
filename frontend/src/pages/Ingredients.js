import React, { useEffect, useState } from "react";
import { getIngredients } from "../api/api";

const Ingredients = () => {
    const [ingredients, setIngredients] = useState([]);

    useEffect(() => {
        getIngredients().then(setIngredients);
    }, []);

    return (
        <div>
            <h1>Ingredients</h1>
            <ul>
                {ingredients.map(ingredient => (
                    <li key={ingredient.id}>{ingredient.name} - {ingredient.stockQuantity} adet</li>
                ))}
            </ul>
        </div>
    );
};

export default Ingredients;
