import { Component } from './component.js';
import { EventManager } from './event-manager.js';

type Position =
    | 't-l'
    | 't-c'
    | 't-r'
    | 'b-l'
    | 'b-c'
    | 'b-r';

export class Tooltip extends Component {
    private readonly target: HTMLElement;
    private readonly targetEvents: EventManager;
    private readonly showDelay = 2000;

    private timer: number | null = null;

    constructor(target: HTMLElement, content: Component[]) {
        super('div');

        this.target = target;
        this.targetEvents = new EventManager(target);

        this.classes.add('tooltip-6', 'surface-6', 'origin-t-l');

        for (const component of content) {
            this.hierarchy.append(component.element);
        }

        this.targetEvents.on('mouseenter', () => this.start());
        this.targetEvents.on('mouseleave', () => this.stop());

        this.appearance.hide();
    }

    private start(): void {
        this.stop();

        this.timer = window.setTimeout(() => {
            this.updatePosition();
            this.appearance.show();
        }, this.showDelay);
    }

    private stop(): void {
        if (this.timer !== null) {
            clearTimeout(this.timer);
            this.timer = null;
        }

        this.appearance.hide();
    }

    private updatePosition(): void {
        const rect = this.target.getBoundingClientRect();

        let x: number;
        let y: number;

        switch (this.position) {
            case 't-l':
                x = rect.left;
                y = rect.top;
                break;

            case 't-c':
                x = rect.left + rect.width / 2;
                y = rect.top;
                break;

            case 't-r':
                x = rect.right;
                y = rect.top;
                break;

            case 'b-l':
                x = rect.left;
                y = rect.bottom;
                break;

            case 'b-c':
                x = rect.left + rect.width / 2;
                y = rect.bottom;
                break;

            case 'b-r':
                x = rect.right;
                y = rect.bottom;
                break;
        }

        this.element.style.position = 'fixed';
        this.element.style.left = `${x}px`;
        this.element.style.top = `${y}px`;
        this.element.style.right = 'auto';
        this.element.style.bottom = 'auto';
    }

    private get position(): Position {
        if (this.classes.has('position-t-l')) return 't-l';
        if (this.classes.has('position-t-c')) return 't-c';
        if (this.classes.has('position-t-r')) return 't-r';
        if (this.classes.has('position-b-l')) return 'b-l';
        if (this.classes.has('position-b-c')) return 'b-c';
        if (this.classes.has('position-b-r')) return 'b-r';

        return 'b-r';
    }
}