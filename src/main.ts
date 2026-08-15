import { Component } from "./components/component.js";

const body = document.body;

const component = new Component('div');
body.appendChild(component.element);
component.element.innerText = 'TEST';
component.classes.add('surface-4', 'origin-t-l');

let hovered = false;

const HIDE = () => {
    hovered = true;
    component.appearance.hide();
    console.log('hide', { hovered });
};

const SHOW = () => {
    hovered = false;
    component.appearance.show();
    console.log('show', { hovered });
};

component.events.on('mouseover', HIDE);
component.events.on('mouseout', SHOW);