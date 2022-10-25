// 该文件用于创建Vuex中最为核心的store

import Vue from 'vue'
import Vuex from 'vuex'
Vue.use(Vuex)

const actions = {
    // jia:function(context, value){
    //     console.log('action中的jia被调用了', context, value);
    //     context.commit('JIA', value)
    // },
    // jiaWait:function(context, value){
    //     console.log('action中的jia被调用了', context, value);
    //     context.commit('JIAWAIT', value)
    // },
    jian: function (context, value) {
        console.log('action中的jia被调用了', context, value);
        // context.commit('JIAN', value)
        context.dispatch('demo1', value)
    },
    demo1(context, value) {
        console.log('处理了一些事情--demo1')
        context.dispatch('demo2', value)
    },
    demo2(context, value) {
        console.log('处理了一些事情--demo2')
        if (context.state.sum % 2) {
            context.commit('JIA', value)
        }
    }
}

const mutations = {
    JIA(state, value) {
        console.log('mutations中的JIA被调用了', state, value);
        state.sum += value
    },
    JIAN(state, value) {
        console.log('mutations中的JIA被调用了', state, value);
        state.sum -= value
    },
    JIAWAIT(state, value) {
        console.log('mutations中的JIA被调用了', state, value);
        setTimeout(() => {
            state.sum += value
        }, 500)
    },
    ADD_PERSON(state, value) {
        console.log('mutations中的JIA被调用了', state, value);
        state.personList.unshift(value)
    }
}

const state = {
    sum: 0,
    school: '东华理工大学',
    subject: '数学',
    personList: [
        { id: '001', name: '张三' }
    ]
}

const getters = {
    bigSum(state) {
        return state.sum * 10
    }
}

export default new Vuex.Store({
    actions,
    mutations,
    state,
    getters
})

