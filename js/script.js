let playerCards = [];
let	computerCards = [];

let table = [];



const generateDeck = {
	suits: ['Hearts', 'Spades', 'Clubs', 'Diamonds'],
	values: ['Ace', 6, 7, 8, 9, 10, 'Jack', 'Queen', 'King']
};

function deckArray() {
	for (var i = 0, arr = []; i < generateDeck.suits.length; i++) {
		for (var j = 0; j < generateDeck.values.length; j++) {
			arr.push({suits : generateDeck.suits[i], values : generateDeck.values[j]});
		}
	}
	return arr;
};

const deck = deckArray();

function deckRandom(a, b) {
	return Math.random() - 0.5;
}

deck.sort(deckRandom);

const btn1 = document.querySelector('#btn1'),
	btn2 = document.querySelector('#btn2'),
	result = document.querySelector('.result');

btn1.addEventListener('click', function () {

	function moveCard (numberOfCards) {
		if (numberOfCards.length == 0) {
		table.push(deck[deck.length - 1]);
		deck.pop();
		} else {
			table.push(numberOfCards[0]);
			numberOfCards.shift();
		};
};

	moveCard(playerCards);

	console.log('Походил игрок, карт на столе: ' + table.length);

	
		if (table.length > 1 && table[table.length - 1].suits == table[table.length - 2].suits) {
			console.error('Совпало у игрока');
			result.textContent = 'Совпало!';
			playerCards = playerCards.concat(table);
			table = [];
			console.log('карт у игрока: ' + playerCards.length);
			console.log('карт на столе: ' + table.length);

			} else {
				moveCard( computerCards);
				console.log('Комп походил, карт на столе: ' + table.length);
				console.log('карт у игрока: ' + playerCards);
				console.log('карт у Компа: ' +  computerCards);
				console.log(playerCards);
				console.log( computerCards);
				console.log(table);

				if (table[table.length - 1].suits == table[table.length - 2].suits)	{
					console.error('Совпало у компа');
					computerCards =  computerCards.concat(table);
					table = [];
					table.push( computerCards[0]);
					computerCards.shift();
					console.log('Копм походил с рук');
					console.log('карт на столе: ' + table.length);
					console.log('карт у Компа: ' +  computerCards.length);
				}
		};


	console.error ('карт в колоде  ' + deck.length);
	console.log(computerCards);
	console.log(playerCards);
	
	if ( deck == 0 && playerCards.length == 0 ){
		console.log ('Game over! Winner Player!');
		btn1.disabled = true;
	} else if ( deck == 0 && computerCards.length == 0 ){
		console.log ('Game over! Winner Computer!');
		btn1.disabled = true;
	};
});

const img = document.querySelector('.playing-field');

img.innerHTML = "<img src='img/Clubs3.png'> ";

