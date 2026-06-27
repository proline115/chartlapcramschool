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
    "合言葉に<br>「Math」と入れると…？",
    "いつまでも回るわけでは無いらしい",
    "ティンバル果が<br>結局何かわかってない",
    "ジャムシェドプルの<br>タタ財閥を創始したのは<br>ジャムシェトジー・タタ",
    "このサイトには<br>クリアという概念が存在する…かも",
    "勉強を楽しむのに<br>頭の良さは関係ない",
    "『恋愛は幸福の期待値が低い』",
    "大吉！！！<br>今日一日全部の四択を当てるかも",
    "中吉！！<br>二択まで絞れたら後は勘でいける",
    "小吉！<br>運に頼らず自力で解こう",
    "凶...<br>一日二択を全外し<br>地理はやめとこう",
    "大凶......<br>そういう日だってある<br>リフレッシュしよう！",
    "思慮分別とかいう<br>「sensible」「おとなし」<br>専用のワード",
    "紙とペンがあれば<br>娯楽は完結する",
    "明日こそは警報でてほしい"
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
    "誰か止めなかったの？",
    "だいぶ暇やん",
    "もうそっちの勝ちでいいよ",
    "望みのものはこれであろう",
    "②29308",
    "以降も楽しんでね！"
];

const problemList = [
    ["pdf/『オハイオの風』.pdf", "『オハイオの風』", "英語", "7230"],
    ["pdf/1-共テ.pdf", "1-共テ<br>(地理)", "地理", "7109"],
    ["pdf/2-共テ.pdf", "2-共テ<br>(地理)", "地理", "7653"],
    ["pdf/3-共テ.pdf", "3-共テ<br>(地理)", "地理", "4075"],
    ["pdf/4-共テ.pdf", "4-共テ<br>(地理)", "地理", "6734"],
    ["pdf/5-共テ.pdf", "5-共テ<br>(地理)", "地理", "2071"],
    ["pdf/6-共テ.pdf", "6-共テ<br>(地理)", "地理", "9851"],
    ["pdf/7-共テ.pdf", "7-共テ<br>(地理)", "地理", "2706"],
    ["pdf/8-共テ.pdf", "8-共テ<br>(地理)", "地理", "3287"],
    ["pdf/9-共テ.pdf", "9-共テ<br>(地理)", "地理", "6103"],
    ["pdf/the field of「Subjunctive」.pdf","the field of<br>「Subjunctive」","英語","6578"],
    ["pdf/The Tale of Genji.pdf","The Tale of<br>Genji","国語","9842"],
    ["pdf/The Tale of Genji2.pdf","The Tale of<br>Genji2","国語","7579"],
    ["pdf/オハイオの風2.pdf","オハイオの風2","英語","8610"],
    ["pdf/旭川の網代木.pdf","旭川の網代木<br>(日本史)","歴史","9283"],
    ["pdf/英検対策オハイオの風.pdf","英検対策<br>オハイオの風","英語","0798"],
    ["pdf/加古川の網代木.pdf","加古川の網代木<br>(日本史)","歴史","4701"],
    ["pdf/奇問の崖.pdf","奇問の崖<br>(物理)","理科","5098"],
    ["pdf/共テ2-情報.pdf","共テ2-情報","情報","4986"],
    ["pdf/共テ世界史-1.pdf","共テ世界史-1","歴史","0916"],
    ["pdf/共テ世界史-2.pdf","共テ世界史-2","歴史","0784"],
    ["pdf/共テ世界史-3.pdf","共テ世界史-3","歴史","6098"],
    ["pdf/共テ世界史-4.pdf","共テ世界史-4","歴史","2374"],
    ["pdf/共テ倫理キリスト教編 - .pdf","共テ倫理<br>キリスト教編","公共","1997"],
    ["pdf/共通テスト作問 生物基礎 - 第1問A.pdf","生物基礎<br>第1問A","理科","3610"],
    ["pdf/共通テスト理科基礎演習のための演習1日目.pdf","化学基礎<br>1日目","理科","9720"],
    ["pdf/共通テスト理科基礎演習のための演習2日目.pdf","化学基礎<br>2日目","理科","3748"],
    ["pdf/共通テスト理科基礎演習のための演習3日目.pdf","化学基礎<br>3日目","理科","9640"],
    ["pdf/小学生でもできる情報.pdf","小学生でも<br>できる情報","情報","3658"],
    ["pdf/数学.pdf","数学","数学","7598"],
    ["pdf/単発数学.pdf","単発数学","数学","2078"],
    ["pdf/天川の網代木（日本史）.pdf","天川の網代木<br>(日本史)","歴史","6513"],
    ["pdf/日本史.pdf","日本史","歴史","0874"],
    ["pdf/別府川の網代木（日本史）.pdf","別府川の網代木<br>(日本史)","歴史","5697"],
    ["pdf/無地の知.pdf","無知の知<br>(地学)","理科","8136"],
    ["pdf/倫理テスト.pdf","倫理テスト","公共","0792"],
    ["pdf/倫理大問1.pdf","倫理大問1","公共","2783"],
    ["pdf/倫理大問2.pdf","倫理大問2","公共","4895"],
    ["pdf/倫理大問3.pdf","倫理大問3","公共","6048"],
    ["pdf/倫理大問4.pdf","倫理大問4","公共","9740"],
    ["pdf/倫理大問5.pdf","倫理大問5","公共","9658"],
    ["pdf/倫理大問6.pdf","倫理大問6","公共","7681"],
    ["pdf/倫理大問7.pdf","倫理大問7","公共","2871"]
];

