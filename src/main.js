// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import Vuex from 'vuex'

Vue.config.productionTip = false;

Vue.use(Vuex)

const jc = new Vuex.Store({
  state: {
    count: 0,
    gender: 'female',
    age: 24,
    todos: [
      { id: 1, text: '...', done: true },
      { id: 2, text: '...', done: false }
    ]
  },
  getters: {
    // getters相当于vue实例的computed 
    doneTodos: state => {
      return state.todos.filter(todo => todo.done)
    },
    doneTodosCount: (state, getters) => {
      // 第一个参数为state，第二个参数是getters对象
      return getters.doneTodos.length
    }
  },
  // 通过mutation来改变state状态 不能直接调用mutation里的事件 要通过commit来触发 里面相当于是注册了事件，
  mutations: {
    add (state, obj) {
      state.count = obj.num;
    },
    changeGender (state, obj) {
      state.gender = obj.sex
    },
    changeAge (state, age) {
      state.age = age
    }
  },

  actions: {
    //action里函数接收一个context对象，拥有和store实例相同属性和方法的对象 这里使用es6解构复制
    //通过action里方法来触发mutation 和直接触发mutation不同的是action里可以进行异步操作
    //在组件实例里通过store.dispatch()来触发action
    actionA ({commit}) {
      commit ('add')
    }
  }
})


/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store: jc,
  components: { App },
  template: '<App/>'
})
