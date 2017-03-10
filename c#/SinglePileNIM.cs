/* 
 * Single Pile NIM - C# Edition
 * By: M.S.T.O.P.
 * March 2017
 */

using System;

namespace SinglePileNIM_CSharp
{
    class SinglePileNIM
    {
        static void Main(string[] args)
        {
            // Init variables
            int currentNum;
            Random ran = new Random();

            int takeAmount = 0;
            int maxTake;
            String answer;

            int whoseTurn = 1;
            bool gameIsOver = false;
            bool gameLoop = true;
            bool validInput;

            // Main Game Loop
            while (gameLoop)
            {
                // Setup
                maxTake = ran.Next(2, 6);
                currentNum = maxTake * ran.Next(3, 7) + ran.Next(1, maxTake + 1);
                gameIsOver = false;

                Console.WriteLine("Single Pile NIM\n---------------\n");

                //Session Loop
                while (!gameIsOver)
                {
                    // Player's Turn
                    validInput = false;
                    whoseTurn = 1;

                    while (!validInput)
                    {
                        //Get an integer
                        while (true)
                        {
                            Console.WriteLine("Remaining total is: {0}", currentNum);
                            Console.WriteLine("How much will you take (1-{0})?", maxTake);

                            bool success = int.TryParse(Console.ReadLine(), out takeAmount);

                            if (success)
                                break;
                            else
                                Console.WriteLine("Invalid amount!\n");
                        }

                        // Check to see if input is within the valid range
                        if (takeAmount > 0 && takeAmount <= maxTake)
                            validInput = true;

                        else
                            Console.WriteLine("Invalid amount!\n");
                    }

                    Console.WriteLine("You took {0}.\n", takeAmount);
                    currentNum -= takeAmount;

                    if (currentNum <= 0)
                        gameIsOver = true;

                    else
                    {
                        //Computer's turn
                        whoseTurn = 2;

                        takeAmount = Math.Max(1,((currentNum % (maxTake+1)) + maxTake) % (maxTake+1));
                        Console.WriteLine("I will take {0}.\n", takeAmount);

                        currentNum -= takeAmount;

                        if (currentNum <= 0)
                            gameIsOver = true;
                    }
                }

                // Determine the winner
                if (whoseTurn == 1)
                    Console.WriteLine("I win, You lose.");
			
			    else
                    Console.WriteLine("You win, I lose.");

                //Play again?
                validInput = false;

                // Get an string
                while (!validInput)
                {
                    Console.WriteLine("Would you like to play again? (Y/N)");
                    answer = Console.ReadLine();

                    answer = answer.ToUpper();

                    // Check to see if input is "yes" or "no"
                    if (answer.Equals("N") || answer.Equals("NO"))
                    {
                        gameLoop = false;
                        validInput = true;
                    }

                    else if (answer.Equals("Y") || answer.Equals("YES"))
                    {
                        Console.WriteLine("");
                        validInput = true;
                    }

                    else
                        Console.WriteLine("Invalid answer!\n");
                }
            }

            Console.WriteLine("\nGoodbye!");
        }
    }
}
