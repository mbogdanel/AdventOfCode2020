const fs = require('fs')

fs.readFile('./input.txt', (err, data) => {
  console.time('adventOfCodeDay2')
  if (err) {
    console.log('ewrrororrrr')
  }
  const stringInput = data.toString()

  const arrayInput = stringInput.split('\r\n')

  console.log(arrayInput)

  console.timeEnd('adventOfCodeDay2')
})
