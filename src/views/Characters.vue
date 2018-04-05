<template>
  <v-container fluid>
    P::{{ players }}
    <v-layout row>
      <v-flex xs12>
        <v-card>
          <v-toolbar color="primary" dark>
            <v-toolbar-title v-text="'Персонажи'" />
          </v-toolbar>
          <v-list two-line>
            <template
              v-for="(p, id) in players"
            >
              <v-list-tile
                avatar
                :key="id"
                :to="'/character/' + id"
              >
                <v-list-tile-avatar>
                  <v-badge
                    overlap
                    :color="p.clearance.color"
                  >
                    <span slot="badge"></span>
                    <v-avatar>
                      <img src="/static/computer.png" />
                    </v-avatar>
                  </v-badge>
                </v-list-tile-avatar>
                <v-list-tile-content>
                  <v-list-tile-title>
                    {{ p.fullName() }}
                  </v-list-tile-title>
                  <v-list-tile-sub-title v-text="p" />
                </v-list-tile-content>
              </v-list-tile>
            </template>
          </v-list>
        </v-card>
      </v-flex>
    </v-layout>
  </v-container>
</template>

<script>
export default {
  name: 'characters',
  computed: {
    clearances: function () { return this.$store.state.player.securityClearances },
    services: function () { return this.$store.state.player.jobs },
    players: function () { return this.$store.state.player.players }
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
