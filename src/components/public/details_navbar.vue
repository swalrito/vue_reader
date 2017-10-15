<template>
	<div class="nav_bar">
		<ul class="clearfloat">
			<li 
			v-for='(item,index) in items' 
			:class="{active:itemIndex==index}"
			@click=changeActive(index)>{{item}}</li>
		</ul>
	</div>
</template>

<script type="text/javascript">
	export default{
		data(){
			return {
				items:['热门','新书','好评','完结'],
				itemIndex:'0'
			}
		},
		methods:{
			changeActive(index){
				this.itemIndex=index;
			}
		}
	}
</script>

<style type="text/css">
	.nav_bar{
		width: 100%;
		height: 1rem;
		line-height: 1rem;
		border-bottom: 1px solid #C5C4C4;
		font-size: 16px;
		background-color: #fff;
	}
		.nav_bar ul li{
		float: left;
		margin-left: 0.2rem;
	}
	.nav_bar ul li.active{
		color:#2D2AFF;
	}
</style>

