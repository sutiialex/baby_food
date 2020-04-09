import React from 'react';
import {AllowedFood, ConsumeEvent} from "./model";

export default ({allowedFoods, consumed, onConsumeAdd}: { allowedFoods: AllowedFood[], consumed: ConsumeEvent[], onConsumeAdd: (e: ConsumeEvent) => void }) => {
    const consumedReverse = consumed.reverse();

    const foodsWithLastConsumed = allowedFoods.map(f => {
        const lastConsumed: Date = consumedReverse.find(e => e.food === f.name)?.date || new Date(2020, 1, 1);
        console.log(lastConsumed.toDateString());
        console.log(new Date().getTime());
        const daysNotConsumed = Math.floor((new Date().getTime() - lastConsumed.getTime()) / 86400000);
        console.log(daysNotConsumed);
        const daysOverdue = f.period !== undefined && daysNotConsumed > f.period.amount ? daysNotConsumed - f.period.amount : undefined;

        return {
            ...f,
            daysNotConsumed,
            daysOverdue
        }
    });

    const sortedFoods = foodsWithLastConsumed.sort((f1, f2) => {
        if (f1.daysOverdue !== undefined && f2.daysOverdue !== undefined)
            return f2.daysOverdue - f1.daysOverdue;
        if (f1.daysOverdue !== undefined)
            return -1;
        if (f2.daysOverdue !== undefined)
            return 1;
        return f2.daysNotConsumed - f1.daysNotConsumed;
    });

    return (
        <>
            <h1>Next up:</h1>
            <table>
                <thead>
                <tr>
                    <th>Food</th>
                    <th>Days Overdue</th>
                    <th>Days not consumed</th>
                </tr>
                </thead>
                <tbody>
                {
                    sortedFoods.map(f => (<tr key={f.name}>
                        <td>{f.name}</td>
                        <td>{f.daysOverdue}</td>
                        <td>{f.daysNotConsumed}</td>
                        <td>
                            <button onClick={() => {
                                onConsumeAdd({food: f.name, date: new Date()})
                            }}>Consumed today
                            </button>
                        </td>
                    </tr>))
                }
                </tbody>
            </table>
        </>
    );
}