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
    "あらたまの<br>春にぞならんめでたき日<br>輝く六花降りしきること",
    "朝露の置きし木立をながむれば<br>苔よりいづる竹ぞありけむ",
    "朝露に濡れにし竹ののぶがごと<br>延びゆく君の明日をも見てむ",
    "竹の子や一日ふるまにおよすげば<br>誰か明日の姿知るらむ",
    "露濡るる袖ひるがえしたかむなを<br>摘みゆく君に朝日さしぬる",
    "たかむなの生ふる野辺に影照りて<br>つゆもなかるる隅なかりけり",
    "野辺に咲く花となりしも<br>われはまた<br>袂濡らさむ君ぞゆかしき",
    "合言葉に<br>「Okayama」と入れると…？",
    "合言葉に<br>「Math」と入れると…？",
    "合言葉「Question」で<br>直接メッセージが送れます",
    "いつまでも回るわけでは<br>無いらしい",
    "ティンバル果が<br>結局何かわかってない",
    "ジャムシェドプルの<br>タタ財閥を創始したのは<br>ジャムシェトジー・タタ",
    "このサイトには<br>クリアという概念が<br>存在する…かも",
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
    "長い文章を入れたらどうなるかのチェックのためにこの文章を書いてるけど、多分こいつがはじめに表示されてそのあと流れてくるみたいな挙動になってるはず。自動で改行する機能を入れるか、文字の大きさを縮めるようにするか。自動で改行したら和歌の侘び寂びがなくなってしまう気がするし、文字を小さくしたらそれはそれで見にくい。画面の横幅が小さい場合縦から流すようにするのもあるけどほんまにプログラムめんどい気がする。でもかと言ってなぁ、スマホで見た時どう思うかよな。文化祭で見るとしたら多分スマホから。わざわざパソコンでするなんて準備中の人ぐらい？その人は多分このサイト楽しむ余裕ないし、そもそも文化祭に間に合うかわからんぐらい超大作が出来上がろうとしてる。自動改行は必要っぽいな。正味侘び寂びは一旦やってみてから判断するしか無い。縦に流すのもできることならしたい。このサイト出来上がるのほんまに来年の文化祭とかになるんちゃうかな。",
    "老人のイカれ昭和エピソード好き",
    "山へ芝刈りにって<br>結局何してたんやろ",
    "範囲多すぎると逆に<br>何もしたくなくなる症候群",
    "背景の写真は<br>どこから撮ったでしょう",
    "私の愛した「Cookie」",
    "教養は高く<br>品性は低く",
    "ミリカンすごくね？",
    "ここ最近一番の驚き<br>リトマスゴケ",
    "情報✕外れ値＝香川"
];

const sequentialPhrases = [
    "これで終わりだよ",
    "本当に終わりだよ",
    "終わりだって言ってんじゃん！",
    "何？暇なの？",
    "こんなに和歌いっぱいあるのに<br>よくここまで来たよね",
    "ちなみに合言葉「Waka」で<br>和歌一覧見れるよ",
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
    ["pdf/〜今日からあなたも平安人day1〜.pdf","〜今日からあなたも平安人day1〜","国語","2359","answer/仮PDF.pdf"],
    ["pdf/『オハイオの風』.pdf", "『オハイオの風』", "英語", "7230","answer/仮PDF.pdf"],
    ["pdf/1-共テ.pdf", "1-共テ<br>(地理)", "地理", "7109","answer/地理1解答.pdf"],
    ["pdf/2-共テ.pdf", "2-共テ<br>(地理)", "地理", "7653","answer/仮PDF.pdf"],
    ["pdf/3-共テ.pdf", "3-共テ<br>(地理)", "地理", "4075","answer/仮PDF.pdf"],
    ["pdf/4-共テ.pdf", "4-共テ<br>(地理)", "地理", "6734","answer/仮PDF.pdf"],
    ["pdf/5-共テ.pdf", "5-共テ<br>(地理)", "地理", "2071","answer/仮PDF.pdf"],
    ["pdf/6-共テ.pdf", "6-共テ<br>(地理)", "地理", "9851","answer/仮PDF.pdf"],
    ["pdf/7-共テ.pdf", "7-共テ<br>(地理)", "地理", "2706","answer/仮PDF.pdf"],
    ["pdf/8-共テ.pdf", "8-共テ<br>(地理)", "地理", "3287","answer/仮PDF.pdf"],
    ["pdf/9-共テ.pdf", "9-共テ<br>(地理)", "地理", "6103","answer/仮PDF.pdf"],
    ["pdf/the field of「Subjunctive」.pdf","the field of<br>「Subjunctive」","英語","6578","answer/仮PDF.pdf"],
    ["pdf/The Tale of Genji.pdf","The Tale of<br>Genji","国語","9842","answer/古典解答.pdf"],
    ["pdf/オハイオの風2.pdf","オハイオの風2","英語","8610","answer/仮PDF.pdf"],
    ["pdf/旭川の網代木.pdf","旭川の網代木<br>(日本史)","歴史","9283","answer/仮PDF.pdf"],
    ["pdf/永田町の番人（公共・政経そして少し香る地理）.pdf","永田町の番人<br>(公共・政経<br>そして少し<br>香る地理)","公共","7209","answer/仮PDF.pdf"],
    ["pdf/英検対策オハイオの風.pdf","英検対策<br>オハイオの風","英語","0798","answer/仮PDF.pdf"],
    ["pdf/加古川の網代木.pdf","加古川の網代木<br>(日本史)","歴史","4701","answer/仮PDF.pdf"],
    ["pdf/奇問の崖.pdf","奇問の崖<br>(物理)","理科","5098","answer/奇問の崖 解答.pdf"],
    ["pdf/共テ2-情報.pdf","共テ2-情報","情報","4986","answer/仮PDF.pdf"],
    ["pdf/共テ世界史-1.pdf","共テ世界史-1","歴史","0916","answer/仮PDF.pdf"],
    ["pdf/共テ世界史-2.pdf","共テ世界史-2","歴史","0784","answer/仮PDF.pdf"],
    ["pdf/共テ世界史-3.pdf","共テ世界史-3","歴史","6098","answer/仮PDF.pdf"],
    ["pdf/共テ世界史-4.pdf","共テ世界史-4","歴史","2374","answer/仮PDF.pdf"],
    ["pdf/共テ倫理キリスト教編.pdf","共テ倫理<br>キリスト教編","公共","1997","answer/仮PDF.pdf"],
    ["pdf/共通テスト作問 生物基礎 - 第1問A.pdf","生物基礎<br>第1問A","理科","3610","answer/仮PDF.pdf"],
    ["pdf/共通テスト理科基礎演習のための演習1日目.pdf","化学基礎<br>1日目","理科","9720","answer/共通テスト理科基礎演習のための演習 解答.pdf"],
    ["pdf/共通テスト理科基礎演習のための演習2日目.pdf","化学基礎<br>2日目","理科","3748","answer/仮PDF.pdf"],
    ["pdf/共通テスト理科基礎演習のための演習3日目.pdf","化学基礎<br>3日目","理科","9640","answer/仮PDF.pdf"],
    ["pdf/小学生でもできる情報.pdf","小学生でも<br>できる情報","情報","3658","answer/仮PDF.pdf"],
    ["pdf/単発数学.pdf","単発数学","数学","7598","answer/仮PDF.pdf"],
    ["pdf/二発数学.pdf","二発数学","数学","0659","answer/仮PDF.pdf"],
    ["pdf/中学生でもできる情報.pdf","中学生でも<br>できる情報","情報","8274","answer/仮PDF.pdf"],
    ["pdf/日本史.pdf","日本史","歴史","0874","answer/仮PDF.pdf"],
    ["pdf/別府川の網代木（日本史）.pdf","別府川の網代木<br>(日本史)","歴史","5697","answer/仮PDF.pdf"],
    ["pdf/無地の知.pdf","無知の知<br>(地学)","理科","8136","answer/地学解答.pdf"],
    ["pdf/倫理テスト.pdf","倫理テスト","公共","0792","answer/倫理テスト解答.pdf"],
    ["pdf/倫理大問1.pdf","倫理大問1","公共","2783","answer/倫理大問一解答.pdf"],
    ["pdf/倫理大問2.pdf","倫理大問2","公共","4895","answer/倫理大問二解答.pdf"],
    ["pdf/倫理大問3.pdf","倫理大問3","公共","6048","answer/倫理大問三解答.pdf"],
    ["pdf/倫理大問4.pdf","倫理大問4","公共","9740","answer/倫理大問四解答.pdf"],
    ["pdf/倫理大問5.pdf","倫理大問5","公共","9658","answer/倫理大問五解答.pdf"],
    ["pdf/倫理大問6.pdf","倫理大問6","公共","7681","answer/倫理大問六解答.pdf"],
    ["pdf/倫理大問7.pdf","倫理大問7","公共","2871","answer/倫理大問七解答.pdf"],
    ["pdf/倫理大問8.pdf","倫理大問8","公共","0401","answer/倫理大問八解答.pdf"]
];

const kasuProblemList = [
    ["kasupdf/カス英語.pdf", "カス英語", "英語", "5278","answer/仮PDF.pdf"],
    ["kasupdf/カス英語2.pdf", "カス英語2", "英語", "5601","answer/仮PDF.pdf"],
    ["kasupdf/カス世界史NOVA①.pdf","カス世界史<br>NOVA①","歴史","9436","answer/仮PDF.pdf"],
    ["kasupdf/カス世界史NOVA② .pdf","カス世界史<br>NOVA②","歴史","8704","answer/仮PDF.pdf"],
    ["kasupdf/カス政経.pdf","カス政経","公共","8769","answer/仮PDF.pdf"],
    ["kasupdf/カス倫理.pdf","カス倫理","公共","2693","answer/カス倫理解答.pdf"],
    ["kasupdf/カス歴史.pdf","カス歴史","歴史","1273","answer/仮PDF.pdf"],
    ["kasupdf/カス歴史2.pdf","カス歴史2","歴史","0577","answer/仮PDF.pdf"],
    ["kasupdf/ザグロスの頂.pdf","ザグロスの頂<br>(地理)","地理","2695","answer/仮PDF.pdf"],
    ["kasupdf/やさしい理系生物.pdf","やさしい理系生物","理科","2987","answer/仮PDF.pdf"]
];

const membersData = [
  { id: 1, name: "岡山の吉右衛門", 
    profile: "『オハイオの風』・『永田町の番人』制作<br>英検準一級講座主宰（合格者2名）<br><br>心得：百合は日本の文化です。<br><br>挨拶：ご機嫌よう、岡山県民の諸君。大都会岡山の出身である諸君は当然、百合についてある程度の知見をお持ちだと拝察する。いや、岡山県民であろうとなかろうと、全国民は百合を愛で、百合を観察し、百合に敬意を持っていなければならない。なのでここに、人類最後の防衛策として『<span style='font-weight:bold;color:yellow;'>国民百合文化研究所</span>』の設立を要求する！",
    beliefProfile: "百合は日本の文化です。"},
  { id: 2, name: "白狐ふゆ", 
    profile: "生物・倫理選択。<br>「しろぎつね」のつもりでつけた名前だったが初手で「びゃっこ」と読まれてしまったため、今は「びゃっこふゆ」で統一している。<br><br>心得：ラブコメは一対一対応。不得意教科ほど楽しくあれ。<br><br>挨拶：はじめましての人ははじめまして。もし「こいつ見たことあるな？」って人がいれば、相当レアなので誇っていいと思います。ちょっとした娯楽を皆様に提供することができれば幸いです。" ,
    beliefProfile: "「Novel」"},
  { id: 3, name: "プロリン115", 
    profile: "倫理・サイト運営担当<br><br>受験勉強を生贄にサイトを制作している。<br>英検講座より参加したが、申し込み方法がわからず無事不戦敗。（その後合格しました。講師に感謝。）<br><br><span style='color:white;'>心得：質に全</span>振りすれば勉強時間0でもいける<br><br><span style='color:white;'>挨拶：サイト運</span>営をしております！少しでも楽しんでいただけれ<span style='color:white;'>ば何より</span>です。実績全解除目指しましょう。",
    beliefProfile: "新たな扉が開かれた！"},
  { id: 4, name: "アポロ12号", 
    profile: "文化祭2日目提唱者<br>超ネクタイ開発者<br>ゴリキュア黄色枠<br>罰掃除を冗談で乗り切った者<br>「はい歌ろ」開発者<br>絆の奇跡：女性パート担当<br>カントリーロード：ソプラノ担当<br>旗手5年連続担当<br>善きサマリア人の例え<br><span style='font-weight:bold;color:yellow;'>先公に仇なす者</span>",
    beliefProfile:"神は死んだ"},
  { id: 5, name: "さすらいのブッダ", 
    profile: "播磨に悟りを教えに来た。<br><br>岡山の吉右衛門からの遊びの誘いを、「お金をかけて疲れに行くなんてw」と最悪の冷笑で断った話はあまりにも有名。<br><br>心得：来世は美少女になりたい<br><br>挨拶：なますて〜。極楽は西の方にあるよ〜。探してみてね！",
    beliefProfile: "来世は美少女になりたい"},
  { id: 6, name: "妹嶌 紫", 
    profile: "物理が好きな生物選択。<br><br>とりあえず、受験生は『やさしい理系数学』をすればよい。『やさしい理系数学』はやさしくない。『やさしい理系数学』をするときとYoutube shortを見てるときが一番生きていることを感じられる。『やさしい理系数学』に憧れて『やさしい理系生物』を作成。生物の資料集は『新課程　視覚でとらえるフォトサイエンス生物図録』一択。問題集は『生物重要問題集』と『生物上級問題精講』を勧める。きゃんべるんるん。あ、名前の読み方はどこかにあるはず。きゃんべるんるん。きゃんべるんるん。きゃんべるんるん。きゃんべるんるん。きゃんべるんるん",
    beliefProfile: "彼女欲しい"},
  { id: 7, name: "(・∀・)", 
    profile: "チャート周回予備校首班<br>物理・世界史選択<br><br>心得：確率は収束する<br><br>挨拶：どうも、こんにちは。運が絡むようなゲームではとことん惨敗している弱者です。でも上振れた時が楽しくてついついやってしまうよね。皆さんも大学生とかになって暇な時間ができたら是非とも！",
    beliefProfile: "確率は収束する"},
  { id: 8, name: "ニコメディア", 
    profile: "ニコメディア（チャート周回予備校）は、令和時代、日本の高校生。<br><br>大会で優秀な成績を修めている。白陵高等学校功労賞筆頭候補。<br><br>「『鉄壁』はクソの会」<br>「アクリロニトリルガチ恋評議会」<br>「落ち目の倫理を壊滅させて地学を必修にする会」<br>初代会長。<br><br>ひとこと：カニカマに穴をあけるとあなかま",
    beliefProfile: "カニカマに穴をあけるとあなかま"},
  { id: 9, name: "ハフマン木の伐採者", 
    profile: 'name = "ハフマン木の伐採者"<br>inchargeof = "情報"<br>kokoroe = "課題の進行と紛失は常に同値条件。範囲の3周は朝飯前。"<br>selfintroduction = "情報の問題作ったりしてます。これをpythonに打ち込んでみてね☆"<br><br>for s in range(0,100000000000,1):<br>&nbsp;&nbsp;print(name)<br>&nbsp;&nbsp;print(inchargeof)<br>&nbsp;&nbsp;print(kokoroe)<br>&nbsp;&nbsp;print(selfintroduction)',
    beliefProfile: "課題の進行と紛失は常に同値条件。<span class='smart-phone'>範囲の3周は朝飯前。</span>"},
  { id: 10, name: "韓流メスガキ", 
    profile: "&emsp;え〜♡&emsp;こんな簡単な問題ができないの？&emsp;よっわぁ♡&emsp;こんなの、小・学・生でもできちゃうよ？<br>&emsp;ほ〜ら、解いて♡&emsp;解いて♡&emsp;答えは見ちゃダメだよ♡&emsp;でも、どうしても見たいって言うなら、私に土下座してくれたら、考えてあげてもいいかな♡<br>&emsp;うわ♡&emsp;ホントに土下座しちゃうんだぁ♡&emsp;プライドとかないんですかぁ〜♡&emsp;ざぁこ♡&emsp;ざぁこ♡<br>&emsp;じゃあ次は〜、私をオキニイリにしてもらおっかな♡&emsp;素直に見せてあげるわけないじゃん♡&emsp;こんな単純な手に引っかかるなんて♡&emsp;だから、私に負けちゃうんだよ♡&emsp;小学生以下のくそざこさん♡<br>&emsp;頑張れ♡&emsp;頑張れ♡&emsp;答えが見たいんでしょ〜♡<br>&emsp;まだまだ逃さないから、覚悟してね♡",
    beliefProfile:"10円パン両替したい"}
];

