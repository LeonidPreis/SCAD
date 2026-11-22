import { Component } from "./component.js";

export class StateManager {
    private readonly component: Component;
    #activated: boolean = false;
    #enabled: boolean = true;

    constructor(component: Component) {
        this.component = component;
    }

    get activated() { return this.#activated; }
    activate() {
        this.#activated = true;
        this.component.classes.add("activated");
    }
    deactivate() {
        this.#activated = false;
        this.component.classes.remove("activated");
    }

    get enabled() { return this.#enabled; }
    enable() {
        this.#enabled = true;
        this.component.classes.remove("disabled");
    }
    disable() {
        this.#enabled = false;
        this.component.classes.add("disabled");
    }
}