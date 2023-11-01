import socket

s = socket.socket(socket.AF_INET, socket.SOCK_STREAM)
s.settimeout(5) # Seteo de un maximo de tiempo para la respuesta

host = input("Please enter the host\n")  # si la pidieramos por parametro
# host = "137.74.187.100"  # hackthissite.org
port = int(input("Please enter the port\n"))  # si la pidieramos por parametro
# port = 443

def portScanner(port):
    if s.connect_ex((host, port)):    # regresa el error de la coneccion pero no tira Traceback
        print("The port is closed")
    else:
        print("The port is open")


portScanner(port)