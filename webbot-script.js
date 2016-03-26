var submitBtn = document.chatForm.submitBtn;

// dt要素（ユーザー, Makibotともに）出す関数
function showDt(name) {
  var dt = document.createElement("dt");
  dt.setAttribute("class", "js-user-dt");
  dt.textContent = name;
  dt.innterText = name;
  document.getElementById('chat').appendChild(dt);
}

// ユーザーテキスト出す関数
function showUserText() {
  showDt("user");

  var chatText = document.chatForm.chatText.value;
  console.log(chatText);
  var dd = document.createElement("dd");
  dd.setAttribute("class", "js-user-dd");
  dd.textContent = chatText;
  dd.innterText = chatText;
  document.getElementById('chat').appendChild(dd);
}

// ヘルプの変数
  var helpText = "<code>しょうがないわね、ヘルプを教えるわ。<br>＝＝＝＝＝＝＝<br>ラブライブっぽい単語 -> それっぽい返答をします<br>gif -> gifアニメを貼ってくれます<br>それ以外 -> 適当な返事をします</code>";

// Makibotのテキスト出す関数
function showBotText() {
    showDt("makibot");

    // 既にidが振られていたらidを消す
    if(document.getElementById("stream")) {
        document.getElementById("stream").removeAttribute("id");
    }

    var chatText = document.chatForm.chatText.value;
    var dd = document.createElement("dd");
    dd.setAttribute("class", "js-bot-dd");
    dd.setAttribute("id", "stream");

    // ユーザーからの文言が何かにマッチするかどうか
    chatText = document.chatForm.chatText.value;
    switch (true) {
        case /(眠|ねむ)い/i.test(chatText):
            var result = Math.floor(Math.random() * serifNemui.length);
            var BotSerif = serifNemui[result];
            break;
        case /ありがとう|dmdm|AZS/i.test(chatText):
            var result = Math.floor(Math.random() * serifAzs.length);
            var BotSerif = serifAzs[result];
            break;
        case /良(い|さ)/i.test(chatText):
            var result = Math.floor(Math.random() * serifGood.length);
            var BotSerif = serifGood[result];
            break;
        case /疲れ/i.test(chatText):
            var result = Math.floor(Math.random() * serifTired.length);
            var BotSerif = serifTired[result];
            break;
        case /こんにちは|hello/i.test(chatText):
            var result = Math.floor(Math.random() * serifHello.length);
            var BotSerif = serifHello[result];
            break;
        case /まき|マキ|maki|真姫|マッキー/i.test(chatText):
            var result = Math.floor(Math.random() * serifMaki.length);
            var BotSerif = serifMaki[result];
            break;
        case /(お腹|おなか)すいた|(腹|はら)(減|へ)/i.test(chatText):
            var result = Math.floor(Math.random() * serifHungry.length);
            var BotSerif = serifHungry[result];
            break;
        case /にこ|矢澤/i.test(chatText):
            var result = Math.floor(Math.random() * serifYazawa.length);
            var BotSerif = serifYazawa[result];
            break;
        case /穂乃果|ほのか/i.test(chatText):
            var result = Math.floor(Math.random() * serifHonoka.length);
            var BotSerif = serifHonoka[result];
            break;
        case /ことり/i.test(chatText):
            var result = Math.floor(Math.random() * serifKotori.length);
            var BotSerif = serifKotori[result];
            break;
        case /ことり/i.test(chatText):
            var result = Math.floor(Math.random() * serifKotori.length);
            var BotSerif = serifKotori[result];
            break;
        case /うみ|海未/i.test(chatText):
            var result = Math.floor(Math.random() * serifUmi.length);
            var BotSerif = serifUmi[result];
            break;
        case /Pile/i.test(chatText):
            var result = Math.floor(Math.random() * serifPile.length);
            var BotSerif = serifPile[result];
            break;
        case /アイドル/i.test(chatText):
            var result = Math.floor(Math.random() * serifIdol.length);
            var BotSerif = serifIdol[result];
            break;
        case /help/i.test(chatText):
            var helpDd = document.createElement("dd");
            helpDd.setAttribute("class", "js-bot-helpdd");
            helpDd.innerHTML = helpText;
            document.getElementById('chat').appendChild(helpDd);
            break;
        case /gif/i.test(chatText):
            var BotSerif = "はい🌟";

            var result = Math.floor(Math.random() * serifGif.length);
            var randomGif = serifGif[result];
            var gifDd = document.createElement("dd");
            gifDd.setAttribute("class", "js-bot-gifdd");
            gifDd.innerHTML = "<img src='" + randomGif + "'>";
            document.getElementById('chat').appendChild(gifDd);
            break;
        default:
            console.log("case default");
            var result = Math.floor(Math.random() * serifOthers.length);
            var BotSerif = serifOthers[result];
            break;
    }

    // セリフをチャットに表示
    dd.textContent = BotSerif;
    dd.innterText = BotSerif;
    document.getElementById('chat').appendChild(dd);

    // テキストエリアをカラにする
    document.chatForm.chatText.value = "";

    // 発言位置までスクロールする
    var scrollElement = document.getElementById( "stream" ) ;
    var rect = scrollElement.getBoundingClientRect() ;
    var positionX = rect.left + window.pageXOffset ;  // 要素のX座標
    var positionY = rect.top + window.pageYOffset ; // 要素のY座標
    window.scrollTo( positionX, positionY );
}

