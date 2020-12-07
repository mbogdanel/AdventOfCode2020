const { count } = require('console')
const fs = require('fs')

fs.readFile('./input.txt', (err, data) => {
  console.time('adventOfCodeDay3')
  if (err) {
    console.log('ewrrororrrr')
  }
  const stringInput = data.toString()
  const arrayInput = stringInput.split(/\r?\n/)
  let countPart1 = 0
  let countPart2 = 0
  let count1 = 0,
    count2 = 0,
    count3 = 0,
    count4 = 0,
    count5 = 0

  for (i = 1; i < arrayInput.length; i++) {
    let temp = arrayInput[i].repeat(50)
    if (temp.charAt(i * 3) === '#') {
      countPart1++
    }
  }
  console.log(countPart1)

  for (i = 1; i < arrayInput.length; i++) {
    let temp = arrayInput[i].repeat(100)
    if (temp.charAt(i * 1) === '#') {
      count1++
    }
    if (temp.charAt(i * 3) === '#') {
      count2++
    }
    if (temp.charAt(i * 5) === '#') {
      count3++
    }
    if (temp.charAt(i * 7) === '#') {
      count4++
    }
    if (i % 2 === 0 && temp.charAt(i / 2) === '#') {
      count5++
    }

    countPart2 = count1 * count2 * count3 * count4 * count5
  }
  console.log(countPart2)

  console.timeEnd('adventOfCodeDay3')
})
