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

let times = [];

/* Part A: find the range of row and column values the target can be placed at */

async function imposterClicked() {
	erase();
	text(target, targetRow, targetCol);
	await alert('Game Over!', 20, 30, 20);
	erase();
	startGame();
}

function showSpeedStats() {
	erase();

	let speeds = [];

	for (let i = 0; i < times.length - 1; i++) {
		speeds[i] = times[i + 1] - times[i];
	}

	log(speeds);

	// let sum = speeds[0] + speeds[1] + speeds[2] ...

	// speeds = [500, 1500, 200]
	let sum = 0;
	for (let i = 0; i < speeds.length; i++) {
		sum = sum + speeds[i];
	}
	log(sum); // -> 2200
	let avg = Math.round(sum / speeds.length);

	let slowest = speeds[0];
	let fastest = speeds[0];
	for (let i = 1; i < speeds.length; i++) {
		if (slowest < speeds[i]) {
			slowest = speeds[i];
		}
		if (fastest > speeds[i]) {
			fastest = speeds[i];
		}
	}

	alert(
		'Your average speed was: ' +
			avg +
			'ms\n' +
			'Your slowest speed was: ' +
			slowest +
			'ms\n' +
			'Your fastest speed was :' +
			fastest +
			'ms',
		11
	);
}

function normalClicked() {
	times.push(Date.now());
	log(times);
	if (times.length != 10) {
		erase();
		makeTargets();
	} else {
		showSpeedStats();
	}
}

function makeTargets() {
	let pattern = '-_/\\_'.repeat(15) + '-_/';
	for (let i = 1; i < 30; i += 3) {
		text(pattern, i, 1);
	}

	targetRow = round(random(1, 23));
	targetCol = round(random(1, 71));
	button(target, targetRow, targetCol, normalClicked);

	for (let i = 0; i < 4; i++) {
		let row = round(random(1, 23));
		let col = round(random(1, 71));
		button(imposter, row, col, imposterClicked);
	}
}

async function start() {
	await alert('You need to click to normal targets, if you will click to imposter you will lose', 11);
	makeTargets();
}
