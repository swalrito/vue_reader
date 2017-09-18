<template>
	<div class="top">
		<div>
			<p>{{name}}</p>
		</div>
	</div>
</template>

<script type="text/javascript">
	export default{
		props:['name']
	}
</script>

<style type="text/css" lang='scss'>
$color_sliver:#B2E3F7;
	.top div{
		height: 1rem;
		line-height: 1rem;
		text-align: center;
		width: 100%;
		background-color: $color_sliver;
	}
	.top div p{
		font-size: 16px;
		letter-spacing: 6px;
	}
</style>