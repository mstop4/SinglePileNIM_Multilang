draw_set_font(fnt_text);
draw_set_color(c_white);

if (endGame)
{
    draw_text(16,16,"Goodbye!");
}

else
{
    draw_text(16,16,"Single Pile NIM");
    draw_line(16,16+string_height("S")+4,16+string_width("Single Pile NIM"),16+string_height("S")+4);
    
    if (!gameIsOver)
    {
        // NOTE: If this script is used in GM:S, change the '\n' to a '#'
        draw_text(16,80,"Remaining total is: " + string(currentNum)
        + "\nHow much will you take? (Press 1-" + string(maxTake) + ")");
        
        if (!validInput)
            draw_text(16,176,"Invalid amount!");
        
        else if (drawPlayerTake)
            draw_text(16,176,"You took " + string(takeAmount) + ".");
        
        if (drawComTake)
            draw_text(16,208,"I will take " + string(comTakeAmount) + ".");
    }
        
    else
    {
        if (whoseTurn == 1)
            draw_text(16,80, "I win, you lose.");
        
        else
            draw_text(16,80, "You win, I lose.");
        
        
        draw_text(16,144,"Play again? (Y/N)");
        
        if (!validInput)
            draw_text(16,176,"Invalid answer!");
    }
}
