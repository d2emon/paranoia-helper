const state = {
  securityClearances: [
    { title: 'Infrared', level: 0, color: '#000000', code: '' },
    { title: 'Red', level: 10, color: '#ff0000', code: 'R' },
    { title: 'Orange', level: 20, color: '#ff8800', code: 'O' },
    { title: 'Yellow', level: 30, color: '#ffff00', code: 'Y' },
    { title: 'Green', level: 40, color: '#00ff00', code: 'G' },
    { title: 'Blue', level: 50, color: '#00ffff', code: 'B' },
    { title: 'Indigo', level: 60, color: '#0000ff', code: 'I' },
    { title: 'Violet', level: 70, color: '#ff00ff', code: 'V' },
    { title: 'Ultraviolet', level: 100, color: '#ffffff', code: 'U' }
  ],
  jobs: [
    {
      title: 'Troubleshooter',
      short: '',
      description: ''
    },
    {
      title: 'Вооруженные Силы',
      short: 'ВС',
      description: 'Задача этой Группы Служащих - защита Альфа Комплекса ' +
        'от внешних угроз и Коммунистов. Они вытаскивают большие пушки ' +
        'и делают дыры в том, что стоит у них на пути и позже пишут ' +
        'отчеты. Военные испытывают неприязнь к Внутренней Безопасности. ' +
        'ВнутБез (смотри ниже) считают, что Вооруженные Силы слишком... ' +
        'открыто действуют, а ВС считают, что ВнутБез - это кучка шпиков. ' +
        'Если вы попали в Вооруженных Силах, значит вы были большими и ' +
        'жесткими - или какой-то кнопкодав случайно направил вас туда.'
    },
    {
      title: 'Центральный Процессор',
      short: 'ЦП',
      description: 'Центральный процессор - это бюрократическая машина ' +
        'Альфа Комплекса. Это администраторы, секретари и чиновники всего ' +
        'Комплекса. Если фактоид существует, то кто-то из ЦП знает об ' +
        'этом - хотя получить доступ к фактоиду может быть отдельной ' +
        'задачей. Если вы были в ЦП, то вы, вероятно, много знаете о ' +
        'поиске и хранении информации - не говоря уже о подаче и прочем. ' +
        'Некоторые агенты ЦП используют свой доступ к знаниям для ' +
        'продвижения по службе.'
    },
    {
      title: 'Сохранность и Благоустройство Жилья и Контроль Разума',
      short: 'СБЖ&КР',
      description: 'Эти ребята чинят то, что сломали Вооруженные Силы. Они ' +
      'несут ответственность за поддержание Альфа Комплекса в чистоте, а ' +
      'также бесперебойную работу. Будучи Траблшутером вы не особо ' +
      'уважаете этих гордых дворников, но ведь сам Компьютер назначил их ' +
      'на эту работу. Работа СБЖ&КР частично пересекается с работой ' +
      'Энергетических и Технических Служб (смотри ниже), поэтому между ' +
      'ними существует определенное соперничество. Если вы были в HPD&MC. ' +
      'вы, скорее всего, считаете себя экспертом по «тому, как все ' +
      'работает» в Альфа Комплексе - только Компьютер знает как они будут ' +
      'справляться без вас.'
    },
    {
      title: 'Внутренняя Безопасность',
      short: 'ВнутБез',
      description: 'Клоны на этой службе также состоят и на другой - они ' +
      'часто состоят в Вооруженных Силах, ПЛК или на любой другой службе ' +
      'чтобы собирать информацию и данные о предательских действиях. «Если ' +
      'есть предатель, ВнутБез найдет его, а если нет, мы найдем двух!» - ' +
      'это девизом агента внутренней безопасности. Клоны ВнутБез не любят ' +
      'Вооруженные Силы - представители последних хороши лишь для того, ' +
      'чтобы делать дырки. Они не смогли найти предателя с Предателе-' +
      'Чувствительным-Самонаводящимся-Оцелотом(ПЧСО)! Если вы служили во ' +
      'ВнутБез, поздравляю - вы все еще находитесь на Службе!'
    },
    {
      title: 'Энергетическая Служба',
      short: 'ЭС',
      description: 'Эта служба отвечает за поддержание работы реакторов и ' +
      'энергетическое обеспечение Альфа Комплекса. Они являются ' +
      'техническими специалистами и, как професионалы, они недолюбливают ' +
      '«примитивную механическую» работу Технических Служб. Они также ' +
      'считают, что ребята из СБЖ&КР - это просто универсалы, которые не ' +
      'могут отличить конец индукционного кабеля от своих пальцев. Если вы ' +
      'состояли в Энергетической Службе, вы знаете и любите все виды энергии.'
    },
    {
      title: 'Производство, Логистика и Коммивояжеры',
      short: 'ПЛК',
      description: 'Эта служба отвечает за сельскохозяйственное и ' +
      'промышленное производство а так же за распределение ресурсов. Это ' +
      'Корпус Квартирмейстеров Альфа Комплекса. Они часто завидуют СБЖ&КР, ' +
      'потому что более крупная группа является «сердцем и мозгом» Альфа ' +
      'Комплекса, в то время как ПЛК выпала сомнительная честь быть его ' +
      'желудком и кишечником.'
    },
    {
      title: 'Исследования и Разработка',
      short: 'И&Р',
      description: 'Для этих трудолюбивых клонов все является ' +
      'экспериментом. Если представитель Вооруженных Сил ищет, чем он ' +
      'сможет делать большие дырки, ему стоит взглянуть на новейшую ' +
      'лабораторию И&Р - здесь есть все на любой вкус! Клоны на службе ' +
      'И&Р - это ученые, и они видят всех остальных в качестве ' +
      'лабораторных крыс. Если вы были в И&Р, вам нравятся эксперименты - ' +
      'чем экзотермичнее, тем лучше.'
    },
    {
      title: 'Техническая Служба',
      short: 'Тех',
      description: 'Техи являются механиками и роботами-ремонтниками. Они ' +
      'производят и поддерживают все системы и технологии в Альфа ' +
      'Комплексе. Эти клоны используют энергию от Энергетических Служб и ' +
      'материалы от СБЖ&КР и используют их для создания машин и ' +
      'механизмов. Ребята из Технической Службы не любят психов из И&Р - ' +
      'Техи концентрируются на стандартном оборудовании, их оскорбляет, ' +
      'что свиньи из И&Р постоянно находятся в центре внимания из-за их ' +
      'больших взрывов. Если вы были на Технической Службе, вы, вероятно, ' +
      'техногик.'
    }
  ],
  treasons: [
    '1.\tThe clone uses an unregistered mutant power.',
    '2.\tThe clone is a member of a Secret Society.',
    '3.\tThe clone violates his security clearance.',
    '4.\tThe Computer says.'
  ],
  player: null,
  pos: null,

  messages: [],

  sysbuf: '',
  rdQd: false
}

