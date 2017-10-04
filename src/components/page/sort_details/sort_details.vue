<template>
	<div class="sort_details">
		<top name='分类详情'></top>
		<div class="details_return">
			<span><icon name='return' class='return_icon' scale='2.5'></icon>返回</span>
		</div>
		<nav-bar></nav-bar>
		<nav-bar></nav-bar>
		<book-detail></book-detail>
	</div>
</template>

<script type="text/javascript">
	import top from '../../public/top.vue'
	import navBar from '../../public/details_navbar.vue'
	import bookDetail from '../../public/book_detail.vue'
	export default{
		components:{
			top,
			navBar,
			bookDetail
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
	.details_return{
		position: absolute;
		top: 0.2rem;
		left: 0.2rem;
		height: 0.6rem;
	}
	.details_return span{
		font-size: 16px;
		height: 0.6rem;
		line-height: 0.6rem;
	}
	.details_return span .return_icon{
		vertical-align: text-bottom;
	}
</style>