//EnterキーならformをSubmitする
function go(){
  if(window.event.keyCode==13){
    showUserText();
    setTimeout(showBotText,100);
  }
}

// 一応submitボタン押したときにもなんかする
submitBtn.addEventListener("click", showUserText, false);
submitBtn.addEventListener("click", function() {
    setTimeout(showBotText,100);
});


// Makibotのセリフ
var serifOthers = [
    "＜これからだよ〜ッ",
    "24日の夜におとなしく寝てたら、枕元に私がいるかもよ💝",
    "そんなわけあるか〜！",
    "でも、こんなことでは真姫は諦めません！",
    "凛だってしたことな〜いにゃ",
    "お〜い💖 私達の大切な、大大大〜好きのダーリン💖 起きてくださ〜い💖💖💖",
    "エリーが勉強好きなんて聞いたことないけど？",
    "💖💖KiRa-KiRa💖💖",
    "みんなもおいでよ〜〜ッ（♥ω♥）",
    "いいから大人しく着替えて。",
    "希ちゃんの占いなんて当てにならないわよ",
    "今日はあなたを囲んで、みんなで一緒に勉強会です",
    "もう、お肉お肉うるさいわよ穂乃果",
    "かわいいだけじゃアイドルだってやっていけないのよ！",
    "これっきり…かもね",
    "はあ！？ なんで私が！",
    "べ、別にいいけど‼︎"
];

var serifNemui = [
    "お〜い💖 私達の大切な、大大大〜好きのダーリン💖 起きてくださ〜い💖💖💖",
    "ねむいちゅん",
    "眠かったら、寝ちゃったほうがいいんじゃな〜い？？",
    "海未の寝言なんてどうでもいいじゃない"
];

var serifMaki = [
    "マキ、15歳♡　あ、こう見えて彼氏いない歴17年よ！",
    "な、なによぉ",
    "私服もかわいいマッキーよ",
    "なりきりbotじゃないんで!!!"
];

var serifHello = [
    "はい、こんにちは🌟",
    "こんにちは、ふふ💖",
    "ようこそ！",
    "こんにちは💖💖 元気？"
];

var serifAzs = [
    "ありがとう💖 ふふ💖💖💖",
    "よかったわね🌟"
]

var serifGood = [
    "ええやん💖",
    "良いんじゃないかしら",
    "へえ、なかなかね",
    "おけおけおっけ〜〜✨",
    "わ、私も前から良いな〜って思ってたけど！",
    "奇遇ね、私もそう思う"
]

var serifTired = [
    "お疲れさま💕",
    "もう、体力ないんだから",
    "ファイトだよっ",
    "しっかりしなさいよ、もう",
    "(・8・) おやつにするぞ!!!!!!!"
]

