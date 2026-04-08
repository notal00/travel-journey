// ============================================================
// data.js — 大理旅行数据文件
// 以后接 Supabase 只需要把 getTripData() 改成 fetch 请求，
// 数据结构（days / categories / entries）保持不变。
// ============================================================

export const tripMeta = {
title: “大理五日”,
subtitle: “2026 · 3月”,
dates: “2026.03.09 — 2026.03.13”,
};

// 照片路径规则：./photos/day{N}*{category}*{index}.jpg
// 上传时按此规则命名即可，index 从 1 开始
// category: outfit / food / stay / transport

export const days = [
{
id: 1,
label: “Day 1”,
date: “03.09”,
title: “落地大理”,
categories: [
{
type: “outfit”,
icon: “Shirt”,
label: “穿搭”,
text: “预报说大理气温比北京高很多，为了节省行李空间，我只带了一件外套，早上出发时北京还是很冷，穿上羽绒服内胆之后好很多。”,
photos: [
“./photos/day1_outfit_1.jpg”,
“./photos/day1_outfit_2.jpg”,
],
},
{
type: “food”,
icon: “UtensilsCrossed”,
label: “饮食”,
text: “出机场先来了杯当地特色奶茶，超级好喝。怕吃吃喝喝太放纵，只吃了一顿下午的正餐，选的是当地人推荐的腊排骨，非常不错，还很便宜。”,
photos: [
“./photos/day1_food_1.jpg”,
“./photos/day1_food_2.jpg”,
“./photos/day1_food_3.jpg”,
],
},
{
type: “stay”,
icon: “BedDouble”,
label: “住宿”,
text: “住在洱海边的民宿，每天都能喝免费咖啡，还有浴缸，早饭也不错，就是位置不好找，只有自驾才方便。”,
photos: [
“./photos/day1_stay_1.jpg”,
“./photos/day1_stay_2.jpg”,
],
},
{
type: “transport”,
icon: “MapPin”,
label: “出行”,
text: “从机场取了车开始自驾，我开始很担心大理的交通，后来发现自己多虑了，比北京好多了。但中途开始下大雨，路况稍差了些，我走错了路，进了村里，太难开了，但还好最后顺利到达。”,
photos: [
“./photos/day1_transport_1.jpg”,
],
},
],
},
{
id: 2,
label: “Day 2”,
date: “03.10”,
title: “待填写”,
categories: [
{
type: “outfit”,
icon: “Shirt”,
label: “穿搭”,
text: “待填写。”,
photos: [
“./photos/day2_outfit_1.jpg”,
],
},
{
type: “food”,
icon: “UtensilsCrossed”,
label: “饮食”,
text: “待填写。”,
photos: [
“./photos/day2_food_1.jpg”,
“./photos/day2_food_2.jpg”,
],
},
{
type: “stay”,
icon: “BedDouble”,
label: “住宿”,
text: “待填写。”,
photos: [],
},
{
type: “transport”,
icon: “MapPin”,
label: “出行”,
text: “待填写。”,
photos: [
“./photos/day2_transport_1.jpg”,
],
},
],
},
{
id: 3,
label: “Day 3”,
date: “03.11”,
title: “待填写”,
categories: [
{
type: “outfit”,
icon: “Shirt”,
label: “穿搭”,
text: “待填写。”,
photos: [
“./photos/day3_outfit_1.jpg”,
],
},
{
type: “food”,
icon: “UtensilsCrossed”,
label: “饮食”,
text: “待填写。”,
photos: [
“./photos/day3_food_1.jpg”,
“./photos/day3_food_2.jpg”,
],
},
{
type: “stay”,
icon: “BedDouble”,
label: “住宿”,
text: “待填写。”,
photos: [
“./photos/day3_stay_1.jpg”,
],
},
{
type: “transport”,
icon: “MapPin”,
label: “出行”,
text: “待填写。”,
photos: [
“./photos/day3_transport_1.jpg”,
],
},
],
},
{
id: 4,
label: “Day 4”,
date: “03.12”,
title: “待填写”,
categories: [
{
type: “outfit”,
icon: “Shirt”,
label: “穿搭”,
text: “待填写。”,
photos: [
“./photos/day4_outfit_1.jpg”,
],
},
{
type: “food”,
icon: “UtensilsCrossed”,
label: “饮食”,
text: “待填写。”,
photos: [
“./photos/day4_food_1.jpg”,
],
},
{
type: “stay”,
icon: “BedDouble”,
label: “住宿”,
text: “待填写。”,
photos: [
“./photos/day4_stay_1.jpg”,
],
},
{
type: “transport”,
icon: “MapPin”,
label: “出行”,
text: “待填写。”,
photos: [
“./photos/day4_transport_1.jpg”,
],
},
],
},
{
id: 5,
label: “Day 5”,
date: “03.13”,
title: “待填写”,
categories: [
{
type: “outfit”,
icon: “Shirt”,
label: “穿搭”,
text: “待填写。”,
photos: [
“./photos/day5_outfit_1.jpg”,
],
},
{
type: “food”,
icon: “UtensilsCrossed”,
label: “饮食”,
text: “待填写。”,
photos: [
“./photos/day5_food_1.jpg”,
],
},
{
type: “stay”,
icon: “BedDouble”,
label: “住宿”,
text: “待填写。”,
photos: [],
},
{
type: “transport”,
icon: “MapPin”,
label: “出行”,
text: “待填写。”,
photos: [
“./photos/day5_transport_1.jpg”,
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
//     .from(‘trip_days’)
//     .select(’*, categories(*)’)
//     .order(‘id’);
//   if (error) throw error;
//   return data;
// }
//
// 目前直接返回本地数据，页面调用方式不需要改变。
// ============================================================

export async function getTripData() {
return days;
}
