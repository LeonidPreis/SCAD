export class DatasetManager {
    element;
    constructor(element) {
        this.element = element;
    }
    key(str) {
        return str.replace(/-([a-z])/g, (g) => g[1].toUpperCase());
    }
    set(name, value) {
        this.element.dataset[this.key(name)] = value;
    }
    get(name) {
        return this.element.dataset[this.key(name)] ?? null;
    }
    remove(name) {
        delete this.element.dataset[this.key(name)];
    }
    has(name) {
        return this.key(name) in this.element.dataset;
    }
}
//# sourceMappingURL=dataset-manager.js.map