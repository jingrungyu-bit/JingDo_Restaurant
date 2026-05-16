// ═══════════════════════════════════════════════════════════════════
//  金都餐廳 — 菜單資料
//  如需修改品項,請直接編輯此檔案後儲存
// ═══════════════════════════════════════════════════════════════════

const RESTAURANT = {
  name: {
    zh: '金都餐廳',
    en: 'JingDo Restaurant',
    ja: '金都レストラン',
    ko: '진두 레스토랑',
  },
  tagline: {
    zh: '南投鄉土料理',
    en: 'Nantou Township Cuisine',
    ja: '南投郷土料理',
    ko: '난터우 향토 요리',
  },
  address: {
    zh: '南投縣埔里鎮信義路236號',
    en: '236 Xinyi Rd, Puli, Nantou',
    ja: '南投県埔里鎮信義路236号',
    ko: '南投縣 푸리 신의로 236호',
  },
  phone: '049-299-5096',
  line: '@jindurestaurant',
};

const CATEGORIES = [
  { id: 'set_2', label: { zh: '雙人合菜', en: 'Set for Two',   ja: '2名様セット', ko: '2인 세트' } },
  { id: 'set_3', label: { zh: '三人合菜', en: 'Set for Three', ja: '3名様セット', ko: '3인 세트' } },
  { id: 'set_6', label: { zh: '六人合菜', en: 'Set for Six',   ja: '6名様セット', ko: '6인 세트' } },
];

const INCLUDES_LABEL = {
  zh: '套餐內容',
  en: 'Includes',
  ja: '含まれる料理',
  ko: '포함 요리',
};

const SET_PEOPLE = {
  set_2: 2,
  set_3: 3,
  set_6: 6,
};

const PEOPLE_LABEL = {
  zh: (n) => `${n} 人份套餐`,
  en: (n) => `Set meal for ${n} people`,
  ja: (n) => `${n}名様セット`,
  ko: (n) => `${n}인 세트 요리`,
};

const MENU_ITEMS = [
  {
    id: 'set_2-001',
    category: 'set_2',
    names: { zh: '雙人合菜', en: 'Set for Two', ja: '2名様セット', ko: '2인 세트' },
    price: 1050,
    image: 'images/set2.png',
    emoji: '🍽️',
    tags: [],
    dishes: {
      zh: ['福爾摩沙四季采', '原鄉雙臘香米飯', '手作紅麴滷肉', '宮保椒鹽鮮魚', '茭白美人丸百菇鍋', '寶島時蔬', '手作蜜汁山香子'],
      en: ['Formosa Four Seasons Vegetables', 'Hometown Double Cured Fragrant Rice', 'Handmade Red Yeast Braised Pork', 'Kung Pao Salt & Pepper Fish', 'Water Bamboo Meatball Mushroom Pot', 'Island Seasonal Vegetables', 'Handmade Honey Mountain Herb'],
      ja: ['フォルモサ四季野菜', '故郷の二種燻製香米飯', '手作り紅麹の煮込み豚肉', '宮保椒塩鮮魚', '真菰筍のつみれ百菇鍋', '宝島の時菜', '手作りハチミツ山香子'],
      ko: ['포르모사 사계절 채소', '고향 두 가지 훈제 향미밥', '수제 홍국 돼지고기 조림', '궁보 후추소금 생선', '줄풀 완자 버섯 전골', '보도 제철 채소', '수제 꿀 산향자'],
    },
    note: { zh: '', en: '', ja: '', ko: '' },
  },
  {
    id: 'set_3-001',
    category: 'set_3',
    names: { zh: '三人合菜', en: 'Set for Three', ja: '3名様セット', ko: '3인 세트' },
    price: 1800,
    image: 'images/set3.png',
    emoji: '🍽️',
    tags: [],
    dishes: {
      zh: ['福爾摩沙田園組曲', '原鄉雙臘香米飯', '手作紅麴滷肉', '王老爹鴨香寶', '茭白美人丸百菇鍋', '宮保椒鹽鮮魚', '寶島時蔬', '南投梅子配果凍', '手作蜜汁山香子'],
      en: ['Formosa Garden Symphony', 'Hometown Double Cured Fragrant Rice', 'Handmade Red Yeast Braised Pork', "Old Wang's Duck Treasure", 'Water Bamboo Meatball Mushroom Pot', 'Kung Pao Salt & Pepper Fish', 'Island Seasonal Vegetables', 'Nantou Plum with Jelly', 'Handmade Honey Mountain Herb'],
      ja: ['フォルモサ田園組曲', '故郷の二種燻製香米飯', '手作り紅麹の煮込み豚肉', '王老爹の鴨の香宝', '真菰筍のつみれ百菇鍋', '宮保椒塩鮮魚', '宝島の時菜', '南投梅子と果凍', '手作りハチミツ山香子'],
      ko: ['포르모사 전원 모음', '고향 두 가지 훈제 향미밥', '수제 홍국 돼지고기 조림', '왕라오다 오리 향보', '줄풀 완자 버섯 전골', '궁보 후추소금 생선', '보도 제철 채소', '난터우 매실 젤리', '수제 꿀 산향자'],
    },
    note: { zh: '', en: '', ja: '', ko: '' },
  },
  {
    id: 'set_6-001',
    category: 'set_6',
    names: { zh: '六人合菜', en: 'Set for Six', ja: '6名様セット', ko: '6인 세트' },
    price: 3200,
    image: null,
    emoji: '🍽️',
    tags: [],
    dishes: {
      zh: ['福爾摩沙田園組曲', '原鄉雙臘香米飯', '手作紅麴滷肉', '王老爹鴨香寶', '茭白美人丸百菇鍋', '水沙蓮花香蒸鮮魚', '寶島時蔬', '南投梅子配果凍', '寶島四季水果盤'],
      en: ['Formosa Garden Symphony', 'Hometown Double Cured Fragrant Rice', 'Handmade Red Yeast Braised Pork', "Old Wang's Duck Treasure", 'Water Bamboo Meatball Mushroom Pot', 'Shuishalian Lotus Fragrant Steamed Fish', 'Island Seasonal Vegetables', 'Nantou Plum with Jelly', 'Island Four Seasons Fruit Platter'],
      ja: ['フォルモサ田園組曲', '故郷の二種燻製香米飯', '手作り紅麹の煮込み豚肉', '王老爹の鴨の香宝', '真菰筍のつみれ百菇鍋', '水沙蓮の花香り蒸し魚', '宝島の時菜', '南投梅子と果凍', '宝島四季フルーツプレート'],
      ko: ['포르모사 전원 모음', '고향 두 가지 훈제 향미밥', '수제 홍국 돼지고기 조림', '왕라오다 오리 향보', '줄풀 완자 버섯 전골', '수사련 연꽃 향기 찜 생선', '보도 제철 채소', '난터우 매실 젤리', '보도 사계절 과일 플래터'],
    },
    note: { zh: '', en: '', ja: '', ko: '' },
  },
];
