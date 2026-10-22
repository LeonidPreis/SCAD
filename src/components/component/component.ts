import { AppearanceManager } from "./appearance-manager.js";
import { AttributesManager } from "./attributes-manager.js";
import { ClassesManager } from "./classes-manager.js";
import { EventManager } from "./event-manager.js";
import { HierarchyManager } from "./hierarchy-manager.js";

export class Component {
    element: HTMLElement;
    classes!: ClassesManager;
    attributes!: AttributesManager;
    hierarchy!: HierarchyManager;
    appearance!: AppearanceManager;
    events!: EventManager;

    constructor(value: string | HTMLElement) {
        this.element = value instanceof HTMLElement ? value : document.createElement(value);
        this.init();
    }

    init(): void {
        this.classes = new ClassesManager(this.element);
        this.attributes = new AttributesManager(this.element);
        this.hierarchy = new HierarchyManager(this.element);
        this.appearance = new AppearanceManager(this.element);
        this.events = new EventManager(this.element);
    }
}