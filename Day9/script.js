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

  for (i = 25; i < arrayInput.length; i++) {
    let sumFound = false
    number = arrayInput[i]

    for (j = i - 25; j < i - 1; j++) {
      for (k = j + 1; k < i; k++) {
        if (arrayInput[j] + arrayInput[k] === number) {
          sumFound = true
          break
        }
      }
      if (sumFound === true) {
        break
      }
    }
    if (sumFound === false) {
      console.log(number)
      break
    }
  }

  console.timeEnd('adventOfCodeDay2')
})
