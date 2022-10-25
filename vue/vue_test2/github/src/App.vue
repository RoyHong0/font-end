<template>
  <div class="container">
    <CategoryOne title="美食" :listData="foods">
      <img src="https://ts1.cn.mm.bing.net/th/id/R-C.f117b22c0c7aabb519a3c39db1a66872?rik=NL0ybBTcKlbj7Q&riu=http%3a%2f%2fimage.qianye88.com%2fpic%2f60f2a90eb13d4fa73aa12c7cdb7dca64&ehk=o4XLxMkwooYKKqSiq9ikZL3UYxEEB3sloSD9LnOv9pc%3d&risl=&pid=ImgRaw&r=0" alt="">
    </CategoryOne>
    <CategoryOne title="游戏" :listData="games" />
    <CategoryOne title="电影" :listData="films" />
  </div>
</template>

<script>
import CategoryOne from './components/CotegoryOne'

export default {
  name: "App",
  components: { CategoryOne },
  data() {
    return {
      foods: ['火锅', '烧烤', '小龙虾', '牛排'],
      games: ['红色警戒', '穿越火线', '劲舞团', '超级玛丽'],
      films: ['《教父》', '《拆弹专家》', '《你好，李焕英》', '《尚硅谷》']
    }
  },
}
</script>


<style scoped>
.container {
  display: flex;
  justify-content: space-around;
}
</style>
