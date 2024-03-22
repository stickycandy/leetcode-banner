
function goOut(m, start) {
  const flag = Array(m.length).fill(false);

  function dfs(i) {
      if (m[i] === 0) {
          return true
      }
      if (flag[i]) {
          return false
      }
      flag[i] = true

      if (i - m[i] >= 0 && dfs(i - m[i])) {
          return true
      }
      if (i + m[i] < m.length && dfs(i + m[i])) {
          return true
      } 
      return false
  }
  return dfs(start)
}

var buf = ''
process.stdin.on('readable', function() {
  var chunk = process.stdin.read()
  if (chunk) buf += chunk.toString()
})

process.stdin.on('end', function() {
  const input = buf.split('\n')
  var arr = input[1].split(' ').map(item => Number(item))
  console.log(String(goOut(arr, Number(input[2]))).replace(/^\w/, function(a){
      return a.toUpperCase()
  }))
})