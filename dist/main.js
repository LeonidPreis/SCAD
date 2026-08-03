import { Component } from "./components/component.js";
const canvas = new Component('canvas');
canvas.attributes.set('id', 'main-canvas');
canvas.attributes.set('data-layer', 'canvas');
document.body.appendChild(canvas.element);
console.log('has', canvas.attributes.has('data-layer'));
console.log(canvas);
//# sourceMappingURL=main.js.map