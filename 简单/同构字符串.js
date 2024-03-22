
/**
 * 给定两个字符串 s 和 t ，判断它们是否是同构的。
 */
function Isomorphic(s, t) {
  if (s.length !== t.length) {
      return 0
  }
  const sMap = {}, tMap = {}, len = s.length;

  for(let i = 0; i < len; i++) {
      if (sMap[s[i]] !== undefined || tMap[t[i]] !== undefined ) {
          if (sMap[s[i]] !== tMap[t[i]]) {
              return 0
          }
      }
      sMap[s[i]] = tMap[t[i]] = i
  }
  return 1
  
}
