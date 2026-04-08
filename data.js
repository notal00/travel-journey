// ============================================================
// data.js — 云南旅行数据文件
// 以后接 Supabase 只需要把 getTripData() 改成 fetch 请求，
// 数据结构（days / categories / entries）保持不变。
// ============================================================

export const tripMeta = {
  title: "云南五日",
  subtitle: "2025 · 昆明 大理 丽江",
  dates: "2025.05.01 — 2025.05.05",
};

// 照片路径规则：./photos/day{N}/{category}_{index}.jpg
// 上传时按此规则命名即可，index 从 1 开始
// category: outfit / food / stay / transport

export const days = [
  {
    id: 1,
    label: "Day 1",
    date: "05.01",
    title: "落地昆明",
    categories: [
      {
        type: "outfit",       // 衣
        icon: "Shirt",
        label: "穿搭",
        text: "高原紫外线强，备了防晒外套和墨镜。昆明气温比预期低，薄羽绒压箱底终于派上用场。",
        photos: [
          "./photos/day1/outfit_1.jpg",
          "./photos/day1/outfit_2.jpg",
        ],
      },
      {
        type: "food",         // 食
        icon: "UtensilsCrossed",
        label: "饮食",
        text: "第一顿就找到了正宗过桥米线。汤底鲜得出奇，配菜一盘一盘摆开来，仪式感拉满。",
        photos: [
          "./photos/day1/food_1.jpg",
          "./photos/day1/food_2.jpg",
          "./photos/day1/food_3.jpg",
        ],
      },
      {
        type: "stay",         // 住
        icon: "BedDouble",
        label: "住宿",
        text: "住在翠湖附近的老街民宿，推窗就是石板路。房间不大但布置很用心，有一股淡淡的茉莉香。",
        photos: [
          "./photos/day1/stay_1.jpg",
          "./photos/day1/stay_2.jpg",
        ],
      },
      {
        type: "transport",    // 行
        icon: "MapPin",
        label: "出行",
        text: "从机场坐地铁直达市区，很顺畅。晚上走路逛翠湖，湖边有人在放风筝，风很大但很舒服。",
        photos: [
          "./photos/day1/transport_1.jpg",
        ],
      },
    ],
  },
  {
    id: 2,
    label: "Day 2",
    date: "05.02",
    title: "石林 · 彝族村",
    categories: [
      {
        type: "outfit",
        icon: "Shirt",
        label: "穿搭",
        text: "今天日照猛烈，换上了浅色长袖。防晒帽是全天最重要的装备。",
        photos: [
          "./photos/day2/outfit_1.jpg",
        ],
      },
      {
        type: "food",
        icon: "UtensilsCrossed",
        label: "饮食",
        text: "在彝族村吃了烤全羊，配着当地的苞谷酒。手抓饭的拌料香料味道很重，很下饭。",
        photos: [
          "./photos/day2/food_1.jpg",
          "./photos/day2/food_2.jpg",
        ],
      },
      {
        type: "stay",
        icon: "BedDouble",
        label: "住宿",
        text: "同一间民宿，晚上回来老板娘给泡了杯玫瑰花茶，睡前喝了很舒服。",
        photos: [],
      },
      {
        type: "transport",
        icon: "MapPin",
        label: "出行",
        text: "包车去石林，司机师傅是本地人，路上讲了很多关于彝族火把节的故事，比攻略有意思多了。",
        photos: [
          "./photos/day2/transport_1.jpg",
          "./photos/day2/transport_2.jpg",
        ],
      },
    ],
  },
  {
    id: 3,
    label: "Day 3",
    date: "05.03",
    title: "大理古城",
    categories: [
      {
        type: "outfit",
        icon: "Shirt",
        label: "穿搭",
        text: "大理风更大，围巾必备。古城里很多人穿扎染衣服，忍不住也买了一件换上。",
        photos: [
          "./photos/day3/outfit_1.jpg",
          "./photos/day3/outfit_2.jpg",
        ],
      },
      {
        type: "food",
        icon: "UtensilsCrossed",
        label: "饮食",
        text: "乳扇现烤现吃，蘸蜂蜜或者辣椒面，两种口味都好。下午在洱海边的咖啡馆坐了两个小时。",
        photos: [
          "./photos/day3/food_1.jpg",
          "./photos/day3/food_2.jpg",
          "./photos/day3/food_3.jpg",
        ],
      },
      {
        type: "stay",
        icon: "BedDouble",
        label: "住宿",
        text: "换到了古城内的白族民居改建客栈，院子里种了很多花，猫咪在花盆里睡觉。",
        photos: [
          "./photos/day3/stay_1.jpg",
          "./photos/day3/stay_2.jpg",
        ],
      },
      {
        type: "transport",
        icon: "MapPin",
        label: "出行",
        text: "租了辆自行车沿洱海骑行，风景绝了。路过双廊古镇，停下来走了一段栈道。",
        photos: [
          "./photos/day3/transport_1.jpg",
        ],
      },
    ],
  },
  {
    id: 4,
    label: "Day 4",
    date: "05.04",
    title: "丽江古城",
    categories: [
      {
        type: "outfit",
        icon: "Shirt",
        label: "穿搭",
        text: "丽江海拔更高，早晚温差大。分层穿法终于用上了，白天可以只穿一件薄外套。",
        photos: [
          "./photos/day4/outfit_1.jpg",
        ],
      },
      {
        type: "food",
        icon: "UtensilsCrossed",
        label: "饮食",
        text: "鸡豆凉粉是意外之喜，口感比普通凉粉更糯更香。晚上古城里找了家纳西菜，点了腊排骨火锅。",
        photos: [
          "./photos/day4/food_1.jpg",
          "./photos/day4/food_2.jpg",
        ],
      },
      {
        type: "stay",
        icon: "BedDouble",
        label: "住宿",
        text: "古城里的客栈，木质结构，夜里能听到外面酒吧街的音乐，但反而有种热闹的安全感。",
        photos: [
          "./photos/day4/stay_1.jpg",
        ],
      },
      {
        type: "transport",
        icon: "MapPin",
        label: "出行",
        text: "从大理坐动车到丽江，车程约两小时。车窗外一路都是山，云很低，压着山顶。",
        photos: [
          "./photos/day4/transport_1.jpg",
          "./photos/day4/transport_2.jpg",
        ],
      },
    ],
  },
  {
    id: 5,
    label: "Day 5",
    date: "05.05",
    title: "玉龙雪山 · 返程",
    categories: [
      {
        type: "outfit",
        icon: "Shirt",
        label: "穿搭",
        text: "雪山上面需要租羽绒服，景区有得租不用自带。手套和厚袜子是自己准备的，很必要。",
        photos: [
          "./photos/day5/outfit_1.jpg",
          "./photos/day5/outfit_2.jpg",
        ],
      },
      {
        type: "food",
        icon: "UtensilsCrossed",
        label: "饮食",
        text: "下山后吃了一碗热腾腾的牛肉米线，加了辣椒油，是这五天里最满足的一餐。",
        photos: [
          "./photos/day5/food_1.jpg",
        ],
      },
      {
        type: "stay",
        icon: "BedDouble",
        label: "住宿",
        text: "最后一晚还是在丽江古城，把没逛完的街都走了一遍，买了些松茸和玫瑰饼带回去。",
        photos: [],
      },
      {
        type: "transport",
        icon: "MapPin",
        label: "出行",
        text: "傍晚飞回，在候机厅喝着鲜花饼配咖啡，看跑道上的光。五天，刚刚好。",
        photos: [
          "./photos/day5/transport_1.jpg",
        ],
      },
    ],
  },
];

// ============================================================
// 以后接 Supabase 时，把下面这个函数的内容替换成 fetch 调用：
//
// export async function getTripData() {
//   const { data, error } = await supabase
//     .from('trip_days')
//     .select('*, categories(*)')
//     .order('id');
//   if (error) throw error;
//   return data;
// }
//
// 目前直接返回本地数据，页面调用方式不需要改变。
// ============================================================

export async function getTripData() {
  return days;
}
