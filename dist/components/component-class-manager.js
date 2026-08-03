export class ClassManager {
    element;
    constructor(element) {
        this.element = element;
    }
    add(...classes) {
        this.element.classList.add(...classes);
    }
    remove(...classes) {
        this.element.classList.remove(...classes);
    }
    has(className) {
        return this.element.classList.contains(className);
    }
    toggle(className, force) {
        return this.element.classList.toggle(className, force);
    }
    replace(oldToken, newToken) {
        this.element.classList.replace(oldToken, newToken);
    }
}
//# sourceMappingURL=component-class-manager.js.map