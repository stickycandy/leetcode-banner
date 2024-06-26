
/**
 * 学校的自助午餐提供圆形和方形的三明治，分别用数字 0 和 1 表示。所有学生站在一个队列里，每个学生要么喜欢圆形的要么喜欢方形的。
餐厅里三明治的数量与学生的数量相同。所有三明治都放在一个 栈 里，每一轮：

如果队列最前面的学生 喜欢 栈顶的三明治，那么会 拿走它 并离开队列。

否则，这名学生会 放弃这个三明治 并回到队列的尾部。

这个过程会一直持续到队列里所有学生都不喜欢栈顶的三明治为止。
 * @param {Array} students 
 * @param {Array} sandwiches 
 * @returns {Number}
 */
function countStudents(students, sandwiches) {
    
  while (sandwiches.length) {
    if (students.includes(sandwiches[0])) {
      students.splice(students.indexOf(sandwiches[0]), 1)
      sandwiches.shift()
    } else {
      return students.length
    }
  }
  return students.length
}

process.stdin.on('data', (data) => {
  const input = data.toString().trim().split('\n')
  const students = input[0].split(' ').map(Number)
  const sandwiches = input[1].split(' ').map(Number)
  console.log(countStudents(students, sandwiches))
})