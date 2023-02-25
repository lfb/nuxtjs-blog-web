export const LEVEL_TEXT = {
  SSS: {
    level: 'SSS',
    color: '#ff9900',
    star: 5,
    text: '胡桃厨天花板级圣遗物，又称遗物级圣遗物，你基本上很难得到，再难有大的提升。'
  },
  S: {
    level: 'S',
    color: '#19be6b',
    star: 4,
    text: '极品圣遗物，欧皇专属，很给力的圣遗物，很难提升。'
  },
  A: {
    level: 'A',
    color: '#5cadff',
    star: 3,
    text: '很不错的圣遗物，但是还有比较大的提升空间。'
  },
  C: {
    level: 'C',
    star: 2,
    color: '#808695',
    text: '加油吧骚年，你的圣遗物还有很大的提升空间。'
  }
}

export const ATTRIBUTES_MAP = {
  JING_TONG: 23.31,
  SHENG_MING_BAI_FEN_BI: 5.83,
  XIAO_SHENG_MING: 906,
  BAO_SHANG: 7.77,
  GONG_JI_BAI_FEN_BI: 5.83,
  XIAO_GONG_JI: 41
}

export const equipArray = [
  {
    key: 'JING_TONG',
    name: '精通',
    value: '',
    placeholder: '精通'
  },
  {
    key: 'BAO_SHANG',
    name: '爆伤',
    value: '',
    placeholder: '暴击伤害'
  },
  {
    key: 'SHENG_MING_BAI_FEN_BI',
    name: '大生命',
    value: '',
    placeholder: '生命百分比'
  },
  {
    key: 'XIAO_SHENG_MING',
    name: '小生命',
    value: '',
    placeholder: '小生命'
  },
  {
    key: 'GONG_JI_BAI_FEN_BI',
    name: '大攻击',
    value: '',
    placeholder: '攻击百分比',
    isUndivided: true
  },
  {
    key: 'XIAO_GONG_JI',
    name: '小攻击',
    value: '',
    placeholder: '小攻击',
    isUndivided: true
  }
]
