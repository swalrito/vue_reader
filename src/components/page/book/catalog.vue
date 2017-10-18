<template>
	<div class="catalog">
		<div class="catalog_top clearfloat">
			<span class="catalog_name">一念永恒：目录</span>
			<span class="sort">
				<icon 
					name='downsort'
					scale='1.8'>
				</icon>
				<span>顺序</span>
			</span>
			<span class="sort">
				<icon 
					name='upsort'
					scale='1.8'>
				</icon>
				<span>逆序</span>
			</span>
		</div>
		<ul class="catalog_content">
			<li v-for='item in catalog'>{{item}}</li>
		</ul>
	</div>
</template>

<script type="text/javascript">
	export default {
		data:function (){
			return {
				catalog:['第一章','第一章','第一章','第一章','第一章','第一章','第一章','第一章','第一章']
			}
		}
	}
</script>

<style type="text/css">
	.catalog{
		position:absolute;
		top: 0;
		left: 0;
		z-index: 5;
		height: 100%;
		width: 80%;
		overflow-y: scroll;
		background-color: #fff;
		color: #000;
		padding: 0.2rem;
	}
	.catalog span{
		font-size: 16px;
	}
	.catalog span.catalog_name{
		float: left;
	}
	.catalog span.sort{
		float: right;
		margin-right: 0.4rem;

	}
	.catalog span.sort span{
		margin-left: 0.05rem;
		vertical-align: top;
	}
	.catalog ul{
		font-size: 16px;
		text-align: left;
	}
	.catalog ul li{
		padding: 0.3rem 0 0.3rem 0.6rem;
		border-bottom: 1px solid #000;
	}
</style>