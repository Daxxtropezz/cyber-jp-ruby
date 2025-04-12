export default class CyberGrid {
	constructor(selector) {
		this.container = document.querySelector(selector);
		this.init();
	}

	init() {
		this.createGrid();
		this.animateGrid();
	}

	createGrid() {
		// Create horizontal lines
		for (let i = 0; i < 15; i++) {
			const line = document.createElement('div');
			line.className = 'grid-line horizontal';
			line.style.top = `${(i / 15) * 100}%`;
			line.style.animationDelay = `${i * 0.1}s`;
			this.container.appendChild(line);
		}

		// Create vertical lines
		for (let i = 0; i < 20; i++) {
			const line = document.createElement('div');
			line.className = 'grid-line vertical';
			line.style.left = `${(i / 20) * 100}%`;
			line.style.animationDelay = `${i * 0.05}s`;
			this.container.appendChild(line);
		}
	}

	animateGrid() {
		// Random pulse animation
		setInterval(() => {
			const lines = document.querySelectorAll('.grid-line');
			lines.forEach((line) => {
				if (Math.random() > 0.7) {
					line.style.opacity = Math.random() * 0.5 + 0.1;
				}
			});
		}, 300);
	}
}
