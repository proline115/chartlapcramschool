// ==========================================================
// 【競合・重複完全排除版】ボタン状態の監視オブジェクト
// ==========================================================

// ボタン要素を取得
let gameBtnPrev = document.getElementById("btn-prev");
let gameBtnNext = document.getElementById("btn-next");
let gameBtnFav  = document.getElementById("btn-favorite");

// 画面ボタンの押下状態を記録するオブジェクト
const buttonStates = {
  left: false,
  right: false,
  star: false
};

// 二重発火を防ぎ、スマホの長押しを保証する共通登録関数
function setupMobileButton(element, stateKey) {
  if (!element) return;

  let isTouched = false;

  // 1. 押し始め
  element.addEventListener("touchstart", (e) => {
    isTouched = true;
    e.preventDefault(); 
    buttonStates[stateKey] = true;
  }, { passive: false });

  // 2. PCのマウスクリック
  element.addEventListener("mousedown", (e) => {
    if (isTouched) return; 
    buttonStates[stateKey] = true;
  });

  // 3. 離した瞬間
  const release = (e) => {
    if (e) {
      if (e.type === "touchend" || e.type === "touchcancel") {
        e.preventDefault();
      }
    }
    buttonStates[stateKey] = false;
  };

  element.addEventListener("touchend", release, { passive: false });
  element.addEventListener("touchcancel", release, { passive: false });
  element.addEventListener("mouseup", release);
  element.addEventListener("mouseleave", release); 
}

setupMobileButton(gameBtnPrev, "left");
setupMobileButton(gameBtnNext, "right");
setupMobileButton(gameBtnFav, "star");

/**
 * ==========================================================
 * ⑦ JavaScriptによる即時効果音生成（Web Audio API）
 * ==========================================================
 */
const SoundEffects = {
    ctx: null,

    init() {
        if (!this.ctx) {
            this.ctx = new (window.AudioContext || window.webkitAudioContext)();
        }
    },

    // ステージ選択（ピコッ）
    playSelect() {
        this.init();
        const osc = this.ctx.createOscillator();
        const gain = this.ctx.createGain();
        osc.connect(gain);
        gain.connect(this.ctx.destination);

        osc.type = "sine";
        osc.frequency.setValueAtTime(600, this.ctx.currentTime);
        osc.frequency.exponentialRampToValueAtTime(1000, this.ctx.currentTime + 0.08);

        gain.gain.setValueAtTime(0.08, this.ctx.currentTime);
        gain.gain.exponentialRampToValueAtTime(0.001, this.ctx.currentTime + 0.08);

        osc.start();
        osc.stop(this.ctx.currentTime + 0.08);
    },

    // 決定（ピキーン！）
    playDecide() {
        this.init();
        const osc = this.ctx.createOscillator();
        const gain = this.ctx.createGain();
        osc.connect(gain);
        gain.connect(this.ctx.destination);

        osc.type = "triangle";
        osc.frequency.setValueAtTime(523.25, this.ctx.currentTime); // C5
        osc.frequency.setValueAtTime(1046.50, this.ctx.currentTime + 0.05); // C6

        gain.gain.setValueAtTime(0.12, this.ctx.currentTime);
        gain.gain.exponentialRampToValueAtTime(0.001, this.ctx.currentTime + 0.25);

        osc.start();
        osc.stop(this.ctx.currentTime + 0.25);
    },

    // チャージ音（ウィィィンと上昇）
    playCharge(chargeProgress) {
        // chargeProgress: 0.0 ~ 1.0
        this.init();
        const osc = this.ctx.createOscillator();
        const gain = this.ctx.createGain();
        osc.connect(gain);
        gain.connect(this.ctx.destination);

        osc.type = "sawtooth";
        const startFreq = 150 + chargeProgress * 650;
        osc.frequency.setValueAtTime(startFreq, this.ctx.currentTime);

        gain.gain.setValueAtTime(0.03, this.ctx.currentTime);
        gain.gain.exponentialRampToValueAtTime(0.001, this.ctx.currentTime + 0.05);

        osc.start();
        osc.stop(this.ctx.currentTime + 0.05);
    },

    // 発射音
    playShoot(level) {
        this.init();
        const osc = this.ctx.createOscillator();
        const gain = this.ctx.createGain();
        osc.connect(gain);
        gain.connect(this.ctx.destination);

        if (level === 7) {
            // ★ 最大チャージ（レベル7）専用の超重低音＆ダイナミック爆発レーザー音
            osc.type = "sawtooth";
            osc.frequency.setValueAtTime(800, this.ctx.currentTime);
            // 周波数を一気にガクンと落として地響きのような音にする
            osc.frequency.linearRampToValueAtTime(30, this.ctx.currentTime + 0.4);

            gain.gain.setValueAtTime(0.3, this.ctx.currentTime); // 音量を大きく設定
            gain.gain.exponentialRampToValueAtTime(0.001, this.ctx.currentTime + 0.42);

            osc.start();
            osc.stop(this.ctx.currentTime + 0.42);
        } else {
            // 通常の発射音（レベル1〜6）
            osc.type = "sawtooth";
            const freq = 450 - (level * 40);
            osc.frequency.setValueAtTime(freq, this.ctx.currentTime);
            osc.frequency.exponentialRampToValueAtTime(60, this.ctx.currentTime + 0.2);

            gain.gain.setValueAtTime(0.1 + (level * 0.02), this.ctx.currentTime);
            gain.gain.exponentialRampToValueAtTime(0.001, this.ctx.currentTime + 0.22);

            osc.start();
            osc.stop(this.ctx.currentTime + 0.22);
        }
    },

    // 敵を撃破した時（音量をさらに大きく、太い音に調整）
    playExplosion() {
        this.init();
        const osc = this.ctx.createOscillator();
        const gain = this.ctx.createGain();
        osc.connect(gain);
        gain.connect(this.ctx.destination);

        osc.type = "triangle";
        // 周波数を少し下げて重みをプラス
        osc.frequency.setValueAtTime(120, this.ctx.currentTime);
        osc.frequency.exponentialRampToValueAtTime(10, this.ctx.currentTime + 0.15);

        // ★ 音量を 0.25 から 0.45 へ大幅にアップし、しっかり聞こえるように調整
        gain.gain.setValueAtTime(0.45, this.ctx.currentTime); 
        gain.gain.exponentialRampToValueAtTime(0.001, this.ctx.currentTime + 0.15);

        osc.start();
        osc.stop(this.ctx.currentTime + 0.15);
    },

    // 星に弾を当てた時（キィィンと小さめの金属音）
    playHitStar() {
        this.init();
        const osc = this.ctx.createOscillator();
        const gain = this.ctx.createGain();
        osc.connect(gain);
        gain.connect(this.ctx.destination);

        osc.type = "sine";
        osc.frequency.setValueAtTime(1500, this.ctx.currentTime);
        osc.frequency.exponentialRampToValueAtTime(1200, this.ctx.currentTime + 0.08);

        gain.gain.setValueAtTime(0.06, this.ctx.currentTime);
        gain.gain.exponentialRampToValueAtTime(0.001, this.ctx.currentTime + 0.08);

        osc.start();
        osc.stop(this.ctx.currentTime + 0.08);
    }
};


/**
 * game.js - Char-Shoo 完全版（新仕様搭載）
 */

let gameIntervalId = null;

