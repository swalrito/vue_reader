<template>
	<div class="menu_top" v-show='showMenu'>
		<p>{{book_name}}</p>
		<back></back>
	</div>
</template>

<script type="text/javascript">
	import back from '../../public/back.vue'
	export default{
		data:function(){
			return {
				showMenu:false
			}
		},
		props:['book_name'],
		components:{
			back
		},
		created(){
			this.$root.hub.$on('showMenu',()=>{
				this.showMenu=!this.showMenu;
			})
		}
	}
</script>

<style type="text/css">
	.menu_top{
		position: fixed;
		top: 0;
		left: 0;
		background-color: #000000;
		font-size: 16px;
		color: #fff;
		width: 100%;
		height: 1rem;
	}
	.menu_top p{
		margin-top: 0.2rem;
	}
</style>