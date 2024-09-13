// グローバル変数としてworkerを宣言
let worker;

// Workerを作成し、メッセージハンドラを設定する関数
function createWorker() {
  worker = new Worker("worker.js");
  worker.onmessage = function(event) {
    // Workerからのメッセージを結果エリアに追加
    document.getElementById("result").innerHTML += event.data + "<br>";
  };
  // Worker開始メッセージを表示
  document.getElementById("result").innerHTML += "Worker が開始しました<br>";
}

// Workerを停止する関数
function stopWorker() {
  if (worker) {
    worker.terminate(); // Workerを終了
    worker = undefined; // worker変数をリセット
    // Worker停止メッセージを表示
    document.getElementById("result").innerHTML += "Worker が停止しました<br>";
  }
}

// 開始ボタンのクリックイベントハンドラ
document.getElementById('startWorker').addEventListener('click', () => {
  if (typeof(Worker) !== "undefined") {
    // Workerがサポートされている場合
    if (worker) {
      // 既存のWorkerがある場合は停止
      stopWorker();
    }
    // 新しいWorkerを作成
    createWorker();
  } else {
    // Workerがサポートされていない場合
    console.log("Web Workerはサポートされていません");
  }
});

// 停止ボタンのクリックイベントハンドラ
document.getElementById('stopWorker').addEventListener('click', stopWorker);