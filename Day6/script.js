const fs = require('fs')

fs.readFile('./input.txt', (err, data) => {
  console.time('adventOfCodeDay2')
  if (err) {
    console.log('ewrrororrrr')
  }
  const stringInput = data.toString()

  let arr = stringInput.split('\r\n\r\n')

  const newArray = arr.map((part) => part.split('\r\n').join(''))

  function unique_char(string) {
    var unique = ''
    for (var i = 0; i < string.length; i++) {
      if (unique.indexOf(string.charAt(i)) < 0) {
        unique += string[i]
      }
    }
    return unique
  }

  let count = 0
  for (let i = 0; i < newArray.length; i++) {
    count += unique_char(newArray[i]).length
  }

  ///////// Part2
  let count2 = 0
  let tempContainer = []
  for (i = 0; i < arr.length; i++) {
    tempContainer = []
    let numberPeople = arr[i].split(/\r\n|\r|\n/).length
    for (j = 0; j < newArray[i].length; j++) {
      if (
        !tempContainer.includes(newArray[i].charAt(j)) &&
        newArray[i].split(newArray[i].charAt(j)).length - 1 === numberPeople
      ) {
        tempContainer.push(newArray[i].charAt(j))
        count2++
      }
    }
  }

  console.log(count)
  console.log(count2)
  console.timeEnd('adventOfCodeDay2')
})
