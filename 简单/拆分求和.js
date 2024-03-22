/**
 * 对于给定的正整数k，将其表示为一个正整数序列之和，且该序列中相邻元素的差值为等差分布（等差分布从1开始）。注意，请打印出所有可能的序列（打印多个序列时，按照首个数字从小到大依次打印）。
 */
function findSequence(k) {
  const res = [];
  let n = 2; 

// 等差数列的求和
  function eq(x) {
      const aa = [1]
      let sum = 0, t = 1
      for (let z = 1; z < x; z ++) {
          t += 1
          aa.push(aa[aa.length -1] + t)
      }

    aa.forEach(item => sum += item)
      return sum
  }

    while (eq(n-1) < k) {
        const start = (k - eq(n-1)) / n
        if (Number.isInteger(start)) {
            const a = []; let i = 0;
            while(i < n) {
                a.push(a.length ? a[a.length -1] + i : start)
                i++;
            }
            res.push(a) 
        }
        n++
    }

    return res.reverse();
}


process.stdin.on('data', function(data) {
    const sum = parseInt(data.toString())
    let res = findSequence(sum)
    console.log(res.join('\n').trim())
    
})