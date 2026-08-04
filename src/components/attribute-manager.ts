import { DatasetManager } from "./dataset-manager.js";

export class AttributesManager {
    private readonly element: HTMLElement;
    dataset: DatasetManager;

    constructor(element: HTMLElement) {
        this.element = element;
        this.dataset = new DatasetManager(this.element)
    }

    private isDatasetKey(name: string): boolean {
        return name.startsWith('data-') || name in this.element.dataset;
    }

    private datasetKey(str: string): string {
        return str
            .replace(/^data-/, '')
            .replace(/-([a-z])/g, (g) => g[1].toUpperCase());
    }

    set(name: string, value: string): void {
        if (this.isDatasetKey(name)) {
            const key = this.datasetKey(name);
            this.element.dataset[key] = value;
        } else {
            this.element.setAttribute(name, value);
        }
    }

    get(name: string): string | null {
        if (this.isDatasetKey(name)) {
            const key = this.datasetKey(name);
            return this.element.dataset[key] ?? null;
        }
        return this.element.getAttribute(name);
    }

    remove(name: string): void {
        if (this.isDatasetKey(name)) {
            const key = this.datasetKey(name);
            delete this.element.dataset[key];
        } else {
            this.element.removeAttribute(name);
        }
    }

    has(name: string): boolean {
        if (this.isDatasetKey(name)) {
            const key = this.datasetKey(name);
            return key in this.element.dataset;
        }
        return this.element.hasAttribute(name);
    }
}