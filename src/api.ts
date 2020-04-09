import {FoodState} from "./model";

let foodState: FoodState = {
    allowedFoods: [
        {name: "Pindakaas", period: {amount: 7, unit: "Day"}, portion: {amount: 7, unit: "Table Spoon"}},
        {name: "Egg", period: {amount: 7, unit: "Day"}, portion: {amount: 7, unit: "Table Spoon"}},
        {name: "Water", period: {amount: 1, unit: "Day"}},
        {name: "Light fruit tea", period: {amount: 1, unit: "Day"}},
        {name: "Vitamin D", period: {amount: 1, unit: "Day"}, portion: {amount: 10, unit: "Drop"}},
        {name: "Bread", period: {amount: 2, unit: "Day"}},
        {name: "Hrisca"},
        {name: "Orez"},
        {name: "Amaranth"},
        {name: "Rosii"},
        {name: "Castraveti"},
        {name: "Peste", period: {amount: 3, unit: "Day"}},
        {name: "Carne", period: {amount: 3, unit: "Day"}},
        {name: "Dovleac"},
        {name: "Dovlecel"},
        {name: "Vinata"},
        {name: "Mar"},
        {name: "Para"},
        {name: "Alac"},
        {name: "Nuci", period: {amount: 7, unit: "Day"}},
        {name: "Cashew", period: {amount: 8, unit: "Day"}},
        {name: "Hazelnuts", period: {amount: 7, unit: "Day"}},
        {name: "Pecan", period: {amount: 9, unit: "Day"}},
        {name: "Fasole", period: {amount: 9, unit: "Day"}},
        {name: "Mazare", period: {amount: 9, unit: "Day"}},
        {name: "Bob", period: {amount: 11, unit: "Day"}},
        {name: "Linte", period: {amount: 9, unit: "Day"}},
        {name: "Creveti", period: {amount: 11, unit: "Day"}},
        {name: "Mango"},
        {name: "Banana"},
        {name: "Sparanghel"},
        {name: "Andiva"},
        {name: "Salata"},
        {name: "Varza"},
        {name: "Brocoli"},
        {name: "Conopida"},
        {name: "Boerenkool"},
        {name: "Plaintain"},
        {name: "Casava"},
        {name: "Capsuni"},
        {name: "Zmeura"},
        {name: "Plumbs"},
        {name: "Melon"},
        {name: "Cottage cheese"}
    ],
    consumed: []

};
export const getFoodState = () => foodState;

export const setFoodState = (newState: FoodState) => {
    foodState = newState;
};
