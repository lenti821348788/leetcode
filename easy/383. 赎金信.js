/**
 * 
为了不在赎金信中暴露字迹，从杂志上搜索各个需要的字母，组成单词来表达意思。

给你一个赎金信 (ransomNote) 字符串和一个杂志(magazine)字符串，判断 ransomNote 能不能由 magazines 里面的字符构成。

如果可以构成，返回 true ；否则返回 false 。

magazine 中的每个字符只能在 ransomNote 中使用一次。

 

示例 1：

输入：ransomNote = "a", magazine = "b"
输出：false
示例 2：

输入：ransomNote = "aa", magazine = "ab"
输出：false
示例 3：

输入：ransomNote = "aa", magazine = "aab"
输出：true
 

提示：

1 <= ransomNote.length, magazine.length <= 105
ransomNote 和 magazine 由小写英文字母组成
 */

/**
 * @param {string} ransomNote
 * @param {string} magazine
 * @return {boolean}
 */
var canConstruct = function (ransomNote, magazine) {
  if (magazine.length < ransomNote.length) return false;
  const getCharNum = c => c.charCodeAt(0) - 'a'.charCodeAt(0);
  const getMap = str =>
    str.split('').reduce((total, cur) => {
      let n = getCharNum(cur);
      total.set(n, (total.get(n) ?? 0) + 1);
      return total;
    }, new Map());
  let rMap = getMap(ransomNote);
  let mMap = getMap(magazine);
  return Array.from(rMap.keys()).every(key => rMap.get(key) <= mMap.get(key));
};

var canConstruct = function (ransomNote, magazine) {
  if (ransomNote.length > magazine.length) {
    return false;
  }
  const cnt = new Array(26).fill(0);
  for (const c of magazine) {
    cnt[c.charCodeAt() - 'a'.charCodeAt()]++;
  }
  for (const c of ransomNote) {
    cnt[c.charCodeAt() - 'a'.charCodeAt()]--;
    if (cnt[c.charCodeAt() - 'a'.charCodeAt()] < 0) {
      return false;
    }
  }
  return true;
};
