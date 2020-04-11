import React from 'react';
import {ConsumeEvent, FoodState} from "./model";

export default ({foodState: {allowedFoods, consumed}, onConsumeAdd}: { foodState: FoodState, onConsumeAdd: (e: ConsumeEvent) => void }) => {
    const consumedReverse = consumed.reverse();

    const foodsWithLastConsumed = allowedFoods.map(f => {
        const dateString: string | undefined = consumedReverse.find(e => e.foodId === f.id)?.date;
        const date: Date | undefined = dateString ? new Date(dateString) : undefined;
        const lastConsumed: Date = date || new Date(2020, 1, 1);
        const daysNotConsumed = Math.floor((new Date().getTime() - lastConsumed.getTime()) / 86400000);
        const daysOverdue = f.period.amount !== null && daysNotConsumed > f.period.amount ? daysNotConsumed - f.period.amount : undefined;

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
                    sortedFoods.map(f => (<tr key={f.id}>
                        <td>{f.name}</td>
                        <td>{f.daysOverdue}</td>
                        <td>{f.daysNotConsumed}</td>
                        <td>
                            <button onClick={() => {
                                onConsumeAdd({foodId: f.id, date: new Date().toDateString()})
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