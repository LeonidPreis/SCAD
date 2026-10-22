export class HierarchyManager {
    private readonly element: HTMLElement;
    
    readonly replace = {
        self: <T extends HTMLElement>(element: T): T => {
            this.element.replaceWith(element);
            return element;
        },
        content: <T extends HTMLElement>(...children: T[]): T[] => {
            this.element.replaceChildren(...children);
            return children;
        }
    };

    constructor(element: HTMLElement) {
        this.element = element;
    }

    get text(): string {
        return this.element.textContent as string;
    }

    set text(value: string) {
        this.element.textContent = value;
    }

    get html(): string {
        return this.element.innerHTML;
    }

    set html(value: string) {
        this.element.innerHTML = value;
    }

    prepend<T extends HTMLElement>(child: T): T {
        this.element.prepend(child);
        return child;
    }

    append<T extends HTMLElement>(child: T): T {
        this.element.append(child);
        return child;
    }

    before<T extends HTMLElement>(element: T): T {
        this.element.before(element);
        return element;
    }

    after<T extends HTMLElement>(element: T): T {
        this.element.after(element);
        return element;
    }

    remove(): void {
        this.element.remove();
    }
}