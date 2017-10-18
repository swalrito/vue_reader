<template>
	<div class="searchResult">
		<div class="search_input">
			<icon name='search' scale='2.5' class='search_icon'></icon>
			<input type="text" name="search" v-model="searchContent">
		</div>
		<back></back>
		<book-details></book-details>
	</div>
</template>

<script type="text/javascript">
	import bookDetails from '../../public/book_detail.vue'
	import back from '../../public/back.vue'
	export default{
		components:{
			bookDetails,
			back
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
		width: 75%;
		height: 0.8rem;
		border-radius: 0.2rem;
		outline: none;
		border: none;
		text-align: left;
		padding: 0.02rem;
		padding-left: 0.7rem;
	}
</style>