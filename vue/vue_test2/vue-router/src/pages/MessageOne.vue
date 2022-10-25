<template>
    <div>
        <ul>
            <li v-for="message in messageList" :key="message.id">
                <!-- <router-link :to="`/home/message/detail/${message.id}/${message.title}`">{{message.title}}</router-link> -->
                <router-link :to="{
                    name:'xiangqing',
                    params:{
                        id: message.id,
                        title: message.title
                    }
                }">
                    {{message.title}}
                </router-link>
                <button @click="pushShow(message)">push查看</button>
                <button @click="replaceShow(message)">replace查看</button>
            </li>
        </ul>
        <hr/>
        <router-view></router-view>
    </div>
</template>

<script>
export default {
    name: 'MessageOne',
    data() {
        return {
            messageList: [
                {id:'001',title:'消息001'},
                {id:'002',title:'消息002'},
                {id:'003',title:'消息003'}
            ]
        }
    },
    methods: {
        pushShow(m){
            // console.log(this.$router);
            this.$router.push({
                name: 'xiangqing',
                params:{
                    id: m.id,
                    title: m.title
                }
            })
        },
        replaceShow(m){
            // console.log(this.$router);
            this.$router.replace({
                name: 'xiangqing',
                params:{
                    id: m.id,
                    title: m.title
                }
            })
        }
    },
    beforeDestroy(){
        console.log('dddddd');
    }
}
</script>