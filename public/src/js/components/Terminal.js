export default class Terminal {
	constructor(selector) {
		this.element = document.querySelector(selector);
		this.queue = [];
		this.isProcessing = false;
		this.init();
	}

	init() {
		this.displayWelcomeMessage();
		setInterval(() => this.processQueue(), 100);
	}

	displayWelcomeMessage() {
		this.addToQueue([
			'> 起動シーケンスを開始...',
			'> ハッカーインターフェース v3.1.4',
			'> 日本語モードを有効化',
			'> ようこそ、サイバー忍者へ',
		]);
	}

	addToQueue(messages) {
		if (Array.isArray(messages)) {
			this.queue.push(...messages);
		} else {
			this.queue.push(messages);
		}
	}

	processQueue() {
		if (this.isProcessing || this.queue.length === 0) return;

		this.isProcessing = true;
		const message = this.queue.shift();
		this.typeEffect(message, () => {
			this.isProcessing = false;
		});
	}

	typeEffect(text, callback) {
		let i = 0;
		const typing = setInterval(() => {
			if (i < text.length) {
				this.element.innerHTML += text.charAt(i);
				i++;
			} else {
				clearInterval(typing);
				this.element.innerHTML += '<br>';
				if (callback) callback();
			}
		}, 20);
	}

	displayResult(data) {
		const result = `
        > ターゲット: ${data.result.target}
        > ステータス: ${data.result.status}
        > アクセスレベル: ${data.result.access_level}
        > 結果: ${data.result.term}
        > タイムスタンプ: ${data.result.timestamp}
      `;
		this.addToQueue(result);
	}
}
