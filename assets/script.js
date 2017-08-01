// Tic Tac Toe

"use strict";

function NoughtsAndCrosses() {

	const HUMAN_DOT = 'X';
	const AI_DOT = 'O';
	const EMPTY_DOT = '*';
	let field = new Object();

	while (true) {
		printMap();
	}


	

	function printMap() {
		console.log('* | 1 | 2 | 3');
		console.log('1 | * | * | *');
		console.log('2 | * | * | *');
		console.log('3 | * | * | *');

		return false;
	}


}

let game = new NoughtsAndCrosses();




