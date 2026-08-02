export var PointType;
(function (PointType) {
    PointType["Middle"] = "middle";
    PointType["Geometry"] = "geometry";
    PointType["Connection"] = "connection";
    PointType["Intersection"] = "intersection";
})(PointType || (PointType = {}));
export class Point {
    id = `Point-${crypto.randomUUID()}`;
    x;
    y;
    type;
    constructor(x, y, type = PointType.Geometry) {
        this.x = x;
        this.y = y;
        this.type = type;
    }
}
//# sourceMappingURL=point.js.map