const getters = {
  addClone: state => data => {
    return {
      name: data.name,
      clearance: data.clearance,
      sector: data.sector,
      cloneNo: data.cloneNo,
      fullName: function () {
        let res = this.name
        if (this.clearance.code) res += '-' + this.clearance.code
        return res + '-' + this.sector + '-' + this.cloneNo
      },
      nextClone: function () {
        this.cloneNo++
      }
    }
  },
  messages: (state) => {
    if (!state.player) return false
    return state.player.countMails()
  },
  items: (state) => {
    if (!state.player) return false
    if (!state.player.items) return false
    return state.player.items.length
  },
  day: (state) => {
    if (!state.player) return false
    return state.player.day
  },

  play: state => {
    if (!state.player) return false
    if (!state.player.play) return false
    return state.player.play
  },
  offer: state => {
    if (!state.player.offers.length) return {}
    return {
      show: true,
      offer: state.player.offers[0],
      offered: true
    }
  },

  prompt: state => {
    let prmpt = '\r'
    // if (state.debugMode) prmpt += '#'
    // if (state.lev > 9) prmpt += '----'

    // if (state.convflg === 0) prmpt += '>'
    // else if (state.convflg === 1) prmpt += '\"'
    // else if (state.convflg === 2) prmpt += '*'
    // else prmpt += '?'
    prmpt += '>'

    // if (state.vis) prmpt = '(' + prmpt + ')'
    return prmpt
  },
  progname: state => {
    /*
    if (state.vis > 9999) {
      return '-csh'
    }
    if (state.vis === 0) {
      return '   --}----- ABERMUD -----{--     Playing as ' + state.name
    }
    */
  }
}

const mutations = {
  setPlayer: (state, value) => { state.player = value },

  addItem: (state, item) => { state.player.addItem(item) },
  playerTurn: (state) => { state.player.turn() },
  showSplash: (state) => { state.player.showSplash() },

  resetRdQd: (state) => { state.rdQd = false },

  textBfr: (state, value) => {
    state.sysbuf += value
  },
  input: (state, value) => {
    state.sysbuf += '<div class="iskb">' + value + '</div>'
  },
  clearBfr: state => { state.sysbuf = '' },

  processMsgs: state => { state.player.processMessages() },

  setPos: (state, value) => { state.pos = value }
}

const actions = {
  load: function (context, id) {
    context.dispatch('update')
  },
  next: function (context) {
    context.dispatch('sendmsg', { text: 'Next Turn' })
    context.commit('nextPlayer')
    context.dispatch('load', 0)
    context.commit('playerTurn')
    // ---------------------------------------------
    if (context.state.rdQd) context.dispatch('processMsgs')
    context.commit('resetRdQd')
    context.dispatch('showBfr')
  },
  update: function (context) {
    // if (!context.state.player) { return }
    // context.fieldDate = context.state.player.fieldDate.id
    // context.fieldName = context.state.player.fieldDate.caption

    // this.player.bills = this.players[tabIndex].total.bills
    // fmField.cdField.Day = context.state.player.day
  },
  useDay: function (context) {
    if (!context.state.player) { return }
    // this.player.fieldDate.useDay()
    context.dispatch('update')
  },

  showBfr: function (context) {
    // Output for log
    // Output for snoop
    console.log(context.state.sysbuf)
    /* clear buffer */
    context.commit('clearBfr')
    // View my snoops
  },
  sendmsg: function (context, msg) {
    // TOP BEGIN
    context.commit('input', msg.text)
    context.dispatch('processMsgs', false)
    // Apply convflg
    // Apply curmode
    context.dispatch('doAction', msg)
    // Fight counter
    // TOP END
  },
  doAction: function (context, msg) {
    console.log(msg)
  },
  processMsgs: function (context, interrupt) {
    if (!context.state.player) return
    if (!context.state.pos) context.commit('resetPos')
    // Messages.process(context.state.pos)
    context.commit('processMsgs')
    context.commit('resetPos')

    context.dispatch('eorte', interrupt)
    // Reset summon data
  },
  eorte: function (context, interrupt) {
    // If time => interrupt
    // Set interruption time

    // Invisibility counter
    // Calibrate if needed
    // Summon if summoned
    // Next fight round (interrupt)
    // Item on worn
    // forchk()
    // Hiccup if drunk
  },

  alarm: function (context) {
    context.dispatch('processMsgs', true)
    // on_timing()
    context.dispatch('showBfr')
  }
}

export default {
  state,
  getters,
  mutations,
  actions
}