const kasuProblemList = [
    ["kasupdf/カス英語.pdf", "カス英語", "英語", "5278"],
    ["kasupdf/カス英語2.pdf", "カス英語2", "英語", "5601"],
    ["kasupdf/カス世界史NOVA①.pdf","カス世界史<br>NOVA①","歴史","9436"],
    ["kasupdf/カス世界史NOVA② .pdf","カス世界史<br>NOVA②","歴史","8704"],
    ["kasupdf/カス政経.pdf","カス政経","公共","8769"],
    ["kasupdf/カス倫理.pdf","カス倫理","公共","2693"],
    ["kasupdf/カス歴史.pdf","カス歴史","歴史","1273"],
    ["kasupdf/カス歴史2.pdf","カス歴史2","歴史","0577"],
    ["kasupdf/ザグロスの頂.pdf","ザグロスの頂<br>(地理)","地理","2695"],
    ["kasupdf/やさしい理系生物.pdf","やさしい理系生物","理科","2987"]
];

const container = document.querySelector(".container");
const banner = document.getElementById("banner");
const tap = document.getElementById("tapStart");
const left = document.querySelector(".left");
const right = document.querySelector(".right");
const bottom = document.querySelector(".bottom");

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

const targetPages = ["page-home", "page-mondai", "page-kasu", "page-kokoroe", "page-history"];

let availableRandomPhrases = [...randomPhrases];
let sequentialIndex = 0;

function navigateTo(pageId){
    const fullPageId = "page-" + pageId;

    if (targetPages.includes(fullPageId)) {
        setCurtainText();
        triggerCurtainTransition(fullPageId, () => {
            executePageSwitch(fullPageId);
        });
    } else {
        executePageSwitch(fullPageId);
    }
}

function setCurtainText() {
    const textElement = document.getElementById("curtainText");
    if (!textElement) return;

    let selectedText = "";

    if (availableRandomPhrases.length > 0) {
        const randomIndex = Math.floor(Math.random() * availableRandomPhrases.length);
        selectedText = availableRandomPhrases[randomIndex];
        availableRandomPhrases.splice(randomIndex, 1);
    }
    else if (sequentialPhrases.length > 0) {
        selectedText = sequentialPhrases[sequentialIndex];
        sequentialIndex++;
        if (sequentialIndex >= sequentialPhrases.length) {
            availableRandomPhrases = [...randomPhrases]; 
            sequentialIndex = 0;
        }
    }

    textElement.innerHTML = selectedText;
}

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

