import { Time } from "@angular/common";
import { Setting } from "./common";

export class Recipe
{
    id!: number;
    code!: string;
    name!: string;
    description!: string;
    difficulty!: Setting;
    steps!: Step[];
    ingredients!: Ingredient[];
    equipments!: Equipment[]
}

export class Step
{
    id!: number;
    name!: string;
    description!: string;
    time!: Time;
    comment!: string;
    type!: Setting;
    ingredients!: Ingredient[];
    equipments!: Equipment[];
    order!: number;
}

export class Ingredient
{
    id!: number;
    name!: string;
}

export class Equipment
{
    id!: number;
    name!: string;
}