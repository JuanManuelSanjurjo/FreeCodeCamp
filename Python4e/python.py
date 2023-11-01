import socket

# mySock = socket.socket(socket.AF_INET, socket.SOCK_STREAM)
# mySock.connect(("data.pr4e.org",80))
# cmd = "GET http://data.pr4e.org/romeo.txt HTTP/1.0\n\n".encode()
# mySock.send(cmd)

# while True:
#     data = mySock.recv(512)
#     if (len(data) < 1):
#         break
#     print(data.decode())

# mySock.close()   

##############################################################
import urllib.request, urllib.parse , urllib.error

# fhand = urllib.request.urlopen("http://data.pr4e.org/romeo.txt")
# for line in fhand: 
#     print(line.decode().strip())

fhand1 = urllib.request.urlopen("http://www.dr-chuck.com/pege1.htm")
for line in fhand1:
    print(line.decode().strip())

##############################################################
from bs4 import BeautifulSoup

url = "http://www.dr-chuck.com/pege1.htm"
html = urllib.request.urlopen(url).read()
soup = BeautifulSoup(html, "html.parser")

tags = soup("a")
for tag in tags:
    print(tag.get("href",None))


