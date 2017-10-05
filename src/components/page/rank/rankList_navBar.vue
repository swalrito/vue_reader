<template>
	<div class="ranklist_navbar">
		<ul class="clearfloat list">
			<li class='active'>周榜</li>
			<li>月榜</li>
			<li>总榜</li>
		</ul>
		<book-detail></book-detail>
	</div>
</template>

<script type="text/javascript">
	import bookDetail from '../../public/book_detail.vue'
	export default{
		components:{
			bookDetail
		}
	}
</script>

<style type="text/css">
	.ranklist_navbar{
		width: 100%;
		height: 1.1rem;
		background-color: #fff;
		border-bottom: 1px solid #E0E0E0;
	}
	.ranklist_navbar ul.list{
		width: 100%;
		height: 1.1rem;
		}
	.ranklist_navbar ul.list li{
		float: left;
		height: 1.1rem;
		line-height: 1.1rem;
		font-size: 16px;
		margin-left: 0.2rem;
	}
	.ranklist_navbar ul.list li.active{
		color: #2D2AFF;
	}
</style>