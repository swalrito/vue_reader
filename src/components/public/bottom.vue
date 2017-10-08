<template>
	<div class="bottom">
		<ul>
			<li :class="{active:index==0}"><router-link to='/'>
				<icon name="bookshelf" scale='2.5' ></icon>
				<p>书架</p>
			</router-link></li>
			<li :class="{active:index==1}"><router-link to='/sort'>
				<icon name="sort" scale='2.5' ></icon>
				<p>分类</p>
			</router-link></li>
			<li :class="{active:index==2}"><router-link to='/rank'>
				<icon name="rank" scale='2.5' ></icon>
				<p>排行榜</p>
			</router-link></li>
			<li :class="{active:index==3}"><router-link to='search'>
				<icon name="search" scale='2.5' ></icon>
				<p>搜索</p>
			</router-link></li>
		</ul>
	</div>
</template>

<script type="text/javascript">
	export default{
		props:['index']
	}
</script>

<style type="text/css" lang='scss'>
$color_gray:#C5C4C4;
	.bottom{
		border-top:1px solid $color_gray;
		width: 100%;
		height: 1.5rem;
		position: absolute;
		bottom: 0px;
		left: 0px;
		right: 0px;
		background-color: #fff;
	}
	.bottom ul{
		height:1.5rem;
		width: 100%;

	}
	.bottom ul li{
		float: left;
		padding: 0.2rem;
		height: 1.5rem;
		line-height: 0.4rem;
		width: 25%;
		text-align: center;
	}
	.bottom ul li.active{
		background-color: #E5E0E0;
	}
	.bottom ul li a p{
		font-family: 'SimHei';
		font-size: 18px;
		color: $color_gray;
	}
</style>