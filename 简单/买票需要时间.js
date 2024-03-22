
/**
 * 前面的人要最多买和第k个人一样多的票，后面的人最多买第K个人 -1 张票
 * @param {*} tickets 
 * @param {*} k 
 * @returns 
 */
function buyTickets(tickets, k) {
  let res = 0;
  for (let i = 0, len = tickets.length; i < len; i++) {
      if (i <= k) {
          res += tickets[i] > tickets[k] ? tickets[k] : tickets[i]
      } else {
          res += tickets[i] > tickets[k] - 1 ? tickets[k] - 1 : tickets[i];
      }
  }
  return res
}

process.stdin.on('data', function(data) {
  const input = data.toString().trim().split('\n')
  const tickets = input[0].split(' ').map(Number)
  console.log(buyTickets(tickets, Number(input[1])))
})