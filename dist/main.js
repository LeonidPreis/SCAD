import { Point, PointType } from "./primitives/point.js";
import { Canvas } from "./components/canvas.js";
const point = new Point(2, 3, PointType.Middle);
console.log(point);
const canvas = new Canvas('#main-canvas');
console.log(canvas.center);
//# sourceMappingURL=main.js.map