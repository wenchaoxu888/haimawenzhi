var winWidth
window.onload = function () {
  if (window.innerWidth) {
    winWidth = window.innerWidth
  } else if ((document.body) && (document.body.clientWidth)) {
    winWidth = document.body.clientWidth;
  } if (winWidth <= 1100) {
    document.getElementById('app').style.width = '880px'
  } else if (winWidth >= 1100) {
    document.getElementById('app').style.width = '1100px'
  }
}
window.onresize = function () {
  if (window.innerWidth) {
    winWidth = window.innerWidth
  } else if ((document.body) && (document.body.clientWidth)) {
    winWidth = document.body.clientWidth
  } if (winWidth <= 1100) {
    document.getElementById('app').style.width = '880px'
  } else if (winWidth >= 1100) {
    document.getElementById('app').style.width = '1100px'
  }
}
