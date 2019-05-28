	const playerCards = [],
	dealer = [];
	let table = [];
	const Constr = function (suits, values) {
		this.suits=suits;
		this.values=values;
	};

	const generateDeck = {
      suits: ['Hearts', 'Spades', 'Clubs', 'Diamonds'],
	    values: ['Ace', 6, 7, 8, 9, 10, 'Jack', 'Queen', 'King']
	    };
		
	function deckArray(){
	  for(var i = 0, arr = []; i < generateDeck.suits.length; i++) {
		  for (var j = 0; j < generateDeck.values.length; j++){
		arr.push(new Constr(generateDeck.suits[i], generateDeck.values[j]));
		  }
	}	
	return arr;
	};	
		
	const deck = deckArray(); //--> Колода карт
	
	
		function addCards (name) {
		for (var i=0; i<1; i++) {
			name.unshift(deck[deck.length - 1]);
			deck.pop();
		}
	};
	
			
	function deckRandom(a, b) {
  return Math.random() - 0.5;
}

deck.sort(deckRandom);


const btn1 = document.querySelector('.btn1'),
			btn2 = document.querySelector('.btn2'),
			result = document.querySelector('.result');
	
	btn1.addEventListener('click', function () {
		for (var i=0; i<1; i++) {
			table.unshift(deck[deck.length - 1]);
			deck.pop();
		}
		console.log('на столе: ' + table.length);
		console.log('карт у игрока  ' + playerCards);
		
		if (table[0].suits == table[1].suits) {
			result.textContent = 'Совпало!';	
			playerCards.push(table);
			table = [];
			console.log('Добавили карты  ' + playerCards);
			console.log('карт на столе  ' + table);
		}else{
			result.textContent = 'НЕ Совпало!';
		};
	
	});
	/*btn1.addEventListener('click', function () {
		if (table[0].suits == table[1].suits) {
			result.textContent = 'Совпало!';
			playerCards.push(table);
			table.length = 0;
			console.log(playerCards);
		}else{
			result.textContent = 'НЕ Совпало!';
		};
		
		});*/
		