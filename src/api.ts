import {AllowedFood, FoodState, Period, Portion} from "./model";

import firebase from "firebase";

const firebaseConfig = {
    apiKey: "AIzaSyDZnw05t_TsI_B25nINqj7dzSkVS3ADx9Q",
    authDomain: "babyfood-f264c.firebaseapp.com",
    databaseURL: "https://babyfood-f264c.firebaseio.com",
    projectId: "babyfood-f264c",
    storageBucket: "babyfood-f264c.appspot.com",
    messagingSenderId: "33974663086",
    appId: "1:33974663086:web:fc8a8b6813021046c7ba3f"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

const database = firebase.database();

firebase.auth().signInAnonymously();

export const randomId = () => Math.random();

const transformFoods = (foods: { name: string, period?: Period, portion?: Portion }[]): AllowedFood[] =>
    foods.map(f => ({
        id: randomId(),
        name: f.name,
        period: f.period || {amount: null, unit: "Day"},
        portion: f.portion || {amount: null, unit: "Table Spoon"}
    }));

let defaultFoodState: FoodState = {
    allowedFoods: transformFoods([
        {

            name: "Pindakaas",
            period: {amount: 7, unit: "Day" as "Day"},
            portion: {amount: 7, unit: "Table Spoon" as "Table Spoon"}
        },
        {
            name: "Egg",
            period: {amount: 7, unit: "Day" as "Day"},
            portion: {amount: 7, unit: "Table Spoon" as "Table Spoon"}
        },
        {name: "Water", period: {amount: 1, unit: "Day" as "Day"}},
        {name: "Light fruit tea", period: {amount: 1, unit: "Day" as "Day"}},
        {name: "Vitamin D", period: {amount: 1, unit: "Day" as "Day"}, portion: {amount: 10, unit: "Drop"}},
        {name: "Bread", period: {amount: 2, unit: "Day" as "Day"}},
        {name: "Hrisca"},
        {name: "Orez"},
        {name: "Amaranth"},
        {name: "Rosii"},
        {name: "Castraveti"},
        {name: "Peste", period: {amount: 3, unit: "Day" as "Day"}},
        {name: "Carne", period: {amount: 3, unit: "Day" as "Day"}},
        {name: "Dovleac"},
        {name: "Dovlecel"},
        {name: "Vinata"},
        {name: "Mar"},
        {name: "Para"},
        {name: "Alac"},
        {name: "Nuci", period: {amount: 7, unit: "Day" as "Day"}},
        {name: "Cashew", period: {amount: 8, unit: "Day" as "Day"}},
        {name: "Hazelnuts", period: {amount: 7, unit: "Day" as "Day"}},
        {name: "Pecan", period: {amount: 9, unit: "Day" as "Day"}},
        {name: "Fasole", period: {amount: 9, unit: "Day" as "Day"}},
        {name: "Mazare", period: {amount: 9, unit: "Day" as "Day"}},
        {name: "Bob", period: {amount: 11, unit: "Day" as "Day"}},
        {name: "Linte", period: {amount: 9, unit: "Day" as "Day"}},
        {name: "Creveti", period: {amount: 11, unit: "Day" as "Day"}},
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
    ]),
    consumed: []

};
export const getFoodState = (callback: (_: FoodState) => void) => {
    database.ref("/food").once('value').then(snapshot => {
        const state = snapshot.val();
        if (!state) {
            setFoodState(defaultFoodState);
            callback(defaultFoodState)
        } else {
            callback(state);
        }
    });
};

export const setFoodState = (newState: FoodState) => {
    database.ref("/food").set(newState).then();
};
