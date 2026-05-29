// 引数で渡された数字を二乗して、戻り値として返す関数
const calculateSquare = (num) => {
  return num * num; // 👈 ここで同じ数字を掛け算して return（戻す）します！
}

// 関数を呼び出して、戻り値をコンソールに出力する
console.log(calculateSquare(10));