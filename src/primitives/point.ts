export enum PointType {
    Middle = 'middle',
    Geometry = 'geometry',
    Connection = 'connection',
    Intersection = 'intersection'
}

export class Point {
    readonly id: string = `Point-${crypto.randomUUID()}`;
    public x: number;
    public y: number;
    public type?: PointType;

    constructor(
        x: number,
        y: number,
        type = PointType.Geometry
    ) {
        this.x = x;
        this.y = y;
        this.type = type;
    }
}