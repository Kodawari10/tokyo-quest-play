/* Places baked from OpenStreetMap on 2026-11-17 via Overpass (overpass.openstreetmap.fr).
   Coordinates are the node's lat/lon or the way/relation center. ODbL. */
const OSM_DATE = "2026-11-17";

const START = { lat: 35.65888, lng: 139.7002 };
const BOUNDS = { south: 35.598, west: 139.568, north: 35.736, east: 139.782 };

const STATIONS = [
  { id: "st-shibuya", name: "Shibuya", nameJa: "渋谷", line: "JR Yamanote", lat: 35.65808, lng: 139.7017647, osm: "node/241896099" },
  { id: "st-harajuku", name: "Harajuku", nameJa: "原宿", line: "JR Yamanote", lat: 35.6702145, lng: 139.7024266, osm: "node/6806051378" },
  { id: "st-meiji", name: "Meiji-jingumae", nameJa: "明治神宮前", line: "Chiyoda line", lat: 35.6689715, lng: 139.7043612, osm: "node/3668999960" },
  { id: "st-shinjuku", name: "Shinjuku", nameJa: "新宿", line: "JR", lat: 35.6905828, lng: 139.6991102, osm: "node/6283384525" },
  { id: "st-shimokita", name: "Shimokitazawa", nameJa: "下北沢", line: "Keio Inokashira", lat: 35.6615657, lng: 139.6670604, osm: "node/3623712582" },
  { id: "st-gotokuji", name: "Gotokuji", nameJa: "豪徳寺", line: "Odakyu", lat: 35.6535429, lng: 139.6468507, osm: "node/281366971" },
  { id: "st-todoroki", name: "Todoroki", nameJa: "等々力", line: "Tokyu Oimachi", lat: 35.608362, lng: 139.6480235, osm: "node/2574536696" },
  { id: "st-ikejiri", name: "Ikejiri-ohashi", nameJa: "池尻大橋", line: "Den-en-toshi", lat: 35.6507634, lng: 139.6847724, osm: "node/7880318773" },
  { id: "st-asagaya", name: "Asagaya", nameJa: "阿佐ケ谷", line: "JR Chuo", lat: 35.7048403, lng: 139.6354724, osm: "node/2559434097" },
  { id: "st-kichijoji", name: "Kichijoji", nameJa: "吉祥寺", line: "JR Chuo", lat: 35.7031389, lng: 139.5802187, osm: "node/2559434118" },
  { id: "st-kagura", name: "Kagurazaka", nameJa: "神楽坂", line: "Tozai line", lat: 35.7039298, lng: 139.7341347, osm: "node/5408235029" },
  { id: "st-sendagi", name: "Sendagi", nameJa: "千駄木", line: "Chiyoda line", lat: 35.7255451, lng: 139.7632813, osm: "node/7777177085" },
  { id: "st-kamiya", name: "Kamiyacho", nameJa: "神谷町", line: "Hibiya line", lat: 35.662964, lng: 139.7450477, osm: "node/7786715974" }
];

