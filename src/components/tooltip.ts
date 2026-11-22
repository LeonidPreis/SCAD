import { Component } from "./component/component.js";

interface TooltipDescriptor {
    component: Component;
    header: string;
    description: string;
    shortcut: string[];
}

export class Tooltip {
    private descriptor: TooltipDescriptor;
    private container!: Component;
    private delay: number = 1500;
    private timer?: number;

    constructor(descriptor: TooltipDescriptor) {
        this.descriptor = descriptor;
        this.init();
    }

    init() {
        this.container = new Component('container-4');
        this.container.classes.add('tooltip','surface-2','radius-6','vertical','hidden');
        this.container.appearance.hide();

        const header = new Component('text-2');
        header.classes.add('header');
        header.hierarchy.text = this.descriptor.header;
        this.container.hierarchy.append(header.element);

        const description = new Component('text-2');
        description.hierarchy.text = this.descriptor.description;
        this.container.hierarchy.append(description.element);

        if (this.descriptor.shortcut) {
            const divider = new Component('divider-4');
            this.container.hierarchy.append(divider.element);

            const shortcut = new Component('shortcut');
            for (const key of this.descriptor.shortcut) {
                const keyboard = new Component('keyboard');
                keyboard.classes.add('surface-4');
                keyboard.hierarchy.text = key;
                shortcut.hierarchy.append(keyboard.element);
            }
            this.container.hierarchy.append(shortcut.element);
        }

        document.body.append(this.container.element);

        this.descriptor.component.events.on('mouseenter', () => {
            clearTimeout(this.timer);
            this.timer = window.setTimeout(() => this.show(), this.delay);
        });

        this.descriptor.component.events.on('mouseleave', () => {
            clearTimeout(this.timer);
            this.hide();
        });
    }

    show(): void {
        this.container.appearance.show();
    }

    hide(): void {
        this.container.appearance.hide();
    }
}