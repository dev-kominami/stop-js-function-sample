let i = 0;

function countUp() {
  i++;
  postMessage("カウント: " + i);
  setTimeout(countUp, 1000);
}

countUp();