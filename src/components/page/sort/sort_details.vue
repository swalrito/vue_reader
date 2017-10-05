<template>
	<div class="sort_details">
		<top name='分类详情'></top>
		<back></back>
		<nav-bar></nav-bar>
		<nav-bar></nav-bar>
		<book-detail></book-detail>
	</div>
</template>

<script type="text/javascript">
	import back from '../../public/back.vue'
	import top from '../../public/top.vue'
	import navBar from '../../public/details_navbar.vue'
	import bookDetail from '../../public/book_detail.vue'
	export default{
		components:{
			top,
			navBar,
			bookDetail,
			back
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
</style>