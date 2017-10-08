<template>
	<div class="top">
			<p>{{name}}</p>
	</div>
</template>

<script type="text/javascript">
	export default{
		props:['name']
	}
</script>

<style type="text/css" lang='scss'>
$color_sliver:#B2E3F7;
	.top{
		position: fixed;
		top: 0px;
		left: 0px;
		height: 1rem;
		margin-bottom: 1rem;
		line-height: 1rem;
		text-align: center;
		width: 100%;
		background-color: $color_sliver;
	}
	.top p{
		font-size: 16px;
		letter-spacing: 6px;
	}
</style>