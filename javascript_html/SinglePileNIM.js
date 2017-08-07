//
// Single Pile NIM - Javascript Edition
// By: M.S.T.O.P.
// June 2017
//

var currentNum;
var maxTake;
var whoseTurn;
var gameIsOver;

var playerInput;
var playerText;
var rangeText;
var comText = [];
var comValueText;
var messageText;
var remainText;
var playerSubmit;
var takeAmount;

// returns a random integer between min and max inclusive
function randomRange(min, max) {
	return Math.floor(Math.random() * (max - min + 1)) + min;
}

function loadInit() {

	playerInput = document.getElementById("playerInput");
	playerText = document.getElementById("playerQuestion");
	rangeText = document.getElementById("range");
	comText[0] = document.getElementById("comTake1");
	comText[1] = document.getElementById("comTake2");
	comValueText = document.getElementById("comValue");
	messageText = document.getElementById("message");
	remainText = document.getElementById("remain");
	playerSubmit = document.getElementById("playerSubmit");

	maxTake = randomRange(2,5);
	currentNum = maxTake * randomRange(3,6) + randomRange(1,maxTake);
	gameIsOver = false;
	takeAmount = 0;

	remainText.innerHTML = currentNum;
	comText[0].innerHTML = "";
	comValueText.innerHTML = "";
	comText[1].innerHTML = "";
	messageText.innerHTML = "";

	setupPlayersTurn();
}

function setupPlayersTurn() {
	if (currentNum <= 0)
		winrar();

	else
	{
		whoseTurn = 1;

		playerText.innerHTML = "How much will you take? "
		rangeText.innerHTML = "(1-" + maxTake + ")";

		if (takeAmount !== 0)
		{
			comText[0].innerHTML = "(I took ";
			comValueText.innerHTML = takeAmount;
			comText[1].innerHTML = " last turn.)";
		}

		playerInput.disabled = false;
		playerSubmit.disabled = false;
	}
}

function setupComputersTurn() {
	if (currentNum <= 0)
		winrar();

	else
	{
		whoseTurn = 2;

		takeAmount = Math.max(1,((currentNum % (maxTake+1)) + maxTake) % (maxTake+1));

		comText[0].innerHTML = "I will take: ";
		comValueText.innerHTML = takeAmount;
		comText[1].innerHTML = "";
		setTimeout(decrementNumber(currentNum - takeAmount),250);
	}
}

function clickOK() {

	if (!gameIsOver)
	{
		var number = parseInt(playerInput.value);

		if (!isNaN(number) && number <= maxTake && number >= 0 && number <= currentNum)
		{
			messageText.innerHTML =  "";
			playerText.innerHTML = "You took:";
			rangeText.innerHTML = "";
			comText.innerHTML = "";
			playerInput.disabled = true;
			playerSubmit.disabled = true;
			setTimeout(decrementNumber(currentNum - number),250);
		}

		else
			messageText.innerHTML = "Invalid input!";
	}

	else
	{
		loadInit();
	}
}

function decrementNumber(targetNum) {

	if (currentNum > targetNum)
	{
		currentNum--;
		remainText.innerHTML = currentNum;
		setTimeout(function() {decrementNumber(targetNum)},100);
	}

	else
	{
		if (whoseTurn == 1)
			setTimeout(setupComputersTurn,1000);
		else
			setTimeout(setupPlayersTurn,1000);
	}
}

function winrar() {

	if (whoseTurn == 1)
	{
		messageText.innerHTML =  "I win, you lose.";
	}

	else
	{
		messageText.innerHTML =  "You win, I lose.";
	}

	gameIsOver = true;
	setTimeout(playAgain,1500)
}

function playAgain() {

	playerInput.disabled = false;
	playerSubmit.disabled = false;
	playerInput.value = "";
	playerText.innerHTML = "Click OK to play again.";
}