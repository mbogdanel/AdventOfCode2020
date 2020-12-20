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
  let validDocuments2 = 0

  validationHCL = (str) => {
    const hairChar = [
      '0',
      '1',
      '2',
      '3',
      '4',
      '5',
      '6',
      '7',
      '8',
      '9',
      'a',
      'b',
      'c',
      'd',
      'e',
      'f',
    ]
    if (str.length === 7 && str.charAt(0) === '#') {
      for (i = 1; i < 7; i++) {
        if (!hairChar.includes(str.charAt(i))) {
          return false
          break
        }
      }
      return true
    }
  }

  validationHGT = (str) => {
    if (
      str.length === 5 &&
      str.slice(0, 3) <= 193 &&
      str.slice(0, 3) >= 150 &&
      str.slice(3, 5) === 'cm'
    ) {
      return true
    } else if (
      str.length === 4 &&
      str.slice(0, 2) <= 76 &&
      str.slice(0, 2) >= 59 &&
      str.slice(2, 4) === 'in'
    ) {
      return true
    } else {
      return false
    }
  }

  validationBYR = (str) => {
    if (1920 <= str && str <= 2002) {
      return true
    }
  }

  validationIYR = (str) => {
    if (2010 <= str && str <= 2020) {
      return true
    }
  }

  validationEYR = (str) => {
    if (2020 <= str && str <= 2030) {
      return true
    }
  }

  validationECL = (str) => {
    if (['amb', 'blu', 'brn', 'gry', 'grn', 'hzl', 'oth'].includes(str)) {
      return true
    }
  }

  validationPID = (str) => {
    if (str.length === 9) {
      return true
    }
  }

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
      if (
        validationBYR(document.byr) &&
        validationIYR(document.iyr) &&
        validationEYR(document.eyr) &&
        validationHGT(document.hgt) &&
        validationHCL(document.hcl) &&
        validationECL(document.ecl) &&
        validationPID(document.pid)
      ) {
        validDocuments2++
      }
    }
  }

  console.log(validDocuments)
  console.log(validDocuments2)

  console.timeEnd('adventOfCodeDay2')
})
