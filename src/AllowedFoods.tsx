import React, {useState} from 'react';
import {AllowedFood, Period, Portion, PortionUnit} from "./model";
import {randomId} from "./api";

const replaceFood = (foods: AllowedFood[], food: AllowedFood) => foods.map(f => f.id === food.id ? food : f);

type Props = {
    foods: AllowedFood[],
    onFoodsChanged: (foods: AllowedFood[]) => void
}

type NewFoodType = { name: string | null, portion: Portion, period: Period };

export default ({foods, onFoodsChanged}: Props) => {
    const defaultNewFood: NewFoodType = {
        name: null,
        portion: {amount: null, unit: "Table Spoon"},
        period: {amount: null, unit: "Day"}
    };
    const [newFood, setNewFood] = useState<NewFoodType>(defaultNewFood);

    const handleNameChanged = (food: AllowedFood) => (e: { target: { value: string } }) => {
        const name = e.target.value;
        if (name !== food.name)
            onFoodsChanged(replaceFood(foods, {...food, name: name}));
    };

    const handlePeriodChanged = (food: AllowedFood) => (e: { target: { value: string } }) => {
        const value = parseInt(e.target.value);
        if (value !== food.period?.amount)
            onFoodsChanged(replaceFood(foods, isNaN(value) ? {
                ...food,
                period: {...food.period, amount: null}
            } : {
                ...food,
                period: {amount: value, unit: "Day"}
            }));
    };

    const handlePortionAmountChanged = (food: AllowedFood) => (e: { target: { value: string } }) => {
        const value = parseInt(e.target.value);
        if (value !== food.portion?.amount)
            onFoodsChanged(replaceFood(foods, isNaN(value) ? {...food, portion: {...food.portion, amount: null}} : {
                ...food, portion: {
                    amount: value, unit: food.portion?.unit || "Table Spoon"
                }
            }));
    };

    const handlePortionUnitChanged = (food: AllowedFood) => (e: { target: { value: string } }) => {
        const value: PortionUnit = e.target.value as PortionUnit;
        if (value !== food.portion?.unit)
            onFoodsChanged(replaceFood(foods, {...food, portion: {amount: null, unit: value}}));
    };

    return (
        <>
            <h1>
                Allowed Foods
            </h1>
            <table>
                <thead>
                <tr>
                    <th>Food</th>
                    <th>Period</th>
                    <th>Portion</th>
                </tr>
                </thead>
                <tbody>
                {foods.map(f => (
                    <tr key={f.id}>
                        <td>
                            <input onChange={handleNameChanged(f)} value={f.name}/>
                        </td>
                        <td>
                            <input type="number" onChange={handlePeriodChanged(f)}
                                   value={f.period.amount || undefined}/>days
                        </td>
                        <td>
                            <input type="number" onChange={handlePortionAmountChanged(f)}
                                   value={f.portion.amount || undefined}/>
                            <select onChange={handlePortionUnitChanged(f)} value={f.portion?.unit}>
                                <option value="Table Spoon">Table Spoon</option>
                                <option value="Tea Spoon">Tea Spoon</option>
                                <option value="Drop">Drop</option>
                                <option value="Glass">Glass</option>
                            </select>
                        </td>
                        <td>
                            <button onClick={() => onFoodsChanged(foods.filter(ff => ff.name !== f.name))}>
                                Delete
                            </button>
                        </td>
                    </tr>))}
                <tr>
                    <td>
                        <input onChange={e => setNewFood({...newFood, name: e.target.value})}
                               value={newFood.name || undefined}/>
                    </td>
                    <td>
                        <input type="number" onChange={(e) => setNewFood({
                            ...newFood,
                            period: {amount: parseInt(e.target.value), unit: "Day"}
                        })} value={newFood.period.amount || undefined}/>days
                    </td>
                    <td>
                        <input type="number" onChange={(e) => setNewFood({
                            ...newFood,
                            portion: {amount: parseInt(e.target.value), unit: "Table Spoon"}
                        })} value={newFood.portion?.amount || undefined}/>
                        <select onChange={(e) => setNewFood({
                            ...newFood,
                            portion: {amount: newFood.portion?.amount || null, unit: e.target.value as PortionUnit}
                        })} value={newFood.portion?.unit}>
                            <option value="Table Spoon">Table Spoon</option>
                            <option value="Tea Spoon">Tea Spoon</option>
                            <option value="Drop">Drop</option>
                            <option value="Glass">Glass</option>
                        </select>
                    </td>
                    <td>
                        <button disabled={newFood.name === undefined}
                                onClick={() => {
                                    const name = newFood.name;
                                    if (name) {
                                        onFoodsChanged([...foods, {
                                            id: randomId(),
                                            name: name,
                                            period: newFood.period, portion: newFood.portion
                                        }]);
                                    }
                                    setNewFood(defaultNewFood);
                                }}>
                            Add
                        </button>
                    </td>
                </tr>
                </tbody>
            </table>
        </>
    );
}