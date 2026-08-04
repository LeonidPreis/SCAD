import { Component } from "./components/component.js";

const component = new Component('div');

console.log('Attributes');

component.attributes.set('id', 'main');
component.attributes.set('title', 'Hello');

console.log(component.attributes.get('id'));
console.log(component.attributes.get('title'));

console.log(component.attributes.has('id'));
console.log(component.attributes.has('hidden'));

component.attributes.remove('title');
console.log(component.attributes.get('title'));

console.log(component.element.outerHTML);

console.log('Dataset');

component.attributes.dataset.set('layer', 'construction');
component.attributes.dataset.set('point-type', 'geometry');
component.attributes.dataset.set('snap-enabled', 'true');

console.log(component.attributes.dataset.get('layer'));
console.log(component.attributes.dataset.get('point-type'));
console.log(component.attributes.dataset.get('snap-enabled'));

console.log(component.attributes.dataset.has('layer'));
console.log(component.attributes.dataset.has('unknown'));

component.attributes.dataset.remove('point-type');
console.log(component.attributes.dataset.get('point-type'));

console.log(component.element.outerHTML);

console.log(component);