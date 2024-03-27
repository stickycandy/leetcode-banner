
function transSum(arr1, arr2) {
  arr1.sort((a, b) => a - b)
  arr2.sort((a, b) => a - b)

  let sum = 0, res = {}
  for (let i = 0; i < Math.max(arr1.length, arr2.length); i++) {
    sum += (arr1[i] || 0) - (arr2[i] || 0)
  }
  sum = sum / 2
  for (let i = 0; i < arr1.length; i++) {
    if (arr2.includes(arr1[i] - sum )) {
      res[arr1[i]] = [arr1[i], arr1[i] - sum]
    }
  }

  return Object.values(res)
}


process.stdin.on('data', function(data) {
  const input = data.toString().trim().split('\n')
  const arr1 = input[0].split(' ').map(Number)
  const arr2 = input[1].split(' ').map(Number)
  const res = transSum(arr1, arr2)
  console.log(res.map(item => item.join(' ')).join('\n'))
})