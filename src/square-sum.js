// 命令式
function mysteryFn (nums) {
  let squares = []
  let sum = 0                           // 1. 创建中间变量

  for (let i = 0; i < nums.length; i++) {
    squares.push(nums[i] * nums[i])     // 2. 循环计算平方
  }

  for (let i = 0; i < squares.length; i++) {
    sum += squares[i]                   // 3. 循环累加
  }

  return sum
}

// 以上代码都是 how 而不是 what...

// 函数式
const mysteryFn = (nums) => nums
  .map(x => x * x)                      // a. 平方
  .reduce((acc, cur) => acc + cur, 0)   // b. 累加
