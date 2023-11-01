import socket

def ejemploImperativo():
    s = socket.socket()
    ip = input("Please enter the IP\n")
    port = int(input("Please enter the port\n"))
    s.connect((ip, port))
    print(s.recv(1024))

def banner(ip, port):
    s = socket.socket()
    try:
        s.connect((ip, port))
        s.settimeout(5)
        print(s.recv(1024))
    except:
        print("We couldnt process the required input")

def main():
    ip = input("Please enter the IP\n")
    port = str(input("Please enter the port\n"))
    banner(ip, port)

main()

