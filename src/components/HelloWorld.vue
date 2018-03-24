<template>
  <v-container fluid>
    <v-slide-y-transition mode="out-in">
      <v-layout column align-center>
        <template
          v-for="c, i in clearances"
        >
          <div :key="'clearance' + i">
            {{ c.title }} {{ c.code }}
            <span :style="'color: ' + c.color + ';'">COLOR</span>
          </div>
          <div>
            {{ addClone({
                 name: 'Robbie',
                 clearance: c,
                 sector: 'BOT',
                 cloneNo: 2
               }).fullName() }}
          </div>
        </template>
        <template
          v-for="j, i in jobs"
        >
          <div :key="'job' + i">
            <h3>{{ j.title }} <em>{{ j.short }}</em></h3>
            <div>{{ j.description }}</div>
            {{ j }}
          </div>
        </template>
        <img src="@/assets/logo.png" alt="Vuetify.js" class="mb-5">
        <blockquote>
          &#8220;First, solve the problem. Then, write the code.&#8221;
          <footer>
            <small>
              <em>&mdash;John Johnson</em>
            </small>
          </footer>
        </blockquote>
      </v-layout>
    </v-slide-y-transition>
  </v-container>
</template>

<script>
export default {
  name: 'hello-world',
  data: function () {
    return {
      clearances: this.$store.state.player.securityClearances,
      jobs: this.$store.state.player.jobs
    }
  },
  methods: {
    addClone: function (data) {
      return this.$store.getters.addClone(data)
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1, h2 {
  font-weight: normal;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
