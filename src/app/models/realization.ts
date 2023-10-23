import { Time } from "@angular/common";
import { BodyId, Setting } from "./common";
import { Photo } from "./photo";

export class Realization
{
    id!: number;
    code!: string;
    name!: string;
    description!: string;
    date!: Date;
    success!: Setting;
    time!: Time;
    cost!: number;
    source!: string;
    notes!: string;
    photos!: Photo[];
    mainPhoto!: Photo;
}

export class BodyRealization{
    code!: string;
    name!: string;
    description!: string;
    date!: string;
    success!: BodyId;
    time!: Time;
    cost!: number
    mainPhoto!: string;
}

export class BodyRealizationAdditionals{
    id!: number;
    source!: string;
    notes!: string;
}

export class MiniRealization
{
    id!: number;
    code!: string;
    name!: string;
    description!: string;
    mainPhoto!: Photo;
}

export class RealizationPagination
{
    current!: number;
    size!: number;
    data!: Realization[];
}