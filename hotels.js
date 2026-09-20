/* ============================================================
 *  酒店数据配置文件
 * ============================================================ */

var HOTEL_DATA = [
  {
    name: "广州保利洲际酒店",
    shortName: "广州洲际酒店",
    city: "广州",
    district: "海珠区",
    address: "广州市海珠区阅江中路828号",
    phone: "020-89228888",
    rating: "五星级",
    photoQueen: "https://images.unsplash.com/photo-1611892440504-42a792e24d32?w=800&q=80",
    photoTwin: "https://images.unsplash.com/photo-1590490360182-c33d57733427?w=800&q=80",
    rooms: [
      { type: "豪华城景大床房", price: 861, platform: "携程" },
      { type: "豪华城景双床房", price: 861, platform: "携程" },
      { type: "江景大床房(看广州塔)", price: 1600, platform: "美团" },
      { type: "江景双床房(看广州塔)", price: 1600, platform: "美团" },
      { type: "行政大床房(含行政酒廊)", price: 2800, platform: "IHG官网" }
    ],
    transport: [
      { name: "琶洲地铁站(8号线)", distance: "0.8km", drive: "3分钟", type: "地铁站" },
      { name: "广州塔", distance: "2.5km", drive: "8分钟", type: "地标" },
      { name: "广州白云国际机场", distance: "42km", drive: "50分钟", type: "机场" },
      { name: "广州南站", distance: "18km", drive: "25分钟", type: "火车站" },
      { name: "广州东站", distance: "15km", drive: "25分钟", type: "火车站" },
      { name: "珠江新城站(3/5号线)", distance: "6km", drive: "15分钟", type: "地铁站" }
    ],
    amenities: ["免费WiFi", "江景餐厅", "健身中心", "室内泳池", "免费停车", "琶洲会展中心旁"]
  },
  {
    name: "广州科学城洲际酒店",
    shortName: "科学城洲际",
    city: "广州",
    district: "黄埔区",
    address: "广州市黄埔区科学城科学广场",
    phone: "020-82118888",
    rating: "五星级",
    photoQueen: "https://images.unsplash.com/photo-1578683010236-d716f9a3f461?w=800&q=80",
    photoTwin: "https://images.unsplash.com/photo-1595576554374-1e8b6b6f6b4e?w=800&q=80",
    rooms: [
      { type: "豪华大床房", price: 680, platform: "携程" },
      { type: "豪华双床房", price: 680, platform: "携程" },
      { type: "行政大床房", price: 980, platform: "美团" }
    ],
    transport: [
      { name: "萝岗地铁站(6号线)", distance: "1.2km", drive: "5分钟", type: "地铁站" },
      { name: "广州白云国际机场", distance: "35km", drive: "40分钟", type: "机场" },
      { name: "广州东站", distance: "25km", drive: "35分钟", type: "火车站" },
      { name: "广州南站", distance: "35km", drive: "45分钟", type: "火车站" }
    ],
    amenities: ["免费WiFi", "健身中心", "室内泳池", "商务中心", "免费停车"]
  },
  {
    name: "广州瑰丽酒店",
    shortName: "瑰丽酒店",
    city: "广州",
    district: "天河区",
    address: "广州市天河区珠江东路6号周大福金融中心93-108层",
    phone: "020-88528888",
    rating: "五星级(顶奢)",
    photoQueen: "https://images.unsplash.com/photo-1566665797739-16de78888c88?w=800&q=80",
    photoTwin: "https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?w=800&q=80",
    rooms: [
      { type: "豪华大床房", price: 2171, platform: "携程" },
      { type: "豪华双床房", price: 2171, platform: "携程" },
      { type: "广州塔景豪华大床房", price: 2800, platform: "Klook" },
      { type: "尊贵客房(64㎡)", price: 3500, platform: "瑰丽官网" }
    ],
    transport: [
      { name: "猎德地铁站(3/5号线)", distance: "0.3km", drive: "2分钟", type: "地铁站" },
      { name: "珠江新城站(3/5号线)", distance: "0.8km", drive: "5分钟", type: "地铁站" },
      { name: "广州白云国际机场", distance: "38km", drive: "45分钟", type: "机场" },
      { name: "广州东站", distance: "8km", drive: "18分钟", type: "火车站" },
      { name: "广州南站", distance: "28km", drive: "35分钟", type: "火车站" },
      { name: "广州塔", distance: "3km", drive: "10分钟", type: "地标" }
    ],
    amenities: ["免费WiFi", "高空泳池", "SPA", "米其林餐厅", "K11旁", "24小时健身"]
  },
  {
    name: "广州四季酒店",
    shortName: "四季酒店",
    city: "广州",
    district: "天河区",
    address: "广州市天河区珠江西路5号广州国际金融中心70-100层",
    phone: "020-88833888",
    rating: "五星级(顶奢)",
    photoQueen: "https://images.unsplash.com/photo-1590490360182-c33d57733427?w=800&q=80",
    photoTwin: "https://images.unsplash.com/photo-1611892440504-42a792e24d32?w=800&q=80",
    rooms: [
      { type: "豪华大床房", price: 1800, platform: "携程" },
      { type: "豪华双床房", price: 1800, platform: "携程" },
      { type: "江景大床房", price: 2500, platform: "四季官网" },
      { type: "广州塔景房", price: 3200, platform: "飞猪" }
    ],
    transport: [
      { name: "珠江新城站(3/5号线)", distance: "0.5km", drive: "3分钟", type: "地铁站" },
      { name: "大剧院站(APM线)", distance: "0.6km", drive: "4分钟", type: "地铁站" },
      { name: "广州白云国际机场", distance: "38km", drive: "45分钟", type: "机场" },
      { name: "广州东站", distance: "7km", drive: "15分钟", type: "火车站" },
      { name: "广州南站", distance: "28km", drive: "35分钟", type: "火车站" }
    ],
    amenities: ["免费WiFi", "高空泳池", "米其林餐厅", "SPA", "IFC国际金融中心", "珠江新城核心"]
  },
  {
    name: "广州富力丽思卡尔顿酒店",
    shortName: "丽思卡尔顿",
    city: "广州",
    district: "天河区",
    address: "广州市天河区珠江新城兴安路3号",
    phone: "020-38136688",
    rating: "五星级(奢华)",
    photoQueen: "https://images.unsplash.com/photo-1578683010236-d716f9a3f461?w=800&q=80",
    photoTwin: "https://images.unsplash.com/photo-1595576554374-1e8b6b6f6b4e?w=800&q=80",
    rooms: [
      { type: "豪华大床房", price: 1500, platform: "携程" },
      { type: "豪华双床房", price: 1500, platform: "携程" },
      { type: "江景大床房", price: 2000, platform: "美团" },
      { type: "行政大床房", price: 2800, platform: "丽思官网" }
    ],
    transport: [
      { name: "大剧院站(APM线)", distance: "0.4km", drive: "2分钟", type: "地铁站" },
      { name: "珠江新城站(3/5号线)", distance: "0.7km", drive: "5分钟", type: "地铁站" },
      { name: "广州白云国际机场", distance: "39km", drive: "48分钟", type: "机场" },
      { name: "广州东站", distance: "8km", drive: "18分钟", type: "火车站" },
      { name: "广州南站", distance: "29km", drive: "38分钟", type: "火车站" }
    ],
    amenities: ["免费WiFi", "户外泳池", "丽轩中餐厅(米其林)", "SPA", "酒廊", "花城广场旁"]
  },
  {
    name: "广州富力君悦大酒店",
    shortName: "君悦酒店",
    city: "广州",
    district: "天河区",
    address: "广州市天河区珠江西路12号",
    phone: "020-83961234",
    rating: "五星级",
    photoQueen: "https://images.unsplash.com/photo-1566665797739-16de78888c88?w=800&q=80",
    photoTwin: "https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?w=800&q=80",
    rooms: [
      { type: "高级大床房", price: 1200, platform: "携程" },
      { type: "高级双床房", price: 1200, platform: "携程" },
      { type: "广州塔景大床房", price: 1800, platform: "美团" },
      { type: "行政大床房", price: 2200, platform: "君悦官网" }
    ],
    transport: [
      { name: "珠江新城站(3/5号线)", distance: "0.3km", drive: "2分钟", type: "地铁站" },
      { name: "花城广场", distance: "0.2km", drive: "步行3分钟", type: "地标" },
      { name: "广州白云国际机场", distance: "38km", drive: "45分钟", type: "机场" },
      { name: "广州东站", distance: "7km", drive: "15分钟", type: "火车站" },
      { name: "广州南站", distance: "28km", drive: "35分钟", type: "火车站" }
    ],
    amenities: ["免费WiFi", "凯菲厅自助", "户外泳池", "健身中心", "花城广场上盖"]
  },
  {
    name: "广州白天鹅宾馆",
    shortName: "白天鹅",
    city: "广州",
    district: "荔湾区",
    address: "广州市荔湾区沙面南街1号",
    phone: "020-81886968",
    rating: "五星级",
    photoQueen: "https://images.unsplash.com/photo-1611892440504-42a792e24d32?w=800&q=80",
    photoTwin: "https://images.unsplash.com/photo-1590490360182-c33d57733427?w=800&q=80",
    rooms: [
      { type: "标准大床房", price: 980, platform: "携程" },
      { type: "标准双床房", price: 980, platform: "携程" },
      { type: "江景大床房", price: 1580, platform: "美团" },
      { type: "玉堂春豪华房", price: 2200, platform: "白天鹅官网" }
    ],
    transport: [
      { name: "黄沙地铁站(1/6号线)", distance: "0.8km", drive: "5分钟", type: "地铁站" },
      { name: "沙面岛", distance: "0.1km", drive: "步行1分钟", type: "地标" },
      { name: "广州白云国际机场", distance: "35km", drive: "45分钟", type: "机场" },
      { name: "广州站", distance: "8km", drive: "20分钟", type: "火车站" },
      { name: "广州南站", distance: "25km", drive: "35分钟", type: "火车站" }
    ],
    amenities: ["免费WiFi", "历史经典酒店", "沙面岛上", "江畔餐厅", "室内泳池", "后花园"]
  },
  {
    name: "广州中心皇冠假日酒店",
    shortName: "皇冠假日",
    city: "广州",
    district: "越秀区",
    address: "广州市越秀区环市东路339号广东国际大厦",
    phone: "020-83638888",
    rating: "五星级",
    photoQueen: "https://images.unsplash.com/photo-1578683010236-d716f9a3f461?w=800&q=80",
    photoTwin: "https://images.unsplash.com/photo-1595576554374-1e8b6b6f6b4e?w=800&q=80",
    rooms: [
      { type: "高级大床房", price: 680, platform: "携程" },
      { type: "高级双床房", price: 680, platform: "携程" },
      { type: "行政城景房", price: 980, platform: "IHG官网" }
    ],
    transport: [
      { name: "淘金地铁站(5号线)", distance: "0.3km", drive: "2分钟", type: "地铁站" },
      { name: "广东国际大厦", distance: "0km", drive: "0分钟", type: "地标" },
      { name: "广州白云国际机场", distance: "32km", drive: "40分钟", type: "机场" },
      { name: "广州火车站", distance: "3km", drive: "10分钟", type: "火车站" },
      { name: "广州东站", distance: "8km", drive: "20分钟", type: "火车站" }
    ],
    amenities: ["免费WiFi", "云端餐厅", "健身中心", "室内泳池", "环市东商圈"]
  },
  {
    name: "广东亚洲国际大酒店",
    shortName: "亚洲国际",
    city: "广州",
    district: "越秀区",
    address: "广州市越秀区环市东路326号之一",
    phone: "020-61288888",
    rating: "五星级",
    photoQueen: "https://images.unsplash.com/photo-1566665797739-16de78888c88?w=800&q=80",
    photoTwin: "https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?w=800&q=80",
    rooms: [
      { type: "豪华大床房", price: 580, platform: "携程" },
      { type: "豪华双床房", price: 580, platform: "携程" },
      { type: "行政大床房", price: 880, platform: "美团" }
    ],
    transport: [
      { name: "淘金地铁站(5号线)", distance: "0.5km", drive: "3分钟", type: "地铁站" },
      { name: "白云宾馆站", distance: "0.4km", drive: "2分钟", type: "地铁站" },
      { name: "广州白云国际机场", distance: "33km", drive: "42分钟", type: "机场" },
      { name: "广州火车站", distance: "3.5km", drive: "12分钟", type: "火车站" },
      { name: "广州东站", distance: "9km", drive: "22分钟", type: "火车站" }
    ],
    amenities: ["免费WiFi", "旋转餐厅", "健身中心", "网球场", "环市东商圈"]
  },
  {
    name: "广州之窗皇冠假日酒店",
    shortName: "广州之窗",
    city: "广州",
    district: "海珠区",
    address: "广州市海珠区沥滘路328号",
    phone: "020-89166666",
    rating: "四星级",
    photoQueen: "https://images.unsplash.com/photo-1611892440504-42a792e24d32?w=800&q=80",
    photoTwin: "https://images.unsplash.com/photo-1590490360182-c33d57733427?w=800&q=80",
    rooms: [
      { type: "高级大床房", price: 520, platform: "携程" },
      { type: "高级双床房", price: 520, platform: "携程" },
      { type: "江景大床房", price: 780, platform: "美团" }
    ],
    transport: [
      { name: "沥滘地铁站(3号线/广佛线)", distance: "1km", drive: "5分钟", type: "地铁站" },
      { name: "广州之窗", distance: "0km", drive: "0分钟", type: "地标" },
      { name: "广州白云国际机场", distance: "45km", drive: "55分钟", type: "机场" },
      { name: "广州南站", distance: "15km", drive: "22分钟", type: "火车站" },
      { name: "广州塔", distance: "8km", drive: "18分钟", type: "地标" }
    ],
    amenities: ["免费WiFi", "江景房", "健身中心", "免费停车", "近广州南站"]
  },
  {
    name: "北京首都机场希尔顿酒店",
    shortName: "首都机场希尔顿",
    city: "北京",
    district: "顺义区",
    address: "北京市顺义区首都机场三号航站楼三经路1号",
    phone: "010-64588888",
    rating: "五星级",
    photoQueen: "https://images.unsplash.com/photo-1611892440504-42a792e24d32?w=800&q=80",
    photoTwin: "https://images.unsplash.com/photo-1590490360182-c33d57733427?w=800&q=80",
    rooms: [
      { type: "豪华大床房", price: 888, platform: "携程" },
      { type: "豪华双床房", price: 888, platform: "携程" },
      { type: "行政大床房", price: 1288, platform: "美团" }
    ],
    transport: [
      { name: "首都国际机场T3航站楼", distance: "1.2km", drive: "5分钟", type: "机场" },
      { name: "首都国际机场T2航站楼", distance: "3.5km", drive: "10分钟", type: "机场" },
      { name: "东直门地铁站", distance: "25km", drive: "35分钟", type: "地铁站" },
      { name: "北京南站", distance: "38km", drive: "50分钟", type: "火车站" },
      { name: "北京西站", distance: "40km", drive: "55分钟", type: "火车站" }
    ],
    amenities: ["免费WiFi", "健身房", "室内泳池", "免费停车", "自助早餐", "机场直达"]
  },
  {
    name: "上海外滩茂悦大酒店",
    shortName: "外滩茂悦",
    city: "上海",
    district: "黄浦区",
    address: "上海市黄浦区黄浦路199号",
    phone: "021-63931234",
    rating: "五星级",
    photoQueen: "https://images.unsplash.com/photo-1566665797739-16de78888c88?w=800&q=80",
    photoTwin: "https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?w=800&q=80",
    rooms: [
      { type: "外滩景观大床房", price: 1588, platform: "携程" },
      { type: "外滩景观双床房", price: 1588, platform: "携程" },
      { type: "江景大床房", price: 1288, platform: "飞猪" }
    ],
    transport: [
      { name: "虹桥国际机场", distance: "18km", drive: "30分钟", type: "机场" },
      { name: "浦东国际机场", distance: "45km", drive: "50分钟", type: "机场" },
      { name: "南京东路地铁站", distance: "1.5km", drive: "5分钟", type: "地铁站" },
      { name: "上海虹桥站", distance: "20km", drive: "35分钟", type: "火车站" },
      { name: "上海站", distance: "5km", drive: "15分钟", type: "火车站" }
    ],
    amenities: ["免费WiFi", "健身中心", "SPA", "江景餐厅", "礼宾服务", "外滩边"]
  }
];