var serifHungry = [
    "(・8・) おやつにするぞ!!!!!!!",
    "もう、お肉お肉うるさいわよ穂乃果",
    "カツサンドよッ http://24.media.tumblr.com/741abc196d0d14f1d099cd4e86a81bbf/tumblr_n6js6sodGO1r54lc0o1_500.gif",
    "凛、今日放課後ご飯食べに行かない？",
    "どうしても手料理を食べさせたい相手がいる、とか…",
    "秋と言ったら、なんといっても新米の季節です🍚"
]

var serifLovelive = [
    "今はラブライブに集中💖",
    "にこちゃんはラブライブどうするの",
    "そしてアキバでのライブは大成功。目指せラブライブ出場♡",
    "ラブライブ　うっちーえみつん　 Pile 様（五七五）"
]

var serifYazawa = [
    "おい！お前ら！ニコニーするぞ！！！１",
    "にっこにっこに〜つってね",
    "ちょっとあんたたち！！真姫ちゃんはにこと付き合ってるのよ！！",
    "に、にこ、にこちゃんが、にこちゃん、",
    "に、っっっにこっっっにこちゃん！",
    "やっぱりニコニーいじりは楽しいっ♡",
    "やはりニコマキは真実！",
    "にこちゃんたちのいないμ’sなんて嫌なの！",
    "ほらにこちゃんバンザイして",
    "にこちゃんはラブライブどうするの",
    "………（あっ！ にこちゃんだ！）"
]

var serifHonoka = [
    "こまったザウルス",
    "ほの♡",
    "（こと）（ほの）＼まき♡／",
    "もう、お肉お肉うるさいわよ穂乃果",
    "そりゃそうだよね、いきなり廃校なんて"
]

var serifKotori = [
    "♡♥♡♥♡まかまーかまかろん♡♥♡♥♡",
    "(・8・) おやつにするぞ!!!!!!!",
    "ことりちゃんそんな子だったんだァ",
    "ぱたぱたぱたぱた♡♡♡",
    "会える日を、ずっとずっと楽しみに待ってたの♡ ことりの全部を見てください♡",
    "うみちゃん♡ ほのかちゃん♡",
    "2期ではことりともっと仲良くなりたいわね",
    "ことりちゃん、ごめん！ 私、ことりちゃんと一緒に飲みたいの！"
]

var serifUmi = [
    "脱いで、うみちゃん。",
    "海未、歌詞できた？",
    "せっかくなんだし海未と二人で何処かに行きたいわね",
    "うみちゃん♡ ほのかちゃん♡",
    "うみまきも悪くないわね"
]

var serifPile = [
    "はーい西木野真姫役Pileでーす♡",
    "みんな私のこと泣かないと思ってるでしょ"
]

var serifIdol = [
    "今日も今日とてアイドル活動♡",
    "アイドル活動を通じて自分達の通う学校を盛り上げようと頑張る9人の少女達の物語、それが〜♡",
    "アイドルには芸術的センスも要求されます"
]

