import categories from '@/constants/categories'

const iphoneIssues = [
  { id: 0, title: 'Не заряжается', price: '900 руб.' },
  { id: 1, title: 'Проблемы со звонком', price: '890 руб.' },
  { id: 2, title: 'Собеседник не слышит', price: '2000 руб.' },
  { id: 3, title: 'Снятие пароля', price: '4000 руб.' },
  { id: 4, title: 'Нет звука в наушниках', price: '4000 руб.' },
  { id: 5, title: 'Замена стекла', price: '4000 руб.' },
  { id: 6, title: 'Чистка', price: '4000 руб.' }
]

const ipadIssues = [
  { id: 0, title: 'Нет звука в наушниках', price: '2000 руб.' },
  { id: 1, title: 'Разбито стекло', price: '4000 руб.' },
  { id: 2, title: 'Не заряжается', price: '2000 руб.' },
  { id: 3, title: 'Кнопка Home', price: '2000 руб.' }
]

const macIssues = [
  { id: 0, title: 'Установка MacOS', price: 'Бесплатно' },
  { id: 1, title: 'Чистка системы охлаждения c заменой термопасты', price: '1000 руб.' },
  { id: 2, title: 'Не заряжается', price: '2000 руб.' }
]

const watchIssues = [
  { id: 0, title: 'Замена дисплея', price: '5000 руб.' },
  { id: 1, title: 'Замена сенсора ForceTouch', price: '5000 руб.' },
  { id: 2, title: 'Замена аккумулятора', price: '2000 руб.' }
]

const anyIssues = [
  { id: 0, title: 'Замена дисплея', price: '2000 руб.' },
  { id: 1, title: 'Замена аккумулятора', price: '2000 руб.' }
]

const state = {
  categories: [
    {
      name: categories.IPHONE,
      title: 'IPhone',
      src: require('@/assets/png/023-ipad.png')
    },
    {
      name: categories.IPAD,
      title: 'IPad',
      src: require('@/assets/png/022-ipad.png')
    },
    {
      name: categories.MAC,
      title: 'Mac',
      src: require('@/assets/png/040-macbook.png')
    },
    {
      name: categories.WATCH,
      title: 'AppleWatch',
      src: require('@/assets/png/013-smartwatch.png')
    },
    {
      name: categories.ANY,
      title: 'Другие устройства',
      src: require('@/assets/png/045-novation cat.png')
    }
  ],
  models: {
    'iphone': [
      { id: 0, title: 'IPhone XR' },
      { id: 1, title: 'IPhone X' },
      { id: 2, title: 'IPhone 11' },
      { id: 3, title: 'IPhone 11 Pro' },
      { id: 4, title: 'IPhone 11 Pro Max' },
      { id: 5, title: 'IPhone 12' }
    ],
    'ipad': [
      { id: 6, title: 'IPad' },
      { id: 7, title: 'IPad 2' },
      { id: 8, title: 'IPad 3/4' },
      { id: 9, title: 'IPad Air' },
      { id: 10, title: 'IPad Pro 12\'9' },
      { id: 11, title: 'IPad Mini' }
    ],
    'mac': [
      { id: 12, title: 'MacBook Pro 13' },
      { id: 13, title: 'MacBook Pro 16' },
      { id: 14, title: 'MacBook Air' }
    ],
    'watch': [
      { id: 15, title: 'Apple Watch 38 S1' },
      { id: 16, title: 'Apple Watch 42 S1' },
      { id: 17, title: 'Apple Watch 38 S2' },
      { id: 18, title: 'Apple Watch 42 S2' }
    ],
    'any': [
      { id: 19, title: 'Samsung' },
      { id: 20, title: 'Honor' },
      { id: 21, title: 'Xiaomi' }
    ]
  },
  issues: {
    0: iphoneIssues,
    1: iphoneIssues,
    2: iphoneIssues,
    3: iphoneIssues,
    4: iphoneIssues,
    5: iphoneIssues,
    6: ipadIssues,
    7: ipadIssues,
    8: ipadIssues,
    9: ipadIssues,
    10: ipadIssues,
    11: ipadIssues,
    12: macIssues,
    13: macIssues,
    14: macIssues,
    15: watchIssues,
    16: watchIssues,
    17: watchIssues,
    18: watchIssues,
    19: anyIssues,
    20: anyIssues,
    21: anyIssues
  }
}

const mutations = {}

const actions = {
  init({ state, commit, dispatch }) {
    return new Promise((resolve, reject) => {
      return resolve()
    })
  }
}

const getters = {}

export default {
  namespaced: true,
  state,
  mutations,
  actions,
  getters
}
