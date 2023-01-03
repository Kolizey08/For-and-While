const numbers = [1,2,3,4,5,6,7,-3,-6,-10]
let accumulatorOdd = []
for (let i = 0; i < numbers.length; i++) {
  if(numbers[i] % 2 !== 0) {
    accumulatorOdd.push(numbers[i])
  }
}
console.log(accumulatorOdd)