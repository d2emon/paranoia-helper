import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/views/HelloWorld'
import Characters from '@/views/Characters'
import Character from '@/views/Character'
import AddCharacter from '@/views/AddCharacter'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'HelloWorld',
      component: HelloWorld
    },
    {
      path: '/characters',
      name: 'Characters',
      component: Characters
    },
    {
      path: '/character/:id',
      name: 'Character',
      component: Character
    },
    {
      path: '/add-character',
      name: 'AddCharacter',
      component: AddCharacter
    }
  ]
})
