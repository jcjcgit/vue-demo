<template>
  <div class="hello">
      <h1>count:{{count}}</h1>
      <h1>gender:{{gender}}</h1>
      <h1>age:{{age}}</h1>
      <h1>hello:{{f}}</h1>
      <h1>countMsg: {{countMsg}}</h1>
      <h1>doneTodos: {{doneTodos[0].done}}</h1>
      <h1>dontTodosCount: {{doneTodosCount}}</h1>
      <button @click="handleClick">change count</button>
      <button @click="changeGender({sex: 'male'})">change gender</button>
      <button @click="Age(25)">change age</button>
      
  </div>
</template>

<script>
import {mapState} from 'vuex'
import {mapGetters} from 'vuex'
import {mapMutations} from 'vuex'
import {mapActions} from 'vuex'

export default {
  name: 'HelloWorld',
  data () {
    return {
      msg: 'Welcome to Your Vue.js App'
    }
  },
  methods: {
    handleClick () {
      const num = 10;
      this.$store.commit('add', {num: 10});
      // 下面是以对象的方式触发mutation事件 效果同上
      // this.$store.commit({ 
      //   type:'add',
      //   num:10
      // })
    },

    ...mapMutations(['changeGender']), //通过mapMutations 将mutation里事件映射到子组件

    ...mapMutations({
      Age: "changeAge"
    }),

    ...mapActions(['actionA']) //将this.actionA 映射到this.$store.dispatch('actionA')
  },
  computed: {
    countMsg () {
      return this.msg
    },

  // mapState 返回的是一个对象 ，所有用扩展运算符展开 可以可其他computed属性混用
    ...mapState({
      count: 'count',
      age: 'age',
      gender: state => state.gender,
      f (state) {
        return this.msg + state.gender
        //  this 指向vue实例
      }
    }),
    //键和值相同时，可以传入一个字符串数组
    ...mapGetters(['doneTodos', 'doneTodosCount']) 
  }

}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
