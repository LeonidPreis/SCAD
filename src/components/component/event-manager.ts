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
        callback: (event: HTMLElementEventMap[K]) => void
    ): void {
        const listeners = this.listeners.filter(listener =>
            listener.type === type &&
            listener.callback === callback
        );

        for (const listener of listeners) {
            this.element.removeEventListener(
                listener.type,
                listener.callback,
                listener.options?.capture ?? false
            );
        }

        this.listeners = this.listeners.filter(listener =>
            listener.type !== type ||
            listener.callback !== callback
        );
    }
    
    destroy(): void;
    destroy<K extends keyof HTMLElementEventMap>(type?: K): void {
        const listeners = type === undefined
            ? this.listeners
            : this.listeners.filter(listener => listener.type === type);

        for (const listener of listeners) {
            this.element.removeEventListener(
                listener.type,
                listener.callback,
                listener.options?.capture ?? false
            );
        }

        this.listeners = type === undefined
            ? []
            : this.listeners.filter(listener => listener.type !== type);
    }
}