const numbers = [1,2,3,4,5,6,7,-3,-6,-10]
let accumulatorEven = []
for (let i = 0; i < numbers.length; i++) {
  if(numbers[i] % 2 === 0) {
    accumulatorEven.push(numbers[i])
  }
}
console.log(accumulatorEven)