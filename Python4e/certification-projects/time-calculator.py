days = ["Monday","Tuesday","Wednesday","Thursday","Friday","Saturday","Sunday"]

def add_time(startTime, aggragate, startDate = False):
    startHs = int(startTime.split(":")[0])
    startMin = int(startTime.split(":")[1].split()[0])
    ampm = startTime.split(":")[1].split()[1]

    if(ampm == "PM"):
        startHs+=12 

    addHs = int(aggragate.split(":")[0])
    addMin = int(aggragate.split(":")[1])
    plusDays = 0
    newDay = rta = ""

    hs = startHs +  addHs
    mins = startMin + addMin

    if(mins > 60):
        mins = mins - 60
        hs += 1
    while(hs >= 24):
        hs -= 24
        plusDays+=1 
    if(hs >= 12):
        ampm = "PM"
        if(hs != 12):
            hs -= 12
    else:
        ampm = "AM"
        if(hs == 0):
            hs += 12

    if(startDate):
        pos = days.index(startDate.title())
        newDay = getWeekday(pos, plusDays)
        if(plusDays == 1):
            rta = str(hs) + ":" + str(mins).zfill(2) + " " + ampm +  (", " + newDay if startDate else "")  + " (next day)"
        else:
            rta = str(hs) + ":" + str(mins).zfill(2) + " " + ampm +  (", " + newDay if startDate else "")  + (" (" + str(plusDays) + " days later)" if plusDays != 0 else "")
    elif(not startDate):
        if(plusDays == 1):
            rta = str(hs) + ":" + str(mins).zfill(2) + " " + ampm +  (", " + newDay if startDate else "")  + " (next day)"
        else:
            rta = str(hs) + ":" + str(mins).zfill(2) + " " + ampm +  (", " + newDay if startDate else "")  + (" (" + str(plusDays) + " days later)" if plusDays != 0 else "")
    else:
        rta = str(hs) + ":" + str(mins).zfill(2) + " " + ampm 


 
    print(rta)
    return rta

def getWeekday(pos, plusDays):
    position = (plusDays % 7) + pos
    if(position >= len(days)):
        position-= 7
    return days[position]

add_time("3:00 PM", "3:10")
# Returns: 6:10 PM
add_time("11:30 AM", "2:32", "Monday")
# Returns: 2:02 PM, Monday
add_time("11:43 AM", "00:20")
# Returns: 12:03 PM
add_time("10:10 PM", "3:30")
# Returns: 1:40 AM (next day)
add_time("11:43 PM", "24:20", "tueSday")
# Returns: 12:03 AM, Thursday (2 days later)
add_time("6:30 PM", "205:12")
# Returns: 7:42 AM (9 days later)
add_time("8:16 PM", "466:02", "tuesday")
# Returns: 6:18 AM, Monday (20 days later)
add_time("11:59 PM", "24:05")
# Returns: 12:04 AM (2 days later)
add_time("11:59 PM", "24:05", "Wednesday")
# Returns: 12:04 AM, Friday (2 days later)
 