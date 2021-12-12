const signs = ['+','-','/','*']
const firstNoLimit = 100
const secondNoLimit = 100
const everythingToGenerate = firstNoLimit * secondNoLimit * signs.length
let numbersGenerated = 0
const fs = require('fs')
let output = `
function calculate() {
let firstNumber = window.prompt('enter first number')
let secondNumber = window.prompt('enter second number')
let sign = window.prompt('enter sign')`
signs.forEach(sign => {
    for (let i = 0;i<firstNoLimit;i++) {
        for (let j = 0; j < secondNoLimit; j ++) {
            output = output.concat(`
            if (firstNumber == ${i} && secondNumber == ${j} && sign == '${sign}') {
                window.alert('${i} ${sign} ${j} = ${eval(`${i}${sign}${j}`)}')
            }
            `)
            numbersGenerated++
            console.log(`${Math.round(numbersGenerated / everythingToGenerate * 10000) / 100}% completed`)
        }
    }
})
const breakResponses = ['no', 'NO', 'n', 'nope', 'N', 'hell no', 'fuck off', 'i hate you', 'No', 'nO']
output = output.concat(`let again = window.prompt("Again?")
`)
breakResponses.forEach(e => {
    output = output.concat(`\nif (again == '${e}') return
 `)
})
output = output.concat(`calculate()
}
calculate()`)
fs.writeFile('./my-first-calculator.js', output, error => {
    if (error) console.log(error)
})