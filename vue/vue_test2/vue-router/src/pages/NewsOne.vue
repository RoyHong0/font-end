<template>
    <div>
        <ul>
            <li :style="{ opacity }">欢迎学习Vue</li>
            <li>news001</li><input type="text">
            <li>news002</li><input type="text">
            <li>news003</li><input type="text">
        </ul>
    </div>
</template>

<script>
export default {
    name: 'NewsOne',
    data() {
        return {
            a: false,
            opacity: 1
        }
    },
    activated(){
        console.log('new组件被激活了');
        this.timer = setInterval(() => {
            console.log('@');
            this.opacity -= 0.01
            if (this.opacity <= 0) this.opacity = 1
        }, 16)
    },
    deactivated(){
        console.log('new组件被关闭了了');
        clearInterval(this.timer)
    }
    // beforeDestroy() {
    //     console.log('gggggg');
    //     clearInterval(this.timer)
    // },
    // mounted() {
    //     this.timer = setInterval(() => {
    //         console.log('@');
    //         this.opacity -= 0.01
    //         if (this.opacity <= 0) this.opacity = 1
    //     }, 16)
    // }
}
</script>