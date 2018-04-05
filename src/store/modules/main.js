const state = {
  minified: false,
  menu: [
    {
      icon: 'account_circle',
      title: 'Создание персонажей',
      to: '/add-character'
    },
    {
      icon: 'account_circle',
      title: 'Персонажи',
      to: '/characters'
    },
    {
      icon: 'bubble_chart',
      title: 'Навыки и их использование'
    },
    {
      icon: 'bubble_chart',
      title: 'Мой первый брифинг'
    },
    {
      icon: 'bubble_chart',
      title: 'Советы для предателей'
    },
    {
      icon: 'bubble_chart',
      title: 'Еще советы для предателей'
    },
    { spacer: true },
    {
      icon: 'bubble_chart',
      title: 'Добро пожаловать, Гейммастер'
    },
    {
      icon: 'bubble_chart',
      title: 'История Альфа-комплекса (Пересмотренная)'
    },
    {
      icon: 'bubble_chart',
      title: 'Правила (Необязательный раздел)'
    },
    {
      icon: 'bubble_chart',
      title: 'Создание персонажей'
    },
    {
      icon: 'bubble_chart',
      title: 'Навыки (Марк II)'
    },
    {
      icon: 'bubble_chart',
      title: 'Бой'
    },
    {
      icon: 'bubble_chart',
      title: 'Тайные общества'
    },
    {
      icon: 'bubble_chart',
      title: 'Силы мутантов'
    },
    {
      icon: 'bubble_chart',
      title: 'Оборудование'
    },
    {
      icon: 'bubble_chart',
      title: 'Возвращение с улицы'
    }
  ]
}

const mutations = {
  switchVisible: (state) => {
    state.showSidebar = !state.showSidebar
  },
  setVisibility: (state, show) => {
    state.showSidebar = show
  },
  switchMini: (state) => {
    state.minified = !state.minified
  }
}

const actions = {
}

export default {
  namespaced: true,
  state,
  mutations,
  actions
}
