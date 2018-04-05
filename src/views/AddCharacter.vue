<template>
  <v-container fluid>
    <v-layout column align-center>
      {{ players }}
      <v-stepper v-model="step">
        <v-stepper-header>
          <v-stepper-step step="1" :complete="step > 1">Имя</v-stepper-step>
          <v-divider></v-divider>
          <v-stepper-step step="2" :complete="step > 2">Аттрибуты</v-stepper-step>
          <v-divider></v-divider>
          <v-stepper-step step="3" :complete="step > 3">Базовые Навыки</v-stepper-step>
          <v-divider></v-divider>
          <v-stepper-step step="4" :complete="step > 4">Служба</v-stepper-step>
          <v-divider></v-divider>
          <v-stepper-step step="5" :complete="step > 5">Навыки</v-stepper-step>
          <v-divider></v-divider>
          <v-stepper-step step="6" :complete="step > 6">Мутации</v-stepper-step>
          <v-divider></v-divider>
          <v-stepper-step step="7" :complete="step > 7">Тайные Общества</v-stepper-step>
          <v-divider></v-divider>
          <v-stepper-step step="8">Оборудование, Вещи и Ерунда</v-stepper-step>
        </v-stepper-header>
        <v-stepper-items class="character-creation">
          <v-stepper-content step="1">
            <v-card class="mb-5">
              <v-card-text>
                <h4>Создайте имя для своего персонажа:</h4>
                <v-container fluid>
                  <v-layout row>
                    <v-flex xs7>
                      <v-text-field
                        label="Имя"
                        v-model="player.name"
                      />
                    </v-flex>
                    <v-flex xs1>
                      <v-select
                        label="Доступ"
                        :items="clearances"
                        v-model="player.clearance"
                        item-text="title"
                        max-height="auto"
                        autocomplete
                      >
                        <template slot="selection" slot-scope="data">
                          <v-badge :color="data.item.color">
                            <span slot="badge">{{ data.item.code }}</span>
                          </v-badge>
                        </template>
                        <template slot="item" slot-scope="data">
                          <v-list-tile-action>
                            <v-badge :color="data.item.color">
                              <span slot="badge"></span>
                            </v-badge>
                          </v-list-tile-action>
                          <v-list-tile-content>
                            {{ data.item.title }}
                          </v-list-tile-content>
                        </template>
                      </v-select>
                    </v-flex>
                    <v-flex xs3>
                      <v-text-field
                        label="Сектор"
                        maxlength="3"
                        v-model="player.sector"
                        pattern="[A-Z]{3}"
                      />
                    </v-flex>
                    <v-flex xs1>
                      <v-text-field
                        label="Клон"
                        type="number"
                        v-model="player.cloneNo"
                        min="1"
                        max="6"
                      />
                    </v-flex>
                  </v-layout>
                </v-container>
                <h1>{{ player.fullName() }}</h1>
              </v-card-text>
              <v-card-actions>
                <v-spacer />
                <v-btn color="primary" @click.native="nextStep">Вперед</v-btn>
              </v-card-actions>
            </v-card>
          </v-stepper-content>
          <v-stepper-content step="2">
            <v-card class="mb-5">
              <v-card-text>
                <v-container fluid>
                  <v-layout row>
                    <v-flex xs6>
                      <v-text-field
                        label="Сила"
                        type="number"
                        v-model="player.strength"
                        min="1"
                        max="10"
                      />
                    </v-flex>
                    <v-flex xs6>
                      <v-layout row>
                        <v-flex xs6>
                          Способность Нести
                        </v-flex>
                        <v-flex xs6>
                          {{ player.carryingCapacity() }} кг
                        </v-flex>
                      </v-layout row>
                      <v-layout row>
                        <v-flex xs6>
                          Рукопашный Удар
                        </v-flex>
                        <v-flex xs6>
                          {{ player.HTH() }}
                        </v-flex>
                      </v-layout row>
                    </v-flex>
                  </v-layout>
                  <v-layout row>
                    <v-flex xs6>
                      <v-text-field
                        label="Проворство"
                        type="number"
                        v-model="player.agility"
                        min="1"
                        max="10"
                      />
                    </v-flex>
                    <v-flex xs6>
                      <v-text-field
                        label="Ловкость"
                        type="number"
                        v-model="player.dexterity"
                        min="1"
                        max="10"
                      />
                    </v-flex>
                  </v-layout>
                  <v-layout row>
                    <v-flex xs6>
                      <v-text-field
                        label="Выносливость"
                        type="number"
                        v-model="player.endurance"
                        min="1"
                        max="10"
                      />
                    </v-flex>
                    <v-flex xs6>
                      <v-layout row>
                        <v-flex xs6>
                          Мачо
                        </v-flex>
                        <v-flex xs6>
                          {{ player.macho() }}
                        </v-flex>
                      </v-layout row>
                      <v-layout row>
                        <v-flex xs6>
                          Уровень Ранений
                        </v-flex>
                        <v-flex xs6>
                          {{ player.woundLevels() }}
                        </v-flex>
                      </v-layout row>
                    </v-flex>
                  </v-layout>
                  <v-layout row>
                    <v-flex xs6>
                      <v-text-field
                        label="Бодрость"
                        type="number"
                        v-model="player.moxie"
                        min="1"
                        max="10"
                      />
                    </v-flex>
                    <v-flex xs6>
                      <v-text-field
                        label="Хуцпа"
                        type="number"
                        v-model="player.chutzpah"
                        min="1"
                        max="10"
                      />
                    </v-flex>
                  </v-layout>
                  <v-layout row>
                    <v-flex xs6>
                      <v-text-field
                        label="Механические Способности"
                        type="number"
                        v-model="player.chutzpah"
                        min="1"
                        max="10"
                      />
                    </v-flex>
                    <v-flex xs6>
                      <v-text-field
                        label="Мощность"
                        type="number"
                        v-model="player.chutzpah"
                        min="1"
                        max="10"
                      />
                    </v-flex>
                  </v-layout>
                  <v-layout row>
                  </v-layout>
                  <v-layout row>
                  </v-layout>
                </v-container>
                <div>
                  Перейдите в раздел, обозначенный «Атрибуты», и переверните десятигранную матрицу для каждого атрибута и
                  запишите результат - или, если ваш гейммастер говорит, что все в порядке, возьмите 60 очков и раздайте
                  их среди восьми атрибутов, причем значение 10 является максимально возможным и одно
                  будучи самым низким. Если вы бросаете кости, вы можете перепрограммировать любой атрибут по вашему выбору - 
                  но вы должны взять второй результат, даже если он ниже первого.
                </div>
                <div>
                  Обратитесь к диаграмме прочности (ниже), чтобы определить «Несущий инструмент устранения неполадок»
                  Capacity "и" HTH Damage "(HTH означает рукопашный бой) stat.
                </div>
                <div>
                  Проверьте таблицу выносливости (ниже), чтобы определить, как «Мачо» ваш персонаж,
                  и сколько «Раненных уровней» он может принять перед смертью.
                </div>
              <template
                v-for="j, i in services"
              >
                <div :key="'job' + i">
                  <h3>{{ j.title }} <em>{{ j.short }}</em></h3>
                  <div>{{ j.description }}</div>
                  {{ j }}
                </div>
              </template>
              </v-card-text>
              <v-card-actions>
                <v-btn color="primary" @click.native="prevStep">Назад</v-btn>
                <v-spacer />
                <v-btn color="primary" @click.native="nextStep">Вперед</v-btn>
              </v-card-actions>
            </v-card>
          </v-stepper-content>
          <v-stepper-content step="3">
            <v-card class="mb-5">
              <v-card-text>
                <div>
                  Запишите «Базы навыков» вашего персонажа в разделе «Навыки» на листе персонажа (a
                  База навыков равна половине соответствующего атрибута персонажа - закругленная).
                </div>
              </v-card-text>
              <v-card-actions>
                <v-btn color="primary" @click.native="prevStep">Назад</v-btn>
                <v-spacer />
                <v-btn color="primary" @click.native="nextStep">Вперед</v-btn>
              </v-card-actions>
            </v-card>
          </v-stepper-content>
          <v-stepper-content step="4">
            <v-card class="mb-5">
              <v-card-text>
                <v-select
                  label="Служба"
                  :items="services"
                  v-model="player.services"
                  multiple
                  chips
                  item-text="title"
                  item-value="id"
                >
                </v-select>
                <div>
                  Определите группу обслуживания вашего персонажа в таблице «Группа обслуживания» ниже.
                  затем перейдут на то, какие навыки ваш персонаж узнает как часть этой группы обслуживания
                  (Смотри ниже).
                </div>
              </v-card-text>
              <v-card-actions>
                <v-btn color="primary" @click.native="prevStep">Назад</v-btn>
                <v-spacer />
                <v-btn color="primary" @click.native="nextStep">Вперед</v-btn>
              </v-card-actions>
            </v-card>
          </v-stepper-content>
          <v-stepper-content step="5">
            <v-card class="mb-5">
              <v-card-text>
                <div>
                  Выберите оставшиеся навыки, как описано в разделе «Навык навыка» ниже.
                </div>
              </v-card-text>
              <v-card-actions>
                <v-btn color="primary" @click.native="prevStep">Назад</v-btn>
                <v-spacer />
                <v-btn color="primary" @click.native="nextStep">Вперед</v-btn>
              </v-card-actions>
            </v-card>
          </v-stepper-content>
          <v-stepper-content step="6">
            <v-card class="mb-5">
              <v-card-text>
                <div>
                  Получите ваш gamemaster, чтобы помочь вам определить, есть ли у вас сила мутантов и что это.
                </div>
              </v-card-text>
              <v-card-actions>
                <v-btn color="primary" @click.native="prevStep">Назад</v-btn>
                <v-spacer />
                <v-btn color="primary" @click.native="nextStep">Вперед</v-btn>
              </v-card-actions>
            </v-card>
          </v-stepper-content>
          <v-stepper-content step="7">
            <v-card class="mb-5">
              <v-card-text>
                <div>
                  Получите своего геймера, чтобы помочь вам определить, находитесь ли вы в тайном обществе и что это общество.
                </div>
              </v-card-text>
              <v-card-actions>
                <v-btn color="primary" @click.native="prevStep">Назад</v-btn>
                <v-spacer />
                <v-btn color="primary" @click.native="nextStep">Вперед</v-btn>
              </v-card-actions>
            </v-card>
          </v-stepper-content>
          <v-stepper-content step="8">
            <v-card class="mb-5">
              <v-card-text>
                <div>
                  Спросите у gamemaster, какое оборудование и какие у вас есть средства устранения неполадок,
                  затем скулить и пресмыкаться, пока геммастер не даст вам немного больше или не попросит вас закрыть
                  черт возьми.
                </div>
              </v-card-text>
              <v-card-actions>
                <v-btn color="primary" @click.native="prevStep">Назад</v-btn>
                <v-spacer />
              </v-card-actions>
            </v-card>
          </v-stepper-content>
        </v-stepper-items>
      </v-stepper>
    </v-layout>
  </v-container>
</template>

<script>
export default {
  name: 'add-character',
  computed: {
    clearances: function () { return this.$store.state.player.securityClearances },
    players: function () { return this.$store.state.player.players },
    services: function () { return this.$store.state.player.jobs }
  },
  data: function () {
    console.log(this.$store)
    console.log(this.clearances)
    var clearances = this.$store.state.player.securityClearances
    console.log(clearances)
    return {
      s: [],
      player: this.addClone({}),
      step: 0
    }
  },
  methods: {
    addClone: function (data) {
      return this.$store.getters.addClone(data)
    },
    prevStep: function () {
      this.step--
      if (this.step < 0) this.step = 0
    },
    nextStep: function () {
      this.step++
      if (this.step > 11) this.step = 11
    }
  }
}
</script>

<style scoped>
.character-creation .card__text {
  height: 300px;
  overflow: auto;
}
</style>
