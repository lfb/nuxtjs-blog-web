export const LEVEL_TEXT = {
  SSS: {
    level: 'SSS',
    color: '#ff9900',
    star: 5,
    text: '胡桃厨天花板级圣遗物，又称遗物级圣遗物，恭喜你，你的有效词条数已经接近满值，增伤点数极限为 5。'
  },
  SS: {
    level: 'SS',
    color: '#19be6b',
    star: 4,
    text: '极品圣遗物，欧皇专属，很给力的圣遗物，3 的增伤值达标，下一阶段需要 4 的增伤值。'
  },
  S: {
    level: 'S',
    color: '#5cadff',
    star: 3,
    text: '毕业圣遗物，如果你不是胡桃厨可以休息啦！2 的增伤值达标，下一阶段需要 3 的增伤值。'
  },
  C: {
    level: 'C',
    star: 2,
    color: '#808695',
    text: '赶快为你的老婆多刷点圣遗物吧，都快穷的吃土了，下一阶段需要 2 的增伤值。'
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

export const equipArray = [{
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
