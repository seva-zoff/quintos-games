// start of wrapper (I will explain how this works later)
async function start() {
	// your code goes here!
	let num = Math.random() * 100 + 1;
	// .5678 * 100 + 1 = 57.78
	// round to 57
	// .00325 * 100 + 1 = 1.325
	// round to 1
	num = Math.floor(num);

	let guess;

	while (guess != num) {
		guess = await prompt('Guess a number 1-100');

		if (guess == num) {
			await alert('This is correct!');
		} else if (guess < num) {
			await alert('Your guess was too low');
		} else if (guess > num) {
			await alert('Your guess was too big');
		}
	}

	exit(); // exits the game
} // end
