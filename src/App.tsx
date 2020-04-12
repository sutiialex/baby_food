import React, {useEffect, useState} from 'react';
import './App.css';
import {getFoodState, setFoodState} from "./api";
import NextFoods from "./NextFoods";
import {AllowedFood, ConsumeEvent, FoodState} from "./model";
import Consumed from "./Consumed";
import AllowedFoods from "./AllowedFoods";

function App() {
    const [foods, setFoods] = useState<FoodState | undefined>();

    useEffect(() => {
        getFoodState(setFoods);
    }, []);

    useEffect(() => {
        if (foods)
            setFoodState(foods);
    }, [foods]);

    if (foods === undefined)
        return <div>Loading...</div>;

    return (
        <>
            <Consumed foodState={foods} onDeleteEvent={e => {
                setFoods({...foods, consumed: foods?.consumed.filter(c => c !== e)})
            }}/>
            <NextFoods foodState={foods}
                       onConsumeAdd={(e: ConsumeEvent) => setFoods({
                           ...foods,
                           consumed: [e, ...foods?.consumed]
                       })}/>
            <AllowedFoods foods={foods.allowedFoods} onFoodsChanged={(newAllowedFoods: AllowedFood[]) => {
                setFoods({...foods, allowedFoods: newAllowedFoods});
            }}/>
        </>
    );
}

export default App;
