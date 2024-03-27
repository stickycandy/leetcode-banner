
/**
 * 暴力枚举
 * @param {*} arr 
 * @returns 
 */
function maxTime(arr) {
  let res = [];
  arr.sort((a, b) => b -a)
  
  while(arr.length) {
    if (!res.length) {
      if (arr.includes(2)) {
        res.push(2)
        arr.splice(arr.indexOf(2), 1)
      } else if (arr.includes(1)) {
        res.push(1)
        arr.splice(arr.indexOf(1), 1)
      } else if (arr.includes(0)) {
        res.push(0)
        arr.pop()
      } else {
        return ''
      }
    }

    if (res.length === 1) {
      if (res[0] === 2) {
        const t = arr.filter(li => li <= 3)
        if (t.length === 0) {
          return ''
        }
        res.push(Math.max(...t))
        arr.splice(arr.indexOf(Math.max(...t)), 1)
      } else {
        res.push(arr[0])
        arr.shift()
      }
    }

    if (res.length === 2) {
      res.push(':')
    }

    if (res.length === 3) {
      if (arr[1] > 5) {
        return ''
      }
      if (arr[0] > 5) {
        res.push(arr[1])
        res.push(arr[0])
      } else {
        res.push(arr[0])
        res.push(arr[1])
      }
      arr.length = 0
    }

  }

  return res.join('')
}


process.stdin.on('data', function(data) {
  const input = data.toString().trim().split(',').map(Number)
  console.log(maxTime(input))
})


// 给定一个由 4 位数字组成的数组，返回可以设置的符合 24 小时制的最大时间。
// 24 小时格式为HH:MM ，其中 HH 在 00 到 23 之间，MM 在 00 到 59 之间。最小的 24 小时制时间是 00:00 ，而最大的是 23:59。
// 以长度为 5 的字符串，按 HH:MM 格式返回答案。如果不能确定有效时间，则返回空字符串。
