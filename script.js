const container = document.querySelector(".container");
const banner = document.getElementById("banner");
const tap = document.getElementById("tapStart");
const left = document.querySelector(".left");
const right = document.querySelector(".right");
const bottom = document.querySelector(".bottom");

const randomPhrases = [
    "山深み陰だに見えずまして影<br>しかれどもあふ世の縁かな",
    "朝にて冬去ると天の文あれば<br>手中に入らむゆきの結晶",
    "春の日に見える君の門出には<br>皆で出で来て会ふこともがな",
    "たちわかれしほたるなみだ<br>せきあへずながれてゆくは<br>ときのながれよ",
    "花冷えの東風をば猛く踏み分けて<br>海原とほく渡りたまひね",
    "貝寄風に侘しさのみはたくしつつ<br>今はにおふる葵を覚ゆ",
    "たのみおくきみが木かげの<br>やすらかに我もつとめてぞ<br>かしづかむこと",
    "たのしかる月日もつひに盛りにて<br>泰澄がごと登り果つのみ",
    "ひさかたの輝かしき空<br>きみがため<br>未来を照らす光なりけり",
    "しろたへの雪が溶けゆく春の日に<br>君の門出よいとあはれかな",
    "千木り無き流るる時の遠けれど<br>違える年の春も来にけり",
    "あらたまの春にぞならんめでたき日<br>輝く六花降りしきること",
    "朝露の置きし木立をながむれば<br>苔よりいづる竹ぞありけむ",
    "朝露に濡れにし竹ののぶがごと<br>延びゆく君の明日をも見てむ",
    "竹の子や一日ふるまにおよすげば<br>誰か明日の姿知るらむ",
    "露濡るる袖ひるがえしたかむなを<br>摘みゆく君に朝日さしぬる",
    "たかむなの生ふる野辺に影照りて<br>つゆもなかるる隅なかりけり",
    "野辺に咲く花となりしも<br>われはまた<br>袂濡らさむ君ぞゆかしき",
    "合言葉に<br>「Okayama」と入れると…？",
    "合言葉に<br>「Hotel」と入れると…？",
    "いつまでも回るわけでは無いらしい",
    "ティンバル果が<br>結局何かわかってない",
    "ジャムシェドプルの<br>タタ財閥を創始したのは<br>ジャムシェトジー・タタ",
    "このサイトには<br>クリアという概念が存在する…かも",
    "『恋愛は幸福の期待値が低い』"
];

const sequentialPhrases = [
    "終わりだよ",
    "本当に終わりだよ",
    "終わりだって言ってんじゃん！",
    "何？暇なの？",
    "こんなに短歌いっぱいあるのに<br>よくここまで来たよね",
    "ちなみに合言葉「Tanka」で<br>短歌一覧見れるよ",
    "まだメッセージ<br>あると思ってる？",
    "こういうのは唐突に終わるもの",
    "これで終わりだよ",
    "これで終わりだよ",
    "終わったと思った？ｗ",
    "まだ続くんだよなそれが",
    "予想できてるんかよ",
    "もういいよ",
    "長いって",
    "あなたが失った時間で<br>英単語を覚えるべき",
    "...",
    "...",
    "まだおるやん",
    "ごめんって",
    "もう負けたって",
    "なんか悩みとかある感じ？",
    "誰にも止められなかった？",
    "だいぶ暇やん",
    "もうそっちの勝ちでいいよ",
    "望みのものはこれであろう",
    "②29308",
    "以降も楽しんでね！"
];

window.addEventListener("DOMContentLoaded", init);

function init(){
    banner.style.display = "none";
    document.body.style.overflow = "hidden";

    left.classList.add("show");
    right.classList.add("show");

    setTimeout(() => {
        bottom.classList.add("show");
    }, 500);

    const openingLogo = document.querySelector(".opening-logo");
    if(openingLogo){
        openingLogo.classList.add("show");
    }

    setTimeout(() => {
        tap.classList.add("show");
    }, 1700);
}

function startSite(){
    if(!tap.classList.contains("show")){
        return;
    }

    const openingLogo = document.querySelector(".opening-logo");
    if(openingLogo){
        openingLogo.classList.add("hide");
    }

    banner.style.display = "flex";

    document.getElementById("openingCover").classList.add("hide");

    left.classList.add("hide");
    right.classList.add("hide");
    bottom.classList.add("hide");
    tap.classList.add("hide");

    setTimeout(enterMain, 1500);
}

function enterMain(){
    document.getElementById("openingCover")?.remove();
    container.style.display = "none";
    document.body.style.overflow = "auto";
}

container.addEventListener("click", (event) => {
    startSite();
});

/* ==========================================================================
   ページ遷移アニメーションの対象と設定
   ========================================================================== */
const targetPages = ["page-home", "page-mondai", "page-kasu", "page-kokoroe", "page-history"];


// 内部処理用のデータ管理（変更しないでください）
let availableRandomPhrases = [...randomPhrases]; // ランダム用の残りプール
let sequentialIndex = 0;                         // 順番用カウンター

