let worker;

document.getElementById('startWorker').addEventListener('click', () => {
  if (typeof(Worker) !== "undefined") {
    if (!worker) {
      worker = new Worker("worker.js");
      worker.onmessage = function(event) {
        document.getElementById("result").innerHTML += event.data + "<br>";
      };
    } else {
      // 既存のWorkerが存在する場合は一度終了させて、新しいWorkerを作成
      worker.terminate();
      worker = new Worker("worker.js");
      worker.onmessage = function(event) {
        document.getElementById("result").innerHTML += event.data + "<br>";
      };
    }
    document.getElementById("result").innerHTML += "Worker が開始しました<br>";
  } else {
    console.log("Web Workerはサポートされていません");
  }
});

document.getElementById('stopWorker').addEventListener('click', () => {
  if (worker) {
    worker.terminate();
    worker = undefined;
    document.getElementById("result").innerHTML += "Worker が停止しました<br>";
  }
});