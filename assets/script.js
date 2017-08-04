// Tic Tac Toe

"use strict";

function NoughtsAndCrosses() {

	this.HUMAN_DOT = 'X';
	this.AI_DOT = 'O';
	const EMPTY_DOT = '*';
	let fields = new Array();
	this.inputs = document.getElementsByTagName('input');

	this.initMap = function() {

		for (var i = 0; i < this.inputs.length; i++) {
			this.inputs[i].setAttribute('value', EMPTY_DOT);
			fields.push(this.inputs[i]);
		}

	}

	this.humanTurn = function(field) {
		if(isEmptyCell(field)){
			field.parentNode.style.background = '#fafafa';
			field.setAttribute('value', this.HUMAN_DOT);
		}else {
			alert('Это поле занято');
		}
	}

	this.aiTurn = function() {
		
		do{
				var random = Math.floor(Math.random() * (8 - 0 + 1)) + 0;
		} while (fields[random].checked);


		fields[random].parentNode.style.background = '#ececec';
		fields[random].checked = true;
		fields[random].setAttribute('value', this.AI_DOT);

		console.log(fields[random].getAttribute('value'));

	}

	this.checkWin = function(char) {

		if(fields[0].getAttribute('value') == char && 
		fields[1].getAttribute('value') == char && 
		fields[2].getAttribute('value') == char) {
			return true;
		}

		if(fields[3].getAttribute('value') == char && 
		fields[4].getAttribute('value') == char && 
		fields[5].getAttribute('value') == char) {
			return true;
		}

		if(fields[6].getAttribute('value') == char && 
		fields[7].getAttribute('value') == char && 
		fields[8].getAttribute('value') == char) {
			return true;
		}

		if(fields[0].getAttribute('value') == char && 
		fields[3].getAttribute('value') == char && 
		fields[6].getAttribute('value') == char) {
			return true;
		}

		if(fields[1].getAttribute('value') == char && 
		fields[4].getAttribute('value') == char && 
		fields[7].getAttribute('value') == char) {
			return true;
		}

		if(fields[2].getAttribute('value') == char && 
		fields[5].getAttribute('value') == char && 
		fields[8].getAttribute('value') == char) {
			return true;
		}

		if(fields[0].getAttribute('value') == char && 
		fields[4].getAttribute('value') == char && 
		fields[8].getAttribute('value') == char) {
			return true;
		}

		if(fields[2].getAttribute('value') == char && 
		fields[4].getAttribute('value') == char && 
		fields[6].getAttribute('value') == char) {
			return true;
		}

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
			return true;
		}
		
	}

	this.endGame = function() {
		window.location.reload()
	}

	// Private functions
	function isEmptyCell(field) {
		return field.getAttribute('value') == EMPTY_DOT;
	}

}

let game = new NoughtsAndCrosses();
game.initMap('NoughtsAndCrosses');

for (var i = 0; i < game.inputs.length; i++) {

	game.inputs[i].onclick = function() {

		while(true) {
			game.humanTurn(this);

			if (game.checkWin(game.HUMAN_DOT)) {
				alert('Human WINS');
				game.endGame();
				break;
			}

			if (game.isMapFull()) {
				alert('Map Is Full');
				game.endGame();
				break;
			}

			game.aiTurn();

			if (game.checkWin(game.AI_DOT)) {
				alert('AI WINS');
				game.endGame();
				break;
			}

			if (game.isMapFull()) {
				alert('Map Is Full');
				game.endGame();
				break;
			}

			break;
		}

	}
}