const MISSIONS = [
  {
    id: "scramble", secret: false, glyph: "cross", area: "Shibuya", areaJa: "渋谷",
    title: "Cross the scramble", titleJa: "スクランブル",
    blurb: "Walk out onto Shibuya Scramble Crossing with everyone else.",
    verb: "Cross", verbJa: "わたる",
    kind: "wait", waitMs: 2200,
    waitText: "The light is red. Wait with the crowd…",
    waitTextJa: "あか信号。みんなと待つ",
    button: "Cross", buttonJa: "わたる",
    reward: "You made it across. For a few seconds the whole crossing belongs to everybody.",
    rewardJa: "わたれた。あの数秒だけ、交差点はみんなのもの。"
  },
  {
    id: "onigiri", secret: false, glyph: "rice", area: "Anywhere", areaJa: "近くの店",
    title: "Onigiri run", titleJa: "おにぎり",
    blurb: "Buy an onigiri at a real 7-Eleven, FamilyMart, or Lawson.",
    verb: "Go in", verbJa: "入る",
    kind: "choice",
    prompt: "The door chimes. What goes in the basket?",
    promptJa: "いらっしゃいませ",
    choices: [
      { id: "shake", label: "しゃけ", sub: "Salmon", line: "Warm rice, salty salmon. いただきます。" },
      { id: "ume", label: "うめ", sub: "Umeboshi", line: "Sour plum in the middle. A perfect commute bite." },
      { id: "tuna", label: "ツナマヨ", sub: "Tuna mayo", line: "The creamy one. No regrets." }
    ]
  },
  {
    id: "station", secret: false, glyph: "train", area: "Any station", areaJa: "駅",
    title: "Station stamp", titleJa: "駅スタンプ",
    blurb: "Touch in at a real station. The train board can hop you to another neighborhood any time.",
    verb: "Stamp", verbJa: "タッチ",
    kind: "confirm",
    prompt: "Hold your Pasmo over the gate.",
    promptJa: "パスモをかざす",
    button: "Touch", buttonJa: "ピッ",
    reward: "The gate chirps and opens. This station is in your stamp book.",
    rewardJa: "改札が開いた。この駅はスタンプ済み。"
  },
  {
    id: "vending", secret: false, glyph: "can", area: "Shibuya · Harajuku", areaJa: "自販機",
    title: "Vending machine", titleJa: "自販機",
    blurb: "A cold drink from a real streetside machine.",
    verb: "Buy", verbJa: "買う",
    kind: "choice",
    prompt: "Coins in. Which button?",
    promptJa: "どれにする？",
    choices: [
      { id: "tea", label: "お茶", sub: "Green tea", line: "Cold tea. You can hear the city again." },
      { id: "coffee", label: "コーヒー", sub: "Coffee", line: "Sweet canned coffee. A tiny office in your hand." },
      { id: "soda", label: "ソーダ", sub: "Soda", line: "It fizzes all the way down the block." }
    ]
  },
  {
    id: "ramen", secret: false, glyph: "bowl", area: "Shibuya · Harajuku", areaJa: "ラーメン",
    title: "Slurp a ramen", titleJa: "ラーメン",
    blurb: "A real bowl at Ichiran, Afuri, Ippudo, Nagi, or Yaro Ramen.",
    verb: "Sit", verbJa: "座る",
    kind: "choice",
    prompt: "The ticket machine is waiting. Which soup?",
    promptJa: "どのスープ？",
    choices: [
      { id: "shoyu", label: "しょうゆ", sub: "Soy", line: "Clear, savory, gone too fast." },
      { id: "shio", label: "しお", sub: "Salt", line: "Light and golden. You drink the last spoon." },
      { id: "miso", label: "みそ", sub: "Miso", line: "Cloudy and cozy. The walk home can wait." }
    ]
  },
  {
    id: "park", secret: false, glyph: "tree", area: "Yoyogi", areaJa: "代々木",
    title: "Park picnic", titleJa: "代々木公園",
    blurb: "Sit down in Yoyogi Park, the big green between Shibuya and Harajuku.",
    verb: "Sit", verbJa: "すわる",
    kind: "confirm",
    prompt: "A lawn, some trees, and nobody asking you to hurry.",
    promptJa: "芝生がある",
    button: "Picnic", buttonJa: "ピクニック",
    reward: "You sit. A drum circle might be somewhere in the trees, or it might just be pigeons. Either way, the grass counts.",
    rewardJa: "座った。今日の芝生は、あなたの場所。"
  },
  {
    id: "shrine", secret: false, glyph: "torii", area: "Harajuku", areaJa: "原宿",
    title: "Meiji Jingu", titleJa: "明治神宮",
    blurb: "Walk the gravel to Meiji Jingu and pay respects.",
    verb: "Visit", verbJa: "参る",
    kind: "ritual",
    prompt: "At the hall: two bows, two claps, one bow.",
    promptJa: "二礼二拍手一礼",
    steps: [
      { label: "礼", sub: "Bow" },
      { label: "礼", sub: "Bow" },
      { label: "拍手", sub: "Clap" },
      { label: "拍手", sub: "Clap" },
      { label: "礼", sub: "Bow" }
    ],
    reward: "The courtyard goes quiet around you. Wish made, quietly.",
    rewardJa: "願いごとは、小さな声で。"
  },
  {
    id: "tower", secret: false, glyph: "tower", area: "Minato", areaJa: "港区",
    title: "Look up at Tokyo Tower", titleJa: "東京タワー",
    blurb: "Stand at the foot of Tokyo Tower. Kamiyacho station is the handy stop.",
    verb: "Look up", verbJa: "見上げる",
    kind: "confirm",
    prompt: "Orange and white, 333 meters, still the one people point at.",
    promptJa: "オレンジと白",
    button: "Look up", buttonJa: "見上げる",
    reward: "Your neck tips back. It opened in 1958 and still looks like a postcard when the light hits it.",
    rewardJa: "1958年から、そこにある。"
  },
  {
    id: "nonbei", secret: true, glyph: "lantern", area: "Shibuya", areaJa: "渋谷",
    title: "Nonbei Yokocho", titleJa: "のんべい横丁",
    blurb: "A tiny drinkers' alley tucked beside Shibuya station.",
    verb: "Peek", verbJa: "のぞく",
    kind: "confirm",
    prompt: "The alley is barely wider than your shoulders.",
    promptJa: "肩幅くらいの路地",
    button: "Step in", buttonJa: "入ってみる",
    reward: "Smoke, a noren, and counters that seat about six.",
    tipTitle: "Local tip",
    tip: "Nonbei means drinker. This short lane of hole-in-the-wall bars sits right by the station, easy to miss between the scramble and the department stores. Counters are tiny. Slip in when you want the city to get small."
  },
  {
    id: "lion", secret: true, glyph: "cup", area: "Shibuya", areaJa: "渋谷",
    title: "Kissaten hour", titleJa: "名曲喫茶",
    blurb: "Classical-music coffee at Meikyoku Kissa Lion.",
    verb: "Sit", verbJa: "座る",
    kind: "choice",
    prompt: "A kissaten, not a laptop café. The speakers are already playing.",
    promptJa: "名曲喫茶ライオン",
    choices: [
      { id: "blend", label: "ブレンド", sub: "House coffee", line: "You wrap both hands around the cup and stay for the whole piece." },
      { id: "cake", label: "ケーキセット", sub: "Cake set", line: "Coffee, a fork, and nowhere else to be." }
    ],
    tipTitle: "Local tip",
    tip: "Lion is a meikyoku kissa: a classical-music coffee shop. OpenStreetMap's own note for this room says it is a place for listening, not for talking. Order, take a seat, and let one record finish before you head back to the scramble."
  },
  {
    id: "sento", secret: true, glyph: "bath", area: "Harajuku", areaJa: "原宿",
    title: "Neighborhood sento", titleJa: "銭湯",
    blurb: "Soak at Kosugi-yu Harajuku, a real public bath.",
    verb: "Enter", verbJa: "入る",
    kind: "choice",
    prompt: "Shoes in a locker. Wash at a stool before you even look at the bath.",
    promptJa: "先に体を洗う",
    choices: [
      { id: "hot", label: "あつ湯", sub: "Hot bath", line: "You rinse the soap off and sink in. The day loosens." },
      { id: "warm", label: "ぬる湯", sub: "Warm bath", line: "Warm enough to stay. Nobody is performing wellness. It is just a bath." }
    ],
    tipTitle: "Local tip",
    tip: "A sento is a neighborhood bath, not a ryokan spa. You scrub at the stools, rinse, then share the water — no soap in the tub, no swimsuits. Kosugi-yu's original bathhouse is in Koenji; this is their Harajuku shop. The front desk sells a towel if you came without one."
  },
  {
    id: "soba", secret: true, glyph: "soba", area: "By a station", areaJa: "立ち食い",
    title: "Standing soba", titleJa: "立ち食いそば",
    blurb: "Slurp at a real tachigui counter: Fuji Soba or Komoro Soba.",
    verb: "Slurp", verbJa: "すする",
    kind: "choice",
    prompt: "No chairs. You eat standing up, then give the counter back.",
    promptJa: "立ったまま、すぐ",
    choices: [
      { id: "kake", label: "かけ", sub: "Plain hot", line: "Broth, noodles, done. The next person is already behind you." },
      { id: "tanuki", label: "たぬき", sub: "Tenkasu", line: "Crispy bits on top. You are finished before the song in the station changes." },
      { id: "kitsune", label: "きつね", sub: "Sweet tofu", line: "One slice of fried tofu. Sweet, fast, correct." }
    ],
    tipTitle: "Local tip",
    tip: "Tachigui soba is the meal you eat without sitting down, usually a step from the ticket gate. Pay at the machine, slurp, and move. Fuji Soba and Komoro Soba are the counters office workers actually use. Tanuki here means tempura crumbs, not the animal."
  },
  {
    id: "omoide", secret: true, glyph: "lantern", area: "Shinjuku", areaJa: "新宿",
    title: "Omoide Yokocho", titleJa: "思い出横丁",
    blurb: "Memory Lane, the yakitori alley by Shinjuku's west side.",
    verb: "Enter", verbJa: "入る",
    kind: "confirm",
    prompt: "Yakitori smoke finds you before the sign does.",
    promptJa: "先に煙が来る",
    button: "Squeeze in", buttonJa: "割り込む",
    reward: "A stool, a skewer, and about as much elbow room as a train at 8 a.m.",
    tipTitle: "Local tip",
    tip: "Omoide Yokocho — Memory Lane — grew out of tiny postwar black-market stalls just outside Shinjuku station. The English nickname used to be less polite. Order from the counter, expect smoke, and keep your bag on your lap."
  },
  {
    id: "golden", secret: true, glyph: "lantern", area: "Shinjuku", areaJa: "新宿",
    title: "Golden Gai", titleJa: "ゴールデン街",
    blurb: "The six-alley maze of matchbox bars east of the station.",
    verb: "Wander", verbJa: "歩く",
    kind: "confirm",
    prompt: "Lanterns, handwritten signs, doors that look like closets.",
    promptJa: "ドアがクローゼットくらい",
    button: "Pick a door", buttonJa: "のれんをくぐる",
    reward: "You chose a bar that seats fewer people than a family car.",
    tipTitle: "Local tip",
    tip: "Golden Gai is a handful of narrow alleys and around 200 tiny bars. Some are regulars-only; a menu in the window or a host who actually waves you in is the polite signal. One drink is the usual cover charge. Look up: the buildings are barely two stories and very close to their neighbors."
  },
  {
    id: "depachika", secret: true, glyph: "bag", area: "Shinjuku", areaJa: "新宿",
    title: "Depachika run", titleJa: "デパ地下",
    blurb: "The food floor in the basement of Isetan Shinjuku.",
    verb: "Go down", verbJa: "降りる",
    kind: "choice",
    prompt: "Escalator down. Everything is wrapped like a present.",
    promptJa: "地下の食品フロア",
    choices: [
      { id: "bento", label: "のり弁", sub: "Nori bento", line: "You will eat this on a station bench and it will be the best bench of the day." },
      { id: "sweet", label: "スイーツ", sub: "Sweets", line: "A box tied with string. Someone is getting a souvenir, and it might be you." },
      { id: "croquette", label: "コロッケ", sub: "Croquette", line: "Hot, too hot, worth it. The paper bag is already translucent." }
    ],
    tipTitle: "Local tip",
    tip: "Depachika means the basement food hall of a department store. Isetan Shinjuku's is the famous one: side dishes, bento, and sweets bought on the way home, not a restaurant you book. Ride to Shinjuku and go downstairs. The shortest queue is usually the right one."
  },
  {
    id: "vintage", secret: true, glyph: "shirt", area: "Shimokitazawa", areaJa: "下北沢",
    title: "Vintage rack", titleJa: "古着",
    blurb: "Dig through New York Joe Exchange in Shimokitazawa.",
    verb: "Browse", verbJa: "見る",
    kind: "confirm",
    prompt: "Denim, jackets, and a speaker that has opinions.",
    promptJa: "ニューヨークジョー",
    button: "Flip the rack", buttonJa: "ラックをめくる",
    reward: "The good jacket was behind the first one. You already knew that.",
    tipTitle: "Local tip",
    tip: "Shimokitazawa's side streets are where Tokyo buys secondhand clothes. New York Joe Exchange is a long-running American-vintage shop in that tangle. Prices are on the tags. Trying things on is welcome, and leaving with nothing is also a normal outcome."
  },
  {
    id: "neko", secret: true, glyph: "cat", area: "Setagaya", areaJa: "世田谷",
    title: "Gotokuji cats", titleJa: "豪徳寺の招き猫",
    blurb: "The maneki-neko temple. Gotokuji station, then walk south.",
    verb: "Wish", verbJa: "願う",
    kind: "confirm",
    prompt: "Hundreds of little beckoning cats, and a real temple underneath the legend.",
    promptJa: "招福猫児",
    button: "Leave a wish", buttonJa: "願いを残す",
    reward: "You do not take a cat off the shelves. Those are other people's wishes.",
    tipTitle: "Local tip",
    tip: "Gotokuji tells this story: a cat beckoned a samurai in out of a thunderstorm, and the beckoning cat became a good-luck charm. People leave cat figures here as offerings. It is a working Soto Zen temple, so keep your voice down. The sculpture on the grounds is called Shofuku Nekoji. Buy a cat at the stall if you want one to take home."
  },
  {
    id: "valley", secret: true, glyph: "stream", area: "Setagaya", areaJa: "世田谷",
    title: "Todoroki Valley", titleJa: "等々力渓谷",
    blurb: "A ravine and a stream hiding under Setagaya. Todoroki station is the door.",
    verb: "Walk", verbJa: "歩く",
    kind: "confirm",
    prompt: "The city noise drops as soon as the path drops.",
    promptJa: "川の音",
    button: "Follow the stream", buttonJa: "渓谷へ",
    reward: "Leaves, water, and a footpath. Tokyo is still up on the rim.",
    tipTitle: "Local tip",
    tip: "Todoroki Valley is the only ravine in Tokyo's 23 wards. A short walk from Todoroki station follows the stream under the trees, past a small waterfall, toward Todoroki Fudoson temple. In summer the air is cooler than the street you left. Stay on the path."
  },
  {
    id: "sky", secret: true, glyph: "leaf", area: "Meguro", areaJa: "目黒",
    title: "Rooftop garden", titleJa: "目黒天空庭園",
    blurb: "Meguro Sky Garden, a park planted on top of a highway junction.",
    verb: "Climb", verbJa: "のぼる",
    kind: "confirm",
    prompt: "The entrance is easy to miss. The lawn is up above the loop.",
    promptJa: "ジャンクションの上",
    button: "Find the lawn", buttonJa: "芝生へ",
    reward: "Traffic is a rumor underneath. Someone is flying a kite, or thinking about it.",
    tipTitle: "Local tip",
    tip: "Meguro Sky Garden sits on the roof of the Ohashi Junction, where the expressways curl over each other near Ikejiri-Ohashi station. Locals come up for the lawn and a view of the trains. From the street it looks like infrastructure. Walk up anyway."
  },
  {
    id: "shotengai", secret: true, glyph: "arcade", area: "Asagaya", areaJa: "阿佐ケ谷",
    title: "Pearl Center", titleJa: "パールセンター",
    blurb: "Do the grocery stroll on Asagaya's covered shopping street.",
    verb: "Stroll", verbJa: "ぶらぶら",
    kind: "confirm",
    prompt: "A roof over the street, and shops people use on a Tuesday.",
    promptJa: "阿佐ヶ谷パールセンター",
    button: "Walk through", buttonJa: "通り抜ける",
    reward: "Senbei, a greengrocer, a radio. You are in somebody's errand.",
    tipTitle: "Local tip",
    tip: "A shotengai is a local shopping street, often with a roof. Asagaya Pearl Center is the covered arcade a few minutes from Asagaya station on the Chuo line: groceries and old shops, not a theme park. Buy a senbei if you only came to look. The sign says パールセンター."
  },
  {
    id: "harmonica", secret: true, glyph: "lane", area: "Kichijoji", areaJa: "吉祥寺",
    title: "Harmonica Yokocho", titleJa: "ハーモニカ横丁",
    blurb: "The covered stalls squeezed in beside Kichijoji station.",
    verb: "Duck in", verbJa: "入る",
    kind: "confirm",
    prompt: "Yakitori, croquettes, and a roof that keeps the rain off the stools.",
    promptJa: "駅のすぐ横",
    button: "Follow the smell", buttonJa: "においで入る",
    reward: "You eat something on a stick you did not plan to eat.",
    tipTitle: "Local tip",
    tip: "Harmonica Yokocho got its name because the tight row of stalls looked like the holes of a harmonica. It sits against Kichijoji station and feeds the people who actually live on the Chuo line. Less of a postcard than Golden Gai, more of a weeknight."
  },
  {
    id: "yanaka", secret: true, glyph: "cat", area: "Yanaka", areaJa: "谷中",
    title: "Yanaka Ginza cats", titleJa: "谷中銀座",
    blurb: "The shitamachi shopping street, its cat mascot, and the sunset steps.",
    verb: "Wander", verbJa: "歩く",
    kind: "confirm",
    prompt: "A low street of shops, and cats in the corners of the signs.",
    promptJa: "猫のいる商店街",
    button: "Look for cats", buttonJa: "猫を探す",
    reward: "You spot one painted cat, then a real one, then the steps.",
    tipTitle: "Local tip",
    tip: "Yanaka Ginza is a neighborhood shopping street, and its mascot is a cat — little cat figures show up along the lane. At the Nippori end, the staircase is Yuyake Dandan, a local sunset spot. Sendagi station is the other door. It is a place to walk slowly and buy one thing you can eat with your hands."
  },
  {
    id: "dagashi", secret: true, glyph: "candy", area: "Yanaka", areaJa: "谷中",
    title: "Dagashi shop", titleJa: "駄菓子屋",
    blurb: "Penny candy at Kimura-ya, a real dagashiya near Sendagi.",
    verb: "Choose", verbJa: "えらぶ",
    kind: "choice",
    prompt: "The wall is a grid of snacks that cost about as much as a single coin used to.",
    promptJa: "駄菓子屋木村屋",
    choices: [
      { id: "uma", label: "うまい棒", sub: "Umaibo", line: "One corn stick. The correct price of happiness." },
      { id: "ramune", label: "ラムネ", sub: "Ramune candy", line: "It fizzes on your tongue like the bottled kind, minus the marble." },
      { id: "seal", label: "シール", sub: "Sticker pack", line: "You are an adult with a sticker sheet. The day improves." }
    ],
    tipTitle: "Local tip",
    tip: "A dagashiya sells the cheap snacks kids still buy on the way home: candy, ramune drops, sticker packs, a single umaibo. Kimura-ya is a real one just off Sendagi, on the way into Yanaka. Grown-ups are allowed. Cash is the natural language here."
  },
  {
    id: "alleys", secret: true, glyph: "lane", area: "Kagurazaka", areaJa: "神楽坂",
    title: "Kagurazaka backstreets", titleJa: "神楽坂の路地",
    blurb: "Leave the main slope for Michikusa, Honda, and Kemban alleys.",
    verb: "Turn", verbJa: "それる",
    kind: "confirm",
    prompt: "The main street is a hill. The good part is one turn off it.",
    promptJa: "坂をそれる",
    button: "Take the alley", buttonJa: "路地へ",
    reward: "Stone underfoot, a noren, somebody carrying dishes.",
    tipTitle: "Local tip",
    tip: "Kagurazaka's main slope is for strolling. The back lanes — Michikusa Yokocho, Honda Yokocho, and Kemban Yokocho — are the quieter grid of restaurants in old houses. Kemban is named for the kenban, the office that used to coordinate geisha in this quarter. Walk slowly. People live above the shops."
  },
  {
    id: "inari", secret: true, glyph: "torii", area: "Kagurazaka", areaJa: "神楽坂",
    title: "A tiny Inari", titleJa: "伏見火防稲荷",
    blurb: "Fushimi fire-ward Inari, a small shrine between the Kagurazaka lanes.",
    verb: "Bow", verbJa: "礼",
    kind: "confirm",
    prompt: "Easy to walk past. A vermilion hint between the buildings.",
    promptJa: "建物のあいだ",
    button: "Bow once", buttonJa: "一礼",
    reward: "One bow is enough. The big shrines can wait.",
    tipTitle: "Local tip",
    tip: "Neighborhood shrines like this sit on a footprint smaller than a shop. Fushimi Hibuse Inari is a fire-prevention Inari tucked into the Kagurazaka alleys, the kind of guardian a wooden quarter would want. You can bow as you pass. No ticket, no crowd, no need to clap unless you want to."
  }
];

