import React, {useState} from 'react';
import {ConsumeEvent, FoodId, FoodState} from "./model";

export default ({foodState: {consumed, allowedFoods}, onDeleteEvent}: { foodState: FoodState, onDeleteEvent: (e: ConsumeEvent) => void }) => {
    const [showAll, setShowAll] = useState(false);

    const findFoodById = (foodId: FoodId) => allowedFoods.find(f => f.id === foodId)?.name;

    const sortedConsumed = consumed.sort((a, b) => {
        const d1: Date = new Date(a.date);
        const d2: Date = new Date(b.date);
        return d1 > d2 ? 1 : (d1 < d2 ? (-1) : 0);
    }).reverse();

    const firstConsumed = showAll ? sortedConsumed : sortedConsumed.slice(0, 20);

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
                    firstConsumed.map((c, i) => (<tr key={i}>
                        <td>{findFoodById(c.foodId)}</td>
                        <td>{c.date}</td>
                        <td>
                            <button onClick={() => onDeleteEvent(c)}>Delete</button>
                        </td>
                    </tr>))
                }
                </tbody>
            </table>
            <button onClick={() => setShowAll(!showAll)}>{showAll ? "Show less" : "Show all"}</button>
        </>
    );
}