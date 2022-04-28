/* Step 3 이미지 슬라이드 자바스크립트 */
var current = 0; /* 이미지 순서 */
showSlides(); /* 첫번째 이미지를 보여줌 */

function showSlides() {
  var slides = document.querySelectorAll("#slideShow > img");
  for (let i = 0; i < slides.length; i++) {
    slides[i].style.display = "none"; /* 모든 이미지 감춤 */
  }
  current++; /* 다음 이미지로 이동 */
  if (current > slides.length) /* 마지막 이미지 */
    current = 1; /* 첫번째 이미지로 초기화 */
  /* 현재 위치에 이미지 보이게 */
  slides[current - 1].style.display = "block";
  setTimeout(showSlides, 2000); /* 2초마다 showSlides() 실행 */

}

function clickEffect(e) {
  var d = document.createElement("div");
  d.className = "clickEffect";
  d.style.top = e.clientY + "px"; d.style.left = e.clientX + "px";
  document.body.appendChild(d);
  d.addEventListener('animationend', function () { d.parentElement.removeChild(d); }.bind(this));
}
document.addEventListener('click', clickEffect);