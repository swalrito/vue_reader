<template>
	<div class="menu_bottom" v-show='showMenu'>
		<ul class="clearfloat">
			<li v-show='day' @click='tiggleModel'>
				<icon 
					name='night' scale='2'>
				</icon>
				<p>夜间模式</p>
			</li>
			<li v-show='night' @click='tiggleModel'>
				<icon 
					name='day' scale='2'>
				</icon>
				<p>白天模式</p>
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
		data:function(){
			return {
				showMenu:false,
				day:true,
				night:false
			}
		},
		methods:{
			showCatalog:function(){
				this.$root.hub.$emit("showCatalog");
			},
			tiggleModel:function(){
				this.day=!this.day;
				this.night=!this.night;
				this.$root.hub.$emit("tiggle")
			}
		},
		created(){
			this.$root.hub.$on('showMenu',()=>{
				this.showMenu=!this.showMenu;
			})
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