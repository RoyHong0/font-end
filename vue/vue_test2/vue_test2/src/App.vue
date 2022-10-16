<template>
	<div class="app">
		<h1>{{msg}}，学生姓名是:{{studentName}}</h1>
		<Student :getSchoolName="getSchoolName"  @atguigu="getStudentName" ref='getMyName'/>
	</div>
</template>

<script>
	import Student from './components/Student.vue'
	export default {
		name:'App',
		components:{Student},
		data() {
			return {
				msg:'你好啊！',
				studentName:''
			}
		},
		methods: {
      getSchoolName(name, ...params) {
        console.log('App收到了学校名：',name,params)
      },
      getStudentName(name, ...params) {
        console.log('收到了学生名:',name,params);
      }
		},
    mounted() {
      this.$refs.getMyName.$on
    }
	}
</script>

<style scoped>
	.app{
		background-color: gray;
		padding: 5px;
	}
</style>
