/**
 * 从数组随机取多个数组项
 * @param {Array} arr 源数组
 * @param {Number} num 取数组的数量
 */
export const randomArrayNum = (arr, num) => {
  const _arr = JSON.parse(JSON.stringify(arr));
  const result = [];
  let count = _arr.length;
  if (count <= num) {
    return arr;
  }
  for (let i = 0; i < num; i++) {
    const index = ~~(Math.random() * count) + i;
    result[i] = _arr[index];
    _arr[index] = _arr[i];
    count--;
  }
  return result;
};
