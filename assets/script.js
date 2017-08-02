// Tic Tac Toe

"use strict";

function NoughtsAndCrosses() {

	const HUMAN_DOT = 'X';
	const AI_DOT = 'O';
	const EMPTY_DOT = '*';
	let field = new Object();

	while (true) {
		let q_1 = prompt('Name', '');

		if(q_1 != 'alex') {
			alert('Stop');
			return false;
		}

		let q_2 = prompt('WName', '');

		if(q_1 != 'alex') {
			alert('Stop');
			return false;
		}

	}

	function initMap(wrapper) {

		let el = document.getElementById(wrapper);
		el.getElementsByTagName('input');



	}

}

let game = new NoughtsAndCrosses();




