import React, {useState} from 'react';
import {AllowedFood, PortionUnit} from "./model";

const replaceFood = (foods: AllowedFood[], food: AllowedFood) => foods.map(f => f.name === food.name ? food : f);

type Props = {
    foods: AllowedFood[],
    onFoodsChanged: (foods: AllowedFood[]) => void
}

export default ({foods, onFoodsChanged}: Props) => {
    const [newFood, setNewFood] = useState<Partial<AllowedFood>>({});

    const handlePeriodChanged = (food: AllowedFood) => (e: { target: { value: string } }) => {
        const value = parseInt(e.target.value);
        if (value !== food.period?.amount)
            onFoodsChanged(replaceFood(foods, {...food, period: {amount: value, unit: "Day"}}));
    };

    const handlePortionAmountChanged = (food: AllowedFood) => (e: { target: { value: string } }) => {
        const value = parseInt(e.target.value);
        if (value !== food.portion?.amount)
            onFoodsChanged(replaceFood(foods, {
                ...food, portion: {
                    amount: value, unit: food.portion?.unit || "Table Spoon"
                }
            }));
    };

    const handlePortionUnitChanged = (food: AllowedFood) => (e: { target: { value: string } }) => {
        const value: PortionUnit = e.target.value as PortionUnit;
        if (value !== food.portion?.unit)
            onFoodsChanged(replaceFood(foods, {...food, portion: {amount: undefined, unit: value}}));
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
                    <tr key={f.name}>
                        <td>
                            {f.name}
                        </td>
                        <td>
                            <input type="number" onChange={handlePeriodChanged(f)} value={f.period?.amount}/>days
                        </td>
                        <td>
                            <input type="number" onChange={handlePortionAmountChanged(f)} value={f.portion?.amount}/>
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
                        <input onChange={e => setNewFood({...newFood, name: e.target.value})} value={newFood.name}/>
                    </td>
                    <td>
                        <input type="number" onChange={(e) => setNewFood({
                            ...newFood,
                            period: {amount: parseInt(e.target.value), unit: "Day"}
                        })} value={newFood.period?.amount}/>days
                    </td>
                    <td>
                        <input type="number" onChange={(e) => setNewFood({
                            ...newFood,
                            portion: {amount: parseInt(e.target.value), unit: "Table Spoon"}
                        })} value={newFood.portion?.amount}/>
                        <select onChange={(e) => setNewFood({
                            ...newFood,
                            portion: {...newFood.portion, unit: e.target.value as PortionUnit}
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
                                    if (name !== undefined) {
                                        onFoodsChanged([...foods, {...newFood, name: name}]);
                                    }
                                    setNewFood({});
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