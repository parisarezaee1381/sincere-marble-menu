export type Badge = "وجترین" | "تند";
export interface MenuItem { id: string; name: string; desc: string; price: number; img: string; badges?: Badge[]; signature?: boolean }
export interface Category { id: string; title: string; items: MenuItem[] }
const u = (id: string) => `https://images.unsplash.com/${id}?auto=format&fit=crop&w=800&q=75`;
export const categories: Category[] = [
  { id: "breakfast", title: "صبحانه", items: [
    { id: "b1", name: "صبحانه‌ی سینسیر", desc: "پنیر لیقوان، گردو، عسل کندو، کره‌ی محلی و نان سنگک تازه", price: 685000, img: u("photo-1533089860892-a7c6f0a88666"), signature: true, badges: ["وجترین"] },
    { id: "b2", name: "املت گوجه و ریحان", desc: "گوجه‌ی کبابی، تخم‌مرغ محلی، ریحان تازه", price: 345000, img: u("photo-1525351484163-7529414344d8"), badges: ["وجترین"] },
    { id: "b3", name: "اگز بندیکت", desc: "تخم‌مرغ پوشه، سس هالندز، نان بریوش", price: 495000, img: u("photo-1608039829572-78524f79c4c7") },
  ]},
  { id: "starter", title: "پیش‌غذا", items: [
    { id: "s1", name: "بوراتای انجیر", desc: "بوراتای تازه، انجیر کبابی، روغن زیتون و پسته", price: 620000, img: u("photo-1505575967455-40e256f73376"), signature: true, badges: ["وجترین"] },
    { id: "s2", name: "میگوی سوخاری تند", desc: "میگوی خلیج فارس، سس چیلی و لیمو", price: 740000, img: u("photo-1565680018434-b513d5e5fd47"), badges: ["تند"] },
    { id: "s3", name: "کشک بادمجان", desc: "بادمجان دودی، کشک محلی، نعناع داغ", price: 390000, img: u("photo-1541529086526-db283c563270"), badges: ["وجترین"] },
  ]},
  { id: "persian", title: "غذای ایرانی", items: [
    { id: "p1", name: "باقالی‌پلو با ماهیچه", desc: "ماهیچه‌ی گوسفندی هشت‌ساعته، برنج زعفرانی، شوید تازه", price: 1450000, img: u("photo-1544025162-d76694265947"), signature: true },
    { id: "p2", name: "جوجه‌کباب زعفرانی", desc: "سینه‌ی مرغ در زعفران و لیمو، گوجه‌ی کبابی", price: 890000, img: u("photo-1599487488170-d11ec9c172f0") },
    { id: "p3", name: "فسنجان", desc: "گردو و انار ترش، مرغ محلی، پلوی کته", price: 980000, img: u("photo-1547592180-85f173990554") },
  ]},
  { id: "intl", title: "غذای بین‌المللی", items: [
    { id: "i1", name: "استیک فیله", desc: "فیله‌ی گوساله، سس پپر، پوره‌ی سیب‌زمینی ترافل", price: 1890000, img: u("photo-1600891964092-4316c288032e"), signature: true },
    { id: "i2", name: "ریزوتو قارچ", desc: "قارچ جنگلی، پارمزان، روغن ترافل", price: 820000, img: u("photo-1476124369491-e7addf5db371"), badges: ["وجترین"] },
    { id: "i3", name: "پاستا آرابیاتا", desc: "پنه، سس گوجه‌ی تند، ریحان", price: 690000, img: u("photo-1563379926898-05f4575a45d8"), badges: ["تند", "وجترین"] },
  ]},
  { id: "dessert", title: "دسر", items: [
    { id: "d1", name: "تیرامیسو", desc: "ماسکارپونه، اسپرسو، کاکائوی تلخ", price: 420000, img: u("photo-1571877227200-a0d98ea607e9") },
    { id: "d2", name: "فالوده‌ی گلاب", desc: "فالوده‌ی شیرازی، گلاب قمصر، آلبالو", price: 320000, img: u("photo-1488477181946-6428a0291777"), signature: true, badges: ["وجترین"] },
  ]},
  { id: "drinks", title: "نوشیدنی", items: [
    { id: "n1", name: "شربت انار و نعناع", desc: "انار تازه‌ی ساوه، نعناع، یخ خرد", price: 260000, img: u("photo-1497534446932-c925b458314e"), signature: true, badges: ["وجترین"] },
    { id: "n2", name: "اسپرسو", desc: "دوشات، رست مدیوم", price: 180000, img: u("photo-1510591509098-f4fdc6d0ff04"), badges: ["وجترین"] },
    { id: "n3", name: "دمنوش زعفران", desc: "زعفران قائنات، نبات، هل", price: 220000, img: u("photo-1544787219-7f47ccb76574"), badges: ["وجترین"] },
  ]},
];
export const faNum = (n: number) => n.toLocaleString("fa-IR");
