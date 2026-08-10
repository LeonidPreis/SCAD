import { Component } from "./components/component.js";
const body = document.body;
for (let elevaton = 1; elevaton <= 10; elevaton++) {
    const component = new Component('div');
    component.classes.add(`surface-${elevaton}`);
    component.element.innerHTML = `DP ${elevaton}`;
    body.append(component.element);
}
//# sourceMappingURL=main.js.map