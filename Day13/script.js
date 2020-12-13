const fs = require('fs')

fs.readFile('./input.txt', (err, data) => {
  console.time('adventOfCodeDay2')
  if (err) {
    console.log('ewrrororrrr')
  }
  const stringInput = data.toString()

  arrayInput = stringInput.split('\r\n')

  const departTime = arrayInput[0]

  const busses = arrayInput[1].split(',')

  const availableBusses = []
  for (i = 0; i < busses.length; i++) {
    if (busses[i] !== 'x') {
      availableBusses.push(parseInt(busses[i]))
    }
  }

  let time = 2 * departTime
  let busId = departTime
  for (i = 0; i < availableBusses.length; i++) {
    if (
      Math.ceil(departTime / availableBusses[i]) * availableBusses[i] <
      time
    ) {
      busId = availableBusses[i]
      time = Math.ceil(departTime / availableBusses[i]) * availableBusses[i]
    }
  }

  console.log((time - departTime) * busId)

  console.timeEnd('adventOfCodeDay2')
})