window.initGame = function(canvas) {
    if (!canvas) return;

    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    const assets = {
        player: new Image(),
        enemy1: new Image(),
        enemy2: new Image(),
        enemy3: new Image(),
        enemy4: new Image(),
        star_on: new Image(),
        star_off: new Image()
    };

    assets.player.src = "game/player.png";
    assets.enemy1.src = "game/enemy1.png";
    assets.enemy2.src = "game/enemy2.png";
    assets.enemy3.src = "game/enemy3.png";
    assets.enemy4.src = "game/enemy4.png";
    assets.star_on.src = "belief/star_on.png";
    assets.star_off.src = "belief/star_off.png";

    document.fonts.ready.then(() => {
        canvas.width = canvas.clientWidth;
        canvas.height = canvas.clientHeight;

        // --- ゲーム状態管理 ---
        window.currentGameScene = "SELECT"; 
        let score = 0;
        let highScore = parseInt(localStorage.getItem("belief_highscore_common") || "0", 10);

        // ⭕ 【追加】レトロロード演出用の変数群
        // ローカルストレージに初回起動フラグ（belief_first_opened）がなければtrue
        let isFirstTimeOpen = !localStorage.getItem("belief_first_opened");
        let retroLoading = isFirstTimeOpen; // 初回のみロード画面を有効化
        let loadY = 0;                      // 現在どこまで読み込まれたか（Y座標）
        let loadStuckTimer = 0;             // ひっかかり（停止）用のタイマー
        
        

        const stageSelect = {
            options: ["NUMBER MODE", "INFINITY MODE"],
            selectedIndex: 0
        };

        // ② & ③ 武器選択のパラメータ
        const weaponOptions = ["blue", "white", "pink"];
        let selectedWeapon = localStorage.getItem("belief_selected_weapon") || "blue";
        let weaponSelectIndex = weaponOptions.indexOf(selectedWeapon);
        if (weaponSelectIndex === -1) weaponSelectIndex = 0;

        // ⑤ 敵が自機を狙って出現する確率 (調整用: 20% = 0.2)
        const PLAYER_TARGET_PROBABILITY = 0.2;

        // ⑥ 侵略数（今回のプレイで画面下に通り過ぎた敵の総数）
        let passedEnemiesCount = 0;

        // --- プレイヤー（自機）のパラメータ ---
        const player = {
            x: canvas.width / 2,
            y: canvas.height - 50,
            width: 32,
            height: 50, 
            speed: 5,
            hp: 30,
            maxHp: 30   
        };

        // ⭕ 【追加】画面内タップ移動用の変数（上下左右用）
        let isScreenTapping = false; 
        let targetTouchX = player.x;  
        let targetTouchY = player.y;

        // --- チャージシステム ---
        let chargeTimer = 0;
        let isCharging = false;
        const CHARGE_THRESHOLD = 60; 
        const MAX_CHARGE_LEVEL = 7; 

        const chargeColors = [
            "#666666", "#ffff00", "#ff9900", "#ff0000", "#00ff00", "#00ffff", "#9900ff", "#0000ff"
        ];

        // --- ステージ・フェーズ管理 ---
        let currentPhase = 1;
        let phaseSpawnCount = 0; 
        let enemySpawnTimer = 0;
        let phase7ElapsedTime = 0; 

        const PHASE_SPAWN_LIMIT = [0, 25, 30, 35, 40, 45, 50, 99999]; 

        // --- 特殊ボス：星（第7フェーズ用） ---
        const clearStar = {
            x: canvas.width / 2,
            y: -100,      
            targetY: 80,  
            width: 100,   
            height: 100,  
            speed: 2.5, 
            direction: 1, 
            progress: 0,  
            maxProgress: 20 
        };

        // ④ クリア時 星の拡大演出パラメータ
        const clearPresentation = {
            scale: 1.0,         // 拡大率
            angle: 0,           // 回転角度
            opacity: 1.0,       // フェード用透明度
            fadeStarted: false  // ホワイトアウト開始フラグ
        };

        // --- エンティティリスト ---
        let bullets = [];
        let whiteEraserCircles = []; // ★ 白武器用の消滅サークルを初期化
        let enemyBullets = [];
        let enemies = [];

        // --- 入力状態（キー・ボタン共通） ---
        const keys = {
            ArrowUp: false,
            ArrowDown: false,
            ArrowLeft: false,
            ArrowRight: false,
            " ": false
        };

        // ⭕ 【修正】else if 構造にして、SELECT画面からの決定処理がPLAYINGへ貫通するのを防ぐ
        function pressAction(type) {
            if (window.currentGameScene === "SELECT") {
                const currentOptions = hasCleared ? ["NUMBER MODE", "INFINITY MODE", "WEAPON SELECT"] : ["NUMBER MODE", "INFINITY MODE"];

                if (type === "up" && stageSelect.selectedIndex > 0) {
                    SoundEffects.playSelect();
                    stageSelect.selectedIndex--;
                }
                if (type === "down" && stageSelect.selectedIndex < currentOptions.length - 1) {
                    SoundEffects.playSelect();
                    stageSelect.selectedIndex++;
                }
                if (type === "space") {
                    SoundEffects.playDecide();
                    const selectedName = currentOptions[stageSelect.selectedIndex];
                    if (selectedName === "WEAPON SELECT") {
                        const maxWeapons = highScore >= 50000 ? 3 : 2;
                        weaponSelectIndex = (weaponSelectIndex + 1) % maxWeapons;
                        selectedWeapon = weaponOptions[weaponSelectIndex];
                        localStorage.setItem("belief_selected_weapon", selectedWeapon);
                    } else {
                        startStage(selectedName);
                    }
                }
                if (type ==="right"){
                    const screen = document.getElementById("screen");
                    screen.classList.remove("party");
                }
            }
            // ⭕ if だったのを else if に変更
            else if (window.currentGameScene === "PLAYING" && type === "space") {
                if (!isCharging) {
                    isCharging = true;
                    chargeTimer = 0;
                }
            }
        }

        function releaseAction(type) {
            if (window.currentGameScene === "PLAYING" && type === "space") {
                if (isCharging) {
                    fireChargeShot();
                    isCharging = false;
                    chargeTimer = 0;
                }
            }
        }

        // --- キーボードイベントリスナー ---
        const handleKeyDown = (e) => {
            if (["ArrowUp", "ArrowDown", "ArrowLeft", "ArrowRight", " "].includes(e.key)) {
                if (window.currentGameScene !== "SELECT") {
                    e.preventDefault();
                    e.stopPropagation();
                } else {
                    e.preventDefault();
                }

                if (!keys[e.key]) {
                    keys[e.key] = true;
                    
                    if (e.key === "ArrowUp") pressAction("up");
                    if (e.key === "ArrowDown") pressAction("down");
                    if (e.key === "ArrowLeft") pressAction("left");
                    if (e.key === "ArrowRight") pressAction("right");
                    if (e.key === " ") pressAction("space");
                }
            }
        };

        const handleKeyUp = (e) => {
            if (keys.hasOwnProperty(e.key)) {
                keys[e.key] = false;
                if (e.key === " ") releaseAction("space");
            }
        };

        // ⭕ 【画面外引っ張り防止＆マルチタッチ内枠優先＆全画面ボタン対応版】
const handleTouchStartOrMove = (e) => {
    const rect = canvas.getBoundingClientRect();

    // ★ Android等の描画サイズズレを防ぐため、既存のrectから拡大率(scale)を計算
    const scaleX = canvas.width / rect.width;
    const scaleY = canvas.height / rect.height;

    // --- スマホ等のマルチタッチに対応：Canvas内に入っているタッチ（指）を探す ---
    let validTouch = null;

    if (e.touches && e.touches.length > 0) {
        for (let i = 0; i < e.touches.length; i++) {
            const t = e.touches[i];
            // 拡大率(scale)を掛け合わせてCanvas内部の正確な座標に変換
            const relX = (t.clientX - rect.left) * scaleX;
            const relY = (t.clientY - rect.top) * scaleY;

            // 1. タップされた座標がCanvasの枠内（0〜width, 0〜height）に入っている指を優先
            if (relX >= 0 && relX <= canvas.width && relY >= 0 && relY <= canvas.height) {
                validTouch = { x: relX, y: relY };
                break; // 枠内の指が見つかったらそれを採用
            }
        }

        // 2. もし枠内の指が見つからず、枠外から指がそのままスライド侵入してきた場合
        if (!validTouch) {
            const firstTouch = e.touches[0];
            let rawX = (firstTouch.clientX - rect.left) * scaleX;
            let rawY = (firstTouch.clientY - rect.top) * scaleY;

            // 枠外の座標であっても、Canvasの端（0〜width, 0〜height）にクランプ（収める）する
            validTouch = {
                x: Math.max(0, Math.min(canvas.width, rawX)),
                y: Math.max(0, Math.min(canvas.height, rawY))
            };
        }
    } else {
        // PCのマウス操作の場合
        let rawX = (e.clientX - rect.left) * scaleX;
        let rawY = (e.clientY - rect.top) * scaleY;

        validTouch = {
            x: Math.max(0, Math.min(canvas.width, rawX)),
            y: Math.max(0, Math.min(canvas.height, rawY))
        };
    }

    const clickX = validTouch.x;
    const clickY = validTouch.y;

    // --- ① 選択画面（SELECT）での処理 ---
    // --- ① 選択画面（SELECT）での処理 ---
    if (window.currentGameScene === "SELECT") {
        if (typeof retroLoading !== "undefined" && retroLoading) return;

        if (e.type === "touchstart" || e.type === "mousedown") {
            const currentOptions = hasCleared ? ["NUMBER MODE", "INFINITY MODE", "WEAPON SELECT"] : ["NUMBER MODE", "INFINITY MODE"];
            
            for (let i = 0; i < currentOptions.length; i++) {
                const itemCenterY = canvas.height * 0.48 + (i * 45);
                const itemHeight = 36;

                if (clickY >= itemCenterY - itemHeight / 2 && clickY <= itemCenterY + itemHeight / 2) {
                    if (clickX >= canvas.width * 0.1 && clickX <= canvas.width * 0.9) {
                        // 未選択の項目ならカーソル（▶）だけを移動
                        if (stageSelect.selectedIndex !== i) {
                            SoundEffects.playSelect();
                            stageSelect.selectedIndex = i;
                        }
                        break;
                    }
                }
            }
        }
        return; // 選択画面では追従移動処理を行わない
    }

    // --- ② ゲームプレイ中（PLAYING）での追従移動処理 ---
    if (window.currentGameScene === "PLAYING") {
        isScreenTapping = true;
        targetTouchX = clickX;
        targetTouchY = clickY;
    }
};

        // 選択画面・リザルト画面専用の決定/タップ処理関数
        const handleSelectOrCanvasClick = (e) => {
            const clientX = e.changedTouches ? e.changedTouches[0].clientX : e.clientX;
            const clientY = e.changedTouches ? e.changedTouches[0].clientY : e.clientY;

            const rect = canvas.getBoundingClientRect();
            const scaleX = canvas.width / rect.width;
            const scaleY = canvas.height / rect.height;
            const clickX = (clientX - rect.left) * scaleX;
            const clickY = (clientY - rect.top) * scaleY;

            // --- 1. SELECT 画面の処理 ---
            if (window.currentGameScene === "SELECT") {
                if (typeof retroLoading !== "undefined" && retroLoading) return;

                // 右下の全画面・パーティーモード切替ボタン判定
                const fsBtnSize = 32;
                const fsBtnMargin = 10;
                const fsBtnX = canvas.width - fsBtnSize - fsBtnMargin;
                const fsBtnY = canvas.height - fsBtnSize - fsBtnMargin;
                const padding = 10;

                if (
                    clickX >= fsBtnX - padding &&
                    clickX <= fsBtnX + fsBtnSize + padding &&
                    clickY >= fsBtnY - padding &&
                    clickY <= fsBtnY + fsBtnSize + padding
                ) {
                    const screen = document.getElementById("screen");
                    screen.classList.toggle("party"); // パーティーモード切替
                    canvas.width = canvas.clientWidth;
                    canvas.height = canvas.clientHeight;
                    return;
                }

                // メニュー項目の判定（2回目のタップ・クリックで決定）
                const currentOptions = hasCleared ? ["NUMBER MODE", "INFINITY MODE", "WEAPON SELECT"] : ["NUMBER MODE", "INFINITY MODE"];
                
                for (let i = 0; i < currentOptions.length; i++) {
                    const itemCenterY = canvas.height * 0.48 + (i * 45);
                    const itemHeight = 36;

                    if (clickY >= itemCenterY - itemHeight / 2 && clickY <= itemCenterY + itemHeight / 2) {
                        if (clickX >= canvas.width * 0.1 && clickX <= canvas.width * 0.9) {
                            if (stageSelect.selectedIndex === i) {
                                // ★ すでに選択中の項目をもう一度押した時だけ「決定」
                                pressAction("space");
                            } else {
                                // 未選択の場合はカーソル移動
                                SoundEffects.playSelect();
                                stageSelect.selectedIndex = i;
                            }
                            return;
                        }
                    }
                }
            }

            // --- 2. GAMEOVER / CLEAR 画面の処理 ---
            if (window.currentGameScene === "GAMEOVER" || window.currentGameScene === "CLEAR") {
                SoundEffects.playSelect();
                window.currentGameScene = "SELECT";
                score = 0;
                passedEnemiesCount = 0;
                player.hp = 30;
                player.x = canvas.width / 2;
                player.y = canvas.height - 50; 
                currentPhase = 1;
                phaseSpawnCount = 0;
                enemySpawnTimer = 0;
                phase7ElapsedTime = 0;
                clearStar.progress = 0;
                clearStar.x = canvas.width / 2;
                clearStar.y = -100; 
                bullets = [];
                whiteEraserCircles = [];
                enemyBullets = [];
                enemies = [];
                chargeTimer = 0;

                clearPresentation.scale = 1.0;
                clearPresentation.angle = 0;
                clearPresentation.opacity = 1.0;
                clearPresentation.fadeStarted = false;
            }
        };

        // 【PC用】クリックイベントの登録
        canvas.addEventListener("click", handleSelectOrCanvasClick);

        // 【スマホ用】選択画面・クリア画面のタップ判定（離した瞬間に処理）
        canvas.addEventListener("touchend", (e) => {
            if (window.currentGameScene !== "PLAYING") {
                if (e.cancelable) e.preventDefault();
                handleSelectOrCanvasClick(e);
            }
        }, { passive: false });

        // 【PLAYING画面専用】自機移動・操作用のタッチイベント
        canvas.addEventListener("mousedown", handleTouchStartOrMove);
        canvas.addEventListener("mousemove", (e) => {
            if (isScreenTapping && window.currentGameScene === "PLAYING") handleTouchStartOrMove(e);
        });

        canvas.addEventListener("touchstart", (e) => {
            if (window.currentGameScene === "PLAYING") {
                if (e.cancelable) e.preventDefault();

                // 2本指以上でチャージ開始
                if (e.touches.length >= 2) {
                    if (!isCharging) {
                        isCharging = true;
                        chargeTimer = 0;
                    }
                }
                handleTouchStartOrMove(e);
            }
        }, { passive: false });

        canvas.addEventListener("touchmove", (e) => {
            if (window.currentGameScene === "PLAYING") {
                if (e.cancelable) e.preventDefault();
                handleTouchStartOrMove(e);
            }
        }, { passive: false });

        // 指やマウスを離した時のリセット処理
        const handleTouchEnd = () => {
            isScreenTapping = false;
        };
        canvas.addEventListener("mouseup", handleTouchEnd);
        canvas.addEventListener("mouseleave", handleTouchEnd);
        canvas.addEventListener("touchcancel", handleTouchEnd);

        canvas.addEventListener("touchend", (e) => {
            if (window.currentGameScene === "PLAYING") {
                // 指が離れて2本未満になった時、チャージショットを発射
                if (isCharging && e.touches.length < 2) {
                    fireChargeShot();
                    isCharging = false;
                    chargeTimer = 0;
                }
                handleTouchEnd();
            }
        });

        // --- 画面内UIボタンのイベント紐付け ---
        function setupUiButtons() {
            const btnLeft = document.getElementById("btn-left") || document.querySelector(".btn-left") || document.getElementById("btn-prev"); 
            const btnRight = document.getElementById("btn-right") || document.querySelector(".btn-right") || document.getElementById("btn-next"); 
            const btnUp = document.getElementById("btn-up") || document.querySelector(".btn-up");
            const btnDown = document.getElementById("btn-down") || document.querySelector(".btn-down");
            const btnStar = document.getElementById("btn-favorite");

            function blockPropagation(e) {
                e.preventDefault();
                e.stopPropagation(); 
            }

            if (btnLeft) {
                btnLeft.onmousedown = btnLeft.ontouchstart = (e) => { blockPropagation(e); keys.ArrowLeft = true; pressAction("left"); };
                btnLeft.onmouseup = btnLeft.onmouseleave = btnLeft.ontouchend = (e) => { if(e) e.stopPropagation(); keys.ArrowLeft = false; };
            }
            if (btnRight) {
                btnRight.onmousedown = btnRight.ontouchstart = (e) => { blockPropagation(e); keys.ArrowRight = true; pressAction("right"); };
                btnRight.onmouseup = btnRight.onmouseleave = btnRight.ontouchend = (e) => { if(e) e.stopPropagation(); keys.ArrowRight = false; };
                
            }
            if (btnUp) {
                btnUp.onmousedown = btnUp.ontouchstart = (e) => { blockPropagation(e); keys.ArrowUp = true; pressAction("up"); };
                btnUp.onmouseup = btnUp.onmouseleave = btnUp.ontouchend = (e) => { if(e) e.stopPropagation(); keys.ArrowUp = false; };
            }
            if (btnDown) {
                btnDown.onmousedown = btnDown.ontouchstart = (e) => { blockPropagation(e); keys.ArrowDown = true; pressAction("down"); };
                btnDown.onmouseup = btnDown.onmouseleave = btnDown.ontouchend = (e) => { if(e) e.stopPropagation(); keys.ArrowDown = false; };
            }
            if (btnStar) {
                btnStar.onmousedown = btnStar.ontouchstart = (e) => { blockPropagation(e); pressAction("space"); };
                btnStar.onmouseup = btnStar.onmouseleave = btnStar.ontouchend = (e) => { if(e) e.stopPropagation(); releaseAction("space"); };
            }
        }

        window.removeEventListener("keydown", handleKeyDown, true);
        window.removeEventListener("keyup", handleKeyUp, true);
        
        window.addEventListener("keydown", handleKeyDown, true);
        window.addEventListener("keyup", handleKeyUp, true);

        setupUiButtons();

        // --- ステージ初期化 ---
        function startStage(stageName) {
            if (stageName === "NUMBER MODE") {
                window.currentGameScene = "PLAYING";
                score = 0;
                passedEnemiesCount = 0; // 侵略数の初期化
                player.hp = 30;
                player.x = canvas.width / 2;
                player.y = canvas.height - 50; 
                currentPhase = 1;
                phaseSpawnCount = 0;
                enemySpawnTimer = 0;
                phase7ElapsedTime = 0;
                clearStar.progress = 0;
                clearStar.x = canvas.width / 2;
                clearStar.y = -100; 
                bullets = [];
                whiteEraserCircles = []; // ★ 白武器用の消滅サークルを初期化
                enemyBullets = [];
                enemies = [];
                chargeTimer = 0;

                // ④ 拡大演出パラメータのリセット
                clearPresentation.scale = 1.0;
                clearPresentation.angle = 0;
                clearPresentation.opacity = 1.0;
                clearPresentation.fadeStarted = false;
            } else {
                window.currentGameScene = "PLAYING";
                currentPhase = "INFINITY"; // フェーズ管理を特別フラグにする
                score = 0;
                passedEnemiesCount = 0;
                player.hp = 30;
                player.x = canvas.width / 2;
                player.y = canvas.height - 50; 
                enemySpawnTimer = 0;
                phase7ElapsedTime = 0; // INFINITYモード内の時間経過カウンターとして流用
                bullets = [];
                whiteEraserCircles = [];
                enemyBullets = [];
                enemies = [];
                chargeTimer = 0;
            }
        }

        // --- チャージショット発射ロジック ---
        function fireChargeShot() {
            let level = Math.floor(chargeTimer / CHARGE_THRESHOLD) + 1;
            if (level > MAX_CHARGE_LEVEL) level = MAX_CHARGE_LEVEL;

            // 発射音の再生
            SoundEffects.playShoot(level);

            
            

            

            // レベル4以上での通常回復（共通の基本処理）
            if (level >= 4) {
                player.hp = Math.min(player.maxHp, player.hp + 3); 
            }

            const baseSpeed = 6;
            const diagSpeed = baseSpeed * Math.SQRT1_2; 
            
            // ★【修正】弾丸の色決定
            // レベル7（最大チャージ）の時のみ、武器タイプに応じて白やピンクにし、レベル1〜6の途中は本来のチャージグラデーション色（黄、オレンジ、赤など）を維持します
            let color = chargeColors[level];
            if (level === 7) {
                if (selectedWeapon === "white") {
                    color = "#ffffff";
                } else if (selectedWeapon === "pink") {
                    color = "#ff66cc";
                }
            }

            const isPenetrating = level >= 2;

            // 以下の攻撃弾の配置パターンは、青と全く同じロジックをそのまま通します
            if (level === 1 || level === 2) {
                createBullet(player.x, player.y - 15, 0, -baseSpeed, color, isPenetrating, 15);
            } 
            else if (level === 3) {
                createBullet(player.x, player.y - 15, 0, -baseSpeed, color, isPenetrating, 15);
                createBullet(player.x, player.y - 15, -diagSpeed, -diagSpeed, color, isPenetrating, 15);
                createBullet(player.x, player.y - 15, diagSpeed, -diagSpeed, color, isPenetrating, 15);
            } 
            else if (level === 4) {
                createBullet(player.x, player.y - 15, 0, -baseSpeed, color, isPenetrating, 18);
                createBullet(player.x, player.y - 15, -diagSpeed, -diagSpeed, color, isPenetrating, 18);
                createBullet(player.x, player.y - 15, diagSpeed, -diagSpeed, color, isPenetrating, 18);
                createBullet(player.x, player.y, -baseSpeed, 0, color, isPenetrating, 18);
                createBullet(player.x, player.y, baseSpeed, 0, color, isPenetrating, 18);
            } 
            else if (level === 5) {
                createBullet(player.x, player.y - 15, 0, -baseSpeed, color, isPenetrating, 20);
                createBullet(player.x, player.y - 15, -diagSpeed, -diagSpeed, color, isPenetrating, 20);
                createBullet(player.x, player.y - 15, diagSpeed, -diagSpeed, color, isPenetrating, 20);
                createBullet(player.x, player.y, -baseSpeed, 0, color, isPenetrating, 20);
                createBullet(player.x, player.y, baseSpeed, 0, color, isPenetrating, 20);
                createBullet(player.x, player.y + 15, 0, baseSpeed, color, isPenetrating, 20);
            } 
            else if (level === 6) {
                for (let i = 0; i < 8; i++) {
                    const angle = (i / 8) * Math.PI * 2;
                    createBullet(player.x, player.y, Math.cos(angle) * 5, Math.sin(angle) * 5, color, isPenetrating, 22);
                }
            } 
            else if (level === 7) {
                // ★ 白武器（white）: 八方位（8方向）に発射 ＋ 見えない消滅サークル
                if (selectedWeapon === "white") {
                    for (let i = 0; i < 16; i++) {
                        const angle = (i / 16) * Math.PI * 2;
                        createBullet(player.x, player.y, Math.cos(angle) * 5, Math.sin(angle) * 5, color, true, 25);
                    }
                    if (typeof whiteEraserCircles !== "undefined") {
                        whiteEraserCircles.push({
                            cx: player.x,
                            cy: player.y,
                            radius: 0,
                            speed: 5,
                            maxRadius: Math.hypot(canvas.width, canvas.height)
                        });
                    }

                }
                // ★ ピンク武器（pink）: 攻撃能力なし、広がってからプレイヤーに戻って全回復する
                else if (selectedWeapon === "pink") {
                    const numPinkBullets = 12;
                    for (let i = 0; i < numPinkBullets; i++) {
                        const angle = (i / numPinkBullets) * Math.PI * 2;
                        const vx = Math.cos(angle) * 3;
                        const vy = Math.sin(angle) * 3;
                        bullets.push({
                            x: player.x,
                            y: player.y,
                            vx: vx,
                            vy: vy,
                            color: color,
                            isPenetrating: false,
                            size: 15,
                            hitEnemies: new Set(),
                            isPinkHeal: true,
                            state: "SPREAD",
                            timer: 0,
                            noDamage: true // 敵への攻撃能力なし
                        });
                    }
                }
                // ★ 通常（青武器）: 24方向
                else {
                    for (let i = 0; i < 24; i++) {
                        const angle = (i / 24) * Math.PI * 2;
                        createBullet(player.x, player.y, Math.cos(angle) * 5, Math.sin(angle) * 5, color, true, 25);
                    }
                }
            }
        }

        function createBullet(x, y, vx, vy, color, isPenetrating, size) {
            bullets.push({ x, y, vx, vy, color, isPenetrating, size, hitEnemies: new Set() });
        }

        function spawnEnemy(type) {
            // ⑤ 確率 PLAYER_TARGET_PROBABILITY (20%) で自機の現在X座標を狙って出現
            let spawnX;
            if (Math.random() < PLAYER_TARGET_PROBABILITY) {
                spawnX = player.x;
            } else {
                spawnX = Math.random() * (canvas.width - 60) + 30;
            }
            let trivial = canvas.height/377;
            enemies.push({
                type: type, 
                img: assets[`enemy${type}`],
                x: spawnX,
                y: -30, 
                width: 32,
                height: 32,
                speedY: 1.5*trivial,
                baseX: spawnX,
                swingTimer: Math.random() * 100,
                shootCooldown: Math.random() * 20 + 20 
            });
            phaseSpawnCount++;
        }

        function fireEnemyRadial(enemy) {
            const bSpeed = 3.5; 
            const angles = [
                {x: 0, y: -1}, {x: 1, y: -1}, {x: 1, y: 0}, {x: 1, y: 1},
                {x: 0, y: 1}, {x: -1, y: 1}, {x: -1, y: 0}, {x: -1, y: -1}
            ];
            angles.forEach(a => {
                const len = Math.hypot(a.x, a.y);
                enemyBullets.push({
                    x: enemy.x,
                    y: enemy.y,
                    vx: (a.x / len) * bSpeed,
                    vy: (a.y / len) * bSpeed,
                    parent: enemy 
                });
            });
        }

        // --- アップデート処理 ---
        function update() {
            canvas.width = canvas.clientWidth;
        canvas.height = canvas.clientHeight;
            // ④ 拡大演出時の処理：背景以外のオブジェクトの動きを一時停止
            if (window.currentGameScene === "PRESENTATION") {
                clearPresentation.angle += 0.05; // 回転
                clearPresentation.scale += 0.5;  // 急速に拡大

                // 画面を十分に覆い尽くしたらフェードアウト（ホワイトアウト）開始
                if (clearPresentation.scale > 50) {
                    clearPresentation.fadeStarted = true;
                }

                if (clearPresentation.fadeStarted) {
                    clearPresentation.opacity -= 0.02; // 徐々に薄くする
                    if (clearPresentation.opacity <= 0) {
                        // 演出終了、本番のクリア画面を表示
                        window.currentGameScene = "CLEAR";
                    }
                }
                return;
            }

            if (window.currentGameScene !== "PLAYING") return;

            // ⭕ キー操作や画面下のPrev/Nextボタンを最優先しつつ、入力がないときはタッチ位置へ全方向追従する
            let movedByInput = false;

            if (keys.ArrowLeft || buttonStates.left) {
                player.x -= player.speed;
                movedByInput = true;
            }
            if (keys.ArrowRight || buttonStates.right) {
                player.x += player.speed;
                movedByInput = true;
            }
            if (keys.ArrowUp) {
                player.y -= player.speed;
                movedByInput = true;
            }
            if (keys.ArrowDown) {
                player.y += player.speed;
                movedByInput = true;
            }

            // キーや画面ボタンの入力がない場合、タップホールド位置へ上下左右追従
            if (!movedByInput && isScreenTapping) {
                const diffX = targetTouchX - player.x;
                const diffY = targetTouchY - player.y;

                // ガタつき防止のため2px以上の差がある場合のみ動く
                // 横方向（X軸）の移動
                if (Math.abs(diffX) > 2) {
                    if (diffX < 0) player.x -= player.speed;
                    else player.x += player.speed;
                }
                // 縦方向（Y軸）の移動
                if (Math.abs(diffY) > 2) {
                    if (diffY < 0) player.y -= player.speed;
                    else player.y += player.speed;
                }
            }

            // ⭕ 画面外への押し戻し安全制限（移動計算の後に必ず実行）
            const minX = player.width / 2;
            const maxX = canvas.width - player.width / 2;
            if (player.x < minX) player.x = minX;
            if (player.x > maxX) player.x = maxX;

            const minY = player.height / 2;
            const maxY = canvas.height - player.height / 2;
            if (player.y < minY) player.y = minY;
            if (player.y > maxY) player.y = maxY;

            if (isCharging) {
                chargeTimer++;
                if (chargeTimer >= CHARGE_THRESHOLD * 6) {
                    chargeTimer = CHARGE_THRESHOLD * 6; 
                }
                // チャージ用SEの再生（フレームごとに上昇する音）
                if (Math.floor(chargeTimer / CHARGE_THRESHOLD) + 1!==7&&chargeTimer % 3 === 0) {
                    const progress = Math.min(1.0, chargeTimer / (CHARGE_THRESHOLD * 6));
                    SoundEffects.playCharge(progress);
                }
            }

            // --- フェーズ管理と敵の出現 ---
            enemySpawnTimer++;
            let spawnInterval = 40;
            if (currentPhase === "INFINITY") {
                phase7ElapsedTime++; // 経過時間を進める
                // 最初は120フレーム(約2秒)間隔。600フレーム(約10秒)経つごとに徐々に狭まる。
                // 結構遅めの加速度にするため、減少値を「- 3」程度に抑え、限界値を12（フェーズ7相当の最速）にします。
                spawnInterval = Math.max(12, 40 - Math.floor(phase7ElapsedTime / 400) * 3);
            } else if (currentPhase === 7) {
                phase7ElapsedTime++;
                spawnInterval = Math.max(12, 35 - Math.floor(phase7ElapsedTime / 300) * 4);
            }

            if (enemySpawnTimer >= spawnInterval) {
                enemySpawnTimer = 0;
                if (currentPhase === "INFINITY") {
                    // ステージ1のフェーズ7と同じ、星ボスがいない全種カオス出現パターン
                    const r = Math.random();
                    if (r < 0.25) spawnEnemy(1);
                    else if (r < 0.5) spawnEnemy(2);
                    else if (r < 0.75) spawnEnemy(3);
                    else spawnEnemy(4);
                } else{
                
                if (currentPhase === 1) spawnEnemy(1);
                else if (currentPhase === 2) spawnEnemy(Math.random() < 0.6 ? 1 : 2);
                else if (currentPhase === 3) spawnEnemy(Math.random() < 0.6 ? 1 : 3);
                else if (currentPhase === 4) spawnEnemy(Math.random() < 0.6 ? 1 : 4);
                else if (currentPhase === 5) spawnEnemy(Math.random() < 0.5 ? 2 : 3);
                else if (currentPhase === 6) spawnEnemy(Math.random() < 0.5 ? 3 : 4);
                else if (currentPhase === 7) {
                    const r = Math.random();
                    if (r < 0.25) spawnEnemy(1);
                    else if (r < 0.5) spawnEnemy(2);
                    else if (r < 0.75) spawnEnemy(3);
                    else spawnEnemy(4);
                }
            }
            }

            if (currentPhase < 7 && phaseSpawnCount >= PHASE_SPAWN_LIMIT[currentPhase]) {
                currentPhase++;
                phaseSpawnCount = 0;
            }

            // 第7フェーズ：星ボスの演出と移動
            if (currentPhase === 7) {
                if (clearStar.y < clearStar.targetY) {
                    clearStar.y += 1.5;
                } else {
                    clearStar.x += clearStar.speed * clearStar.direction;
                    if (clearStar.x < 60 || clearStar.x > canvas.width - 60) {
                        clearStar.direction *= -1;
                    }
                }
            }

            bullets.forEach(b => {
                // 🌸 ピンク回復弾の特殊挙動アップデート
                if (b.isPinkHeal) {
                    b.timer++;
                    if (b.state === "SPREAD") {
                        b.vx *= 0.92;
                        b.vy *= 0.92;
                        if (b.timer > 25) {
                            b.state = "RETURN";
                        }
                    } 
                    else if (b.state === "RETURN") {
                        const dx = player.x - b.x;
                        const dy = player.y - b.y;
                        const dist = Math.hypot(dx, dy);
                        if (dist > 0) {
                            const speed = 7;
                            b.vx = (dx / dist) * speed;
                            b.vy = (dy / dist) * speed;
                        }
                        // 自機に触れたら吸収して全回復（合計で全回復に達するよう、1玉につき maxHp/10 程度を回復）
                        if (dist < (player.width / 2 + b.size / 2)) {
                            player.hp = Math.min(player.maxHp, player.hp + 1); 
                            SoundEffects.playHitStar();
                            b.y = -999; // 画面外に飛ばして消滅させる
                        }
                    }
                }
                b.x += b.vx;
                b.y += b.vy;
            });

            // ★ 白武器の「見えない消滅サークル」の更新と敵弾消去判定
            // いきなり一瞬で全消去するのではなく、広がっていく真円の「フチ（厚さ40pxの波の境界線）」に接触した敵弾だけを消去します。
            if (typeof whiteEraserCircles !== "undefined") {
                whiteEraserCircles.forEach(circle => {
                    circle.radius += circle.speed;
                    enemyBullets = enemyBullets.filter(eb => {
                        const dist = Math.hypot(eb.x - circle.cx, eb.y - circle.cy);
                        // 円のフチ（境界線）の判定幅を厚さ40ピクセル（半径の -20px 〜 +20px の間）とします。
                        // このフチの範囲に重なっている敵の弾幕だけを消去（filterで除外）します。
                        const isOnEdge = (dist >= circle.radius - 20 && dist <= circle.radius + 20);
                        return !isOnEdge; 
                    });
                });
                whiteEraserCircles = whiteEraserCircles.filter(circle => circle.radius < circle.maxRadius);
                
            }
            bullets = bullets.filter(b => b.x > 0 && b.x < canvas.width && b.y > 0 && b.y < canvas.height);

            enemies.forEach(e => {
                e.y += e.speedY; 

                if (e.type === 2 || e.type === 4) {
                    e.swingTimer += 0.05;
                    e.x = e.baseX + Math.sin(e.swingTimer) * 60;
                }

                e.shootCooldown--;
                if (e.shootCooldown <= 0) {
                    e.shootCooldown = Math.random() * 30 + 35; 

                    if (e.y > 0 && e.y < canvas.height) {
                        if (e.type === 1 || e.type === 2) {
                            enemyBullets.push({ x: e.x, y: e.y + 10, vx: 0, vy: 4.5, parent: e });
                        } else if (e.type === 3 || e.type === 4) {
                            fireEnemyRadial(e);
                        }
                    }
                }
            });

            // ⑥ 侵略数（倒されずに画面外へ通り過ぎていった敵の数）のカウント
            const currentEnemiesLength = enemies.length;
            enemies = enemies.filter(e => {
                const isPassed = e.y >= canvas.height + 20;
                if (isPassed) {
                    passedEnemiesCount++; // 侵略数を1増やす
                }
                return !isPassed;
            });

            enemyBullets.forEach(eb => {
                eb.x += eb.vx;
                eb.y += eb.vy;
            });
            enemyBullets = enemyBullets.filter(eb => eb.x > 0 && eb.x < canvas.width && eb.y > 0 && eb.y < canvas.height);

            // --- 当たり判定（自機弾 vs 敵、および星） ---
            bullets.forEach((b) => {
                if (b.y < 0 || b.y > canvas.height || b.x < 0 || b.x > canvas.width) return;
                if (b.noDamage) return; // ★ 攻撃力のない弾（ピンク回復弾）は敵・星の判定をスキップ

                // 対星（第7フェーズのみ）
                if (currentPhase === 7) {
                    const distToStar = Math.hypot(b.x - clearStar.x, b.y - clearStar.y);
                    if (distToStar < clearStar.width / 2 + b.size / 2) {
                        clearStar.progress += 0.5; 
                        
                        SoundEffects.playHitStar(); // 星に当てた時のSE

                        if (clearStar.progress >= clearStar.maxProgress) {
                            clearStar.progress = clearStar.maxProgress;

                            // ④ いきなり画面遷移をせず、拡大演出用のScene（PRESENTATION）へ移行
                            window.currentGameScene = "PRESENTATION"; 

                            // ① クリア情報を保存
                            localStorage.setItem("belief_game_cleared", "true");
                            hasCleared = true;

                            // ① 星ボタンをその場で金色（お気に入りON）にする
                            if (gameBtnFav) {
                                gameBtnFav.classList.add("is-gold");
                                gameBtnFav.style.color = "#ffcc00";
                            }

                            if (score > highScore) {
                                highScore = score;
                                localStorage.setItem("belief_highscore_common", highScore.toString());
                                updateAchievementProgress("achievement_38", highScore, true);
                            }
                        }
                        b.y = -999; 
                        return; 
                    }
                }

                enemies.forEach((e) => {
                    if (e.y < 0 || e.y > canvas.height) return;
                    if (b.hitEnemies.has(e)) return; 

                    const dist = Math.hypot(b.x - e.x, b.y - e.y);
                    if (dist < (e.width / 2 + b.size / 2)) {
                        b.hitEnemies.add(e);
                        enemies = enemies.filter(item => item !== e);
                        
                        SoundEffects.playExplosion(); // 敵を撃破した時のSE

                        if (e.type === 1) score += 100;
                        else if (e.type === 2) score += 200;
                        else if (e.type === 3) score += 400;
                        else if (e.type === 4) score += 800;

                        if (!b.isPenetrating) {
                            b.y = 999; 
                        }
                    }
                });
            });

            bullets = bullets.filter(b => b.y > -100);

            // --- 当たり判定（敵弾/敵本体 vs 自機） ---
            enemyBullets.forEach((eb) => {

                const dist = Math.hypot(eb.x - player.x, eb.y - player.y);
                if (dist < (player.width / 2 + 3)) {
                    player.hp--; 
                    enemyBullets = enemyBullets.filter(item => item !== eb);
                    if (player.hp <= 0) triggerGameOver();
                }
            });

            enemies.forEach((e) => {
                if (e.y < 0 || e.y > canvas.height) return; 
                const dist = Math.hypot(e.x - player.x, e.y - player.y);
                if (dist < (player.width / 2 + e.width / 2)) {
                    player.hp--; 
                    enemies = enemies.filter(item => item !== e);
                    SoundEffects.playExplosion();
                    if (player.hp <= 0) triggerGameOver();
                    if (e.type === 1) score += 100;
                    else if (e.type === 2) score += 200;
                    else if (e.type === 3) score += 400;
                    else if (e.type === 4) score += 800;
                }
            });
        }

        // --- 描画処理 ---
        function draw() {
            ctx.fillStyle = "#020208";
            ctx.fillRect(0, 0, canvas.width, canvas.height);

            ctx.strokeStyle = "rgba(0, 255, 255, 0.03)";
            ctx.lineWidth = 1;
            for(let x=0; x<canvas.width; x+=40) { ctx.beginPath(); ctx.moveTo(x,0); ctx.lineTo(x,canvas.height); ctx.stroke(); }
            for(let y=0; y<canvas.height; y+=40) { ctx.beginPath(); ctx.moveTo(0,y); ctx.lineTo(canvas.width,y); ctx.stroke(); }
            
            if (window.currentGameScene === "SELECT") {
                ctx.textAlign = "center";
                ctx.textBaseline = "middle";
                ctx.fillStyle = "#adadad";
                ctx.font = `bold ${Math.min(canvas.width*0.08,30)}px 'DotGothic16'`;
                ctx.fillText("Charge-Shooting Game", canvas.width/2, canvas.height * 0.16);
                ctx.fillStyle = "#ffffff";
                ctx.font = `bold ${Math.min(canvas.width*0.2,60)}px 'DotGothic16'`; 
                ctx.fillText("Char-Shoo", canvas.width / 2, canvas.height * 0.3);

                const currentOptions = hasCleared ? ["NUMBER MODE", "INFINITY MODE", "WEAPON SELECT"] : ["NUMBER MODE", "INFINITY MODE"];
                currentOptions.forEach((name, i) => {
                    const isSelected = (i === stageSelect.selectedIndex);
                    let displayName = name;
                    if (name === "WEAPON SELECT") {
                        const wLabel = selectedWeapon === "white" ? "WHITE" : selectedWeapon === "pink" ? "PINK" : "BLUE";
                        displayName = `[ ${wLabel} ] WEAPON SELECT`;
                    }
                    if (isSelected) {
                        ctx.fillStyle = "#00ff00"; 
                        ctx.font = "bold 26px 'DotGothic16'";
                        if(name ==="WEAPON SELECT"){
                            if(selectedWeapon==="white"){
                                ctx.fillStyle = "#ffffff";
                            }else if(selectedWeapon==="pink"){
                                ctx.fillStyle = "#ff66cc";
                            }else{
                                ctx.fillStyle = "#0000ff";
                            }
                        }
                        ctx.fillText("▶ " + displayName, canvas.width / 2, canvas.height * 0.48 + (i * 45));
                    } else {
                        ctx.fillStyle = "#555555"; 
                        ctx.font = "22px 'DotGothic16'";
                        if(name ==="WEAPON SELECT"){
                            if(selectedWeapon==="white"){
                                ctx.fillStyle = "#ffffff";
                            }else if(selectedWeapon==="pink"){
                                ctx.fillStyle = "#ff66cc";
                            }else{
                                ctx.fillStyle = "#0000ff";
                            }
                        }
                        ctx.fillText(displayName, canvas.width / 2, canvas.height * 0.48 + (i * 45));
                    }
                });



                ctx.fillStyle = "#ffcc00"; 
                ctx.font = "16px 'DotGothic16'";
                ctx.fillText("HIGH SCORE: " + highScore, canvas.width / 2, canvas.height * 0.85);
                // =========================================================
// 【追加】選択画面の右下に全画面切り替えボタンを描画
// =========================================================
const fsBtnSize = 32;
const fsBtnMargin = 10;
const fsBtnX = canvas.width - fsBtnSize - fsBtnMargin;
const fsBtnY = canvas.height - fsBtnSize - fsBtnMargin;

// Androidでの表示ずれ・縮小を修正したコード
ctx.save();
ctx.fillStyle = "rgba(0, 0, 0, 0.7)";
ctx.fillRect(fsBtnX, fsBtnY, fsBtnSize, fsBtnSize);

ctx.strokeStyle = "#8bd88b";
ctx.lineWidth = 2;
ctx.strokeRect(fsBtnX, fsBtnY, fsBtnSize, fsBtnSize);

// ★ Android向けにフォントサイズ指定と縦位置のオフセット微調整を追加
ctx.fillStyle = "#8bd88b";
// monospaceを優先指定し、絵文字化を防止
ctx.font = "bold 24px monospace"; 
ctx.textAlign = "center";
ctx.textBaseline = "middle";

// 記号のフォント差異によるズレを抑えるため、中心（+ fsBtnSize / 2）にそのまま描画
ctx.fillText("⤢", fsBtnX + fsBtnSize / 2, fsBtnY + fsBtnSize / 2 + 1); 
ctx.restore();
            }

            // ④ 勝利時星の拡大演出の描画
            if (window.currentGameScene === "PRESENTATION") {
                const sw = clearStar.width * clearPresentation.scale;
                const sh = clearStar.height * clearPresentation.scale;

                ctx.save();
                ctx.translate(clearStar.x, clearStar.y);
                ctx.rotate(clearPresentation.angle);

                // 星が完全に画面を覆い尽くしたら、画面全体を徐々に白にフェード（ホワイトアウト）
                if (clearPresentation.fadeStarted) {
                    ctx.globalAlpha = clearPresentation.opacity;
                }

                if (assets.star_on.complete) {
                    ctx.drawImage(assets.star_on, -sw/2, -sh/2, sw, sh);
                } else {
                    ctx.fillStyle = "#ffcc00";
                    ctx.fillRect(-sw/2, -sh/2, sw, sh);
                }
                ctx.restore();

                // 終了間際のホワイトアウト描画
                if (clearPresentation.fadeStarted) {
                    ctx.fillStyle = `rgba(255, 255, 255, ${1.0 - clearPresentation.opacity})`;
                    ctx.fillRect(0, 0, canvas.width, canvas.height);
                }
            }

            if (window.currentGameScene === "PLAYING") {
                // 星ボスの描画
                if (currentPhase === 7) {
                    const sw = clearStar.width;
                    const sh = clearStar.height;

                    ctx.save();
                    if (assets.star_off.complete) {
                        ctx.drawImage(assets.star_off, clearStar.x - sw/2, clearStar.y - sh/2, sw, sh);
                    } else {
                        ctx.fillStyle = "#333333";
                        ctx.fillRect(clearStar.x - sw/2, clearStar.y - sh/2, sw, sh);
                    }

                    const fillRatio = clearStar.progress / clearStar.maxProgress; 
                    if (fillRatio > 0) {
                        ctx.beginPath();
                        ctx.rect(
                            clearStar.x - sw/2, 
                            (clearStar.y + sh/2) - (sh * fillRatio), 
                            sw, 
                            sh * fillRatio
                        );
                        ctx.clip();

                        if (assets.star_on.complete) {
                            ctx.drawImage(assets.star_on, clearStar.x - sw/2, clearStar.y - sh/2, sw, sh);
                        } else {
                            ctx.fillStyle = "#ffcc00";
                            ctx.fillRect(clearStar.x - sw/2, clearStar.y - sh/2, sw, sh);
                        }
                    }
                    ctx.restore();
                }

                // 自機の描画（player.png画像を使用）
                if (assets.player.complete) {
                    ctx.drawImage(assets.player, player.x - player.width/2, player.y - player.height/2, player.width, player.height);
                } else {
                    ctx.fillStyle = "#00ff00";
                    ctx.fillRect(player.x - player.width/2, player.y - player.height/2, player.width, player.height);
                }

                if (isCharging) {
                    let currentLevel = Math.floor(chargeTimer / CHARGE_THRESHOLD) + 1;
                    if (currentLevel > MAX_CHARGE_LEVEL) currentLevel = MAX_CHARGE_LEVEL;
                    
                    // レベル7（最大）の時だけ武器固有の色、レベル1〜6は通常の進行カラー（黄・橙・赤など）
                    let auraColor = chargeColors[currentLevel];
                    if (currentLevel === 7) {
                        if (selectedWeapon === "white") auraColor = "#ffffff";
                        else if (selectedWeapon === "pink") auraColor = "#ff66cc";
                    }
                    
                    ctx.strokeStyle = auraColor;
                    ctx.lineWidth = 2;
                    ctx.beginPath();
                    ctx.arc(player.x, player.y, player.width + (chargeTimer % 10), 0, Math.PI * 2);
                    ctx.stroke();
                }

                enemies.forEach(e => {
                    if (e.img.complete) {
                        ctx.drawImage(e.img, e.x - e.width/2, e.y - e.height/2, e.width, e.height);
                    } else {
                        ctx.fillStyle = e.type === 1 ? "#ff0000" : e.type === 2 ? "#ff6600" : e.type === 3 ? "#ff00ff" : "#ffff00";
                        ctx.fillRect(e.x - e.width/2, e.y - e.height/2, e.width, e.height);
                    }
                });

                bullets.forEach(b => {
                    ctx.fillStyle = b.color;
                    ctx.beginPath();
                    ctx.arc(b.x, b.y, b.size / 2, 0, Math.PI * 2);
                    ctx.fill();
                });

                // ⭕ 【追加】白武器チャージの「広がる消滅リング（厚み40pxのフチ）」を白色で描画
                if (typeof whiteEraserCircles !== "undefined") {
                    whiteEraserCircles.forEach(circle => {
                        // 外側に広がるにつれて、衝撃波が徐々に薄くなっていくフェード演出
                        // 最大半径（画面対角線）に対して、現在の半径がどこまで広がったかで透明度を計算
                        let ratio = circle.radius / circle.maxRadius;
                        let alpha = Math.max(0, 0.4 * (1.0 - ratio)); // 開始時は透明度0.4、広がるにつれて0に近づく
                        
                        ctx.save();
                        ctx.beginPath();
                        // 判定ロジックと完全に一致させるため、厚み40px（内径 -20px、外径 +20px）のドーナツ型の線を引く
                        ctx.arc(circle.cx, circle.cy, circle.radius, 0, Math.PI * 2);
                        
                        ctx.strokeStyle = `rgba(255, 255, 255, ${alpha})`;
                        ctx.lineWidth = 40; // 敵弾を消去する「厚さ40pxのフチ」に完全に合わせる
                        ctx.stroke();
                        ctx.restore();
                    });
                }

                ctx.fillStyle = "#ff3333";
                enemyBullets.forEach(eb => {
                    ctx.beginPath();
                    ctx.arc(eb.x, eb.y, 3, 0, Math.PI * 2);
                    ctx.fill();
                });

                ctx.textAlign = "left";
                ctx.textBaseline = "top";
                ctx.fillStyle = "#ffffff";
                ctx.font = "18px 'DotGothic16'";
                ctx.fillText(`SCORE: ${score}`, 15, 15);
                
                // ⑥ 【修正】プレイ中画面からの「INVASIONS:」の表示を削除しました。

                ctx.fillStyle = "#ffffff";
                ctx.font = "14px 'DotGothic16'";
                ctx.fillText("HP:", canvas.width - 180, 15);
                ctx.fillStyle = "#444444";
                ctx.fillRect(canvas.width - 150, 16, 130, 12);
                ctx.fillStyle = player.hp <= 6 ? "#ff0000" : "#00ff00";
                ctx.fillRect(canvas.width - 150, 16, 130 * (player.hp / player.maxHp), 12);

                const barX = canvas.width-180;
                const barY = 50;
                const barW = 160;
                const barH = 14;

                ctx.fillStyle = "#222222";
                ctx.fillRect(barX, barY, barW, barH);

                if (isCharging) {
                    let currentLevel = Math.floor(chargeTimer / CHARGE_THRESHOLD) + 1;
                    if (currentLevel > MAX_CHARGE_LEVEL) currentLevel = MAX_CHARGE_LEVEL;

                    let currentLevelProgress = (currentLevel === 7) ? 1.0 : (chargeTimer % CHARGE_THRESHOLD) / CHARGE_THRESHOLD;

                    if (currentLevel > 1) {
                        let bgLevelColor = chargeColors[currentLevel - 1];
                        if (currentLevel - 1 === 7) {
                            if (selectedWeapon === "white") bgLevelColor = "#888888";
                            else if (selectedWeapon === "pink") bgLevelColor = "#aa3377";
                        }
                        ctx.fillStyle = bgLevelColor;
                        ctx.fillRect(barX, barY, barW, barH);
                    }

                    let fgLevelColor = chargeColors[currentLevel];
                    if (currentLevel === 7) {
                        if (selectedWeapon === "white") fgLevelColor = "#ffffff";
                        else if (selectedWeapon === "pink") fgLevelColor = "#ff66cc";
                    }
                    ctx.fillStyle = fgLevelColor;
                    ctx.fillRect(barX, barY, barW * currentLevelProgress, barH);
                }

                ctx.strokeStyle = "#ffffff";
                ctx.lineWidth = 1;
                ctx.strokeRect(barX, barY, barW, barH);
                ctx.fillStyle = "#ffffff";
                ctx.font = "15px 'DotGothic16'";
                ctx.fillText("CHARGE GAUGE", barX, barY - 18);
            }

            if (window.currentGameScene === "GAMEOVER") {
                if (passedEnemiesCount === 0) {
                    updateAchievementProgress("achievement_37");
                }
                ctx.textAlign = "center";
                ctx.textBaseline = "middle";
                ctx.fillStyle = "#ff0000";
                ctx.font = "bold 40px 'DotGothic16'";
                ctx.fillText("GAME OVER", canvas.width / 2, canvas.height * 0.22);

                if(currentPhase==="INFINITY"){
                    // 現在のスコア
                    ctx.fillStyle = "#ffffff";
                    ctx.font = "20px 'DotGothic16'";
                    ctx.fillText(`SCORE: ${score}`, canvas.width / 2, canvas.height * 0.53);
                }
                
                // ⑥ 【修正】敗北時のリザルト画面にのみ侵略数を表示
                ctx.fillStyle = "#ffaaaa";
                ctx.font = "20px 'DotGothic16'";
                ctx.fillText(`INVASIONS: ${passedEnemiesCount}`, canvas.width / 2, canvas.height * 0.63);

                ctx.fillStyle = "#ffffff";
                ctx.font = "16px 'DotGothic16'";
                ctx.fillText("Click to return menu", canvas.width / 2, canvas.height * 0.8);
                
            }

            if (window.currentGameScene === "CLEAR") {
                updateAchievementProgress("achievement_36");
                if (passedEnemiesCount === 0) {
                    updateAchievementProgress("achievement_37");
                }
                if (score === 0) {
                    updateAchievementProgress("achievement_39");
                }
                ctx.textAlign = "center";
                ctx.textBaseline = "middle";
                
                // 「Game Clear！」
                ctx.fillStyle = "#00ff00";
                ctx.font = "bold 40px 'DotGothic16'";
                ctx.fillText("GAME CLEAR!", canvas.width / 2, canvas.height * 0.22);
                
                ctx.fillStyle = "#ffff00";
                ctx.font = "bold 28px 'DotGothic16'";
                ctx.fillText("④ 0 1 1 2 5", canvas.width / 2, canvas.height * 0.39);
                
                // 現在のスコア
                ctx.fillStyle = "#ffffff";
                ctx.font = "20px 'DotGothic16'";
                ctx.fillText(`SCORE: ${score}`, canvas.width / 2, canvas.height * 0.53);

                // ⑥ 【修正】勝利時のリザルト画面にのみ侵略数を表示
                ctx.fillStyle = "#ffaaaa";
                ctx.font = "18px 'DotGothic16'";
                ctx.fillText(`INVASIONS: ${passedEnemiesCount}`, canvas.width / 2, canvas.height * 0.63);
                
                ctx.fillStyle = "#aaaaaa";
                ctx.font = "16px 'DotGothic16'";
                ctx.fillText("Click to return menu", canvas.width / 2, canvas.height * 0.8);
            }
            // ⭕ 【追加】未ロード部分を隠すマスクと走査線の描画
            if (retroLoading) {
                // まだ読み込まれていない部分（loadYより下）を真っ黒に塗りつぶす
                ctx.fillStyle = "#000000";
                ctx.fillRect(0, loadY, canvas.width, canvas.height - loadY);

                // 読み込みの最先端（境界線）に、オールドPC風の薄緑色の走査線（ラスタライン）を走らせる
                if (loadY < canvas.height) {
                    ctx.strokeStyle = "rgba(51, 255, 51, 0.7)"; // レトロクールなグリーン
                    ctx.lineWidth = 2;
                    ctx.beginPath();
                    ctx.moveTo(0, loadY);
                    ctx.lineTo(canvas.width, loadY);
                    ctx.stroke();

                    // 境界線のすぐ上に、ほんのりとした残像グラデーションを乗せてリアルにする
                    ctx.fillStyle = "rgba(51, 255, 51, 0.15)";
                    ctx.fillRect(0, Math.max(0, loadY - 6), canvas.width, 6);
                }
            }
        }

        function gameLoop() {
            const gamePage = document.getElementById("game-page-screen");
            if (!gamePage || gamePage.style.display === "none") {
                clearInterval(gameIntervalId);
                window.removeEventListener("keydown", handleKeyDown, true);
                window.removeEventListener("keyup", handleKeyUp, true);
                return;
            }
            // ⭕ 【ロマン重視のレトロロード演出に強化】
            if (retroLoading) {
                if (loadStuckTimer > 0) {
                    // ひっかかり（フリーズ）演出中
                    loadStuckTimer--;
                } else {
                    // 進行度（画面の上・中・下）に合わせて、引っかかる確率や進む速度を変化させる
                    let ratio = loadY / canvas.height;

                    if (ratio < 0.3) {
                        if (Math.random() < 0.04) {
                            loadStuckTimer = Math.floor(Math.random() * 20) + 15;
                        } else {
                            loadY += Math.floor(Math.random() * 2) + 1;
                            playRetroScanSound(); // ⭕ 読み込みが動いている時にジジッと鳴らす
                        }
                    } 
                    else if (ratio < 0.7) {
                        if (Math.random() < 0.05) {
                            loadStuckTimer = Math.floor(Math.random() * 30) + 20;
                        } else {
                            loadY += Math.floor(Math.random() * 3) + 2;
                            // 中盤は音が連続しすぎないように少し間引いてリアルに
                            if (Math.random() < 0.6) playRetroScanSound(); 
                        }
                    } 
                    else {
                        if (Math.random() < 0.01) {
                            loadStuckTimer = Math.floor(Math.random() * 10) + 5;
                        } else {
                            loadY += Math.floor(Math.random() * 4) + 5;
                            if (Math.random() < 0.4) playRetroScanSound(); // 終盤のシャカシャカ音
                        }
                    }
                }

                // 画面の一番下まで完全にスキャンされたら終了
                if (loadY >= canvas.height) {
                    retroLoading = false;
                    playRetroBootCompleteSound(); // ⭕ ロード完了の「ピピィッ！」を鳴らす
                    localStorage.setItem("belief_first_opened", "true");
                }
            }

            // ロード中であっても、裏でupdateとdrawを動かしておく（上から現れるゲーム画面をみせるため）
            update();
            draw();
        }

        if (gameIntervalId) clearInterval(gameIntervalId);
        gameIntervalId = setInterval(gameLoop, 1000 / 60); 

        function triggerGameOver() {
            window.currentGameScene = "GAMEOVER";
            // ゲームオーバーになっても、そこまでのスコアがハイスコアを上回っていれば即時保存・加算
            if (currentPhase === "INFINITY"&&score > highScore) {
                highScore = score;
                localStorage.setItem("belief_highscore_common", highScore.toString());
                updateAchievementProgress("achievement_38", highScore,true);
            }
        }
    });
};