const EXTRA_PLACES = [
  { id: "scramble", mission: "scramble", name: "Shibuya Scramble Crossing", nameJa: "渋谷スクランブル交差点", areaJa: "渋谷駅前", lat: 35.6594821, lng: 139.7005723, osm: "node/291758776", radius: 36 },
  { id: "konbini-dogenzaka", mission: "onigiri", name: "7-Eleven", nameJa: "セブン-イレブン", areaJa: "道玄坂", lat: 35.6583169, lng: 139.6998049, osm: "node/3745365123", radius: 34 },
  { id: "konbini-fm-shibuya", mission: "onigiri", name: "FamilyMart", nameJa: "ファミリーマート", areaJa: "渋谷", lat: 35.6599314, lng: 139.698867, osm: "node/1745599776", radius: 34 },
  { id: "konbini-lawson-shibuya", mission: "onigiri", name: "Lawson", nameJa: "ローソン", areaJa: "渋谷", lat: 35.6599589, lng: 139.7041212, osm: "node/2171167534", radius: 34 },
  { id: "konbini-seven-jingumae", mission: "onigiri", name: "7-Eleven", nameJa: "セブン-イレブン", areaJa: "神宮前", lat: 35.6711006, lng: 139.7051698, osm: "node/701811042", radius: 34 },
  { id: "konbini-lawson-jingumae", mission: "onigiri", name: "Lawson", nameJa: "ローソン", areaJa: "神宮前", lat: 35.668247, lng: 139.706561, osm: "node/701819071", radius: 34 },
  { id: "konbini-fm-harajuku", mission: "onigiri", name: "FamilyMart", nameJa: "ファミリーマート", areaJa: "原宿", lat: 35.6696016, lng: 139.7034811, osm: "node/11155635426", radius: 34 },
  { id: "konbini-seven-tower", mission: "onigiri", name: "7-Eleven", nameJa: "セブン-イレブン", areaJa: "虎ノ門", lat: 35.6629459, lng: 139.7453318, osm: "node/1926727776", radius: 34 },
  { id: "konbini-lawson-tower", mission: "onigiri", name: "Lawson", nameJa: "ローソン", areaJa: "東京タワー", lat: 35.661268, lng: 139.751021, osm: "node/2190618817", radius: 34 },
  { id: "vend-shibuya", mission: "vending", name: "Drink machine", nameJa: "自動販売機", areaJa: "渋谷", lat: 35.6599806, lng: 139.703045, osm: "node/5133172793", radius: 30 },
  { id: "vend-harajuku", mission: "vending", name: "Coca-Cola machine", nameJa: "自販機", areaJa: "原宿", lat: 35.66979, lng: 139.7034093, osm: "node/12052151970", radius: 30 },
  { id: "ramen-ichiran", mission: "ramen", name: "Ichiran", nameJa: "一蘭", areaJa: "神南", lat: 35.6611293, lng: 139.7009878, osm: "node/3047251663", radius: 34 },
  { id: "ramen-yaro", mission: "ramen", name: "Yaro Ramen", nameJa: "野郎ラーメン", areaJa: "渋谷", lat: 35.6602781, lng: 139.6991531, osm: "node/1669745958", radius: 34 },
  { id: "ramen-afuri", mission: "ramen", name: "Afuri", nameJa: "阿夫利", areaJa: "神宮前", lat: 35.672992, lng: 139.7038124, osm: "node/4455902416", radius: 34 },
  { id: "ramen-ippudo", mission: "ramen", name: "Ippudo", nameJa: "一風堂", areaJa: "原宿", lat: 35.6716222, lng: 139.7032732, osm: "node/13773778530", radius: 34 },
  { id: "ramen-nagi", mission: "ramen", name: "Ramen Nagi", nameJa: "ラーメン凪", areaJa: "渋谷", lat: 35.6576316, lng: 139.7081593, osm: "node/2378890421", radius: 34 },
  { id: "yoyogi", mission: "park", name: "Yoyogi Park", nameJa: "代々木公園", areaJa: "渋谷", lat: 35.6663168, lng: 139.7011359, osm: "way/1029462259", radius: 80 },
  { id: "meiji", mission: "shrine", name: "Meiji Jingu", nameJa: "明治神宮", areaJa: "本殿", lat: 35.6750484, lng: 139.6994785, osm: "way/469908925", radius: 65 },
  { id: "tower", mission: "tower", name: "Tokyo Tower", nameJa: "東京タワー", areaJa: "港区", lat: 35.6585639, lng: 139.74544, osm: "relation/4247312", radius: 55 },
  { id: "nonbei", mission: "nonbei", name: "Nonbei Yokocho", nameJa: "のんべい横丁", areaJa: "渋谷", lat: 35.6599887, lng: 139.7015062, osm: "way/1115659357", radius: 40 },
  { id: "lion", mission: "lion", name: "Meikyoku Kissa Lion", nameJa: "名曲喫茶ライオン", areaJa: "渋谷", lat: 35.6592774, lng: 139.6963632, osm: "way/136608990", radius: 36 },
  { id: "sento", mission: "sento", name: "Kosugi-yu Harajuku", nameJa: "小杉湯原宿", areaJa: "神宮前", lat: 35.6681857, lng: 139.7048347, osm: "node/12026463172", radius: 36 },
  { id: "soba-fuji-shibuya", mission: "soba", name: "Fuji Soba", nameJa: "富士そば", areaJa: "渋谷", lat: 35.6601806, lng: 139.7025677, osm: "node/1681588674", radius: 34 },
  { id: "soba-fuji-shinjuku", mission: "soba", name: "Fuji Soba", nameJa: "富士そば", areaJa: "新宿", lat: 35.6942702, lng: 139.698747, osm: "node/2390477483", radius: 34 },
  { id: "soba-komoro-kagura", mission: "soba", name: "Komoro Soba", nameJa: "小諸そば", areaJa: "神楽坂", lat: 35.7038522, lng: 139.7358806, osm: "node/1075317938", radius: 34 },
  { id: "omoide", mission: "omoide", name: "Omoide Yokocho", nameJa: "思い出横丁", areaJa: "新宿", lat: 35.6930689, lng: 139.6995016, osm: "node/4154282189", radius: 42 },
  { id: "golden", mission: "golden", name: "Shinjuku Golden Gai", nameJa: "新宿ゴールデン街", areaJa: "新宿", lat: 35.6940636, lng: 139.7046894, osm: "relation/16562139", radius: 48 },
  { id: "isetan", mission: "depachika", name: "Isetan Shinjuku", nameJa: "伊勢丹新宿店", areaJa: "新宿", lat: 35.6916632, lng: 139.7046561, osm: "node/10804420506", radius: 48 },
  { id: "nyjoe", mission: "vintage", name: "New York Joe Exchange", nameJa: "ニューヨークジョー", areaJa: "下北沢", lat: 35.6639471, lng: 139.6681127, osm: "node/4652190189", radius: 36 },
  { id: "neko", mission: "neko", name: "Gotokuji maneki-neko", nameJa: "豪徳寺の招き猫", areaJa: "世田谷", lat: 35.6482744, lng: 139.6470066, osm: "node/13443115843", radius: 42 },
  { id: "valley", mission: "valley", name: "Todoroki Valley", nameJa: "等々力渓谷", areaJa: "世田谷", lat: 35.6068061, lng: 139.6460153, osm: "way/956183237", radius: 55 },
  { id: "sky", mission: "sky", name: "Meguro Sky Garden", nameJa: "目黒天空庭園", areaJa: "目黒", lat: 35.6509945, lng: 139.6875875, osm: "relation/9691941", radius: 60 },
  { id: "pearl-a", mission: "shotengai", name: "Asagaya Pearl Center", nameJa: "阿佐ヶ谷パールセンター", areaJa: "阿佐ケ谷", lat: 35.7022789, lng: 139.6369421, osm: "way/763308135", radius: 46 },
  { id: "pearl-b", mission: "shotengai", name: "Asagaya Pearl Center", nameJa: "阿佐ヶ谷パールセンター", areaJa: "阿佐ケ谷", lat: 35.6993972, lng: 139.6372589, osm: "way/37561590", radius: 46 },
  { id: "harmonica", mission: "harmonica", name: "Harmonica Yokocho", nameJa: "ハーモニカ横丁", areaJa: "吉祥寺", lat: 35.703743, lng: 139.5792576, osm: "way/145129803", radius: 42 },
  { id: "yanaka", mission: "yanaka", name: "Yanaka Ginza", nameJa: "谷中銀座", areaJa: "谷中", lat: 35.727657, lng: 139.7669682, osm: "node/8691137817", radius: 46 },
  { id: "yuyake", mission: "yanaka", name: "Yuyake Dandan", nameJa: "夕焼けだんだん", areaJa: "谷中", lat: 35.7276462, lng: 139.7671692, osm: "way/33440592", radius: 40 },
  { id: "kimura", mission: "dagashi", name: "Dagashiya Kimura-ya", nameJa: "駄菓子屋木村屋", areaJa: "千駄木", lat: 35.7258133, lng: 139.7642105, osm: "node/5429415035", radius: 34 },
  { id: "kemban", mission: "alleys", name: "Kemban Yokocho", nameJa: "見番横丁", areaJa: "神楽坂", lat: 35.7009942, lng: 139.7402043, osm: "way/92651467", radius: 40 },
  { id: "honda", mission: "alleys", name: "Honda Yokocho", nameJa: "本多横丁", areaJa: "神楽坂", lat: 35.7019633, lng: 139.7403036, osm: "way/141602069", radius: 40 },
  { id: "michikusa", mission: "alleys", name: "Michikusa Yokocho", nameJa: "みちくさ横丁", areaJa: "神楽坂", lat: 35.7010029, lng: 139.7426373, osm: "way/586746202", radius: 40 },
  { id: "inari", mission: "inari", name: "Fushimi Hibuse Inari", nameJa: "伏見火防稲荷神社", areaJa: "神楽坂", lat: 35.7010379, lng: 139.7405725, osm: "way/507282415", radius: 36 }
];

const PLACES = STATIONS.map((s) => ({
  id: s.id,
  mission: "station",
  name: s.name,
  nameJa: s.nameJa,
  areaJa: s.line,
  lat: s.lat,
  lng: s.lng,
  osm: s.osm,
  radius: 72
})).concat(EXTRA_PLACES);

function missionById(id) {
  return MISSIONS.find((m) => m.id === id);
}

function placesFor(missionId) {
  return PLACES.filter((p) => p.mission === missionId);
}
