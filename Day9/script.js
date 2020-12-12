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

  let numberGlobal

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
      numberGlobal = number
      break
    }
  }

  let sum = 0
  let listNum = []

  for (i = 0; i <= arrayInput.indexOf(number) - 2; i++) {
    let k = i
    listNum = [arrayInput[i]]

    while (sum <= numberGlobal) {
      sum += arrayInput[k]
      if (sum === numberGlobal) {
        console.log(Math.min(...listNum) + Math.max(...listNum))
        break
      } else {
        k++
        listNum.push(arrayInput[k])
      }
    }

    if (sum === numberGlobal) {
      break
    }
    sum = 0
  }

  console.timeEnd('adventOfCodeDay2')
})
