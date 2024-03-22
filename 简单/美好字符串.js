// function perfectStr(str) {
//   let res = '';
//   let a = '';
//   const isPerfect = (x) => {
//       if (x === x.toUpperCase()) {
//           return str.includes(x.toLowerCase())
//       }
//       return str.includes(x.toUpperCase())
//   }
  
//   for (let i = 0, len = str.length; i < len; i++) {
//       const t = str[i]
//       if (isPerfect(t)) {
//           a+= t
//       } else {
//           a = ''
//       }
//       if (a.length > res.length) {
//           res = a
//       }
//   }
  
//   return res.length < 2 ? '' : res;
// }

function perfectStr(str) {
  let res = '';

  // 完美字符串
  const isPerfect = (x) => {
    for (let i = 0; i < x.length; i++) {
      if (!x.includes(x[i].toUpperCase()) || !x.includes(x[i].toLowerCase())) {
        return false
      }
    }
    return true
  }

  for (let i = 0; i < str.length; i++) {
    let a = ''
    for (let j = i + 1; j < str.length; j++) {
      const t = str.slice(i, j + 1);
      if (isPerfect(t)) {
        if (t.length > a.length ){
          a = t
        }
      } else {
        break
      }
    }
    if (a.length > res.length) {
      res = a
    }
  }
  return res;
}

process.stdin.on('data', function(data) {
  console.log(perfectStr(data.toString().trim()))
})