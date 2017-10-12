<template>
	<div class="return">
		<span @click=back><icon name='return' class='return_icon' scale='2.5'></icon>返回</span>
	</div>
</template>

<script type="text/javascript">
	export default{
		data(){
			return {
			}
		},
		methods:{
			back:function(){
				this.$router.go(-1);
			}		
		}
	}
</script>

<style type="text/css">
	.return{
		position: absolute;
		top: 0.2rem;
		left: 0.2rem;
		height: 0.6rem;
	}
	.return span{
		font-size: 16px;
		height: 0.6rem;
		line-height: 0.6rem;
	}
	.return span .return_icon{
		vertical-align: text-bottom;
	}
</style>