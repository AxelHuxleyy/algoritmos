const fs = require('fs')


const tranformToRealFileName = (text) =>{
    if(text.endsWith('.txt')){
        return text
    }else{
        return text + ".txt"
    }
}

const validateInput = (number) =>{
    if(!isNaN(number)){
        if(number>1000){
            throw new Error('Error at line 1, the number is out of range, remember the range is < 1000')
        }
    }else{
        throw new Error('Error at line 1, is not a number')
    }
}

const getWinner= lines => {
    let winner = 0
    let maxDifference = 0
    
    lines.forEach(element => {
        let value= element.trim().split(' ')
        let palyer1 = 0
        let player2 = 0
        if(value.length !== 1){
            palyer1 = parseInt(value[0].trim())
            player2 = parseInt(value[1].trim())

            if((palyer1 - player2) > 0 && (palyer1 - player2) > maxDifference ){
                maxDifference = (palyer1 - player2)
                winner=1
            }else if ((player2 - palyer1) > 0 && (player2 - palyer1) > maxDifference){
                maxDifference = (player2 - palyer1)
                winner=2
            }
        }
    });

    return `${winner} ${maxDifference}`
}

const createFile = txt =>{
    fs.writeFile('salida.txt', txt, (err) => {
        if (err) {
            throw new Error(err)
        }
    })
    console.log('Finishied, check on the path the file "salida.txt"')
    console.log(txt)
}


try {
    const readline = require('readline').createInterface({
        input: process.stdin,
        output: process.stdout
    });
    readline.question('please enter the name of your file ?', filename => {
        const realFileName = tranformToRealFileName(filename.trim())
        const file = fs.readFileSync(realFileName, 'utf8')
        const linesText = file.split(/\n/);
        validateInput(parseInt(linesText[0].trim()))
        const text = getWinner(linesText)
        createFile(text)
    });

}catch (error) {
    console.log(error)
}