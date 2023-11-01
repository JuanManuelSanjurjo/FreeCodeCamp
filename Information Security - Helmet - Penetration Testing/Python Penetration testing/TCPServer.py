import socket

#se crea el objeto socket con la funcion que pide socket "family" y socket "type"
serverSocket = socket.socket(socket.AF_INET, socket.SOCK_STREAM)

# se trae el host y el port
# host = "192.168.1.104"
host = socket.gethostbyname() # se trae el nonmbre o idreccion ip del host / servidor
port = 444

# binding del socket a host y port
serverSocket.bind((host, port))

#escucha las conecciones hasta un maximo de 3, o lo que le pasemos por parametro
serverSocket.listen(3) # cantidad de clientes simultaneos

while True:
    # SE COMIENZA LA CONNECCION - la funcion accept es lo que el servidor recibe del cliente
    clientSocket, adress = serverSocket.accept()

    print("recieved connection from %r" % str(adress))

    message = "hello!, thank you for connecting to the server" + "\r\n"

    # devolucion al cliente con el mensaje
    clientSocket.send(message.encode("ascii"))
    # cierra la coneccion
    clientSocket.close()