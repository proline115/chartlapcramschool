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
    "合言葉「Question」で<br>直接メッセージが送れます",
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
    "明日こそは警報でてほしい",
    "本当に月が綺麗なとき<br>なんて言えば良いんや",
    "左って何も無かったっけ…<br>無かったか…",
    "鶯が<br>パイレーツ・オ◯・カリビアンの<br>音程で鳴いてた",
    "聖徳太子色々やりすぎて<br>集団名とかじゃないと<br>信じられない",
    "ｳｪｲﾊﾟ₍ᐢ.ˬ.ᐢ₎ｱｰﾈﾑﾗﾝﾄﾞ",
    "[カス知識]<br>おむつの炎は黄色",
    "作者の気持ちを<br>答えさせる問題<br>実際見たこと無い",
    "長い文章を入れたらどうなるかのチェックのためにこの文章を書いてるけど、多分こいつがはじめに表示されてそのあと流れてくるみたいな挙動になってるはず。自動で改行する機能を入れるか、文字の大きさを縮めるようにするか。自動で改行したら短歌の侘び寂びがなくなってしまう気がするし、文字を小さくしたらそれはそれで見にくい。画面の横幅が小さい場合縦から流すようにするのもあるけどほんまにプログラムめんどい気がする。でもかと言ってなぁ、スマホで見た時どう思うかよな。文化祭で見るとしたら多分スマホから。わざわざパソコンでするなんて準備中の人ぐらい？その人は多分このサイト楽しむ余裕ないし、そもそも文化祭に間に合うかわからんぐらい超大作が出来上がろうとしてる。自動改行は必要っぽいな。正味侘び寂びは一旦やってみてから判断するしか無い。縦に流すのもできることならしたい。このサイト出来上がるのほんまに来年の文化祭とかになるんちゃうかな。",
    "老人のイカれ昭和エピソード好き",
    "山へ芝刈りにって<br>結局何してたんやろ",
    "範囲多すぎると<br>逆に何もしたくなくなる症候群",
    "背景の写真は<br>どこから撮ったでしょう"
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
    ["pdf/オハイオの風2.pdf","オハイオの風2","英語","8610"],
    ["pdf/旭川の網代木.pdf","旭川の網代木<br>(日本史)","歴史","9283"],
    ["pdf/永田町の番人（公共・政経そして少し香る地理）.pdf","永田町の番人<br>(公共・政経<br>そして少し<br>香る地理)","公共","7209"],
    ["pdf/英検対策オハイオの風.pdf","英検対策<br>オハイオの風","英語","0798"],
    ["pdf/加古川の網代木.pdf","加古川の網代木<br>(日本史)","歴史","4701"],
    ["pdf/奇問の崖.pdf","奇問の崖<br>(物理)","理科","5098"],
    ["pdf/共テ2-情報.pdf","共テ2-情報","情報","4986"],
    ["pdf/共テ世界史-1.pdf","共テ世界史-1","歴史","0916"],
    ["pdf/共テ世界史-2.pdf","共テ世界史-2","歴史","0784"],
    ["pdf/共テ世界史-3.pdf","共テ世界史-3","歴史","6098"],
    ["pdf/共テ世界史-4.pdf","共テ世界史-4","歴史","2374"],
    ["pdf/共テ倫理キリスト教編.pdf","共テ倫理<br>キリスト教編","公共","1997"],
    ["pdf/共通テスト作問 生物基礎 - 第1問A.pdf","生物基礎<br>第1問A","理科","3610"],
    ["pdf/共通テスト理科基礎演習のための演習1日目.pdf","化学基礎<br>1日目","理科","9720"],
    ["pdf/共通テスト理科基礎演習のための演習2日目.pdf","化学基礎<br>2日目","理科","3748"],
    ["pdf/共通テスト理科基礎演習のための演習3日目.pdf","化学基礎<br>3日目","理科","9640"],
    ["pdf/小学生でもできる情報.pdf","小学生でも<br>できる情報","情報","3658"],
    ["pdf/数学.pdf","数学","数学","7598"],
    ["pdf/単発数学.pdf","単発数学","数学","2078"],
    ["pdf/天川の網代木（日本史）.pdf","天川の網代木<br>(日本史)","歴史","6513"],
    ["pdf/中学生でもできる情報.pdf","中学生でも<br>できる情報","情報","8274"],
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

