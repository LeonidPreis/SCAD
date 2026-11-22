import { Component } from "./component/component.js";

export class Text {
    component: Component = new Component("p");

    constructor(content: string = "") {
        this.component.hierarchy.html = content;
    }

    set content(value: string) {
        this.component.hierarchy.html = value;
    }

    get content(): string {
        return this.component.hierarchy.html;
    }
}