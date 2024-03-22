/**
 * Drizzle 前往山地统计大山的数目，现在收到这片区域的地图，地图中用0（平地）和1（山峰）绘制而成，请你帮忙计算其中的大山数目。

山总是被平地四面包围着，每一座山只能在水平或垂直方向上连接相邻的山峰而形成。一座山峰四面被平地包围，这个山峰也算一个大山。

另外，你可以假设地图的四面都被平地包围着。
输出一个整数表示大山的数目
 */

function mountNum(map) {
  const m = map.length
  const n = map[0].length
  const flag = Array(m).fill(0).map(() => Array(n).fill(false))
  let res = 0

  function dfs(i, j) {
    if (i < 0 || i >= m || j < 0 || j >= n || flag[i][j] || map[i][j] === 0) {
      return
    }
    flag[i][j] = true
    dfs(i - 1, j)
    dfs(i + 1, j)
    dfs(i, j - 1)
    dfs(i, j + 1)
  }

  for (let i = 0; i < m; i++) {
    for (let j = 0; j < n; j++) {
      if (!flag[i][j] && map[i][j] === 1) {
        res++
        dfs(i, j)
      }
    }
  }
  return res
}


process.stdin.setEncoding('utf8');

process.stdin.on('data', function (data) {
  // 处理用户输入的数据
    let arr = data.trim().split('\n');
    arr.shift();
    arr = arr.map(item => item.split(' ').map(Number))
    const num = mountNum(arr);

    console.log(num)
});