export class Canvas {
    element;
    context;
    boundaries;
    center;
    constructor(selector) {
        this.element = document.querySelector(selector);
        this.context = this.element.getContext('2d');
        this.setSize();
        this.updateBoundaries();
        this.onResize();
    }
    clear() {
        this.context.clearRect(0, 0, this.element.width, this.element.height);
    }
    onResize() {
        window.addEventListener('resize', () => {
            this.setSize();
            this.updateBoundaries();
        });
    }
    setSize() {
        this.element.width = this.element.offsetWidth;
        this.element.height = this.element.offsetHeight;
    }
    updateBoundaries() {
        this.boundaries = this.element.getBoundingClientRect();
        this.center = {
            x: this.boundaries.width >> 1,
            y: this.boundaries.height >> 1
        };
    }
}
//# sourceMappingURL=canvas.js.map