const CUSTOM_ERROR_MESSAGES = [
  ["う","う…？"],
  ["うん","うん…？"],
  ["ウ","ウ…？"],
  ["ウン","ウン…？"],
  ["うんち", "💩"],
  ["うんこ", "💩"],
  ["うんぴ","💩"],
  ["poo","💩"],
  ["poop","💩"],
  ["Poo","💩"],
  ["Poop","💩"],
  ["ウンチ","💩"],
  ["ウンコ","💩"],
  ["ウンピ","💩"],
  ["unti","💩"],
  ["unko","💩"],
  ["unco","💩"],
  ["unpi","💩"],
  ["💩","💩"],
  ["会長", "お前ら、最高だぜ〜！🐢"],
  ["お前ら、最高だぜ〜！🐢","彼は本当に今までに見た人間の中で最も人を楽しませる事ができた人間であった。常に楽しいことを考え、そして実現する。どれだけの苦難があっても諦めることはなかった。確実に彼は輝くと思った。そして彼は輝いた。これまでの誰よりも輝き、そして退任を惜しまれた。彼は必ず世界を創る側の人間になる。というより、彼の創る世界を見てみたい。"],
  ["","なんか書いて"],
  ["なんか","ちゃんと書け"],
  ["ちゃんと","これは俺が悪い"],
  ["岡山の吉右衛門","圧倒的有能"],
  ["白狐ふゆ","こいつがいなけりゃゲームも小説も無い。"],
  ["プロリン115","僕だよ! 115は分子量!"],
  ["アポロ12号","なんかこの人にはついていきたくなるよね。"],
  ["さすらいのブッダ","雑なボケも拾ってくれる。ありがたい。"],
  ["妹嶌紫","この人の授業で全国行ってるなら…もしやこいつが真の有能ってｺﾄ!?"],
  ["(・∀・)","予備校の創始者であり首班。割と最近決まった設定やけど受け入れるの早すぎて笑ってもた。"],
  ["ニコメディア","早くASMR撮ってくれ"],
  ["ハフマン木の伐採者","つい雑に扱ってしまう。でもちゃんと反応してくれておもろい。"],
  ["韓流メスガキ","※彼は男です。<br>※中々送ってくれないためみんなで考えたらこうなりました。"],
  ["合言葉","素直め"],
  ["百合コーン","🦄（正解）"],
  ["ユリコーン","🦄（正解）"],
  ["ユニコーン","惜しい！"],
  ["🦄","それなんて読む？"],
  ["ニンヒドリン","アミノ基を検出する試薬。アミノ基が存在する溶液には赤紫色の呈色を示す。プロリンなどのイミノ基を持つ物質に対しては黄色を呈色し、この色をプロリン黄という。"],
  ["ビウレット","ペプチド結合を検出する試薬。ペプチド結合が化合物一分子内に三つ以上存在する場合、ペプチド結合を行っている原子と錯体を形成し、赤紫色を呈色する。"],
  ["イミノ基","=NHや-NH-のこと。イミド基ともいう。ニンヒドリンと反応し、黄色を呈色する。"],
  ["プロリン","アミノ酸の一種であり、環状かつイミノ基を有している。アミノ基は有していない。かつてイミノ酸と言われていたが、生体内での反応がアミノ酸と同等なためアミノ酸という分類になった。"],
  ["00000","...ローラー？"],
  ["00001","...諦めな？"],
  ["00002","...10万通りあるよ？"],
  ["00003","...まぁ頑張れ"],
  ["Cookie","そのページは存在しません。<br>ですが何かが進んだかもしれません。<br>当たり前にあった何かが。"],
  ["Delete","何も押さずにそのままロード"],
  ["sensible","ごめんそれ関係ないやつ"],
  ["Sensible","ごめんそれ関係ないやつ"],
  ["チャート周回予備校","家"],
  ["Char-Shoo","この名前というかシステム天才じゃない？"],
  ["あなかま","「黙れ」の意。あなやかましいから来ている。直訳すると「とてもうるさい」となる。現代における、「うるさい」と叫んで黙れの意を表すのに通ずる。<br>…なんでこれ打とうと思ったの？"],
  ["オハイオの風","これよく作ったよね。英検講座でお世話になったと思うけどどうなんだろう。忘れた。"],
  ["はい歌ろ","いろは歌を習字で書くと<br>はい<br>歌ろ<br>になるかららしい。"],
  ["きゃんべるんるん","きゃんべるんるん"],
  ["猫","猫が一番可愛い。絶対いつか飼ってわしゃわしゃする。"],
  ["ホーム","ここを始めに作ったけどここを作った時点でもうほとんどの構成が出来上がってたという恐怖。よくやりきったよ。"],
  ["問題集","間違えてカス問題なんこか紛れ込んだ気がするけどまぁいいや。"],
  ["カス問題集","一番ここ好きかも。定期的に覗いてる。"],
  ["心得","始めはアーケードゲームで作るつもりやったし、イメージとして提出した画像はアーケードゲームやった。あまりにあからさま過ぎだと思ったのでレトロデジタル画面風に。由来は昔作ろうとしてたチャットゲーム。"],
  ["やさしい理系数学","私も使ってる。解説がおもろいから読み物として楽しんでる節はある。イェンゼンの不等式を重心で証明されたのにはビビった。その後のn個での相加相乗平均も。"],
  ["倫理","史上最高の学問。倫理が無ければこの世界は存在していない。どの学問でもそうだと言う人もいるかもしれないが、その学問という概念すらも元はと言えば倫理由来である。一日中倫理のことを考えていても飽きない。なんで二次試験倫理無いの。"],
  ["『鉄壁』はクソの会","そんなことないです。"],
  ["実績","私の好きなもの達を詰め込みました。全員名前言えてほしい。"],
  ["岡山","見たかったなぁ。"],
  ["数学","誘導って大切なんだなって思いました。でもすごいのが先生普通に解けてたこと。"],
  ["質問","なんかあったら送ってね！感想欲しい！"],
  ["和歌","信じられんと思うけどこれが全てのサイトの要素の中で一番時間かかってる。意味わからん。"],
  ["読込","思いついたことを思いついたままに。"],
  ["小説","何ヶ月前から育ってたんだろう。お待ちしておりました。"],
  ["受験生","ほんとにね！何してんだろね！"],
  ["科学の甲子園","バレたか。そうです。ここで一個一個問題渡してたのが面倒すぎたのでこうなりました。でもここまで隠し要素詰め込めるなんて思わないよね。"],
  ["網代木","こんなにメンバーいて日本史選択が0。でも学年で問題解く以上作らないといけない。そんでもって生まれた各教科のキメラ、網代木。"],
  ["犬の値段当てゲーム","え！知ってる人いた！嬉しい！誰にも伝わらなかったこれ！"],
  ["白陵","...言及は避けよう"],
  ["あ","畦。田んぼのあぜ道のこと。畔とも書く。"],
  ["ああ","アア溶岩。玄武岩-安山岩質の溶岩の表面形態の一つ。名称の由来はハワイ語。表面は粗く、ゴツゴツとしたコークス状の岩片がころがっている。パホイホイ溶岩が低温化し、粘性を得るとアア溶岩になることがあるが、アア溶岩からパホイホイ溶岩に変わることはない。伊豆諸島などで見られる。<br>(引用元:ブリタニカ国際大百科事典 一部略)"],
  ["あああ","アアー。エジプト神話における月神。古代の月神の種々の形態のうちの一つで、ほかにトート、コンス、オシリスも同じく月神とみなされる。狩猟者や農耕民によって、生命を生み出すもの、およびその守護者として崇拝された。イヌの顔やフクロウの顔をもつとされ、また片目が太陽である偉大なタカの左目ともいわれる。<br>(引用元:ブリタニカ国際大百科事典 一部略)"],
  ["ああああ","もう思いつかない"],
  ["パホイホイ溶岩","なにそれ"],
  ["パホイホイ","なにそれ"],
  ["歴史","そのページは移動しました。"],
  ["狂気","いやまぁ意味ちゃうのはわかってんねんけど、画像よりタイトルが先に決まってたんよね。もうならこれしかないやろ。"],
  ["アクリロニトリルガチ恋評議会","まぁエッフェル塔みたいなもんか…"],
  ["落ち目の倫理を壊滅させて地学を必修にする会","やめてください。"]
];

const container = document.querySelector(".container");
const tap = document.getElementById("tapStart");
const left = document.querySelector(".left");
const right = document.querySelector(".right");
const bottom = document.querySelector(".bottom");



function init(){
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


    document.getElementById("openingCover").classList.add("hide");

    left.classList.add("hide");
    right.classList.add("hide");
    bottom.classList.add("hide");
    tap.classList.add("hide");

    setTimeout(enterMain, 1500);
    updateAchievementProgress("achievement_1");
    localStorage.setItem("started","start");
}

function enterMain(){
    document.getElementById("openingCover")?.remove();
    container.style.display = "none";
    document.body.style.overflow = "auto";
}

