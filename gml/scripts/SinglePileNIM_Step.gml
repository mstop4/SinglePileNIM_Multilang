if (!gameIsOver)
{
    if (whoseTurn == 1)
    {
        if (awaitingInput == 1)
        {
            // Get an integer
            for (takeAmount=1; takeAmount<6; takeAmount++)
            {
                var curKey = keyboard_check_pressed(ord(string(takeAmount)));
                
                if (curKey)
                {
                    validInput = false;
                    
                    if (takeAmount<=maxTake)
                    {
                        validInput = true;
                        awaitingInput = false;
                        break;
                    }
                }
            }
        }
                    
        else
        {
            alarm[0] = 60;
            drawPlayerTake = true;
            currentNum = max(currentNum - takeAmount,0);
            whoseTurn = 2;
        }
    }
}
        
else
{
    var Y_key = keyboard_check_pressed(ord("Y"));
    var N_key = keyboard_check_pressed(ord("N"));
        
    if (Y_key)
    event_user(0);
    else if (N_key)
    {
        endGame = true;
        alarm[2] = 60;
    }
}
