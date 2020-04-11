import React from 'react';
import {FoodId, FoodState} from "./model";

export default ({foodState: {consumed, allowedFoods}}: { foodState: FoodState }) => {
    const findFoodById = (foodId: FoodId) => allowedFoods.find(f => f.id === foodId)?.name;

    return (
        <>
            <h1>Consumed:</h1>
            <table>
                <thead>
                <tr>
                    <th>Food</th>
                    <th>Date</th>
                </tr>
                </thead>
                <tbody>
                {
                    consumed.reverse().map(c => (<tr key={c.date + c.foodId}>
                        <td>{findFoodById(c.foodId)}</td>
                        <td>{c.date}</td>
                    </tr>))
                }
                </tbody>
            </table>
        </>
    );
}