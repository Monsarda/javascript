// Tic Tac Toe

"use strict";

function NoughtsAndCrosses() {

	const HUMAN_DOT = 'X';
	const AI_DOT = 'O';
	const EMPTY_DOT = '*';
	let fields = new Array();

	this.initMap = function(wrapper) {

		let el = document.getElementById(wrapper);
		let inputs = el.getElementsByTagName('input');

		for (var i = 0; i < inputs.length; i++) {
			inputs[i].setAttribute('value', EMPTY_DOT);
			fields.push(inputs[i]);
		}

	}

	this.humanTurn = function(field) {
		if(isEmptyCell(field)){
			field.setAttribute('value', HUMAN_DOT);
		}else {
			alert('Это поле занято');
		}
	}

	this.checkWin = function(char) {
		return false;
	}

	this.isMapFull = function() {

		let empty = fields.length;
		for (var i = 0; i < fields.length; i++) {
			if (!isEmptyCell(fields[i])) {
				empty--;	
			}	
		}

		if (empty <= 0 ) {
			alert('Map is Full | Reload');
			window.location.reload();
		}
		
	}

	// Private functions
	function isEmptyCell(field) {
		return field.getAttribute('value') == EMPTY_DOT;
	}

}

let game = new NoughtsAndCrosses();
game.initMap('NoughtsAndCrosses');
let inputs = document.getElementsByTagName('input');

for (var i = 0; i < inputs.length; i++) {

	inputs[i].onclick = function() {

		game.humanTurn(this);
		game.checkWin(game.HUMAN_DOT);
		game.isMapFull();
		// game.aiTurn();
		// game.checkWin(game.AI_DOT);
		// game.isMapFull();

	}
}





