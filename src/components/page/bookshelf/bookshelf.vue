<template>
	<div class="bookshelf">
		<top name='书架'></top>
		<ul class="clearfloat">
			<li><img src="../../../assets/logo.png" height="200" width="200"></li>
			<li class="add"><icon name='add' class='icon' scale='5'></icon></li>
		</ul>
	</div>
</template>

<script type="text/javascript">
import top from '../../public/top.vue'
	export default{
		components:{
			top
		}
	}
</script>

<style type="text/css" lang='scss'>
$color_gray:#C5C4C4;
	.bookshelf{
		width: 100%;
		height: 100%;
	}
	.bookshelf ul{
		padding: 0.53rem;
	}
	.bookshelf ul li{
		float: left;
		margin: 0.15rem;
		border: 1px solid $color_gray;
		text-align: center;
		width: 2.13rem;
		height: 3.2rem;
	}
	.bookshelf ul li.add{
		line-height: 4.2rem;
	}
	.bookshelf ul li img{
		width: 100%;
		height: 100%;
		overflow:hidden;
	}
</style>
