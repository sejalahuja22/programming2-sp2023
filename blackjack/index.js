let playerHand = [];
let dealerHand = [];
let sum = 0
let dealerSum = 0



function openInstructions() {
	let modal = document.getElementById("myModal");
	modal.style.display = "block";
}

function closeInstructions() {
	let modal = document.getElementById("myModal");
	modal.style.display = "none";
}

function hit(){
	let hitCard = getCard();
	playerHand.push(hitCard);
	var userCards = document.getElementById("user-cards");
	userCards.innerText = userCards.innerText + ", " + hitCard;
	sum = sum + hitCard
	var yourSum = document.getElementById("sum");
	yourSum.innerText = "Your sum: " + (sum);
	if (sum > 21){
		alert("You busted!")
	}
	else if (sum === 21){
		alert("You got Blackjack! You win!")
	}
	else if (dealerSum === 21){
		alert("Dealer got Blackjack. You lose!")
	}
	
}

function stay(){
	while (dealerSum < 16){
	let hitCard = getCard();
	dealerHand.push(hitCard);
	var dealerCards = document.getElementById("dealer-cards");
	dealerCards.innerText = dealerCards.innerText + ", " + hitCard;
	dealerSum = dealerSum + hitCard
	}

	if (sum > 21){
		alert("You busted! Dealer wins!")
	}
	else if (dealerSum > 21){
		alert("Dealer busted! You win!")
	}
	else if (dealerSum === sum){
		alert("Draw. Try again.")
	}
	else if (dealerSum > sum){
		alert("You lose.")
	}
	else if (sum > dealerSum){
		alert("You win!!")
	}
	var dealer_sum = document.getElementById("dealerSum");
	dealer_sum.innerText = "Dealer's sum: " + (dealerSum);

}

function startNewGame(){
	playerHand = [];
	dealerHand = [];
	sum = 0


	let card1 = getCard();
	playerHand.push(card1);

	let card2 = getCard();
	playerHand.push(card2);


	let card3 = getCard();
	dealerHand.push(card3);

	let card4 = getCard();
	dealerHand.push(card4);

	var yourSum = document.getElementById("sum");
	var userCards = document.getElementById("user-cards");
	var dealerCards = document.getElementById("dealer-cards");

	var dealer_sum = document.getElementById("dealerSum");
	dealer_sum.innerText = "Dealer's sum: " + (card3 + card4);

	dealerSum = card3 + card4

	for(let i = 0; i < playerHand.length; i++){
		sum = sum + playerHand[i]
	}

	userCards.innerText = "The user's cards are: " + playerHand[0] + ", " + playerHand[1];
	dealerCards.innerText = "The dealer's cards are: " + dealerHand[0] + ", " + dealerHand[1];
	yourSum.innerText = "Your sum: " + (card1 + card2);

	var hitButton = document.getElementById("hit");
	hitButton.disabled = false;
	var stayButton = document.getElementById("stay");
	stayButton.disabled = false;
}

function getCard(){
	// draw a card at random
	var minInt = 1;
	var maxInt = 10;
	var card = Math.floor(Math.random()*(maxInt-minInt+1)+minInt);
	return card;
}










