var currentNum;
var maxTake;
var whoseTurn;
var gameIsOver;

var playerInput;
var playerText;
var comText;
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
	comText = document.getElementById("comTake");
	messageText = document.getElementById("message");
	remainText = document.getElementById("remain");
	playerSubmit = document.getElementById("playerSubmit");

	maxTake = randomRange(2,5);
	currentNum = maxTake * randomRange(3,6) + randomRange(1,maxTake);
	gameIsOver = false;
	takeAmount = 0;
	
	remainText.innerHTML = currentNum;
	comText.innerHTML = "";
	messageText.innerHTML = "";

	setupPlayersTurn();
}

function setupPlayersTurn() {
	if (currentNum <= 0)
		winrar();

	else
	{
		whoseTurn = 1;

		playerText.innerHTML = "How much will you take (1-" + maxTake + ")?";

		if (takeAmount !== 0)
			comText.innerHTML = "(I took " + takeAmount + " last turn.)";

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

		comText.innerHTML = "I will take: " + takeAmount;
		currentNum -= takeAmount;
		remainText.innerHTML = currentNum;
		setTimeout(setupPlayersTurn,1500);
	}
}

function clickOK() {

	if (!gameIsOver)
	{
		var number = parseInt(playerInput.value);

		if (!isNaN(number) && number <= maxTake && number >= 0 && number <= currentNum)
		{
			messageText.innerHTML =  "";
			currentNum -= number;
			remainText.innerHTML = currentNum;
			playerText.innerHTML = "You took:";
			comText.innerHTML = "";
			playerInput.disabled = true;
			playerSubmit.disabled = true;
			setTimeout(setupComputersTurn,1500);
		}

		else
			messageText.innerHTML = "Invalid input!";
	}

	else
	{
		loadInit();
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