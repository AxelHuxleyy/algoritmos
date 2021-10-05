const fs = require('fs')

const quitDuplicatecharacters = code => {
    let text = ''
    for (let i = 0; i < code.length; i++) {
        let b = i + 1
        if (code[i] === code[b] || code[i - 1] === code[i]) {
            i++
            if (i >= code.length) {
                break
            }
        }
        text = text + code[i]
    }
    text = text.toLocaleLowerCase()

    return text
}

const validateCodeInput = (text) => {
    if (/^[\x00-\x7F]*$/.test(text)) {
        return text
    }
    throw new Error('Error on line 4, the line 4 is not ASCII')
}

const validateNumberInputs = (numbers) => {

    numbers.forEach((number, i) => {
        element = parseInt(number)
        if (!isNaN(element)) {
            if (Number.isInteger(element)) {
                if (element < 2 && element > 50 && i !== 2) {
                    throw new Error('Error on line 1, out of range')
                }
                else if (element < 2 && element > 5000 && i == 2) {
                    throw new Error('Error on line 1, out of range')
                }
            } else {
                throw new Error('Error on line 1, is not integeter')
            }
        } else {
            throw new Error('Error on line 1, is not a number')
        }
    });

    return numbers
}

const result = (code, instruction1, instruction2) => {
    if (code.indexOf(instruction1) !== -1) {
        fs.writeFile('salida.txt', 'SI \nNO', (err) => {
            if (err) {
                throw new Error(err)
            }
            console.log('Finishied, check on the path the file "salida.txt"')
        })
    }

    if (code.indexOf(instruction2) !== -1) {
        fs.writeFile('salida.txt', 'NO \nSI', (err) => {
            if (err) {
                throw new Error(err)
            }
            console.log('Finishied, check on the path the file "salida.txt"')
        })
    }

    if (code.indexOf(instruction2) == -1 && text.indexOf(instruction1) == -1) {
        fs.writeFile('salida.txt', 'NO \nNO', (err) => {
            if (err) {
                throw new Error(err)
            }
            console.log('Finishied, check on the path the file "salida.txt"')
        })
    }
}

const tranformToRealFileName = (text) =>{
    if(text.endsWith('.txt')){
        return text
    }else{
        return text + ".txt"
    }
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
        const numbers = validateNumberInputs(linesText[0].trim().split(' '))
        const code = validateCodeInput(linesText[3])
        instruction1 = linesText[1].replace('\r', '').toLocaleLowerCase()
        instruction2 = linesText[2].replace('\r', '').toLocaleLowerCase()
        const codeWithoutdupplicateCharacters = quitDuplicatecharacters(code)
        result(codeWithoutdupplicateCharacters, instruction1, instruction2)
        readline.close();
    });

} catch (e) {
    console.log(e)
}

