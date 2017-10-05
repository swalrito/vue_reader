<template>
	<div class="sort_details">
		<top name='分类详情'></top>
		<return></return>
		<nav-bar></nav-bar>
		<nav-bar></nav-bar>
		<book-detail></book-detail>
	</div>
</template>

<script type="text/javascript">
	import return from '../../public/return.vue'
	import top from '../../public/top.vue'
	import navBar from '../../public/details_navbar.vue'
	import bookDetail from '../../public/book_detail.vue'
	export default{
		components:{
			top,
			navBar,
			bookDetail,
			return
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