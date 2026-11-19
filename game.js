(function(){
'use strict';

/* ============================================================
   一、配置
   ============================================================ */

/* 50 组花果：普通 30 / 稀有 15 / 传说 5 */
const CONFIG = {
  pairs: [
    /* ---- 普通 30 ---- */
    { key:'tao',    flower:'桃花',     flowerType:'peach',       fruit:'桃子',   fruitType:'peach',       desc:'春日的温柔，吃一口甜',     rarity:'common' },
    { key:'xing',   flower:'杏花',     flowerType:'apricot',     fruit:'杏子',   fruitType:'apricot',     desc:'素雅的清香，酸里带甜',     rarity:'common' },
    { key:'ping',   flower:'苹果花',   flowerType:'apple',       fruit:'苹果',   fruitType:'apple',       desc:'平平安安，最朴素的祝福',   rarity:'common' },
    { key:'li',     flower:'梨花',     flowerType:'pear',        fruit:'梨',     fruitType:'pear',        desc:'清润如雪，别分离',         rarity:'common' },
    { key:'shi',    flower:'石榴花',   flowerType:'pomegranate', fruit:'石榴',   fruitType:'pomegranate', desc:'红火的日子，多子多福',     rarity:'common' },
    { key:'ju',     flower:'橘子花',   flowerType:'tangerine',   fruit:'橘子',   fruitType:'tangerine',   desc:'酸甜的活力，大吉大利',     rarity:'common' },
    { key:'zao',    flower:'枣花',     flowerType:'jujube',      fruit:'枣',     fruitType:'jujube',      desc:'小小的甜，早点遇见好事',   rarity:'common' },
    { key:'cao',    flower:'草莓花',   flowerType:'strawberry',  fruit:'草莓',   fruitType:'strawberry',  desc:'酸酸甜甜，元气满满',       rarity:'common' },
    { key:'xiang',  flower:'香蕉花',   flowerType:'banana',      fruit:'香蕉',   fruitType:'banana',      desc:'弯弯的快乐，随手剥开',     rarity:'common' },
    { key:'mang',   flower:'芒果花',   flowerType:'mango',       fruit:'芒果',   fruitType:'mango',       desc:'热带的阳光，忙里偷甜',     rarity:'common' },
    { key:'pu',     flower:'葡萄花',   flowerType:'grape',       fruit:'葡萄',   fruitType:'grape',       desc:'一串一串的好运',           rarity:'common' },
    { key:'xi',     flower:'西瓜花',   flowerType:'watermelon',  fruit:'西瓜',   fruitType:'watermelon',  desc:'夏天的味道',               rarity:'common' },
    { key:'ning',   flower:'柠檬花',   flowerType:'lemon',       fruit:'柠檬',   fruitType:'lemon',       desc:'酸一下，清醒',             rarity:'common' },
    { key:'you',    flower:'柚子花',   flowerType:'pomelo',      fruit:'柚子',   fruitType:'pomelo',      desc:'又大又圆，团团圆圆',       rarity:'common' },
    { key:'pi',     flower:'枇杷花',   flowerType:'loquat',      fruit:'枇杷',   fruitType:'loquat',      desc:'春天的甜',                 rarity:'common' },
    { key:'yang',   flower:'杨梅花',   flowerType:'bayberry',    fruit:'杨梅',   fruitType:'bayberry',    desc:'酸酸甜甜，一颗一颗',       rarity:'common' },
    { key:'shi2',   flower:'柿子花',   flowerType:'persimmon',   fruit:'柿子',   fruitType:'persimmon',   desc:'事事如意',                 rarity:'common' },
    { key:'mu',     flower:'木瓜花',   flowerType:'papaya',      fruit:'木瓜',   fruitType:'papaya',      desc:'温柔以待',                 rarity:'common' },
    { key:'ta',     flower:'杨桃花',   flowerType:'starfruit',   fruit:'杨桃',   fruitType:'starfruit',   desc:'星星的形状',               rarity:'common' },
    { key:'sang',   flower:'桑葚花',   flowerType:'mulberry',    fruit:'桑葚',   fruitType:'mulberry',    desc:'童年的味道',               rarity:'common' },
    { key:'shan',   flower:'山楂花',   flowerType:'hawthorn',    fruit:'山楂',   fruitType:'hawthorn',    desc:'酸里有甜',                 rarity:'common' },
    { key:'ban',    flower:'板栗花',   flowerType:'chestnut',    fruit:'板栗',   fruitType:'chestnut',    desc:'外壳硬，心是软的',         rarity:'common' },
    { key:'zhen',   flower:'榛子花',   flowerType:'hazelnut',    fruit:'榛子',   fruitType:'hazelnut',    desc:'小小的坚强',               rarity:'common' },
    { key:'yao',    flower:'腰果花',   flowerType:'cashew',      fruit:'腰果',   fruitType:'cashew',      desc:'弯弯的月亮',               rarity:'common' },
    { key:'kai',    flower:'开心果花', flowerType:'pistachio',   fruit:'开心果', fruitType:'pistachio',   desc:'开心就好',                 rarity:'common' },
    { key:'kui',    flower:'向日葵花', flowerType:'sunflower',   fruit:'瓜子',   fruitType:'sunflower',   desc:'向着光',                   rarity:'common' },
    { key:'ha',     flower:'哈密瓜花', flowerType:'cantaloupe',  fruit:'哈密瓜', fruitType:'cantaloupe',  desc:'甜甜的蜜',                 rarity:'common' },
    { key:'fan',    flower:'番石榴花', flowerType:'guava',       fruit:'番石榴', fruitType:'guava',       desc:'低调的好',                 rarity:'common' },
    { key:'lian',   flower:'莲雾花',   flowerType:'waxapple',    fruit:'莲雾',   fruitType:'waxapple',    desc:'清脆多汁',                 rarity:'common' },
    { key:'gan',    flower:'橄榄花',   flowerType:'olive',       fruit:'橄榄',   fruitType:'olive',       desc:'先苦后甜',                 rarity:'common' },

    /* ---- 稀有 15 ---- */
    { key:'ying',   flower:'樱花',     flowerType:'cherry',      fruit:'樱桃',   fruitType:'cherry',      desc:'浪漫的瞬间，小而珍贵',     rarity:'rare' },
    { key:'mei',    flower:'梅花',     flowerType:'plum',        fruit:'梅子',   fruitType:'plum',        desc:'坚韧的芬芳，苦尽甘来',     rarity:'rare' },
    { key:'cheng',  flower:'橙花',     flowerType:'orange',      fruit:'橙子',   fruitType:'orange',      desc:'阳光的温暖，心想事成',     rarity:'rare' },
    { key:'he',     flower:'核桃花',   flowerType:'walnut',      fruit:'核桃',   fruitType:'walnut',      desc:'补脑也补心，慢慢变聪明',   rarity:'rare' },
    { key:'lan',    flower:'蓝莓花',   flowerType:'blueberry',   fruit:'蓝莓',   fruitType:'blueberry',   desc:'小小一颗，把眼睛养好',     rarity:'rare' },
    { key:'ye',     flower:'椰子花',   flowerType:'coconut',     fruit:'椰子',   fruitType:'coconut',     desc:'外壳硬，里面是清甜的水',   rarity:'rare' },
    { key:'hu',     flower:'猕猴桃花', flowerType:'kiwi',        fruit:'猕猴桃', fruitType:'kiwi',        desc:'毛茸茸的外表，绿油油的心', rarity:'rare' },
    { key:'li2',    flower:'荔枝花',   flowerType:'lychee',      fruit:'荔枝',   fruitType:'lychee',      desc:'一骑红尘妃子笑',           rarity:'rare' },
    { key:'long2',  flower:'龙眼花',   flowerType:'longan',      fruit:'龙眼',   fruitType:'longan',      desc:'团圆的味道',               rarity:'rare' },
    { key:'shan2',  flower:'山竹花',   flowerType:'mangosteen',  fruit:'山竹',   fruitType:'mangosteen',  desc:'果中皇后',                 rarity:'rare' },
    { key:'fu',     flower:'覆盆子花', flowerType:'raspberry',   fruit:'覆盆子', fruitType:'raspberry',   desc:'满满的花青素',             rarity:'rare' },
    { key:'hei',    flower:'黑莓花',   flowerType:'blackberry',  fruit:'黑莓',   fruitType:'blackberry',  desc:'深色的甜',                 rarity:'rare' },
    { key:'man',    flower:'蔓越莓花', flowerType:'cranberry',   fruit:'蔓越莓', fruitType:'cranberry',   desc:'酸酸的活力',               rarity:'rare' },
    { key:'ba',     flower:'巴旦木花', flowerType:'almond',      fruit:'巴旦木', fruitType:'almond',      desc:'坚果之王',                 rarity:'rare' },
    { key:'xia',    flower:'夏威夷果花',flowerType:'macadamia',  fruit:'夏威夷果',fruitType:'macadamia',  desc:'奶香四溢',                 rarity:'rare' },

    /* ---- 传说 5 ---- */
    { key:'long',   flower:'火龙果花', flowerType:'dragonfruit', fruit:'火龙果', fruitType:'dragonfruit', desc:'夜里开花，白天结果，很酷', rarity:'legend' },
    { key:'liu',    flower:'榴莲花',   flowerType:'durian',      fruit:'榴莲',   fruitType:'durian',      desc:'爱它的人超爱',             rarity:'legend' },
    { key:'bo',     flower:'菠萝蜜花', flowerType:'jackfruit',   fruit:'菠萝蜜', fruitType:'jackfruit',   desc:'世界上最大的果',           rarity:'legend' },
    { key:'wu',     flower:'无花果花', flowerType:'fig',         fruit:'无花果', fruitType:'fig',         desc:'不张扬的花，藏在心里的甜', rarity:'legend' },
    { key:'ke',     flower:'可可花',   flowerType:'cocoa',       fruit:'可可果', fruitType:'cocoa',       desc:'苦涩里的甜',               rarity:'legend' }
  ],

  negativeWords: [
    '焦虑','烦躁','内耗','emo','拖延','自卑','迷茫','熬夜','暴食','冷战',
    '攀比','嫉妒','社恐','压力','委屈','愤怒','倦怠','敏感','自我否定','压抑',
    '纠结','后悔','孤独','无助','紧张','失眠','低落','心烦','无力','沮丧',
    '摆烂','破防','内疚','失落','心慌','心累','无聊','丧气','怯场','健忘',
    '怕黑','认生','嘴笨','想太多','选择困难','玻璃心','容貌焦虑','身材焦虑','钱包空空','周一恐惧',
    '精神内耗','注意力涣散','自我怀疑','情绪化','过度担心','告别困难','开学恐惧','汇报恐惧','社交倦怠','深夜上头'
  ],

  positiveWords: [
    '开心','自信','平静','希望','勇气','松弛','满足','热爱','安心','喜悦',
    '感恩','期待','温柔','专注','自由',
    '元气','勇敢','乐观','热情','真诚','善良','明朗','清醒','自在','治愈',
    '童心','好奇','幸运','踏实','知足','舒心','笃定','明亮','活力','热忱',
    '释怀','安定','小确幸','被爱','丰盛','坦荡','松弛感','心流','满血复活','元气满满'
  ],

  gameplay: {
    radiusMin: 18,
    radiusMax: 33,
    floatSpeed: 14,
    popAnimDuration: 0.42,
    heatPerPop: [8, 14],
    fansPerPop: [1, 3],
    comboWindow: 4.0,
    fruitHeatBonus: 30,
    positiveCooldown: 2.0,
    fanLossOnHit: [5, 12],
    heatLossOnHit: [8, 15],
    bubbleTopLimit: 136,
    bubbleBottomMargin: 28,
    questionChance: 0.55,
    questionIntervalMin: 18,
    questionIntervalMax: 32
  },

  audio: { bgmVolume: 0.30, sfxVolume: 0.58 },

  danmuTexts: [
    '这波消得漂亮！','主播好解压','我也来试试','冲鸭！','看着就治愈',
    '焦虑退散～','这个特效好舒服','已关注','每天来蹲直播','心情好多了',
    '666','弹幕护体','好想玩','接好运','治愈了治愈了','上班偷偷看',
    '这个配色好温柔','舒服了舒服了','主播手速好快','同款焦虑',
    '坏情绪退退退','今天也要加油','看完心情好多了','来了来了',
    '摸鱼中','这气泡好可爱','我也想被治愈','求好运果','冲榜冲榜',
    '主播声音真好听','蹲一个宝箱','我来晚了吗','打卡打卡','今天也在',
    '点赞点了','黑粉退散','禁言他！','气氛组来了','这波互动可以的'
  ],

  badDanmuTexts: [
    '主播怎么了...','这个不该碰的','取关了','好情绪也没了','有点失望',
    '换个主播看','手滑了？','哎','主播振作一点','可惜了'
  ],

  viewerNames: [
    '小星星','夜猫子','路过的猫','小可爱','柠檬茶','晚风','橘子汽水',
    '安静的人','月亮邮差','小鹿','阿杰','糖糖','不熬夜','山海','清风'
  ],

  gifts: [
    { type:'heart',  name:'小心心', color:'#f08a9a', money:6 },
    { type:'star',   name:'小星星', color:'#f0c050', money:12 },
    { type:'flower', name:'小花朵', color:'#f0a0c0', money:18 },
    { type:'rocket', name:'小火箭', color:'#8ab0e8', money:60 },
    { type:'cake',   name:'小蛋糕', color:'#f0b080', money:35 }
  ],

  /* ---- 随机事件库：30 条，情感抓马为主 ---- */
  randomEvents: [
    /* 甜/暖 */
    { text:'榜一大哥连麦表白，直播间沸腾了！',   heat:60, fans:15, tone:'good' },
    { text:'观众连麦哭诉被绿，你三句话帮她理清', heat:55, fans:18, tone:'good' },
    { text:'有观众说你声音超治愈，刷了十个小心心', heat:25, fans:10, tone:'good' },
    { text:'你随口一句「别难为自己」被观众截图发微博', heat:45, fans:20, tone:'good' },
    { text:'直播间突然涌进一群新观众',           heat:30, fans:12, tone:'good' },
    { text:'榜一大哥说要给你介绍工作',           heat:35, fans:8,  tone:'good' },
    { text:'观众连麦说自己被父母催婚，你帮她支招', heat:40, fans:10, tone:'good' },
    { text:'有人连麦问「异地恋到底该不该坚持」', heat:50, fans:15, tone:'good' },
    { text:'观众说自己暗恋同事三年不敢表白',     heat:45, fans:12, tone:'good' },
    { text:'有人连麦说自己刚分手走不出来',       heat:50, fans:14, tone:'good' },
    { text:'观众问你「爱情和面包选哪个」',       heat:38, fans:9,  tone:'good' },
    { text:'有女生连麦哭诉自己被骗，你替她说话', heat:55, fans:16, tone:'good' },
    { text:'有男生连麦问怎么跟女朋友道歉',       heat:42, fans:11, tone:'good' },

    /* 抓马 */
    { text:'前男友突然进入直播间...',            heat:50, fans:-10, tone:'drama' },
    { text:'闺蜜在弹幕里爆料你的糗事',           heat:40, fans:8,  tone:'drama' },
    { text:'两个观众在弹幕里吵起来了',           heat:35, fans:-5, tone:'drama' },
    { text:'有人刷屏问「主播你谈过几次恋爱」',   heat:30, fans:-3, tone:'drama' },
    { text:'隔壁主播来连麦 PK，你输了',          heat:45, fans:-12, tone:'drama' },
    { text:'观众刷屏要求你讲前任的故事',         heat:40, fans:5,  tone:'drama' },
    { text:'你的真实身份被观众扒出来了',         heat:60, fans:-15, tone:'drama' },
    { text:'榜一和榜二因为谁刷得多吵起来了',     heat:35, fans:3,  tone:'drama' },
    { text:'有人连麦说自己的前任来抢亲了',       heat:65, fans:10, tone:'drama' },
    { text:'观众爆料隔壁直播间在模仿你',         heat:40, fans:-6, tone:'drama' },

    /* 坏/社死 */
    { text:'黑粉刷屏骂人，房管疯狂禁言',         heat:-10, fans:-12, tone:'bad' },
    { text:'直播间被举报，短暂限流',             heat:-20, fans:-8,  tone:'bad' },
    { text:'网络卡顿，画面卡成 PPT',             heat:-5,  fans:-6,  tone:'bad' },
    { text:'你不小心说错话上了热搜',             heat:30,  fans:-20, tone:'bad' },

    /* 轻松 */
    { text:'有观众在弹幕里分享自己养的猫',       heat:15, fans:6,  tone:'funny' },
    { text:'观众连麦讲了个冷笑话，全场沉默',     heat:20, fans:4,  tone:'funny' },
    { text:'你被观众发现偷偷在喝奶茶',           heat:22, fans:10, tone:'funny' },
    { text:'观众给你画了张Q版头像，好可爱',      heat:26, fans:9,  tone:'funny' },
    { text:'你的直播间被推荐上了首页',           heat:55, fans:22, tone:'good' },
    { text:'妈妈突然连麦，全场笑疯了',           heat:48, fans:14, tone:'funny' },
    { text:'观众弹幕齐刷「主播今天也很好看」',   heat:30, fans:11, tone:'good' },
    { text:'路人进来质疑「直播有什么用」',       heat:35, fans:-4, tone:'drama' },
    { text:'粉丝手写的信寄到了，看哭了',         heat:40, fans:13, tone:'good' },
    { text:'电脑突然蓝屏，你临场应变获赞',       heat:28, fans:7,  tone:'funny' },
    { text:'有观众连麦说考试失利，你安慰了她',   heat:36, fans:10, tone:'good' },
    { text:'平台发来优质主播邀约',               heat:60, fans:25, tone:'good' },
    { text:'有黑粉冒充你开小号，粉丝帮你辟谣',   heat:42, fans:5,  tone:'drama' },
    { text:'你随口哼的歌被观众做成铃声',         heat:33, fans:12, tone:'good' },
    { text:'观众的狗闯进连麦镜头，全网萌翻',     heat:38, fans:15, tone:'funny' },
    { text:'你发起「一分钟表情包猜猜猜」小游戏，全场玩疯了', heat:40, fans:14, tone:'funny' },
    { text:'直播间整点幸运抽奖开始，礼物雨哗哗地下', heat:45, fans:16, tone:'good' },
    { text:'你和粉丝连麦玩「你画我猜」，笑到停不下来', heat:38, fans:13, tone:'funny' },
    { text:'观众点歌，你清唱了一段，被夸超好听',   heat:32, fans:11, tone:'good' },
    { text:'抽奖抽中了一位同样焦虑的粉丝，你们互相打气', heat:36, fans:12, tone:'good' },
    { text:'你发起「坏情绪粉碎挑战」，弹幕齐刷响应', heat:42, fans:15, tone:'good' },
    { text:'新粉丝连麦说你治愈了她整个备考季',     heat:44, fans:14, tone:'good' },
    { text:'你直播开盲盒抽出隐藏款，全场沸腾',     heat:40, fans:13, tone:'funny' }
  ],
  eventIntervalMin: 8,
  eventIntervalMax: 14,

  /* 好运果：概率提高、保底缩短 */
  fruitChance: 0.60,
  fruitPity: 2,

  questions: [
    { avatar:'🌙', name:'夜猫子', text:'我每天加班到很晚，回家就报复性熬夜刷手机，明知道该睡就是停不下来。', options:[
      { text:'给自己设个关屏闹钟，手机放远一点，先赢一小步。', heat:22, fans:5 },
      { text:'下班后留一小时做自己的事，别把自由全熬到凌晨。', heat:28, fans:7 }
    ]},
    { avatar:'🍋', name:'柠檬茶', text:'发消息没人回，我就开始复盘自己是不是说错话了。', options:[
      { text:'先把聊天框关了，去吃点东西，脑补暂停营业。', heat:26, fans:6 },
      { text:'给对方一点时间，也给自己一点清净。', heat:22, fans:5 }
    ]},
    { avatar:'🐱', name:'路过的猫', text:'我总是三分钟热度，想学很多东西，一遇到困难就想放弃。', options:[
      { text:'今天只学十分钟，先把三分钟热度续个杯。', heat:24, fans:6 },
      { text:'挑一个最想学的，其他先放进收藏夹吃灰。', heat:28, fans:7 }
    ]},
    { avatar:'🌿', name:'晚风', text:'我和朋友闹掰了，其实还想和好，又拉不下面子。', options:[
      { text:'发句「最近咋样」，成年人也可以先递台阶。', heat:26, fans:6 },
      { text:'先想想你想念的是这个人，还是以前的热闹。', heat:22, fans:5 }
    ]},
    { avatar:'☕', name:'安静的人', text:'每天上班下班，感觉生活像复制粘贴。', options:[
      { text:'给今天加个小彩蛋，下班绕路买束花也行。', heat:24, fans:6 },
      { text:'周末安排一件新鲜事，哪怕只是去没去过的街区。', heat:28, fans:7 }
    ]},
    { avatar:'🎈', name:'小鹿', text:'我特别害怕冲突，别人一凶我就想哭，事后又觉得自己很怂。', options:[
      { text:'先练习说「我想想再回复」，给自己争取点缓冲。', heat:24, fans:6 },
      { text:'眼泪可以掉，边界也可以立，两件事不冲突。', heat:28, fans:7 }
    ]},
    { avatar:'🧸', name:'糖糖', text:'分手三个月了，还是会偷偷点开前任主页。', options:[
      { text:'先把主页屏蔽一阵，给手指放个假。', heat:26, fans:6 },
      { text:'想看就承认自己还在难过，然后去做点让自己舒服的事。', heat:22, fans:5 }
    ]},
    { avatar:'🌊', name:'山海', text:'爸妈总拿我和别人家孩子比，我已经很努力了。', options:[
      { text:'下次就回一句：我也想听听你们觉得我哪里做得好。', heat:28, fans:7 },
      { text:'别人的进度条归别人，你的日子按自己的节奏来。', heat:24, fans:6 }
    ]},
    { avatar:'🕯️', name:'不熬夜', text:'最近对什么都提不起兴趣，以前喜欢的事也懒得做。', options:[
      { text:'今天先出门走十分钟，别给自己布置大工程。', heat:22, fans:5 },
      { text:'找个信任的人聊聊，最近辛苦的事可以分一点出去。', heat:26, fans:6 }
    ]},
    { avatar:'🎐', name:'橘子汽水', text:'同事一找我帮忙我就答应，结果自己忙到飞起。', options:[
      { text:'把「我考虑一下」设成快捷回复，先别秒答。', heat:26, fans:6 },
      { text:'今天先拒绝一件小事，练练手感。', heat:24, fans:6 }
    ]},
    { avatar:'🍿', name:'吃瓜群众', text:'对象说「随便」，我真随便选了餐厅，现在冷战两小时。', options:[
      { text:'下次给二选一：火锅还是烧烤，别开放填空题。', heat:28, fans:7 },
      { text:'先点外卖吧，饿着肚子吵架太亏了。', heat:24, fans:6 }
    ]},
    { avatar:'🧋', name:'续命中', text:'同事总说马上下班，最后把活留给我，我快成公共充电宝了。', options:[
      { text:'到点就撤，充电宝也得回家充电。', heat:30, fans:8 },
      { text:'问清楚优先级，别默默把所有人的任务都接住。', heat:24, fans:6 }
    ]},
    { avatar:'🕵️', name:'侦探小周', text:'朋友发朋友圈说「有些人真让人失望」，我怀疑在说我。', options:[
      { text:'朋友圈没写身份证号，先别急着认领。', heat:26, fans:7 },
      { text:'真有误会就直接问，别在脑内开庭到天亮。', heat:24, fans:6 }
    ]},
    { avatar:'🐈', name:'猫猫教教主', text:'我想早睡、健身、读书、学英语，结果每天最稳定的是点奶茶。', options:[
      { text:'奶茶先留着，今天只完成一个小目标。', heat:25, fans:6 },
      { text:'读两页书就算开张，别一上来给自己排满 KPI。', heat:22, fans:5 }
    ]},
    { avatar:'💬', name:'已读乱回', text:'我给喜欢的人发了三段话，对方只回一个「嗯」。', options:[
      { text:'手机先放下，别让一个字决定你今天的心情。', heat:30, fans:8 },
      { text:'去找朋友吃饭，现实里还有很多人会好好接话。', heat:26, fans:7 }
    ]},
    { avatar:'🎭', name:'戏精本人', text:'开会时老板突然问我意见，我脑子空白，只说了句「都挺好的」。', options:[
      { text:'下次先说「我捋一下重点」，给大脑三秒加载。', heat:24, fans:6 },
      { text:'会后补充也来得及，职场又没有抢答器。', heat:22, fans:5 }
    ]},
    { avatar:'🧳', name:'周末失踪人口', text:'周末本来想休息，家里人却安排了三场饭局。', options:[
      { text:'挑一场最想去的，剩下的改天再约。', heat:28, fans:7 },
      { text:'给自己留半天放空，周末也需要预约制。', heat:24, fans:6 }
    ]},
    { avatar:'🫠', name:'工位融化中', text:'我发工资当天很快乐，三天后就开始研究怎么省钱。', options:[
      { text:'先给自己留一笔快乐基金，别把日子过成纯存档。', heat:25, fans:6 },
      { text:'记一周花销，看看钱到底偷偷溜去哪儿了。', heat:22, fans:5 }
    ]},
    { avatar:'🥲', name:'社交电量1%', text:'朋友约我出门，我想去又想宅，出门前已经累了。', options:[
      { text:'约短一点，喝杯东西就回家，社交也能轻量化。', heat:24, fans:6 },
      { text:'今天想宅就宅，给自己发张免打扰通行证。', heat:22, fans:5 }
    ]},
    { avatar:'🪴', name:'盆栽观察员', text:'我总觉得别人都在进步，只有我停在原地。', options:[
      { text:'翻翻半年前的自己，你可能已经走了挺远。', heat:28, fans:7 },
      { text:'今天做一件能让明天轻松一点的小事，就算进度。', heat:24, fans:6 }
    ]}
  ],

  shopItems: [
    { id:'doubleHeat', name:'热度翻倍券', desc:'下一局热度获取 ×2', cost:8, type:'doubleHeat', icon:'🔥' },
    { id:'extraFans', name:'涨粉加速器', desc:'下一局粉丝获取 ×1.5', cost:6, type:'extraFans', icon:'📈' }
  ],

  /* 直播间皮肤（好运果兑换，买后即换） */
  themes: [
    { id:'warm',     name:'暖阳奶油', cost:0, bg:'' },
    { id:'sakura',   name:'樱花粉',   cost:4, bg:'radial-gradient(circle at 18% 14%,rgba(255,214,232,.7),transparent 55%),radial-gradient(circle at 85% 88%,rgba(255,228,238,.7),transparent 50%),linear-gradient(160deg,#fff3f7 0%,#ffeaf2 55%,#fff0f5 100%)' },
    { id:'mint',     name:'薄荷奶绿', cost:4, bg:'radial-gradient(circle at 18% 14%,rgba(214,240,226,.7),transparent 55%),radial-gradient(circle at 85% 88%,rgba(228,244,236,.7),transparent 50%),linear-gradient(160deg,#f2faf5 0%,#e8f6ef 55%,#f0faf4 100%)' },
    { id:'lavender', name:'星雾紫',   cost:6, bg:'radial-gradient(circle at 18% 14%,rgba(226,214,248,.75),transparent 55%),radial-gradient(circle at 85% 88%,rgba(238,228,252,.75),transparent 50%),linear-gradient(160deg,#f6f2fc 0%,#efe8fa 55%,#f4eefb 100%)' },
    { id:'sunset',   name:'落日蜜桃', cost:6, bg:'radial-gradient(circle at 18% 14%,rgba(255,224,196,.75),transparent 55%),radial-gradient(circle at 85% 88%,rgba(255,214,214,.75),transparent 50%),linear-gradient(160deg,#fff6ee 0%,#ffeee2 55%,#fff2ea 100%)' }
  ],
  themeEmoji: { warm:'🌤️', sakura:'🌸', mint:'🍃', lavender:'🌌', sunset:'🌅' },

  /* 主播头像（好运果兑换） */
  avatars: [
    { id:'sun',     name:'小太阳', emoji:'🌞', cost:0 },
    { id:'moon',    name:'小月亮', emoji:'🌙', cost:2 },
    { id:'cat',     name:'小猫咪', emoji:'🐱', cost:3 },
    { id:'rabbit',  name:'小兔子', emoji:'🐰', cost:3 },
    { id:'flower',  name:'小花花', emoji:'🌸', cost:4 },
    { id:'fox',     name:'小狐狸', emoji:'🦊', cost:5 },
    { id:'unicorn', name:'小独角', emoji:'🦄', cost:8 }
  ],

  /* 花园商城：只售卖种植与鲜花经营相关用品 */
  goodsItems: [
    { id:'fertilizer', name:'花园营养液', desc:'让一株植物立即成长一步', cost:30, kind:'gardenItem', stockKey:'fertilizer', icon:'🧴' },
    { id:'doubleHarvest', name:'双倍收获卡', desc:'下次收获有概率获得双倍鲜花', cost:50, kind:'gardenItem', stockKey:'doubleCards', icon:'🌼' },
    { id:'tripleHarvest', name:'三倍收获卡', desc:'下次收获有较低概率获得三倍鲜花', cost:90, kind:'gardenItem', stockKey:'tripleCards', icon:'🌷' },
    { id:'seedPack', name:'种子盲盒', desc:'打开后随机获得 3 颗普通、随机或神奇种子', cost:75, kind:'seedBox', amount:3, icon:'🎁' },
    { id:'magicSeed', name:'神奇种子', desc:'收获时揭晓特别花种与疗愈功效', cost:95, kind:'magicSeed', amount:1, icon:'✨' }
  ],

  /* 首发版本暂不开放调香特别日，保留旧存档兼容 */
  perfumeEvery: 999999,
  blendNeed: 6,
  treatTexts: { milkTea:'今天喝了一杯超好喝的快乐奶茶，感觉好幸福～', snacks:'零食大礼包一打开，幸福感爆棚！', coffee:'冰美式下肚，感觉能连击到天亮！', cake:'治愈小蛋糕，甜到心里了～' },
  flowerEmoji: { peach:'🍑',apricot:'🌸',apple:'🍎',pear:'🍐',pomegranate:'🌹',tangerine:'🍊',jujube:'🧧',strawberry:'🍓',banana:'🍌',mango:'🥭',grape:'🍇',watermelon:'🍉',lemon:'🍋',pomelo:'🍈',loquat:'🍊',bayberry:'🫐',persimmon:'🧡',papaya:'🍈',starfruit:'⭐',mulberry:'🫐',hawthorn:'🍒',chestnut:'🌰',hazelnut:'🌰',cashew:'🌙',pistachio:'🟢',sunflower:'🌻',cantaloupe:'🍈',guava:'🍏',waxapple:'🍎',olive:'🫒',cherry:'🍒',plum:'🌺',orange:'🍊',walnut:'🌰',blueberry:'🫐',coconut:'🥥',kiwi:'🥝',lychee:'🌸',longan:'🍇',mangosteen:'🟣',raspberry:'🫐',blackberry:'🫐',cranberry:'🔴',almond:'🌰',macadamia:'🟤',dragonfruit:'🐉',durian:'🍍',jackfruit:'🍈',fig:'🟤',cocoa:'🍫' },
  perfumeBase: { common:[320,720], rare:[1600,3600], legend:[8000,16000] },

  /* 热度 PK：粉丝破 1000 才能开播 PK */
  pkFansNeed: 1000,
  pkNames: [ '糖糖酱','阿泽','月亮姐姐','老王聊车','奶芙','半糖','大猫老师','菲菲','皮蛋','安安','麦冬','柚子茶' ],
  pkChance: 0.3,
  pkDuration: 15,

  /* 随机香水词条库：与直播玩法强关联 */
  perfumePrefixes: [
    '好运','财富','涨粉','顶流','爆款','锦鲤','流星','月光',
    '元气','甜梦','心动','解压','治愈','彩虹','桃花','招财',
    '应援','热搜','人气','守护','星光','平安','幸运','甜蜜',
    '火箭','礼物','粉丝','冲榜','冠军','追光','暖阳','清梦',
    '浪漫','无忧','快落','暴富','脱单','上岸','逢考必过','躺赢'
  ],

  saveKey: 'bad_emotion_live_v7'
};

/* 50 种花果统一颜色表 */
const PALETTE = {
  peach:      { f:['#ffd0e0','#ffc0d4','#ff9ab8'], r:'#ff9fb0' },
  apricot:    { f:['#ffe6ee','#ffd6e2','#ffb8cc'], r:'#ffb878' },
  apple:      { f:['#ffeaf0','#ffdae6','#ffc0d4'], r:'#f06878' },
  pear:       { f:['#fffafd','#fff0f6','#f0dce8'], r:'#e4dc8c' },
  pomegranate:{ f:['#ffc0ce','#ffaebe','#ff8aa4'], r:'#e84858' },
  tangerine:  { f:['#fff2d8','#ffe6bc','#ffd090'], r:'#f08838' },
  jujube:     { f:['#f4f8cc','#eaf0b0','#d0d888'], r:'#a46848' },
  strawberry: { f:['#fff0f4','#ffe4ec','#ffccd8'], r:'#f2657a' },
  banana:     { f:['#f8f8e0','#f0f0c8','#d8d8a0'], r:'#f0d858' },
  mango:      { f:['#fff8e8','#fff0d0','#ffe0a8'], r:'#f5a828' },
  grape:      { f:['#f0e4f8','#e4d0f0','#c8a8e0'], r:'#a87ac8' },
  watermelon: { f:['#fff0f0','#ffe0e0','#ffc8c8'], r:'#e85868' },
  lemon:      { f:['#fffef0','#fffad0','#fff0a0'], r:'#f0d858' },
  pomelo:     { f:['#fffaf0','#fff0d8','#ffe0a8'], r:'#e8c060' },
  loquat:     { f:['#fff4e8','#ffe8d0','#ffd0a8'], r:'#f0b060' },
  bayberry:   { f:['#f8e8f0','#f0d0e0','#e0a8c0'], r:'#c84868' },
  persimmon:  { f:['#fff2e8','#ffe0d0','#ffc8a8'], r:'#f08038' },
  papaya:     { f:['#fff4e8','#ffe4d0','#ffc8a8'], r:'#f0a060' },
  starfruit:  { f:['#fff8e8','#ffefc8','#ffe0a0'], r:'#e8c848' },
  mulberry:   { f:['#f0e4f0','#e0d0e0','#c8a8c8'], r:'#7a4a7a' },
  hawthorn:   { f:['#fff0f0','#ffe0e0','#ffc8c8'], r:'#e85050' },
  chestnut:   { f:['#f4e8d8','#e8d8c0','#d8b898'], r:'#8a5a3a' },
  hazelnut:   { f:['#f8ecd8','#f0d8b8','#e0c098'], r:'#b88858' },
  cashew:     { f:['#fff8e0','#fff0c8','#ffe0a0'], r:'#e8c888' },
  pistachio:  { f:['#f0f8e0','#e4f0c8','#d0e0a8'], r:'#a8c878' },
  sunflower:  { f:['#fff8d0','#ffefb0','#ffd888'], r:'#e8c048' },
  cantaloupe: { f:['#fff8e0','#fff0c8','#ffe0a0'], r:'#f0c878' },
  guava:      { f:['#fff0f0','#ffe8e8','#ffd8d8'], r:'#e8a8a8' },
  waxapple:   { f:['#fff0f4','#ffe0e8','#ffc8d0'], r:'#e85878' },
  olive:      { f:['#f0f4e0','#e0e8c8','#c8d0a8'], r:'#7a8a48' },
  cherry:     { f:['#ffd6e2','#ffc6d6','#ff9cb8'], r:'#e84868' },
  plum:       { f:['#ffe0ec','#ffd0e2','#ffb0cc'], r:'#a468c0' },
  orange:     { f:['#fffaf0','#fff4dc','#ffe8b8'], r:'#f5a828' },
  walnut:     { f:['#f4f0e8','#ece4d8','#d8ccb8'], r:'#c8a878' },
  blueberry:  { f:['#f0f0f8','#e4e4f0','#c8c8e0'], r:'#7c9bd8' },
  coconut:    { f:['#f8f4e8','#f0e8d8','#d8ccb0'], r:'#c8a878' },
  kiwi:       { f:['#f8f8e8','#f0f0d8','#d8d8b8'], r:'#a8c878' },
  lychee:     { f:['#fff0f0','#ffe0e0','#ffc8c8'], r:'#e84858' },
  longan:     { f:['#f8f0e0','#f0e4c8','#e0d0a8'], r:'#c8a878' },
  mangosteen: { f:['#f0e0f0','#e8d0e8','#d0b0d0'], r:'#8a4a8a' },
  raspberry:  { f:['#fff0f4','#ffe0e8','#ffc8d8'], r:'#e85878' },
  blackberry: { f:['#e8e0e8','#d8d0d8','#c0b0c0'], r:'#5a3a5a' },
  cranberry:  { f:['#fff0f0','#ffe0e0','#ffc8c8'], r:'#c84858' },
  almond:     { f:['#f8ecdc','#f0dcc0','#e0c0a0'], r:'#c8a878' },
  macadamia:  { f:['#f8f0e0','#f0e0c8','#e0c8a8'], r:'#b8a878' },
  dragonfruit:{ f:['#fff0f8','#ffe0f0','#ffb8d8'], r:'#f068a8' },
  durian:     { f:['#f8f4d8','#f0e8b8','#e0d090'], r:'#c8b848' },
  jackfruit:  { f:['#fff4d8','#ffe8b8','#ffd090'], r:'#c8a848' },
  fig:        { f:['#f8f0e8','#f0e4d8','#d8c8b8'], r:'#b888a8' },
  cocoa:      { f:['#f4e8d8','#e8d0b8','#d0b090'], r:'#8a5a3a' }
};

const TONE_COLORS = { good:'#f0a0b0', drama:'#c8a0d8', bad:'#c8a0a0', funny:'#a0d0a0' };

const ACHIEVEMENTS = [
  { id:'combo5',   name:'小有连击',   desc:'单日达成 5 连击',     icon:'✨', check:function(){ return saveData.maxComboEver >= 5; } },
  { id:'combo10',  name:'连击达人',   desc:'单日达成 10 连击',    icon:'⚡', check:function(){ return saveData.maxComboEver >= 10; } },
  { id:'combo20',  name:'连击之王',   desc:'单日达成 20 连击',    icon:'🔥', check:function(){ return saveData.maxComboEver >= 20; } },
  { id:'fan50',    name:'小有名气',   desc:'当前粉丝达到 50',     icon:'💫', check:function(){ return saveData.totalFans >= 50; } },
  { id:'fan200',   name:'人气主播',   desc:'当前粉丝达到 200',    icon:'🌟', check:function(){ return saveData.totalFans >= 200; } },
  { id:'fan1000',  name:'顶流主播',   desc:'当前粉丝达到 1000',   icon:'👑', check:function(){ return saveData.totalFans >= 1000; } },
  { id:'day3',     name:'坚持三天',   desc:'累计直播 3 天',       icon:'🌱', check:function(){ return saveData.totalDays >= 3; } },
  { id:'day7',     name:'一周主播',   desc:'累计直播 7 天',       icon:'🌿', check:function(){ return saveData.totalDays >= 7; } },
  { id:'day30',    name:'月度之星',   desc:'累计直播 30 天',      icon:'🌳', check:function(){ return saveData.totalDays >= 30; } },
  { id:'flower5',  name:'花果收藏家', desc:'解锁 5 种花果',       icon:'🌸', check:function(){ return saveData.unlocked.length >= 5; } },
  { id:'flower20', name:'花果百科',   desc:'解锁 20 种花果',      icon:'📖', check:function(){ return saveData.unlocked.length >= 20; } },
  { id:'flower50', name:'满园花果',   desc:'解锁全部 50 种花果',  icon:'🍎', check:function(){ return saveData.unlocked.length >= CONFIG.pairs.length; } },
  { id:'pkWin1',    name:'PK 首胜',    desc:'第一次赢下热度 PK',   icon:'⚔️', check:function(){ return saveData.pkWins >= 1; } },
  { id:'earn1w',    name:'月入过万',   desc:'累计收益达到 1 万元',  icon:'💰', check:function(){ return saveData.totalEarned >= 10000; } },
  { id:'earn10w',   name:'收益大亨',   desc:'累计收益达到 10 万元', icon:'💎', check:function(){ return saveData.totalEarned >= 100000; } },
  { id:'lucky1',   name:'好运初现',   desc:'第一次收集好运果',     icon:'🍀', check:function(){ return saveData.luckyCount >= 1; } },
  { id:'lucky10',  name:'好运连连',   desc:'累计收集 10 个好运果', icon:'🎁', check:function(){ return saveData.luckyCount >= 10; } },
  { id:'answer10', name:'知心主播', desc:'累计回答 10 次观众提问', icon:'💬', check:function(){ return saveData.answeredCount >= 10; } },
  { id:'gardenPlant1',name:'播下希望',desc:'第一次在花园种下种子',icon:'🌱',check:function(){return (saveData.garden&&saveData.garden.totalPlanted||0)>=1;} },
  { id:'gardenHarvest1',name:'第一束花',desc:'第一次收获鲜花',icon:'💐',check:function(){return (saveData.garden&&saveData.garden.harvestCount||0)>=1;} },
  { id:'gardenHarvest10',name:'小小花农',desc:'累计收获 10 次',icon:'🌷',check:function(){return (saveData.garden&&saveData.garden.harvestCount||0)>=10;} },
  { id:'gardenPlots3',name:'花园扩建',desc:'解锁 3 块土地',icon:'🪴',check:function(){return (saveData.garden&&saveData.garden.unlockedPlots||1)>=3;} },
  { id:'gardenFlowers50',name:'鲜花满篮',desc:'累计收获 50 朵鲜花',icon:'🧺',check:function(){return (saveData.garden&&saveData.garden.totalFlowers||0)>=50;} },
  { id:'gardenBouquet4',name:'丰盛花束',desc:'单次收获达到 4 朵鲜花',icon:'💐',check:function(){return (saveData.garden&&saveData.garden.maxHarvestBatch||0)>=4;} },
  { id:'gardenPlots6',name:'花园主人',desc:'解锁全部 6 块土地',icon:'🏡',check:function(){return (saveData.garden&&saveData.garden.unlockedPlots||1)>=6;} },
  { id:'flowerLive1',name:'花香开播',desc:'完成第一次卖花直播',icon:'🎥',check:function(){return (saveData.garden&&saveData.garden.flowerLives||0)>=1;} }
];

const FONT_FAMILY = '"PingFang SC","Hiragino Sans GB","Microsoft YaHei",sans-serif';

/* ============================================================
   二、状态
   ============================================================ */
const state = {
  currentDay: 1, phase: 'idle', paused: false, questionOpen: false,
  bubbles: [], particles: [], floats: [], gifts: [],
  dragging: null, dragOffX: 0, dragOffY: 0, pointerId: null,
  heat: 0, fans: 0, heatDisplay: 0, fansDisplay: 0,
  combo: 0, comboTimer: 0, positiveCooldown: 0,
  dayStats: { popped: 0, fansGained: 0, heatPeak: 0, answered: 0 },
  fruitCollected: false, hasFruit: false,
  todayPair: null, todayFlower: '桃花', todayFlowerType: 'peach', todayFruit: '桃子', todayFruitType: 'peach',
  tree: { active: false, visible: false, t: 0, duration: 2.6, branches: [], tips: [], onDone: null },
  eventTimer: 0, questionTimer: 0, time: 0, lastTime: 0,
  pk: null, moneyDisplay: 0, perfumeMode: false, blendCount: 0,
  specials: [], specialTimer: 16, snapTick: 0,
  activeBuffs: { comboShield: false, doubleHeat: false, extraFans: false }
};

let saveData = {
  totalHeat: 0, totalFans: 0, totalPopped: 0, totalDays: 0, bestDay: 0,
  unlocked: [], luckyCount: 0, daysSinceLucky: 0,
  unlockedAchievements: [], maxComboEver: 0,
  answeredCount: 0, ownedItems: [],
  currentDay: 1, hintedFruit: false, hintedPositive: false, hintedBlend: false, daySnapshot: null,
  money: 0, totalEarned: 0, garden: { seeds: 0, seedInventory: [], lastWaterDay: 0, plots: [], fertilizer: 0, doubleCards: 0, tripleCards: 0, unlockedPlots:1, flowers:0, harvestCount:0, totalFlowers:0, totalPlanted:0 }, theme: "warm", avatar: "sun",
  ownedThemes: [], ownedAvatars: [], perfumes: [], pkWins: 0, seenIntro: false, seenStoryIntro: false
};

/* ============================================================
   三、DOM
   ============================================================ */
const canvas = document.getElementById('gameCanvas');
const ctx = canvas.getContext('2d');
const hudEl = document.getElementById('hud');
const hudDayEl = document.getElementById('hudDay');
const hudHeatEl = document.getElementById('hudHeat');
const hudFansEl = document.getElementById('hudFans');
const hudLuckyEl = document.getElementById('hudLucky');
const topRightEl = document.getElementById('topRight');
const btnMute = document.getElementById('btnMute');
const btnShop = document.getElementById('btnShop');
const btnGardenQuickEl = document.getElementById('btnGardenQuick');
const btnCollection = document.getElementById('btnCollection');
const danmuLayer = document.getElementById('danmuLayer');
const introHintEl = document.getElementById('introHint');
const liveBarEl = document.getElementById('liveBar');
const liveViewersEl = document.getElementById('liveViewers');
const btnExit = document.getElementById('btnExit');
const btnLikeEl = document.getElementById('btnLike');
const hostAvatarEl = document.getElementById('hostAvatar');
const eventBannerEl = document.getElementById('eventBanner');
const hudMoneyEl = document.getElementById('hudMoney');
const pkBarEl = document.getElementById('pkBar');
const pkMyFillEl = document.getElementById('pkMyFill');
const pkOppFillEl = document.getElementById('pkOppFill');
const pkMyScoreEl = document.getElementById('pkMyScore');
const pkOppScoreEl = document.getElementById('pkOppScore');
const pkTimeEl = document.getElementById('pkTime');
const pkOppShortEl = document.getElementById('pkOppShort');
const pkOverlay = document.getElementById('pkOverlay');
const pkNameEl = document.getElementById('pkName');
const pkAcceptEl = document.getElementById('pkAccept');
const pkDeclineEl = document.getElementById('pkDecline');
const introTutorialEl = document.getElementById('introTutorial');
const tutNextEl = document.getElementById('tutNext');
const tutSkipEl = document.getElementById('tutSkip');
const resultAuctionEl = document.getElementById('resultAuction');
const auctionOverlay = document.getElementById('auctionOverlay');
const auNameEl = document.getElementById('auName');
const auNoteEl = document.getElementById('auNote');
const auBidderEl = document.getElementById('auBidder');
const auPriceEl = document.getElementById('auPrice');
const auDealEl = document.getElementById('auDeal');
const shopMoneyEl = document.getElementById('shopMoney');

const tabShopFruitEl = document.getElementById('tabShopFruit');
const tabShopGoodsEl = document.getElementById('tabShopGoods');
const comboBadgeEl = document.getElementById('comboBadge');
const homeScreen = document.getElementById('homeScreen');
const gardenScreen = document.getElementById('gardenScreen');
const gardenPlotsEl = document.getElementById('gardenPlots');
const gardenSeedsEl = document.getElementById('gardenSeeds');
const gardenMoneyEl = document.getElementById('gardenMoney');
const gardenTipEl = document.getElementById('gardenTip');
const gameMenuEl = document.getElementById('gameMenu');
const saveFileInput = document.getElementById('saveFileInput');
const dataScreen = document.getElementById('dataScreen');
const collectionScreen = document.getElementById('collectionScreen');
const shopScreen = document.getElementById('shopScreen');
const achievementScreen = document.getElementById('achievementScreen');
const resultScreen = document.getElementById('resultScreen');
const collectionGridEl = document.getElementById('collectionGrid');
const shopGridEl = document.getElementById('shopGrid');
const shopBalanceEl = document.getElementById('shopBalance');
const achievementListEl = document.getElementById('achievementList');
const resultTitleEl = document.getElementById('resultTitle');
const resultSubEl = document.getElementById('resultSub');
const resultStatsEl = document.getElementById('resultStats');
const resultRewardEl = document.getElementById('resultReward');
const resultBtnEl = document.getElementById('resultBtn');
const questionOverlay = document.getElementById('questionOverlay');
const qAvatar = document.getElementById('qAvatar');
const qName = document.getElementById('qName');
const qText = document.getElementById('qText');
const qOptions = document.getElementById('qOptions');

/* ============================================================
   四、工具
   ============================================================ */
function randInt(a,b){ return Math.floor(a+Math.random()*(b-a+1)); }
function clamp(v,a,b){ return v<a?a:(v>b?b:v); }
function shuffle(arr){ for(let i=arr.length-1;i>0;i--){ const j=Math.floor(Math.random()*(i+1)); const t=arr[i]; arr[i]=arr[j]; arr[j]=t; } return arr; }
function hashStr(s){ let h=0; for(let i=0;i<s.length;i++) h=(h*31+s.charCodeAt(i))|0; return Math.abs(h); }
function formatNum(n){ n=Math.round(n); if(n>=10000) return (n/1000).toFixed(0)+'k'; if(n>=1000) return (n/1000).toFixed(1)+'k'; return String(n); }

/* ============================================================
   五、存储
   ============================================================ */
function loadSave(){
  try{
    const raw = localStorage.getItem(CONFIG.saveKey);
    if(raw){
      const d = JSON.parse(raw);
      if(d && typeof d==='object'){
        saveData.totalHeat = d.totalHeat||0;
        saveData.totalFans = d.totalFans||0;
        saveData.totalPopped = d.totalPopped||0;
        saveData.totalDays = d.totalDays||0;
        saveData.bestDay = d.bestDay||0;
        saveData.unlocked = Array.isArray(d.unlocked)?d.unlocked:[];
        saveData.luckyCount = d.luckyCount||0;
        saveData.daysSinceLucky = d.daysSinceLucky||0;
        saveData.unlockedAchievements = Array.isArray(d.unlockedAchievements)?d.unlockedAchievements:[];
        saveData.maxComboEver = d.maxComboEver||0;
        saveData.answeredCount = d.answeredCount||0;
        saveData.ownedItems = Array.isArray(d.ownedItems)?d.ownedItems:[];
        saveData.currentDay = d.currentDay||1;
        saveData.hintedFruit = !!d.hintedFruit;
        saveData.hintedPositive = !!d.hintedPositive;
        saveData.daySnapshot = d.daySnapshot||null;
        saveData.money = d.money||0;
        saveData.totalEarned = d.totalEarned||0;
        saveData.garden = d.garden && typeof d.garden==='object' ? Object.assign({seeds:0,plots:[],fertilizer:0,doubleCards:0,tripleCards:0,unlockedPlots:1,flowers:0,harvestCount:0,totalFlowers:0,totalPlanted:0},d.garden) : {seeds:0,plots:[],fertilizer:0,doubleCards:0,tripleCards:0,unlockedPlots:1,flowers:0,harvestCount:0,totalFlowers:0,totalPlanted:0};
        if(!Array.isArray(saveData.garden.plots)) saveData.garden.plots=[];
        saveData.garden.unlockedPlots=clamp(Math.max(Number(saveData.garden.unlockedPlots)||1,Math.min(6,saveData.garden.plots.length)),1,6);saveData.garden.flowers=Number(saveData.garden.flowers)||0;saveData.garden.harvestCount=Number(saveData.garden.harvestCount)||0;saveData.garden.totalFlowers=Number(saveData.garden.totalFlowers)||0;saveData.garden.totalPlanted=Number(saveData.garden.totalPlanted)||saveData.garden.plots.length;
        saveData.theme = d.theme||"warm";
        saveData.avatar = d.avatar||"sun";
        saveData.ownedThemes = Array.isArray(d.ownedThemes)?d.ownedThemes:[];
        saveData.ownedAvatars = Array.isArray(d.ownedAvatars)?d.ownedAvatars:[];
        saveData.perfumes = Array.isArray(d.perfumes)?d.perfumes:[];
        saveData.pkWins = d.pkWins||0;
        saveData.seenIntro = !!d.seenIntro;
        saveData.seenStoryIntro = !!d.seenStoryIntro;
        saveData.hintedBlend = !!d.hintedBlend;
      }
    }
  }catch(e){}
}
function persist(){ try{ localStorage.setItem(CONFIG.saveKey, JSON.stringify(saveData)); }catch(e){} }

/* ============================================================
   六、音频
   ============================================================ */
const AudioSys = (function(){
  let actx=null,master=null,bgmGain=null,sfxGain=null;
  let bgmTimer=null,bgmPlaying=false,muted=false,step=0,nextTime=0;
  const SCALE=[261.63,293.66,329.63,392.00,440.00,523.25,587.33,659.25,783.99,880.00];
  const MELODY=[0,2,4,7,5,4,2,0,2,4,5,7,8,7,5,4,0,2,4,7,9,7,5,4,2,4,5,4,2,0,2,4];
  function init(){ if(actx) return; try{ const AC=window.AudioContext||window.webkitAudioContext; if(!AC) return; actx=new AC(); master=actx.createGain(); master.gain.value=muted?0:1; master.connect(actx.destination); bgmGain=actx.createGain(); bgmGain.gain.value=CONFIG.audio.bgmVolume; bgmGain.connect(master); sfxGain=actx.createGain(); sfxGain.gain.value=CONFIG.audio.sfxVolume; sfxGain.connect(master); }catch(e){ actx=null; } }
  function tone(freq,time,dur,vol,dest){ if(!actx) return; try{ const o=actx.createOscillator(),g=actx.createGain(); o.type='triangle'; o.frequency.value=freq; g.gain.setValueAtTime(0.0001,time); g.gain.exponentialRampToValueAtTime(vol,time+0.03); g.gain.exponentialRampToValueAtTime(0.0001,time+dur); o.connect(g); g.connect(dest||bgmGain); o.start(time); o.stop(time+dur+0.06); }catch(e){} }
  function schedule(){ if(!actx||!bgmPlaying) return; const beat=0.54; while(nextTime<actx.currentTime+0.35){ const n=MELODY[step%MELODY.length]; tone(SCALE[n],nextTime,1.7,0.17,bgmGain); if(step%8===0) tone(SCALE[0]/2,nextTime,3.2,0.10,bgmGain); nextTime+=beat; step++; } }
  function startBgm(){ init(); if(!actx||bgmPlaying) return; if(actx.state==='suspended'){ try{ actx.resume(); }catch(e){} } bgmPlaying=true; nextTime=actx.currentTime+0.15; step=0; bgmTimer=setInterval(schedule,90); }
  function stopBgm(){ bgmPlaying=false; if(bgmTimer){ clearInterval(bgmTimer); bgmTimer=null; } }
  function pop(){ init(); if(!actx) return; try{ const t=actx.currentTime; const base=720+Math.random()*260; const o=actx.createOscillator(),g=actx.createGain(); o.type='sine'; o.frequency.setValueAtTime(base,t); o.frequency.exponentialRampToValueAtTime(base*1.9,t+0.09); g.gain.setValueAtTime(0.0001,t); g.gain.exponentialRampToValueAtTime(0.26,t+0.012); g.gain.exponentialRampToValueAtTime(0.0001,t+0.24); o.connect(g); g.connect(sfxGain); o.start(t); o.stop(t+0.3); }catch(e){} }
  function combo(){ init(); if(!actx) return; const t=actx.currentTime; [659.25,783.99,987.77].forEach(function(f,i){ tone(f,t+i*0.055,0.32,0.13,sfxGain); }); }
  function wrong(){ init(); if(!actx) return; const t=actx.currentTime; tone(233.08,t,0.28,0.17,sfxGain); tone(185.00,t+0.08,0.36,0.14,sfxGain); }
  function collect(){ init(); if(!actx) return; const t=actx.currentTime; [523.25,659.25,783.99,1046.50].forEach(function(f,i){ tone(f,t+i*0.07,0.65,0.16,sfxGain); }); }
  function deal(){ init(); if(!actx) return; const t=actx.currentTime; tone(880,t,0.12,0.16,sfxGain); tone(1174.66,t+0.1,0.16,0.16,sfxGain); [1567.98,2093.00,2637.02].forEach(function(f,i){ tone(f,t+0.22+i*0.09,0.55,0.15,sfxGain); }); }
  function complete(){ init(); if(!actx) return; const t=actx.currentTime; [523.25,659.25,783.99,1046.50,1318.51].forEach(function(f,i){ tone(f,t+i*0.13,1.3,0.17,sfxGain); }); }
  function click(){ init(); if(!actx) return; tone(880,actx.currentTime,0.12,0.10,sfxGain); }
  function toggleMute(){ init(); muted=!muted; if(master) master.gain.value=muted?0:1; return muted; }
  return { init,startBgm,stopBgm,pop,combo,wrong,collect,complete,click,deal,toggleMute,get muted(){return muted;} };
})();

/* ============================================================
   七、Canvas
   ============================================================ */
let CW=0, CH=0;
function resizeCanvas(){
  const dpr=Math.min(window.devicePixelRatio||1,2);
  CW=canvas.clientWidth||window.innerWidth;
  CH=canvas.clientHeight||window.innerHeight;
  canvas.width=Math.round(CW*dpr);
  canvas.height=Math.round(CH*dpr);
  ctx.setTransform(dpr,0,0,dpr,0,0);
}
function handleCanvasResize(){
  const oldW=CW,oldH=CH;
  resizeCanvas();
  if(oldW<=0||oldH<=0) return;
  const sx=CW/oldW,sy=CH/oldH;
  const top=CONFIG.gameplay.bubbleTopLimit;
  const bottom=Math.max(top,CH-CONFIG.gameplay.bubbleBottomMargin);
  state.bubbles.forEach(function(b){
    b.x=clamp(b.x*sx,b.r,Math.max(b.r,CW-b.r));
    b.y=clamp(b.y*sy,top+b.r,Math.max(top+b.r,bottom-b.r));
    if(b.targetY) b.targetY=clamp(b.targetY*sy,top+b.r,Math.max(top+b.r,bottom-b.r));
  });
  state.specials.forEach(function(item){
    item.x=clamp(item.x*sx,item.r,Math.max(item.r,CW-item.r));
    item.y=clamp(item.y*sy,top+item.r,Math.max(top+item.r,bottom-item.r));
  });
  state.particles.forEach(function(p){ p.x*=sx; p.y*=sy; });
  state.floats.forEach(function(f){ f.x*=sx; f.y*=sy; });
  releaseDrag();
}
window.addEventListener('resize',handleCanvasResize,{passive:true});
window.addEventListener('orientationchange',function(){ setTimeout(handleCanvasResize,120); },{passive:true});
if('ResizeObserver' in window){
  const canvasResizeObserver=new ResizeObserver(handleCanvasResize);
  canvasResizeObserver.observe(canvas);
}

/* ============================================================
   八、每日配置
   ============================================================ */
function getDayConfig(day){
  const negTypes=Math.min(5+Math.floor((day-1)/2),9);
  const negPairs=day>=8?2:1;
  const posTypes=day>=2?Math.min(1+Math.floor((day-2)/2),6):0;
  let hasFruit=false;
  if(day>1){ if(saveData.daysSinceLucky>=CONFIG.fruitPity) hasFruit=true; else hasFruit=Math.random()<CONFIG.fruitChance; }
  return { negTypes, negPairs, posTypes, hasFruit };
}
function pickPairForDay(){
  const locked=CONFIG.pairs.filter(function(p){ return saveData.unlocked.indexOf(p.key)<0; });
  const pool=locked.length>0?locked:CONFIG.pairs;
  return pool[randInt(0,pool.length-1)];
}

/* ============================================================
   九、气泡创建
   ============================================================ */
function computeRadius(count){ const top=CONFIG.gameplay.bubbleTopLimit; const bot=CH-CONFIG.gameplay.bubbleBottomMargin; const areaW=CW-18; const areaH=bot-top; const avg=(areaW*areaH)/Math.max(1,count); let r=Math.sqrt(avg/Math.PI)*0.74; return clamp(r,CONFIG.gameplay.radiusMin,CONFIG.gameplay.radiusMax); }
function fitFontSize(word,r){ let fs=r*0.52; const maxW=r*1.55; ctx.font='500 '+fs+'px '+FONT_FAMILY; let g=0; while(ctx.measureText(word).width>maxW&&fs>8&&g++<40){ fs-=0.8; ctx.font='500 '+fs+'px '+FONT_FAMILY; } return fs; }
function makeBubble(type,word,r){
  const h=hashStr(word); let hue,sat,light;
  /* 负面情绪：红/紫系；好情绪：金/绿系 */
  const softPalette=[12,28,42,92,142,178,208,248,286,326];
  if(type==='negative'){ hue=softPalette[h%softPalette.length]; sat=32+(h%9); light=82+(h%5); }
  else { hue=[92,128,152,168][h%4]; sat=30+(h%8); light=84+(h%4); }
  return { type,word,r,x:0,y:0,vx:(Math.random()-0.5)*CONFIG.gameplay.floatSpeed*2,vy:(Math.random()-0.5)*CONFIG.gameplay.floatSpeed*2,hue,sat,light,fontSize:0,wobble:Math.random()*Math.PI*2,popping:false,popT:0,scale:1,alpha:1,dead:false,collected:false,flash:0,entering:false,enterT:0,enterDelay:0,targetY:0 };
}
function makeFruit(r){
  return { type:'fruit',word:'好运果',r,x:0,y:0,vx:(Math.random()-0.5)*10,vy:(Math.random()-0.5)*10,hue:45,sat:60,light:78,fontSize:0,wobble:Math.random()*Math.PI*2,popping:false,popT:0,scale:1,alpha:1,dead:false,collected:false,flash:0,entering:false,enterT:0,enterDelay:0,targetY:0 };
}
function layoutBubbles(list){
  const n=list.length; if(n===0) return;
  const top=CONFIG.gameplay.bubbleTopLimit; const bot=CH-CONFIG.gameplay.bubbleBottomMargin;
  const areaW=CW-16; const areaH=bot-top;
  let cols=Math.max(2,Math.round(Math.sqrt(n*areaW/Math.max(1,areaH)))); cols=Math.min(cols,n);
  const rows=Math.ceil(n/cols); const cellW=areaW/cols; const cellH=areaH/rows;
  const order=[]; for(let i=0;i<n;i++) order.push(i); shuffle(order);
  for(let k=0;k<n;k++){ const b=list[order[k]]; const col=k%cols; const row=Math.floor(k/cols); const cx=8+cellW*(col+0.5); const cy=top+cellH*(row+0.5); b.x=clamp(cx+(Math.random()-0.5)*cellW*0.5,b.r+8,CW-b.r-8); b.y=clamp(cy+(Math.random()-0.5)*cellH*0.5,top+b.r,bot-b.r); b.fontSize=fitFontSize(b.word,b.r); }
}

/* ============================================================
   十、粒子 / 飘字 / 礼物
   ============================================================ */
function spawnParticles(x,y,color,count){ for(let i=0;i<count;i++){ const ang=Math.random()*Math.PI*2; const sp=60+Math.random()*150; const life=0.5+Math.random()*0.5; state.particles.push({x,y,vx:Math.cos(ang)*sp,vy:Math.sin(ang)*sp-50,life,maxLife:life,size:2+Math.random()*3.4,color}); } }
function updateParticles(dt){ const a=state.particles; for(let i=0;i<a.length;i++){ const p=a[i]; p.x+=p.vx*dt; p.y+=p.vy*dt; p.vy+=260*dt; p.vx*=0.986; p.life-=dt; } for(let i=a.length-1;i>=0;i--){ if(a[i].life<=0) a.splice(i,1); } }
function drawParticles(){ const a=state.particles; for(let i=0;i<a.length;i++){ const p=a[i]; const al=Math.max(0,p.life/p.maxLife); ctx.globalAlpha=al; ctx.fillStyle=p.color; ctx.beginPath(); ctx.arc(p.x,p.y,p.size*(0.45+al*0.55),0,Math.PI*2); ctx.fill(); } ctx.globalAlpha=1; }
function addFloat(x,y,text,color){ state.floats.push({x,y,text,color,life:1,maxLife:1,vy:-48}); }
function updateFloats(dt){ const a=state.floats; for(let i=0;i<a.length;i++){ a[i].y+=a[i].vy*dt; a[i].life-=dt; } for(let i=a.length-1;i>=0;i--){ if(a[i].life<=0) a.splice(i,1); } }
function drawFloats(){ ctx.textAlign='center'; ctx.textBaseline='middle'; for(let i=0;i<state.floats.length;i++){ const f=state.floats[i]; ctx.globalAlpha=Math.min(1,f.life/f.maxLife*1.6); ctx.font='600 14px '+FONT_FAMILY; ctx.strokeStyle='rgba(255,255,255,.88)'; ctx.lineWidth=3; ctx.strokeText(f.text,f.x,f.y); ctx.fillStyle=f.color; ctx.fillText(f.text,f.x,f.y); } ctx.globalAlpha=1; }

function spawnGift(){ const g=CONFIG.gifts[randInt(0,CONFIG.gifts.length-1)]; state.gifts.push({type:g.type,color:g.color,x:-60,y:CH*0.4+Math.random()*CH*0.42,vx:110+Math.random()*40,vy:-8-Math.random()*18,size:30+Math.random()*14,life:6,maxLife:6,rot:(Math.random()-0.5)*0.3,rotSpeed:(Math.random()-0.5)*1.1}); const v=CONFIG.viewerNames[randInt(0,CONFIG.viewerNames.length-1)]; addDanmu(v+' 送出 '+g.name,'gift'); const m=Math.round((g.money||5)*getMoneyMult()); addIncome(m); addFloat(CW*0.2,CH*0.5,'+'+m+' 元','#e8a860'); }
function updateGifts(dt){ const a=state.gifts; for(let i=0;i<a.length;i++){ const g=a[i]; g.x+=g.vx*dt; g.y+=g.vy*dt; g.vy-=10*dt; g.rot+=g.rotSpeed*dt; g.life-=dt; } for(let i=a.length-1;i>=0;i--){ if(a[i].life<=0) a.splice(i,1); } }
function drawGift(g){ const al=Math.min(1,g.life/g.maxLife*1.4); const s=g.size; ctx.save(); ctx.globalAlpha=al; ctx.translate(g.x,g.y); ctx.rotate(g.rot); ctx.shadowColor=g.color; ctx.shadowBlur=18; ctx.fillStyle=g.color; ctx.strokeStyle='rgba(255,255,255,.92)'; ctx.lineWidth=2; if(g.type==='heart'){ ctx.beginPath(); ctx.moveTo(0,s*0.34); ctx.bezierCurveTo(-s*0.62,-s*0.18,-s*0.58,-s*0.78,0,-s*0.36); ctx.bezierCurveTo(s*0.58,-s*0.78,s*0.62,-s*0.18,0,s*0.34); ctx.closePath(); ctx.fill(); ctx.stroke(); } else if(g.type==='star'){ ctx.beginPath(); for(let i=0;i<10;i++){ const r=i%2===0?s*0.52:s*0.22; const ang=-Math.PI/2+i*Math.PI/5; const px=Math.cos(ang)*r,py=Math.sin(ang)*r; if(i===0) ctx.moveTo(px,py); else ctx.lineTo(px,py); } ctx.closePath(); ctx.fill(); ctx.stroke(); } else if(g.type==='flower'){ for(let i=0;i<5;i++){ const ang=i/5*Math.PI*2; ctx.beginPath(); ctx.arc(Math.cos(ang)*s*0.26,Math.sin(ang)*s*0.26,s*0.26,0,Math.PI*2); ctx.fill(); } ctx.fillStyle='#ffe9a8'; ctx.beginPath(); ctx.arc(0,0,s*0.18,0,Math.PI*2); ctx.fill(); } else if(g.type==='rocket'){ ctx.beginPath(); ctx.moveTo(0,-s*0.55); ctx.lineTo(s*0.26,s*0.1); ctx.lineTo(s*0.26,s*0.42); ctx.lineTo(-s*0.26,s*0.42); ctx.lineTo(-s*0.26,s*0.1); ctx.closePath(); ctx.fill(); ctx.stroke(); ctx.fillStyle='#ffe9a8'; ctx.beginPath(); ctx.arc(0,-s*0.12,s*0.12,0,Math.PI*2); ctx.fill(); } else { ctx.beginPath(); ctx.rect(-s*0.4,-s*0.1,s*0.8,s*0.5); ctx.fill(); ctx.stroke(); ctx.beginPath(); ctx.rect(-s*0.06,-s*0.42,s*0.12,s*0.3); ctx.fillStyle='#fff2c8'; ctx.fill(); } ctx.restore(); }

/* ============================================================
   十一、氛围
   ============================================================ */
const ambientDots=[]; for(let i=0;i<22;i++){ ambientDots.push({x:Math.random(),y:Math.random(),r:1.4+Math.random()*4,a:0.05+Math.random()*0.08,speed:0.005+Math.random()*0.014,phase:Math.random()*Math.PI*2}); }
function drawAmbient(t){ for(let i=0;i<ambientDots.length;i++){ const d=ambientDots[i]; const y=(d.y+t*d.speed)%1; const x=d.x+Math.sin(t*0.4+d.phase)*0.02; ctx.globalAlpha=d.a*(0.55+0.45*Math.sin(t*0.8+d.phase)); ctx.fillStyle='#ffffff'; ctx.beginPath(); ctx.arc(x*CW,(1-y)*CH,d.r,0,Math.PI*2); ctx.fill(); } ctx.globalAlpha=1; }

/* ============================================================
   十二、气泡渲染
   ============================================================ */
function drawBubble(b){
  if(b.alpha<=0.01) return;
  const r=b.r*b.scale; const x=b.x,y=b.y;
  ctx.save(); ctx.globalAlpha=b.alpha;
  if(b.type==='fruit'){
    const g=ctx.createRadialGradient(x-r*0.3,y-r*0.36,r*0.08,x,y,r*1.02);
    g.addColorStop(0,'#fff8dc'); g.addColorStop(0.42,'#ffdf82'); g.addColorStop(1,'#e8a828');
    ctx.beginPath(); ctx.arc(x,y,r,0,Math.PI*2); ctx.fillStyle=g; ctx.fill();
    ctx.strokeStyle='rgba(190,135,30,0.5)'; ctx.lineWidth=1.6; ctx.stroke();
    ctx.beginPath(); ctx.ellipse(x-r*0.3,y-r*0.38,r*0.24,r*0.15,-0.6,0,Math.PI*2); ctx.fillStyle='rgba(255,255,255,0.78)'; ctx.fill();
  } else {
    const h=b.hue,s=b.sat,l=b.light;
    const g=ctx.createRadialGradient(x-r*0.3,y-r*0.34,r*0.08,x,y,r*1.04);
    g.addColorStop(0,'hsl('+h+','+(s+3)+'%,'+Math.min(97,l+9)+'%)');
    g.addColorStop(0.55,'hsl('+h+','+s+'%,'+l+'%)');
    g.addColorStop(1,'hsl('+h+','+(s+5)+'%,'+(l-8)+'%)');
    ctx.beginPath(); ctx.arc(x,y,r,0,Math.PI*2); ctx.fillStyle=g; ctx.fill();
    ctx.strokeStyle='hsla('+h+','+(s+8)+'%,'+(l-24)+'%,0.3)'; ctx.lineWidth=1.3; ctx.stroke();
    ctx.beginPath(); ctx.ellipse(x-r*0.3,y-r*0.36,r*0.24,r*0.14,-0.6,0,Math.PI*2); ctx.fillStyle='rgba(255,255,255,0.55)'; ctx.fill();
  }
  if(b.flash>0){ ctx.globalAlpha=b.alpha*b.flash*0.45; ctx.beginPath(); ctx.arc(x,y,r,0,Math.PI*2); ctx.fillStyle='#ffffff'; ctx.fill(); ctx.globalAlpha=b.alpha; }
  ctx.fillStyle=b.type==='fruit'?'#8a5a10':(b.type==='positive'?'hsl('+b.hue+',45%,32%)':'hsl('+b.hue+',16%,42%)');
  ctx.font='500 '+(b.fontSize*b.scale)+'px '+FONT_FAMILY;
  ctx.textAlign='center'; ctx.textBaseline='middle'; ctx.fillText(b.word,x,y+1);

  /* 好运果：脉动「点击」提示 */
  if(b.type==='fruit' && !b.popping){
    const pulse = 0.55 + 0.45 * Math.sin(state.time * 4);
    ctx.globalAlpha = b.alpha * pulse;
    ctx.font = '600 11px ' + FONT_FAMILY;
    ctx.fillStyle = '#d9a020';
    ctx.textAlign = 'center';
    ctx.fillText('点击', x, y + r + 13);
    ctx.globalAlpha = b.alpha;
  }
  ctx.restore();
}

/* ============================================================
   十三、树
   ============================================================ */
function buildTreeShape(){ const branches=[],tips=[]; function grow(x,y,angle,len,depth,width){ const x2=x+Math.cos(angle)*len,y2=y+Math.sin(angle)*len; branches.push({x,y,x2,y2,width,depth}); if(depth>0){ const sp=0.36+Math.random()*0.2; grow(x2,y2,angle-sp,len*(0.72+Math.random()*0.08),depth-1,width*0.68); grow(x2,y2,angle+sp,len*(0.72+Math.random()*0.08),depth-1,width*0.68); } else tips.push({x:x2,y:y2}); } grow(0,0,-Math.PI/2,Math.min(CH*0.084,60),4,9); return {branches,tips}; }
function drawBlossom(x,y,r,type){ const p=(PALETTE[type]||PALETTE.peach).f; ctx.save(); ctx.translate(x,y); for(let i=0;i<5;i++){ const a=(i/5)*Math.PI*2-Math.PI/2; ctx.beginPath(); ctx.arc(Math.cos(a)*r*0.5,Math.sin(a)*r*0.5,r*0.5,0,Math.PI*2); ctx.fillStyle=i%2?p[0]:p[1]; ctx.fill(); } ctx.beginPath(); ctx.arc(0,0,r*0.32,0,Math.PI*2); ctx.fillStyle=p[2]; ctx.fill(); ctx.restore(); }
function drawTreeFruit(x,y,r,type){ const c=(PALETTE[type]||PALETTE.peach).r; ctx.save(); ctx.translate(x,y); ctx.beginPath(); ctx.arc(0,0,r,0,Math.PI*2); ctx.fillStyle=c; ctx.fill(); ctx.beginPath(); ctx.arc(-r*0.3,-r*0.3,r*0.28,0,Math.PI*2); ctx.fillStyle='rgba(255,255,255,.5)'; ctx.fill(); ctx.restore(); }
function drawTree(){ const tree=state.tree; if(!tree.visible) return; const gp=Math.min(1,tree.t/(tree.duration*0.76)); ctx.save(); ctx.translate(CW/2,CH-14); for(let i=0;i<tree.branches.length;i++){ const br=tree.branches[i]; const birth=(4-br.depth)/5*0.54; const end=birth+0.46; let k=(gp-birth)/(end-birth); if(k<=0) continue; if(k>1) k=1; ctx.beginPath(); ctx.moveTo(br.x,br.y); ctx.lineTo(br.x+(br.x2-br.x)*k,br.y+(br.y2-br.y)*k); ctx.strokeStyle=br.depth>2?'#ab9c88':(br.depth>1?'#b8a792':'#c6b59e'); ctx.lineWidth=Math.max(1.3,br.width*k); ctx.lineCap='round'; ctx.stroke(); } if(gp>0.6){ const bp=Math.min(1,(gp-0.6)/0.4); for(let i=0;i<tree.tips.length;i++){ const tip=tree.tips[i]; const delay=(i%6)*0.065; const k=Math.max(0,Math.min(1,(bp-delay)/0.55)); if(k<=0) continue; if(i%2===0) drawBlossom(tip.x,tip.y,7.5*k,state.todayFlowerType); else if(k>0.6) drawTreeFruit(tip.x,tip.y+2,6.2*(k-0.6)/0.4,state.todayFruitType); } } ctx.restore(); }

/* ============================================================
   十四、HUD
   ============================================================ */
let lastHeat=null,lastFans=null,lastLucky=null,lastMoney=null;
function updateHudNumbers(dt){
  const k=Math.min(1,dt*9); state.heatDisplay+=(state.heat-state.heatDisplay)*k; state.fansDisplay+=(state.fans-state.fansDisplay)*k;
  if(Math.abs(state.heat-state.heatDisplay)<0.4) state.heatDisplay=state.heat;
  if(Math.abs(state.fans-state.fansDisplay)<0.4) state.fansDisplay=state.fans;
  const ht=formatNum(state.heatDisplay); if(ht!==lastHeat){ hudHeatEl.textContent=ht; lastHeat=ht; }
  const ft=formatNum(state.fansDisplay); if(ft!==lastFans){ hudFansEl.textContent=ft; lastFans=ft; }
  const lt=String(saveData.luckyCount); if(lt!==lastLucky){ hudLuckyEl.textContent=lt; lastLucky=lt; }
  const k2=Math.min(1,dt*7); state.moneyDisplay+=(saveData.money-state.moneyDisplay)*k2;
  if(Math.abs(saveData.money-state.moneyDisplay)<0.6) state.moneyDisplay=saveData.money;
  const mt=formatMoney(state.moneyDisplay)+"元"; if(mt!==lastMoney){ hudMoneyEl.textContent=mt; lastMoney=mt; }
}
function updateComboBadge(){ if(state.combo>=2&&state.phase==='playing'){ comboBadgeEl.textContent='连击 ×'+state.combo; comboBadgeEl.classList.add('show'); } else comboBadgeEl.classList.remove('show'); }
function showHud(show){ hudEl.classList.toggle('show',show); topRightEl.classList.toggle('show',show); danmuLayer.classList.toggle('show',show); liveBarEl.classList.toggle('show',show); btnLikeEl.classList.toggle('show',show); hostAvatarEl.classList.toggle('show',show); if(!show){ comboBadgeEl.classList.remove('show'); pkBarEl.classList.remove('show'); eventBannerEl.classList.remove('show'); eventBannerEl.innerHTML=''; } }

/* ============================================================
   十五、弹幕
   ============================================================ */
let danmuTimer=null,danmuTrackIdx=0,danmuActive=0; const DANMU_TRACKS=[0,14], MAX_DANMU=5;
function addDanmu(text,kind){ if(danmuActive>=MAX_DANMU) return; const el=document.createElement('div'); el.className='danmu-float'+(kind?' '+kind:''); if(!text){ if(Math.random()<0.22){ text=CONFIG.viewerNames[randInt(0,CONFIG.viewerNames.length-1)]+' 进入了直播间'; } else { text=CONFIG.danmuTexts[randInt(0,CONFIG.danmuTexts.length-1)]; } } el.textContent=text; el.style.top=DANMU_TRACKS[danmuTrackIdx%DANMU_TRACKS.length]+'px'; danmuTrackIdx++; const dur=17+Math.random()*5; el.style.animationDuration=dur+'s'; danmuLayer.appendChild(el); danmuActive++; setTimeout(function(){ if(el.parentNode) el.parentNode.removeChild(el); danmuActive--; },dur*1000+300); }
function startDanmu(){ stopDanmu(); addDanmu(); danmuTimer=setInterval(function(){ if(state.phase!=='playing'||state.paused||state.questionOpen) return; addDanmu(); },2600+Math.random()*2400); }
function stopDanmu(){ if(danmuTimer){ clearInterval(danmuTimer); danmuTimer=null; } danmuLayer.innerHTML=''; danmuActive=0; danmuTrackIdx=0; }

/* ============================================================
   十六、入场提示
   ============================================================ */
let introHintTimer=null;
function showIntroHint(text,cb){ introHintEl.textContent=text; introHintEl.classList.remove('show'); void introHintEl.offsetWidth; introHintEl.classList.add('show'); if(introHintTimer) clearTimeout(introHintTimer); introHintTimer=setTimeout(function(){ introHintEl.classList.remove('show'); if(cb) setTimeout(cb,550); },2100); }

/* ============================================================
   十七、随机事件
   ============================================================ */
function triggerRandomEvent(){
  /* 热度 PK 邀请：30% 概率，优先触发 */
  if(!state.pk && (saveData.totalFans||0)>=CONFIG.pkFansNeed && Math.random()<CONFIG.pkChance){ invitePK(); return; }
  const ev=CONFIG.randomEvents[randInt(0,CONFIG.randomEvents.length-1)];
  state.heat=Math.max(0,state.heat+ev.heat);
  state.fans=Math.max(0,state.fans+ev.fans);
  saveData.totalFans=state.fans;
  if(ev.fans>0) state.dayStats.fansGained+=ev.fans;
  if(state.heat>state.dayStats.heatPeak) state.dayStats.heatPeak=state.heat;
  addIncome(Math.max(8,Math.round(ev.heat*1.2*getMoneyMult())));
  persist();

  const color=TONE_COLORS[ev.tone]||'#f0a0b0';
  showEventBanner(ev.text,color);
  addFloat(CW/2,CH*0.32,ev.tone==='drama'?'舆情来了！':'直播间有动静！',color);
  spawnParticles(CW/2,CH*0.32,color,22);
  spawnParticles(CW/2,CH*0.32,'rgba(255,255,255,.9)',10);
  addDanmu(ev.text,null);
}

/* ============================================================
   十七B、热度 PK
   ============================================================ */
function invitePK(){
  const name=CONFIG.pkNames[randInt(0,CONFIG.pkNames.length-1)];
  state.pk={ name:name, phase:'invite', my:0, opp:0, rate:0, t:CONFIG.pkDuration, heatStart:state.heat, giftTimer:3, done:false };
  state.paused=true; state.dragging=null; state.pointerId=null;
  pkNameEl.textContent='主播「'+name+'」';
  pkOverlay.classList.add('show');
  addDanmu('隔壁主播来踢馆了！','bad');
}
function declinePK(){
  AudioSys.click();
  pkOverlay.classList.remove('show');
  if(state.pk&&state.pk.phase==='invite'){
    addDanmu('对方放话：不比就算了，下次我可是会涨粉的哦～','bad');
    addFloat(CW/2,CH*0.3,'婉拒了 PK','#b0a0b8');
    state.pk=null;
  }
  state.paused=false;
}
function acceptPK(){
  AudioSys.click();
  pkOverlay.classList.remove('show');
  if(!state.pk||state.pk.phase!=='invite'){ state.paused=false; return; }
  state.pk.phase='battle';
  state.pk.heatStart=state.heat;
  /* 双方从 0 同步竞速；对方涨速按玩家平均消除能力估算，保证平衡 */
  const oppGoal=Math.round(170+(saveData.totalFans||0)*0.02+Math.random()*50);
  state.pk.opp=0; state.pk.rate=oppGoal/CONFIG.pkDuration;
  state.pk.my=0;
  pkOppShortEl.textContent=state.pk.name;
  pkBarEl.classList.add('show');
  pkMyScoreEl.textContent='0'; pkOppScoreEl.textContent='0';
  pkMyFillEl.style.width='0%'; pkOppFillEl.style.width='0%';
  pkTimeEl.textContent=CONFIG.pkDuration+'s';
  state.paused=false;
  showEventBanner('热度 PK 开始！疯狂消除坏情绪！','#e86a8a');
  addDanmu('别怂！干就完了！','gift');
}
function updatePK(dt){
  const pk=state.pk; if(!pk||pk.phase!=='battle') return;
  pk.t-=dt;
  pk.my=Math.max(0,state.heat-(pk.heatStart||0));
  pk.opp+=pk.rate*dt;
  /* 忠实粉丝刷礼物应援，增加 PK 热度 */
  pk.giftTimer-=dt;
  if(pk.giftTimer<=0){
    pk.giftTimer=2.2+Math.random()*2.2;
    spawnGift();
    const gh=randInt(10,20);
    state.heat+=gh;
    if(state.heat>state.dayStats.heatPeak) state.dayStats.heatPeak=state.heat;
    addFloat(CW*0.5+(Math.random()*120-60),CH*0.24,'+'+gh+' 热度 · 粉丝应援','#e88aa8');
    addDanmu('粉丝刷礼物为主播应援！','gift');
  }
  const maxV=Math.max(pk.my,pk.opp,1);
  pkMyFillEl.style.width=Math.min(100,pk.my/maxV*100)+'%';
  pkOppFillEl.style.width=Math.min(100,pk.opp/maxV*100)+'%';
  pkMyScoreEl.textContent=formatNum(pk.my);
  pkOppScoreEl.textContent=formatNum(pk.opp);
  pkTimeEl.textContent=Math.max(0,Math.ceil(pk.t))+'s';
  if(pk.t<=0) endPK();
}
function endPK(){
  const pk=state.pk; if(!pk) return;
  pkBarEl.classList.remove('show');
  state.pk=null;
  const win=pk.my>pk.opp;
  if(win){
    const money=Math.round(600+pk.my*2*getMoneyMult());
    const fans=randInt(30,60), heat=randInt(40,80);
    state.heat+=heat; state.fans+=fans; saveData.totalFans=state.fans; saveData.pkWins+=1;
    state.dayStats.fansGained+=fans;
    if(state.heat>state.dayStats.heatPeak) state.dayStats.heatPeak=state.heat;
    addIncome(money);
    showEventBanner('PK 大胜「'+pk.name+'」！+'+fans+' 粉 +'+money+' 元','#5ab88a');
    addFloat(CW/2,CH*0.3,'PK 获胜！','#5ab88a');
    addFloat(CW/2,CH*0.3+26,'+'+money+' 元','#e8a860');
    addDanmu('主播太强了！','gift');
  } else {
    const fans=randInt(5,15);
    state.fans=Math.max(0,state.fans-fans); saveData.totalFans=state.fans;
    showEventBanner('惜败「'+pk.name+'」，-'+fans+' 粉丝','#b08090');
    addFloat(CW/2,CH*0.3,'下次一定赢回来','#b08090');
    addDanmu('输了...但没关系！','bad');
  }
  persist(); checkAchievements();
}

/* ============================================================
   十八、观众提问
   ============================================================ */
function triggerQuestion(){
  if(state.questionOpen||state.phase!=='playing') return;
  const q=CONFIG.questions[randInt(0,CONFIG.questions.length-1)];
  state.questionOpen=true; state.paused=true;
  saveDaySnapshot(); persist();
  qAvatar.textContent=q.avatar; qName.textContent=q.name; qText.textContent=q.text; qOptions.innerHTML='';
  q.options.forEach(function(opt){
    const btn=document.createElement('button'); btn.className='q-option'; btn.textContent=opt.text;
    btn.addEventListener('click',function(){
      AudioSys.click();
      const heatGain=opt.heat,fanGain=opt.fans;
      state.heat+=heatGain; state.fans+=fanGain; saveData.totalFans=state.fans;
      saveData.answeredCount+=1; state.dayStats.answered+=1; state.dayStats.fansGained+=fanGain;
      if(state.heat>state.dayStats.heatPeak) state.dayStats.heatPeak=state.heat;
      persist();
      addFloat(CW/2,CH*0.3,'+'+heatGain+' 热度','#e88a9a');
      addFloat(CW/2,CH*0.3-28,'+'+fanGain+' 粉','#c08a6a');
      spawnParticles(CW/2,CH*0.3,'#ffd0e0',18);
      qOptions.innerHTML='<div style="text-align:center;font-size:12px;color:#b4a8bc;padding:14px 0;line-height:1.7">主播回应了 '+q.name+'<br>+'+heatGain+' 热度 · +'+fanGain+' 粉</div>';
      setTimeout(function(){ questionOverlay.classList.remove('show'); state.questionOpen=false; state.paused=false; checkAchievements(); },1100);
    });
    qOptions.appendChild(btn);
  });
  questionOverlay.classList.add('show');
}

/* ============================================================
   十九、开始一天
   ============================================================ */
function startDay(day){
  state.currentDay=day; state.phase='playing'; state.paused=false; state.questionOpen=false;
  state.dragging=null; state.pointerId=null; state.positiveCooldown=0;
  state.heat=0; state.heatDisplay=0;
  state.fans=saveData.totalFans||0; state.fansDisplay=saveData.totalFans||0;
  lastHeat=null; lastFans=null;
  state.combo=0; state.comboTimer=0;
  state.dayStats={popped:0,fansGained:0,heatPeak:0,answered:0};
  state.fruitCollected=false;
  state.bubbles=[]; state.particles=[]; state.floats=[]; state.gifts=[];
  state.specials=[]; state.snapTick=0;
  state.tree.active=false; state.tree.visible=false; state.tree.t=0;
  state.pk=null; pkBarEl.classList.remove('show'); pkOverlay.classList.remove('show');
  auctionOverlay.classList.remove('show');
  eventBannerEl.classList.remove('show'); eventBannerEl.innerHTML='';
  lastMoney=null; state.moneyDisplay=saveData.money;
  state.auctionPerfume=null;
  state.perfumeMode=(day%CONFIG.perfumeEvery===0); state.blendCount=0;

  const snap=(saveData.daySnapshot&&saveData.daySnapshot.day===day)?saveData.daySnapshot:null;
  let cfg,pair,bubbleList;
  if(snap){
    /* 恢复当天进度：局面、热度、粉丝、连击、加成全部还原 */
    pair=CONFIG.pairs.filter(function(p){ return p.key===snap.pairKey; })[0]||pickPairForDay();
    state.heat=snap.heat; state.heatDisplay=snap.heat;
    state.fans=snap.fans; state.fansDisplay=snap.fans; saveData.totalFans=snap.fans;
    state.combo=snap.combo; state.comboTimer=snap.comboTimer||0;
    state.blendCount=snap.blend||0;
    state.dayStats=snap.dayStats; state.fruitCollected=snap.fruitCollected;
    state.activeBuffs=Object.assign({comboShield:false,doubleHeat:false,extraFans:false},snap.buffs);
    bubbleList=snap.bubbles.map(function(s){
      const b=s.type==='fruit'?makeFruit(s.r):makeBubble(s.type,s.word,s.r);
      b.x=s.x; b.y=s.y; b.fontSize=fitFontSize(s.word,s.r);
      return b;
    });
  } else {
    cfg=getDayConfig(day);
    pair=pickPairForDay();
    if(state.perfumeMode){
      /* 调香直播日：花果原料气泡，拖拽两两融合 */
      const ingR=Math.min(58,Math.max(40,CW/15));
      bubbleList=[];
      const todayEmo=CONFIG.flowerEmoji[pair.flowerType]||'🌸';
      bubbleList.push(makeBubble('ingredient',todayEmo,ingR));
      bubbleList.push(makeBubble('ingredient',CONFIG.flowerEmoji[pair.fruitType]||'🍊',ingR));
      for(let i=0;i<7;i++) bubbleList.push(makeBubble('ingredient',randomUnlockedIngEmoji(),ingR));
    } else {
      const negPool=shuffle(CONFIG.negativeWords.slice());
      const posPool=shuffle(CONFIG.positiveWords.slice());
      const negWords=negPool.slice(0,Math.min(cfg.negTypes,negPool.length));
      const posWords=posPool.slice(0,Math.min(cfg.posTypes,posPool.length));
      const list=[];
      for(let i=0;i<negWords.length;i++){ for(let p=0;p<cfg.negPairs;p++){ list.push({type:'negative',word:negWords[i]}); list.push({type:'negative',word:negWords[i]}); } }
      for(let i=0;i<posWords.length;i++) list.push({type:'positive',word:posWords[i]});
      const total=list.length+(cfg.hasFruit?1:0);
      const r=computeRadius(total);
      bubbleList=[];
      for(let i=0;i<list.length;i++) bubbleList.push(makeBubble(list[i].type,list[i].word,r));
      if(cfg.hasFruit) bubbleList.push(makeFruit(r*1.15));
    }
  }
  state.todayPair=pair;
  state.todayFlower=pair.flower; state.todayFlowerType=pair.flowerType;
  state.todayFruit=pair.fruit; state.todayFruitType=pair.fruitType;
  state.hasFruit=snap?snap.hasFruit:(cfg.hasFruit||(state.activeBuffs&&state.activeBuffs.cake));

  if(!snap){ if(state.hasFruit) saveData.daysSinceLucky=0; else saveData.daysSinceLucky=(saveData.daysSinceLucky||0)+1; }
  saveData.currentDay=day;
  persist();
  startViewers();

  state.eventTimer=CONFIG.eventIntervalMin+Math.random()*(CONFIG.eventIntervalMax-CONFIG.eventIntervalMin);
  state.questionTimer=CONFIG.gameplay.questionIntervalMin+Math.random()*(CONFIG.gameplay.questionIntervalMax-CONFIG.gameplay.questionIntervalMin);
  state.specialTimer=randInt(10,18);

  if(state.perfumeMode){ setTimeout(function(){ showEventBanner('调香直播开始！拖动原料融合，完成香氛拍卖','#e8a860'); },900); }
  if(snap){
    state.bubbles=bubbleList;
    updateComboBadge();
  } else {
    layoutBubbles(bubbleList);
    bubbleList.forEach(function(b){ b.targetY=b.y; b.y=-b.r-40; b.entering=true; b.enterT=0; b.enterDelay=999; });
    state.bubbles=bubbleList;
  }

  hudDayEl.textContent=String(day);
  hudHeatEl.textContent=formatNum(state.heat);
  hudFansEl.textContent=formatNum(state.fans||0);
  hudLuckyEl.textContent=String(saveData.luckyCount);
  comboBadgeEl.classList.remove('show');

  showHud(true);
  hideAllScreens();
  AudioSys.startBgm();

  /* 入场提示：一句话，同类提示全程只出现一次 */
  const hints=[];
  if(!snap){
    if(state.perfumeMode){
      if(!saveData.hintedBlend){ hints.push('拖动原料互相融合调香'); saveData.hintedBlend=true; }
    } else {
      if(day===1) hints.push('拖动两个写着相同坏情绪的泡泡，让它们碰在一起就能消除');
      if(state.hasFruit&&!saveData.hintedFruit){ hints.push('好运果 点击收集'); saveData.hintedFruit=true; }
      if(cfg.posTypes>0&&!saveData.hintedPositive){ hints.push('暖色好情绪 别去碰'); saveData.hintedPositive=true; }
    }
  }
  if(hints.length>0) persist();

  const beginPlay=function(){
    startDanmu();
    state.bubbles.forEach(function(b,i){ b.enterT=0; b.enterDelay=i*0.05; });
  };
  if(hints.length===0){ beginPlay(); }
  else{
    let hi=0;
    const runHints=function(){ if(hi>=hints.length){ beginPlay(); return; } showIntroHint(hints[hi++],runHints); };
    runHints();
  }
}

/* ============================================================
   十九B、互动元素（红包 / 黑粉）与当天进度快照
   ============================================================ */
function spawnSpecial(){
  const kind=Math.random()<0.55?'red':'hater';
  if(state.specials.some(function(s){ return s.kind===kind; })) return;
  const r=30;
  const top=CONFIG.gameplay.bubbleTopLimit+r, bot=CH-CONFIG.gameplay.bubbleBottomMargin-r;
  state.specials.push({ kind:kind, word:kind==='red'?'红包':'黑粉', r:r,
    x:r+20+Math.random()*(CW-r*2-40), y:top+Math.random()*(bot-top),
    vx:(Math.random()-0.5)*26, vy:(Math.random()-0.5)*26, t:0, life:kind==='red'?9:10 });
}
function collectSpecial(s){
  const idx=state.specials.indexOf(s); if(idx<0) return;
  state.specials.splice(idx,1);
  if(state.phase!=='playing'||state.paused) return;
  if(s.kind==='red'){
    const f=randInt(2,5), h=randInt(10,20);
    state.fans+=f; state.heat+=h; saveData.totalFans=state.fans;
    state.dayStats.fansGained+=f;
    if(state.heat>state.dayStats.heatPeak) state.dayStats.heatPeak=state.heat;
    const rm=Math.round(randInt(20,60)*getMoneyMult()); addIncome(rm);
    persist();
    spawnParticles(s.x,s.y,'#ff8a5a',18); spawnParticles(s.x,s.y,'#ffd76e',10);
    AudioSys.collect();
    addFloat(s.x,s.y-s.r-8,'+'+f+' 粉','#e86a3a');
    addFloat(s.x,s.y-s.r-28,'+'+h+' 热度','#e86a3a');
    addFloat(s.x,s.y-s.r-48,'+'+rm+' 元','#e8a860');
    addDanmu('主播发红包啦！冲！','gift');
  } else {
    const h=randInt(12,22), f=randInt(1,3);
    state.heat+=h; state.fans+=f; saveData.totalFans=state.fans;
    state.dayStats.fansGained+=f;
    if(state.heat>state.dayStats.heatPeak) state.dayStats.heatPeak=state.heat;
    persist();
    spawnParticles(s.x,s.y,'#a09aa8',16);
    AudioSys.pop();
    addFloat(s.x,s.y-s.r-8,'黑粉已禁言','#7a6a7a');
    addFloat(s.x,s.y-s.r-28,'+'+h+' 热度','#7a6a7a');
    addDanmu('干得漂亮！禁言得好','gift');
  }
}
function saveDaySnapshot(){
  if(state.phase!=='playing') return;
  const bubbles=state.bubbles.filter(function(b){ return !b.dead&&!b.popping; }).map(function(b){
    return { type:b.type, word:b.word, r:b.r, x:Math.round(b.x), y:Math.round(b.entering&&b.targetY?b.targetY:b.y) };
  });
  saveData.daySnapshot={ day:state.currentDay, heat:state.heat, fans:state.fans,
    dayStats:state.dayStats, combo:state.combo, comboTimer:state.comboTimer,
    pairKey:state.todayPair?state.todayPair.key:null,
    hasFruit:state.hasFruit, fruitCollected:state.fruitCollected,
    buffs:state.activeBuffs, bubbles:bubbles, blend:state.blendCount||0 };
}
function drawSpecial(s){
  ctx.save();
  ctx.globalAlpha=Math.min(1,s.life/1.2);
  let g;
  if(s.kind==='red'){
    g=ctx.createRadialGradient(s.x-s.r*0.3,s.y-s.r*0.34,s.r*0.08,s.x,s.y,s.r*1.02);
    g.addColorStop(0,'#ffd8b8'); g.addColorStop(0.4,'#ff9a6a'); g.addColorStop(1,'#e85a3a');
  } else {
    g=ctx.createRadialGradient(s.x-s.r*0.3,s.y-s.r*0.34,s.r*0.08,s.x,s.y,s.r*1.02);
    g.addColorStop(0,'#c8c0cc'); g.addColorStop(0.4,'#8a8090'); g.addColorStop(1,'#5a5060');
  }
  ctx.beginPath(); ctx.arc(s.x,s.y,s.r,0,Math.PI*2); ctx.fillStyle=g; ctx.fill();
  ctx.strokeStyle=s.kind==='red'?'rgba(190,80,40,0.55)':'rgba(70,60,80,0.55)'; ctx.lineWidth=1.6; ctx.stroke();
  ctx.beginPath(); ctx.ellipse(s.x-s.r*0.3,s.y-s.r*0.38,s.r*0.24,s.r*0.15,-0.6,0,Math.PI*2); ctx.fillStyle='rgba(255,255,255,0.6)'; ctx.fill();
  ctx.fillStyle=s.kind==='red'?'#7a2a10':'#241d2b';
  ctx.font='600 '+(s.r*0.5)+'px '+FONT_FAMILY;
  ctx.textAlign='center'; ctx.textBaseline='middle'; ctx.fillText(s.word,s.x,s.y+1);
  const pulse=0.55+0.45*Math.sin(state.time*4);
  ctx.globalAlpha=Math.min(1,s.life/1.2)*pulse;
  ctx.font='600 10px '+FONT_FAMILY;
  ctx.fillStyle=s.kind==='red'?'#d95828':'#6a5a6a';
  ctx.fillText(s.kind==='red'?'点击领取':'点击禁言',s.x,s.y+s.r+13);
  ctx.restore();
}

/* ============================================================
   二十、连击
   ============================================================ */
/* ============================================================
   十九C、收益 / 加成 / 皮肤头像 / 事件横幅 / 调香
   ============================================================ */
function getComboWindow(){ return CONFIG.gameplay.comboWindow + (state.activeBuffs&&state.activeBuffs.coffee?2:0); }
function countAsset(key){ if(!saveData.ownedItems) return 0; let n=0; for(let i=0;i<saveData.ownedItems.length;i++){ if(saveData.ownedItems[i].key===key) n++; } return Math.min(5,n); }
function getHeatMult(){ let m=1; m+=countAsset("light")*0.05; m+=countAsset("chair")*0.08; if(state.activeBuffs&&state.activeBuffs.milkTea) m+=0.25; return m; }
function getFansMult(){ let m=1; m+=countAsset("plant")*0.02; m+=countAsset("chair")*0.08; if(state.activeBuffs&&state.activeBuffs.snacks) m+=0.4; return m; }
function getMoneyMult(){ let m=1; m+=countAsset("mic")*0.10; m+=countAsset("chair")*0.08; return m; }
function addIncome(n){ n=Math.round(n); if(!n) return; saveData.money+=n; saveData.totalEarned+=n; persist(); }
function formatMoney(n){ n=Math.round(n); if(n>=100000000) return (n/100000000).toFixed(2)+"亿"; if(n>=10000) return (n/10000).toFixed(1)+"万"; return String(n); }
function applyTheme(id){ const th=CONFIG.themes.filter(function(x){ return x.id===id; })[0]; if(!th) return; const app=document.getElementById("app"); if(th.bg) app.style.background=th.bg; else app.style.background=""; }
function updateAvatar(){ const av=CONFIG.avatars.filter(function(x){ return x.id===saveData.avatar; })[0]||CONFIG.avatars[0]; hostAvatarEl.textContent=av.emoji; }
function ownedThemeCount(){ return 1+saveData.ownedThemes.length; }
function ownedAvatarCount(){ return 1+saveData.ownedAvatars.length; }
function cycleAvatar(){ AudioSys.init(); AudioSys.click(); const list=CONFIG.avatars.filter(function(a){ return a.id==="sun"||saveData.ownedAvatars.indexOf(a.id)>=0; }); const idx=list.map(function(a){ return a.id; }).indexOf(saveData.avatar); const next=list[(idx+1)%list.length]; saveData.avatar=next.id; persist(); updateAvatar(); showToast(next.emoji,"头像已切换 · "+next.name); }
function showEventBanner(text,color){ eventBannerEl.innerHTML=""; const span=document.createElement("div"); span.className="eb-inner"; span.textContent="📣 "+text; if(color) span.style.color=color; eventBannerEl.appendChild(span); eventBannerEl.classList.add("show"); setTimeout(function(){ if(eventBannerEl.firstChild===span){ eventBannerEl.classList.remove("show"); eventBannerEl.innerHTML=""; } },17200); }
function randomPerfumeName(){
  const p=CONFIG.perfumePrefixes;
  return p[randInt(0,p.length-1)]+'香水';
}
function perfumeSVG(kind){ const c=PALETTE[kind]||PALETTE.peach; return '<svg viewBox="0 0 60 60"><defs><linearGradient id="pg" x1="0" y1="0" x2="1" y2="1"><stop offset="0" stop-color="'+c.f[0]+'"/><stop offset="1" stop-color="'+c.f[2]+'"/></linearGradient></defs><rect x="20" y="22" width="20" height="26" rx="8" fill="url(#pg)" opacity=".9"/><rect x="25" y="14" width="10" height="9" rx="3" fill="'+c.f[2]+'"/><circle cx="30" cy="8" r="3.4" fill="'+c.f[0]+'" opacity=".8"/><circle cx="22" cy="11" r="2.4" fill="'+c.f[1]+'" opacity=".7"/><circle cx="38" cy="11" r="2.4" fill="'+c.f[1]+'" opacity=".7"/></svg>'; }
function getComboMultiplier(){ if(state.combo>=15) return 2.2; if(state.combo>=10) return 1.8; if(state.combo>=6) return 1.5; if(state.combo>=3) return 1.2; return 1; }
function addCombo(){ state.combo++; state.comboTimer=getComboWindow(); if(state.combo>saveData.maxComboEver){ saveData.maxComboEver=state.combo; persist(); } updateComboBadge(); checkAchievements(); }
function resetCombo(){ state.combo=0; state.comboTimer=0; updateComboBadge(); }

/* ============================================================
   二十一、消除
   ============================================================ */
/* ============================================================
   调香玩法：原料融合
   ============================================================ */
function randomUnlockedIngEmoji(){
  const un=CONFIG.pairs.filter(function(p){ return saveData.unlocked.indexOf(p.key)>=0; });
  const pool=un.length?un:CONFIG.pairs.slice(0,3);
  const pick=pool[randInt(0,pool.length-1)];
  return CONFIG.flowerEmoji[pick.flowerType]||'🌸';
}
function spawnIngredient(){
  const r=Math.min(58,Math.max(40,CW/15));
  const b=makeBubble('ingredient',randomUnlockedIngEmoji(),r);
  b.x=r+20+Math.random()*(CW-r*2-40);
  b.y=CONFIG.gameplay.bubbleTopLimit+r+Math.random()*(CH-CONFIG.gameplay.bubbleBottomMargin-CONFIG.gameplay.bubbleTopLimit-r*2);
  b.fontSize=fitFontSize(b.word,r);
  b.targetY=b.y; b.y=-b.r-40; b.entering=true; b.enterT=0; b.enterDelay=0.4;
  state.bubbles.push(b);
}
function blendPair(a,b){
  if(a.popping||b.popping) return;
  a.popping=true; a.popT=0; b.popping=true; b.popT=0;
  const mx=(a.x+b.x)/2,my=(a.y+b.y)/2;
  spawnParticles(mx,my,'#f0c060',16);
  spawnParticles(mx,my,'rgba(255,255,255,.88)',8);
  AudioSys.pop();
  addCombo();
  if(state.combo>=3) AudioSys.combo();
  const h=Math.round(randInt(10,16)*getHeatMult());
  state.heat+=h;
  if(state.heat>state.dayStats.heatPeak) state.dayStats.heatPeak=state.heat;
  state.blendCount++;
  addFloat(mx,my-10,'调香 +'+state.blendCount,'#d8a050');
  addFloat(mx,my-30,'+'+h+' 热度','#d8a050');
  spawnIngredient();
  persist();
  if(state.blendCount>=CONFIG.blendNeed){ setTimeout(function(){ finishSuccess(); },420); }
}

function popPair(a,b){
  if(a.popping||b.popping) return;
  a.popping=true; a.popT=0; b.popping=true; b.popT=0;
  const mx=(a.x+b.x)/2,my=(a.y+b.y)/2;
  spawnParticles(mx,my,'hsl('+a.hue+','+a.sat+'%,'+(a.light-8)+'%)',14);
  spawnParticles(mx,my,'rgba(255,255,255,.88)',7);
  AudioSys.pop();
  addCombo();
  const mult=getComboMultiplier();
  const g=CONFIG.gameplay;
  let heatGain=Math.round(randInt(g.heatPerPop[0],g.heatPerPop[1])*mult*getHeatMult());
  let fanGain=Math.round(randInt(g.fansPerPop[0],g.fansPerPop[1])*mult*getFansMult());
  if(state.activeBuffs.doubleHeat) heatGain*=2;
  if(state.activeBuffs.extraFans) fanGain=Math.round(fanGain*1.5);
  state.heat+=heatGain; state.fans+=fanGain; saveData.totalFans=state.fans;
  state.dayStats.popped+=1; state.dayStats.fansGained+=fanGain;
  if(state.heat>state.dayStats.heatPeak) state.dayStats.heatPeak=state.heat;
  persist();
  addFloat(mx,my-10,'+'+heatGain,'#d990a8');
  if(state.combo>=3) addFloat(mx,my-30,'连击 ×'+state.combo,'#c08a6a');
  setTimeout(checkDayEnd,280);
}

function collectFruit(b){
  if(b.collected) return;
  b.collected=true; b.popping=true; b.popT=0; state.fruitCollected=true;
  spawnParticles(b.x,b.y,'#ffd76e',24); spawnParticles(b.x,b.y,'#fff3c4',10);
  AudioSys.collect();
  state.heat+=CONFIG.gameplay.fruitHeatBonus;
  if(state.heat>state.dayStats.heatPeak) state.dayStats.heatPeak=state.heat;
  addFloat(b.x,b.y-b.r-10,'好运果 +1','#d9a020');
  showGardenNotice('🍀','好运果 +1！','好运果可以在商店里兑换好物哦，记得去看看。');
  setTimeout(checkDayEnd,320);
}

/* ============================================================
   二十二、撞好情绪（坏情绪不消失）
   ============================================================ */
function onHitPositive(bad,good){
  if(state.positiveCooldown>0||state.phase!=='playing') return;
  state.positiveCooldown=CONFIG.gameplay.positiveCooldown;
  good.popping=true; good.popT=0; good.flash=1;

  const dx=bad.x-good.x,dy=bad.y-good.y,d=Math.sqrt(dx*dx+dy*dy)||1;
  const minD=good.r+bad.r+6;
  bad.x=clamp(good.x+(dx/d)*minD,bad.r,CW-bad.r);
  bad.y=clamp(good.y+(dy/d)*minD,CONFIG.gameplay.bubbleTopLimit+bad.r,CH-CONFIG.gameplay.bubbleBottomMargin-bad.r);

  spawnParticles(good.x,good.y,'hsl('+good.hue+','+good.sat+'%,'+(good.light-6)+'%)',14);
  spawnParticles(good.x,good.y,'rgba(255,255,255,.92)',10);
  AudioSys.wrong();

  const g=CONFIG.gameplay;
  const fanLoss=randInt(g.fanLossOnHit[0],g.fanLossOnHit[1]);
  const heatLoss=randInt(g.heatLossOnHit[0],g.heatLossOnHit[1]);
  state.fans=Math.max(0,state.fans-fanLoss); saveData.totalFans=state.fans;
  state.heat=Math.max(0,state.heat-heatLoss); persist();

  addFloat(good.x,good.y-20,'-'+fanLoss+' 粉','#c08a8a');
  addFloat(good.x+24,good.y-42,'-'+heatLoss+' 热度','#c08a8a');
  for(let i=0;i<2;i++) addDanmu(CONFIG.badDanmuTexts[randInt(0,CONFIG.badDanmuTexts.length-1)],'bad');

  if(state.activeBuffs.comboShield){ state.activeBuffs.comboShield=false; addFloat(CW/2,CH*0.4,'连击护符生效！','#8ab0e8'); } else { resetCombo(); }

  const word=good.word,r=good.r;
  setTimeout(function(){
    if(state.phase!=='playing') return;
    const nb=makeBubble('positive',word,r); nb.fontSize=fitFontSize(word,r);
    const top=CONFIG.gameplay.bubbleTopLimit,bot=CH-CONFIG.gameplay.bubbleBottomMargin;
    for(let t=0;t<100;t++){ nb.x=nb.r+10+Math.random()*(CW-nb.r*2-20); nb.y=top+nb.r+Math.random()*(bot-top-nb.r*2); let ok=true; for(let i=0;i<state.bubbles.length;i++){ const ob=state.bubbles[i]; if(ob.popping||ob===state.dragging||ob.entering) continue; const ddx=ob.x-nb.x,ddy=ob.y-nb.y; if(Math.sqrt(ddx*ddx+ddy*ddy)<ob.r+nb.r+4){ ok=false; break; } } if(ok) break; }
    nb.entering=false; state.bubbles.push(nb);
  },1500);
}

function checkDayEnd(){
  if(state.phase!=='playing') return;
  for(let i=0;i<state.bubbles.length;i++){ const b=state.bubbles[i]; if(b.type==='negative'&&!b.popping) return; }
  if(state.hasFruit&&!state.fruitCollected) return;
  finishSuccess();
}

/* ============================================================
   二十三、通关
   ============================================================ */
function finishSuccess(){
  if(state.phase!=='playing') return;
  state.phase='tree'; state.dragging=null; state.pointerId=null; resetCombo();
  AudioSys.complete(); stopDanmu();
  const pair=state.todayPair;
  if(saveData.unlocked.indexOf(pair.key)<0) saveData.unlocked.push(pair.key);
  if(state.fruitCollected) saveData.luckyCount+=1;
  /* 每场直播奖励种子，植物随直播自然成长一步。 */
  const liveIncome=Math.max(18,Math.round(18+state.heat*0.12));saveData.money+=liveIncome;saveData.totalEarned+=liveIncome;
  if(!saveData.garden)saveData.garden={seeds:0,seedInventory:[],lastWaterDay:0,plots:[],fertilizer:0,doubleCards:0,tripleCards:0,unlockedPlots:1,flowers:0,harvestCount:0,totalFlowers:0,totalPlanted:0};
  const garden=ensureGarden();const seedCount=randInt(1,3),seedRewards=[];
  for(let si=0;si<seedCount;si++){const seed=rollGardenSeed();garden.seedInventory.push(seed);seedRewards.push(seed.label);}
  garden.seeds=garden.seedInventory.length;
  const maturedNames=[];
  garden.plots.forEach(function(p){const before=p.stage||0;p.stage=Math.min(3,before+1);if(before<3&&p.stage>=3)maturedNames.push(p.name);});
  garden.pendingMaturedFlowers=(garden.pendingMaturedFlowers||[]).concat(maturedNames);state.maturedFlowers=maturedNames;state.seedRewards=seedRewards;state.liveIncome=liveIncome;state.flowerSale=null;if(garden.harvestCount>=10){if(garden.nextFlowerSaleDay==null)garden.nextFlowerSaleDay=state.currentDay+3;if(state.currentDay>=garden.nextFlowerSaleDay){const keys=Object.keys(garden.flowerStockById||{}).filter(function(k){return Number(garden.flowerStockById[k])>0;});if(garden.flowers>0&&keys.length){const key=keys[randInt(0,keys.length-1)],available=Math.min(garden.flowers,Number(garden.flowerStockById[key])||0),qty=Math.min(available,randInt(2,5));if(qty>0){const f=GARDEN_SEED_LIBRARY.find(function(x){return x.id===key;})||THERAPY_FLOWERS.find(function(x){return x.id===key;}),flowerName=f?f.name:'鲜花花束';garden.flowerStockById[key]-=qty;garden.flowers-=qty;const buyer=CONFIG.viewerNames[randInt(0,CONFIG.viewerNames.length-1)],income=qty*randInt(18,28);saveData.money+=income;saveData.totalEarned+=income;garden.flowerLives=(garden.flowerLives||0)+1;state.flowerSale={buyer:buyer,name:flowerName,qty:qty,income:income};}}garden.nextFlowerSaleDay=state.currentDay+3;}}state.auctionPerfume=null;
  saveData.totalHeat+=state.heat; saveData.totalFans=state.fans;
  saveData.totalPopped+=state.dayStats.popped; saveData.totalDays+=1;
  if(state.currentDay>saveData.bestDay) saveData.bestDay=state.currentDay;
  saveData.currentDay=state.currentDay+1;
  saveData.daySnapshot=null;
  persist(); checkAchievements();
  const tree=state.tree; tree.active=true; tree.visible=true; tree.t=0;
  let resultShown=false;function revealResult(){if(resultShown||state.phase!=='tree')return;resultShown=true;state.tree.active=false;state.tree.visible=false;tree.onDone=null;showResult();}tree.onDone=revealResult;setTimeout(revealResult,2200);
  const shape=buildTreeShape(); tree.branches=shape.branches; tree.tips=shape.tips;
}

/* ============================================================
   二十四、结算
   ============================================================ */
function showResult(){
  if(state.phase==='result')return;
  state.phase='result';
  const day=state.currentDay;
  resultTitleEl.textContent='第 '+day+' 天 · 完成';
  resultSubEl.textContent='恭喜完成今天的疗愈直播！获得 '+(state.seedRewards||[]).length+' 颗随机种子和 '+formatMoney(state.liveIncome||0)+' 元收益。花园里的每株植物都成长了一步。';
  resultStatsEl.innerHTML='<div class="rs-item"><span>消除坏情绪</span><b>'+state.dayStats.popped+'</b></div><div class="rs-item"><span>今日涨粉</span><b>+'+state.dayStats.fansGained+'</b></div><div class="rs-item"><span>回答提问</span><b>'+state.dayStats.answered+'</b></div>';
  let rewardHtml=(state.seedRewards||[]).map(function(s){return '<div class="reward-item"><div class="reward-icon">'+(s.indexOf('随机')>=0?'❔':(s.indexOf('神奇')>=0?'✨':'🌱'))+'</div><div class="reward-name">'+s+'</div></div>';}).join('');
  /* 每日结算奖励统一为种子；好运果仅作为直播过程中的额外收集物。 */
  resultRewardEl.innerHTML=rewardHtml; resultRewardEl.style.display='flex';
  /* 调香拍卖竞价动画 */
  if(state.auctionPerfume){
    const ap=state.auctionPerfume;
    const rarLabel=ap.rarity==='legend'?'传说香氛':(ap.rarity==='rare'?'稀有香氛':'普通香氛');
    ap.buyer=CONFIG.viewerNames[randInt(0,CONFIG.viewerNames.length-1)];
    resultAuctionEl.innerHTML='<div class="ra-title">🧪 调香直播 · 今日拍卖</div><div class="ra-name">'+perfumeSVG(ap.kind)+' '+ap.name+'（'+rarLabel+'）</div><div class="ra-price">'+formatMoney(ap.price)+' 元</div><div class="ra-note">'+ap.buyer+' 已拍下这瓶香水，收益已计入～</div>';
    resultAuctionEl.classList.add('show');
    /* 成交弹窗：竞价动画 + 引导按钮 */
    auNameEl.textContent='《'+ap.name+'》';
    auNoteEl.textContent='灵感来自本场花果：'+ap.insp+'（'+rarLabel+'）';
    auBidderEl.textContent='观众举牌竞价中……';
    auPriceEl.textContent='0 元';
    auctionOverlay.classList.add('show');
    const steps=26; let si=0; let done=false;
    const timer=setInterval(function(){
      si++;
      const k=si/steps;
      auPriceEl.textContent=formatMoney(Math.round(ap.price*(0.35+0.65*k*(2-k))))+' 元';
      if(si%4===0) auBidderEl.textContent=CONFIG.viewerNames[randInt(0,CONFIG.viewerNames.length-1)]+' 举牌 '+formatMoney(Math.round(ap.price*(0.3+0.7*k)))+' 元';
      if(si>=steps){ clearInterval(timer); done=true; auPriceEl.textContent=formatMoney(ap.price)+' 元'; auBidderEl.textContent=ap.buyer+' 以 '+formatMoney(ap.price)+' 元拍下了这瓶香水'; }
    },55);
    auDealEl.onclick=function(){
      AudioSys.init(); AudioSys.deal();
      if(!done){ clearInterval(timer); done=true; auPriceEl.textContent=formatMoney(ap.price)+' 元'; auBidderEl.textContent=ap.buyer+' 以 '+formatMoney(ap.price)+' 元拍下了这瓶香水'; }
      auctionOverlay.classList.remove('show');
      showEventBanner('《'+ap.name+'》成交！+'+formatMoney(ap.price)+' 元','#e8a860');
      spawnParticles(CW*0.5,CH*0.4,'#f0c060',26);
      spawnParticles(CW*0.5,CH*0.4,'rgba(255,255,255,.9)',12);
      addDanmu(ap.buyer+' 拍下了《'+ap.name+'》！','gift');
    };
  } else {
    resultAuctionEl.classList.remove('show'); resultAuctionEl.innerHTML='';
    auctionOverlay.classList.remove('show');
  }
  if(state.flowerSale){const fs=state.flowerSale;resultAuctionEl.innerHTML='<div class="ra-title">🌷 鲜花专场 · 成交啦</div><div class="ra-name">'+fs.buyer+' 买下了 '+fs.qty+' 朵 '+fs.name+'！</div><div class="ra-price">+'+formatMoney(fs.income)+' 元</div><div class="ra-note">成交收入已自动计入账户。</div><button class="q-option" id="flowerSaleDeal" type="button">确认成交</button>';resultAuctionEl.classList.add('show');const dealBtn=document.getElementById('flowerSaleDeal');if(dealBtn)dealBtn.addEventListener('click',function(){AudioSys.deal();dealBtn.textContent='已成交 ✓';dealBtn.disabled=true;});}
  resultBtnEl.textContent='进入第 '+(day+1)+' 天';
  resultBtnEl.onclick=function(){ AudioSys.click(); beginDayTransition(day+1); };
  document.getElementById('resultGardenBtn').onclick=function(){AudioSys.click();openGarden();};
  showScreen(resultScreen);
  const pendingMatured=ensureGarden().pendingMaturedFlowers;const notes=[];if(state.flowerSale){const fs=state.flowerSale;notes.push(fs.buyer+' 买下了 '+fs.qty+' 朵 '+fs.name+'，成交 '+formatMoney(fs.income)+' 元！');}if(pendingMatured.length)notes.push('花园里的 '+pendingMatured.join('、')+' 已经成熟，记得去收获。');if(notes.length)showGardenNotice(state.flowerSale?'💐':'🌸',state.flowerSale?'鲜花专场成交啦！':'花儿成熟啦！',notes.join(' '));
}

/* ============================================================
   二十五、页面 / 果篮商店
   ============================================================ */
function showScreen(el){ const ss=document.querySelectorAll('.screen'); for(let i=0;i<ss.length;i++) ss[i].classList.remove('active'); if(el) el.classList.add('active'); }
function showGardenNotice(emoji,title,message){if(state.phase==='playing')state.paused=true;const box=document.getElementById('gardenNotice');document.getElementById('gardenNoticeEmoji').textContent=emoji;document.getElementById('gardenNoticeTitle').textContent=title;document.getElementById('gardenNoticeText').textContent=message;box.classList.add('show');}
document.getElementById('gardenNoticeClose').addEventListener('click',function(){document.getElementById('gardenNotice').classList.remove('show');const pending=ensureGarden().pendingMaturedFlowers;if(pending.length){pending.length=0;persist();}if(state.phase==='playing')state.paused=false;AudioSys.click();});
function beginDayTransition(day){const el=document.getElementById('dayTransition');document.getElementById('dayTransitionText').textContent='第 '+day+' 天';el.classList.add('show');setTimeout(function(){el.classList.remove('show');startDay(day);},1450);}
function hideAllScreens(){ showScreen(null); }

function showToast(icon,msg){ const el=document.createElement('div'); el.className='achievement-toast'; el.innerHTML='<div class="at-icon">'+icon+'</div><div class="at-content"><div class="at-label">花 园 与 好 运</div><div class="at-name">'+msg+'</div></div>'; document.body.appendChild(el); setTimeout(function(){ el.classList.add('show'); },60); setTimeout(function(){ el.classList.remove('show'); setTimeout(function(){ if(el.parentNode) el.parentNode.removeChild(el); },600); },2400); }

let shopTab='fruit';
function renderShop(){
  tabShopFruitEl.classList.toggle('active',shopTab==='fruit');
  tabShopGoodsEl.classList.toggle('active',shopTab==='goods');
  shopBalanceEl.textContent=saveData.luckyCount;
  shopMoneyEl.textContent=formatMoney(saveData.money);
  if(shopTab==='goods'){ renderGoodsShop(); return; }
  let html='';
  /* 主题皮肤 */
  html+='<div class="shop-section">直播间皮肤</div>';
  CONFIG.themes.forEach(function(th){
    if(th.cost===0) return;
    const owned=saveData.ownedThemes.indexOf(th.id)>=0;
    const cur=saveData.theme===th.id;
    const canBuy=saveData.luckyCount>=th.cost;
    html+='<div class="shop-card">';
    html+='<div class="shop-icon">'+CONFIG.themeEmoji[th.id]+'</div>';
    html+='<div class="shop-info"><div class="shop-name">'+th.name+(cur?' <span style="color:#7a9a5a">使用中</span>':(owned?' 已拥有':''))+'</div><div class="shop-desc">直播间背景皮肤</div></div>';
    if(cur){ html+='<button class="shop-buy" disabled>使用中</button>'; }
    else if(owned){ html+='<button class="shop-buy theme-use" data-id="'+th.id+'">换上</button>'; }
    else html+='<button class="shop-buy theme-buy" data-id="'+th.id+'" '+(canBuy?'':'disabled')+'>'+th.cost+' 果</button>';
    html+='</div>';
  });
  /* 主播头像 */
  html+='<div class="shop-section">主播头像</div>';
  CONFIG.avatars.forEach(function(av){
    if(av.cost===0) return;
    const owned=saveData.ownedAvatars.indexOf(av.id)>=0;
    const cur=saveData.avatar===av.id;
    const canBuy=saveData.luckyCount>=av.cost;
    html+='<div class="shop-card">';
    html+='<div class="shop-icon">'+av.emoji+'</div>';
    html+='<div class="shop-info"><div class="shop-name">'+av.name+(cur?' <span style="color:#7a9a5a">使用中</span>':(owned?' 已拥有':''))+'</div><div class="shop-desc">直播画面左上角头像 · 游戏中点头像可切换</div></div>';
    if(cur){ html+='<button class="shop-buy" disabled>使用中</button>'; }
    else if(owned){ html+='<button class="shop-buy avatar-use" data-id="'+av.id+'">换上</button>'; }
    else html+='<button class="shop-buy avatar-buy" data-id="'+av.id+'" '+(canBuy?'':'disabled')+'>'+av.cost+' 果</button>';
    html+='</div>';
  });
  html+='<div class="shop-section">直播加成道具</div>';
  CONFIG.shopItems.forEach(function(item){
    const owned=saveData.ownedItems.filter(function(i){ return i.id===item.id; }).length;
    const canBuy=saveData.luckyCount>=item.cost;
    html+='<div class="shop-card">';
    html+='<div class="shop-icon">'+item.icon+'</div>';
    html+='<div class="shop-info"><div class="shop-name">'+item.name+(owned?' ×'+owned:'')+'</div><div class="shop-desc">'+item.desc+'</div></div>';
    html+='<button class="shop-buy" data-id="'+item.id+'" '+(canBuy?'':'disabled')+'>'+item.cost+' 果</button>';
    html+='</div>';
  });
  shopGridEl.innerHTML=html;
  bindShopFruit();
}
function bindShopFruit(){
  shopGridEl.querySelectorAll('.theme-buy').forEach(function(btn){
    btn.addEventListener('click',function(){
      const id=btn.getAttribute('data-id');
      const th=CONFIG.themes.filter(function(x){ return x.id===id; })[0];
      if(!th||saveData.luckyCount<th.cost) return;
      AudioSys.collect();
      saveData.luckyCount-=th.cost; saveData.ownedThemes.push(th.id); saveData.theme=th.id;
      persist(); applyTheme(th.id);
      showToast(CONFIG.themeEmoji[th.id],'皮肤已换上：'+th.name);
      renderShop(); updateHudNumbers(1);
    });
  });
  shopGridEl.querySelectorAll('.theme-use').forEach(function(btn){
    btn.addEventListener('click',function(){
      AudioSys.click();
      saveData.theme=btn.getAttribute('data-id'); persist(); applyTheme(saveData.theme);
      showToast(CONFIG.themeEmoji[saveData.theme],'皮肤已换上'); renderShop();
    });
  });
  shopGridEl.querySelectorAll('.avatar-buy').forEach(function(btn){
    btn.addEventListener('click',function(){
      const id=btn.getAttribute('data-id');
      const av=CONFIG.avatars.filter(function(x){ return x.id===id; })[0];
      if(!av||saveData.luckyCount<av.cost) return;
      AudioSys.collect();
      saveData.luckyCount-=av.cost; saveData.ownedAvatars.push(av.id); saveData.avatar=av.id;
      persist(); updateAvatar();
      showToast(av.emoji,'头像已换上：'+av.name);
      renderShop();
    });
  });
  shopGridEl.querySelectorAll('.avatar-use').forEach(function(btn){
    btn.addEventListener('click',function(){
      AudioSys.click();
      saveData.avatar=btn.getAttribute('data-id'); persist(); updateAvatar();
      showToast('✨','头像已换上'); renderShop();
    });
  });
  shopGridEl.querySelectorAll('.shop-buy:not(.theme-buy):not(.theme-use):not(.avatar-buy):not(.avatar-use)').forEach(function(btn){
    btn.addEventListener('click',function(){
      const id=btn.getAttribute('data-id');
      const item=CONFIG.shopItems.filter(function(i){ return i.id===id; })[0];
      if(!item||saveData.luckyCount<item.cost) return;
      AudioSys.collect();
      if(item.type==='unlockCommon'||item.type==='unlockRare'||item.type==='unlockLegend'){
        const rarity=item.type.replace('unlock','').toLowerCase();
        const locked=CONFIG.pairs.filter(function(p){ return saveData.unlocked.indexOf(p.key)<0 && p.rarity===rarity; });
        if(locked.length>0){
          const pick=locked[randInt(0,locked.length-1)];
          saveData.unlocked.push(pick.key); saveData.luckyCount-=item.cost; persist();
          showToast('🌸','解锁 '+pick.flower+' · '+pick.fruit);
        } else { showToast('🍀','该稀有度已全部收集'); return; }
      } else {
        saveData.ownedItems.push({ id:item.id, type:item.type });
        saveData.luckyCount-=item.cost; persist();
        showToast(item.icon,'获得 '+item.name+'（下一局生效）');
      }
      renderShop(); checkAchievements();
    });
  });
}
function renderGoodsShop(){
  let html='<div class="shop-section">花园种植用品 · 使用收益购买</div>';
  CONFIG.goodsItems.forEach(function(item){
    let owned=0;
    if(item.kind==='asset'||item.kind==='milestone') owned=countAsset(item.key)+(item.kind==='milestone'&&saveData.ownedItems.filter(function(i){ return i.id===item.id; }).length?1:0);
    const canBuy=saveData.money>=item.cost;
    const ownedHtml=(item.kind==='asset')?(owned?' <span style="color:#7a9a5a">已持有×'+owned+'</span>':''):'';
    html+='<div class="shop-card'+(item.kind==='milestone'?' milestone':'')+'">';
    html+='<div class="shop-icon">'+item.icon+'</div>';
    html+='<div class="shop-info"><div class="shop-name">'+item.name+ownedHtml+'</div><div class="shop-desc">'+item.desc+'</div></div>';
    if(item.kind==='milestone'&&owned){ html+='<button class="shop-buy" disabled>已达成</button>'; }
    else html+='<button class="shop-buy money-buy" data-id="'+item.id+'" '+(canBuy?'':'disabled')+'>'+formatMoney(item.cost)+' 元</button>';
    html+='</div>';
  });
  shopGridEl.innerHTML=html;
  shopGridEl.querySelectorAll('.money-buy').forEach(function(btn){
    btn.addEventListener('click',function(){
      const id=btn.getAttribute('data-id');
      const item=CONFIG.goodsItems.filter(function(i){ return i.id===id; })[0];
      if(!item||saveData.money<item.cost) return;
      AudioSys.collect();
      saveData.money-=item.cost;
      if(item.kind==='seedBox'||item.kind==='magicSeed'){
        const g=ensureGarden();if(item.kind==='seedBox'){for(let k=0;k<(item.amount||3);k++)g.seedInventory.push(rollGardenSeed());}else{g.seedInventory.push({kind:'magic',label:'神奇种子'});}g.seeds=g.seedInventory.length;showToast(item.icon,item.kind==='seedBox'?'种子盲盒开启！获得 '+item.amount+' 颗种子':'获得神奇种子！');
      } else if(item.kind==='gardenItem'){
        if(!saveData.garden) saveData.garden={seeds:0,plots:[],fertilizer:0,doubleCards:0,tripleCards:0};
        saveData.garden[item.stockKey]=(saveData.garden[item.stockKey]||0)+(item.amount||1);
        showToast(item.icon,'获得 '+item.name+'！');
      } else if(item.kind==='milestone'){
        saveData.ownedItems.push({ id:item.id, kind:'milestone', key:item.key });
        showToast(item.icon,'恭喜！获得 '+item.name+'！'); checkAchievements();
      } else if(item.kind==='asset'){
        saveData.ownedItems.push({ id:item.id, kind:'asset', key:item.key });
        showToast(item.icon,'获得 '+item.name+'（永久生效）');
      } else {
        const flavor=CONFIG.treatTexts[item.id]||('获得了 '+item.name+'，感觉真好～');
        if(state.phase==='playing'){
          state.activeBuffs[item.id]=true;
          showToast(item.icon,flavor);
          showEventBanner(flavor,'#e8a860');
          addDanmu(flavor,'gift');
        } else {
          saveData.ownedItems.push({ id:item.id, kind:'consumable', type:item.id });
          showToast(item.icon,flavor+'（下一局生效）');
        }
      }
      persist(); renderShop();
    });
  });
}

function applyBuffsForNewDay(){
  state.activeBuffs={comboShield:false,doubleHeat:false,extraFans:false,milkTea:false,snacks:false,coffee:false,cake:false};
  const keep=[];
  saveData.ownedItems.forEach(function(it){
    if(it.type==='comboShield'&&!state.activeBuffs.comboShield){ state.activeBuffs.comboShield=true; }
    else if(it.type==='doubleHeat'&&!state.activeBuffs.doubleHeat){ state.activeBuffs.doubleHeat=true; }
    else if(it.type==='extraFans'&&!state.activeBuffs.extraFans){ state.activeBuffs.extraFans=true; }
    else if(it.id==='milkTea'&&!state.activeBuffs.milkTea){ state.activeBuffs.milkTea=true; showToast('🧋','快乐奶茶生效：今日热度 +25%'); }
    else if(it.id==='snacks'&&!state.activeBuffs.snacks){ state.activeBuffs.snacks=true; showToast('🍿','零食大礼包生效：今日涨粉 +40%'); }
    else if(it.id==='coffee'&&!state.activeBuffs.coffee){ state.activeBuffs.coffee=true; showToast('☕','冰美式生效：连击窗口 +2 秒'); }
    else if(it.id==='cake'&&!state.activeBuffs.cake){ state.activeBuffs.cake=true; showToast('🍰','治愈小蛋糕生效：今日必掉好运果'); }
    else keep.push(it);
  });
  saveData.ownedItems=keep; persist();
}

/* ============================================================
   二十六、成就
   ============================================================ */
function checkAchievements(){
  let changed=false;
  for(let i=0;i<ACHIEVEMENTS.length;i++){
    const a=ACHIEVEMENTS[i];
    if(saveData.unlockedAchievements.indexOf(a.id)>=0) continue;
    if(a.check()){ saveData.unlockedAchievements.push(a.id); showAchievementToast(a); changed=true; }
  }
  if(changed) persist();
}
function showAchievementToast(a){ const el=document.createElement('div'); el.className='achievement-toast'; el.innerHTML='<div class="at-icon">'+a.icon+'</div><div class="at-content"><div class="at-label">成 就 解 锁</div><div class="at-name">'+a.name+'</div></div>'; document.body.appendChild(el); setTimeout(function(){ el.classList.add('show'); },60); setTimeout(function(){ el.classList.remove('show'); setTimeout(function(){ if(el.parentNode) el.parentNode.removeChild(el); },600); },3000); }
function renderAchievements(){ let html=''; for(let i=0;i<ACHIEVEMENTS.length;i++){ const a=ACHIEVEMENTS[i]; const un=saveData.unlockedAchievements.indexOf(a.id)>=0; html+='<div class="ach-card'+(un?'':' locked')+'"><div class="ach-icon">'+a.icon+'</div><div class="ach-content"><div class="ach-name">'+a.name+'</div><div class="ach-desc">'+a.desc+'</div></div><div class="ach-status">'+(un?'已达成':'未达成')+'</div></div>'; } achievementListEl.innerHTML=html; }

/* ============================================================
   二十七、图鉴 / 数据
   ============================================================ */
let collectionCategory='normal',collectionPage=0;
function renderCollection(){
 const g=ensureGarden(),all=collectionCategory==='normal'?GARDEN_SEED_LIBRARY:THERAPY_FLOWERS;
 const owned=collectionCategory==='normal'?g.flowerCollection:g.magicCollection.map(function(f){return f.id;});
 const pageSize=12,totalPages=Math.max(1,Math.ceil(all.length/pageSize));collectionPage=clamp(collectionPage,0,totalPages-1);
 const items=all.slice(collectionPage*pageSize,(collectionPage+1)*pageSize);let html='';
 items.forEach(function(f){const un=owned.indexOf(f.id)>=0;html+='<div class="pair-card flower-only-card'+(un?'':' locked')+'"><div class="pair-icons"><div class="pair-icon">'+(un?f.emoji:'<div class="silhouette"></div>')+'</div></div><div class="pair-name">'+(un?f.name:'???')+'</div><div class="pair-desc">'+(un?(f.effect||f.desc||'已收入花园图鉴'):'尚未收集')+'</div></div>';});
 collectionGridEl.innerHTML=html;
 const total=document.getElementById('collectionPageLabel');total.textContent=(collectionPage+1)+' / '+totalPages;
 document.getElementById('collectionPrev').disabled=collectionPage<=0;document.getElementById('collectionNext').disabled=collectionPage>=totalPages-1;
 document.getElementById('tabUnlocked').classList.toggle('active',collectionCategory==='normal');document.getElementById('tabAll').classList.toggle('active',collectionCategory==='magic');
 document.getElementById('colTitle').textContent=collectionCategory==='normal'?'普通花卉图鉴':'神奇花卉图鉴';
}

function renderPerfumeCollection(){
  let html='<div class="collection-note">🧴 <b>调香图鉴</b><br>每隔几天就会开展调香直播，把你每天收集到的花果进行调香拍卖吧~调出的香氛会被观众竞价拍下，换成直播收益哦～</div>';
  if(saveData.perfumes.length===0){
    html+='<div style="grid-column:1/-1;text-align:center;color:#beb2c6;font-size:12px;padding:30px 0">还没有收藏香水，调香直播日调出的香水会收藏在这里～</div>';
  } else {
    for(let i=saveData.perfumes.length-1;i>=0;i--){
      const pf=saveData.perfumes[i];
      const rl=pf.rarity==='legend'?' · 传说':(pf.rarity==='rare'?' · 稀有':'');
      html+='<div class="perfume-card"><div class="perfume-icon">'+perfumeSVG(pf.kind)+'</div><div class="perfume-name">'+pf.name+rl+'</div><div class="perfume-price">成交 '+formatMoney(pf.price)+' 元</div><div style="font-size:10px;color:#b8a898;margin-top:3px">第 '+pf.day+' 天 · 灵感 '+(pf.insp||'本场花果')+'</div></div>';
    }
  }
  collectionGridEl.innerHTML=html;
}

function updateDataScreen(){
  document.getElementById('statDays').textContent=saveData.totalDays;
  document.getElementById('statHeat').textContent=saveData.totalHeat;
  document.getElementById('statFans').textContent=saveData.totalFans;
  document.getElementById('statPopped').textContent=saveData.totalPopped;
  document.getElementById('statUnlocked').textContent=saveData.unlocked.length+' / '+CONFIG.pairs.length;
  document.getElementById('statBest').textContent=saveData.bestDay;
  document.getElementById('statLucky').textContent=saveData.luckyCount;
  document.getElementById('statItems').textContent=saveData.ownedItems.length;
  document.getElementById('statEarn').textContent=formatMoney(saveData.totalEarned)+' 元';
}

/* ============================================================
   二十八、花果 SVG
   ============================================================ */
function flowerSVG(type){
  const p=(PALETTE[type]||PALETTE.peach).f; let petals='';
  for(let i=0;i<5;i++){ const a=(i/5)*Math.PI*2-Math.PI/2; const x=30+Math.cos(a)*11,y=30+Math.sin(a)*11; petals+='<circle cx="'+x.toFixed(2)+'" cy="'+y.toFixed(2)+'" r="10.5" fill="'+(i%2?p[0]:p[1])+'"/>'; }
  return '<svg viewBox="0 0 60 60">'+petals+'<circle cx="30" cy="30" r="6.5" fill="'+p[2]+'"/><circle cx="30" cy="30" r="2.6" fill="#fff8e0" opacity=".8"/></svg>';
}
function luckyFruitSVG(){ return '<svg viewBox="0 0 60 60"><circle cx="30" cy="34" r="16" fill="#f5c542"/><circle cx="25" cy="28" r="5" fill="#fff0b0" opacity=".8"/><path d="M30 18 L30 12" stroke="#8fbf8a" stroke-width="2"/><ellipse cx="36" cy="14" rx="5" ry="3" fill="#8fbf8a" transform="rotate(-20 36 14)"/><path d="M22 34 L38 34 M30 24 L30 44" stroke="#fff8e0" stroke-width="1.4" opacity=".4"/></svg>'; }

function fruitSVG(type){
  const c=(PALETTE[type]||PALETTE.peach).r;
  if(type==='cherry'){ return '<svg viewBox="0 0 60 60"><path d="M30 18 Q26 30 20 40" stroke="#8fbf8a" stroke-width="2" fill="none"/><path d="M30 18 Q34 30 40 40" stroke="#8fbf8a" stroke-width="2" fill="none"/><circle cx="20" cy="43" r="9" fill="'+c+'"/><circle cx="40" cy="43" r="9" fill="'+c+'"/><circle cx="17" cy="40" r="3" fill="rgba(255,255,255,.5)"/><circle cx="37" cy="40" r="3" fill="rgba(255,255,255,.5)"/><circle cx="30" cy="16" r="3" fill="#8fbf8a"/></svg>'; }
  if(type==='pear'){ return '<svg viewBox="0 0 60 60"><path d="M30 20 Q20 30 20 40 Q20 51 30 51 Q40 51 40 40 Q40 30 30 20 Z" fill="'+c+'"/><path d="M30 20 L30 13" stroke="#8fbf8a" stroke-width="2"/><ellipse cx="36" cy="15" rx="5" ry="3" fill="#8fbf8a" transform="rotate(-20 36 15)"/><circle cx="25" cy="40" r="4" fill="rgba(255,255,255,.45)"/></svg>'; }
  if(type==='banana'){ return '<svg viewBox="0 0 60 60"><path d="M18 18 Q30 48 48 40 Q44 30 34 28 Q26 26 22 18 Z" fill="'+c+'"/><path d="M18 18 L16 12" stroke="#8fbf8a" stroke-width="2"/></svg>'; }
  if(type==='grape'){ return '<svg viewBox="0 0 60 60"><circle cx="24" cy="30" r="7" fill="'+c+'"/><circle cx="36" cy="30" r="7" fill="'+c+'"/><circle cx="30" cy="24" r="7" fill="'+c+'"/><circle cx="30" cy="38" r="7" fill="'+c+'"/><circle cx="24" cy="42" r="6" fill="'+c+'"/><circle cx="36" cy="42" r="6" fill="'+c+'"/><path d="M30 18 L30 10" stroke="#8fbf8a" stroke-width="2"/><ellipse cx="36" cy="12" rx="5" ry="3" fill="#8fbf8a" transform="rotate(-20 36 12)"/></svg>'; }
  if(type==='watermelon'){ return '<svg viewBox="0 0 60 60"><circle cx="30" cy="36" r="16" fill="'+c+'"/><path d="M18 26 Q30 42 42 26" stroke="#3a8a3a" stroke-width="2.4" fill="none"/><path d="M20 32 Q30 46 40 32" stroke="#3a8a3a" stroke-width="2" fill="none" opacity=".7"/><circle cx="25" cy="28" r="4" fill="rgba(255,255,255,.4)"/></svg>'; }
  if(type==='dragonfruit'){ return '<svg viewBox="0 0 60 60"><ellipse cx="30" cy="35" rx="15" ry="14" fill="'+c+'"/><path d="M20 25 L24 18 M30 22 L30 15 M40 25 L36 18" stroke="#8fbf8a" stroke-width="2" stroke-linecap="round"/><circle cx="25" cy="35" r="2" fill="#fff0a0"/><circle cx="33" cy="38" r="2" fill="#fff0a0"/><circle cx="30" cy="30" r="1.6" fill="#fff0a0"/></svg>'; }
  if(type==='durian'){ return '<svg viewBox="0 0 60 60"><circle cx="30" cy="35" r="16" fill="'+c+'"/><path d="M20 22 L22 30 M28 20 L30 28 M38 22 L36 30 M22 44 L26 38 M38 44 L34 38" stroke="#6a5a1a" stroke-width="2" stroke-linecap="round"/></svg>'; }
  return '<svg viewBox="0 0 60 60"><circle cx="30" cy="34" r="16" fill="'+c+'"/><circle cx="25" cy="28" r="5" fill="rgba(255,255,255,.4)"/><path d="M30 18 L30 12" stroke="#8fbf8a" stroke-width="2"/><ellipse cx="36" cy="14" rx="5" ry="3" fill="#8fbf8a" transform="rotate(-20 36 14)"/></svg>';
}

/* ============================================================
   二十九、主循环
   ============================================================ */
function update(dt){
  if(state.paused) return;
  state.time+=dt; updateHudNumbers(dt);
  updateParticles(dt); updateFloats(dt); updateGifts(dt);
  if(state.positiveCooldown>0) state.positiveCooldown=Math.max(0,state.positiveCooldown-dt);
  if(likeCd>0) likeCd-=dt;
  if(state.comboTimer>0){ state.comboTimer-=dt; if(state.comboTimer<=0) resetCombo(); }
  if(state.tree.active){ state.tree.t+=dt; if(state.tree.t>=state.tree.duration){ state.tree.active=false; const cb=state.tree.onDone; state.tree.onDone=null; if(cb) cb(); } return; }
  if(state.phase!=='playing') return;

  updatePK(dt);
  if(!state.pk){
    state.eventTimer-=dt;
    if(state.eventTimer<=0){ triggerRandomEvent(); state.eventTimer=CONFIG.eventIntervalMin+Math.random()*(CONFIG.eventIntervalMax-CONFIG.eventIntervalMin); }
  }

  state.questionTimer-=dt;
  if(!state.pk && state.questionTimer<=0){ if(Math.random()<CONFIG.gameplay.questionChance) triggerQuestion(); state.questionTimer=CONFIG.gameplay.questionIntervalMin+Math.random()*(CONFIG.gameplay.questionIntervalMax-CONFIG.gameplay.questionIntervalMin); }

  const top=CONFIG.gameplay.bubbleTopLimit,bot=CH-CONFIG.gameplay.bubbleBottomMargin;
  for(let i=0;i<state.bubbles.length;i++){
    const b=state.bubbles[i];
    if(b.entering){ if(b.popping||b===state.dragging){ b.entering=false; continue; } b.enterT+=dt; if(b.enterT<b.enterDelay) continue; const t=Math.min(1,(b.enterT-b.enterDelay)/0.65); const ease=1-Math.pow(1-t,3); b.y=-b.r-40+(b.targetY+b.r+40)*ease; if(t>=1){ b.entering=false; b.y=b.targetY; } continue; }
    if(b.popping||b===state.dragging) continue;
    b.wobble+=dt*1.3; b.x+=b.vx*dt; b.y+=b.vy*dt;
    if(b.x<b.r){ b.x=b.r; b.vx=Math.abs(b.vx); }
    if(b.x>CW-b.r){ b.x=CW-b.r; b.vx=-Math.abs(b.vx); }
    if(b.y<top+b.r){ b.y=top+b.r; b.vy=Math.abs(b.vy); }
    if(b.y>bot-b.r){ b.y=bot-b.r; b.vy=-Math.abs(b.vy); }
    if(b.flash>0) b.flash=Math.max(0,b.flash-dt*2.6);
  }
  separateBubbles();

  /* 红包 / 黑粉 互动 */
  state.specialTimer-=dt;
  if(state.specialTimer<=0){
    state.specialTimer=randInt(14,24);
    if(state.specials.length<2) spawnSpecial();
  }
  for(let i=state.specials.length-1;i>=0;i--){
    const s=state.specials[i];
    s.t+=dt; s.life-=dt; s.x+=s.vx*dt; s.y+=s.vy*dt;
    if(s.x<s.r+4){ s.x=s.r+4; s.vx=Math.abs(s.vx); }
    if(s.x>CW-s.r-4){ s.x=CW-s.r-4; s.vx=-Math.abs(s.vx); }
    if(s.y<top+s.r){ s.y=top+s.r; s.vy=Math.abs(s.vy); }
    if(s.y>bot-s.r){ s.y=bot-s.r; s.vy=-Math.abs(s.vy); }
    if(s.life<=0){
      if(s.kind==='hater'){
        const f=randInt(3,8);
        state.fans=Math.max(0,state.fans-f); saveData.totalFans=state.fans;
        addFloat(s.x,s.y-s.r-8,'-'+f+' 粉','#8a7a8a');
        addDanmu('黑粉带节奏了...','bad');
        persist();
      }
      state.specials.splice(i,1);
    }
  }

  /* 每 5 秒自动保存当天进度 */
  state.snapTick+=dt;
  if(state.snapTick>5){ state.snapTick=0; saveDaySnapshot(); persist(); }

  let changed=false;
  for(let i=0;i<state.bubbles.length;i++){ const b=state.bubbles[i]; if(b.popping){ b.popT+=dt; const k=Math.min(1,b.popT/CONFIG.gameplay.popAnimDuration); b.scale=1+k*0.95; b.alpha=1-k; if(k>=1){ b.dead=true; changed=true; } } }
  if(changed){ const keep=[]; for(let i=0;i<state.bubbles.length;i++){ if(!state.bubbles[i].dead) keep.push(state.bubbles[i]); } state.bubbles=keep; }
}

function separateBubbles(){
  const a=state.bubbles;
  for(let i=0;i<a.length;i++){ const A=a[i]; if(A.popping||A.entering||A===state.dragging) continue; for(let j=i+1;j<a.length;j++){ const B=a[j]; if(B.popping||B.entering||B===state.dragging) continue; const dx=B.x-A.x,dy=B.y-A.y; const d=Math.sqrt(dx*dx+dy*dy); const md=A.r+B.r; if(d>0.01&&d<md){if(A.type==='negative'&&B.type==='negative'&&A.word===B.word){popPair(A,B);addFloat((A.x+B.x)/2,(A.y+B.y)/2-24,'自动合并！','#d58ca5');return;}const p=(md-d)*0.5;const nx=dx/d,ny=dy/d;A.x-=nx*p;A.y-=ny*p;B.x+=nx*p;B.y+=ny*p;} } }
}

function render(){
  ctx.clearRect(0,0,CW,CH); drawAmbient(state.time); if(state.tree.visible) drawTree();
  if(state.perfumeMode&&state.phase==='playing'){ ctx.save(); ctx.font='700 15px '+FONT_FAMILY; ctx.textAlign='center'; ctx.textBaseline='middle'; ctx.fillStyle='rgba(216,160,80,.92)'; ctx.fillText('🧪 今日调香日 · 拖动原料融合',CW/2,34); ctx.restore(); }
  for(let i=0;i<state.bubbles.length;i++){ const b=state.bubbles[i]; if(b===state.dragging) continue; drawBubble(b); }
  if(state.dragging&&!state.dragging.popping) drawBubble(state.dragging);
  drawParticles(); drawFloats();
  for(let i=0;i<state.specials.length;i++) drawSpecial(state.specials[i]);
  for(let i=0;i<state.gifts.length;i++) drawGift(state.gifts[i]);
}

function loop(now){ requestAnimationFrame(loop); if(!state.lastTime) state.lastTime=now; let dt=(now-state.lastTime)/1000; state.lastTime=now; if(dt>0.06) dt=0.06; if(dt<0) dt=0; update(dt); render(); }

/* ============================================================
   三十、拖拽（+ 好运果点击）
   ============================================================ */
function getCanvasPos(e){
  const r=canvas.getBoundingClientRect();
  const sx=r.width>0?CW/r.width:1, sy=r.height>0?CH/r.height:1;
  return {x:(e.clientX-r.left)*sx,y:(e.clientY-r.top)*sy};
}
function releaseDrag(){ state.dragging=null; state.pointerId=null; }
function segmentHitsBubble(x1,y1,x2,y2,b,radius){
  const dx=x2-x1,dy=y2-y1,lenSq=dx*dx+dy*dy;
  const t=lenSq>0?clamp(((b.x-x1)*dx+(b.y-y1)*dy)/lenSq,0,1):0;
  const px=x1+dx*t,py=y1+dy*t,ox=px-b.x,oy=py-b.y;
  return ox*ox+oy*oy<=radius*radius;
}

canvas.addEventListener('pointerdown',function(e){
  if(state.phase!=='playing'||state.paused||state.tree.active||state.questionOpen||state.dragging) return;
  if(e.pointerType==='mouse'&&e.button!==0) return;
  const pos=getCanvasPos(e);

  /* 优先检测好运果点击 */
  for(let i=state.bubbles.length-1;i>=0;i--){
    const b=state.bubbles[i];
    if(b.type==='fruit' && !b.popping && !b.collected){
      const dx=pos.x-b.x,dy=pos.y-b.y;
      if(dx*dx+dy*dy <= (b.r+10)*(b.r+10)){
        e.preventDefault();
        collectFruit(b);
        return;
      }
    }
  }

  /* 红包 / 黑粉 点击 */
  for(let i=state.specials.length-1;i>=0;i--){
    const s=state.specials[i];
    const dx=pos.x-s.x,dy=pos.y-s.y;
    if(dx*dx+dy*dy<=(s.r+10)*(s.r+10)){ e.preventDefault(); collectSpecial(s); return; }
  }

  /* 再检测负面气泡拖拽 */
  let hit=null;
  for(let i=state.bubbles.length-1;i>=0;i--){
    const b=state.bubbles[i];
    if(b.entering||b.popping||(b.type!=='negative'&&b.type!=='ingredient')) continue;
    const dx=pos.x-b.x,dy=pos.y-b.y;
    if(dx*dx+dy*dy<=(b.r+4)*(b.r+4)){ hit=b; break; }
  }
  if(hit){ e.preventDefault(); state.dragging=hit; state.dragOffX=pos.x-hit.x; state.dragOffY=pos.y-hit.y; state.pointerId=e.pointerId; try{ canvas.setPointerCapture(e.pointerId); }catch(err){} AudioSys.init(); }
},{passive:false});

canvas.addEventListener('pointermove',function(e){
  if(!state.dragging) return; if(state.pointerId!==null&&e.pointerId!==state.pointerId) return; e.preventDefault();
  const pos=getCanvasPos(e); const b=state.dragging;
  const previousX=b.x,previousY=b.y;
  b.x=clamp(pos.x-state.dragOffX,b.r,Math.max(b.r,CW-b.r));
  b.y=clamp(pos.y-state.dragOffY,CONFIG.gameplay.bubbleTopLimit+b.r,Math.max(CONFIG.gameplay.bubbleTopLimit+b.r,CH-CONFIG.gameplay.bubbleBottomMargin-b.r));
  checkDragCollision(b,previousX,previousY);
},{passive:false});

canvas.addEventListener('pointerup',function(e){ if(state.pointerId!==null&&e.pointerId!==state.pointerId) return; releaseDrag(); });
canvas.addEventListener('pointercancel',releaseDrag);
canvas.addEventListener('lostpointercapture',releaseDrag);
window.addEventListener('blur',releaseDrag);
document.addEventListener('visibilitychange',function(){ if(document.hidden){releaseDrag();return;} if(state.phase==='tree'){state.tree.active=false;state.tree.visible=false;if(state.tree.onDone){const cb=state.tree.onDone;state.tree.onDone=null;cb();}else showResult();}else if(state.phase==='playing'){checkDayEnd();} });window.addEventListener('focus',function(){if(state.phase==='tree'){state.tree.active=false;state.tree.visible=false;if(state.tree.onDone){const cb=state.tree.onDone;state.tree.onDone=null;cb();}else showResult();}else if(state.phase==='playing')checkDayEnd();});

function checkDragCollision(a,fromX,fromY){
  for(let i=0;i<state.bubbles.length;i++){
    const b=state.bubbles[i];
    if(b===a||b.popping||b.dead||b.entering) continue;
    /* 好运果只支持点击收集，拖拽穿过去 */
    if(b.type==='fruit') continue;
    const hit=segmentHitsBubble(fromX===undefined?a.x:fromX,fromY===undefined?a.y:fromY,a.x,a.y,b,a.r+b.r);
    if(!hit) continue;
    if(b.type==='negative'&&a.word===b.word){ popPair(a,b); releaseDrag(); return; }
    if(b.type==='ingredient'&&a.type==='ingredient'){ blendPair(a,b); releaseDrag(); return; }
    if(b.type==='positive'){ onHitPositive(a,b); releaseDrag(); return; }
  }
}

/* ============================================================
   花园与存档管理
   ============================================================ */
const GARDEN_PLOT_COSTS=[0,100,240,430,700,1050];
const GARDEN_SEED_LIBRARY=[
 {id:'rose',label:'玫瑰种子',name:'玫瑰',emoji:'🌹',desc:'勇敢表达爱意'},
 {id:'tulip',label:'郁金香种子',name:'郁金香',emoji:'🌷',desc:'温柔而坚定'},
 {id:'daisy',label:'雏菊种子',name:'雏菊',emoji:'🌼',desc:'简单的小确幸'},
 {id:'lavender',label:'薰衣草种子',name:'薰衣草',emoji:'🪻',desc:'安静与放松'},
 {id:'sunflower',label:'向日葵种子',name:'向日葵',emoji:'🌻',desc:'一直向着光'},
 {id:'peony',label:'牡丹种子',name:'牡丹',emoji:'🌺',desc:'丰盛与美好'},
 {id:'cherry',label:'樱花种子',name:'樱花',emoji:'🌸',desc:'珍惜当下'},
 {id:'lily',label:'百合种子',name:'百合',emoji:'💮',desc:'平和与祝福'}
];
/* 补足花园普通花卉至 100 种 */
GARDEN_SEED_LIBRARY.push(...[["camellia","山茶花","🌺","热烈而克制"],["gardenia","栀子花","🤍","清香与安心"],["jasmine","茉莉","🌼","温柔的陪伴"],["hydrangea","绣球花","💠","圆满与团聚"],["orchid","兰花","🪷","从容与优雅"],["chrysanthemum","菊花","🏵️","自在与长久"],["osmanthus","桂花","🌼","甜甜的好消息"],["magnolia","玉兰","🤍","坦荡与纯粹"],["lotus","荷花","🪷","清澈与坚定"],["hibiscus","木槿","🌺","每一天都重新开始"],["plumeria","鸡蛋花","🌼","轻松的小旅行"],["iris","鸢尾","💜","好消息正在路上"],["freesia","小苍兰","🌸","清新与希望"],["gypsophila","满天星","✨","平凡日子也闪光"],["pansy","三色堇","💜","把心事说出来"],["violet","紫罗兰","🪻","安静的喜欢"],["primrose","报春花","🌼","新的开始"],["begonia","海棠","🌺","温柔的想念"],["azalea","杜鹃花","🌺","热闹与生机"],["dahlia","大丽花","🌸","闪闪发光"],["gerbera","扶郎花","🌼","积极与快乐"],["anemone","银莲花","🌸","勇敢面对变化"],["ranunculus","花毛茛","🌷","小小的惊喜"],["cosmos","格桑花","🌼","自由与自在"],["zinnia","百日草","🌺","长久的友谊"],["marigold","金盏花","🧡","温暖与守护"],["snapdragon","金鱼草","🌸","勇敢表达"],["gladiolus","剑兰","🌺","坚定向前"],["delphinium","飞燕草","💙","轻盈与自由"],["larkspur","翠雀","💜","清爽的心情"],["bluebell","风铃草","🔔","等一阵好风"],["campanula","风铃花","🔔","温柔回应"],["heather","石楠花","🌸","独立与坚韧"],["heliconia","鹤望兰","🧡","自由的灵魂"],["birdofparadise","天堂鸟","🧡","勇敢去远方"],["anthurium","红掌","❤️","热情与活力"],["calla","马蹄莲","🤍","优雅与平和"],["tuberose","晚香玉","🤍","夜晚也有芬芳"],["hyacinth","风信子","🪻","重拾好心情"],["narcissus","水仙","🌼","自信与新生"],["snowdrop","雪滴花","🤍","寒冬过后有春天"],["cyclamen","仙客来","🌸","欢迎好事到来"],["amaryllis","朱顶红","🌺","闪耀的勇气"],["carnation","康乃馨","🌸","感谢与珍惜"],["sweetpea","香豌豆花","🌸","甜甜的回忆"],["morningglory","牵牛花","💜","迎接清晨"],["clematis","铁线莲","💜","柔韧的力量"],["wisteria","紫藤花","💜","浪漫与期待"],["honeysuckle","金银花","🌼","甜蜜的日常"],["passionflower","西番莲花","💜","好奇与探索"],["bleedingheart","荷包牡丹","💗","真诚的心意"],["foxglove","毛地黄","🌸","独特的美"],["hollyhock","蜀葵","🌺","向上生长"],["mallow","锦葵","🌸","温和而有力量"],["verbena","马鞭草","💜","安定与清醒"],["salvia","鼠尾草花","💜","整理思绪"],["echinacea","松果菊","🌸","恢复元气"],["rudbeckia","黑心菊","🌻","迎着阳光"],["coreopsis","金鸡菊","🌼","快乐不打烊"],["gaillardia","天人菊","🌺","热情生活"],["aster","紫菀","💜","耐心等待"],["statice","勿忘我","💜","记得爱自己"],["phlox","福禄考","🌸","平凡也美好"],["alyssum","香雪球","🤍","细小的幸福"],["lobelia","半边莲","💙","清凉与宁静"],["nemesia","海角樱草","🌸","可爱的小确幸"],["diascia","囊距花","🌺","温暖的陪伴"],["osteospermum","非洲菊","🌼","明亮的心情"],["gazania","勋章菊","🌼","把日子过闪亮"],["portulaca","太阳花","🌸","热爱每个晴天"],["impatiens","凤仙花","🌺","轻松自在"],["petunia","矮牵牛","🌺","自在绽放"],["calibrachoa","百万小铃","🌸","快乐加倍"],["periwinkle","长春花","💜","平安顺遂"],["lantana","马缨丹","🌺","热闹又可爱"],["bouvardia","宝石花","🌸","珍惜眼前"],["scabiosa","松虫草","💜","认真生活"],["tithonia","墨西哥向日葵","🧡","热烈的阳光"],["cleome","醉蝶花","🌸","自在摇曳"],["tropaeolum","旱金莲","🧡","勇敢尝试"],["canna","美人蕉","🌺","大方与热情"],["alstroemeria","六出花","🌸","长久的陪伴"],["leucanthemum","大滨菊","🌼","简单的快乐"],["tanacetum","小白菊","🌼","平安与健康"],["matricaria","洋甘菊","🌼","放松一下"],["calendula","金盏菊","🧡","温暖的拥抱"],["bellis","雏菊2","🌼","重新发现快乐"],["armeria","海石竹","🌸","坚定又柔软"],["iberis","屈曲花","🤍","纯粹的心意"],["linaria","柳穿鱼","💜","轻盈向前"],["eschscholzia","加州花菱草","🧡","自在做自己"],["tulbaghia","韭兰","🌸","雨后也会重新盛开"]].map(function(r){return {id:r[0],label:r[1]+'种子',name:r[1],emoji:r[2],desc:r[3]};}));
const THERAPY_FLOWERS=[
 {id:'luck',name:'幸运花',emoji:'🍀',effect:'愿你常有好事发生，幸运总会悄悄来到身边。'},
 {id:'wealth',name:'发财花',emoji:'💰',effect:'愿努力都有回响，财富与机会慢慢向你靠近。'},
 {id:'brave',name:'勇气花',emoji:'🌟',effect:'愿你在害怕的时候，也有重新出发的勇气。'},
 {id:'peace',name:'平安心花',emoji:'🕊️',effect:'愿心里的风浪渐渐平息，日子安稳而明亮。'}
];
function rollGardenSeed(){const n=Math.random();if(n<0.06)return {kind:'random',label:'随机种子'};if(n<0.11)return {kind:'magic',label:'神奇种子'};const f=GARDEN_SEED_LIBRARY[randInt(0,GARDEN_SEED_LIBRARY.length-1)];return {kind:'normal',flowerId:f.id,label:f.label};}
function ensureGarden(){if(!saveData.garden)saveData.garden={seeds:0,seedInventory:[],lastWaterDay:0,plots:[],fertilizer:0,doubleCards:0,tripleCards:0};const g=saveData.garden;if(!Array.isArray(g.plots))g.plots=[];if(!Array.isArray(g.seedInventory))g.seedInventory=[];g.seedInventory=g.seedInventory.map(function(seed){if(seed.kind==='mystery')return Object.assign({},seed,{kind:'random',label:'随机种子'});if(seed.kind==='therapy')return Object.assign({},seed,{kind:'magic',label:'神奇种子'});return seed;});g.plots.forEach(function(p){if(p.seedKind==='mystery')p.seedKind='random';if(p.seedKind==='therapy')p.seedKind='magic';});while(g.seedInventory.length<(Number(g.seeds)||0))g.seedInventory.push(rollGardenSeed());g.seeds=g.seedInventory.length;if(g.lastWaterDay==null)g.lastWaterDay=0;if(g.unlockedPlots==null)g.unlockedPlots=1;if(g.flowers==null)g.flowers=0;if(!Array.isArray(g.flowerCollection))g.flowerCollection=[];if(!Array.isArray(g.magicCollection))g.magicCollection=[];g.magicCollection=g.magicCollection.filter(function(f,i,a){return f&&f.id&&a.findIndex(function(x){return x&&x.id===f.id;})===i;});g.flowerCollection=g.flowerCollection.filter(function(id){const magic=THERAPY_FLOWERS.find(function(f){return f.id===id;});if(magic){if(!g.magicCollection.some(function(x){return x.id===id;}))g.magicCollection.push({id:magic.id,name:magic.name,emoji:magic.emoji,effect:magic.effect});return false;}return true;});if(!g.flowerStockById||typeof g.flowerStockById!=='object')g.flowerStockById={};if(g.harvestCount==null)g.harvestCount=0;if(g.totalFlowers==null)g.totalFlowers=0;if(!Array.isArray(g.pendingMaturedFlowers))g.pendingMaturedFlowers=[];if(g.totalPlanted==null)g.totalPlanted=g.plots.length;if(g.maxHarvestBatch==null)g.maxHarvestBatch=0;if(g.flowerLives==null)g.flowerLives=0;if(g.harvestCount>=10&&g.nextFlowerSaleDay==null)g.nextFlowerSaleDay=(Number(saveData.currentDay)||1)+3;g.unlockedPlots=clamp(Math.max(Number(g.unlockedPlots)||1,Math.min(6,g.plots.length)),1,6);return g;}
function renderGarden(){
 const g=ensureGarden();
 gardenSeedsEl.textContent=g.seeds||0;
 gardenMoneyEl.textContent=formatMoney(saveData.money||0);
 document.getElementById('gardenFlowerStock').textContent=g.flowers||0;
 document.getElementById('gardenProgress').textContent='已收获 '+g.harvestCount+' 株 · '+(g.harvestCount>=10?'鲜花专场每 3 天自动开启（下次：第 '+(g.nextFlowerSaleDay||((Number(saveData.currentDay)||1)+3))+' 天）':'再收获 '+(10-g.harvestCount)+' 株，解锁每 3 天自动开启的鲜花专场');
 const icons=['🌰','🌱','🌿','🌸'],labels=['刚种下','正在发芽','枝叶舒展','鲜花成熟'];
 let cards='';
 for(let i=0;i<6;i++){
   const p=g.plots[i];
   if(i>=g.unlockedPlots){
     cards+='<button class="garden-plot locked-plot" data-unlock-plot="'+i+'"><span class="plot-lock">🔒</span><span class="plot-title">土地 '+(i+1)+'</span><span class="plot-cost">开垦 · '+GARDEN_PLOT_COSTS[i]+' 元</span></button>';
   }else if(p){
     const st=clamp(Number(p.stage)||0,0,3);
     const action=st>=3?'点一下收获':(g.lastWaterDay===(saveData.currentDay||1)?'今天已浇水 · 明天再来':'点一下浇水');
     cards+='<button class="garden-plot planted-plot" data-garden-plot="'+i+'"><div class="soil-bed"><span class="soil-sprout stage-'+st+'">'+icons[st]+'</span><i class="soil-leaf leaf-one"></i><i class="soil-leaf leaf-two"></i></div><div class="garden-plant-name">'+p.name+'</div><div class="garden-stage">'+labels[st]+'</div><div class="plot-tap-hint">'+action+'</div></button>';
   }else{
     cards+='<button class="garden-plot empty-plot" data-garden-plot="'+i+'"><div class="soil-bed"><span class="soil-seed">🌰</span></div><div class="garden-plant-name">空土地 '+(i+1)+'</div><div class="garden-stage">'+(g.seeds>0?'点土地就能播种':'暂无种子 · 等待直播奖励')+'</div></button>';
   }
 }
 gardenPlotsEl.innerHTML=cards;
 document.getElementById('btnGardenPlant').disabled=(g.seeds||0)<1||g.plots.length>=g.unlockedPlots;
 document.getElementById('btnGardenWater').disabled=g.lastWaterDay===(saveData.currentDay||1)||!g.plots.some(function(p){return(p.stage||0)<3;});
 const fertilizerCount=Math.max(0,Number(g.fertilizer)||0);
 document.getElementById('btnGardenFertilize').textContent='🧴 营养液（库存 '+fertilizerCount+'）';
 document.getElementById('btnGardenFertilize').disabled=fertilizerCount<1||!g.plots.some(function(p){return(p.stage||0)<3;});
 document.getElementById('btnGardenHarvest').disabled=!g.plots.some(function(p){return(p.stage||0)>=3;});
 gardenPlotsEl.querySelectorAll('[data-unlock-plot]').forEach(function(b){
   b.addEventListener('click',function(){
     const i=Number(b.getAttribute('data-unlock-plot')),cost=GARDEN_PLOT_COSTS[i];
     if(i!==g.unlockedPlots||saveData.money<cost)return;
     saveData.money-=cost;g.unlockedPlots++;gardenTipEl.textContent='新土地开垦好了！';persist();renderGarden();checkAchievements();
   });
 });
 gardenPlotsEl.querySelectorAll('[data-garden-plot]').forEach(function(b){
   b.addEventListener('click',function(){
     const i=Number(b.getAttribute('data-garden-plot')),p=g.plots[i];
     if(!p){plantGardenSeed(i);return;}
     if((p.stage||0)>=3){harvestGardenPlot(i);return;}
     if(g.lastWaterDay===(saveData.currentDay||1)){gardenTipEl.textContent='今天已经浇过水啦，明天再来照顾花苗吧。';return;}
     waterGardenPlot(i);
   });
 });
}
let gardenReturnToResult=false;
function openGarden(){gardenReturnToResult=state.phase==='result';renderGarden();showScreen(gardenScreen);}
document.getElementById('btnGardenHome').addEventListener('click',function(){AudioSys.click();openGarden();});
btnGardenQuickEl.addEventListener('click',function(){AudioSys.click();openGarden();});
document.getElementById('btnGardenBack').addEventListener('click',function(){AudioSys.click();if(gardenReturnToResult){gardenReturnToResult=false;showScreen(resultScreen);}else showScreen(homeScreen);});
function plantGardenSeed(i){const g=ensureGarden();if(g.seeds<1){gardenTipEl.textContent='种子库存为 0，完成疗愈直播就能获得新种子。';showToast('🌱','还没有种子哦');return false;}if(i!==g.plots.length||i>=g.unlockedPlots)return false;const seed=g.seedInventory.shift()||rollGardenSeed();g.seeds=g.seedInventory.length;const plant=seed.kind==='normal'?(GARDEN_SEED_LIBRARY.find(function(f){return f.id===seed.flowerId;})||GARDEN_SEED_LIBRARY[0]):null;const name=seed.kind==='random'?'随机花苗':(seed.kind==='magic'?'神奇花苗':plant.name);g.plots.push({seedKind:seed.kind,flowerId:seed.flowerId||null,name:name,emoji:plant?plant.emoji:'❔',effect:plant&&plant.effect||'',stage:0,revealed:seed.kind==='normal'});g.totalPlanted++;gardenTipEl.textContent=seed.kind==='random'?'随机种子已种下，收获时揭晓花种。':(seed.kind==='magic'?'神奇种子已种下，收获时揭晓花朵和功效。':'已种下 '+plant.name+'。');persist();renderGarden();checkAchievements();return true;}
document.getElementById('btnGardenPlant').addEventListener('click',function(){const g=ensureGarden();let n=0;while(g.seeds>0&&g.plots.length<g.unlockedPlots){if(plantGardenSeed(g.plots.length))n++;else break;}gardenTipEl.textContent=n?'一口气种下 '+n+' 颗种子！':'没有空土地或种子啦。';renderGarden();});
function waterGardenPlot(i){const g=ensureGarden(),p=g.plots[i];if(!p||(p.stage||0)>=3||g.lastWaterDay===(saveData.currentDay||1))return;const before=p.stage||0;p.stage=Math.min(3,before+1);g.lastWaterDay=saveData.currentDay||1;gardenTipEl.textContent='今天的浇水完成啦！'+p.name+' 长高了一步，明天再来浇水吧。';persist();renderGarden();if(before<3&&p.stage>=3)showGardenNotice('🌸','花儿成熟啦！','你种下的 '+p.name+' 已经成熟，快去收获它吧！');}
document.getElementById('btnGardenWater').addEventListener('click',function(){const g=ensureGarden();if(g.lastWaterDay===(saveData.currentDay||1))return;let n=0,ready=[];g.plots.forEach(function(p){if((p.stage||0)<3){p.stage=Math.min(3,(p.stage||0)+1);n++;if(p.stage>=3)ready.push(p.name);}});if(!n)return;g.lastWaterDay=saveData.currentDay||1;persist();renderGarden();gardenTipEl.textContent='今天给 '+n+' 株花苗都浇过水啦。';if(ready.length)showGardenNotice('🌸','有花儿成熟啦！',ready.join('、')+' 已经盛开，点土地就能收获。');});
document.getElementById('btnGardenFertilize').addEventListener('click',function(){const g=ensureGarden(),stock=Math.max(0,Number(g.fertilizer)||0),i=g.plots.findIndex(function(p){return(p.stage||0)<3;});if(stock<1){g.fertilizer=0;gardenTipEl.textContent='营养液库存为 0，先去花园商城购买吧。';renderGarden();showToast('🧴','营养液库存不足');return;}if(i<0){gardenTipEl.textContent='现在没有需要加速的花苗。';return;}g.fertilizer=stock-1;const target=g.plots[i],before=Number(target.stage)||0;target.stage=Math.min(3,before+1);gardenTipEl.textContent='营养液让 '+target.name+' 快速成长了一步。';persist();renderGarden();if(before<3&&target.stage>=3)showGardenNotice('🌸','花儿成熟啦！','你种下的 '+target.name+' 已经成熟，快去收获它吧！');});
function harvestGardenPlot(i,quiet){const g=ensureGarden(),p=g.plots[i];if(!p||(p.stage||0)<3||p.harvested)return null;if((p.seedKind==='random'||p.seedKind==='mystery')&&!p.revealed){const f=GARDEN_SEED_LIBRARY[randInt(0,GARDEN_SEED_LIBRARY.length-1)];p.name=f.name;p.emoji=f.emoji;p.flowerId=f.id;p.revealed=true;}if((p.seedKind==='magic'||p.seedKind==='therapy')&&!p.revealed){const f=THERAPY_FLOWERS[randInt(0,THERAPY_FLOWERS.length-1)];p.name=f.name;p.emoji=f.emoji;p.effect=f.effect;p.flowerId=f.id;p.revealed=true;}let m=1;if(g.tripleCards>0){g.tripleCards--;if(Math.random()<0.12)m=3;}else if(g.doubleCards>0){g.doubleCards--;if(Math.random()<0.32)m=2;}const n=randInt(2,4)*m;g.flowers+=n;g.totalFlowers+=n;g.harvestCount++;g.maxHarvestBatch=Math.max(Number(g.maxHarvestBatch)||0,n);if(p.seedKind==='magic'||p.seedKind==='therapy'){if(p.flowerId&&!g.magicCollection.some(function(f){return f.id===p.flowerId;})){const magicDef=THERAPY_FLOWERS.find(function(f){return f.id===p.flowerId;});g.magicCollection.push({id:p.flowerId,name:p.name,emoji:p.emoji,effect:p.effect||(magicDef&&magicDef.effect)||''});}}else if(p.flowerId&&!g.flowerCollection.includes(p.flowerId))g.flowerCollection.push(p.flowerId);const stockId=p.flowerId||'misc';g.flowerStockById[stockId]=(g.flowerStockById[stockId]||0)+n;g.plots.splice(i,1);gardenTipEl.textContent='收获 '+p.name+'！这一株结出了 '+n+' 朵鲜花。'+(p.effect?' '+p.effect:'')+' 鲜花已经存进花篮。';persist();renderGarden();checkAchievements();if(!quiet)showGardenNotice(p.seedKind==='magic'?'✨':(p.emoji||'🌸'),'恭喜收获 '+n+' 朵'+p.name+'花！','这一株收获了 '+n+' 朵鲜花。'+(p.effect?'特别功效：'+p.effect:'')+' 鲜花已经存进花篮。');return {count:n,name:p.name};}
document.getElementById('btnGardenHarvest').addEventListener('click',function(){const g=ensureGarden();let n=0,total=0;for(let i=g.plots.length-1;i>=0;i--){if(g.plots[i]&&(g.plots[i].stage||0)>=3){const result=harvestGardenPlot(i,true);if(result){n++;total+=result.count;}}}if(n){persist();renderGarden();gardenTipEl.textContent='一键收获 '+n+' 株花，共 '+total+' 朵鲜花。';showGardenNotice('🌼','收获完成！','共收获 '+n+' 株花、'+total+' 朵鲜花，已经放进花篮。');}});
let flowerLiveState={round:0,earned:0,sold:0,order:1,finished:false};
function renderFlowerLiveRound(){const g=ensureGarden();document.getElementById('flowerLiveStock').textContent=g.flowers;document.getElementById('flowerLiveProgress').textContent='第 '+Math.min(5,flowerLiveState.round+1)+' / 5 位顾客';document.getElementById('flowerLiveOrder').textContent='顾客想要一束 '+flowerLiveState.order+' 朵的花束。你会怎么搭配？';document.getElementById('flowerLiveTip').textContent='数量刚好会获得额外打赏；数量不符也能成交，但收入会少一些。';document.getElementById('flowerLiveEarned').textContent='本场收入：'+formatMoney(flowerLiveState.earned)+' 元';document.querySelectorAll('.flower-order-btn').forEach(function(b){b.disabled=g.flowers<1;});}
function startFlowerLive(){const g=ensureGarden();if(g.harvestCount<10||g.flowers<1)return;flowerLiveState={round:0,earned:0,sold:0,order:randInt(1,3),finished:false};document.getElementById('flowerLiveCustomer').textContent=['👩🏻‍🌾','🧑🏻‍🎨','👵🏻','👩🏽‍💻','🧑🏻‍🍳'][randInt(0,4)];renderFlowerLiveRound();showScreen(document.getElementById('flowerLiveScreen'));}
function finishFlowerLive(){if(flowerLiveState.finished)return;flowerLiveState.finished=true;const g=ensureGarden();if(flowerLiveState.sold>0){saveData.money=(saveData.money||0)+flowerLiveState.earned;saveData.totalEarned=(saveData.totalEarned||0)+flowerLiveState.earned;g.flowerLives=(g.flowerLives||0)+1;persist();checkAchievements();gardenTipEl.textContent='卖花直播结束！售出 '+flowerLiveState.sold+' 朵鲜花，收入 '+formatMoney(flowerLiveState.earned)+' 元。';showToast('🌷','卖花直播成交，收入 +'+formatMoney(flowerLiveState.earned)+' 元');}renderGarden();showScreen(gardenScreen);}
function sellFlowerBouquet(quantity){const g=ensureGarden();if(g.flowers<1){finishFlowerLive();return;}const sold=Math.min(quantity,g.flowers),perfect=quantity===flowerLiveState.order&&sold===quantity,income=sold*(perfect?24:14)+(perfect?18:0);g.flowers-=sold;flowerLiveState.sold+=sold;flowerLiveState.earned+=income;flowerLiveState.round++;document.getElementById('flowerLiveTip').textContent=perfect?'顾客特别满意！花束刚好合心意，额外打赏 +18 元。':'花束顺利成交啦。下一位顾客也在等着你～';if(flowerLiveState.round>=5||g.flowers<=0){document.getElementById('flowerLiveOrder').textContent='今天的顾客都被你的鲜花治愈啦！';document.getElementById('flowerLiveProgress').textContent='本场直播完成';document.getElementById('flowerLiveStock').textContent=g.flowers;document.getElementById('flowerLiveEarned').textContent='本场收入：'+formatMoney(flowerLiveState.earned)+' 元';document.querySelectorAll('.flower-order-btn').forEach(function(b){b.disabled=true;});persist();setTimeout(finishFlowerLive,850);return;}flowerLiveState.order=randInt(1,3);document.getElementById('flowerLiveCustomer').textContent=['👩🏻‍🌾','🧑🏻‍🎨','👵🏻','👩🏽‍💻','🧑🏻‍🍳'][flowerLiveState.round%5];persist();renderFlowerLiveRound();}
/* 鲜花专场已并入每三天一次的疗愈直播结算，不再单独开播。 */
document.getElementById('btnFlowerLiveBack').addEventListener('click',finishFlowerLive);
document.querySelectorAll('.flower-order-btn').forEach(function(b){b.addEventListener('click',function(){sellFlowerBouquet(Number(b.getAttribute('data-bouquet')));});});
function exportSave(){
  persist();const blob=new Blob([JSON.stringify(saveData,null,2)],{type:'application/json'}),url=URL.createObjectURL(blob),a=document.createElement('a');
  a.href=url;a.download='滚蛋吧坏情绪-存档.json';document.body.appendChild(a);a.click();a.remove();URL.revokeObjectURL(url);showToast('💾','存档已导出');
}
document.getElementById('btnSaveExport').addEventListener('click',exportSave);
document.getElementById('btnSaveHome').addEventListener('click',function(){AudioSys.click();gameMenuEl.classList.add('show');});
document.getElementById('btnSaveImport').addEventListener('click',function(){saveFileInput.click();});
saveFileInput.addEventListener('change',function(){
 const file=saveFileInput.files&&saveFileInput.files[0];if(!file)return;const reader=new FileReader();
 reader.onload=function(){try{const data=JSON.parse(reader.result);if(!data||typeof data!=='object'||!('totalDays'in data)||!('currentDay'in data))throw new Error('invalid');if(!confirm('导入存档会覆盖当前进度，确定继续吗？'))return;localStorage.setItem(CONFIG.saveKey,JSON.stringify(data));location.reload();}catch(e){alert('存档文件无法识别，请选择本游戏导出的 JSON 文件。');}finally{saveFileInput.value='';}};
 reader.readAsText(file);
});
function closeGameMenu(){gameMenuEl.classList.remove('show');if(state.phase==='playing'||state.phase==='tree')state.paused=false;}
document.getElementById('btnMenu').addEventListener('click',function(e){e.stopPropagation();AudioSys.click();if(state.phase==='playing'||state.phase==='tree'){state.paused=true;state.dragging=null;state.pointerId=null;saveDaySnapshot();persist();}gameMenuEl.classList.add('show');});
document.getElementById('btnResume').addEventListener('click',function(){AudioSys.click();closeGameMenu();});
document.getElementById('btnMenuClose').addEventListener('click',function(){AudioSys.click();closeGameMenu();});
document.getElementById('btnMenuHome').addEventListener('click',function(){AudioSys.click();saveDaySnapshot();persist();closeGameMenu();state.phase='idle';state.paused=false;stopDanmu();stopViewers();AudioSys.stopBgm();if(giftTimer){clearInterval(giftTimer);giftTimer=null;}showHud(false);updateHome();showScreen(homeScreen);});
/* ============================================================
   三十一、UI 事件
   ============================================================ */
function updateHome(){
  const has=(saveData.currentDay||1)>1||saveData.totalDays>0||!!saveData.daySnapshot;
  const btn=document.getElementById('btnContinue');
  btn.style.display=has?'':'none';
  if(has) btn.textContent='继 续 游 戏 · 第 '+(saveData.currentDay||1)+' 天';
  const cd=document.getElementById('perfumeCountdown');
  cd.textContent='完成直播得种子 · 经营花园 · 收获鲜花 · 解锁卖花直播';
}

document.getElementById('btnContinue').addEventListener('click',function(){
  AudioSys.init(); AudioSys.click(); AudioSys.startBgm();
  applyBuffsForNewDay();
  startGiftTimer();
  startDay(saveData.currentDay||1);
});

document.getElementById('btnNewGame').addEventListener('click',function(){
  AudioSys.init(); AudioSys.click();
  if(saveData.totalDays>0||saveData.luckyCount>0||saveData.unlocked.length>0){
    if(!window.confirm('重新开始会清空所有进度，确定吗？')) return;
  }
  const hasSeenStory=!!saveData.seenStoryIntro;
  saveData={ totalHeat:0, totalFans:0, totalPopped:0, totalDays:0, bestDay:0,
    unlocked:[], luckyCount:0, daysSinceLucky:0, unlockedAchievements:[],
    maxComboEver:0, answeredCount:0, ownedItems:[],
    currentDay:1, hintedFruit:false, hintedPositive:false, hintedBlend:false, daySnapshot:null,
    money:0, totalEarned:0, garden:{seeds:0,seedInventory:[],lastWaterDay:0,plots:[],fertilizer:0,doubleCards:0,tripleCards:0,unlockedPlots:1,flowers:0,harvestCount:0,totalFlowers:0,totalPlanted:0,maxHarvestBatch:0,flowerLives:0,pendingMaturedFlowers:[]}, theme:"warm", avatar:"sun",
    ownedThemes:[], ownedAvatars:[], perfumes:[], pkWins:0, seenIntro:hasSeenStory, seenStoryIntro:hasSeenStory };
  gardenTipEl.textContent='花圃已经整理好啦。先领取直播种子，再选择空土地种下；浇水三次或完成直播，让花苗慢慢长大。'; renderGarden();
  showTutorial();
  updateHome();
  persist();
  applyBuffsForNewDay();
  startGiftTimer();
  startDay(1);
});

btnExit.addEventListener('click',function(e){
  e.stopPropagation(); AudioSys.click();
  saveDaySnapshot(); persist();
  state.phase='idle'; state.paused=false; state.questionOpen=false; state.dragging=null; state.pointerId=null;
  state.pk=null; pkBarEl.classList.remove('show'); pkOverlay.classList.remove('show');
  auctionOverlay.classList.remove('show');
  eventBannerEl.classList.remove('show'); eventBannerEl.innerHTML='';
  stopDanmu(); stopViewers(); AudioSys.stopBgm();
  if(giftTimer){ clearInterval(giftTimer); giftTimer=null; }
  questionOverlay.classList.remove('show');
  showHud(false); updateHome(); showScreen(homeScreen);
});

/* ---- PK 邀请按钮 ---- */
pkAcceptEl.addEventListener('click',function(e){ e.stopPropagation(); acceptPK(); });
pkDeclineEl.addEventListener('click',function(e){ e.stopPropagation(); declinePK(); });
hostAvatarEl.addEventListener('click',function(e){ e.stopPropagation(); cycleAvatar(); });

tabShopFruitEl.addEventListener('click',function(){ AudioSys.click(); shopTab='fruit'; renderShop(); });
tabShopGoodsEl.addEventListener('click',function(){ AudioSys.click(); shopTab='goods'; renderShop(); });

/* ---- 新手引导 ---- */
let tutStep=0;
function showTutorial(){
  if(saveData.seenStoryIntro) return;
  tutStep=0; renderTut(); introTutorialEl.classList.add('show');
}
function renderTut(){
  const steps=introTutorialEl.querySelectorAll('.tut-step');
  for(let i=0;i<steps.length;i++) steps[i].classList.toggle('on',i===tutStep);
  const dots=introTutorialEl.querySelectorAll('.tut-dots span');
  for(let i=0;i<dots.length;i++) dots[i].classList.toggle('on',i===tutStep);
  tutNextEl.textContent=tutStep>=steps.length-1?'开启你的直播种田之旅吧！':'下一页';
}
function setupTutorial(){
  tutNextEl.addEventListener('click',function(){
    AudioSys.init(); AudioSys.click();
    const steps=introTutorialEl.querySelectorAll('.tut-step').length;
    tutStep++;
    if(tutStep>=steps){ closeTutorial(); return; }
    renderTut();
  });
  tutSkipEl.addEventListener('click',function(){ AudioSys.click(); closeTutorial(); });
}
function closeTutorial(){ introTutorialEl.classList.remove('show'); saveData.seenIntro=true; saveData.seenStoryIntro=true; persist(); }

/* ---- 点赞互动：观众点赞涨热度 ---- */
let likeCd=0;
btnLikeEl.addEventListener('click',function(e){
  e.stopPropagation();
  if(state.phase!=='playing'||state.paused||state.questionOpen) return;
  if(likeCd>0) return;
  likeCd=0.22;
  AudioSys.init(); AudioSys.click();
  const x=60+Math.random()*(CW-120), y=CH-90;
  spawnParticles(x,y,'#ff8fa8',5); spawnParticles(x,y-16,'#ffd0e0',3);
  const h=randInt(1,3);
  state.heat+=h;
  if(state.heat>state.dayStats.heatPeak) state.dayStats.heatPeak=state.heat;
  if(Math.random()<0.35) addFloat(x,y-34,'+'+h+' 热度','#e88a9a');
  if(Math.random()<0.22) addDanmu('点亮了爱心','gift');
});

document.getElementById('btnData').addEventListener('click',function(){ AudioSys.click(); updateDataScreen(); showScreen(dataScreen); });
document.getElementById('btnDataBack').addEventListener('click',function(){ AudioSys.click(); showScreen(homeScreen); });

document.getElementById('btnShopHome').addEventListener('click',function(){ AudioSys.click(); renderShop(); showScreen(shopScreen); });
function backFromOverlay(){
  AudioSys.click();
  if(state.phase==='playing'||state.phase==='tree'){ hideAllScreens(); state.paused=false; }
  else if(state.phase==='result'){ showScreen(resultScreen); }
  else showScreen(homeScreen);
}
document.getElementById('btnShopBack').addEventListener('click',backFromOverlay);
btnShop.addEventListener('click',function(e){ e.stopPropagation(); AudioSys.click(); if(state.phase==='playing'||state.phase==='tree'){ state.paused=true; state.dragging=null; state.pointerId=null; if(state.phase==='playing'){ saveDaySnapshot(); persist(); } } renderShop(); showScreen(shopScreen); });

document.getElementById('btnCollectionHome').addEventListener('click',function(){AudioSys.click();collectionCategory='normal';collectionPage=0;renderCollection();showScreen(collectionScreen);});
document.getElementById('btnCollectionBack').addEventListener('click',backFromOverlay);
btnCollection.addEventListener('click',function(e){e.stopPropagation();AudioSys.click();if(state.phase==='playing'||state.phase==='tree'){state.paused=true;state.dragging=null;state.pointerId=null;if(state.phase==='playing'){saveDaySnapshot();persist();}}collectionCategory='normal';collectionPage=0;renderCollection();showScreen(collectionScreen);});

document.getElementById('tabUnlocked').addEventListener('click',function(){AudioSys.click();collectionCategory='normal';collectionPage=0;renderCollection();});
document.getElementById('tabAll').addEventListener('click',function(){AudioSys.click();collectionCategory='magic';collectionPage=0;renderCollection();});
document.getElementById('collectionPrev').addEventListener('click',function(){if(collectionPage>0){collectionPage--;renderCollection();}});
document.getElementById('collectionNext').addEventListener('click',function(){collectionPage++;renderCollection();});

document.getElementById('btnAchievements').addEventListener('click',function(){ AudioSys.click(); renderAchievements(); showScreen(achievementScreen); });
document.getElementById('btnAchievementBack').addEventListener('click',function(){ AudioSys.click(); showScreen(homeScreen); });

btnMute.addEventListener('click',function(e){ e.stopPropagation(); const m=AudioSys.toggleMute(); btnMute.textContent=m?'🔇':'🔊'; });

/* ============================================================
   三十二、礼物定时器
   ============================================================ */
let giftTimer=null;
function startGiftTimer(){ if(giftTimer) clearInterval(giftTimer); giftTimer=setInterval(function(){ if(state.phase!=='playing'||state.paused) return; if(Math.random()<0.6) spawnGift(); },2800); }

/* ---- 在线观众 ---- */
let viewersTimer=null;
function startViewers(){ stopViewers(); updateViewerCount(); viewersTimer=setInterval(updateViewerCount,2600); }
function stopViewers(){ if(viewersTimer){ clearInterval(viewersTimer); viewersTimer=null; } }
function updateViewerCount(){ const base=Math.max(600,Math.round((saveData.totalFans||0)*6+900)); liveViewersEl.textContent=formatNum(Math.round(base*(0.82+Math.random()*0.42))); }

/* ============================================================
   三十三、启动
   ============================================================ */
document.getElementById('btnGameGuide').addEventListener('click',function(){document.getElementById('gameGuide').classList.add('show');document.getElementById('gameGuide').setAttribute('aria-hidden','false');});
function closeGameGuide(){document.getElementById('gameGuide').classList.remove('show');document.getElementById('gameGuide').setAttribute('aria-hidden','true');}
document.getElementById('btnGuideClose').addEventListener('click',closeGameGuide);
document.getElementById('btnGuideStart').addEventListener('click',closeGameGuide);
setupTutorial();
loadSave();
applyTheme(saveData.theme);
updateAvatar();
updateHome();
resizeCanvas();
showTutorial();
updateDataScreen();
renderCollection();
renderAchievements();
renderShop();
if(!saveData.garden) saveData.garden={seeds:0,plots:[],fertilizer:0,doubleCards:0,tripleCards:0};
renderGarden();
if(saveData.garden&&Array.isArray(saveData.garden.pendingMaturedFlowers)&&saveData.garden.pendingMaturedFlowers.length){showGardenNotice('🌸','花儿成熟啦！','你种下的 '+saveData.garden.pendingMaturedFlowers.join('、')+' 已经成熟，快去花园收获吧！');}
showScreen(homeScreen);

requestAnimationFrame(function(now){ state.lastTime=now; requestAnimationFrame(loop); });

})();
