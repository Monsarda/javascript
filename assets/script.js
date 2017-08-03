// Tic Tac Toe

"use strict";

function NoughtsAndCrosses() {

	this.HUMAN_DOT = 'X';
	this.AI_DOT = 'O';
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
		fields[random].setAttribute('value', this.HUMAN_DOT);

		console.log(fields[random].getAttribute('value'));

	}

	this.checkWin = function(char) {

		if(fields[0].getAttribute('value') == char && 
		fields[1].getAttribute('value') == char && 
		fields[2].getAttribute('value') == char) {
			alert('Human Is Win | Reload');
			window.location.reload();
		}

		if(fields[3].getAttribute('value') == char && 
		fields[4].getAttribute('value') == char && 
		fields[5].getAttribute('value') == char) {
			alert('Human Is Win | Reload');
			window.location.reload();
		}

		if(fields[6].getAttribute('value') == char && 
		fields[7].getAttribute('value') == char && 
		fields[8].getAttribute('value') == char) {
			alert('Human Is Win | Reload');
			window.location.reload();
		}

		if(fields[0].getAttribute('value') == char && 
		fields[3].getAttribute('value') == char && 
		fields[6].getAttribute('value') == char) {
			alert('Human Is Win | Reload');
			window.location.reload();
		}

		if(fields[1].getAttribute('value') == char && 
		fields[4].getAttribute('value') == char && 
		fields[7].getAttribute('value') == char) {
			alert('Human Is Win | Reload');
			window.location.reload();
		}

		if(fields[2].getAttribute('value') == char && 
		fields[5].getAttribute('value') == char && 
		fields[8].getAttribute('value') == char) {
			alert('Human Is Win | Reload');
			window.location.reload();
		}

		if(fields[0].getAttribute('value') == char && 
		fields[4].getAttribute('value') == char && 
		fields[8].getAttribute('value') == char) {
			alert('Human Is Win | Reload');
			window.location.reload();
		}

		if(fields[2].getAttribute('value') == char && 
		fields[4].getAttribute('value') == char && 
		fields[6].getAttribute('value') == char) {
			alert('Human Is Win | Reload');
			window.location.reload();
		}
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
		game.aiTurn();
		game.checkWin(game.AI_DOT);
		game.isMapFull();

	}
}





