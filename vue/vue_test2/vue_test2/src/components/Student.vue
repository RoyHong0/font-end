<template>
	<div class="student">
		<h2>学生姓名：{{name}}</h2>
		<h2>学生性别：{{sex}}</h2>
		<h2>当前求和为：{{number}}</h2>
		<button @click="sendStudentName">点我number++</button>
    <button @click="deth">点我解绑</button>
	</div>
</template>

<script>
	export default {
		name:'Student',
    props:['getSchoolName'],
		data() {
			return {
				name:'张三',
				sex:'男',
				number:0
			}
		},
		methods: {
      sendStudentName() {
        this.getSchoolName(this.name, 10);
        this.$emit('atguigu', this.name, 20, 30, 40)
      },
      deth() {
        this.$off()
      }
		},
	}
</script>

<style scoped>
	.student{
		background-color: pink;
		padding: 5px;
		margin-top: 30px;
	}
</style>
