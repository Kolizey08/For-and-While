const string = ['js','php','c++','html','css', 'phiton', 'java', 'swift', 'cotlin', 'c#']
let accumulator = []
for (let i = 0; i < string.length; i++) {
  if(string[i].length > 3) {
    accumulator.push(string[i])
  }
}
console.log(accumulator)