const membersData = [
  { id: 1, name: "岡山の吉右衛門", 
    profile: "『オハイオの風』・『永田町の番人』制作<br>英検準一級講座主宰（合格者2名）<br><br>心得：百合は日本の文化です。<br><br>挨拶：ご機嫌よう、岡山県民の諸君。大都会岡山の出身である諸君は当然、百合についてある程度の知見をお持ちだと拝察する。いや、岡山県民であろうとなかろうと、全国民は百合を愛で、百合を観察し、百合に敬意を持っていなければならない。なのでここに、人類最後の防衛策として『<span style='font-weight:bold;color:yellow;'>国民百合文化研究所</span>』の設立を要求する！",
    beliefProfile: "百合は日本の文化です。"},
  { id: 2, name: "白狐ふゆ", 
    profile: "生物・倫理選択。<br>「しろぎつね」のつもりでつけた名前だったが初手で「びゃっこ」と読まれてしまったため、今は「びゃっこふゆ」で統一している。<br><br>心得：ラブコメは一対一対応。不得意教科ほど楽しくあれ。<br><br>挨拶：はじめましての人ははじめまして。もし「こいつ見たことあるな？」って人がいれば、相当レアなので誇っていいと思います。ちょっとした娯楽を皆様に提供することができれば幸いです。" ,
    beliefProfile: "「Novel」"},
  { id: 3, name: "プロリン115", 
    profile: "倫理・サイト運営担当<br><br>受験勉強を生贄にサイトを制作している。<br>英検講座より参加したが、申し込み方法がわからず無事不戦敗。<br><br><span style='color:white;'>心得：質に全</span>振りすれば勉強時間0でもいける<br><br><span style='color:white;'>挨拶：サイト運</span>営をしております！少しでも楽しんでいただけれ<span style='color:white;'>ば何より</span>です。実績全解除目指しましょう。",
    beliefProfile: "新たな扉が開かれた！"},
  { id: 4, name: "アポロ12号", 
    profile: "文化祭2日目提唱者<br>超ネクタイ開発者<br>ゴリキュア黄色枠<br>罰掃除を冗談で乗り切った者<br>「はい歌ろ」開発者<br>絆の奇跡：女性パート担当<br>カントリーロード：ソプラノ担当<br>旗手5年連続担当<br>善きサマリア人の例え<br><span style='font-weight:bold;color:yellow;'>先公に仇なす者</span>",
    beliefProfile:"神は死んだ"},
  { id: 5, name: "メンバー5", 
    profile: "ここに5人目のプロフィールのテキストが入ります。",
    beliefProfile: "p-ビスホスフィノ木"},
  { id: 6, name: "メンバー6", 
    profile: "ここに6人目のプロフィールのテキストが入ります。",
    beliefProfile: "岡山は日本の植民地"},
  { id: 7, name: "メンバー7", 
    profile: "ここに7人目のプロフィールのテキストが入ります。",
    beliefProfile: "ベリリウムは貴ガスやぁ"},
  { id: 8, name: "メンバー8", 
    profile: "ここに8人目のプロフィールのテキストが入ります。",
    beliefProfile: "「に加えて」は三文字やろ！"},
  { id: 9, name: "メンバー9", 
    profile: "ここに9人目のプロフィールのテキストが入ります。",
    beliefProfile: "3人以上は百合ではない"},
  { id: 10, name: "メンバー10", 
    profile: "ここに10人目のプロフィールのテキストが入ります。",
    beliefProfile:"お前の親父巨人軍？"}
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
    initMemberPage();
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
let currentMondaiType = "normal"; 

document.addEventListener("DOMContentLoaded", () => {
    initAnyGrid(problemList, "thumbnail-grid", "completedMondaiList");
    initAnyGrid(kasuProblemList, "kasu-thumbnail-grid", "completedKasuList");
});

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
        
        const type = (gridId === "kasu-thumbnail-grid") ? "kasu" : "normal";
        item.onclick = () => openPdf(pdfUrl, answerNum, type);

        const h3 = document.createElement("h3");
        h3.className = "mondai-title";
        h3.innerHTML = title;

        item.appendChild(h3);
        grid.appendChild(item);
    });
}

function filterProblems() {
    executeFilter("subject-filter", "#thumbnail-grid .mondai-item");
}

function filterKasuProblems() {
    executeFilter("kasu-subject-filter", "#kasu-thumbnail-grid .mondai-item");
}

