const fs = require('fs')

fs.readFile('./input.txt', (err, data) => {
  console.time('adventOfCodeDay2')
  if (err) {
    console.log('ewrrororrrr')
  }
  const stringInput = data.toString()
  const arrayInput = stringInput.split(/\r?\n/)
  let count1 = 0
  let count2 = 0

  for (i = 0; i < arrayInput.length; i++) {
    arrayInput[i] = arrayInput[i]
      .split('-')
      .join(',')
      .split(': ')
      .join(',')
      .split(' ')
      .join(',')
      .split(',')
    if (
      arrayInput[i][0] <= arrayInput[i][3].split(arrayInput[i][2]).length - 1 &&
      arrayInput[i][1] >= arrayInput[i][3].split(arrayInput[i][2]).length - 1
    ) {
      count1++
    }
    if (
      (arrayInput[i][3].charAt(arrayInput[i][0] - 1) === arrayInput[i][2] &&
        arrayInput[i][3].charAt(arrayInput[i][1] - 1) !== arrayInput[i][2]) ||
      (arrayInput[i][3].charAt(arrayInput[i][0] - 1) !== arrayInput[i][2] &&
        arrayInput[i][3].charAt(arrayInput[i][1] - 1) === arrayInput[i][2])
    ) {
      count2++
    }
  }
  console.log(count1)
  console.log(count2)
  console.timeEnd('adventOfCodeDay2')
})
