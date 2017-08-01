// Tic Tac Toe

"use strict";

function TicTacToe() {

	let collection = document.getElementsByTagName('input');
	this.input = new Array();
	
	// --------------- //

	this.init = function() {

		for (var i = 0; i < collection.length; i++) {
			this.input.push(collection[i]);
		}

	}

	this.userTurn = function(el) {

		el.parentNode.style.background = '#fafafa';
		el.checked = true;

	}

	this.pcTurn = function() {

		// На последнем шаге зависает
		do{
			var random = Math.floor(Math.random() * (8 - 0 + 1)) + 0;
		} while (this.input[random].checked);


		this.input[random].parentNode.style.background = '#ececec';
		this.input[random].checked = true;

	}

	this.checkFullArea = function() {

		var counter = 0;

		for (var i = 0; i < this.input.length; i++) {
			
			if (this.input[i].checked) {
				counter++;
			}
		}
		console.log(counter);
		if (counter >= 8) {
			return false
		}else{
			return true;
		}

	}


}

let game = new TicTacToe();
game.init();

for (var i = 0; i < game.input.length; i++) {
	
	game.input[i].onclick = function() {

		game.userTurn(this);

		let checkFullArea = game.checkFullArea();

		if(checkFullArea == true)
		{
			game.pcTurn();
		}else{
			alert('AREA IS FULL');
		}
		
	}

}



