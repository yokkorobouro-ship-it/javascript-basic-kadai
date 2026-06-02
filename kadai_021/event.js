// 1. htmlから「btn」というidを持つ要素を取得し、定数に代入する
const btn = document.getElementById('btn');

// 2. htmlから「text」というidを持つ要素を取得し、定数に代入する
const text = document.getElementById('text');

// 3. ボタンがクリックされたときに、イベント処理を実行する
btn.addEventListener('click', () => {
  
  // 4. 2秒（2000ミリ秒）待つタイマー（非同期処理）をセットする
  setTimeout(() => {
    // 5. 2秒後にh2要素のテキストを書き換える
    text.textContent = 'ボタンをクリックしました';
  }, 2000);

});