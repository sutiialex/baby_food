export type PortionUnit = 'Table Spoon' | 'Tea Spoon' | 'Drop' | 'Glass'

type Portion = {
    amount?: number;
    unit: PortionUnit
}

type Period = {
    amount: number;
    unit: 'Day'
}

export type AllowedFood = {
    name: string;
    period?: Period;
    portion?: Portion;
}

export type ConsumeEvent = {
    date: Date;
    food: string;
}

export type FoodState = {
    allowedFoods: AllowedFood[];
    consumed: ConsumeEvent[];
}