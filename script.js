
const container =
document.querySelector(".container");

const banner =
document.getElementById("banner");

const tap =
document.getElementById("tapStart");

const left =
document.querySelector(".left");

const right =
document.querySelector(".right");

const bottom =
document.querySelector(".bottom");


window.addEventListener(
"DOMContentLoaded",
init
);


function init(){

    banner.style.display =
"none";

    document.body.style.overflow =
    "hidden";


    left.classList.add(
        "show"
    );

    right.classList.add(
        "show"
    );


    setTimeout(
        ()=>{

            bottom.classList.add(
                "show"
            );

        },

        500
    );

    // オープニングロゴを表示
    const openingLogo = 
    document.querySelector(
        ".opening-logo"
    );
    
    if(openingLogo){
        openingLogo.classList.add(
            "show"
        );
    }


    setTimeout(
        ()=>{

            tap.classList.add(
                "show"
            );

        },

        1700
    );

}


function startSite(){

    if(
        !tap.classList.contains(
            "show"
        )
    ){

        return;

    }

    // オープニングロゴもフェードアウト
    const openingLogo = 
    document.querySelector(
        ".opening-logo"
    );
    
    if(openingLogo){
        openingLogo.classList.add(
            "hide"
        );
    }

    banner.style.display =
    "flex";


    document
    .getElementById(
        "openingCover"
    )
    .classList.add(
        "hide"
    );


    left.classList.add(
        "hide"
    );

    right.classList.add(
        "hide"
    );

    bottom.classList.add(
        "hide"
    );

    tap.classList.add(
        "hide"
    );


    setTimeout(

        enterMain,

        1500

    );

}



function enterMain(){

    document
    .getElementById(
        "openingCover"
    )
    ?.remove();


    container.style.display =
    "none";


    document.body.style.overflow =
    "auto";

}



// Tap以外でも開始
container.addEventListener(

    "click",

    (event)=>{
        startSite();
    }

);

function navigateTo(pageId){
    
    // 全てのページを非表示
    const pages = 
    document.querySelectorAll(
        ".page"
    );

    pages.forEach(
        (page)=>{
            page.classList.remove(
                "active"
            );
        }
    );

    // 選択されたページを表示
    const targetPage = 
    document.getElementById(
        "page-" + pageId
    );

    if(targetPage){
        targetPage.classList.add(
            "active"
        );
    }

}

let currentRotation = 0;
let clickCount = 0; 
const maxClicks = 100; 
const scaleStartClick = 50; 
let isBurst = false; 

function rotateLogo(event) {
    if (event) event.stopPropagation();
    if (isBurst) return; 

    const logoImg = document.querySelector('.logo img');
    if (!logoImg) return;

    clickCount++;
    currentRotation += 360;

    let currentDuration = Math.max(1.4, 1.5 - (clickCount * 0.001)); 

    // 51回目から100回目にかけて、1倍から最大20倍まで拡大率を計算
    let currentScale = 1;
    if (clickCount > scaleStartClick) {
        const scaleProgress = (clickCount - scaleStartClick) / (maxClicks - scaleStartClick);
        currentScale = 1 + (scaleProgress * 19.0); 
    }

    // 100回未満：スムーズに巨大化しながら回転
    if (clickCount < maxClicks) {
        logoImg.style.transition = `transform ${currentDuration}s ease-out`;
        logoImg.style.transform = `rotateZ(${currentRotation}deg) scale(${currentScale})`;
    } 
    // 100回目：破裂 ＋ 復活
    else {
        isBurst = true;
        logoImg.style.transition = 'none'; 
        logoImg.classList.add('burst'); 

        logoImg.addEventListener('animationend', function handler() {
            logoImg.removeEventListener('animationend', handler);
            logoImg.classList.remove('burst');
            logoImg.style.transform = 'rotateZ(0deg) scale(0)';
            
            clickCount = 0;
            currentRotation = 0;

            setTimeout(() => {
                logoImg.classList.add('respawn');
                logoImg.addEventListener('animationend', () => {
                    logoImg.classList.remove('respawn');
                    logoImg.style.transition = 'none';
                    logoImg.style.transform = 'rotateZ(0deg) scale(1)';
                    isBurst = false; 
                }, { once: true });
            }, 500);
        });
    }

    // 回転アニメーションが完全に止まった（終了した）時の処理
    if (clickCount < maxClicks && !logoImg.dataset.hasListener) {
        logoImg.dataset.hasListener = "true";
        logoImg.addEventListener('transitionend', () => {
            if (isBurst) return;

            // 回転が止まった時点で、1倍より大きければ滑らかに元の大きさに戻す
            if (clickCount > scaleStartClick) {
                // カウントと累積角度をリセット
                clickCount = 0;
                currentRotation = currentRotation % 360;

                // 2.5秒かけて本来の大きさと角度へ戻していく
                logoImg.style.transition = `transform 2.5s cubic-bezier(0.25, 1, 0.5, 1)`;
                logoImg.style.transform = `rotateZ(${currentRotation}deg) scale(1)`;
            } else {
                // 50回以下の通常の回転終了時は、角度をリセットして見た目を維持
                currentRotation = currentRotation % 360;
                logoImg.style.transition = 'none';
                logoImg.style.transform = `rotateZ(${currentRotation}deg) scale(1)`;
            }
        });
    }
}

const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
        if (entry.isIntersecting) {
            entry.target.classList.add("show");
        } else {
            entry.target.classList.remove("show");
        }
    });
}, {
    root: document.querySelector("#content"),
    /* 上下の遊びを元の設定に戻します */
    rootMargin: "-40px 0px", 
    threshold: 0 
});

/* ボックスの監視を開始する関数 */
function initBoxObserver() {
    document.querySelectorAll(".menu-box").forEach((box) => {
        observer.observe(box);
    });
}

/* サイトに入ったタイミングで監視を開始 */
const originalEnterMain = enterMain;
enterMain = function() {
    if (typeof originalEnterMain === "function") originalEnterMain();
    initBoxObserver();
};
