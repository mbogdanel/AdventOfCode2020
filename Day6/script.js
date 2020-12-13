const fs = require('fs')

fs.readFile('./input.txt', (err, data) => {
  console.time('adventOfCodeDay2')
  if (err) {
    console.log('ewrrororrrr')
  }
  const stringInput = data.toString()

  let arr = stringInput.split('\n\n')

  // problem is here, need array with concat string.............................
  const newArray = arr.map((part) => part.split('\n').join(''))

  console.log(newArray)

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

  console.log(count)

  console.timeEnd('adventOfCodeDay2')
})
