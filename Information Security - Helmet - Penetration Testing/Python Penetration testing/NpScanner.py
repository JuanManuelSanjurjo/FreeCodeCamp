import nmap

scanner = nmap.PortScanner()

print("Welcome, this is a simple nmap automation tool")
print("----------------------------------------------")

ip_address = input("Please enter the IP adress you want to scan: ")
print(f"The IP you entered is: {ip_address}")
type(ip_address)

response = input('''\nPlease enter the type of scan you want to run
                      1)SYN ACK Scan
                      2)UDP Scan
                      3)Comprehensive Scan\n''')

print(f"You have selected option: {response}")

if response == "1":
    print(f"Nmap version: {scanner.nmap_version()}")
    scanner.scan(ip_address,"1-1024", "-v -sS") # los puertos a escanear, verbose y tipo de scan (SYN ACK Scan)
    print(scanner.scaninfo())
    print(f"IP Status {scanner[ip_address.state()]}")
    print(scanner[ip_address].all_protocols())
    print(f"Open ports: {scanner[ip_address]['tcp'].keys()}")
elif response == "2":
    print(f"Nmap version: {scanner.nmap_version()}")
    scanner.scan(ip_address,"1-1024", "-v -sU") # los puertos a escanear, verbose y tipo de scan (UDP Scan)
    print(scanner.scaninfo())
    print(f"IP Status {scanner[ip_address.state()]}")
    print(scanner[ip_address].all_protocols())
    print(f"Open ports: {scanner[ip_address]['UDP'].keys()}")
elif response == "3":
    print(f"Nmap version: {scanner.nmap_version()}")
    scanner.scan(ip_address,"1-1024", "-v -sS -sV -sC -A -O") # los puertos a escanear, verbose y tipo de scan. Todas las banderas son para hacer el scan completo pasando por muchos parametros
    print(scanner.scaninfo())
    print(f"IP Status {scanner[ip_address.state()]}")
    print(scanner[ip_address].all_protocols())
    print(f"Open ports: {scanner[ip_address]['UDP'].keys()}")
else:
        print("Please enter a valid option")
