const fs = require('fs')

fs.readFile('./input.txt', (err, data) => {
  console.time('adventOfCodeDay2')
  if (err) {
    console.log('ewrrororrrr')
  }

  parseEntry = (str) => {
    const parts = str.split(/\r\n|\s/)
    const obj = {}
    for (let part of parts) {
      const [k, v] = part.split(':')
      obj[k] = v
    }
    return obj
  }

  const stringInput = data.toString()
  let arrayInput = stringInput.split('\r\n\r\n')

  const listOfDocuments = arrayInput.map(parseEntry)
  let validDocuments = 0
  for (let document of listOfDocuments) {
    if (
      document.byr &&
      document.iyr &&
      document.eyr &&
      document.hgt &&
      document.hcl &&
      document.ecl &&
      document.pid
    ) {
      validDocuments++
    }
  }

  console.log(validDocuments)
  console.timeEnd('adventOfCodeDay2')
})
