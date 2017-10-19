<template>
	<div class="menu_bottom">
		<ul class="clearfloat">
			<li>
				<icon 
					name='night' scale='2'>
				</icon>
				<p>夜间模式</p>
			</li>
			<li @click='showCatalog'>
				<icon
					name='catalog' scale='2'>
				</icon>
				<p>目录</p>
			</li>
		</ul>
	</div>
</template>

<script type="text/javascript">
	export default{
		methods:{
			showCatalog:function(){
				this.$root.hub.$emit("showCatalog");
			}
		}
	}
</script>

<style type="text/css">
	.menu_bottom{
		position: fixed;
		bottom: 0;
		left: 0;
		width: 100%;
		height: 1.5rem;
		background-color: #000;
		color:#fff;
	}
	.menu_bottom ul{
		padding: 0.3rem 1rem 0.3rem 1rem;
		width: 100%;
	}
	.menu_bottom ul li{
		float: left;
		width: 50%
		}
	</style>