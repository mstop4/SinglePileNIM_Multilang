/// @description Computer's turn

if (currentNum == 0)
{
	gameIsOver = true;
}

else
{
	comTakeAmount = max(1,((currentNum mod (maxTake+1)) + maxTake) mod (maxTake+1));
	currentNum = max(currentNum - comTakeAmount,0);
	drawComTake = true;
	alarm[1] = 60;
}