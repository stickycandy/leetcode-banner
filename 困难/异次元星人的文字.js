
/**
 * 外星文明中，异次元ABA星人的文字非常有特点，他们输出的文字翻译成地球上可见的字符串后，必定有英文字母，且正着看还是倒着看都是一样的，亦即 ：对于长度为n的字符串s，若i+j == n+1， 那么s[i] = s[j], 其中i，j均为字符串位置下标，1<=i,j<=n，且n>=3
 * ABA星人于是将他们的间谍信息隐藏在地球字符中，便于传递消息，请你识别以下给出的几组字符串，并判断是否隐藏有ABA星文，有则输出能够匹配到的最长ABA星文的长度m，否则输出0。
 * 给定长度为n的字符串L，1<=n<=10000, L由大小写字母和数字组成，其中ABA星文，其星文长度3<=m<=n。若找不到匹配的ABA星文，输出0
 * 输入格式:
 * 长度为n的字符串L，1<=n<=10000, L由大小写字母和数字组成，其中ABA星文，其星文长度m满足 3<=m<=n
 * 输出格式: 
 * 输出能够匹配到的最长ABA星文的长度m，无则输出0
 */

function abaStr (str) {
  const len = str.length;
  let res = ''
  if (len < 3) {
    return 0
  }

  const isAba = (t) => {
    if (t.length < 3 || !/[a-zA-Z]/.test(t)) return false;
    for (let i = 0; i < t.length / 2; i++) {
      if (t[i] !== t[t.length - 1 - i]) {
        return false
      }
    }
    return true
  }

  for (let i = 0; i < len; i++) {
    let a = ''
    for (let j = i + 2; j < str.length; j++) {
      const t = str.slice(i, j + 1);
      if (t.length < res.length) break;
      if (isAba(t)) {
        if (t.length > a.length ){
          a = t
        }
      }
    }
    if (a.length > res.length) {
      res = a
    }
  }

  return res.length
}


process.stdin.on('data', function(data) {
  const input = data.toString().trim().split('\n');
  let res = []
  for (let i = 0; i < input.length; i++) {
    res.push(abaStr(input[i]))
  }
  console.log(res.join('\n'))
})