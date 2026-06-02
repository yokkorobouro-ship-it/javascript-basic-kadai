// 1. htmlから「text」というidを持つ要素（h2）を取得し、定数に代入する
const textEl = document.getElementById('text');

// 2. htmlから「btn」というidを持つ要素（button）を取得し、定数に代入する
const btnEl = document.getElementById('btn');

// 3. ボタンがクリックされたときに、イベント処理を実行する
btnEl.addEventListener('click', () => {
  // 4. h2要素のテキストを「ボタンをクリックしました」に書き換える
  textEl.textContent = 'ボタンをクリックしました';
});