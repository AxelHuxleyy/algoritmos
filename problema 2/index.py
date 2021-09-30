with open("entrada.txt", 'r') as file:
    lines = file.read().splitlines()
    file.close()

winner=0
maxDifference = 0

for line in lines:
    value= line.split(' ')
    if len(value) != 1:
        player1 = int(value[0])
        player2 = int(value[1])

        if((player1 - player2) > 0 and (player1 - player2) > maxDifference ):
            maxDifference = (player1 - player2)
            winner=1
        elif (player2 - player1) > 0 and (player2 - player1) > maxDifference:
            maxDifference = (player2 - player1)
            winner=2

with open('salida.txt', 'w') as f:
    text="%s %s" % (winner, maxDifference)
    f.write(text)
    f.close()