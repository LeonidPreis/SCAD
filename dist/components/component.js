import { AttributesManager } from "./attribute-manager.js";
import { ClassManager } from "./component-class-manager.js";
export class Component {
    element;
    classes;
    attributes;
    constructor(tag) {
        this.element = document.createElement(tag);
        this.classes = new ClassManager(this.element);
        this.attributes = new AttributesManager(this.element);
    }
}
// export class Component {
//     constructor(tag = 'div') {
//         this.element = document.createElement(tag);
//         this.listeners = [];
//     }
//     show() {
//         this.element.classList.remove('hidden');
//     }
//     hide() {
//         this.element.classList.add('hidden');
//     }
//     append(component) {
//          const element = component instanceof Component
//              ? component.element
//              : component;
//         this.element.append(element);
//         return component;
//     }
//     remove() {
//         for (const listener of this.listeners) {
//             listener.target.removeEventListener(
//                 listener.type,
//                 listener.callback,
//                 listener.options
//             );
//         }
//         this.listeners.length = 0;
//         this.element.remove();
//     }
//     on(target, type, callback, options) {
//         target.addEventListener(type, callback, options);
//         this.listeners.push({ target, type, callback, options });
//         return callback;
//     }
//     off(target, type, callback, options) {
//         target.removeEventListener(type, callback, options);
//         this.listeners = this.listeners.filter(listener =>
//             listener.target !== target ||
//             listener.type !== type ||
//             listener.callback !== callback ||
//             listener.options !== options
//         );
//     }
// }
//# sourceMappingURL=component.js.map