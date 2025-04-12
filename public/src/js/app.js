import Terminal from './components/Terminal';
import CyberGrid from './components/CyberGrid';
import KanjiOverlay from './components/KanjiOverlay';

class CyberApp {
	constructor() {
		this.terminal = new Terminal('#terminal-container');
		this.grid = new CyberGrid('#cyber-grid');
		this.kanji = new KanjiOverlay('#kanji-overlay');

		this.initHackingTools();
	}

	initHackingTools() {
		document
			.getElementById('hack-button')
			.addEventListener('click', async () => {
				const target = document.getElementById('target-input').value;
				if (!target) return;

				const result = await this.performHack(target);
				this.terminal.displayResult(result);
			});
	}

	async performHack(target) {
		try {
			const response = await fetch('/hack', {
				method: 'POST',
				headers: {
					'Content-Type': 'application/json',
				},
				body: JSON.stringify({ target }),
			});
			return await response.json();
		} catch (error) {
			return { status: 'error', message: '接続エラー' };
		}
	}
}

document.addEventListener('DOMContentLoaded', () => {
	new CyberApp();
});
