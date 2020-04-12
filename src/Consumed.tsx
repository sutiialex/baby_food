import React from 'react';
import {ConsumeEvent, FoodId, FoodState} from "./model";

export default ({foodState: {consumed, allowedFoods}, onDeleteEvent}: { foodState: FoodState, onDeleteEvent: (e: ConsumeEvent) => void }) => {
    const findFoodById = (foodId: FoodId) => allowedFoods.find(f => f.id === foodId)?.name;

    const sortedConsumed = consumed.sort((a, b) => {
        const d1: Date = new Date(a.date);
        const d2: Date = new Date(b.date);
        return d1 > d2 ? 1 : (d1 < d2 ? (-1) : 0);
    }).reverse();

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
                    sortedConsumed.map((c, i) => (<tr key={i}>
                        <td>{findFoodById(c.foodId)}</td>
                        <td>{c.date}</td>
                        <td>
                            <button onClick={() => onDeleteEvent(c)}>Delete</button>
                        </td>
                    </tr>))
                }
                </tbody>
            </table>
        </>
    );
}