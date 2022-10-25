<template>
    <div>
        <h1>当前求和为：{{ sum }}</h1>
        <h3>当前求和放大十倍为：{{ bigSum }}</h3>
        <h3>我在{{ $store.state.school }}, 学习{{ subject }}</h3>
        <h3>下方组件的总人数是{{personList.length}}</h3>
        <select v-model.number="n">
            <option value="1">1</option>
            <option value="2">2</option>
            <option value="3">3</option>
        </select>
        <button @click="increment(n)">+</button>
        <button @click="decrement(n)">-</button>
        <button @click="incrementOdd(n)">当前求和为奇数再加</button>
        <button @click="incrementWait(n)">等一等再加</button>
    </div>
</template>
    
<script>
import { mapGetters, mapMutations, mapState } from 'vuex'
export default {
    name: 'CountOne',
    data() {
        return {
            n: 1,
            // sum: 0
        }
    },
    methods: {
        // increment() {
        //     // this.sum += this.n
        //     this.$store.commit('JIA', this.n)
        // },
        // decrement() {
        //     this.$store.commit('JIAN', this.n)
        // },
        ...mapMutations({increment:'JIA',decrement:'JIAN', incrementWait:'JIAWAIT'}),
        // ...mapActions({}),
        incrementOdd() {
            // if(this.$store.state.sum % 2){
            //     this.$store.commit('JIA', this.n)
            // }
            this.$store.dispatch('jian', this.n)
        },
        // incrementWait() {
        //     this.$store.commit('JIAWAIT', this.n)
        // },
    },
    computed: {
        // sum() {
        //     return this.$store.state.sum
        // },
        // bigSum() {
        //     return this.$store.state.bigSum
        // },
        // school() {
        //     return this.$store.getters.school
        // },
        // subject() {
        //     return this.$store.state.subject
        // },
        ...mapState(['sum', 'school', 'subject','personList']),
        ...mapGetters({bigSum:'bigSum'}),
    },
    mounted() {
        console.log('Count', this.$store);
        // const x = mapState({sum: 'sum', })
        // console.log(x);
    }
}
</script>

<style>
button {
    margin-left: 5px;
}
</style>