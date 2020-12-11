const fs = require('fs')

fs.readFile('./input.txt', (err, data) => {
  console.time('adventOfCodeDay2')
  if (err) {
    console.log('ewrrororrrr')
  }
  const stringInput = data.toString()

  const arrayInput = stringInput.split(/\r?\n/).map(function (item) {
    return parseInt(item, 10)
  })

  arrayInput.sort(function (a, b) {
    return a - b
  })
  arrayInput.push(arrayInput[arrayInput.length - 1] + 3)

  let diff1Jolts = 0
  let diff3Jolts = 0

  if (arrayInput[0] - 0 === 1) {
    diff1Jolts++
  } else if (arrayInput[0] - 0 === 3) {
    diff3Jolts++
  }

  for (i = 0; i < arrayInput.length - 1; i++) {
    if (arrayInput[i + 1] - arrayInput[i] === 1) {
      diff1Jolts++
    } else if (arrayInput[i + 1] - arrayInput[i] === 3) {
      diff3Jolts++
    }
  }

  console.log(diff1Jolts * diff3Jolts)

  console.timeEnd('adventOfCodeDay2')
})
