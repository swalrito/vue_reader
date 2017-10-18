<template>
	<div class="search">
		<div class="search_input">
			<icon name='search' scale='2.5' class='search_icon'></icon>
			<input type="text" name="search" v-model="searchContent">
		</div>
		<div class="search_tags">
			<ul class="clearfloat">
				<li>重生</li>
				<li>网游之</li>
				<li>重生</li>
				<li>网游之</li>
				<li>重生</li>
				<li>网游之</li>
				<li>重生</li>
				<li>网游之</li>
			</ul>
		</div>
		<div class="search_history">
			<ul class="clearfloat">
				<p>搜索历史 
					<span
					class='history_dele' 
					@click='deletHistory'>
					<icon 
					name='delet' 
					scale='2.5'>
					</icon>	
					</span>
				</p>
				<li v-for="item in searchHistory">{{item}}</li>
			</ul>
		</div>
		<search-content v-if='searchContent'></search-content>
		<bottom index=3 ></bottom>
	</div>
</template>

<script type="text/javascript">
	import bottom from '../../public/bottom.vue'
	import searchContent from './searchContent.vue'
	export default {
		data:function(){
			return {
				searchContent:'',
				searchHistory:['重生','网游之']
			}
		},
		components:{
			bottom,
			searchContent
		},
		methods:{
			deletHistory:function(){
				this.searchHistory=[];
				console.log('1');
			}
		}
		
	}
</script>

<style type="text/css">
	.search_input{
		background-color: #A2D9F2;
		width: 100%;
		height: 1rem;
		line-height: 1rem;
		padding: 0 1rem;
	}
	.search_input .search_icon{
		position: absolute;
		display: inline-block;
		margin: 0.2rem 0;
		height: 0.6rem;
		width: 0.6rem;
	}
	.search_input input{
		width: 80%;
		height: 0.8rem;
		border-radius: 0.2rem;
		outline: none;
		border: none;
		text-align: left;
		padding: 0.02rem;
		padding-left: 0.7rem;
	}
	.search_tags,.search_history{
		width: 100%;
		padding:  0.5rem;
		border-bottom: 1px solid #000;
	}
	.search_tags ul li,.search_history ul li{
		float: left;
		margin-right: 0.2rem;
		margin-bottom: 0.2rem;
		padding: 0.08rem;
		border-radius: 0.2rem;
		border: 1px solid #000;
	}
	.search_history{
		border: none;
	}
	.search_history p{
		text-align: left;
		margin-bottom: 0.5rem;
	}
	.search_history .history_dele{
		position: absolute;
		right: 0.5rem;
	}
</style>