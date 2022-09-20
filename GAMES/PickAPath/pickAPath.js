// start of wrapper (I will explain how this works later)
async function start() {
	// your code goes here! below this line

	let choice = 0; // initialize choice to 0, user has not made any choice yet

	while (choice != null) {
		// while choice is not null (nothing)
		// null in this case indicates the player cancelled out of the prompt

		let msg = ''; // initialize message to empty String
		let options = [];

		if (choice == 0) {
			/* PART A0: Start your story! */
			msg =
				'Дед мороз вошёл в дом во время когда ты делал уроки\n\n\t' +
				'1: Игнорировать и заниматься дальше\n\t' +
				'2: спросить кто это';
			options = [1, 2];
		} else if (choice == 1) {
			/* PART A1: continue the story */
			msg = 'Ты увидел дед мороза\n\n\t' + '3: ударить его\n\t' + '4: Спросить что ты тут забыл';
			options = [3, 4];
		} else if (choice == 2) {
			msg =
				'Он тебе не отвечает и тебе становиться страшно\n\n\t' +
				'5: Пойти посмотреть, кто это\n\t' +
				'6: Остаться в комнате и попытаться уснуть';
			options = [5, 6];
		} else if (choice == 3 || choice == 10) {
			msg = 'GAME OVER\n\n\t';
		} else if (choice == 4) {
			msg = 'Он дарит тебе подарок и уходит\n\n\t';
		} else if (choice == 5) {
			msg = 'Ты никого не находишь и возвращаешься в команту\n\n\t';
		} else if (choice == 6) {
			msg =
				'Ты слышишь не понятные и страшные звуки\n\n\t' +
				'7: Решить выйти из комнаты и всё таки поискать его\n\n\t' +
				'8: Остаться спать';
			options = [7, 8];
		} else if (choice == 7) {
			msg = 'Он спрятался и ты не можешь его найти\n\n\t ' + '9: Идти искать\n\n\t' + '10: Спрятаться в своей комнате';
			options = [9, 10];
		} else if (choice == 8) {
			msg = 'GAME OVER\n\n\t';
		} else if (choice == 9) {
			msg = 'Ты нашёл его и он подарил тебе подарок, YOU WIN!\n\n\t ';
		}

		// if the user has options to choose from
		if (options.length > 0) {
			// prompt the player to make choices
			let userInput = await prompt(msg);

			// if the user did not press cancel on the prompt
			if (userInput != null) {
				// if the choice the user entered is valid
				if (options.includes(userInput)) {
					choice = userInput;
				} else {
					await alert('Не верно, попробуй еще раз');
				}
			} else {
				choice = null;
			}
		} else {
			await alert(msg);
			choice = null;
		}

		/* PART B0: end the game if there are no more choices to make */

		/* PART B1: check if the player made a valid choice, reject invalid choices */
	}

	exit(); // exits the game
} // end wrapper
