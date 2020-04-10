import {FoodState} from "./model";


export const randomId = () => Math.random();

let foodState: FoodState = {
    allowedFoods: [
        {
            id: randomId(),
            name: "Pindakaas",
            period: {amount: 7, unit: "Day"},
            portion: {amount: 7, unit: "Table Spoon"}
        },
        {id: randomId(), name: "Egg", period: {amount: 7, unit: "Day"}, portion: {amount: 7, unit: "Table Spoon"}},
        {id: randomId(), name: "Water", period: {amount: 1, unit: "Day"}},
        {id: randomId(), name: "Light fruit tea", period: {amount: 1, unit: "Day"}},
        {id: randomId(), name: "Vitamin D", period: {amount: 1, unit: "Day"}, portion: {amount: 10, unit: "Drop"}},
        {id: randomId(), name: "Bread", period: {amount: 2, unit: "Day"}},
        {id: randomId(), name: "Hrisca"},
        {id: randomId(), name: "Orez"},
        {id: randomId(), name: "Amaranth"},
        {id: randomId(), name: "Rosii"},
        {id: randomId(), name: "Castraveti"},
        {id: randomId(), name: "Peste", period: {amount: 3, unit: "Day"}},
        {id: randomId(), name: "Carne", period: {amount: 3, unit: "Day"}},
        {id: randomId(), name: "Dovleac"},
        {id: randomId(), name: "Dovlecel"},
        {id: randomId(), name: "Vinata"},
        {id: randomId(), name: "Mar"},
        {id: randomId(), name: "Para"},
        {id: randomId(), name: "Alac"},
        {id: randomId(), name: "Nuci", period: {amount: 7, unit: "Day"}},
        {id: randomId(), name: "Cashew", period: {amount: 8, unit: "Day"}},
        {id: randomId(), name: "Hazelnuts", period: {amount: 7, unit: "Day"}},
        {id: randomId(), name: "Pecan", period: {amount: 9, unit: "Day"}},
        {id: randomId(), name: "Fasole", period: {amount: 9, unit: "Day"}},
        {id: randomId(), name: "Mazare", period: {amount: 9, unit: "Day"}},
        {id: randomId(), name: "Bob", period: {amount: 11, unit: "Day"}},
        {id: randomId(), name: "Linte", period: {amount: 9, unit: "Day"}},
        {id: randomId(), name: "Creveti", period: {amount: 11, unit: "Day"}},
        {id: randomId(), name: "Mango"},
        {id: randomId(), name: "Banana"},
        {id: randomId(), name: "Sparanghel"},
        {id: randomId(), name: "Andiva"},
        {id: randomId(), name: "Salata"},
        {id: randomId(), name: "Varza"},
        {id: randomId(), name: "Brocoli"},
        {id: randomId(), name: "Conopida"},
        {id: randomId(), name: "Boerenkool"},
        {id: randomId(), name: "Plaintain"},
        {id: randomId(), name: "Casava"},
        {id: randomId(), name: "Capsuni"},
        {id: randomId(), name: "Zmeura"},
        {id: randomId(), name: "Plumbs"},
        {id: randomId(), name: "Melon"},
        {id: randomId(), name: "Cottage cheese"}
    ],
    consumed: []

};
export const getFoodState = () => foodState;

export const setFoodState = (newState: FoodState) => {
    foodState = newState;
};
