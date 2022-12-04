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

export class MiniRecipe
{
    id!: number;
    code!: string;
    name!: string;
    difficulty!: Setting;
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
    success!: Boolean;
}

export class Ingredient
{
    id!: number;
    name!: string;
    quantity!: number;
    unit!: string;
}

export class Equipment
{
    id!: number;
    name!: string;
}