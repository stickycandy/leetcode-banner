// 给你一个字符串 s 和一个正整数 k 。
// 用 vowels 和 consonants 分别表示字符串中元音字母和辅音字母的数量。
// 如果某个字符串满足以下条件，则称其为 美丽字符串 ：

// vowels == consonants，即元音字母和辅音字母的数量相等。

// (vowels * consonants) % k == 0，即元音字母和辅音字母的数量的乘积能被 k 整除。

// 返回字符串 s 中 非空美丽子字符串 的数量。
// 子字符串是字符串中的一个连续字符序列。
// 英语中的 元音字母 为 'a'、'e'、'i'、'o' 和 'u' 。
// 英语中的 辅音字母 为除了元音字母之外的所有字母。



function countSubstrings(s, k) {

  let count = 0
  const isPerfect = (str) => {
    // 不能是奇数
    if (str.length % 2 !== 0 || str.length/2 * str.length/ 2 % k !== 0 ) return false;
    const o = 'aeiou';
    let v = 0;
    for (let i = 0; i < str.length; i++) {
      if (o.includes(str[i])){
        v++;
      }
    }

    return v === str.length / 2 && v && v * v % k === 0;
  };


  for (let i = 0; i < s.length; i++) {
    for (let j = i + 1; j < s.length; j++) {
      const t = s.slice(i, j + 1);
      if (isPerfect(t)) {
        count ++
      }
    }
  }

  return count;
}


process.stdin.on('data', function(data) {
  const input = data.toString().trim().split(',');
  const s = input[0].split('=')[1].replace(/['"]/g, '').trim();
  const k = Number(input[1].split('=')[1]);
  console.log(countSubstrings(s, k))
})



function beautifulSubstrings(s, k) {
  const n = s.length; let x = 0, a = 0;
  const o = 'aeiou';
  const pre = new Array(n).fill(0);
  for (let i = 31; i >= 1; i--) {
    if (k % (i * i) === 0) {
      a = i;
      x = k / (i * i);
      break;
    }
  }
  const t = 2 * a * x;
  let res = 0;
  const mp = {
    0: {
      0: 1
    }
  }

  for (let i = 0; i < n; i++) {
    if (o.includes(s[i])) {
      pre[i] = pre[i - 1] + 1;
    } else {
      pre[i] = pre[i - 1];
    }
    if (mp[pre[i]] && mp[pre[i]][i % t]) {
      res += mp[pre[i]][i % t]++
    } else {
      mp[pre[i]] = {
        [i % t]: 1
      }
    }
    
  }

  return res;
}