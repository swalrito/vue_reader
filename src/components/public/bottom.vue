<template>
	<div class="bottom">
		<ul>
			<li><router-link to=''>书架</router-link></li>
			<li><router-link to=''>分类</router-link></li>
			<li><router-link to=''>排行榜</router-link></li>
			<li><router-link to=''>搜索</router-link></li>
		</ul>
	</div>
</template>

<script type="text/javascript">
	
</script>

<style type="text/css" lang='scss'>
	.bottom{
		border-top:1px solid #C5C4C4;
		width: 100%;
		height: 1rem;
		position: fixed;
		bottom: 0px;
		left: 0px;
		right: 0px;
	}
	.bottom ul{
		height:1rem;
		width: 100%;

	}
	.bottom ul li{
		float: left;
		height: 1rem;
		line-height: 1rem;
		width: 25%;
	}
	.bottom ul li a{
		font-family: 'SimHei';
		font-size: 26px;
		color: #C2C1C1;
	}
</style>