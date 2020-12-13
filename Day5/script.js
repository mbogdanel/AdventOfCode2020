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
  let allSeats = []

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
    allSeats.push(maxRow * 8 + maxCol)
  }

  console.log(highestSeatID)

  let allPossibleSeats = []
  let frontAndBackSeats = []

  for (i = 0; i <= 127; i++) {
    for (j = 0; j <= 7; j++) {
      allPossibleSeats.push(i * 8 + j)
      if (i === 0 || i === 127) {
        frontAndBackSeats.push(i * 8 + j)
      }
    }
  }

  allSeats = allSeats
    .filter((n) => !frontAndBackSeats.includes(n))
    .sort(function (a, b) {
      return b - a
    })

  for (i = 0; i < allSeats.length - 1; i++) {
    if (allSeats[i] - allSeats[i + 1] > 1) {
      console.log(allSeats[i] - 1)
    }
  }

  console.timeEnd('adventOfCodeDay5')
})