/**
 * ページ切り替え関数（カーテンアニメーション対応版）
 */
function navigateTo(pageId){
    const fullPageId = "page-" + pageId;

    if (targetPages.includes(fullPageId)) {
        // カーテンが動き出す直前に文章をセット
        setCurtainText();

        // ★ここで呼び出す関数です
        triggerCurtainTransition(fullPageId, () => {
            executePageSwitch(fullPageId);
        });
    } else {
        executePageSwitch(fullPageId);
    }
}

/**
 * 1周目ランダム（重複なし） ➔ 2周目順番通り ➔ 最初に戻ってループする関数
 */
function setCurtainText() {
    const textElement = document.getElementById("curtainText");
    if (!textElement) return;

    let selectedText = "";

    // 【1周目】ランダム用のリストにまだ残りがある場合
    if (availableRandomPhrases.length > 0) {
        const randomIndex = Math.floor(Math.random() * availableRandomPhrases.length);
        selectedText = availableRandomPhrases[randomIndex];
        availableRandomPhrases.splice(randomIndex, 1);
    } 
    // 【2周目】ランダム用が出きった後、順番用のリストを流す
    else if (sequentialPhrases.length > 0) {
        selectedText = sequentialPhrases[sequentialIndex];
        
        // カウンターを1進める
        sequentialIndex++;

        // ★2周目のリストもすべて出し切った場合の判定
        if (sequentialIndex >= sequentialPhrases.length) {
            // 次のサイクルのために、データとカウンターをすべて初期状態にリセット
            availableRandomPhrases = [...randomPhrases]; 
            sequentialIndex = 0;
        }
    }

    textElement.innerHTML = selectedText;
}

/**
 * 実際にDOMのactiveクラスを付け替える内部処理
 */
function executePageSwitch(fullPageId) {
    const pages = document.querySelectorAll(".page");
    pages.forEach((page) => {
        page.classList.remove("active");
    });

    const targetPage = document.getElementById(fullPageId);
    if(targetPage){
        targetPage.classList.add("active");
    }
}

/**
 * 【本体】カーテンアニメーションを実行する共通関数（1.2秒調整版）
 */
function triggerCurtainTransition(fullPageId, callback) {
    const curtainContainer = document.querySelector(".transition-curtain-container");
    const textElement = document.getElementById("curtainText");

    if (curtainContainer) {
        curtainContainer.classList.add("is-locking");
        curtainContainer.classList.add("is-leaving");
    }

    // 3本目の長方形が完全に画面を覆い尽くすのを待つ時間（1.2秒）
    setTimeout(() => {
        if (typeof callback === "function") callback();

        if (curtainContainer) {
            curtainContainer.classList.remove("is-leaving");
            curtainContainer.classList.add("is-entering");
            
            setTimeout(() => {
                curtainContainer.classList.add("is-active");
            }, 50);

            // 左側へハケきるのを待つ時間（1.2秒）
            setTimeout(() => {
                curtainContainer.classList.remove("is-entering", "is-active", "is-locking");
                
                // ★【追加】カーテンが完全に画面外に消えたら、中の文字も完全に消去する
                if (textElement) {
                    textElement.innerHTML = "";
                }
            }, 1200);
        }
    }, 1200);
}

/* ==========================================================================
   ロゴ回転アニメーション
   ========================================================================== */
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

    let currentScale = 1;
    if (clickCount > scaleStartClick) {
        const scaleProgress = (clickCount - scaleStartClick) / (maxClicks - scaleStartClick);
        currentScale = 1 + (scaleProgress * 19.0); 
    }

    if (clickCount < maxClicks) {
        logoImg.style.transition = `transform ${currentDuration}s ease-out`;
        logoImg.style.transform = `rotateZ(${currentRotation}deg) scale(${currentScale})`;
    } 
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

    if (clickCount < maxClicks && !logoImg.dataset.hasListener) {
        logoImg.dataset.hasListener = "true";
        logoImg.addEventListener('transitionend', () => {
            if (isBurst) return;

            if (clickCount > scaleStartClick) {
                clickCount = 0;
                currentRotation = currentRotation % 360;

                logoImg.style.transition = `transform 2.5s cubic-bezier(0.25, 1, 0.5, 1)`;
                logoImg.style.transform = `rotateZ(${currentRotation}deg) scale(1)`;
            } else {
                currentRotation = currentRotation % 360;
                logoImg.style.transition = 'none';
                logoImg.style.transform = `rotateZ(${currentRotation}deg) scale(1)`;
            }
        });
    }
}

/* ==========================================================================
   スクロール監視（Intersection Observer）
   ========================================================================== */
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
    rootMargin: "-40px 0px", 
    threshold: 0 
});

function initBoxObserver() {
    document.querySelectorAll(".menu-box").forEach((box) => {
        observer.observe(box);
    });
}

const originalEnterMain = enterMain;
enterMain = function() {
    if (typeof originalEnterMain === "function") originalEnterMain();
    initBoxObserver();
};

