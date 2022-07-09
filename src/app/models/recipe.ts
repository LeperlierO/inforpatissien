import { Time } from "@angular/common";

export class Recipe
{
    id!: number;
    code!: string;
    name!: string;
    description!: string;
    date!: Date;
    success!: number;
    difficulty!: number;
    time!: Time;
    cost!: number
    photos!: RecipePhoto[];
    mainPhoto!: RecipePhoto;
}

export class MiniRecipe
{
    id!: number;
    code!: string;
    name!: string;
    description!: string;
    mainPhoto!: RecipePhoto;
}

export class RecipePhoto
{
    id!: number;
    code!: string;
    name!: string;
    description!: string;
    url!: string;
    main!: boolean;
    position!: RecipePhotoPosition;
}

export class RecipePhotoPosition
{
    vertically!: number;
    horizontally!: number;
}

export class RecipePagination
{
    current!: number;
    size!: number;
    data!: Recipe[];
}