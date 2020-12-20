let listObject = [
  {
    ecl: 'gry',
    byr: '2002',
    eyr: '2024',
    hcl: '#7d3b0c',
    hgt: '174cm',
    iyr: '2012',
    pid: '296913847',
  },
  {
    hcl: '#733820',
    iyr: '2015',
    ecl: 'oth',
    eyr: '2028',
    pid: '431922630',
    hgt: '160cm',
    byr: '1941',
  },
]
for (let document of listObject) {
  console.log(document.pid.length)
}