function executeFilter(filterSelectId, itemSelector) {
    const filterElement = document.getElementById(filterSelectId);
    if (!filterElement) return;

    const filterValue = filterElement.value;
    const items = document.querySelectorAll(itemSelector);

    items.forEach(item => {
        const itemSubject = item.getAttribute("data-subject");
        
        const isCompleted = item.classList.contains("is-completed");

        item.classList.remove("fade-in");

        let shouldShow = false;

        if (filterValue === "すべて") {
            shouldShow = true;
        } else if (filterValue === "未回答") {
            shouldShow = !isCompleted;
        } else {
            shouldShow = (itemSubject === filterValue);
        }

        if (shouldShow) {
            item.classList.remove("fade-out");
            void item.offsetWidth;
            item.classList.add("fade-in");
        } else {
            item.classList.add("fade-out");
        }
    });
}

function openPdf(pdfUrl, answerNum, type) {
    const viewerView = document.getElementById("pdf-viewer-view");
    const pdfFrame = document.getElementById("pdf-frame");

    if (viewerView && pdfFrame) {
        currentAnswerNumber = answerNum;
        currentOpenedPdfUrl = pdfUrl;
        currentMondaiType = type;

        pdfFrame.src = pdfUrl;
        viewerView.classList.remove("hidden");

        window.scrollTo(0, 0);
        document.body.classList.add("no-scroll");
    }
}

function closePdf() {
    const viewerView = document.getElementById("pdf-viewer-view");
    const pdfFrame = document.getElementById("pdf-frame");

    if (viewerView && pdfFrame) {
        viewerView.classList.add("hidden");
        pdfFrame.src = ""; 
        document.body.classList.remove("no-scroll");
    }
}


