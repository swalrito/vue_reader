<template>
	<div class="catalog" v-show='isShow'>
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
				catalog:['第一章','第一章','第一章','第一章','第一章','第一章','第一章','第一章','第一章'],
				isShow:false
			}
		},
		created(){
			this.$root.hub.$on("showCatalog",()=>{
				this.isShow=true;
				});
			this.$root.hub.$on("hideCatalog",()=>{
				this.isShow=false;
			})
		}
	}
</script>

<style type="text/css">
	.catalog{
		position:fixed;
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
		display: block;
		width: 100%;
		padding: 0.3rem 0 0.3rem 0.6rem;
		border-bottom: 1px solid #000;
	}
</style>