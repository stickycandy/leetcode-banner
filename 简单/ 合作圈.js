/**
 * 在一个公司里有 N 名员工。这其中有些人有合作关系，有些则没有。他们的合作关系具有传递性。如果已知 A 和 B 有过合作，B 和 C 也有过合作，那么我们可以认为 A 和 C 也有间接的合作关系。所谓的合作圈，就是所有间接或直接合作过的员工集合。
 * 给定一个 N * N 的矩阵 M（程序实际接收的输入是字符串，参见下面的输入样例），表示公司中员工之间的合作关系。如果 M[i][j] = 1，表示已知第 i 个和第 j 个员工有过间接或直接的合作，否则为没有合作过。
 */

function findCircleNum(M) {
  const n = M.length;
  const visited = Array(n).fill(false);
  let res = 0;

  function dfs(i) {
    for (let j = 0; j < n; j++) {
      if (M[i][j] === 1 && !visited[j]) {
        visited[j] = true;
        dfs(j);
      }
    }
  }

  for (let i = 0; i < n; i++) {
    if (!visited[i]) {
      dfs(i);
      res++;
    }
  }
  return res;
}


/**
 * 输入输出   M[0][0]  M[1][1] M[0][1] M[1][0] M[2][2]
 *  1 1 0 
 *  1 1 0 
 *  0 0 1
 */

process.stdin.on('data', function (data) {
  let arr = data.toString().trim().split('|').map(item => item.split(' ').map(Number))
  const res = findCircleNum(arr)
  console.log(res);
})