/* 
 * Single Pile NIM - Java Edition
 * By: M.S.T.O.P.
 * March 2017
 */

import java.util.Scanner;
import java.util.Random;
import java.lang.Math;

public class SinglePileNIM 
{
	public static void main(String[] args)
	{
		// Init Variables
		int currentNum;
		Random ran = new Random();
		
		int takeAmount = 0;
		int maxTake;
		String answer;
		
		int whoseTurn = 1;
		boolean gameIsOver = false;
		boolean gameLoop = true;
		boolean validInput;
		
		Scanner input = new Scanner(System.in);
		
		// Main Game Loop
		while (gameLoop)
		{
			// Setup
			maxTake = ran.nextInt(4) + 2;
			currentNum = maxTake * (ran.nextInt(4) + 3) + ran.nextInt(maxTake) + 1;
			gameIsOver = false;
			
			System.out.println("Single Pile NIM\n---------------\n");
			
			// Session loop
			while (!gameIsOver)
			{
				// Player's turn
				validInput = false;
				whoseTurn = 1;
				
				while (!validInput)
				{
					// Get an integer
					while (true)
					{
						System.out.println("Remaining total is: " + currentNum);
						System.out.println("How much will you take (1-" + maxTake + ")?");
						
						try
						{
							takeAmount = Integer.parseInt(input.nextLine());
							break;
						}
						
						catch (Exception e)
						{
							System.out.println("Invalid amount!\n");							
						}
					}					
						
					// Check to see if input is within the valid range
					if (takeAmount > 0 && takeAmount <= maxTake)
						validInput = true;
				
					else
						System.out.println("Invalid amount!\n");
				}
				
				System.out.println("You took " + takeAmount + ".\n");
				currentNum -= takeAmount;
				
				if (currentNum <= 0)
					gameIsOver = true;
				
				else
				{
					// Computer's turn
					whoseTurn = 2;
					
					takeAmount = Math.max(1,((currentNum % (maxTake+1)) + maxTake) % (maxTake+1));
					System.out.println("I will take " + takeAmount + ".\n");
					
					currentNum -= takeAmount;
					
					if (currentNum <= 0)
						gameIsOver = true;
				}
			}
			
			// Determine the winner
			if (whoseTurn == 1)
				System.out.println("I win, You lose.");
			
			else
				System.out.println("You win, I lose.");
			
			//Play again?
			validInput = false;
			
			// Get an string
			while (!validInput)
			{
				System.out.println("Would you like to play again? (Y/N)");
				answer = input.next();
				
				answer = answer.toUpperCase();
				
				// Check to see if input is "yes" or "no"
				if (answer.equals("N") || answer.equals("NO"))
				{
					gameLoop = false;
					validInput = true;
				}
				
				else if (answer.equals("Y") || answer.equals("YES"))
				{
					System.out.println("");
					validInput = true;
				}
				
				else
					System.out.println("Invalid answer!\n");
			}
		}
		
		input.close();
		System.out.println("\nGoodbye!");
	}
}
