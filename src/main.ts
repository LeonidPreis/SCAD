const overlays = [0, 4, 6, 10, 12, 14, 16, 18, 20, 22, 24];

const container = document.createElement('div');
container.className = 'gray-scale';

overlays.forEach((percent, level) => {
    const element = document.createElement('div');

    element.className = `gray gray-${level} border-4`;
    element.textContent = `${percent}%`;

    container.append(element);
});

document.body.append(container);