// start of wrapper (I will explain how this works later)
async function start() {
	// your code goes here! below this line

	const hangman = [
		`





		    
=========`,
		`
      +
      |
      |
      |
      |
      |
=========`,
		`
  +---+
      |
      |
      |
      |
      |
=========`,
		`
  +---+
  |   |
      |
      |
      |
      |
=========`,
		`
  +---+
  |   |
  O   |
      |
      |
      |
=========`,
		`
  +---+
  |   |
  O   |
  |   |
      |
      |
=========`,
		`
  +---+
  |   |
  O   |
 /|   |
      |
      |
=========`,
		`
  +---+
  |   |
  O   |
 /|\\  |
      |
      |
=========`,
		`
  +---+
  |   |
  O   |
 /|\\  |
 /    |
      |
=========`,
		`
  +---+
  |   |
  O   |
 /|\\  |
 / \\  |
      |
=========`
	];

	let wordsList =
		'abruptly absurd abyss affix askew avenue awkward axiom azure bagpipes bandwagon banjo bayou beekeeper bikini blitz blizzard boggle bookworm boxcar buckaroo buffalo buffoon buzzard buzzing buzzwords cobweb croquet crypt cycle disavow dizzying duplex dwarves embezzle equip espionage euouae exodus faking fishhook fixable fjord flapjack flopping fluffiness flyby foxglove frazzled frizzled funny gabby galaxy galvanize gazebo gizmo glow glyph gnarly gnostic gossip grogginess haiku haphazard hyphen icebox injury ivory ivy jackpot jawbreaker jaywalk jazzy jelly jigsaw jinx jiujitsu jockey jogging joking jovial joyful juicy jukebox jumbo kayak kazoo keyhole kilobyte kiosk kitsch kiwifruit klutz knapsack lengths lucky luxury marquee matrix megahertz microwave mnemonic mystify nightclub nowadays oxidize oxygen pajama phlegm pixel pizazz polka psyche puppy puzzling quartz queue quip quiz quizzes razzmatazz rhythm scratch snazzy squawk staff strength stretch stronghold stymie subway swivel syndrome thrift thumb topaz transcript transgress transplant twelfth unknown unzip vaporize voodoo vortex walkway waltz wave wavy waxy well whomever witch wizard wristwatch xylophone yacht youthful yummy zigzag zilch zipper zodiac zombie';

	/* PART A: split the wordsList String into an array called words, then choose a random word */
	let words = wordsList.split(' ');

	let rand = Math.random() * words.length;
	rand = Math.floor(rand);

	let word = words[rand];
	log(word);

	/* PART B: make an array with a line for each letter in the word */
	// Example word: 'quiz'
	// lines -> ['_', '_', '_', '_']

	let lines = '_'.repeat(word.length).split('');
	log(lines);

	let wrong = 0;

	while (lines.includes('_')) {
		/* PART C: show the lines for the word below the hangman art */
		let guess = await prompt(hangman[wrong] + '\n\n' + lines.join(' '));

		if (guess == word) {
			break;
		}

		let isCorrect = false;
		for (let i = 0; i < word.length; i++) {
			console.log(i + '_' + word[i]);
			let letter = word[i];
			if (guess == letter) {
				isCorrect = true;
				lines[i] = letter;
			}
		}

		if (isCorrect == false) {
			wrong = wrong + 1;
		}

		if (wrong >= 10) {
			await alert('You lose, the word was ' + word);
			break;
		}
	}

	if (wrong < 10) {
		await alert('you won, the word was ' + word);
	}

	exit(); // exits the game
} // end
