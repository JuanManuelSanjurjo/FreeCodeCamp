#################    Arithmetic formatter    ############################
import re

def arithmetic_arranger(problems, showresult=False):
  problemsChecked = problemChecker(problems)
  rta = row1 = row2 = divisor = divRow = result = ""

  if(problemsChecked != "checked"):
    return problemChecker(problems)
  else:
    for problem in problems:
      content = problem.split()

      maxLen = max(len(content[0]),len(content[2]))
      divisor =  "-" * (maxLen +2)

      row1+= (" " * (len(divisor) - len(content[0])) ) + content[0] + "    "
      row2+= content[1] + (" " * (len(divisor) - len(content[2]) - 1) )  + content[2]  + "    "
      divRow+= divisor + " " * 4

      if(showresult):
        r =  eval(problem)
        result += (" " * (len(divisor) - len(str(r)))) + str(r) + " " * 4
  
  rta = row1.rstrip() + "\n" + row2.rstrip() + "\n" + divRow.rstrip() + ("\n" + result.rstrip() if showresult else "")
  
  return  rta 

def problemChecker(problems):
  if(len(problems)>5):
    return "Error: Too many problems."
  else:
    for problem in problems:
      text = problem.split()
      if(text[1] != "+" and text[1] != "-"):
        return "Error: Operator must be '+' or '-'."
      else:
        if(not re.match(r"^[0-9+\- ]+$",problem) ):
          return "Error: Numbers must only contain digits."
        else:
          if(len(text[0]) > 4 or len(text[2]) > 4):
            return "Error: Numbers cannot be more than four digits."
          else:
            return "checked"
          


print(arithmetic_arranger(['3801 - 2', '123 + 49']))
print(arithmetic_arranger(['1 + 2', '1 - 9380']))
print(arithmetic_arranger(  ['3 + 855', '3801 - 2', '45 + 43', '123 + 49']  ))
print(arithmetic_arranger(   ['11 + 4', '3801 - 2999', '1 + 2', '123 + 49', '1 - 9380'] ))
print(arithmetic_arranger( ['44 + 815', '909 - 2', '45 + 43', '123 + 49','888 + 40', '653 + 87']   ))
print(arithmetic_arranger(  ['3 / 855', '3801 - 2', '45 + 43', '123 + 49']  ))
print(arithmetic_arranger(  ['24 + 85215', '3801 - 2', '45 + 43', '123 + 49']  ))
print(arithmetic_arranger(  ['98 + 3g5', '3801 - 2', '45 + 43', '123 + 49']  ))
print(arithmetic_arranger(  ['3 + 855', '988 + 40'] , True   ))
print(arithmetic_arranger(  ['32 - 698', '1 - 3801', '45 + 43', '123 + 49', '988 + 40'] , True  ))


