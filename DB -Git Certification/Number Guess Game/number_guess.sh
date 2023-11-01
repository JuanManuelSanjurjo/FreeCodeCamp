#!/bin/bash
PSQL="psql --username=freecodecamp --dbname=number_guess -t --no-align -c"
RAND=$(( $RANDOM % 1000 + 1 ))

echo -e "Enter your username:"
read NAME 

USER=$($PSQL "SELECT username FROM users WHERE username='$NAME'")
echo $USER
GAMESPLAYED=$($PSQL "SELECT games_played FROM users WHERE username='$NAME'")
BESTGAME=$($PSQL "SELECT best_game FROM users WHERE username='$NAME'")
GUESSNUMBER=0
RESPONSE=0

MAIN_FUNC(){
  
  while [[ $RESPONSE  != $RAND  ]]
  do
    read RESPONSE
    while [[ ! $RESPONSE =~ ^[0-9]+$ ]]
    do
      echo -e "That is not an integer, guess again:"
      read RESPONSE
    done

    ((GUESSNUMBER++))

    if [[ $RESPONSE > $RAND ]]
      then 
        echo -e "It's lower than that, guess again:"
    elif [[ $RESPONSE < $RAND ]]
      then
        echo -e "It's higher than that, guess again:"
    else
        ((GAMESPLAYED++))
        echo -e "You guessed it in $GUESSNUMBER tries. The secret number was $RAND. Nice job!"
        
        if [[ $GUESSNUMBER < $BESTGAME ]]
        then
          FINISH=$($PSQL "UPDATE users SET games_played=$GAMESPLAYED, best_game=$GUESSNUMBER WHERE username='$NAME'")
        else
          FINISH=$($PSQL "UPDATE users SET games_played=$GAMESPLAYED WHERE username='$NAME'")
        fi

    fi
  done

}

if [[ -z $BESTGAME ]]
  then
  BESTGAME=5000
fi

if [[ -z $USER ]]
  then
  echo -e "Welcome, $NAME! It looks like this is your first time here."
  INSERT=$($PSQL "INSERT INTO users(username) VALUES('$NAME')")

  echo -e "Guess the secret number between 1 and 1000:"

  MAIN_FUNC
  
else
    echo -e "Welcome back, $USER! You have played $GAMESPLAYED games, and your best game took $BESTGAME guesses."    

    echo -e "Guess the secret number between 1 and 1000:"

  MAIN_FUNC
fi


