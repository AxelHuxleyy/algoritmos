const fs = require('fs')

const quitDuplicatecharacters = code => {
    let text = ''
    for (let i = 0; i < code.length; i++) {
        let b = i+1
        if(code[i] === code[b] || code[i-1] === code[i]){
            i++
           if(i >= code.length){
               break
           }
        }
        text= text + code[i]
    }
    text= text.toLocaleLowerCase()
    
    return text
}

try {
    const data = fs.readFileSync('entrada.txt', 'utf8')
    someText = data.split(/\n/);
    code = someText[3]
    instruction1 = someText[1].replace('\r', '').toLocaleLowerCase()
    instruction2 = someText[2].replace('\r', '').toLocaleLowerCase()
    const text = quitDuplicatecharacters(code)
    
    
    if(text.indexOf(instruction1) !== -1){
        fs.writeFile('salida.txt', 'SI \nNO', (err, data) => {
            if(err){
                console.log(err)
            }
            console.log(data)
        })
    }

    if(text.indexOf(instruction2) !== -1){
        fs.writeFile('salida.txt', 'NO \nSI', (err, data) => {
            if(err){
                console.log(err)
            }
            console.log(data)
        })
    }

    if(text.indexOf(instruction2) == -1 && text.indexOf(instruction1) == -1){
        fs.writeFile('salida.txt', 'NO \nNO', (err, data) => {
            if(err){
                console.log(err)
            }
            console.log(data)
        })
    }
    

} catch (error) {
    console.log(`Error ${error.stack}`)
}

