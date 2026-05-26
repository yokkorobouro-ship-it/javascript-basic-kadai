// ① 今日、今のタイミングの日付データを丸ごと用意する
const today = new Date();

// ② 年、月、日をそれぞれ専用の関数で引っ張ってくる
const year = today.getFullYear();
const month = today.getMonth() + 1; 
const date = today.getDate();

// ③ 「〇〇年〇〇月〇〇日」の形に組み立ててコンソールに出す
console.log(year + '年' + month + '月' + date + '日');