function triggerCurtainTransition(fullPageId, callback) {
    const curtainContainer = document.querySelector(".transition-curtain-container");
    const textElement = document.getElementById("curtainText");

    if (curtainContainer) {
        curtainContainer.classList.add("is-locking");
        curtainContainer.classList.add("is-leaving");
    }

    setTimeout(() => {
        if (typeof callback === "function") callback();

        if (curtainContainer) {
            curtainContainer.classList.remove("is-leaving");
            curtainContainer.classList.add("is-entering");
            
            setTimeout(() => {
                curtainContainer.classList.add("is-active");
            }, 50);

            setTimeout(() => {
                curtainContainer.classList.remove("is-entering", "is-active", "is-locking");
                if (textElement) {
                    textElement.innerHTML = "";
                }
            }, 1200);
        }
    }, 1200);
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
                logoImg.style.transition = `transform 2.5s cubic-bezier(0.25, 1, 0.5, 1)`;
                logoImg.style.transform = `rotateZ(0deg) scale(1)`;
            } else {
                logoImg.style.transition = 'none';
                logoImg.style.transform = `rotateZ(0deg) scale(1)`;
            }
            clickCount = 0; 
            currentRotation = 0;
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

let currentAnswerNumber = "";
let currentOpenedPdfUrl = "";
// 💡 【バグ防止】今開いているのが通常（'normal'）かカス（'kasu'）かを記録する
let currentMondaiType = "normal"; 

// ページ読み込み時に「通常」と「カス」の両方を自動生成
document.addEventListener("DOMContentLoaded", () => {
    // 1つの関数（生成マシーン）に、データ、箱のID、保存先の名前を渡して2回動かす
    initAnyGrid(problemList, "thumbnail-grid", "completedMondaiList");
    initAnyGrid(kasuProblemList, "kasu-thumbnail-grid", "completedKasuList");
});

/**
 * 【超安全・共通化】どんな問題集のカードでもバグなく自動生成するマシーン
 */
function initAnyGrid(listData, gridId, storageKey) {
    const grid = document.getElementById(gridId);
    if (!grid) return;

    grid.innerHTML = ""; 

    const completedPdfs = JSON.parse(localStorage.getItem(storageKey)) || [];

    listData.forEach((prob) => {
        const [pdfUrl, title, subject, answerNum] = prob;

        const item = document.createElement("div");
        item.className = `mondai-item subject-${subject}`;
        item.setAttribute("data-subject", subject);
        item.setAttribute("data-pdf", pdfUrl);

        if (completedPdfs.includes(pdfUrl)) {
            item.classList.add("is-completed");
        }
        
        // 💡 クリック時、どちらのタイプ（通常かカスか）も一緒に記憶させてPDFを開く
        const type = (gridId === "kasu-thumbnail-grid") ? "kasu" : "normal";
        item.onclick = () => openPdf(pdfUrl, answerNum, type);

        const h3 = document.createElement("h3");
        h3.className = "mondai-title";
        h3.innerHTML = title;

        item.appendChild(h3);
        grid.appendChild(item);
    });
}

/**
 * 通常問題の絞り込み
 */
function filterProblems() {
    executeFilter("subject-filter", "#thumbnail-grid .mondai-item");
}

/**
 * 【新設】カス問題の絞り込み
 */
function filterKasuProblems() {
    executeFilter("kasu-subject-filter", "#kasu-thumbnail-grid .mondai-item");
}

/**
 * 【バグ・エラー完全防止版】絞り込みロジック
 */
function executeFilter(filterSelectId, itemSelector) {
    // 💡 安全装置：指定されたセレクトボックスが画面内にあるかチェック
    const filterElement = document.getElementById(filterSelectId);
    if (!filterElement) return; // 画面になければ、エラーを出さずに処理を終了する（これでバグが防げます）

    const filterValue = filterElement.value;
    const items = document.querySelectorAll(itemSelector);

    items.forEach(item => {
        const itemSubject = item.getAttribute("data-subject");
        item.classList.remove("fade-in");

        if (filterValue === "すべて" || itemSubject === filterValue) {
            item.classList.remove("fade-out");
            void item.offsetWidth; 
            item.classList.add("fade-in");
        } else {
            item.classList.add("fade-out");
        }
    });
}

/**
 * PDF画面を開く
 */