// ⭕ 【追加】レトロ起動演出用の効果音生成ロジック (Web Audio API)
let retroAudioCtx = null;

function playRetroScanSound() {
    try {
        // ユーザーが画面操作（クリック等）した後にしか音が出せないブラウザ制限への対策
        if (!retroAudioCtx) {
            retroAudioCtx = new (window.AudioContext || window.webkitAudioContext)();
        }
        if (retroAudioCtx.state === 'suspended') {
            retroAudioCtx.resume();
        }

        const osc = retroAudioCtx.createOscillator();
        const gain = retroAudioCtx.createGain();

        // レトロ感のある矩形波 (square) を使用
        osc.type = "square";
        // 低めのジジッとした周波数
        osc.frequency.setValueAtTime(Math.random() * 40 + 30, retroAudioCtx.currentTime);

        // 一瞬だけ鳴らす（0.03秒）
        gain.gain.setValueAtTime(0.03, retroAudioCtx.currentTime); // 音量はかなり控えめに
        gain.gain.exponentialRampToValueAtTime(0.005, retroAudioCtx.currentTime + 0.03);

        osc.connect(gain);
        gain.connect(retroAudioCtx.destination);

        osc.start();
        osc.stop(retroAudioCtx.currentTime + 0.03);
    } catch (e) {
        // オーディオ未対応ブラウザ用のセーフティ
    }
}

