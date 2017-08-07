#
# Single Pile NIM - Ruby Edition
# By: M.S.T.O.P.
# August 2017
#

# Init variables
current_num = 0

take_amount = 0
max_take = 0
answer = ""

whose_turn = 1
game_is_over = false
game_loop = true

# Main Game Loop
while game_loop do

  # Setup
  max_take = 2 + rand(4)
  current_num = max_take * (3 + rand(4)) + 1 + rand(max_take)
  game_is_over = false

  puts "Single Pile NIM\n---------------\n"

  # Session loop
  while !game_is_over do

    # Get an integer within range
    begin
      puts "\nRemaining total is: #{current_num}"
      puts "How much will you take (1-#{max_take})?"
      take_amount = Integer(gets.chomp)
      raise if take_amount < 1 || take_amount > max_take
    rescue
      puts "Invalid amount!\n"
      retry
    end

    puts "You took #{take_amount}.\n"
    current_num -= take_amount

    if current_num <= 0
      game_is_over = true
    else
      # Computer's turn
      whose_turn = 2

      take_amount = [ 1, ((current_num % ( max_take + 1 )) + max_take ) % ( max_take + 1 ) ].max
      puts "I will take #{take_amount}.\n"

      current_num -= take_amount

      game_is_over = true if current_num <= 0
    end
  end

  # Determine the winner
  if whose_turn == 1
    puts "\nI win, you lose."
  else
    puts "\nYou win, I lose."
  end

  # Play again?
  begin
    puts "\nWould you like to play again? (Y/N)"
    answer = gets.chomp.upcase

    if answer == "N" || answer == "NO"
      game_loop = false
    elsif answer == "Y" || answer == "YES"
      puts ""
    else
      raise
    end
  rescue
    puts "Invalid answer!\n"
    retry
  end
end

puts "\nGoodbye!"