import { DatasetManager } from "./dataset-manager.js";
export class AttributesManager {
    element;
    dataset;
    constructor(element) {
        this.element = element;
        this.dataset = new DatasetManager(this.element);
    }
    isDatasetKey(name) {
        return name.startsWith('data-') || name in this.element.dataset;
    }
    datasetKey(str) {
        return str
            .replace(/^data-/, '')
            .replace(/-([a-z])/g, (g) => g[1].toUpperCase());
    }
    set(name, value) {
        if (this.isDatasetKey(name)) {
            const key = this.datasetKey(name);
            this.element.dataset[key] = value;
        }
        else {
            this.element.setAttribute(name, value);
        }
    }
    get(name) {
        if (this.isDatasetKey(name)) {
            const key = this.datasetKey(name);
            return this.element.dataset[key] ?? null;
        }
        return this.element.getAttribute(name);
    }
    remove(name) {
        if (this.isDatasetKey(name)) {
            const key = this.datasetKey(name);
            delete this.element.dataset[key];
        }
        else {
            this.element.removeAttribute(name);
        }
    }
    has(name) {
        if (this.isDatasetKey(name)) {
            const key = this.datasetKey(name);
            return key in this.element.dataset;
        }
        return this.element.hasAttribute(name);
    }
}
//# sourceMappingURL=attribute-manager.js.map