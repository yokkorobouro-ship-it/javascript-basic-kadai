let num = 5;


// 1. 【最優先】3の倍数、かつ、5の倍数のとき
if (num % 3 === 0 && num % 5 === 0) {
  console.log('3と5の倍数です');
} 
// 2. 3の倍数のとき
else if (num % 3 === 0) {
  console.log('3の倍数です');
} 
// 3. 5の倍数のとき
else if (num % 5 === 0) {
  console.log('5の倍数です');
} 
// 4. それ以外のとき
else {
  console.log(num);
}