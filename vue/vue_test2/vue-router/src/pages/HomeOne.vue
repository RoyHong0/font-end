<template>
    <div>
        <h2>我是Home的内容</h2>
        <ul>
            <li>
                <router-link to="/home/news">news</router-link>
            </li>
            <li>
                <router-link to="/home/message">message</router-link>
            </li>
        </ul>
        <keep-alive include="NewsOne">
            <router-view></router-view>
        </keep-alive>
    </div>
</template>

<script>
export default {
    name: 'HomeOne',

}
</script>