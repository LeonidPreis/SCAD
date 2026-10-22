export class DatasetManager {
    private readonly element: HTMLElement;

    constructor(element: HTMLElement) {
        this.element = element;
    }

    private key(str: string): string {
        return str.replace(/-([a-z])/g, (g) => g[1].toUpperCase());
    }

    set(name: string, value: string): void {
        this.element.dataset[this.key(name)] = value;
    }

    get(name: string): string | null {
        return this.element.dataset[this.key(name)] ?? null;
    }

    remove(name: string): void {
        delete this.element.dataset[this.key(name)];
    }

    has(name: string): boolean {
        return this.key(name) in this.element.dataset;
    }
}