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
  if (!worker) return; // workerが存在しない場合は何もしない

  worker.terminate(); // Workerを終了
  worker = undefined; // worker変数をリセット
  // Worker停止メッセージを表示
  document.getElementById("result").innerHTML += "Worker が停止しました<br>";
}

// 開始ボタンのクリックイベントハンドラ
document.getElementById('startWorker').addEventListener('click', () => {
  // Workerがサポートされていない場合は早期リターン
  if (typeof(Worker) === "undefined") {
    console.log("Web Workerはサポートされていません");
    return;
  }

  // 既存のWorkerがある場合は停止
  if (worker) {
    stopWorker();
  }
  // 新しいWorkerを作成
  createWorker();
});

// 停止ボタンのクリックイベントハンドラ
document.getElementById('stopWorker').addEventListener('click', stopWorker);