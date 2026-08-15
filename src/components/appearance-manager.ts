export class AppearanceManager {
    private static readonly hiddenClass = 'hidden';

    constructor(private readonly element: HTMLElement) {}

    show(): void {
        this.element.classList.remove(AppearanceManager.hiddenClass);
    }

    hide(): void {
        this.element.classList.add(AppearanceManager.hiddenClass);
    }

    toggle(): void {
        this.element.classList.toggle(AppearanceManager.hiddenClass);
    }

    get isVisible(): boolean {
        return !this.element.classList.contains(AppearanceManager.hiddenClass);
    }
}