import { Component } from './component.js';

export class Label extends Component {
    constructor(text: string) {
        super('div');
        this.element.textContent = text;
        this.classes.add('label');
    }
}