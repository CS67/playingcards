// 1. 核心计算函数：计算组合数 C(n, m) (使用 BigInt 保证绝对不丢精度)
function combination(n, m) {
  if (m < 0 || m > n) return 0n;
  if (m === 0 || m === n) return 1n;
  if (m > n / 2) m = n - m; // 优化：C(n, m) == C(n, n-m)

  let res = 1n;
  let nBig = BigInt(n);
  let mBig = BigInt(m);

  for (let i = 1n; i <= mBig; i++) {
    res = (res * nBig) / i;
    nBig--;
  }
  return res;
}

// 2. 多变量超几何分布：同时计算 抽到x张王 且 抽到y张2 的概率
function calcJointProb(kingsWanted, twosWanted) {
  const TOTAL_CARDS = 205;
  const HAND_SIZE = 41;
  const KINGS_TOTAL = 8;
  const TWOS_TOTAL = 16;
  const OTHERS_TOTAL = TOTAL_CARDS - KINGS_TOTAL - TWOS_TOTAL; // 181张废牌

  const othersWanted = HAND_SIZE - kingsWanted - twosWanted;

  // 如果需要的废牌数小于0，说明手牌装不下，概率为0
  if (othersWanted < 0 || othersWanted > OTHERS_TOTAL) return 0;

  // 计算分子的三个组合数
  const waysKings = combination(KINGS_TOTAL, kingsWanted);
  const waysTwos = combination(TWOS_TOTAL, twosWanted);
  const waysOthers = combination(OTHERS_TOTAL, othersWanted);

  // 计算分母的总组合数
  const totalWays = combination(TOTAL_CARDS, HAND_SIZE);

  // 计算最终概率。由于 BigInt 做除法会抹去小数，
  // 我们先给分子乘上 10^20，算出结果后再用普通小数除回来。
  const PRECISION = 10000000000000000000n; // 10的19次方
  const probBigInt =
    (waysKings * waysTwos * waysOthers * PRECISION) / totalWays;

  // 转换回普通小数并化成百分比
  return (Number(probBigInt) / Number(PRECISION)) * 100;
}

// 3. 单独计算某种牌的概率（用来验证ChatGPT跑出来的数据）
function calcSingleProb(targetWanted, targetTotal) {
  const TOTAL_CARDS = 205;
  const HAND_SIZE = 41;
  const OTHERS_TOTAL = TOTAL_CARDS - targetTotal;
  const othersWanted = HAND_SIZE - targetWanted;

  if (othersWanted < 0 || othersWanted > OTHERS_TOTAL) return 0;

  const waysTarget = combination(targetTotal, targetWanted);
  const waysOthers = combination(OTHERS_TOTAL, othersWanted);
  const totalWays = combination(TOTAL_CARDS, HAND_SIZE);

  const PRECISION = 10000000000000000000n;
  const probBigInt = (waysTarget * waysOthers * PRECISION) / totalWays;

  return (Number(probBigInt) / Number(PRECISION)) * 100;
}

// ================= 运行测试结果 =================

console.log("============= 1. 验证单概率相乘的谬误 =============");
const prob2Kings = calcSingleProb(2, 8);
const prob3Twos = calcSingleProb(3, 16);

console.log(`单独抽到 2张王 的概率: ${prob2Kings.toFixed(4)}%`);
console.log(`单独抽到 3张2 的概率: ${prob3Twos.toFixed(4)}%`);
console.log(
  `【错误算法】两者直接相乘: ${((prob2Kings / 100) * (prob3Twos / 100) * 100).toFixed(4)}%`,
);

console.log("\n============= 2. 真实联合概率揭晓 =============");
const realJointProb = calcJointProb(2, 3);
console.log(
  `【正确算法】同手牌恰好包含 2张王 且 3张2 的精确概率: ---> ${realJointProb.toFixed(4)}% <---`,
);

console.log("\n============= 3. 打印 0~8张王的完整分布表 =============");
for (let i = 0; i <= 8; i++) {
  console.log(`${i} 张王: ${calcSingleProb(i, 8).toFixed(5)}%`);
}
console.log("\n============= 4. 打印 0~16张「2」的完整分布表 =============");
for (let i = 0; i <= 16; i++) {
  let prob = calcSingleProb(i, 16);
  // 过滤掉概率极小（几乎不可能发生）的情况，让打印更清爽
  if (prob < 0.00001 && i > 10) {
    console.log(`${i} 张 2: < 0.00001% (接近于0)`);
  } else {
    console.log(`${i >= 10 ? i : " " + i} 张 2: ${prob.toFixed(5)}%`);
  }
}