##################  BUDGET APP ################## 
import math
class Category:

    def __init__(self,name):
        self.name = name
        self.ledger = []
    
    def __str__(self):
        total = 0
        string = ""
        string += self.name.center(30,"*") + "\n"
        # string += self.printCategoryLine()
        for x in self.ledger:
            description = x["description"]
            amountStr =  str(f"{x['amount']:.2f}")    
            if(len(description) >= 23 ):
                description =  (description[:23])
            else:
                description =  (description[:len(description)] + (" " * (23 - len(description))))
            if(len(amountStr) < 7):
                amountStr = amountStr
                amountStr = (" " * ( 7 - len(amountStr))) + amountStr
            else:
                amountStr =  (amountStr[:7])
            total+= x["amount"]
            string+= (description  + amountStr + "\n")
        string+=("Total: " + f"{total:.2f}" )
        return string

    # def get_balance(self):
    #     total = 0
    #     self.printCategoryLine()
    #     for x in self.ledger:
    #         description = x["description"]
    #         amountStr =  str(f"{x['amount']:.2f}")    
    #         if(len(description) >= 23 ):
    #             description =  (description[:23])
    #         else:
    #             description =  (description[:len(description)] + (" " * (23 - len(description))))

    #         if(len(amountStr) < 7):
    #             amountStr = amountStr
    #             amountStr = (" " * ( 7 - len(amountStr))) + amountStr
    #         else:
    #             amountStr =  (amountStr[:7])

    #         total+= x["amount"]
    #         print(description  + amountStr)
    #     print("Total: " + f"{total:.2f}")
    #     return total
    
    def get_balance(self):
        total = 0
        for x in self.ledger:
            total+= x["amount"]
        return total 
    
    def printCategoryLine(self):
        length = 30 - len(self.name)
        return "*" * round((length/2)) + self.name.title() + "*" * round((length/2))  + "\n"
       

    def deposit(self,amount = 0,description = ""):
        self.ledger.append({"amount": float(amount), "description": description})
        

    def withdraw(self,amount = 0,description = ""):
        if(self.check_funds(amount)):
            self.ledger.append({"amount": - amount, "description": description})
            return True
        return False

    def transfer(self, amount, budget_category = ""):
        if(self.check_funds(amount)):
            self.withdraw(amount,  "Transfer to " + budget_category.name )
            budget_category.deposit(amount, "Transfer from " + self.name)
            return True
        else:
            return False

    def check_funds(self, amount):
        total = 0
        for x in self.ledger:
            total+= x["amount"]
        if(amount <= total):
            return True
        return False

def get1Percent(category):
    total = 0
    for item in category:
         for x in item.ledger:
             if(x["amount"] < 0):
                 total+= x["amount"]
    return abs(total / 100)

def getTotal(category):   # ESTAN MAL LOS PORCENTAJES PORQUE SE ESTA HACIENDO SOBRE LOS MONTOS PARCIALES, HAY MAS COLUMNAS QUE CATEGORIAS
    total = 0
    for item in category:
         for x in item.ledger:
             if(x["amount"] < 0):
                 total+= x["amount"]
    return total

def getPercentages(category):
    percentages = []
    OnePercent = get1Percent(category)
    for item in category:
        subtotal = 0
        for x in item.ledger:
            if(x["amount"] < 0):
                subtotal+= abs((x["amount"]))     
        percentages.append(int(subtotal / OnePercent))
    return percentages


def create_spend_chart(category):
  percentages = getPercentages(category)
  line100 = "100|"
  line90 = " 90|"
  line80 = " 80|"
  line70 = " 70|"
  line70 = " 70|"
  line60 = " 60|"
  line50 = " 50|"
  line40 = " 40|"
  line30 = " 30|"
  line20 = " 20|"
  line10 = " 10|"
  line0 = "  0|"
  string = "Percentage spent by category\n"
  for cat in percentages:
    catlen = len(str(cat)) - 1
    cat = (math.floor(cat / 10) * 10)
    line100 += (" o " if cat == 100 else "   ")
    line90 += (" o " if cat >= 90 else "   ")
    line80 += (" o " if cat >= 80 else "   ")
    line70 += (" o " if cat >= 70 else "   ")
    line60 += (" o " if cat >= 60 else "   ")
    line50 += (" o " if cat >= 50 else "   ")
    line40 += (" o " if cat >= 40 else "   ")
    line30 += (" o " if cat >= 30 else "   ")
    line20 += (" o " if cat >= 20 else "   ")
    line10 += (" o " if cat >= 10 else "   ")
    line0 += (" o " if cat >= 0 else "   ")
  string += (line100 + " \n" + line90 + " \n" + line80 + " \n" + line70 +
             " \n" + line60 + " \n" + line50 + " \n" + line40 + " \n" +
             line30 + " \n" + line20 + " \n" + line10 + " \n" + line0 + " \n")
  separator = "    --" + ("-" * (len(line0) - 5))
  string+= separator 

  string+="\n" + printChartCategories(category)
  return string


