export class ClassManager {
    private readonly element: HTMLElement;

    constructor(element: HTMLElement) {
        this.element = element;
    }

    add(...classes: string[]): void {
        this.element.classList.add(...classes);
    }
    
    remove(...classes: string[]): void {
        this.element.classList.remove(...classes);
    }

    has(className: string): boolean {
        return this.element.classList.contains(className);
    }

    toggle(className: string, force?: boolean): boolean {
        return this.element.classList.toggle(className, force);
    }

    replace(oldToken: string, newToken: string): void {
        this.element.classList.replace(oldToken, newToken);
    }
}