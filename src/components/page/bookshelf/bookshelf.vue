<template>
	<div class="bookshelf">
		<top name='书架'></top>
		<div class="books scroll">
		<ul class="clearfloat">
			<li class="add"><icon name='add' class='icon' scale='5'></icon></li>
			<li><img src="../../../assets/logo.png" height="200" width="200"></li>
			<li><img src="../../../assets/logo.png" height="200" width="200"></li>
			<li><img src="../../../assets/logo.png" height="200" width="200"></li>
			<li><img src="../../../assets/logo.png" height="200" width="200"></li>
			<li><img src="../../../assets/logo.png" height="200" width="200"></li>
			<li><img src="../../../assets/logo.png" height="200" width="200"></li>
			<li><img src="../../../assets/logo.png" height="200" width="200"></li>
			<li><img src="../../../assets/logo.png" height="200" width="200"></li>
			<li><img src="../../../assets/logo.png" height="200" width="200"></li>
			<li><img src="../../../assets/logo.png" height="200" width="200"></li>
			<li><img src="../../../assets/logo.png" height="200" width="200"></li>
			<li><img src="../../../assets/logo.png" height="200" width="200"></li>
			<li><img src="../../../assets/logo.png" height="200" width="200"></li>
			<li><img src="../../../assets/logo.png" height="200" width="200"></li>
			<li><img src="../../../assets/logo.png" height="200" width="200"></li>
			<li><img src="../../../assets/logo.png" height="200" width="200"></li>
			<li><img src="../../../assets/logo.png" height="200" width="200"></li>
			<li><img src="../../../assets/logo.png" height="200" width="200"></li>
		</ul>
		</div>
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
	.bookshelf .books{
		position: absolute;
		top: 1rem;
		bottom: 1.5rem;
		width: 100%;
		padding: 1rem;
		overflow-y: scroll;
	}
	.bookshelf .books ul{
		width: 100%;
		height: 15.31rem;
	}
	.bookshelf .books ul li{
		float: left;
		margin: 0.2rem;
		border: 1px solid $color_gray;
		text-align: center;
		width: 2.2rem;
		height: 3.2rem;
	}
	.bookshelf .books ul li.add{
		line-height: 4.2rem;
	}
	.bookshelf .books ul li img{
		width: 100%;
		height: 100%;
		overflow:hidden;
	}
</style>
