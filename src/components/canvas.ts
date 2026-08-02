export class Canvas {
    public readonly element: HTMLCanvasElement;
    public readonly context: CanvasRenderingContext2D;
    public boundaries!: DOMRect;
    public center!: { x: number, y: number };

    constructor(selector: string) {
        this.element = document.querySelector<HTMLCanvasElement>(selector)!;
        this.context = this.element.getContext('2d')!;
        this.setSize();
        this.updateBoundaries();
        this.onResize();
    }

    clear(): void {
        this.context.clearRect(0, 0, this.element.width, this.element.height);
    }

    onResize(): void {
        window.addEventListener('resize', () => {
            this.setSize();
            this.updateBoundaries();
        });
    }

    setSize(): void {
        this.element.width = this.element.offsetWidth;
        this.element.height = this.element.offsetHeight;
    }

    updateBoundaries() {
        this.boundaries = this.element.getBoundingClientRect();
        this.center = {         // offsets
            x: this.boundaries.width  >> 1,
            y: this.boundaries.height >> 1
        };
    }
}