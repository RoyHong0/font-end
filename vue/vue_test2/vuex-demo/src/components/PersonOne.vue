<template>
    <div>
        <h1>人员列表</h1>
        <h3>Count组求和为：{{sum}}</h3>
        <input type="text" v-model="name" placeholder="请输入名字">
        <ul>
            <li @keyup.enter="add()" v-for="p in personList" :key="p.id">{{p.name}}</li>
        </ul>
        <button @click="add">添加</button>
    </div>
</template>

<script>
// import { mapState } from 'vuex'
import {nanoid} from 'nanoid'
export default {
    name:'PersonOne',
    data() {
        return {
            name: ''
        }
    },
    computed:{
        sum() {
            return this.$store.state.sum
        },  
        // ...mapState(['personList']),
        personList() {
            return this.$store.state.personList
        }
    },
    methods:{
        add(){
            const personObj = {id:nanoid(), name:this.name}
            this.$store.commit('ADD_PERSON', personObj)
            console.log(personObj);
            this.name = ''
        }
    }
}
</script>

<style>

</style>