function playRetroBootCompleteSound() {
    try {
        if (!retroAudioCtx) {
            retroAudioCtx = new (window.AudioContext || window.webkitAudioContext)();
        }
        const now = retroAudioCtx.currentTime;
        
        // ピピィッ！という2連ビープ音
        [
            { freq: 880, start: 0, dur: 0.07 },      // 1音目（高音）
            { freq: 1760, start: 0.08, dur: 0.12 }    // 2音目（さらに高音）
        ].forEach(note => {
            const osc = retroAudioCtx.createOscillator();
            const gain = retroAudioCtx.createGain();
            
            osc.type = "square"; // 典型的なファミコン・ピコピコ音
            osc.frequency.setValueAtTime(note.freq, now + note.start);
            
            gain.gain.setValueAtTime(0.04, now + note.start);
            gain.gain.exponentialRampToValueAtTime(0.0001, now + note.start + note.dur);
            
            osc.connect(gain);
            gain.connect(retroAudioCtx.destination);
            
            osc.start(now + note.start);
            osc.stop(now + note.start + note.dur);
        });
    } catch (e) {
    }
}

// 右ボタンが押された時に実行する処理
function exitFullscreenIfActive() {
    const isFS = document.fullscreenElement || document.webkitFullscreenElement;
    if (isFS) {
        if (document.exitFullscreen) document.exitFullscreen();
        else if (document.webkitExitFullscreen) document.webkitExitFullscreen();
    }
}

// btn-nextの押下イベントに紐付け
if (gameBtnNext) {
    gameBtnNext.addEventListener("click", exitFullscreenIfActive);
    gameBtnNext.addEventListener("touchstart", exitFullscreenIfActive, { passive: true });
}