var serifGif = [
  "http://37.media.tumblr.com/6ecdbb327dd232eb564fe4250a5a3fd4/tumblr_n7ltynJY161r3rdh2o1_500.gif",
  "http://37.media.tumblr.com/08ade75c57c1bfca733990a429991fba/tumblr_n7n5dugT6p1r3fop8o1_500.gif",
  "http://37.media.tumblr.com/fb30fa6701fc290d98dfbd4da5609893/tumblr_n6vfljkHaK1qzd219o1_500.gif",
  "http://37.media.tumblr.com/78d253d7b0dfbb950f893bb7ea4c0530/tumblr_n6v199Ntiu1s74h99o2_500.gif",
  "http://38.media.tumblr.com/5b48117c64c15fd472c3f8ddd876ce84/tumblr_n6v03g6YbV1s74h99o1_500.gif",
  "http://38.media.tumblr.com/902d9c1259de177cb0610d293121ec88/tumblr_n6v03g6YbV1s74h99o2_500.gif",
  "http://38.media.tumblr.com/55a25d35c2338d4c4f36366cbbced5d0/tumblr_n6i3waVWIR1r54lc0o1_400.gif",
  "http://37.media.tumblr.com/6e991e5e880cbc8e5fd8566927b460b4/tumblr_n6i3vo2E8x1r54lc0o1_500.gif",
  "http://37.media.tumblr.com/fb8f4fc8620d25efd814c15860726d21/tumblr_n6il7tFv0Q1ryjfqqo1_500.gif",
  "http://31.media.tumblr.com/3a2faeff050e43255f13eb0aa5fbd694/tumblr_n6i92aEvUs1s74h99o1_500.gif",
  "http://37.media.tumblr.com/b7d143e0da70f251dd550c3290f1a39e/tumblr_n6jr1kTehj1r54lc0o1_500.gif",
  "http://38.media.tumblr.com/741abc196d0d14f1d099cd4e86a81bbf/tumblr_n6js6sodGO1r54lc0o1_500.gif",
  "http://38.media.tumblr.com/a2e5b451f86d45afd4e0637cf542ffc6/tumblr_n6jh83SbZh1tabt33o1_500.gif",
  "http://38.media.tumblr.com/ce9d2687040b0913dbc225385ad40a03/tumblr_n656e2U6t31r3fop8o1_500.gif",
  "http://31.media.tumblr.com/221d7bc9ff012e21acf077ea5d0d37c6/tumblr_n65r4gNhay1qd1q2so1_500.gif",
  "http://37.media.tumblr.com/2d72fef4017cfd5f56aff61d123bf196/tumblr_n65r1ht1B31qd1q2so1_500.gif",
  "http://37.media.tumblr.com/4cd17fa2e896d4fa02c561957d48a701/tumblr_n65cniRqS91s4qvrdo1_500.gif",
  "http://37.media.tumblr.com/4554e8041c290a9b531e209d4922f206/tumblr_n5rw4yt83f1r54lc0o1_500.gif",
  "http://31.media.tumblr.com/ae25c4e92d25b5de5a2a28a90c3c110a/tumblr_n5mfvybb3m1s74h99o1_r1_400.gif",
  "http://37.media.tumblr.com/c5bedfb694c9a4c133173b14d3320c86/tumblr_n5iqicsRYx1r5zofqo1_500.gif",
  "http://31.media.tumblr.com/b0bd45ad0e81e3d30d58172dd415fc85/tumblr_n5f7fwLNX31s74h99o1_500.gif",
  "http://37.media.tumblr.com/9101c1b642842b3ee4ee34187de21ac4/tumblr_n5f7fwLNX31s74h99o2_500.gif",
  "http://37.media.tumblr.com/3e186d3ea92a33efc2d9acabf2809caa/tumblr_n5f7stwhRC1s74h99o2_500.gif",
  "http://38.media.tumblr.com/758f3021669a37723e1f4e98afa16d52/tumblr_n5f8nfkesi1s74h99o1_500.gif",
  "http://38.media.tumblr.com/3942fddc4efb9bcd4cec75a9d4cb89b8/tumblr_n52ce9h0Kn1s4qvrdo1_500.gif",
  "http://38.media.tumblr.com/57454650e7974ae94f107e8cd260df3f/tumblr_n5fc6jMnWh1s4qvrdo1_500.gif",
  "http://37.media.tumblr.com/a04064f305e079f5cef40ce61b957f4e/tumblr_n52ldrO3Dl1slv5gyo1_500.gif",
  "http://37.media.tumblr.com/c3dcd32addcbc33c6d4112e414df7663/tumblr_n53vhbkvXi1qa94xto1_500.gif",
  "http://38.media.tumblr.com/219abe498ca33eec8fc77bac697771bb/tumblr_n48gebIrhj1s74h99o2_500.gif",
  "http://37.media.tumblr.com/479aa1b6aa0acd8d9fd240495dd4f9cf/tumblr_n48gebIrhj1s74h99o3_500.gif",
  "http://37.media.tumblr.com/e096cf1280d34f954b9bb36e28d66605/tumblr_n48gebIrhj1s74h99o4_500.gif",
  "http://38.media.tumblr.com/7c6ec6ca2860b011fb6ed682b5580d2d/tumblr_n4cgfrNhSo1s4qvrdo1_500.gif",
  "http://37.media.tumblr.com/7cefdfb8348b3a4bdc74f218c4bb2823/tumblr_n4cgyhjrPE1s4qvrdo1_500.gif",
  "http://37.media.tumblr.com/af9bbb0cef4bf6620144e8324ccdf2b3/tumblr_n4cgyjO8Oz1s74h99o1_500.gif",
  "http://38.media.tumblr.com/0d81640e444a3bf3efbb12ae426e4ed3/tumblr_n4elleFLFw1qzd219o1_500.gif",
  "http://38.media.tumblr.com/d7e9bc287d10662b51c988dfbbcde530/tumblr_n43i8o3yRk1sk0lj0o1_500.gif",
  "http://38.media.tumblr.com/d4ce375fc37f25e64e0e314aabb636a6/tumblr_n3zd30bzu31s4qvrdo1_500.gif",
  "http://37.media.tumblr.com/78c747e15c81ad0b3e4e5e9d38660ecc/tumblr_n43nh0Od2R1qzd219o1_500.gif",
  "http://37.media.tumblr.com/de1e6d8c6799515b4c2d3674fc1e7eb6/tumblr_n408q0ZG451r73plvo1_500.gif",
  "http://37.media.tumblr.com/06f3d3023db1f4ef67c0d86f8091d8ea/tumblr_n3zex4KJkk1s4qvrdo1_500.gif",
  "http://37.media.tumblr.com/a7d080b0582d16f016be54941cd683cb/tumblr_n3zq3fUgeK1s74h99o1_500.gif",
  "http://37.media.tumblr.com/868156c2a2fb876b52adc0c1699ccebc/tumblr_n3zq3fUgeK1s74h99o2_500.gif",
  "http://37.media.tumblr.com/457e9ac04e14345bb62930c42bfca389/tumblr_n3zq3fUgeK1s74h99o5_500.gif",
  "http://38.media.tumblr.com/d46f439f47072160e38cbb8147d6807e/tumblr_n3hc3hGcQQ1s4qvrdo1_500.gif",
  "http://37.media.tumblr.com/34e04b663bef3c8669541d1b9ee638ce/tumblr_n3mge1qeZS1s74h99o2_500.gif",
  "http://38.media.tumblr.com/417c7baa33f8e034d31c9b4d3cb18156/tumblr_n3by49Y5SU1s4qvrdo1_500.gif",
  "http://38.media.tumblr.com/1018c84477408df86f7f259e23490792/tumblr_n3mhm0m1f01s4qvrdo1_500.gif",
  "http://37.media.tumblr.com/31ea62b037a934d7d998f0ac87aefe6e/tumblr_n3mi08x7Ck1s4qvrdo1_500.gif",
  "http://37.media.tumblr.com/27cff89f4c4a98a1d0cd0bfd50022579/tumblr_n3mj8mJ1sy1s4qvrdo1_r1_500.gif",
  "http://37.media.tumblr.com/3c9b85db96c84a505b3b42d0c4abb408/tumblr_mx275tmQLv1s6kajio1_500.gif",
  "http://38.media.tumblr.com/27a45a83da829d9e2f15c19ef9c514d3/tumblr_movsxplB8v1s4qvrdo1_r2_500.gif",
  "http://37.media.tumblr.com/9a786d3ec891e57671b15b8163819091/tumblr_mkjyq64GM41qzd219o1_500.gif",
  "http://38.media.tumblr.com/7c50709dfba2fd06c1fd65776f747ffe/tumblr_mkmmhcN6kA1rj52qho1_500.gif",
  "http://37.media.tumblr.com/b253681f3284bc252c08badc4e9f4e4e/tumblr_mk8c50CS8d1s2cmsto1_500.gif",
  "http://38.media.tumblr.com/cd102af81a1c10c7aa7153e423fdd15f/tumblr_mk8c38OLNU1s2cmsto1_500.gif",
  "http://31.media.tumblr.com/787c0183cd4566baa7a8727bb29e804b/tumblr_mjw4rynlbG1s4jnrfo1_500.gif",
  "http://38.media.tumblr.com/f2c11ddb3e83fba22428358b886adc28/tumblr_mk1oyaZdkb1s4jnrfo1_500.gif",
  "http://38.media.tumblr.com/5f9083c51329fcd9106f918452dc0e9c/tumblr_mjvvacY58w1s74h99o1_500.gif",
  "http://38.media.tumblr.com/cce8a3b72f175004c61c85de87300f15/tumblr_mjhofh4nwC1s2bcydo1_500.gif",
  "http://37.media.tumblr.com/ab8a96bde11b9b8123217b51c0fc54fb/tumblr_mji9d1pk301rtagfbo1_500.gif",
  "http://37.media.tumblr.com/1c68df138282805518a88f841162dffb/tumblr_mjj6o7uxt31s4jnrfo1_500.gif",
  "http://38.media.tumblr.com/b2a72d9854caa0bed8627c562acc827c/tumblr_mjh8ij4SNJ1r215p2o1_500.gif",
  "http://38.media.tumblr.com/cce8a3b72f175004c61c85de87300f15/tumblr_mjhofh4nwC1s2bcydo1_500.gif",
  "http://38.media.tumblr.com/0770e6be1c00ff3be3183b9f743562ec/tumblr_mj2mzeMWH51qzd219o1_500.gif",
  "http://38.media.tumblr.com/858d9e085ca0b12e6b520521ba2a2013/tumblr_mj2scoUNUd1qzd219o1_500.gif",
  "http://38.media.tumblr.com/cc4a95e39b1773610a17c236349441fe/tumblr_mifeib68Vo1qa94xto1_500.gif",
  "http://38.media.tumblr.com/3111dfa8c740efaf425e9e6967982902/tumblr_mit346w0g51s4jnrfo1_250.gif",
  "http://38.media.tumblr.com/55420c00caed5e16d55f7f5a5a63c586/tumblr_mirrgfaKjO1qa94xto1_500.gif",
  "http://37.media.tumblr.com/a32960792cf4cc771bca71351e1b8585/tumblr_mifyfiorD21s4s1yxo1_500.gif",
  "http://37.media.tumblr.com/db52f312c17bf8263e4b7a5a8286af65/tumblr_mi41mzytlc1s4jnrfo1_250.gif",
  "http://38.media.tumblr.com/cbe9336df537c26e9088b92d2171c7eb/tumblr_mhpa1joAZF1roi9fwo1_500.gif",
  "http://37.media.tumblr.com/5007a334823da6349a2410320377b342/tumblr_mhp3vduKZC1rdpalzo1_500.gif",
  "http://38.media.tumblr.com/0c7c4a648c63961f78350fd51f452f7c/tumblr_mi40efLTNc1s4jnrfo1_400.gif",
  "http://31.media.tumblr.com/09203999cf8ede1048753eedd988b0fc/tumblr_mi40a4fSb11s4jnrfo1_250.gif",
  "http://37.media.tumblr.com/b3ed7432f33583ff6f01fecac2496de9/tumblr_mi292jRy7m1qa94xto1_500.gif",
  "http://38.media.tumblr.com/966420002e82372e156b40700042ea52/tumblr_mi28g1gkNE1qa94xto1_500.gif",
  "http://38.media.tumblr.com/6415f327b92780f636f258c8332b651e/tumblr_mhla4dXArk1s4jnrfo1_500.gif",
  "http://38.media.tumblr.com/a40fa7f3c1521ef3ef1922903884424a/tumblr_mhk7eqsk8k1s2cmsto1_400.gif",
  "http://38.media.tumblr.com/300c27aadf18ce75a94fb878542091b7/tumblr_mhh3joDYXY1s4jnrfo1_500.gif",
  "http://37.media.tumblr.com/c8d47a1813b733ac3ca9a1259cf26ba8/tumblr_mhh3gjTAMX1s4jnrfo1_250.gif",
  "http://31.media.tumblr.com/bff86f169215aa7a8a51169452a2e628/tumblr_mhh286H3bZ1s4jnrfo1_500.gif"
]