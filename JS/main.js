
var cards = [
	{
		rank: 'queen',
		suit: 'hearts',
		cardImage: 'images/queen-of-hearts.png'
	},

	{
		rank: 'queen',
		suit: 'diamonds',
		cardImage: 'images/queen-of-diamonds.png'
	},

	{
		rank: 'king',
		suit: 'hearts',
		cardImage: 'images/king-of-hearts.png'

	},

	{	
		rank: 'king',
		suit: 'diamonds',
		cardImage: 'images/king-of-diamonds.png'
	},

];

findImage: function findImage (card) {
	console.log(card.cardImage);
}

findSuit: function findSuit (card) {
    
    console.log(card.suit);
}

// get the card that gets flipped, after the flipCard function
// maysbe cards.[0] for example

findImage(cards[0]);
findSuit(cards[0]);




var cardsInPlay = [];

var checkForMatch = function(){
	//this step//
	if (cardsInPlay[0] === cardsInPlay[1]){
		alert("you found a match!");
	} else {
		alert("sorry try again");
	};

}



var flipCard = function() {

//this step//
var cardId = this.getAttribute('data-id');
console.log("this is the id of the card" + " " + cardId);
console.log("user flipped" + " " + cards[cardId].rank);
cardsInPlay.push("cards[cardId].rank");
document.getElementByTagName('img')[0].setAttribute('src', (cards[cardId].cardImage));

if (cardsInPlay.length === 2) {
	checkForMatch();

}

};

var createBoard = function() {
		//this step//
		for (var i = 0; i < cards.length; i++) {
			var cardElement = document.createElement('img');
			//images arent showing since update//
			cardElement.setAttribute('src', '../images/back.png');
			cardElement.setAttribute('data-id', i);

			cardElement.addEventListener('click', flipCard);
			//this step//
			var gameBoard = document.getElementById("game-board");
				gameBoard.appendChild(cardElement);
		};
	};

createBoard();




