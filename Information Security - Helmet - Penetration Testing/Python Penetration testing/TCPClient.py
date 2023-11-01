import socket

clientSocket = socket.socket(socket.AF_INET, socket.SOCK_STREAM)

host = socket.gethostname()
port= 444

# en vez de bind, se establece la coneccion
clientSocket.connect((host,port))

message = clientSocket.recv(1024) # maximo de datos permitidos para pasar por el puerto

clientSocket.close()

print(message.decode("ascii"))

