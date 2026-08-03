export class AttributesManager {
    element;
    constructor(element) {
        this.element = element;
    }
    toCamelCase(str) {
        return str
            .replace(/^data-/, '')
            .replace(/-([a-z])/g, (g) => g[1].toUpperCase()); // kebab в camelCase
    }
    set(name, value) {
        if (name.startsWith('data-')) {
            const key = this.toCamelCase(name);
            this.element.dataset[key] = value;
        }
        else {
            this.element.setAttribute(name, value);
        }
    }
    get(name) {
        if (name.startsWith('data-')) {
            const key = this.toCamelCase(name);
            return this.element.dataset[key] ?? null;
        }
        return this.element.getAttribute(name);
    }
    remove(name) {
        if (name.startsWith('data-')) {
            const key = this.toCamelCase(name);
            delete this.element.dataset[key];
        }
        else {
            this.element.removeAttribute(name);
        }
    }
    has(name) {
        if (name.startsWith('data-')) {
            const key = this.toCamelCase(name);
            return key in this.element.dataset;
        }
        return this.element.hasAttribute(name);
    }
}
//# sourceMappingURL=attribute-manager.js.map