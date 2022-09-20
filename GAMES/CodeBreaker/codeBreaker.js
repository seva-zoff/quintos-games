async function start() {
	let msg = 'I love apples!';
	msg = msg.toUpperCase();
	let alphabet = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
	let secret = '';

	for (let i = 0; i < msg.length; i++) {
		let character = msg[i];

		let isLetter = false;

		for (let pos = 0; pos < alphabet.length; pos++) {
			if (character == alphabet[pos]) {
				secret += alphabet[pos + 1];
				log(character, pos, secret);
				isLetter = true;
			}
		}

		if (isLetter == false) {
			secret += character;
		}
	}

	text(msg, 2);
	text(secret, 4);
}
