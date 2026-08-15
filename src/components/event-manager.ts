export class EventManager {
    private readonly element: HTMLElement;

    private listeners: {
        type: keyof HTMLElementEventMap;
        callback: EventListener;
        options?: AddEventListenerOptions;
    }[] = [];

    constructor(element: HTMLElement) {
        this.element = element;
    }

    on<K extends keyof HTMLElementEventMap>(
        type: K,
        callback: (event: HTMLElementEventMap[K]) => void,
        options?: AddEventListenerOptions
    ): (event: HTMLElementEventMap[K]) => void {
        this.element.addEventListener(type, callback, options);
        this.listeners.push({
            type,
            callback: callback as EventListener,
            options
        });
        return callback;
    }

    off<K extends keyof HTMLElementEventMap>(
        type: K,
        callback: (event: HTMLElementEventMap[K]) => void,
        options?: AddEventListenerOptions
    ): void {
        this.element.removeEventListener(type, callback, options);
        this.listeners = this.listeners.filter(listener =>
            listener.type !== type ||
            listener.callback !== callback ||
            listener.options !== options
        );
    }
}