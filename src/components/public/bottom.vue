<template>
	<div class="bottom">
		<ul>
			<li><router-link to=''>
				<icon name="bookshelf" scale='4'></icon>
				<p>书架</p>
			</router-link></li>
			<li><router-link to=''>
				<icon name="sort" scale='4'></icon>
				<p>分类</p>
			</router-link></li>
			<li><router-link to=''>
				<icon name="rank" scale='4'></icon>
				<p>排行榜</p>
			</router-link></li>
			<li><router-link to=''>
				<icon name="search" scale='4'></icon>
				<p>搜索</p>
			</router-link></li>
		</ul>
	</div>
</template>

<script type="text/javascript">
	
</script>

<style type="text/css" lang='scss'>
$color_gray:#C5C4C4;
	.bottom{
		border-top:1px solid $color_gray;
		width: 100%;
		height: 1.5rem;
		position: fixed;
		bottom: 0px;
		left: 0px;
		right: 0px;
	}
	.bottom ul{
		height:1.5rem;
		width: 100%;

	}
	.bottom ul li{
		float: left;
		padding: 0.28rem;
		height: 1.5rem;
		width: 25%;
		text-align: center;
	}
	.bottom ul li a p{
		font-family: 'SimHei';
		font-size: 26px;
		color: $color_gray;
	}
</style>