container.addEventListener("click", (event) => {
    if(isIdleClearReady){
      openClearInputModal();
    }else{
      startSite();
    }
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
        if (selectedText.includes("大吉")) {
            updateAchievementProgress("achievement_8");
        }
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
    targetPage.scrollTo(0, 0);
    if (fullPageId === 'page-secret1') onVisitSecretPage(1);
    if (fullPageId === 'page-secret2') onVisitSecretPage(2);
    if (fullPageId === 'page-secret3') onVisitSecretPage(3);
    if (fullPageId === 'page-secret4') onVisitSecretPage(4);
    if (fullPageId === 'page-secret5') onVisitSecretPage(5);
    checkSecretPageDiscovery(fullPageId);
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
    // getComputedStyle を使って実際の display 状態を取得する
const spBanner = document.querySelector('.sp-banner');
const isSpVisible = spBanner && window.getComputedStyle(spBanner).display === "flex";

let logoImg;
if (isSpVisible) {
    logoImg = document.querySelector('.sp-banner .logo img');
} else {
    logoImg = document.querySelector('.pc-banner .logo img');
}
    if (!logoImg) return;
    updateLogoAchievements();
    clickCount+=clickPower;
    currentRotation += 360;

    let currentDuration = Math.max(1.4, 1.5 - (clickCount * 0.001)); 

    let currentScale = 1;
    if(isBurstEnabled){
    if (clickCount > scaleStartClick) {
        const scaleProgress = (clickCount - scaleStartClick) / (maxClicks - scaleStartClick);
        currentScale = 1 + (scaleProgress * 19.0); 
    }
  }

    if (clickCount < maxClicks||!isBurstEnabled) {
        logoImg.style.transition = `transform ${currentDuration}s ease-out`;
        logoImg.style.transform = `rotateZ(${currentRotation}deg) scale(${currentScale})`;
    } 
    else {
      if(isBurstEnabled){
        isBurst = true;
        logoImg.style.transition = 'none'; 
        logoImg.classList.add('burst'); 
        updateLogoExplodeAchievements();
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
  }

    if (clickCount < maxClicks && !logoImg.dataset.hasListener) {
        logoImg.dataset.hasListener = "true";
        logoImg.addEventListener('transitionend', () => {
            if (isBurst) return;
            if (clickCount > scaleStartClick&&isBurstEnabled) {
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
            setTimeout(() => {
               item.classList.remove("fade-in");
            }, 400);
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
    updateSubjectOnlyAchievements()
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
    text: "良かった良かった。",
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
    text: "もう一度楽しむ？",
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
    // ===【追加】選択されたボタンテキストに応じた判定（実績⑳〜㉓）===
    const selectedButtonText = currentData.buttons[buttonIndex].text;

    if (selectedButtonText === "自我を消す" || selectedButtonText === "お前を消す") {
        // ⑳ 解答履歴さんの自我を消す
        updateAchievementProgress("achievement_20");
    } else if (selectedButtonText === "ごめん" || selectedButtonText === "ごめんなさい") {
        // ㉑（1回）、㉒（10回）、㉓（100回）謝る
        updateAchievementProgress("achievement_21", 1);
        updateAchievementProgress("achievement_22", 1);
        updateAchievementProgress("achievement_23", 1);
    }
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
  const allProblemsCount = problemList.length + kasuProblemList.length;
    const savedMondai = JSON.parse(localStorage.getItem("completedMondaiList") || "[]");
    const savedKasu = JSON.parse(localStorage.getItem("completedKasuList") || "[]");
    const solvedCount = savedMondai.length + savedKasu.length;

    if (solvedCount === 0) {
        // ⑰ 解答履歴空削除
        updateAchievementProgress("achievement_17");
    } else {
        // ⑱ 解答履歴削除
        updateAchievementProgress("achievement_18");

        // ⑲ 全回答後解答履歴削除
        if (solvedCount === allProblemsCount) {
            updateAchievementProgress("achievement_19");
        }
    }
    localStorage.removeItem("completedMondaiList");
    localStorage.removeItem("completedKasuList");
    const normalCards = document.querySelectorAll("#thumbnail-grid .mondai-item.is-completed");
    normalCards.forEach(card => card.classList.remove("is-completed"));
    const kasuCards = document.querySelectorAll("#kasu-thumbnail-grid .mondai-item.is-completed");
    kasuCards.forEach(card => card.classList.remove("is-completed"));
    closeResetModal();
    closeKasuResetModal();
    updateSubjectOnlyAchievements();
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
const defaultHeadline = "チャートの周りで回ること、<span class='smart-phone'>それが受験生。</span>";

function updateHomeHeadline() {
  if (favoriteMemberId !== null && typeof membersData !== "undefined") {
    const favId = parseInt(favoriteMemberId, 10);
    const favMember = membersData.find(member => member.id === favId);
    if (favMember && favMember.beliefProfile) {
      homeHeadline.innerHTML = favMember.beliefProfile;
      return;
    }
  }
  homeHeadline.innerHTML = defaultHeadline;
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
    if(membersData[index].id===7){
      memberPhoto.src = `belief/member${membersData[index].id}.gif`;
    }else{
    memberPhoto.src = `belief/member${membersData[index].id}.png`;
    }
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
    if(membersData[index].id===7){
      memberPhoto.src = `belief/member${membersData[index].id}.gif`;
    }else{
    memberPhoto.src = `belief/member${membersData[index].id}.png`;
    }
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
      checkMemberPinAchievements(currentMemberId);
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

// ==========================================
// 合言葉ポップアップ ＆ 画面遷移制御
// ==========================================

const PASSWORD_MAP = {
  "Okayama": "page-okayama",
  "Math": "page-math",
  "Question": "page-question",
  "Waka": "page-tanka",
  "Load": "page-load",
  "Novel": "page-novel"
};

const passwordOverlay = document.getElementById("password-modal-overlay");
const passwordInput = document.getElementById("password-input");
const passwordMessage = document.getElementById("password-message");
const passwordSubmitBtn = document.getElementById("password-submit-btn");
const passwordCloseBtn = document.getElementById("password-close-btn");

let isPasswordModalOpen = false;

// 1. 合言葉ポップアップを開く
function openPasswordModal() {
    const banner = document.getElementById("spBanner");
    const toggleButten = document.getElementById("bannerToggleBtn");
    if(banner){
        banner.classList.remove("open");
        toggleButten.classList.remove("open");
    }
  if (!passwordOverlay) return;
  isPasswordModalOpen = true;
  document.body.classList.add("modal-open"); // 背景全体のクリックを物理遮断

  passwordInput.value = "";
  passwordMessage.textContent = "合言葉を入力してください";
  passwordMessage.classList.remove("error");
  passwordOverlay.classList.remove("hidden");

  setTimeout(() => {
    passwordInput.focus();
  }, 50);
}

// 2. 合言葉ポップアップを閉じる
function closePasswordModal() {
  if (!passwordOverlay) return;
  isPasswordModalOpen = false;
  document.body.classList.remove("modal-open"); // 背景遮断を解除

  passwordOverlay.classList.add("hidden");
  passwordInput.blur();
}

// 3. 合言葉の判定処理
function checkPassword() {
  const inputVal = passwordInput.value.trim();

  // ① 正解の場合
  if (PASSWORD_MAP[inputVal]) {
    const targetPageId = PASSWORD_MAP[inputVal];

    setCurtainText();
    triggerCurtainTransition(targetPageId, () => {
      closePasswordModal();
      executePageSwitch(targetPageId);
    });

  } else {
    // 不正解の場合の処理
    
    // 1. 特定の単語に含まれているか判定
    const customMatch = CUSTOM_ERROR_MESSAGES.find(item => item[0] === inputVal);

    if (customMatch) {
      // 特定の単語にマッチした場合のメッセージ
      passwordMessage.innerHTML = customMatch[1];
      if(inputVal==="Cookie"){
        achievementsData[1].description=`中心軸をずらしてるのがポイント<div class="achievement-shop-container"><div class="achievement-shop-left"><img src="images/cursor.png" alt="cursor" class="achievement-cursor-img"></div><button id="buyCursorBtn" onclick="buyCursor()" class="achievement-buy-btn">購入<br>10回転</button></div>`;
        achievementsData[4].description=`遠心力って強すぎるとこうなるんだよ<br><br><button id="upgrade-click-btn" class="upgrade-btn" onclick="buyClickUpgrade()">アップグレード<br>100回転<br現在✕1</button>`;
        renderAchievements();
        localStorage.setItem("cookie","start");
      }
      if(inputVal==="Delete"){
          localStorage.clear();
          window.location.href = 'https://proline115.github.io/chartlapcramschool/';
      }

    } else if (/^\d{5}$/.test(inputVal)) {
      // 2. 「特定の単語」以外で、半角数字5桁が入力された場合のエラーメッセージ
      passwordMessage.textContent = "ここではありません。"; 

    } else {
      // 3. 上記のいずれにも該当しない場合（従来のメッセージ）
      passwordMessage.textContent = "そのページは存在しません。";
    }

    // エラー装飾＆フォーカス維持
    passwordMessage.classList.add("error");
    passwordInput.focus();
  }
  // 入力内容が変更（編集・一文字でも消去/追加）されたらメッセージをデフォルトに戻す
  passwordInput.addEventListener('input', () => {
  // メッセージをデフォルトに戻す
  passwordMessage.textContent = "合言葉を入力してください";
  
  // もしエラー用の赤文字スタイルなどを適用している場合は外す
  passwordMessage.classList.remove("error");
});
}


// 4. イベントリスナー登録
if (passwordSubmitBtn) {
  passwordSubmitBtn.addEventListener("click", checkPassword);
}
if (passwordCloseBtn) {
  passwordCloseBtn.addEventListener("click", closePasswordModal);
}
if (passwordInput) {
  passwordInput.addEventListener("keydown", (e) => {
    if (e.key === "Enter") {
      checkPassword();
    }
  });

  // 他の領域をタップしてフォーカスが外れそうになったら自動で復帰
  passwordInput.addEventListener("blur", () => {
    if (isPasswordModalOpen) {
      setTimeout(() => {
        if (isPasswordModalOpen) passwordInput.focus();
      }, 10);
    }
  });
}

// モーダル枠外（背景）をタップした場合のフォーカス復帰
if (passwordOverlay) {
  passwordOverlay.addEventListener("click", (e) => {
    if (e.target === passwordOverlay) {
      passwordInput.focus();
    }
  });
}

// ==========================================
// Math専用PDF表示機能（問題集UI模倣・別処理）
// ==========================================

// Math専用の資料データリスト [PDFパス, 表示タイトル]
const mathDataList = [
  ["secret/数学.pdf", "問題"],
  ["secret/数学答え.pdf","答え"]
];

// 初期化：正方形カードの生成
function initMathGrid() {
  const grid = document.getElementById("math-grid");
  if (!grid) return;

  grid.innerHTML = "";

  mathDataList.forEach((item) => {
    const [pdfUrl, title] = item;

    // カード要素の作成（.mondai-item 風）
    const card = document.createElement("div");
    card.className = "math-item";

    const titleEl = document.createElement("div");
    titleEl.className = "math-title";
    titleEl.innerHTML = title;

    card.appendChild(titleEl);

    // クリックイベント（Math専用モーダルを開く）
    card.onclick = () => openMathPdfModal(pdfUrl, title);

    grid.appendChild(card);
    
  });
  
}

// PDFビューアの開閉処理
function openMathPdfModal(pdfUrl, title) {
  const modal = document.getElementById("math-pdf-modal");
  const titleEl = document.getElementById("math-pdf-title");
  const iframe = document.getElementById("math-pdf-iframe");

  if (modal && iframe) {
    if (titleEl) titleEl.innerHTML = title;
    iframe.src = pdfUrl;

    modal.classList.remove("hidden");
    // 背景のスクロールを一時的に固定
    document.body.style.overflow = "hidden";
  }
}

function closeMathModal() {
  const modal = document.getElementById("math-pdf-modal");
  const iframe = document.getElementById("math-pdf-iframe");

  if (modal) {
    modal.classList.add("hidden");
    if (iframe) iframe.src = ""; // リセット
    document.body.style.overflow = ""; // 背景スクロール解除
  }
}

// DOM読み込み完了時にMath一覧を初期化
document.addEventListener("DOMContentLoaded", () => {
  initMathGrid();
});

// ==========================================
// 答えポップアップ ＆ 処理制御
// ==========================================

// 隠しコード（5桁）と遷移先ページの対応マップ
const answerSecretCodeMap = {
  "98643": "page-secret1",
  "29308": "page-secret2",
  "38421": "page-secret3",
  "01125": "page-secret4",
  "2nf9s": "page-secret5"
};

// ==========================================
// 答えモーダル制御
// ==========================================

const answerOverlay = document.getElementById("answer-modal-overlay");
const answerInput = document.getElementById("answer-input");
const answerMessage = document.getElementById("answer-message");
const answerSubmitBtn = document.getElementById("answer-submit-btn");
const answerCloseBtn = document.getElementById("answer-close-btn");

let isAnswerModalOpen = false;

// 答えモーダルを開く
function openAnswerModal() {
     const banner = document.getElementById("spBanner");
    const toggleButten = document.getElementById("bannerToggleBtn");
    if(banner){
        banner.classList.remove("open");
        toggleButten.classList.remove("open");
    }
  if (!answerOverlay) return;
  isAnswerModalOpen = true;
  document.body.classList.add("modal-open");

  answerInput.value = "";
  answerMessage.textContent = "数字を入力してください";
  answerMessage.classList.remove("error");
  answerOverlay.classList.remove("hidden");

  setTimeout(() => {
    answerInput.focus();
  }, 50);
}

// 答えモーダルを閉じる
function closeAnswerModal() {
  if (!answerOverlay) return;
  isAnswerModalOpen = false;
  document.body.classList.remove("modal-open");

  answerOverlay.classList.add("hidden");
  answerInput.blur();
}

// 答えの判定処理
function checkAnswerCode() {
  const inputVal = answerInput.value.trim();
  // 2. 通常の問題コードの判定 (problemList & kasuProblemList)
  let foundProblem = problemList.find(item => item[3] === inputVal);
  if (!foundProblem && typeof kasuProblemList !== "undefined") {
    foundProblem = kasuProblemList.find(item => item[3] === inputVal);
  }
  // 1. 隠しコード（5桁）の判定
  if(inputVal==="2nf9s"){
    answerMessage.textContent="そういうのやっちゃだめでしょ。何が目的かは知らんけど少なくとも楽しむことを忘れちゃいけない。";
    answerMessage.classList.add("error");
  }else if (answerSecretCodeMap[inputVal]) {
    const targetPageId = answerSecretCodeMap[inputVal];
    answerMessage.textContent="ありがとう";
    answerMessage.classList.add("error");
    setCurtainText();
    triggerCurtainTransition(targetPageId, () => {
     closeAnswerModal();
     executePageSwitch(targetPageId);
   });

  }else if (foundProblem && foundProblem[4]) {
    const ansPdfUrl = foundProblem[4];
    const ansTitle = (foundProblem[1] || "解答") + "（解答）";

    closeAnswerModal();
    openMathPdfModal(ansPdfUrl, ansTitle);
  } else {
    if (answerMessage) {
      answerMessage.textContent = "コードが違います";
      answerMessage.classList.add("error");
    }
    answerInput.focus();
  }
  answerInput.addEventListener('input',()=>{
    answerMessage.textContent="数字を入力してください";
    answerMessage.classList.remove("error");
  });
}

// イベントリスナーの登録（合言葉と全く同じ構成）
if (answerSubmitBtn) {
  answerSubmitBtn.addEventListener("click", checkAnswerCode);
}

if (answerCloseBtn) {
  answerCloseBtn.addEventListener("click", closeAnswerModal);
}

if (answerInput) {
  answerInput.addEventListener("keydown", (e) => {
    if (e.key === "Enter") {
      checkAnswerCode();
    }
  });

  // ボタン操作を妨げないよう、フォーカス復帰に少し猶予を持たせる（合言葉と同等）
  answerInput.addEventListener("blur", () => {
    if (isAnswerModalOpen) {
      setTimeout(() => {
        if (isAnswerModalOpen) answerInput.focus();
      }, 10);
    }
  });
}

if (answerOverlay) {
  answerOverlay.addEventListener("click", (e) => {
    if (e.target === answerOverlay) {
      answerInput.focus();
    }
  });
}

// ==========================================
// 隠し番号ページ 制御ロジック（ローカルストレージ対応版）
// ==========================================

const SECRET_CODE = ['2', '5', '3', '2', '7'];
const STORAGE_KEY = 'discoveredSecretsData';

// 1. ローカルストレージからデータを読み込む関数
function loadDiscoveredSecrets() {
  const savedData = localStorage.getItem(STORAGE_KEY);
  if (savedData) {
    try {
      return JSON.parse(savedData);
    } catch (e) {
      console.error("データの読み込みに失敗しました", e);
    }
  }
  // 保存データがない場合のデフォルト値
  return { 1: false, 2: false, 3: false, 4: false, 5: false };
}

// 2. 発見状態の保持変数（ローカルストレージから復元）
const discoveredSecrets = loadDiscoveredSecrets();

/**
 * 隠しページに到達したときに呼び出す関数
 * @param {number} pageNum - 訪問した隠しページの番号 (1〜5)
 */
function onVisitSecretPage(pageNum) {
  if (discoveredSecrets.hasOwnProperty(pageNum)) {
    // フラグを更新
    discoveredSecrets[pageNum] = true;
    
    // 3. ローカルストレージに最新状態を保存
    localStorage.setItem(STORAGE_KEY, JSON.stringify(discoveredSecrets));
    if(pageNum!==5){
      updateAchievementProgress(`achievement_${pageNum+40}`)
    }
  }

  // 画面表示を更新
  updateAllSecretDisplays();
}

/**
 * すべての隠しページ内にある横線・数字の表示を更新する
 */
function updateAllSecretDisplays() {
  const displayContainers = document.querySelectorAll('.secret-number-display');

  displayContainers.forEach(container => {
    SECRET_CODE.forEach((digit, index) => {
      const targetSpan = container.querySelector(`.digit-val[data-index="${index}"]`);
      const pageNum = index + 1;

      if (targetSpan) {
        if (discoveredSecrets[pageNum]) {
          targetSpan.textContent = digit;
        } else {
          targetSpan.textContent = '';
        }
      }
    });
  });
}

// 4. ページ読み込み完了時（初回ロード時）に保存データを元に表示を初期化
document.addEventListener("DOMContentLoaded", () => {
  updateAllSecretDisplays();
});

// 全45個の実績マスターデータ（画像パス対応版）
const achievementsData = [
  {
    id: "achievement_1",
    image: "achieve/achieve1.png", // ★画像リンク
    title: "ようこそ！",
    conditionText: "このページに辿り着こう<br>あれ？なんで見えてるの？",
    currentVal: 0,
    targetVal: 0,
    description: "ぜひ楽しみ尽くしてね！",
    unlocked: false
  },
  {
    id: "achievement_2",
    image: "achieve/achieve2.png",
    title: "ぐる",
    conditionText: "回る",
    currentVal: 0,
    targetVal: 1,
    description: "中心軸をずらしてるのがポイント",
    unlocked: false
  },
  {
    id: "achievement_3",
    image: "achieve/achieve3.png",
    title: "ぐるぐる",
    conditionText: "さらに、回る",
    currentVal: 0,
    targetVal: 10,
    description: "回転を止めないで",
    unlocked: false
  },
  {
    id: "achievement_4",
    image: "achieve/achieve4.png",
    title: "ぐるぐるぐるぐるぐるぐるぐるぐるぐるぐるぐるぐるぐるぐるぐるぐるぐるぐるぐるぐるぐるぐるぐるぐるぐるぐるぐるぐるぐるぐるぐるぐるぐるぐるぐるぐるぐるぐるぐるぐるぐるぐるぐるぐるぐるぐるぐるぐるぐるぐるぐるぐるぐるぐるぐるぐるぐるぐるぐるぐるぐるぐるぐるぐるぐるぐるぐるぐるぐるぐるぐるぐるぐるぐるぐるぐるぐるぐるぐるぐるぐるぐるぐるぐるぐるぐるぐるぐるぐるぐるぐるぐるぐるぐるぐるぐるぐるぐるぐるぐるぐるぐるぐるぐるぐるぐるぐるぐる",
    conditionText: "永劫回帰する",
    currentVal: 0,
    targetVal: 1000000,
    description: "これこそ私がしたかったこと",
    unlocked: false
  },
  {
    id: "achievement_5",
    image: "achieve/achieve5.png",
    title: "ドッカーン！",
    conditionText: "爆破する",
    currentVal: 0,
    targetVal: 1,
    description: "遠心力って強すぎるとこうなるんだよ",
    unlocked: false
  },
  {
    id: "achievement_6",
    image: "achieve/achieve6.png",
    title: "ニトログリセリン",
    conditionText: "10回爆破する",
    currentVal: 0,
    targetVal: 10,
    description: "そろそろサイトが壊れそう！",
    unlocked: false
  },
  {
    id: "achievement_7",
    image: "achieve/achieve7.png",
    title: "トリニトロトルエン",
    conditionText: "100回爆破する",
    currentVal: 0,
    targetVal: 100,
    description: `さぁ、次は1000回<br><br><button id="toggle-burst-btn" class="toggle-btn active" onclick="toggleBurstSetting()">爆発演出: ON</button>`,
    unlocked: false
  },
  {
    id: "achievement_8",
    image: "achieve/achieve8.png",
    title: "大吉！！",
    conditionText: "大吉を引く",
    currentVal: 0,
    targetVal: 0,
    description: "待ち人はいつくんねん",
    unlocked: false
  },
  {
    id: "achievement_9",
    image: "achieve/achieve9.png",
    title: "国語マニア",
    conditionText: "国語だけ解く",
    currentVal: 0,
    targetVal: 10,
    description: "国語から解いたんか<br>ニッチだねぇ",
    unlocked: false
  },
  {
    id: "achievement_10",
    image: "achieve/achieve10.png",
    title: "数学マニア",
    conditionText: "数学だけ解く",
    currentVal: 0,
    targetVal: 10,
    description: "数学がこれで終わりだと思ったら大間違い<br>(⌒▽⌒)",
    unlocked: false
  },
  {
    id: "achievement_11",
    image: "achieve/achieve11.png",
    title: "英語マニア",
    conditionText: "英語だけ解く",
    currentVal: 0,
    targetVal: 10,
    description: "ほんとにやったの？！<br>流石にあなたはもうネイティブ",
    unlocked: false
  },
  {
    id: "achievement_12",
    image: "achieve/achieve12.png",
    title: "社会マニア",
    conditionText: "社会だけ解く",
    currentVal: 0,
    targetVal: 10,
    description: "よくやった<br>本当にありがとう<br>そんなあなたはぜひ倫理選択においで",
    unlocked: false
  },
  {
    id: "achievement_13",
    image: "achieve/achieve13.png",
    title: "理科マニア",
    conditionText: "理科だけ解く",
    currentVal: 0,
    targetVal: 10,
    description: "あれってほんまに理科っていう括りで良かったん…？",
    unlocked: false
  },
  {
    id: "achievement_14",
    image: "achieve/achieve14.png",
    title: "情報マニア",
    conditionText: "情報だけ解く",
    currentVal: 0,
    targetVal: 10,
    description: "好きこそものの上手なれ",
    unlocked: false
  },
  {
    id: "achievement_15",
    image: "achieve/achieve15.png",
    title: "上位1%ランカー",
    conditionText: "10問解く",
    currentVal: 0,
    targetVal: 10,
    description: "1問でも嬉しいのに10問も!?",
    unlocked: false
  },
  {
    id: "achievement_16",
    image: "achieve/achieve16.png",
    title: "神",
    conditionText: "全て解く",
    currentVal: 0,
    targetVal: 50,
    description: "あぁ…神よ…この地まで来たりし神よ…そなたにあらん限りの祝福を…",
    unlocked: false
  },
  {
    id: "achievement_17",
    image: "achieve/achieve17.png",
    title: "空打ち",
    conditionText: "何もないを消す",
    currentVal: 0,
    targetVal: 0,
    description: "何やってんのｗ",
    unlocked: false
  },
  {
    id: "achievement_18",
    image: "achieve/achieve18.png",
    title: "がんばったのに…",
    conditionText: "解いたを消す",
    currentVal: 0,
    targetVal: 0,
    description: "もう消さないでね！",
    unlocked: false
  },
  {
    id: "achievement_19",
    image: "achieve/achieve19.png",
    title: "色即是空",
    conditionText: "何でもあるを消す",
    currentVal: 0,
    targetVal: 0,
    description: "始めから何もなかったのかもしれない",
    unlocked: false
  },
  {
    id: "achievement_20",
    image: "achieve/achieve20.png",
    title: "問題、カス問題ともに解答履歴が消去されます。本当によろしいですか？",
    conditionText: "消したくないを消す",
    currentVal: 0,
    targetVal: 0,
    description: "取り返しがつく系のゲームで良かったね！",
    unlocked: false
  },
  {
    id: "achievement_21",
    image: "achieve/achieve21.png",
    title: "心からの謝罪",
    conditionText: "謝る",
    currentVal: 0,
    targetVal: 1,
    description: "人は間違いを受け入れた時、一段と美しくなるのです",
    unlocked: false
  },
  {
    id: "achievement_22",
    image: "achieve/achieve22.png",
    title: "上辺だけの謝罪",
    conditionText: "いっぱい謝る",
    currentVal: 0,
    targetVal: 10,
    description: "謝罪のこと流れ作業だと思ってる!?",
    unlocked: false
  },
  {
    id: "achievement_23",
    image: "achieve/achieve23.png",
    title: "狂気の時代",
    conditionText: "謝り倒す",
    currentVal: 0,
    targetVal: 100,
    description: "意外と社会人ってこんなもんなんかもしれない",
    unlocked: false
  },
  {
    id: "achievement_24",
    image: "achieve/achieve24.png",
    title: "あなたを百合の世界へといざないませう",
    conditionText: "メンバー１をお気に入り登録する",
    currentVal: 0,
    targetVal: 0,
    description: "最近ヤンジャンの巻末グラビア見てたら好みの子がいたのでプロフィール見たんですけど、まさかの中3で横転。その子のインスタとXフォローしときました。",
    unlocked: false
  },
  {
    id: "achievement_25",
    image: "achieve/achieve25.png",
    title: "固定感謝！<br>歓迎you!",
    conditionText: "メンバー２をお気に入り登録する",
    currentVal: 0,
    targetVal: 0,
    description: "楽しんでいただけたのなら、これに勝る喜びはありません！ちなみに僕は今最高に楽しいです。感想等々お待ちしております！",
    unlocked: false
  },
  {
    id: "achievement_26",
    image: "achieve/achieve26.png",
    title: "感謝感激雨あられ",
    conditionText: "メンバー３をお気に入り登録する",
    currentVal: 0,
    targetVal: 0,
    description: "わざわざ固定してくれたってことは何か期待したのかな？ぜひ応えようじゃないか！",
    unlocked: false
  },
  {
    id: "achievement_27",
    image: "achieve/achieve27.png",
    title: "人間は万物の尺度である",
    conditionText: "メンバー４をお気に入り登録する",
    currentVal: 0,
    targetVal: 0,
    description: "正しいや間違いの絶対的な基準はない。自分が正しいと思ったものを信じよう。ただし、倫理選択が正しく、政経選択は間違いであることは絶対である。",
    unlocked: false
  },
  {
    id: "achievement_28",
    image: "achieve/achieve28.png",
    title: "ブッディズム・ファースト",
    conditionText: "メンバー５をお気に入り登録する",
    currentVal: 0,
    targetVal: 0,
    description: "人災や天災が蔓延る今日、目先の利益に踊らされるそんなあなたは「中道」を歩きましょう。何事も普通が一番。",
    unlocked: false
  },
  {
    id: "achievement_29",
    image: "achieve/achieve29.png",
    title: "固定してくれてありがとう！！",
    conditionText: "メンバー６をお気に入り登録する",
    currentVal: 0,
    targetVal: 0,
    description: "数学科いきたい。名前は、せしましょうゆです。ラインラント進駐",
    unlocked: false
  },
  {
    id: "achievement_30",
    image: "achieve/achieve30.gif",
    title: "君に幸あれ",
    conditionText: "メンバー７をお気に入り登録する",
    currentVal: 0,
    targetVal: 0,
    description: "たとえ今の運が悪かったとしても、いつか上振れるときは来る。深く考えすぎず、気楽に頑張ろう！",
    unlocked: false
  },
  {
    id: "achievement_31",
    image: "achieve/achieve31.png",
    title: "〜「『鉄壁』はクソの会」へのお誘い〜<br>みなさん、特に英語を使用する受験生の方々は、まず『鉄壁』を焼くことから受験勉強の日々が始まります。一体誰がゴリラのようにレンガを持って机に向かえるであろうか。『鉄壁』を持ってペンを動かしてみても、鍛えられるのは上腕二頭筋くらいのものであろう。皆さんには文明人らしく、『単語帳』を使用して勉強してもらいたいものである。",
    conditionText: "メンバー８をお気に入り登録する",
    currentVal: 0,
    targetVal: 0,
    description: "長すぎてどうすればええねんこれ",
    unlocked: false
  },
  {
    id: "achievement_32",
    image: "achieve/achieve32.png",
    title: "固定してくれてありがfor関数",
    conditionText: "メンバー９をお気に入り登録する",
    currentVal: 0,
    targetVal: 0,
    description: "中2の黒歴史↓<br>https://scratch.mit.edu/users/tehutehu2/<br>おすすめ<br>サザエさん戦Gルート<br>アナゴブラスターの実装に幾億年消費",
    unlocked: false
  },
  {
    id: "achievement_33",
    image: "achieve/achieve33.png",
    title: "キュアトゥンカロン",
    conditionText: "メンバー１０をお気に入り登録する",
    currentVal: 0,
    targetVal: 0,
    description: "ワタシのアマアマトゥンカロンパワーにメロメロなの？ざっこー♡",
    unlocked: false
  },
  {
    id: "achievement_34",
    image: "achieve/achieve34.png",
    title: "アガペー",
    conditionText: "全員固定する",
    currentVal: 0,
    targetVal: 10,
    description: "この浮気者！",
    unlocked: false
  },
  {
    id: "achievement_35",
    image: "achieve/achieve35.png",
    title: "肯定の哲学",
    conditionText: `実績が欲しい？<br><div class="ach35-btn-group"><button type="button" class="ach35-btn ach35-btn-want" onclick="handleAch35Want(event)">欲しい！</button><button type="button" class="ach35-btn ach35-btn-reject" onclick="handleAch35Reject(event)">いらない！</button></div>`,
    currentVal: 0,
    targetVal: 0,
    description: "全然欲しいならあげるよ",
    unlocked: false
  },
  {
    id: "achievement_36",
    image: "achieve/achieve36.png",
    title: "まだまだこれから",
    conditionText: "ゲームクリア",
    currentVal: 0,
    targetVal: 0,
    description: "よく見つけたね！<br>…よくクリアしたね!?<br>[新武器が追加されました]",
    unlocked: false
  },
  {
    id: "achievement_37",
    image: "achieve/achieve37.png",
    title: "俺が止める！",
    conditionText: "侵略数0達成",
    currentVal: 0,
    targetVal: 0,
    description: "このゲーム体当たりが一番強いんだから<br>(その中でもこの画像出せた人はもっとすごいかも？)",
    unlocked: false
  },
  {
    id: "achievement_38",
    image: "achieve/achieve38.png",
    title: "50000に最小の偶素数と最小の奇素数を掛けて最小の完全数で割った数",
    conditionText: "ハイスコア50000達成",
    currentVal: 0,
    targetVal: 50000,
    description: "よくここまでたどり着いた<br>さぁ最終段階へ進もう<br>[新武器が追加されました]",
    unlocked: false
  },
  {
    id: "achievement_39",
    image: "achieve/achieve39.png",
    title: "平和主義",
    conditionText: "敵を一体も倒さずクリア",
    currentVal: 0,
    targetVal: 0,
    description: "実質のオールクリア<br>制作者ですら多分まだここまでたどり着いていない<br>おめでとう、そしてありがとう<br>追記：クリアしました✌",
    unlocked: false
  },
  {
    id: "achievement_40",
    image: "achieve/achieve40.png",
    title: "かくれんぼ（鬼側）",
    conditionText: "隠しページを全て発見する",
    currentVal: 0,
    targetVal: 6,
    description: "制作者の魂胆バレバレじゃないの<br>小説が面白かったら感想送ってね",
    unlocked: false
  },
  {
    id: "achievement_41",
    image: "achieve/achieve41.png",
    title: "①",
    conditionText: "①",
    currentVal: 0,
    targetVal: 0,
    description: "このサイトのコンセプトがだいたいわかってきた？",
    unlocked: false
  },
  {
    id: "achievement_42",
    image: "achieve/achieve42.png",
    title: "②",
    conditionText: "②",
    currentVal: 0,
    targetVal: 0,
    description: "コンプリート欲旺盛な君は、このサイトをすぐにクリアできるでしょう",
    unlocked: false
  },
  {
    id: "achievement_43",
    image: "achieve/achieve43.png",
    title: "③",
    conditionText: "③",
    currentVal: 0,
    targetVal: 0,
    description: "人には優しくしようね！",
    unlocked: false
  },
  {
    id: "achievement_44",
    image: "achieve/achieve44.png",
    title: "④",
    conditionText: "④",
    currentVal: 0,
    targetVal: 0,
    description: "やはり最高難易度<br>格が違う<br>だがそれをクリアしたあなたは⑤もすぐに見つかる。",
    unlocked: false
  },
  {
    id: "achievement_45",
    image: "achieve/achieve45.png",
    title: "実績マニア",
    conditionText: "実績を全て解除する",
    currentVal: 0,
    targetVal: 0,
    description: "(^o^)",
    unlocked: false
  }
];

// ==========================================
// 1. ローカルストレージ（保存・読み込み）
// ==========================================

function loadAchievementsData() {
  const savedData = localStorage.getItem("achievements_save");
  if (savedData) {
    try {
      const parsedData = JSON.parse(savedData);
      achievementsData.forEach(item => {
        if (parsedData[item.id]) {
          item.unlocked = parsedData[item.id].unlocked;
          item.currentVal = parsedData[item.id].currentVal;
        }
      });
    } catch (e) {
      console.error("実績データの読み込みに失敗しました", e);
    }
  }
}

function saveAchievementsData() {
  const dataToSave = {};
  achievementsData.forEach(item => {
    dataToSave[item.id] = {
      unlocked: item.unlocked,
      currentVal: item.currentVal
    };
  });
  localStorage.setItem("achievements_save", JSON.stringify(dataToSave));
}


// ==========================================
// 2. 右下ポップアップ通知（テキストのみ）
// ==========================================

function showAchievementToast(item) {
  const container = document.getElementById("toast-container");
  if (!container) return;

  const toast = document.createElement("div");
  toast.className = "achievement-toast";

  toast.innerHTML = `
    <div class="toast-content">
      <span class="toast-label">実績解除！</span>
      <span class="toast-title">${item.title}</span>
    </div>
  `;

  container.appendChild(toast);

  // 3秒後にアニメーションで消去
  setTimeout(() => {
    toast.classList.add("hide");
    toast.addEventListener("animationend", () => {
      toast.remove();
    });
  }, 3000);
}


// ==========================================
// 3. 実績グリッド画面の描画 (renderAchievements)
// ==========================================

function renderAchievements() {
  const grid = document.getElementById("achievement-grid");
  if (!grid) return;
  
  grid.innerHTML = "";
  let unlockedCount = 0;

  achievementsData.forEach((item) => {
    if (item.unlocked) unlockedCount++;

    const box = document.createElement("div");
    box.className = `achievement-box ${item.unlocked ? 'unlocked' : ''}`;

    let overlayContent = "";
    
    if (item.unlocked) {
      // 達成済み：実績名 と 説明
      overlayContent = `
        <div class="overlay-title">${item.title}</div>
        <div class="overlay-text">${item.description}</div>
      `;
    } else {
      // 未達成：条件文章 と 進捗
      const progressText = item.targetVal > 0 ? `<div class="overlay-progress">${item.currentVal} / ${item.targetVal}</div>` : "";
      overlayContent = `
        <div class="overlay-text">${item.conditionText}</div>
        ${progressText}
      `;
    }

    box.innerHTML = `
      <img src="${item.image}" alt="${item.title}" class="achievement-image">
      <div class="achievement-overlay">
        ${overlayContent}
      </div>
    `;

    // ★【追加】未達成の㉟（achievement_35）の場合、マウスオーバー時に表示をリセット
    if (item.id === "achievement_35" && !item.unlocked) {
      box.addEventListener("mouseenter", () => {
        const overlayText = box.querySelector(".overlay-text");
        if (overlayText) {
          // ボタンが含まれる初期の conditionText にリセット
          overlayText.innerHTML = item.conditionText;
        }
      });
    }

    grid.appendChild(box);
  });

  // カウント更新
  const countEl = document.getElementById("unlocked-count");
  if (countEl) countEl.textContent = unlockedCount;
  updateCursorButtonUI();
  updateUpgradeButtonUI();
}


// ==========================================
// 4. 実績達成判定・更新処理
// ==========================================

function unlockAchievement(item) {
  if (item.unlocked) return;

  item.unlocked = true;
  saveAchievementsData();
  showAchievementToast(item); // 初めて条件を満たした時のみ通知
  renderAchievements();
}

// 引数に skipRender を追加（デフォルトは false）
function updateAchievementProgress(id, value = 1, isAbsolute = false, skipRender = false) {
  const item = achievementsData.find(a => a.id === id);
  
  // すでに達成済みなら何もしない
  if (!item || item.unlocked) return;

  if (isAbsolute) {
    item.currentVal = value;
  } else {
    item.currentVal += value;
  }

  // 判定
  if (item.targetVal === 0 || item.currentVal >= item.targetVal) {
    unlockAchievement(item);
  } else {
    saveAchievementsData();
    
    // ★ skipRender が true でない場合のみ全体を再描画する
    if (!skipRender) {
      renderAchievements();
    }
  }

  if (id !== "achievement_45") {
    setupSecretCode5();
    checkAllAchievementsCompleted();
  }
}


// ==========================================
// 5. 初期化と「Tap to Start」への紐付け
// ==========================================

document.addEventListener("DOMContentLoaded", () => {
  // 1. 保存データの復元と実績画面の初回描画
  if (localStorage.getItem("secret_code_5")) {
    setupSecretCode5();
  }
  if(localStorage.getItem("cookie")){
    achievementsData[1].description=`中心軸をずらしてるのがポイント<div class="achievement-shop-container"><div class="achievement-shop-left"><img src="images/cursor.png" alt="cursor" class="achievement-cursor-img"></div><button id="buyCursorBtn" onclick="buyCursor()" class="achievement-buy-btn">購入<br>10回転</button></div>`;
    achievementsData[4].description=`遠心力って強すぎるとこうなるんだよ<br><br><button id="upgrade-click-btn" class="upgrade-btn" onclick="buyClickUpgrade()">アップグレード<br>100回転<br>現在✕1</button>`;
    localUpgrade();
  }
  loadAchievementsData();
  renderAchievements();
  updateBurstToggleButton();
  updateSubjectOnlyAchievements();
});

/**
 * ロゴ回転系の実績（②・③・④）を一括更新する関数
 */
function updateLogoAchievements() {
    // 1回回転（実績②）
    updateAchievementProgress("achievement_2", 1);
    
    // 10回回転（実績③）
    updateAchievementProgress("achievement_3", 1);
    
    // 1,000,000回回転（実績④）
    updateAchievementProgress("achievement_4", clickPower, false, true);
    const item4 = achievementsData.find(a => a.id === "achievement_4");
    const index4 = achievementsData.findIndex(a => a.id === "achievement_4");
    if (index4 !== -1) {
      const grid = document.getElementById("achievement-grid");
      if (grid && grid.children[index4]) {
        const progressEl = grid.children[index4].querySelector(".overlay-progress");
        if (progressEl) {
          progressEl.textContent = `${item4.currentVal} / ${item4.targetVal}`;
        }
      }
    }
}



/**
 * ロゴ爆破・破裂系の実績（⑤・⑥・⑦）を一括更新する関数
 * ロゴが破裂する処理の内部で呼び出してください
 */
function updateLogoExplodeAchievements() {
    // ロゴ爆破1回目（実績⑤）
    updateAchievementProgress("achievement_5", 1);
    
    // ロゴ爆破10回目（実績⑥）
    updateAchievementProgress("achievement_6", 1);
    
    // ロゴ爆破100回目（実績⑦）
    updateAchievementProgress("achievement_7", 1);
}

/**
 * 実績⑨〜⑭（単一教科のみ解いているか）および⑮⑯の進捗を動的に更新する関数
 */
function updateSubjectOnlyAchievements() {
    // 1. problemList と kasuProblemList から全問題データを統合（将来の問題追加にも自動対応）
    const allProblems = [...problemList, ...kasuProblemList];

    // 2. ローカルストレージからクリア済みのPDF URLを取得
    const savedMondai = JSON.parse(localStorage.getItem("completedMondaiList") || "[]");
    const savedKasu = JSON.parse(localStorage.getItem("completedKasuList") || "[]");
    const completedUrls = [...savedMondai, ...savedKasu];

    // クリア済み問題の教科一覧を抽出
    const solvedSubjects = completedUrls.map(url => {
        const found = allProblems.find(item => item[0] === url);
        return found ? found[2] : null; // [0]がPDF URL, [2]が教科名
    }).filter(Boolean);

    // 3. 各実績の対象教科定義
    const subjectConfig = [
        { id: "achievement_9",  subjects: ["国語"] },
        { id: "achievement_10", subjects: ["数学"] },
        { id: "achievement_11", subjects: ["英語"] },
        { id: "achievement_12", subjects: ["公共", "歴史", "地理"] },
        { id: "achievement_13", subjects: ["理科"] },
        { id: "achievement_14", subjects: ["情報"] }
    ];

    // 4. 各教科実績の目標値（現在の全問題数）と進捗を動的に判定・更新
    subjectConfig.forEach(config => {
        // 現在データ内に存在する「対象教科」の全問題数を取得（問題追加に対応）
        const totalCount = allProblems.filter(p => config.subjects.includes(p[2])).length;
        
        let targetSolvedCount = 0;
        let otherSolvedCount = 0;

        solvedSubjects.forEach(s => {
            if (config.subjects.includes(s)) {
                targetSolvedCount++;
            } else {
                otherSolvedCount++;
            }
        });

        const achievement = achievementsData.find(a => a.id === config.id);
        if (achievement) {
            // 目標値を現在の問題数に自動セット
            achievement.targetVal = totalCount;

            // 他教科が混ざっていれば 0 にリセット、それ以外なら解いた件数を設定
            if (otherSolvedCount > 0) {
                updateAchievementProgress(config.id, 0, true);
            } else {
                updateAchievementProgress(config.id, targetSolvedCount, true);
            }
        }
    });

    // 5. ⑯「問題を全て解く」の目標値も全体の問題数に合わせて自動更新
    const achievement16 = achievementsData.find(a => a.id === "achievement_16");
    if (achievement16) {
        achievement16.targetVal = allProblems.length;
    }

    // ⑮「10問」と ⑯「全問」の進捗を更新
    updateAchievementProgress("achievement_15", completedUrls.length, true);
    updateAchievementProgress("achievement_16", completedUrls.length, true);
}

/**
 * 履歴削除実行時に呼び出す実績判定関数
 */
function checkHistoryDeleteAchievements() {
    // 全問題数の取得（通常問題＋カス問題）
    const totalProblemCount = problemList.length + kasuProblemList.length;

    // 現在クリア済みの問題リストを取得
    const savedMondai = JSON.parse(localStorage.getItem("completedMondaiList") || "[]");
    const savedKasu = JSON.parse(localStorage.getItem("completedKasuList") || "[]");
    const solvedCount = savedMondai.length + savedKasu.length;

    if (solvedCount === 0) {
        // ⑰ 解答履歴空削除
        updateAchievementProgress("achievement_17");
    } else {
        // ⑱ 解答履歴削除（1問以上解いている）
        updateAchievementProgress("achievement_18");

        // ⑲ 全回答後解答履歴削除（全問解いている状態）
        if (solvedCount >= totalProblemCount) {
            updateAchievementProgress("achievement_19");
        }
    }
}

/**
 * 解答履歴さんとのメッセージ選択肢選択時に呼び出す関数
 * @param {string} choiceText - 選択したボタンのテキスト（例: "ごめん", "自我を消す", "お前を消す" など）
 */
function handleHistoryMessageChoice(choiceText) {
    if (choiceText === "自我を消す" || choiceText === "お前を消す") {
        // ⑳ 解答履歴さんの自我を消す
        updateAchievementProgress("achievement_20");
    } else if (choiceText === "ごめん") {
        // ㉑（1回）、㉒（10回）、㉓（100回）謝るカウントを加算
        updateAchievementProgress("achievement_21", 1);
        updateAchievementProgress("achievement_22", 1);
        updateAchievementProgress("achievement_23", 1);
    }
}

/**
 * メンバー固定（★お気に入りオン）時に呼び出す実績判定関数
 * @param {number} memberId - 固定されたメンバーのID (1〜10)
 */
function checkMemberPinAchievements(memberId) {
    if (!memberId || isNaN(memberId)) return;

    // 1. 個別メンバー固定実績（㉔〜㉝）を解除
    // ID 1 -> achievement_24, ID 10 -> achievement_33
    const targetId = `achievement_${23 + memberId}`;
    updateAchievementProgress(targetId);

    // 2. ㉔〜㉝（achievement_24 〜 achievement_33）がすべて解除されているか確認
    let allPinned = 0;
    for (let i = 24; i <= 33; i++) {
        const ach = achievementsData.find(a => a.id === `achievement_${i}`);
        if (ach&&ach.unlocked) {
            allPinned++;
        }
    }

        updateAchievementProgress("achievement_34",allPinned,true);
}

/**
 * ㉟「欲しい！」ボタン押下時
 */
function handleAch35Want(event) {
  if (event) event.stopPropagation(); // イベント伝播防止

  // 実績㉟を解除
  updateAchievementProgress("achievement_35");
}

/**
 * ㉟「いらない！」ボタン押下時
 */
function handleAch35Reject(event) {
  if (event) event.stopPropagation(); // イベント伝播防止

  // ボタンの親要素または overlay-text 全体を「ならあげない」に書き換える
  const container = event.target.closest(".overlay-text") || event.target.parentElement;
  if (container) {
    container.innerHTML = "ならあげない";
  }
}

// 隠しページのターゲットID一覧（6つ）
const SECRET_PAGE_IDS = [
  "page-okayama",
  "page-math",
  "page-question",
  "page-tanka",
  "page-load",
  "page-novel"
];

/**
 * 隠しページの訪問状態をチェック・カウント更新する関数
 * @param {string} targetPageId - 遷移先のページID
 */
function checkSecretPageDiscovery(targetPageId) {
  // 遷移先が隠しページ一覧に含まれていない場合は何もしない
  if (!SECRET_PAGE_IDS.includes(targetPageId)) return;

  // localStorage から訪問済みリストを取得（無ければ空配列）
  let visitedSecrets = JSON.parse(localStorage.getItem("visited_secret_pages") || "[]");

  // 初めて訪れた隠しページの場合のみ追加
  if (!visitedSecrets.includes(targetPageId)) {
    visitedSecrets.push(targetPageId);
    localStorage.setItem("visited_secret_pages", JSON.stringify(visitedSecrets));
  }

  // ★ 発見したユニークなページ数（1〜6）を実績の進捗として送る
  if (typeof updateAchievementProgress === "function") {
    updateAchievementProgress("achievement_40", visitedSecrets.length,true);
  }
}

/**
 * 全実績（achievement_1 ～ achievement_44）が解除されているかチェックし、
 * すべて解除されていれば achievement_45 を解除する関数
 */
function checkAllAchievementsCompleted() {
  // すでに㊺が解除済みなら処理スキップ
  const ach45 = achievementsData.find(a => a.id === "achievement_45");
  if (ach45 && ach45.unlocked) return;

  // 1〜44 までの実績を取得
  const targetAchievements = achievementsData.filter(a => a.id !== "achievement_45");

  // 全て unlocked === true か判定
  const isAllUnlocked = targetAchievements.every(a => a.unlocked === true);

  // 全て解除されていたら㊺を解除！
  if (isAllUnlocked) {
    updateAchievementProgress("achievement_45");
  }
}

// ==========================================
// 隠し数字⑤（全実績解除報酬）管理ロジック
// ==========================================

// 既存の ①～④ の数字一覧（被り防止用）
const EXISTING_SECRET_CODES = ["98643", "29308", "38421", "01125"];

/**
 * ①〜④と被らないランダムな5桁の数字を1つ生成・固定して返す関数
 */
function getOrGenerateSecretCode5() {
  // すでに保存済みの数字があればそれを返す
  let savedCode = localStorage.getItem("secret_code_5");
  if (savedCode) {
    return savedCode;
  }

  // 既存の①〜④と被らない数字が生成されるまでループ
  let newCode = "";
  do {
    // 00000 〜 99999 の5桁の数字（パディング付き）
    newCode = Math.floor(Math.random() * 100000).toString().padStart(5, '0');
  } while (EXISTING_SECRET_CODES.includes(newCode));

  // ローカルストレージに保存
  localStorage.setItem("secret_code_5", newCode);
  return newCode;
}

/**
 * 隠し数字⑤の登録 ＆ ㊺の実績メッセージを上書き更新する関数
 */
function setupSecretCode5() {
  const code5 = getOrGenerateSecretCode5();

  // 1. answerSecretCodeMap 内の⑤の仮コードを生成された数字に上書き
  if (typeof answerSecretCodeMap !== "undefined") {
    // 仮コード（2nf9s等）を削除して、決定したコードで登録
    delete answerSecretCodeMap["2nf9s"]; 
    answerSecretCodeMap[code5] = "page-secret5";
  }

  // 2. achievementsData 内の ㊺ の説明文を置き換え
  if (typeof achievementsData !== "undefined") {
    const ach45 = achievementsData.find(a => a.id === "achievement_45");
    if (ach45) {
      ach45.description = `ここまで辿り着いたあなたへ。まずはありがとう。そしてどこを探してもなかったこれをあなたに。<br>⑤${code5}<br>さぁクリアしよう`;
    }
  }
}

function buyCursor() {
  const cost = getCursorCost();
  const item4 = achievementsData.find(a => a.id === "achievement_4");
  if (item4 && item4.currentVal >= cost) {
    updateAchievementProgress("achievement_4", -cost, false, true);

    // DOM表示更新
    const index4 = achievementsData.findIndex(a => a.id === "achievement_4");
    if (index4 !== -1) {
      const grid = document.getElementById("achievement-grid");
      if (grid && grid.children[index4]) {
        const progressEl = grid.children[index4].querySelector(".overlay-progress");
        if (progressEl) {
          progressEl.textContent = `${item4.currentVal} / ${item4.targetVal}`;
        }
      }
    }

    // ★ 購入成功時に周回カーソルを出現させる
    spawnOrbitCursor();
   updateCursorButtonUI() 
  }
}

// ==========================================
// 複数購入・周回カーソル一括管理システム（高密度版）
// ==========================================

const activeCursors = [];

let globalTime = 0;
let animationFrameId = null;
let lastTimestamp = null;

// ★ 設定の変更部分
const MAX_PER_LAYER = 30;      // 1周あたりの最大カーソル数（12 → 24 に大幅増量）
const BASE_RADIUS = 70;        // 1周目の半径(px)
const RADIUS_STEP = 35;        // 周（レイヤー）ごとの加算半径(px)

/**
 * 新しいカーソルを購入して追加する関数（PC・スマホ両対応版）
 */
function spawnOrbitCursor() {
  const pcLogo = document.querySelector('.pc-banner .logo');
  const spLogo = document.querySelector('.sp-banner .logo');

  // 両方のロゴコンテナの position を relative に確認設定
  if (pcLogo && getComputedStyle(pcLogo).position === 'static') {
    pcLogo.style.position = 'relative';
  }
  if (spLogo && getComputedStyle(spLogo).position === 'static') {
    spLogo.style.position = 'relative';
  }

  // 1. カーソル要素作成ヘルパー関数
  function createCursorElement() {
    const img = document.createElement('img');
    img.className = 'orbit-cursor-item';
    img.src = 'images/cursor.png';
    Object.assign(img.style, {
      position: 'absolute',
      top: '50%',
      left: '50%',
      width: '32px',
      height: '32px',
      pointerEvents: 'none',
      zIndex: '100',
      transition: 'none',
      opacity: '0'
    });
    return img;
  }

  // 2. PC用とスマホ用の両方にDOMを追加
  const pcImg = pcLogo ? createCursorElement() : null;
  const spImg = spLogo ? createCursorElement() : null;

  if (pcImg) pcLogo.appendChild(pcImg);
  if (spImg) spLogo.appendChild(spImg);

  // 3. カーソルデータを配列に追加（pcElementとspElementの両方を保持）
  const newCursor = {
    pcElement: pcImg,
    spElement: spImg,
    // 既存のループ処理が `element` を参照している場合の互換性保持（配列化）
    elements: [pcImg, spImg].filter(Boolean),
    spawnTime: globalTime,
    lastClickTime: -99999,
  };
  activeCursors.push(newCursor);

  // 4. アニメーションループが動いていなければ開始
  if (!animationFrameId) {
    lastTimestamp = performance.now();
    animationFrameId = requestAnimationFrame(updateCursorLoop);
  }
}

// 設定定数
const CURSOR_DELAY = 100;      // ★ 隣のカーソルとの時間間隔 (200ms = 0.2秒で固定)
const CLICK_INTERVAL = 10000;  // ★ 各カーソルが次に叩くまでの周期 (10秒で固定)


function updateCursorLoop(timestamp) {
  const deltaTime = timestamp - lastTimestamp;
  lastTimestamp = timestamp;
  globalTime += deltaTime;

  const totalCount = activeCursors.length;

  activeCursors.forEach((cursor, index) => {
    // --- ① レイヤー（周）とインデックスの計算 ---
    const layer = Math.floor(index / MAX_PER_LAYER);
    const countInThisLayer = Math.min(totalCount - layer * MAX_PER_LAYER, MAX_PER_LAYER);
    const indexInLayer = index % MAX_PER_LAYER;

    // 半径と角度の計算
    const targetRadius = BASE_RADIUS + (layer * RADIUS_STEP);
    const angleStep = 360 / (countInThisLayer === MAX_PER_LAYER ? MAX_PER_LAYER : countInThisLayer);
    const baseAngle = indexInLayer * angleStep;

    // 時間経過による全体の周回運動
    const orbitSpeed = 0.04; 
    const currentAngle = (baseAngle + globalTime * orbitSpeed) % 360;

    // --- ② 各カーソル独立の10秒周期クリック判定 ---
    const cursorOffset = index * CURSOR_DELAY;
    const cursorCycleTime = (globalTime - cursorOffset) % CLICK_INTERVAL;
    
    let isKnocking = false;
    
    if (globalTime >= cursorOffset && cursorCycleTime >= 0 && cursorCycleTime < 120) {
      isKnocking = true;

      // 10秒に1回だけ実行
      if (globalTime - cursor.lastClickTime > 9000) {
        cursor.lastClickTime = globalTime;
        if (typeof rotateLogo === 'function') {
          rotateLogo(null);
        }
      }
    }

    // --- ③ ヌッと登場する演出 (0.5秒) の計算 ---
    const age = globalTime - cursor.spawnTime;
    let spawnScale = 1;
    let radius = targetRadius;
    let currentOpacity = '1';

    if (age < 500) {
      const progress = age / 500;
      spawnScale = progress;
      radius = targetRadius * progress;
      currentOpacity = progress.toString();
    }

    // --- ④ ノック（たたき）演出 ---
    if (isKnocking) {
      radius -= 18; // 叩く時に内側へ引き込む
    }

    // --- ⑤ 位置・回転の適用（PC用・スマホ用の両方のDOM要素に適用） ---
    const rad = (currentAngle * Math.PI) / 180;
    const x = Math.cos(rad) * radius;
    const y = Math.sin(rad) * radius;
    const rotation = currentAngle - 90; // 指先を中心へ固定

    const transformValue = `translate(calc(-50% + ${x}px), calc(-50% + ${y}px)) scale(${spawnScale}) rotate(${rotation}deg)`;

    // ★ ここを修正：cursor.elements（PC用とスマホ用）のすべてにスタイルを適用
    if (cursor.elements && cursor.elements.length > 0) {
      cursor.elements.forEach(el => {
        el.style.opacity = currentOpacity;
        el.style.transform = transformValue;
      });
    } else if (cursor.element) {
      // 過去データや単一要素の場合のフォールバック
      cursor.element.style.opacity = currentOpacity;
      cursor.element.style.transform = transformValue;
    }
  });

  animationFrameId = requestAnimationFrame(updateCursorLoop);
}

// --- 爆発演出 ON/OFF 設定管理 ---
let isBurstEnabled = localStorage.getItem("isBurstEnabled") !== "false";

/**
 * ボタンの見た目（テキストとスタイル）を更新する
 */
function updateBurstToggleButton() {
    const btn = document.getElementById("toggle-burst-btn");
    if (!btn) return;

    if (isBurstEnabled) {
        btn.classList.add("active");
        btn.textContent = "爆発演出: ON";
    } else {
        btn.classList.remove("active");
        btn.textContent = "爆発演出: OFF";
    }
}

/**
 * ボタンが押されたときに切り替える
 */
function toggleBurstSetting() {
    isBurstEnabled = !isBurstEnabled;
    // ★ 修正: setItem で正しく保存
    localStorage.setItem("isBurstEnabled", isBurstEnabled ? "true" : "false");
    updateBurstToggleButton();
}

// ==========================================
// 自動クリック強化（アップグレード）管理
// ==========================================

let upgradeLevel = 1;      // 現在のレベル
let clickPower = 1;        // 1打あたりの倍率 (1, 2, 3...)
let upgradeCost = 100;     // 必要回転数（コスト）
/**
 * ボタンのテキスト表示を3行構成で更新する
 */
function updateUpgradeButtonUI() {
  const btn = document.getElementById("upgrade-click-btn");
  if (!btn) return;
  // innerHTML を使って3行（<br>区切り）で設定
  btn.innerHTML = `アップグレード<br>${upgradeCost}回転<br>現在✕${clickPower}`;
}

/**
 * アップグレード実行処理
 */
function buyClickUpgrade() {
  // ※ここで現在の所持回転数/ポイントのチェックを入れる場合は記載します
  // if (currentRotations < upgradeCost) return;
  const item4 = achievementsData.find(a => a.id === "achievement_4");
  if (item4 && item4.currentVal >= upgradeCost) {
  upgradeLevel++;
  localStorage.setItem("level",upgradeLevel.toString());
  clickPower=Math.ceil(clickPower*1.5);
  localStorage.setItem("power",clickPower.toString());
  updateAchievementProgress("achievement_4", -upgradeCost, false, true);
  // コストの増加（例: 2倍ずつ増加。必要に応じて調整してください）
  upgradeCost = Math.floor(upgradeCost * 2);
  localStorage.setItem("cost", upgradeCost.toString());
  // UI更新と状態保存
  updateUpgradeButtonUI();
    const index4 = achievementsData.findIndex(a => a.id === "achievement_4");
    if (index4 !== -1) {
      const grid = document.getElementById("achievement-grid");
      if (grid && grid.children[index4]) {
        const progressEl = grid.children[index4].querySelector(".overlay-progress");
        if (progressEl) {
          progressEl.textContent = `${item4.currentVal} / ${item4.targetVal}`;
        }
      }
    }
  }
}

function localUpgrade(){
  if(localStorage.getItem("cost")){
    upgradeLevel = Number(localStorage.getItem("level"));
    upgradeCost = Number(localStorage.getItem("cost"));
    clickPower = Number(localStorage.getItem("power"));
    const index4 = achievementsData.findIndex(a => a.id === "achievement_4");
    const item4 = achievementsData.find(a => a.id === "achievement_4");
    if (index4 !== -1) {
      const grid = document.getElementById("achievement-grid");
      if (grid && grid.children[index4]) {
        const progressEl = grid.children[index4].querySelector(".overlay-progress");
        if (progressEl) {
          progressEl.textContent = `${item4.currentVal} / ${item4.targetVal}`;
        }
      }
    }
  }
}

/**
 * 現在のカーソル所持数から購入コストを計算 (一の位切り捨て)
 */
function getCursorCost() {
  const currentCount = Math.floor(activeCursors.length/10); // 現在のカーソル数
  const rawCost = 10 * Math.pow(1.3, currentCount);
  return Math.floor(rawCost / 10) * 10;
}

/**
 * カーソル購入ボタンの表示（テキスト）を更新
 */
function updateCursorButtonUI() {
  const btn = document.getElementById("buyCursorBtn");
  if (!btn) return;

  const currentCost = getCursorCost();
  const currentCount = activeCursors.length;

  // ボタン表示の更新（3行構成など必要に応じて調整してください）
  btn.innerHTML = `購入<br>${currentCost}回転`;
}


// ==========================================
// 隠しクリア判定＆コード入力処理（画面注視のみカウント版）
// ==========================================

let idleTimer = null;
let isIdleClearReady = false; // 放置完了フラグ

// 放置タイマー設定（ミリ秒）
const IDLE_LIMIT = 10000; // 10秒（※30秒にする場合は 30000 に変更してください）
let startTime = 0;       // タイマー開始時刻
let remainingTime = IDLE_LIMIT; // 残り時間

// 放置タイマーの開始
function startIdleTimer() {
  if (!localStorage.getItem("started")) return;
  
  clearTimeout(idleTimer);
  isIdleClearReady = false;
  remainingTime = IDLE_LIMIT;
  
  runTimer(remainingTime);
}

// 実際のタイマー起動処理
function runTimer(duration) {
  startTime = Date.now();
  
  idleTimer = setTimeout(() => {
    isIdleClearReady = true;
    const tapElement = document.getElementById("tapStart");
    if (tapElement) {
      tapElement.style.opacity = "0";

      setTimeout(() => {
        tapElement.innerHTML = "Tap to Clear...?";
        tapElement.style.opacity = "1";
      }, 1500);
    }
  }, duration);
}

// 画面の表示状態（タブのアクティブ/非アクティブ）を監視
document.addEventListener("visibilitychange", () => {
  // すでに放置完了しているか、ゲーム未開始の場合は何もしない
  if (isIdleClearReady || !localStorage.getItem("started")) return;

  if (document.hidden) {
    // ★ タブが裏に回った時：経過時間を計算してタイマーを一時停止
    clearTimeout(idleTimer);
    const elapsedTime = Date.now() - startTime;
    remainingTime = Math.max(0, remainingTime - elapsedTime);
  } else {
    // ★ タブに戻ってきた時：残り時間からタイマーを再開
    if (remainingTime > 0) {
      runTimer(remainingTime);
    }
  }
});

// モーダルを開く
function openClearInputModal() {
  const modal = document.getElementById("clear-input-modal");
    const inputEl = document.getElementById("clear-code-input");
    const errorEl = document.getElementById("clear-error-msg");
  if (modal) {
    modal.classList.remove("hidden");
  }
    if (inputEl) inputEl.value = "";
      if (errorEl) errorEl.textContent = "";
}

// 条件判定（全実績解除 ＆ 隠し数字が全て発見されているか）
function checkClearConditions() {
  // ① 全実績の `unlocked` プロパティをチェック
  if (typeof achievementsData !== "undefined" && Array.isArray(achievementsData)) {
    const allUnlocked = achievementsData.every(item => item.unlocked === true);
    if (!allUnlocked) return false;
  } else {
    return false;
  }

  // ② 隠し数字の全解放チェック (loadDiscoveredSecrets 関数を利用)
  if (typeof loadDiscoveredSecrets === "function") {
    const secrets = loadDiscoveredSecrets();
    // キー 1〜5 がすべて true であるか確認
    const allSecretsFound = [1, 2, 3, 4, 5].every(key => secrets[key] === true);
    if (!allSecretsFound) return false;
  } else {
    return false;
  }

  return true;
}

// コード入力判定と暗転処理
function submitClearCode() {
  const inputEl = document.getElementById("clear-code-input");
  const errorEl = document.getElementById("clear-error-msg");
  if (!inputEl || !errorEl) return;

  const code = inputEl.value.trim();
  const isConditionsMet = checkClearConditions();

  // ① コード判定 ('25327')
  const correctCode = (typeof SECRET_CODE !== "undefined" && Array.isArray(SECRET_CODE))
    ? SECRET_CODE.join('')
    : "25327";

  if (code !== correctCode) {
    errorEl.textContent = "コードが違います";
    return;
  }

  // ② 全実績 ＆ 隠し数字達成判定
  if (!isConditionsMet) {
    errorEl.textContent = "まだ条件を満たしていません…";
    return;
  }

  // --- 条件クリア時 ---
  // モーダルを閉じる
  document.getElementById("clear-input-modal")?.classList.add("hidden");

  // 暗転オーバーレイを起動（2秒で真っ黒にする）
  const overlay = document.getElementById("clear-blackout-overlay");
  if (overlay) {
    overlay.classList.add("active");
  }

  // ★ 変更箇所：暗転完了後（2秒後）にエンディングを開始する
  setTimeout(() => {
    startEndingSequence();
  }, 2000);
}

// 初期化とイベント登録
document.addEventListener("DOMContentLoaded", () => {

  // tapStart 要素のクリック監視
  const tapStartEl = document.getElementById("tapStart");
  if (tapStartEl) {
    // キャプチャフェーズ（true）またはバブリング防止で確実に startSite への伝播を止める
    tapStartEl.addEventListener("click", (e) => {
      if (isIdleClearReady) {
        e.stopPropagation(); // 親要素のクリックイベント発火を防止
        e.stopImmediatePropagation(); // 他の同階層リスナーの発火も防止
        openClearInputModal();
      } else {
        clearTimeout(idleTimer);
      }
    }, true);
  }

  // モーダル内ボタンのイベント
  const submitBtn = document.getElementById("clear-code-submit-btn");
  const cancelBtn = document.getElementById("clear-code-cancel-btn");

if (submitBtn) {
    submitBtn.addEventListener("click", (e) => {
      e.stopPropagation();
      submitClearCode();
    });
    window.addEventListener("keydown", (e) => {
    if (e.key === "Enter") {
      e.stopPropagation();
      submitClearCode();
    }
  });
  }

  if (cancelBtn) {
    cancelBtn.addEventListener("click", (e) => {
      e.stopPropagation();
      document.getElementById("clear-input-modal")?.classList.add("hidden");
      const inputEl = document.getElementById("clear-code-input");
      const errorEl = document.getElementById("clear-error-msg");
      if (inputEl) inputEl.value = "";
      if (errorEl) errorEl.textContent = "";
    });
  }
});

// ==========================================
// スタッフロール用データ管理 (JSリスト)
// ==========================================

// 1. クレジットリスト (枠ごとにオブジェクトで作成)
const staffRollData = [
  {
    sectionTitle: "オープニング画面", // 枠の見出し
    members: [
      { role: "左", name: "さすらいのブッダ" },
      { role: "右", name: "岡山の吉右衛門" },
      { role: "下", name: "ニコメディア" }
    ]
  },
  {
    sectionTitle: "背景写真",
    members: [
      { role: "撮影", name: "プロリン115" },
      { role: "カメラ提供", name: "妹嶌紫" }
    ]
  },
  {
    sectionTitle: "問題制作",
    members: [
      { role: "オハイオの風シリーズ", name: "岡山の吉右衛門" },
      { role: "共テ地理シリーズ", name: "ニコメディア" },
      { role: "the field of「Subjunctive」", name: "アポロ12号" },
      { role: "The Tale of Genji", name: "ニコメディア"},
      { role: "旭川の網代木", name: "岡山の吉右衛門"},
      { role: "永田町の番人", name: "岡山の吉右衛門"},
      { role: "加古川の網代木", name: "共同制作"},
      { role: "奇問の崖", name: "ニコメディア"},
      { role: "共テ情報", name: "ハフマン木の伐採者"},
      { role: "共テ世界史-1", name: "韓流メスガキ"},
      { role: "共テ世界史2以降", name: "(・∀・)"},
      { role: "共テ倫理キリスト教編", name: "白狐ふゆ"},
      { role: "生物基礎", name: "白狐ふゆ"},
      { role: "化学基礎", name: "さすらいのブッダ"},
      { role: "小学生でもできる情報", name: "ハフマン木の伐採者"},
      { role: "単発数学", name: "さすらいのブッダ"},
      { role: "二発数学", name: "ニコメディア"},
      { role: "中学生でもできる情報", name: "ハフマン木の伐採者"},
      { role: "日本史", name: "岡山の吉右衛門"},
      { role: "別府川の網代木", name: "プロリン115"},
      { role: "無知の知", name: "ニコメディア"},
      { role: "倫理テスト", name: "プロリン115"},
      { role: "倫理大問", name: "プロリン115"}
    ]
  },
  {
    sectionTitle: "カス問題制作",
    members: [
      { role: "カス英語", name: "ニコメディア" },
      { role: "カス英語2", name: "アポロ12号" },
      { role: "カス世界史", name: "さすらいのブッダ"},
      { role: "カス政経", name: "ニコメディア"},
      { role: "カス倫理", name: "プロリン115"},
      { role: "カス歴史", name: "ニコメディア"},
      { role: "ザグロスの頂", name: "ニコメディア"},
      { role: "やさしい理系生物", name: "妹嶌紫"}
    ]
  },
  {
    sectionTitle: "実績写真撮影",
    members: [
      { role: "大吉", name: "プロリン115<br>（↳の家の前で寝てた猫）" },
      { role: "岡山の吉右衛門固定", name: "プロリン115" },
      { role: "プロリン115固定", name: "プロリン115<br>（↳が行った海で寝てた猫）" },
      { role: "さすらいのブッダ固定", name: "お友達（ありがとう）" },
      { role: "妹嶌紫固定", name: "妹嶌紫" },
      { role: "隠し数字発見", name: "岡山の吉右衛門" }
    ]
  },
  {
    sectionTitle: "数学",
    members: [
      { role: "制作", name: "後輩（ありがとう）" },
      { role: "頑張って解いた人", name: "プロリン115" },
      { role: "頑張って解いた人", name: "さすらいのブッダ" },
      { role: "頑張って解いた人", name: "妹嶌紫" },
      { role: "頑張って解いた人", name: "ニコメディア" },
      { role: "先に帰って解かなかった人", name: "岡山の吉右衛門" }
    ]
  },
  {
    sectionTitle: "和歌",
    members: [
      { role: "詠み手", name: "岡山の吉右衛門" },
      { role: "詠み手", name: "アポロ12号" },
      { role: "詠み手", name: "さすらいのブッダ" },
      { role: "詠み手", name: "ニコメディア" },
      { role: "批評", name: "プロリン115" }
    ]
  },
  {
    sectionTitle: "小説",
    members: [
      { role: "原案", name: "アポロ12号" },
      { role: "タイトル", name: "プロリン115" },
      { role: "執筆", name: "白狐ふゆ" }
    ]
  },
  {
    sectionTitle: "岡山写真館",
    members: [
      { role: "東京写真", name: "プロリン115" },
      { role: "京都写真", name: "岡山の吉右衛門" },
      { role: "岡山写真送ってくれない人", name: "岡山の吉右衛門" }
    ]
  },
  {
    sectionTitle: "フリー画像出典",
    members: [
      { role: "ページアイコン", name: "human pictogram 2.0" },
      { role: "宇宙船・宇宙人", name: "Dotown" },
      { role: "カーソル", name: "コトノハワークス" },
      { role: "その他", name: "ウィキペディアコモンズ" }
    ]
  },
  {
    sectionTitle: "フリーBGM出典",
    members: [
      { role: "エンディング", name: "甘茶の音楽工房" }
    ]
  },
  {
    sectionTitle: "Special Thanks",
    members: [
      { role: "ここまで遊んでくれた", name: "あなた" }
    ]
  }
];

// 2. 回想画像リスト (※画像パスを適宜変更してください)
const memoryImages = [
  "memory/memory1.png",
  "memory/memory2.png",
  "memory/memory3.png",
  "memory/memory4.png",
  "memory/memory5.png",
  "memory/memory6.png",
  "memory/memory7.png",
  "memory/memory8.png",
  "memory/memory9.png",
  "memory/memory10.png",
  "memory/memory11.png",
  "memory/memory12.png",
  "memory/memory13.png",
  "memory/memory14.png",
  "memory/memory15.png",
  "memory/memory16.png",
  "memory/memory17.png"
];

// ==========================================
// エンディング＆スタッフロール構築処理
// ==========================================

// JS配列からHTML要素を動的生成
function buildStaffRollDOM() {
  const container = document.getElementById("staff-roll-content");
  if (!container) return;

  container.innerHTML = "";

  staffRollData.forEach(section => {
    const sectionEl = document.createElement("div");
    sectionEl.className = "credit-section";

    const titleEl = document.createElement("h2");
    titleEl.className = "section-title";
    titleEl.textContent = section.sectionTitle;
    sectionEl.appendChild(titleEl);

    section.members.forEach(member => {
      const rowEl = document.createElement("div");
      rowEl.className = "credit-row";

      const roleEl = document.createElement("span");
      roleEl.className = "role";
      roleEl.textContent = member.role;

      const nameEl = document.createElement("span");
      nameEl.className = "name";
      nameEl.innerHTML = member.name;

      rowEl.appendChild(roleEl);
      rowEl.appendChild(nameEl);
      sectionEl.appendChild(rowEl);
    });

    container.appendChild(sectionEl);
  });
}

let memoryImageIndex = 0;
let memoryImageInterval = null;

// 左側の思い出画像フェードイン・アウト (89秒間でピッタリ1周する自動計算)
function startMemoryImageSlideshow() {
  const imgEl = document.getElementById("memory-image");
  if (!imgEl || memoryImages.length === 0) return;

  // 1. 二重起動防止：既存のタイマーをクリア
  if (memoryImageInterval) {
    clearInterval(memoryImageInterval);
  }

  // 2. 89秒（89000ms）を画像枚数で割って、1枚あたりの表示時間を自動計算
  const totalDuration = 89000; // BGMの長さ（ミリ秒）
  const displayTimePerImage = totalDuration / memoryImages.length;

  // 3. 初期化（最初の画像を表示）
  memoryImageIndex = 0;
  imgEl.src = memoryImages[0];
  imgEl.classList.add("show");

  // 4. 計算された時間ごとに次の画像へフェード切替
  memoryImageInterval = setInterval(() => {
    imgEl.classList.remove("show"); // 一度フェードアウト

    setTimeout(() => {
      // 次の画像へ（1周したら最後で止まる、またはループ）
      memoryImageIndex = (memoryImageIndex + 1) % memoryImages.length;
      imgEl.src = memoryImages[memoryImageIndex];
      imgEl.classList.add("show"); // フェードイン
    }, 1200); // CSSのフェード時間 (1.2秒)
  }, displayTimePerImage);
}

const bgm = document.getElementById("ending-bgm");
// エンディング本編開始
function startEndingSequence() {
  const endingContainer = document.getElementById("ending-container");
  
  const rollContent = document.getElementById("staff-roll-content");

  if (!endingContainer) return;

  // スタッフロール組み立て
  buildStaffRollDOM();

  // エンディング画面表示
  endingContainer.classList.remove("hidden");
  setTimeout(() => endingContainer.classList.add("active"), 50);

  // BGM再生＆終了時イベント登録
  if (bgm) {
    bgm.currentTime = 0;
    bgm.play().catch(e => console.log("BGM再生エラー:", e));

    // ★ 89秒のBGM終了時に全画面一枚絵ポップアップを表示
    bgm.addEventListener("ended", () => {
      showFinalPopup();
    }, { once: true });
  }

  // 右側の自動スクロール開始 (89秒間)
  if (rollContent) {
    rollContent.classList.add("scrolling");
  }

  // 左側の回想スライドショー開始
  startMemoryImageSlideshow();
    initMinigame();
}

// 最終ポップアップ表示
function showFinalPopup() {
  isGameOver = true;
  
  const finalPopup = document.getElementById("final-popup");
  const letterModal = document.getElementById('letter-modal');
  const closeBtn = document.getElementById('close-letter-btn');

  // メモリ画像ループの停止
  if (memoryImageInterval) {
    clearInterval(memoryImageInterval);
  }

  // 1. Thank youポップアップ（final-popup）の表示
  if (finalPopup) {
    finalPopup.classList.remove("hidden");
    // リフロー（再描画）を促してアニメーションを確実に適用
    void finalPopup.offsetWidth; 
    finalPopup.classList.add("active");
  }

  // 2. 画面タップで手紙を開くイベントの設定
  if (letterModal) {
    const openLetterHandler = (e) => {
      // 閉じるボタンを押した場合は手紙を再オープンしない
      if (closeBtn && (e.target === closeBtn || closeBtn.contains(e.target))) {
        return;
      }
      // 手紙ポップアップを表示
      letterModal.classList.add('active');
    };

    // 誤タップ防止のため0.5秒後にタップイベントを登録
    setTimeout(() => {
      window.addEventListener('click', openLetterHandler);
      window.addEventListener('touchstart', openLetterHandler, { passive: true });
    }, 500);

    // 3. 閉じるボタンの処理
    if (closeBtn) {
      closeBtn.addEventListener('click', (e) => {
        e.stopPropagation(); // 画面タップイベントへの伝播を防止
        letterModal.classList.remove('active');
      });
    }
  }
}
    


// ==========================================
// ミニゲーム（ランアクション）物理計算版
// ==========================================

const enemyImages = [
  'ending/enemy1.png',
  'ending/enemy2.png',
  'ending/enemy3.png',
  'ending/enemy4.png',
  'ending/enemy5.png',
  'ending/enemy6.png',
  'ending/enemy7.png',
  'ending/enemy8.png',
  'ending/enemy9.png',
  'ending/enemy10.png',
  'ending/enemy11.gif',
  'ending/enemy12.png',
  'ending/enemy13.png',
  'ending/enemy14.png',
  'ending/enemy15.png',
  'ending/enemy16.png',
  'ending/enemy17.png',
  'ending/enemy18.png',
  'ending/enemy19.png',
  'ending/enemy20.png'
];

let isGameOver = false;
let gameLoopInterval = null;
let enemySpawnTimeout = null;

// 物理パラメータ（ジャンプ・重力）
let posY = 0;              // プレイヤーの高さ (bottom)
let velocityY = 0;         // プレイヤーの垂直速度
const gravity = -0.4;      // 重力加速度 (毎フレーム速度を減速/加速)
const jumpInitialVelocity = 9; // ジャンプ初速
let isGrounded = true;     // 接地フラグ

// 初期化・キー登録
function initMinigame() {
  isGameOver = false;
  posY = 0;
  velocityY = 0;
  isGrounded = true;
  currentEnemySpeed = 6;
  currentMinDelay = 1000;
  currentMaxDelay = 1500;
  window.addEventListener('keydown', handleKeyPress);
    window.addEventListener('click', handleTap);
  window.addEventListener('touchstart', handleTap, { passive: false });

    // 1. 既に動いているタイマーやインターバルを完全にクリア
  if (gameLoopInterval) clearInterval(gameLoopInterval);
  if (enemySpawnTimeout) clearTimeout(enemySpawnTimeout);

  // 2. 画面に残っている敵要素（.game-enemy）をすべて削除して初期化
  const existingEnemies = document.querySelectorAll('.game-enemy');
  existingEnemies.forEach(enemy => enemy.remove());

  // 3. プレイヤーの表示状態・アニメーションのリセット
  const player = document.getElementById('player');
  if (player) {
    player.classList.remove('pop', 'jumping');
    player.style.bottom = '0px';
  }

    // ★ BGMの再生時間を監視するイベントを登録
  if (bgm) {
    bgm.removeEventListener('timeupdate', checkBgmTime);
    bgm.addEventListener('timeupdate', checkBgmTime);
  }
  
  scheduleNextEnemy();
  
  // メインループ (60fps相当)
  if (gameLoopInterval) clearInterval(gameLoopInterval);
  gameLoopInterval = setInterval(updateGame, 1000 / 60);
}

function handleKeyPress(e) {
  if (isGameOver) return;
  
  if (e.code === 'Space' || e.code === 'ArrowUp' || e.key === ' ' || e.key === 'ArrowUp') {
    e.preventDefault();
    jump();
  }
    
}
// 画面タップ・クリック時の処理
function handleTap(e) {
  if (isGameOver) return;
  
  // スマホでタップした時のデフォルト挙動（画面ダブルタップ拡大など）を防止
  if (e.type === 'touchstart') {
    e.preventDefault();
  }

  jump();
}

// ジャンプ発動（初速を与える）
function jump() {
  if (!isGrounded) return; // 空中での再ジャンプ防止
  
  velocityY = jumpInitialVelocity;
  isGrounded = false;
}

// メイン更新ループ（重力計算・位置更新・当たり判定）
function updateGame() {
  if (isGameOver) return;

  const player = document.getElementById('player');
  if (!player) return;

  // --- 1. 物理運動計算（重力加速度） ---
  if (!isGrounded) {
    posY += velocityY;       // 速度ぶん位置を移動
    velocityY += gravity;    // 速度に重力を加算 (上昇時は減速、下降時は加速)

    // 着地判定
    if (posY <= 0) {
      posY = 0;
      velocityY = 0;
      isGrounded = true;
    }

    player.style.bottom = `${posY}px`;
  }

  // --- 2. 当たり判定 ---
  const playerRect = player.getBoundingClientRect();
  const enemies = document.querySelectorAll('.game-enemy');

  enemies.forEach(enemy => {
    const enemyRect = enemy.getBoundingClientRect();

    const padding = 6; // 当たり判定の余白調整
    const isHit = !(
      playerRect.right - padding < enemyRect.left + padding ||
      playerRect.left + padding > enemyRect.right - padding ||
      playerRect.bottom - padding < enemyRect.top + padding ||
      playerRect.top + padding > enemyRect.bottom - padding
    );

    if (isHit) {
      triggerGameOver(player);
    }
  });
}

// スピード調整用の変数
let currentEnemySpeed = 6;      // 初期移動スピード
const maxEnemySpeed = 12;       // 最大移動スピード（上限）

let currentMinDelay = 1300;     // 出現間隔の最小値（初期1.0秒）
let currentMaxDelay = 2500;     // 出現間隔の変動幅（初期1.0秒 + 1.5秒 = 2.5秒）
const minDelayLimit = 800;      // 出現間隔の限界値（これ以上は狭まらない）

let probability = 0.6;
if(localStorage.getItem("clear")){
    probability = 0;
}
//==========================================
// 障害物の生成（徐々に加速）
// ==========================================
function spawnEnemy() {
  if (isGameOver) return;

  const gameArea = document.getElementById('game-area');
  if (!gameArea) return;

  const enemy = document.createElement('div');
  enemy.classList.add('game-enemy');

  const randomImg = enemyImages[Math.floor(Math.random() * enemyImages.length)];
  enemy.style.backgroundImage = `url('${randomImg}')`;

  const isGround = Math.random() < probability;
  enemy.classList.add(isGround ? 'ground' : 'air');

  enemy.style.left = '100%';
  gameArea.appendChild(enemy);

  let enemyPos = gameArea.clientWidth;

  // ★ 現在のスピードで移動を開始
  const speed = currentEnemySpeed;

  const moveInterval = setInterval(() => {
    if (isGameOver) {
      clearInterval(moveInterval);
      enemy.remove();
      return;
    }

    enemyPos -= speed;
    enemy.style.left = `${enemyPos}px`;

    if (enemyPos < -60) {
      clearInterval(moveInterval);
      enemy.remove();
    }
  }, 1000 / 60);

  // ★ 敵が1匹出るたびに、次回以降のスピードをほんの少しだけアップさせる
  if (currentEnemySpeed < maxEnemySpeed) {
    currentEnemySpeed += 0.15; // 1匹ごとに0.15ずつスピードアップ
  }

  // ★ 出現間隔もほんの少し短くする
  if (currentMinDelay > minDelayLimit) {
    currentMinDelay -= 20; // 最小待機時間を短縮
  }

  scheduleNextEnemy();
}




// ==========================================
// 次の出現タイミング設定
// ==========================================
function scheduleNextEnemy() {
  if (isGameOver) return;

  // ★ 徐々に短くなる間隔でランダム生成
  const randomDelay = Math.floor(Math.random() * currentMaxDelay) + currentMinDelay;
  enemySpawnTimeout = setTimeout(spawnEnemy, randomDelay);
}

// 衝突・爆発（巨大化破裂 ➔ トップへ遷移）
function triggerGameOver(player) {
  isGameOver = true;

  clearInterval(gameLoopInterval);
  clearTimeout(enemySpawnTimeout);
  window.removeEventListener('keydown', handleKeyPress);

  // 1. 大迫力の破裂演出（画面を覆う規模）
  player.classList.add('pop');

  // 2. 破裂アニメーション完了後にトップへ遷移
  setTimeout(() => {
    window.location.href = 'https://proline115.github.io/chartlapcramschool/';
  }, 350);
}

function checkBgmTime() {
  if (isGameOver || isExiting || !bgm) return;

  // BGM終了の4秒前に到達したら退場シークエンスを開始
  const timeLeft = bgm.duration - bgm.currentTime;
  if (timeLeft <= 4.0 && bgm.duration > 0) {
    startExitSequence();
  }
}
let isExiting = false;
// ★ 段階的な退場シークエンス
function startExitSequence() {
  isExiting = true;

  // 1. 敵の新規生成をストップ
  clearTimeout(enemySpawnTimeout);


  // 3. 画面上に残っている敵が画面左外へ消え去るまで約1.5秒待つ
  setTimeout(() => {
    if (isGameOver) return; // 待機中に万が一ゲームオーバーになっていたら中断

    const player = document.getElementById('player');
    if (player) {
      // ジャンプ中なら強制着地
      player.classList.remove('jumping');
      player.style.bottom = '0px';
        // 2. プレイヤーの操作入力を無効化（誤操作・事故防止）
  window.removeEventListener('keydown', handleKeyPress);
  window.removeEventListener('click', handleTap);
  window.removeEventListener('touchstart', handleTap);

      // 4. 安全が確認できてから、ゆっくり右へ走り去る
      player.classList.add('exit-right');
        if(localStorage.getItem("clear")){
            localStorage.removeItem("clear");
        }else{
      localStorage.setItem("clear","Congratulation!");
        }
    }
  }, 1500); // 敵が通り過ぎるのを待つ時間（ミリ秒）
}

function toggleSpBanner() {
  const spBanner = document.getElementById("spBanner");
  const toggleBtn = document.getElementById("bannerToggleBtn");

  if (spBanner && toggleBtn) {
    spBanner.classList.toggle("open");
    toggleBtn.classList.toggle("open");
  }
}

// 全てのアセット（画像・スタイルなど）の読み込みが完了した時の処理
window.addEventListener("load", () => {
  const loadingOverlay = document.getElementById("loading-overlay");
  init();
  if (loadingOverlay) {
    // 1. ローディング画面をふんわり消す
    loadingOverlay.style.opacity = "0";
    
    // 2. フェードアウト完了後に要素を完全に消去し、タイマーを開始する
    setTimeout(() => {
      loadingOverlay.style.display = "none";
      
      // ★ ロードが完了したこのタイミングで放置タイマーを開始
      startIdleTimer();
    }, 500);
  } else {
    startIdleTimer();
  }
});
