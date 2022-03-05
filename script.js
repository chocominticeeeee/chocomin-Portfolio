window.onload = function(){
  // ページ読み込み時に実行したい処理
  }

// ヘッダーの色変わる
// scrollAmountにスクロール量
scrollAmount = 925;
window.addEventListener("scroll", function () {
  console.log(window.pageYOffset);
  //ヘッダー色変わる
  if (scrollAmount <= this.window.scrollY) {
    document.querySelector("header").classList.add("BGcolored");
  } else {
    document.querySelector("header").classList.remove("BGcolored");
  }
  //アバウトセクションアニメーション
  if (scrollAmount <= this.window.scrollY) {
    document.querySelector("header").classList.add("BGcolored");
    document.querySelector("#moveTopBtn").classList.add("moveTopBtn-inview");
  }else {
    document.querySelector("#moveTopBtn").classList.remove("moveTopBtn-inview");
  }

});

//セクションタイトルが見えたらアニメーション
//アバウトセクション
const callbackAbout = function (entries1, observer) {
  entries1.forEach((entry) => {
    if (entry.isIntersecting) {
      aboutSecElem.classList.add("inview-aboutSec");
    }
  });
};
const aboutSecElem = document.querySelector(".aboutSec");
const ioAbout = new IntersectionObserver(callbackAbout);
const targetAbout = document.querySelector(".aboutSec h2");
ioAbout.observe(targetAbout);

//サービスセクション
const callbackService = function (entries2, observer) {
  entries2.forEach((entry) => {
    if (entry.isIntersecting) {
      serviceSecElem.classList.add("inview-serviceSec");
    }
  });
};
const serviceSecElem = document.querySelector(".serviceSec");
const ioService = new IntersectionObserver(callbackService);
const targetService = document.querySelector(".serviceSec h2");
ioService.observe(targetService);

//コンタクトセクション
const callbackContact = function (entries3, observer) {
  entries3.forEach((entry) => {
    if (entry.isIntersecting) {
      contactSecElem.classList.add("inview-contactSec");
    }
  });
};
const contactSecElem = document.querySelector(".contactSec");
const ioContact = new IntersectionObserver(callbackContact);
const targetContact = document.querySelector(".contactSec h2");
ioContact.observe(targetContact);

//ワークスセクション
const callbackWorks = function (entries4, observer) {
  entries4.forEach((entry) => {
    if (entry.isIntersecting) {
      worksSecElem.classList.add("inview-workstSec");
    }
  });
};
const worksSecElem = document.querySelector(".worksSec");
const ioWorks = new IntersectionObserver(callbackWorks);
const targeWorks = document.querySelector(".worksSec h2");
ioWorks.observe(targeWorks);

//TOPに移動
function autoscrollTop(){
  window.scrollTo({
    top: 0,          //上からの位置
    behavior: 'smooth' //smoothでスクロールしながら移動
  });
}

//Rellax
var rellax = new Rellax('.rellax');

//Swiper
const swiper = new Swiper(".swiper", {
  loop:true,
  pagination: {
    el: ".swiper-pagination"
  },
  // ナビボタンが必要なら追加
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev"
  }
});

//Vanta.js各種設定
VANTA.NET({
  el: "#net",
  mouseControls: true,
  touchControls: true,
  gyroControls: false,
  minHeight: 200.0,
  minWidth: 200.0,
  scale: 1.0,
  scaleMobile: 1.0,
  color: 0x3fffbb,
  backgroundColor: 0x70707,
});

VANTA.WAVES({
  el: "#wave",
  mouseControls: false,
  touchControls: false,
  gyroControls: false,
  minHeight: 200.0,
  minWidth: 200.0,
  scale: 1.0,
  scaleMobile: 1.0,
  color: 0x70707,
  shininess: 36.0,
  waveHeight: 22.0,
  waveSpeed: 0.2,
  zoom: 0.81,
});

VANTA.CLOUDS({
  el: "#clouds",
  mouseControls: false,
  touchControls: false,
  gyroControls: false,
  minHeight: 200.0,
  minWidth: 200.0,
});