function openPdf(pdfUrl, answerNum, type) {
    const viewerView = document.getElementById("pdf-viewer-view");
    const pdfFrame = document.getElementById("pdf-frame");

    if (viewerView && pdfFrame) {
        currentAnswerNumber = answerNum;
        currentOpenedPdfUrl = pdfUrl;
        currentMondaiType = type; // 💡 通常かカスかを記憶

        pdfFrame.src = pdfUrl;
        viewerView.classList.remove("hidden");

        window.scrollTo(0, 0);
        document.body.classList.add("no-scroll");
    }
}

/**
 * 通常の「戻る」処理
 */
function closePdf() {
    const viewerView = document.getElementById("pdf-viewer-view");
    const pdfFrame = document.getElementById("pdf-frame");

    if (viewerView && pdfFrame) {
        viewerView.classList.add("hidden");
        pdfFrame.src = ""; 
        document.body.classList.remove("no-scroll");
    }
}

/**
 * 「解き終わった！」ボタンを押してポップアップを表示（通常・カス連動版）
 */
function showSolvedPopup() {
    const popup = document.getElementById("solved-popup");
    const popupText = document.getElementById("popup-answer-number");

    if (popup && popupText) {
        popupText.innerText = currentAnswerNumber; 
        popup.style.setProperty("display", "flex", "important"); 

        if (currentOpenedPdfUrl) {
            // 💡 今開いているタイプに合わせて、探すカードの場所と保存先を自動で切り替える
            const selector = currentMondaiType === "kasu" ? "#kasu-thumbnail-grid" : "#thumbnail-grid";
            const storageKey = currentMondaiType === "kasu" ? "completedKasuList" : "completedMondaiList";

            const targetCard = document.querySelector(`${selector} .mondai-item[data-pdf="${currentOpenedPdfUrl}"]`);
            
            if (targetCard) {
                targetCard.classList.add("is-completed");

                let completedPdfs = JSON.parse(localStorage.getItem(storageKey)) || [];
                if (!completedPdfs.includes(currentOpenedPdfUrl)) {
                    completedPdfs.push(currentOpenedPdfUrl);
                    localStorage.setItem(storageKey, JSON.stringify(completedPdfs));
                }
            }
        }
    }
}

/**
 * ポップアップを閉じ、PDFビューアーも同時に閉じる
 */
function closePdfAndPopup() {
    const popup = document.getElementById("solved-popup");
    if (popup) {
        popup.style.setProperty("display", "none", "important"); 
    }
    closePdf(); 
}

/**
 * 【通常ボタン用】メッセージボックスを開閉する
 */
function openResetModal() {
    const modal = document.getElementById("reset-confirm-modal");
    if (modal) {
        modal.classList.remove("hidden");
        document.body.classList.add("no-scroll");
    }
}
function closeResetModal() {
    const modal = document.getElementById("reset-confirm-modal");
    if (modal) {
        modal.classList.add("hidden");
        document.body.classList.remove("no-scroll");
    }
}

/**
 * 【カスボタン用】メッセージボックスを開閉する
 */
function openKasuResetModal() {
    const modal = document.getElementById("kasu-reset-confirm-modal");
    if (modal) {
        modal.classList.remove("hidden");
        document.body.classList.add("no-scroll");
    }
}
function closeKasuResetModal() {
    const modal = document.getElementById("kasu-reset-confirm-modal");
    if (modal) {
        modal.classList.add("hidden");
        document.body.classList.remove("no-scroll");
    }
}

/**
 * 【超安全】通常・カスの両方の履歴を一発で全削除する処理
 */
function executeClearAllHistory() {
    // 1. 通常とカス、両方のローカルストレージデータを完全消去
    localStorage.removeItem("completedMondaiList");
    localStorage.removeItem("completedKasuList");

    // 2. 通常問題集のカードから「.is-completed」クラスを一斉に剥ぎ取る
    const normalCards = document.querySelectorAll("#thumbnail-grid .mondai-item.is-completed");
    normalCards.forEach(card => card.classList.remove("is-completed"));

    // 3. カス問題集のカードからも「.is-completed」クラスを一斉に剥ぎ取る
    const kasuCards = document.querySelectorAll("#kasu-thumbnail-grid .mondai-item.is-completed");
    kasuCards.forEach(card => card.classList.remove("is-completed"));

    // 4. 開いている可能性のあるメッセージボックスを両方閉じる
    closeResetModal();
    closeKasuResetModal();
}
