import { Component } from "./component/component.js";

type TooltipPosition =
    | 't-l' | 't-c' | 't-r'
    | 'c-l' | 'c-c' | 'c-r'
    | 'b-l' | 'b-c' | 'b-r';

interface TooltipDescriptor {
    component: Component;
    header: string;
    description: string;
    shortcut?: string[];
    position?: TooltipPosition;
    delay?: number;
}

export class Tooltip {
    private descriptor: TooltipDescriptor;
    private container!: Component;
    private delay: number;
    private gap = 8;
    private timer?: number;
    private position: TooltipPosition;

    constructor(descriptor: TooltipDescriptor) {
        this.descriptor = descriptor;
        this.delay = descriptor.delay ?? 1500;
        this.position = descriptor.position ?? 'b-r';
        this.init();
        this.handle();
    }

    private init(): void {
        this.container = new Component('container-4');
        this.container.classes.add(
            'tooltip', 'surface-2', 'radius-8', 'vertical', 'hidden',
            `position-${this.position}`,
            `origin-${this.position}`,
        );
        this.container.appearance.hide();

        const header = new Component('text-2');
        header.classes.add('header');
        header.hierarchy.text = this.descriptor.header.toLocaleUpperCase();
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
                keyboard.hierarchy.text = key.toLocaleUpperCase();
                shortcut.hierarchy.append(keyboard.element);
            }
            this.container.hierarchy.append(shortcut.element);
        }

        document.body.append(this.container.element);
    }

    private place(): void {
        const rect = this.descriptor.component.element.getBoundingClientRect();
        const width = this.container.element.offsetWidth;
        const height = this.container.element.offsetHeight;

        const centerLeft = rect.left + (rect.width - width) / 2;
        const centerTop = rect.top + (rect.height - height) / 2;

        let top: number;
        let left: number;

        switch (this.position) {
            case 't-l':
                top = rect.top - height - this.gap;
                left = rect.left - width - this.gap;
                break;
            case 't-c':
                top = rect.top - height - this.gap;
                left = centerLeft;
                break;
            case 't-r':
                top = rect.top - height - this.gap;
                left = rect.right + this.gap;
                break;
            case 'c-l':
                top = centerTop;
                left = rect.left - width - this.gap;
                break;
            case 'c-c':
                top = centerTop;
                left = centerLeft;
                break;
            case 'c-r':
                top = centerTop;
                left = rect.right + this.gap;
                break;
            case 'b-l':
                top = rect.bottom + this.gap;
                left = rect.left - width - this.gap;
                break;
            case 'b-c':
                top = rect.bottom + this.gap;
                left = centerLeft;
                break;
            case 'b-r':
                top = rect.bottom + this.gap;
                left = rect.right + this.gap;
                break;
            default:
                top = rect.bottom + this.gap;
                left = centerLeft;
        }

        this.container.element.style.top = `${top}px`;
        this.container.element.style.left = `${left}px`;
    }

    private show(): void {
        this.place();
        this.container.appearance.show();
    }

    private hide(): void {
        this.container.appearance.hide();
    }

    private handle(): void {
        this.descriptor.component.events.on('mouseenter', () => {
            clearTimeout(this.timer);
            this.timer = window.setTimeout(() => this.show(), this.delay);
        });

        this.descriptor.component.events.on('mouseleave', () => {
            clearTimeout(this.timer);
            this.hide();
        });
    }
}