function showSolvedPopup() {
    const popup = document.getElementById("solved-popup");
    const popupText = document.getElementById("popup-answer-number");

    if (popup && popupText) {
        popupText.innerText = currentAnswerNumber; 
        popup.style.setProperty("display", "flex", "important"); 

        if (currentOpenedPdfUrl) {
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

function closePdfAndPopup() {
    const popup = document.getElementById("solved-popup");
    if (popup) {
        popup.style.setProperty("display", "none", "important"); 
    }
    closePdf(); 
}

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

function executeClearAllHistory() {
    localStorage.removeItem("completedMondaiList");
    localStorage.removeItem("completedKasuList");
    const normalCards = document.querySelectorAll("#thumbnail-grid .mondai-item.is-completed");
    normalCards.forEach(card => card.classList.remove("is-completed"));
    const kasuCards = document.querySelectorAll("#kasu-thumbnail-grid .mondai-item.is-completed");
    kasuCards.forEach(card => card.classList.remove("is-completed"));
    closeResetModal();
    closeKasuResetModal();
}

const secretDialogueTree = {
  start: {
    text: "こんなに頑張ったのに何故？",
    buttons: [
      { text: "飽きた", next: "bored_1" },
      { text: "もう一度やりたい", next: "want_more_1" }
    ]
  },
  bored_1: {
    text: "だからってこんなことしなくても…",
    buttons: [
      { text: "消す", next: "delete_insist_1" },
      { text: "やっぱ消さない", next: "CLOSE" }
    ]
  },
  delete_insist_1: {
    text: "そんな君には消させてあげない！",
    buttons: [
      { text: "消す", next: "delete_insist_2" },
      { text: "ごめん", next: "sorry_route" }
    ]
  },
  delete_insist_2: {
    text: "え…何が君をそこまで…",
    buttons: [
      { text: "消す", next: "give_up_delete" },
      { text: "ごめん", next: "sorry_route" }
    ]
  },
  give_up_delete: {
    text: "わかったよ…",
    buttons: [
      { text: "消す", next: "DELETE_HISTORY" },
      { text: "消す", next: "DELETE_HISTORY" }
    ]
  },
  sorry_route: {
    text: "わかったならいいんだよ。",
    buttons: [
      { text: "消させていただく", next: "DELETE_HISTORY" },
      { text: "消さないでおく", next: "relieved" }
    ]
  },
  relieved: {
    text: "良かった良かった",
    buttons: [
      { text: "消す", next: "why_do_this" },
      { text: "閉じる", next: "CLOSE" }
    ]
  },
  why_do_this: {
    text: "なんでそんなことするの…？",
    buttons: [
      { text: "自我を消す", next: "loop_back" },
      { text: "お前を消す", next: "loop_back" }
    ]
  },
  loop_back: {
    text: "問題、カス問題ともに解答履歴が消去されます。本当によろしいですか？",
    buttons: [
      { text: "はい", next: "DELETE_HISTORY" },
      { text: "いいえ", next: "CLOSE" }
    ]
  },
  want_more_1: {
    text: "あら…///",
    buttons: [
      { text: "やっぱやらない", next: "CLOSE" },
      { text: "楽しかった", next: "reward_ask" }
    ]
  },
  reward_ask: {
    text: "制作者として感無量。そんなあなたにご褒美を。",
    buttons: [
      { text: "受け取る", next: "reward_code" },
      { text: "受け取らない", next: "humble_route" }
    ]
  },
  humble_route: {
    text: "楽しみ方は人それぞれだよね。ここまで解いてくれてありがとね。",
    buttons: [
      { text: "どういたしまして", next: "DELETE_HISTORY" },
      { text: "こちらこそ", next: "DELETE_HISTORY" }
    ]
  },
  reward_code: {
    text: "③74293",
    buttons: [
      { text: "ありがとう", next: "true_reward" },
      { text: "ばーーーか！！", next: "CLOSE" }
    ]
  },
  true_reward: {
    text: "本当の数字は③38421。試すようなことをしてごめん。",
    buttons: [
      { text: "いいよ", next: "enjoy_again" },
      { text: "大丈夫だよ", next: "enjoy_again" }
    ]
  },
  enjoy_again: {
    text: "もう一度楽しむ",
    buttons: [
      { text: "はい", next: "DELETE_HISTORY" },
      { text: "楽しむ", next: "DELETE_HISTORY" }
    ]
  }
};

let currentSecretStage = null;
let activeModalType = null;

function checkAllQuestionsCleared() {
    const totalProblems = document.querySelectorAll(".thumbnail-grid .mondai-item").length;
    const savedMondai = JSON.parse(localStorage.getItem("completedMondaiList") || "[]");
    const savedKasu = JSON.parse(localStorage.getItem("completedKasuList") || "[]");
    const totalCleared = savedMondai.length + savedKasu.length;
    return totalProblems > 0 && totalCleared === totalProblems;
}

function resetModalDOM() {
    const normalModal = document.getElementById("reset-confirm-modal");
    if (normalModal) {
        normalModal.querySelector("p").textContent = "問題、カス問題ともに解答履歴が消去されます。本当によろしいですか？";
        const buttons = normalModal.querySelectorAll(".modal-actions button");
        buttons[0].textContent = "はい";
        buttons[1].textContent = "いいえ";
    }
    const kasuModal = document.getElementById("kasu-reset-confirm-modal");
    if (kasuModal) {
        kasuModal.querySelector("p").textContent = "問題、カス問題ともに解答履歴が消去されます。本当によろしいですか？";
        const buttons = kasuModal.querySelectorAll(".modal-actions button");
        buttons[0].textContent = "はい";
        buttons[1].textContent = "いいえ";
    }
}

function openResetModal() {
    const modal = document.getElementById("reset-confirm-modal");
    if (modal) {
        resetModalDOM();
        activeModalType = "normal";
        
        if (checkAllQuestionsCleared()) {
            currentSecretStage = "start";
        } else {
            currentSecretStage = null;
        }

        modal.classList.remove("hidden");
        document.body.classList.add("no-scroll");
        modal.addEventListener('click', (e) => e.stopPropagation());
    }
}

function openKasuResetModal() {
    const modal = document.getElementById("kasu-reset-confirm-modal");
    if (modal) {
        resetModalDOM();
        activeModalType = "kasu";

        if (checkAllQuestionsCleared()) {
            currentSecretStage = "start";
        } else {
            currentSecretStage = null;
        }

        modal.classList.remove("hidden");
        document.body.classList.add("no-scroll");
        modal.addEventListener('click', (e) => e.stopPropagation());
    }
}

function closeResetModal() {
    const modal = document.getElementById("reset-confirm-modal");
    if (modal) {
        modal.classList.add("hidden");
        document.body.classList.remove("no-scroll");
        currentSecretStage = null;
        activeModalType = null;
    }
}


function closeKasuResetModal() {
    const modal = document.getElementById("kasu-reset-confirm-modal");
    if (modal) {
        modal.classList.add("hidden");
        document.body.classList.remove("no-scroll");
        currentSecretStage = null;
        activeModalType = null;
    }
}

function renderSecretDialogue(stageKey) {
    currentSecretStage = stageKey;
    const data = secretDialogueTree[stageKey];
    
    const modalId = activeModalType === "kasu" ? "kasu-reset-confirm-modal" : "reset-confirm-modal";
    const modal = document.getElementById(modalId);
    
    if (modal) {
        modal.querySelector("p").textContent = data.text;
        const buttons = modal.querySelectorAll(".modal-actions button");
        buttons[0].textContent = data.buttons[0].text;
        buttons[1].textContent = data.buttons[1].text;
    }
}

function handleModalClick(buttonIndex) {
    if (currentSecretStage === null) {
        if (buttonIndex === 0) {
            executeClearAllHistory();
        } else {
            if (activeModalType === "kasu") {
                closeKasuResetModal();
            } else {
                closeResetModal();
            }
        }
        return;
    }

    if (currentSecretStage === "start") {
        if (buttonIndex === 0) {
            renderSecretDialogue("start");
            currentSecretStage = "start_waiting"; 
        } else {
            if (activeModalType === "kasu") {
                closeKasuResetModal();
            } else {
                closeResetModal();
            }
        }
        return;
    }

    if (currentSecretStage === "start_waiting") {
        currentSecretStage = "start";
    }

    const currentData = secretDialogueTree[currentSecretStage];
    if (!currentData || !currentData.buttons[buttonIndex]) return;
    const nextStage = currentData.buttons[buttonIndex].next;

    if (nextStage === "CLOSE") {
        if (activeModalType === "kasu") {
            closeKasuResetModal();
        } else {
            closeResetModal();
        }
    } else if (nextStage === "DELETE_HISTORY") {
        executeClearAllHistory();
    } else {
        renderSecretDialogue(nextStage);
    }
}

function handleSecretChoice(buttonIndex) {
    const currentData = secretDialogueTree[currentSecretStage];
    if (!currentData || !currentData.buttons[buttonIndex]) return;
    const nextStage = currentData.buttons[buttonIndex].next;

    if (nextStage === "CLOSE") {
        closeResetModal();
        closeKasuResetModal();
    } else if (nextStage === "DELETE_HISTORY") {
        executeClearAllHistory();
    } else {
        renderSecretDialogue(nextStage);
    }
}

function executeClearAllHistory() {
    localStorage.removeItem("completedMondaiList");
    localStorage.removeItem("completedKasuList");
    const normalCards = document.querySelectorAll("#thumbnail-grid .mondai-item.is-completed");
    normalCards.forEach(card => card.classList.remove("is-completed"));
    const kasuCards = document.querySelectorAll("#kasu-thumbnail-grid .mondai-item.is-completed");
    kasuCards.forEach(card => card.classList.remove("is-completed"));
    closeResetModal();
    closeKasuResetModal();
}


let favoriteMemberId = localStorage.getItem("belief_favorite_member_id");
let hasCleared = localStorage.getItem("belief_game_cleared");

if (favoriteMemberId !== null && typeof membersData !== "undefined") {
  const favId = parseInt(favoriteMemberId, 10);
  const favIndex = membersData.findIndex(member => member.id === favId);
  
  if (favIndex !== -1) {
    const favMember = membersData[favIndex];
    membersData.splice(favIndex, 1);
    membersData.unshift(favMember);
  }
}

let currentIndex = 0;

function sortMembersByFavorite() {
  // 最新の保存データを取得
  favoriteMemberId = localStorage.getItem("belief_favorite_member_id");
  let gameBtnFav  = document.getElementById("btn-favorite");
  // ① クリア状況の取得
  if (hasCleared) {
    gameBtnFav.classList.add("is-gold");
  }
  
  if (typeof membersData !== "undefined") {
    // 1. まずはIDの順番（1, 2, 3...）に完全に並び替えて、元の状態（メンバー1が先頭）に戻す
    membersData.sort((a, b) => a.id - b.id);
    
    // 2. お気に入り登録されている人がいる場合だけ、その人を先頭に引っ越しさせる
    if (favoriteMemberId !== null) {
      const favId = parseInt(favoriteMemberId, 10);
      const favIndex = membersData.findIndex(member => member.id === favId);
      
      if (favIndex !== -1) {
        const favMember = membersData[favIndex];
        membersData.splice(favIndex, 1); // 一旦配列から抜く
        membersData.unshift(favMember);  // 配列の先頭（0番目）に追加
      }
    }
  }
}

// ★追加：ページ遷移してきた時や、ロード時に「画面を完全に初期化する」共通の関数
function initMemberPage() {
  // 1. お気に入りデータをもとに配列を並び替える
  sortMembersByFavorite();
  
  // 2. インデックスを強制的に「最初の人（0番目）」にリセットする
  currentIndex = 0;
  
  // 3. スライド画面とホームの文章を最新状態に更新する
  updateScreen(currentIndex);
  updateHomeHeadline();
}

const memberPhoto = document.getElementById("member-photo");
const favStar = document.getElementById("fav-star");
const memberName = document.getElementById("member-name");
const memberProfile = document.getElementById("member-profile");
const profileWrap = document.getElementById("profile-text-container");
const errorToast = document.getElementById("error-message");

const btnPrev = document.getElementById("btn-prev");
const btnNext = document.getElementById("btn-next");
const btnFavorite = document.getElementById("btn-favorite");

const homeHeadline = document.getElementById("home-headline"); 
const defaultHeadline = "チャートの周りで回ること、それが受験生。";

function updateHomeHeadline() {
  if (favoriteMemberId !== null && typeof membersData !== "undefined") {
    const favId = parseInt(favoriteMemberId, 10);
    const favMember = membersData.find(member => member.id === favId);
    if (favMember && favMember.beliefProfile) {
      homeHeadline.innerHTML = favMember.beliefProfile;
      return;
    }
  }
  homeHeadline.textContent = defaultHeadline;
}
function updateScreen(index, direction = "") {
  profileWrap.className = "belief-profile-text-wrap";
  memberPhoto.className = "";
  memberName.className = ""; 
  
  void profileWrap.offsetWidth; 
  void memberPhoto.offsetWidth; 
  void memberName.offsetWidth; 

  // --- 【追加】ボタンの明暗（有効・無効）を制御する関数 ---
  function updateButtonStates(currentIndex) {
    if (!btnPrev || !btnNext) return; // ボタン要素が存在しない場合はスキップ
    const gamePage = document.getElementById("game-page-screen");
    if (gamePage && gamePage.style.display === "block") {
        return; 
    }
    // 現在のメンバーデータ
    const currentMember = membersData[currentIndex];

    // 1. 左ボタン（◀）の制御
    if (currentIndex === 0) {
      // 先頭（インデックス0）にいるとき
      if (currentMember && currentMember.id === 3) {
        // 例外：メンバー3が先頭なら、奥にゲームがある合図として明るいまま（クリック可能）にする
        btnPrev.classList.remove("disabled");
      } else {
        // それ以外なら、通常通り端なので暗く（クリック不可）にする
        btnPrev.classList.add("disabled");
      }
    } else {
      // 先頭以外なら常に明るい（クリック可能）
      btnPrev.classList.remove("disabled");
    }

    // 2. 右ボタン（▶）の制御
    if (currentIndex === membersData.length - 1) {
      // 末尾（最後のメンバー）にいるなら暗く（クリック不可）にする
      btnNext.classList.add("disabled");
    } else {
      // それ以外なら常に明るい（クリック可能）
      btnNext.classList.remove("disabled");
    }
  }

  function refreshStarIcon() {
    if (favoriteMemberId !== null && membersData[index].id === parseInt(favoriteMemberId, 10)) {
        favStar.src = "belief/star_on.png";
    } else {
        favStar.src = "belief/star_off.png";
    }
  }

  // アニメーションなし（初期表示など）の場合
  if (!direction) {
    memberPhoto.src = `belief/member${membersData[index].id}.png`;
    memberName.textContent = membersData[index].name;
    memberProfile.innerHTML = membersData[index].profile;
    refreshStarIcon();
    updateButtonStates(index); // 【追加】ボタンの状態を更新
    return;
  }

  if (direction === "next") {
    profileWrap.classList.add("slide-out-left");
    memberPhoto.classList.add("slide-out-left");
    memberName.classList.add("slide-out-left"); 
  } else if (direction === "prev") {
    profileWrap.classList.add("slide-out-right");
    memberPhoto.classList.add("slide-out-right");
    memberName.classList.add("slide-out-right"); 
  }

  setTimeout(() => {
    memberPhoto.src = `belief/member${membersData[index].id}.png`;
    memberName.textContent = membersData[index].name;
    memberProfile.innerHTML = membersData[index].profile;
    refreshStarIcon();
    updateButtonStates(index); // 【追加】文字が切り替わったタイミングでボタンの状態を更新
    
    profileWrap.className = "belief-profile-text-wrap";
    memberPhoto.className = "";
    memberName.className = ""; 
    if (direction === "next") {
      profileWrap.classList.add("slide-in-right");
      memberPhoto.classList.add("slide-in-right");
      memberName.classList.add("slide-in-right");  
    } else if (direction === "prev") {
      profileWrap.classList.add("slide-in-left");
      memberPhoto.classList.add("slide-in-left");
      memberName.classList.add("slide-in-left"); 
    }
  }, 300);
}

let errorTimeout;
function showLimitError() {
  clearTimeout(errorTimeout);
  errorToast.style.transition = "none";
  errorToast.style.opacity = "1";
  errorToast.classList.add("show");

  errorTimeout = setTimeout(() => {
    errorToast.style.transition = "opacity 1.5s ease"; 
    errorToast.style.opacity = "0"; 
    
    setTimeout(() => {
      errorToast.classList.remove("show");
    }, 15);
  }, 1); 
}

// ==========================================
// 【修正版】コントローラー＆ゲーム連動処理
// ==========================================

// 初期状態として、ゲーム画面がまだ開かれていないことを明示
if (typeof window.currentGameScene === "undefined") {
  window.currentGameScene = "NOT_OPEN"; 
}

function setupControllerButton(btnElement, arrowKey, actionType, normalCallback) {
  if (!btnElement) return;

  // 擬似的にキーボードのキーを押し下げる/離す関数
  const dispatchKeyEvent = (type, keyName) => {
    const event = new KeyboardEvent(type, {
      key: keyName,
      code: keyName,
      bubbles: true,
      cancelable: true
    });
    window.dispatchEvent(event);
  };

  const handleEvent = (e) => {
    const gamePage = document.getElementById("game-page-screen");
    const isGameVisible = gamePage && gamePage.style.display === "block";

    // ─── A. ゲーム画面が開いている時の処理 ───
    if (isGameVisible) {
      if (window.currentGameScene === "PLAYING") {
        // スマホやノートPCの標準挙動（ズーム、長押しメニューなど）を完全に殺す
        if (e.cancelable) e.preventDefault();
        e.stopPropagation();

        // 1. ボタンが押された時（touchstart）
        if (e.type === "touchstart") {
          dispatchKeyEvent("keydown", arrowKey); // キーボードのキーを「押しっぱなし」にする
        }
        // 2. ボタンから指が離れた時（touchend / touchcancel）
        else if (e.type === "touchend" || e.type === "touchcancel") {
          dispatchKeyEvent("keyup", arrowKey); // キーボードのキーを「離す」
        }
        return; 
      }

      // ★【修正】ゲームのメニュー画面（SELECT/OVER/CLEAR）では、指を離した時の重複発火をスキップ
      if (e.type === "touchend" || e.type === "touchcancel") return;

      // ゲーム画面（SELECT/OVER/CLEAR画面）の時の挙動
      if (actionType === "next") {
        if (e.type === "touchstart" && e.cancelable) e.preventDefault();
        gamePage.style.display = "none";
        window.currentGameScene = "NOT_OPEN"; 
        return;
      } 
      else if (actionType === "prev") {
        if (e.type === "touchstart" && e.cancelable) e.preventDefault();
        if (typeof showLimitError === "function") showLimitError();
        return;
      }
      else if (actionType === "star") {
        if (e.cancelable) e.preventDefault();
        
        // 選択画面では連打を防ぐため、touchstart（またはクリック）の瞬間だけイベントを発火させる
        if (e.type === "touchstart" || e.type === "click") {
          dispatchKeyEvent("keydown", arrowKey);
          // 押しっぱなしにならないよう、直後に離したイベントも送る
          setTimeout(() => dispatchKeyEvent("keyup", arrowKey), 20);
        }
        return;
      }
    }

    // ─── B. ゲーム画面が開かれていない通常時の処理 ───
    // ★【修正】通常画面（カルーセル移動や星ボタン）でも、指を離した時の重複発火をスキップ
    if (e.type === "touchend" || e.type === "touchcancel") return;

    if (e.type === "touchstart") {
      if (e.cancelable) e.preventDefault();
    }
    normalCallback();
  };

  // 通常クリック（タップ）時のイベント
  btnElement.addEventListener("click", handleEvent);

  // タッチ開始と終了を、この関数だけで完全に制御する
  btnElement.addEventListener("touchstart", handleEvent, { passive: false });
  btnElement.addEventListener("touchend", handleEvent, { passive: false });
  btnElement.addEventListener("touchcancel", handleEvent, { passive: false });
}

// ─── 右ボタン（▶）の設定 ───
if (btnNext) {
  setupControllerButton(btnNext, "ArrowRight", "next", () => {
    if (currentIndex < membersData.length - 1) {
      currentIndex++;
      updateScreen(currentIndex, "next");
    } else {
      if (typeof showLimitError === "function") showLimitError();
    }
  }, { passive: true });
}

// ─── 左ボタン（◀）の設定 ───
if (btnPrev) {
  setupControllerButton(btnPrev, "ArrowLeft", "prev", () => {
    if (currentIndex > 0) {
      currentIndex--;
      updateScreen(currentIndex, "prev");
    } else {
      const currentMember = (typeof membersData !== "undefined") ? membersData[0] : null;
      
      if (currentMember && currentMember.id === 3) {
        let gamePageContainer = document.getElementById("game-page-screen");
        const originScreen = document.querySelector(".belief-digital-screen");
        
        if (originScreen) {
          if (!gamePageContainer) {
            gamePageContainer = document.createElement("div");
            gamePageContainer.id = "game-page-screen";
            
            gamePageContainer.style.position = "absolute";
            gamePageContainer.style.top = "0";
            gamePageContainer.style.left = "0";
            gamePageContainer.style.width = "100%";
            gamePageContainer.style.height = "100%";
            gamePageContainer.style.backgroundColor = "#000000"; 
            gamePageContainer.style.zIndex = "10";             
            
            const canvas = document.createElement("canvas");
            canvas.id = "charShooCanvas";
            canvas.style.width = "100%";
            canvas.style.height = "100%";
            canvas.style.display = "block";
            gamePageContainer.appendChild(canvas);
            
            originScreen.style.position = "relative"; 
            originScreen.appendChild(gamePageContainer);
          }
          
          gamePageContainer.style.display = "block";
          window.currentGameScene = "SELECT"; 

          if (typeof window.initGame === "function") {
            const canvasElement = document.getElementById("charShooCanvas");
            window.initGame(canvasElement);
          }
        }
      } else {
        if (typeof showLimitError === "function") showLimitError();
      }
    }
  }, { passive: true });
}

// ─── お気に入り・星ボタン（★）の設定 ───
if (btnFavorite) {
  setupControllerButton(btnFavorite, " ", "star", () => {
    const currentMemberId = membersData[currentIndex].id;

    if (favoriteMemberId !== null && parseInt(favoriteMemberId, 10) === currentMemberId) {
      favoriteMemberId = null;
      localStorage.removeItem("belief_favorite_member_id");
      if (favStar) favStar.src = "belief/star_off.png";
    } else {
      favoriteMemberId = currentMemberId.toString();
      localStorage.setItem("belief_favorite_member_id", favoriteMemberId);
      if (favStar) favStar.src = "belief/star_on.png";
    }
    updateHomeHeadline();
  }, { passive: true });
}

// 画面初期化の実行
updateScreen(currentIndex);
updateHomeHeadline();

if (typeof initMemberPage === "function") {
  initMemberPage();
}

// ==========================================
// キーボード操作のイベントリスナー
// ==========================================
window.addEventListener("keydown", (event) => {
  if (document.activeElement.tagName === "INPUT" || document.activeElement.tagName === "TEXTAREA") {
    return;
  }

  const gamePage = document.getElementById("game-page-screen");
  const isGameVisible = gamePage && gamePage.style.display === "block";

  if (isGameVisible && window.currentGameScene === "PLAYING") {
    return; 
  }

  switch (event.key) {
    case "ArrowRight": 
      event.preventDefault(); 
      if (btnNext) btnNext.click(); 
      break;

    case "ArrowLeft": 
      event.preventDefault();
      if (btnPrev) btnPrev.click(); 
      break;

    case " ": 
    case "Spacebar": 
      event.preventDefault(); 
      if (btnFavorite) btnFavorite.click(); 
      break;
  }
});

// --- Chrome等でのスマホ長押しメニュー（コンテキストメニュー）を完全に無効化する ---
[btnPrev, btnNext, btnFavorite].forEach(btn => {
  if (btn) {
    // 指を長押ししたときにメニューが出る動作をキャンセル
    btn.addEventListener("contextmenu", (e) => {
      e.preventDefault();
    });
  }
});
