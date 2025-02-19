import React, { useEffect, useState } from "react";
import { getFoods } from "../api/api";

const Menu = () => {
    const [foods, setFoods] = useState([]);

    useEffect(() => {
        getFoods().then(setFoods);
    }, []);

    return (
        <div>
            <h1>Menu</h1>
            <ul>
                {foods.map(food => (
                    <li key={food.id}>{food.name} - ${food.price}</li>
                ))}
            </ul>
        </div>
    );
};

export default Menu;
