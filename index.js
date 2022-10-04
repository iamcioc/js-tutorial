// food = Number (prompt('What do you want to'))
// tipPercentage = Number(prompt('tip %')/100)
// tipAmount = food * tipPercentage
// total = food + tipAmount

// console.log('tip amount', tipAmount)
// console.log('total', total)

// Data types

// console.log(Math.floor(Math.random() * 3));
// console.log(Math.ceil(4.2873))
// console.log(Math.floor(2.8838383))

// Baby weather app
// let weather = prompt('how is the weather')

// if (weather == 'rainy') {
//     console.log('grab your umbrella')
// } else {
//         console.log('wear your sunglasses')
//     }

// functions
// this is a function called "sayMyName" and has 0 arument
//it logs out your name to the console
// function sayMyName() {
//     console.log('Czar')
//     console.log('queen')
//     console.log('harry')
// }
//  sayMyName();

// this is a function called 'sayMyName'
//it has one argument
// function sayMyName2(name) {
//     console.log(name)
// }
// sayMyName('czar')

// function greeting(name) {
//     greet = 'hi ' + name + ', nice to meet you'
//     console.log(greet)
// }
// greeting('czar')

// function greeting(name) {
//     greet = `hi  ${name} , nice to meet you`
//     console.log(greet)
// }
// greeting('czar')

// function sum(a, b) {
//     //return
//     return a + b
// }
// num1 = sum(1, 2)
// console.log(num1)

function calculateTipAndFoodTotal(food, tip) {
	tipPercentage = tip / 100;
	tipAmount = food * tipPercentage;
	total = food + tipAmount;
	return total;
}

console.log(calculateTipAndFoodTotal(100, 20));
