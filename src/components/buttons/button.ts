import { Component } from "../component/component.js";

export class Button {
    component: Component = new Component("button");
    handler?: () => void;

    constructor(handler?: () => void) {
        this.handler = handler;
        this.component.events.on("click", () => {
            this.toggle();
            if (this.component.state.activated) this.handler?.();
            console.log('BUTTON: activated', this.component.state.activated)
        });
    }

    toggle(): void {
        this.component.state.activated
            ? this.component.state.deactivate()
            : this.component.state.activate()
    }
}