def tranformToRealFileName(txt):
    if txt.endswith('.txt'):
        return txt
    else :
        return txt + '.txt'

def validateInput (number):
    if isinstance(number, int):
        if(number > 1000):
            raise ValueError('Error at line 1, out of range')
 

def getWinner(lines):
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

    return "%s %s" % (winner, maxDifference)

def readFile(filename):
    with open(fileName, 'r') as file:
        lines = file.read().splitlines()
        file.close()
        return lines

def createFile(text):
    with open('salida.txt', 'w') as f:
        f.write(text)
        f.close()


fileName = str(input('Enter the name of your file'))
fileName = tranformToRealFileName(fileName.strip())
lines= readFile(fileName)
print(lines)
validateInput(int(lines[0].strip()))
text= getWinner(lines)
createFile(text)
print('Finishied, check on the path the file "salida.txt"')
print(text)



