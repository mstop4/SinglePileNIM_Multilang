/// @description Init Game

maxTake = irandom_range(2,5);
currentNum = maxTake * irandom_range(3,6) + irandom_range(1,maxTake);
gameIsOver = false;
whoseTurn = 1;
awaitingInput = true;
drawComTake = false;
drawPlayerTake = false; 