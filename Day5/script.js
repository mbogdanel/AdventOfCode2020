const fs = require('fs')

fs.readFile('./input.txt', (err, data) => {
  console.time('adventOfCodeDay5')
  if (err) {
    console.log('ewrrororrrr')
  }
  const stringInput = data.toString()
  const arrayInput = stringInput.split('\r\n')
  const plane = arrayInput

  highestSeatID = 0

  for (seat of plane) {
    minRow = 0
    maxRow = 127
    minCol = 0
    maxCol = 7

    for (i = 0; i < 7; i++) {
      if (seat.charAt(i) === 'F') {
        maxRow = Math.floor((maxRow + minRow) / 2)
      } else if (seat.charAt(i) === 'B') {
        minRow = Math.ceil((maxRow + minRow) / 2)
      }
    }

    for (j = 7; j <= 9; j++) {
      if (seat.charAt(j) === 'R') {
        minCol = Math.ceil((maxCol + minCol) / 2)
      } else if (seat.charAt(j) === 'L') {
        maxCol = Math.floor((maxCol + minCol) / 2)
      }
    }

    if (maxRow * 8 + maxCol > highestSeatID) {
      highestSeatID = maxRow * 8 + maxCol
    }
  }

  console.log(highestSeatID)

  console.timeEnd('adventOfCodeDay5')
})
