let worker;

document.getElementById('startWorker').addEventListener('click', () => {
  if (typeof(Worker) !== "undefined") {
    if (!worker) {
      worker = new Worker("worker.js");
      worker.onmessage = function(event) {
        document.getElementById("result").innerHTML += event.data + "<br>";
      };
    }
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