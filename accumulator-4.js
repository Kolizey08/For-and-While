const arr = ['Rasul','Yunus','Islam','Jahar','Vaha','Rizvan', 'Aslan', 'Malik','Ashab','Adam']
let accumulator = []
for (let i = 0; i < arr.length; i++){
  if(arr[i][0] === 'A') {
    accumulator.push(arr[i])
  }
}
console.log(accumulator)