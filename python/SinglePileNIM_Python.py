# Single Pile NIM - Python Edition
# By: M.S.T.O.P.
# March 2017

import random

# Init Variables
currentNum = 0

takeAmount = 0
maxTake = 0
answer = ""

whoseTurn = 1
gameIsOver = False
gameLoop = True
validInput = False

# Main Game Loop
while gameLoop:

    # Setup
    maxTake = random.randint(2,5)
    currentNum = maxTake * random.randint(3,6) + random.randint(1,maxTake)
    gameIsOver = False

    print("Single Pile NIM\n---------------\n")

    # Session Loop
    while not gameIsOver:

        # Player's Turn
        validInput = False
        whoseTurn = 1

        while not validInput:

            print ("Remaining total is: {0}".format(currentNum))

            # Get an integer
            while True:
                try:
                    takeAmount = int(input("How much will you take (1-{0})?\n".format(maxTake)))
                except ValueError:
                    print("Invalid amount!\n")
                    continue
                else:
                    break
            # end while True

            # Check to see if input is within the valid range
            if takeAmount > 0 and takeAmount <= maxTake:
                validInput = True
            else:
                print("Invalid amount!\n")
        # end while not validInput

        print("\nYou took {0}.".format(takeAmount))
        currentNum -= takeAmount

        if currentNum <= 0:
            print("")
            gameIsOver = True
        else:
            # Computer's turn
            whoseTurn = 2

            takeAmount = max(1,((currentNum % (maxTake+1)) + maxTake) % (maxTake+1))
            print("I will take {0}.\n".format(takeAmount))

            currentNum -= takeAmount

            if currentNum <= 0:
                gameIsOver = True
        # end else
    #end while not gameIsOver

    # Determine the winner
    if whoseTurn == 1:
        print("I win, you lose.")
    else:
        print("You win, I lose.")

    # Play again?
    validInput = False

    while not validInput:

        # Get an string
        while True:
            try:
                answer = str(input("Would you like to play again (Y/N)?\n"))
            except ValueError:
                print("Invalid answer!\n")
                continue
            else:
                break
        # end while True

        answer = answer.upper()

        # Check to see if input is "yes" or "no"
        if answer == "N" or answer == "NO":
            gameLoop = False
            validInput = True
        #end if

        elif answer == "Y" or answer == "YES":
            print("")
            validInput = True
        #end elif

        else:
            print("Invalid answer!\n")
        #end else

    # end while not validInput
#end while gameLoop

print("\nGoodbye!")