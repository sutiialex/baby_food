export type PortionUnit = 'Table Spoon' | 'Tea Spoon' | 'Drop' | 'Glass'

type Portion = {
    amount?: number;
    unit: PortionUnit
}

type Period = {
    amount: number;
    unit: 'Day'
}

export type FoodId = number;

export type AllowedFood = {
    id: FoodId;
    name: string;
    period?: Period;
    portion?: Portion;
}

export type ConsumeEvent = {
    date: Date;
    foodId: FoodId;
}

export type FoodState = {
    allowedFoods: AllowedFood[];
    consumed: ConsumeEvent[];
}