export class Photo
{
    id!: number;
    name!: string;
    description!: string;
    url!: string;
    main!: boolean;
    position!: PhotoPosition;
}

export class PhotoPosition
{
    vertically!: number;
    horizontally!: number;
}