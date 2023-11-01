#! /bin/bash

if [[ $1 == "test" ]]
then
  PSQL="psql --username=postgres --dbname=worldcuptest -t --no-align -c"
else
  PSQL="psql --username=freecodecamp --dbname=worldcup -t --no-align -c"
fi

# Do not change code above this line. Use the PSQL variable above to query your database.
# limpiar tablas cada vez que ejecuta el script
echo $($PSQL "TRUNCATE  games, teams");

cat games.csv | while IFS="," read year round winner opponent winner_goals opponent_goals
do 
  if [[ $year != "year" ]]
    then
    WINNER_ID=$($PSQL "select team_id from teams where name='$winner' ")
    OPPONENT_ID=$($PSQL "select team_id from teams where name='$opponent' ")
      if [[ -z $WINNER_ID ]]
        then
        WINNER=$($PSQL "INSERT INTO TEAMS(name) VALUES('$winner')" )
      fi
      if [[ -z $OPPONENT_ID ]]
      then
        OPPONENT=$($PSQL "INSERT INTO TEAMS(name) VALUES('$opponent')" )
      fi
    WINNER_ID=$($PSQL "select team_id from teams where name='$winner' ")
    OPPONENT_ID=$($PSQL "select team_id from teams where name='$opponent' ")
    ## INSERT GAMES
    echo $($PSQL "INSERT INTO games(year,round,winner_id,opponent_id,winner_goals,opponent_goals) VALUES($year,'$round',$WINNER_ID,$OPPONENT_ID,$winner_goals,$opponent_goals)")

  fi
done 