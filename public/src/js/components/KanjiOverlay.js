export default class KanjiOverlay {
	constructor(selector) {
		this.container = document.querySelector(selector);
		this.kanji = ['忍', '影', '電', '脳', '闇', '殺', '機', '関', '幻', '盗'];
		this.init();
	}

	init() {
		this.createKanjiElements();
		this.animateKanji();
	}

	createKanjiElements() {
		for (let i = 0; i < 25; i++) {
			const kanjiElement = document.createElement('div');
			kanjiElement.className = 'kanji-character';
			kanjiElement.textContent =
				this.kanji[Math.floor(Math.random() * this.kanji.length)];

			// Random positioning and styling
			kanjiElement.style.left = `${Math.random() * 90 + 5}%`;
			kanjiElement.style.top = `${Math.random() * 90 + 5}%`;
			kanjiElement.style.fontSize = `${Math.random() * 2 + 1}rem`;
			kanjiElement.style.opacity = Math.random() * 0.3 + 0.1;
			kanjiElement.style.transform = `rotate(${Math.random() * 360}deg)`;

			this.container.appendChild(kanjiElement);
		}
	}

	animateKanji() {
		setInterval(() => {
			const kanjiChars = this.container.querySelectorAll('.kanji-character');
			kanjiChars.forEach((char) => {
				if (Math.random() > 0.8) {
					char.style.opacity = Math.random() * 0.4;
					char.style.transform = `rotate(${Math.random() * 360}deg)`;
				}
			});
		}, 1000);
	}
}
