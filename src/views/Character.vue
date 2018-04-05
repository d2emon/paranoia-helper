<template>
  <v-container fluid>
    <v-layout row>
      <v-flex xs12>
        <v-card v-if="player">
          <v-toolbar color="primary" dark>
            <v-badge
              overlap
              :color="player.clearance.color"
            >
              <span slot="badge"></span>
              <v-avatar>
                <img src="/static/computer.png" />
              </v-avatar>
            </v-badge>
            <v-toolbar-title v-text="player.fullName()" />
          </v-toolbar>
          <v-layout row>
            <v-flex xs6>
              <v-layout row>
                <v-flex xs6>
                  <v-text-field
                    label="Имя"
                    v-model="player.name"
                  />
                </v-flex>
                <v-flex xs6>
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
              </v-layout>
              <v-layout row>
                <v-flex xs6>
                  <v-text-field
                    label="Сектор"
                    maxlength="3"
                    v-model="player.sector"
                    pattern="[A-Z]{3}"
                  />
                </v-flex>
                <v-flex xs6>
                  <v-text-field
                    label="Клон"
                    type="number"
                    v-model="player.cloneNo"
                    min="1"
                    max="6"
                  />
                </v-flex>
              </v-layout>
              <v-layout row>
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
              </v-layout>
              <h3>Атрибуты</h3>
              <v-layout row>
                <v-flex xs4>
                  <v-text-field
                    label="Сила"
                    type="number"
                    v-model="player.strength"
                    min="1"
                    max="10"
                  />
                </v-flex>
                <v-flex xs8>
                  <v-layout row>
                    <v-flex xs6>
                      Рукопашный Удар
                    </v-flex>
                    <v-flex xs6>
                      {{ player.HTH() }}
                    </v-flex>
                  </v-layout row>
                  <v-layout row>
                    <v-flex xs6>
                      Способность Нести
                    </v-flex>
                    <v-flex xs6>
                      {{ player.carryingCapacity() }} кг
                    </v-flex>
                  </v-layout row>
                </v-flex>
              </v-layout>
              <v-layout row>
                <v-flex xs4>
                  <v-text-field
                    label="Выносливость"
                    type="number"
                    v-model="player.endurance"
                    min="1"
                    max="10"
                  />
                </v-flex>
                <v-flex xs8>
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
                <v-flex xs4>
                  <v-text-field
                    label="Проворство"
                    type="number"
                    v-model="player.agility"
                    min="1"
                    max="10"
                  />
                </v-flex>
                <v-flex xs8>
                  Brawling 3, melee weapons 3, dodge 6
                </v-flex>
              </v-layout>
              <v-layout row>
                <v-flex xs6>
                  <v-text-field
                    label="Хуцпа"
                    type="number"
                    v-model="player.chutzpah"
                    min="1"
                    max="10"
                  />
                </v-flex>
                <v-flex xs8>
                  Bribery 4, fast talk 4, intimidation 6
                </v-flex>
              </v-layout>
              <v-layout row>
                <v-flex xs6>
                  <v-text-field
                    label="Ловкость"
                    type="number"
                    v-model="player.dexterity"
                    min="1"
                    max="10"
                  />
                </v-flex>
                <v-flex xs8>
                  Laser pistols 6
                </v-flex>
              </v-layout>
              <v-layout row>
                <v-flex xs4>
                  <v-text-field
                    label="Механические Способности"
                    type="number"
                    v-model="player.chutzpah"
                    min="1"
                    max="10"
                  />
                </v-flex>
                <v-flex xs8>
                  Juryrigging 7
                </v-flex>
              </v-layout>
              <v-layout row>
                <v-flex xs4>
                  <v-text-field
                    label="Бодрость"
                    type="number"
                    v-model="player.moxie"
                    min="1"
                    max="10"
                  />
                </v-flex>
                <v-flex xs8>
                  Old Reckoning Cultures 4
                </v-flex>
              </v-layout>
              <v-layout row>
                <v-flex xs12>
                  Personal Equipment
                </v-flex> 
              </v-layout>
              <v-layout row>
                <v-flex xs12>
                  Plasticreds
                </v-flex> 
              </v-layout>
              <v-layout row>
                <v-flex xs6>
                  Damage Status
                </v-flex> 
                <v-flex xs6>
                  Total Armor
                </v-flex> 
              </v-layout>
            </v-flex>
            <v-flex xs6>
              <v-layout row>
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
              12345
            </v-flex>
          </v-layout>
        </v-card>
      </v-flex>
    </v-layout>
  </v-container>
</template>

<script>
export default {
  name: 'character',
  computed: {
    clearances: function () { return this.$store.state.player.securityClearances },
    services: function () { return this.$store.state.player.jobs },
    players: function () { return this.$store.state.player.players },
    player: function () { return this.$store.state.player.players[0] }
  },
  data: function () {
    return {
      s: []
    }
  },
  methods: {
    selectPlayer: function (player) {
      alert(player)
    }
  }
}
</script>
