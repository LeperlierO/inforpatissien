export class MiniRecipe
{
    id!: number;
    name!: string;
    description!: string;
    mainPhoto!: RecipePhoto;
}

export class RecipePhoto
{
    id!: number;
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

export class MiniRecipeResponse
{
    current!: number;
    size!: number;
    data!: MiniRecipe[];
}