import { Button } from "./components/buttons/button.js";
import { Component } from "./components/component/component.js";
import { Tooltip } from "./components/tooltip.js";

const body = new Component(document.body);

const pointTool = new Button(() => { console.log('Point tool has been called.') });
pointTool.component.classes.add('surface-2', 'point-tool', 'icon');

body.hierarchy.append(pointTool.component.element);

new Tooltip({
    component: pointTool.component,
    header: 'POINT TOOL',
    description: 'Set the point by coordinates.',
    shortcut: ['CTRL', 'P'],
});