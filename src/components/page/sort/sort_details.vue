<template>
	<div class="sort_details">
		<top name='分类详情'></top>
		<back></back>
		<nav-bar class='first_bar'></nav-bar>
		<nav-bar :sort="category"></nav-bar>
		<book-detail></book-detail>
		<load-more v-if="isLoading"></load-more>
		<load-over v-if="noMore"></load-over>
	</div>
</template>

<script type="text/javascript">
	import back from '../../public/back.vue'
	import top from '../../public/top.vue'
	import navBar from '../../public/details_navbar.vue'
	import bookDetail from '../../public/book_detail.vue'
	import loadMore from '../../public/loadMore.vue'
	import loadOver from '../../public/loadOver.vue'
	export default{
		data:function(){
			return {
				isLoading:false,
				noMore:true,
				category:[]
			}
		},
		components:{
			top,
			navBar,
			bookDetail,
			back,
			loadOver,
			loadMore
		}
	}
</script>

<style type="text/css">
	.sort_details{
		height: 100%;
		width: 100%;
		overflow-y: scroll;
		background-color: #E6E6E6;
	}
	.first_bar{
		margin-top: 1rem;
	}
	</style>