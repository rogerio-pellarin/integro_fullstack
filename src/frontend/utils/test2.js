const input = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17]

const group = (input, groupByNumber = 2) => {
  let arrayParent = []
  let arrayChild = []
  let index = 1
  let counter = 1

  while (index <= input.length) {
    arrayChild.push(input[index - 1])
    if (index === counter * groupByNumber || index === input.length) {
      arrayParent.push(arrayChild)
      arrayChild = []
      counter++
    }
    index++
  }

  return arrayParent
}

const apples = (input) => group(group(group(input, 4)))

//console.log(apples(input))

module.exports = apples