# def create_spend_chart(category):
#     string = ""
#     percentages = getPercentages(category)
#     line100 = "100|"; line90 =  " 90|"; line80 =  " 80|";  line70 =  " 70|";  line70 =  " 70|"; line60 =  " 60|"; line50 =  " 50|"; line40 =  " 40|"; line30 =  " 30|"; line20 =  " 20|"; line10 =  " 10|"; line0 =   "  0|"
#     string+= ("Percentage spent by category")
#     for cat in percentages:
#         catlen = len(str(cat)) - 1
#         # cat = (math.ceil(cat / 10) * 10) if int(str(cat)[catlen]) >= 5 else (math.floor(cat / 10) * 10)
#         cat = (math.floor(cat / 10) * 10)
#         line100+= (" o " if cat == 100 else "   ")
#         line90 += (" o " if cat >= 90 else "   ")
#         line80 += (" o " if cat >= 80 else "   ")
#         line70 += (" o " if cat >= 70 else "   ")
#         line60 += (" o " if cat >= 60 else "   ")
#         line50 += (" o " if cat >= 50 else "   ")
#         line40 += (" o " if cat >= 40 else "   ")
#         line30 += (" o " if cat >= 30 else "   ")
#         line20 += (" o " if cat >= 20 else "   ")
#         line10 += (" o " if cat >= 10 else "   ")
#         line0  += (" o " if cat >= 0 else "   ")
#     string+=( "\n" + line100  + "\n" + line90  +"\n" + line80  +"\n" + line70 +"\n" + line60 +"\n" + line50 +"\n" + line40 +"\n" + line30 +"\n" + line20 +"\n" + line10 +"\n" + line0 ) 
    
#     separator = "--" + ("-" * (len(line0) - 5)) 
#     string+=("\n    " + separator + "\n") 
#     string+=printChartCategories(category)
#     return string


def printChartCategories(category_list):
  string = ""
  cat = []
  longest = 0
  for item in category_list:
    cat.append(item.name)
    longest = len(item.name) if len(item.name) > longest else longest

  for i in range(longest ):
    string += ("     ")
    for x in cat:
      try:
        string += (x[i] + "  ")
      except:
        string += (" " + "  ")
    if(i != longest - 1):
      string += ("\n")
  
  return string



# budgetRopa = Category("ropa")    
# budgetRopa.deposit(1150, "ingreso inicial")
# budgetRopa.deposit(250, "regalo para comprar")
# budgetRopa.deposit(250, "regalo para comprar ropa de viaje")
# budgetRopa.withdraw(100, "ropa-trabajo")
# budgetRopa.withdraw(500, "ropa-viaje")

# budgetComida = Category("COMIDA")    
# budgetComida.deposit(2000, "ingreso inicial")
# budgetComida.withdraw(400, "supermercado")
# budgetComida.withdraw(500, "dietetica")

# print("\n~~~GET BALANCE~~~\n")
# budgetRopa.get_balance()
# print("\n~~~GET BALANCE~~~\n")
# budgetComida.get_balance()
# print("\n~~~GET CHART~~~\n")
# create_spend_chart([budgetRopa, budgetComida ])


# food = Category("Food")
# food.deposit(1000, "initial deposit")
# food.withdraw(10.15, "groceries")
# food.withdraw(15.89, "restaurant and more food for dessert")
# print(food.get_balance())
# clothing = Category("Clothing")
# food.transfer(50, clothing)
# clothing.withdraw(25.55)
# clothing.withdraw(100)
# auto = Category("Auto")
# auto.deposit(1000, "initial deposit")
# auto.withdraw(15)

# print(food)
# print(clothing)

# print(create_spend_chart([food, clothing, auto]))
# print("Percentage spent by category\n100|          \n 90|          \n 80|          \n 70|    o     \n 60|    o     \n 50|    o     \n 40|    o     \n 30|    o     \n 20|    o  o  \n 10|    o  o  \n  0| o  o  o  \n    ----------\n     B  F  E  \n     u  o  n  \n     s  o  t  \n     i  d  e  \n     n     r  \n     e     t  \n     s     a  \n     s     i  \n           n  \n           m  \n           e  \n           n  \n           t  ")

food = Category("Food")
entertainment = Category("Entertainment")
business = Category("Business")
food.deposit(900, "deposit")
entertainment.deposit(900, "deposit")
business.deposit(900, "deposit")
food.withdraw(105.55)
entertainment.withdraw(33.40)
business.withdraw(10.99)
print(business)
print(food)
print(entertainment)
print(create_spend_chart([business, food, entertainment]))
expected = "Percentage spent by category\n100|          \n 90|          \n 80|          \n 70|    o     \n 60|    o     \n 50|    o     \n 40|    o     \n 30|    o     \n 20|    o  o  \n 10|    o  o  \n  0| o  o  o  \n    ----------\n     B  F  E  \n     u  o  n  \n     s  o  t  \n     i  d  e  \n     n     r  \n     e     t  \n     s     a  \n     s     i  \n           n  \n           m  \n           e  \n           n  \n           t  "
print(expected)