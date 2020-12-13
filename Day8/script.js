const fs = require('fs')

fs.readFile('./input.txt', (err, data) => {
  console.time('adventOfCodeDay2')
  if (err) {
    console.log('ewrrororrrr')
  }
  const stringInput = data.toString()

  const arrayInput = stringInput.split('\n')

  stringToObject = (str) => {
    const obj = {}
    const [k, v] = str.split(' ')
    obj[k] = parseInt(v)
    return obj
  }

  let listInstructions = arrayInput.map(stringToObject)

  let i = 0
  let acc = 0

  while (true) {
    if ('beenHere' in listInstructions[i]) {
      break
    }
    if ('acc' in listInstructions[i]) {
      acc += listInstructions[i].acc
      listInstructions[i].beenHere = true
      i++
    } else if ('jmp' in listInstructions[i]) {
      listInstructions[i].beenHere = true
      i += listInstructions[i].jmp
    } else if ('nop' in listInstructions[i]) {
      listInstructions[i].beenHere = true
      i++
    }
  }
  console.log(acc)
  console.timeEnd('adventOfCodeDay2')
})
