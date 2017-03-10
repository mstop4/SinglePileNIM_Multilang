/*
* Single Pile NIM - C++ Edition
* By: M.S.T.O.P.
* March 2017
*/

#include <iostream>
#include <string>
#include <random>
#include <algorithm>

// Init Variables
int currentNum;

int takeAmount = 0;
int maxTake;
std::string answer;

int whoseTurn = 1;
bool gameIsOver = false;
bool gameLoop = true;
bool validInput;

std::random_device	ran;
std::mt19937		mt(ran());

int main()
{
	//Main Game Loop
	while (gameLoop)
	{
		// Setup
		maxTake = std::uniform_int_distribution<int>{ 2, 5 }(mt);
		currentNum = maxTake * std::uniform_int_distribution<int>{ 3 , 6 }(mt) + std::uniform_int_distribution<int>{ 1, maxTake }(mt);
		gameIsOver = false;

		std::cout << "Single Pile NIM\n---------------\n" << std::endl;

		// Session Loop
		while (!gameIsOver)
		{
			// Player's turn
			validInput = false;
			whoseTurn = 1;

			while (!validInput)
			{
				std::cout << "Remaining total is: " << currentNum << std::endl;
				std::cout << "How much will you take (1-" << maxTake << ")?" << std::endl;

				// Get an integer
				std::cin >> takeAmount;
				while (std::cin.fail())
				{
					std::cout << "Invalid amount!\n" << std::endl;
					std::cin.clear();
					std::cin.ignore(256, '\n');
					std::cout << "Remaining total is: " << currentNum << std::endl;
					std::cout << "How much will you take (1-" << maxTake << ")?" << std::endl;
					std::cin >> takeAmount;
				}

				// Check to see if input is within the valid range
				if (takeAmount > 0 && takeAmount <= maxTake)
					validInput = true;

				else
					std::cout << "Invalid amount!\n" << std::endl;
			}
			
			std::cout << "You took " << takeAmount << ".\n" << std::endl;
			currentNum -= takeAmount;

			if (currentNum <= 0)
				gameIsOver = true;

			else
			{
				// Computer's turn
				whoseTurn = 2;

				takeAmount = std::max(1, ((currentNum % (maxTake + 1)) + maxTake) % (maxTake + 1));
				std::cout << "I will take " << takeAmount << ".\n" << std::endl;

				currentNum -= takeAmount;

				if (currentNum <= 0)
					gameIsOver = true;
			}
		}
		
		// Determine the winner
		if (whoseTurn == 1)
			std::cout << "I win, You lose." << std::endl;

		else
			std::cout << "You win, I lose." << std::endl;

		//Play again?
		validInput = false;

		// Get an string
		while (!validInput)
		{
			std::cout << "Would you like to play again (Y/N)?" << std::endl;
			std::cin >> answer;

			transform(answer.begin(), answer.end(), answer.begin(), ::toupper);

			// Check to see if input is "yes" or "no"
			if (answer.compare("N") == 0 || answer.compare("NO") == 0)
			{
				gameLoop = false;
				validInput = true;
			}

			else if (answer.compare("Y") == 0 || answer.compare("YES") == 0)
			{
				std::cout << std::endl;
				validInput = true;
			}

			else
				std::cout << "Invalid answer!\n" << std::endl;
		}
	}

	std::cout << "Goodbye!" << std::endl;
	return 0;
}