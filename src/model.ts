export type PortionUnit = 'Table Spoon' | 'Tea Spoon' | 'Drop' | 'Glass'

export type Portion = {
    amount: number | null;
    unit: PortionUnit
}

export type Period = {
    amount: number | null;
    unit: 'Day'
}

export type FoodId = number;

export type AllowedFood = {
    id: FoodId;
    name: string;
    period: Period;
    portion: Portion;
}

export type ConsumeEvent = {
    date: string;
    foodId: FoodId;
}

export type FoodState = {
    allowedFoods: AllowedFood[];
    consumed: ConsumeEvent[];
}