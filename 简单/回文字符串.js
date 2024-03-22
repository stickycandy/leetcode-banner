/**
 * 回文字符串
 * @param {*} str 
 * @returns 0 | 1
 */
function Palindrome(str) {
  const t = str.toLowerCase().replace(/[^0-9a-z]/ig, '');
  for(let i = 0, len = t.length; i < len/2; i++) {
      if (t[i] !== t[len - 1 - i]) {
          return 0
      }
  }
  return 1
}