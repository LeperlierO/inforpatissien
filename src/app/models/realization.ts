import { Time } from "@angular/common";

export class Realization
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
    photos!: RealizationPhoto[];
    mainPhoto!: RealizationPhoto;
}

export class BodyRealization{
    code!: string;
    name!: string;
    description!: string;
    date!: string;
    success!: number;
    difficulty!: number;
    time!: Time;
    cost!: number
    mainPhoto!: string;
}

export class MiniRealization
{
    id!: number;
    code!: string;
    name!: string;
    description!: string;
    mainPhoto!: RealizationPhoto;
}

export class RealizationPhoto
{
    id!: number;
    name!: string;
    description!: string;
    url!: string;
    main!: boolean;
    position!: RealizationPhotoPosition;
}

export class RealizationPhotoPosition
{
    vertically!: number;
    horizontally!: number;
}

export class RealizationPagination
{
    current!: number;
    size!: number;
    data!: Realization[];
}