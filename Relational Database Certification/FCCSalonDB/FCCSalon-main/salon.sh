#!/bin/bash

PSQL="psql -t --username=freecodecamp --dbname=salon -c "

SERVICES=$($PSQL "select * from services")

PRINT_SERVICES(){
  echo "$SERVICES" | while read ID BAR NAME 
    do
      echo "$ID) $NAME"
    done
}
PRINT_SERVICES

MAIN_MENU(){
  echo "Select a service"
  read SERVICE_ID_SELECTED
  while [[ ! $SERVICE_ID_SELECTED =~ [1-3] ]]
  do
    PRINT_SERVICES
    read SERVICE_ID_SELECTED
  done
  echo -e "\nEnter your phone number"
  read CUSTOMER_PHONE
  CUSTOMER_ID=$($PSQL "SELECT customer_id FROM customers WHERE phone='$CUSTOMER_PHONE'")
  if [[ -z $CUSTOMER_ID ]]
  then
    echo -e "\nWe dont have you registered"
    echo -e "Please enter your name"
    read CUSTOMER_NAME
    INSERT_CUSTOMER=$($PSQL "INSERT INTO customers(phone,name) VALUES('$CUSTOMER_PHONE','$CUSTOMER_NAME')")
    CUSTOMER_ID=$($PSQL "SELECT customer_id FROM customers WHERE phone='$CUSTOMER_PHONE'")
    echo -e "\nEnter the date for your service"
    read SERVICE_TIME
    INSERT_APPOINTMENTS=$($PSQL "INSERT INTO appointments(customer_id,service_id,time) VALUES($CUSTOMER_ID,$SERVICE_ID_SELECTED,'$SERVICE_TIME')" )
    if [[ $INSERT_APPOINTMENTS == "INSERT 0 1" ]]
    then
      SERVICE=$($PSQL "SELECT name FROM SERVICES WHERE service_id=$SERVICE_ID_SELECTED")
      CUSTOMER_NAME=$($PSQL "SELECT name FROM customers WHERE customer_id='$CUSTOMER_ID'")
      FORMATED_NAME=$(echo $CUSTOMER_NAME | sed 's/^ *| *$//')
      echo -e "I have put you down for a $SERVICE at $SERVICE_TIME, $FORMATED_NAME."
    else
      MAIN_MENU "There was an error in your request, please try again"
    fi
  fi
}


MAIN_MENU