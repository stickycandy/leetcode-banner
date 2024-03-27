
/**
 * 给定一个源串和目标串，能够对源串进行如下操作：

在给定位置上插入一个字符

替换任意字符

删除任意字符

写一个程序，返回最小操作数，使得对源串进行这些操作后等于目标串
 * @param {string} word1 
 * @param {string} word2 
 * @returns {number}
 */
function minDistance(word1, word2) {
  const m = word1.length;
  const n = word2.length;

  const dp = new Array(m + 1).fill(0).map(() => new Array(n + 1).fill(0));
  for (let i = 0; i <= m; i++) {
    dp[i][0] = i;
  }
  for (let j = 0; j <= n; j++) {
    dp[0][j] = j;
  }

  for (let i = 1; i <= m; i++) {
    for (let j = 1; j <= n; j++) {
      dp[i][j] = Math.min(dp[i-1][j], dp[i][j-1])

      if (word1[i-1] === word2[j-1]) {
        dp[i][j] = Math.min(dp[i][j], dp[i-1][j-1]);
      } else {
        dp[i][j] = Math.min(dp[i][j], dp[i-1][j-1] + 1)
      }
    }
  }
  return dp[m][n];
}



process.stdin.on('data', (chunk) => {
  const arr = chunk.toString().trim().split(' ');
    
  console.log(minDistance(arr[0], arr[1]));
})