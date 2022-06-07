const target = `
 .d88b. 
.8P  Y8.
88    88
88    88
 8b  d8 
 'Y88P' `.slice(1);

const imposter = `
 .d88b. 
.8P  Y8.
88 xx 88
88 xx 88
 8b  d8 
 'Y88P' `.slice(1);

let targetRow;
let targetCol;

/* Part A: find the range of row and column values the target can be placed at */

async function imposterClicked() {
	erase();
	text(target, targetRow, targetCol);
	await alert('Game Over!', 20, 30, 20);
	erase();
	startGame();
}

function normalClicked() {
	erase();
	makeTargets();
}

function makeTargets() {
	targetRow = round(random(1, 23));
	targetCol = round(random(1, 71));
	button(target, targetRow, targetCol, normalClicked);

	for (let i = 0; i < 4; i++) {
		let row = round(random(1, 23));
		let col = round(random(1, 71));
		button(imposter, row, col, imposterClicked);
	}
}

async function startGame() {
	await alert('You need to click to normal targets, if you will click to imposter you will lose', 11);
	makeTargets();
}

startGame();
