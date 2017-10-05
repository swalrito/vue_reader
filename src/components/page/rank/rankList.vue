<template>
	<div class="rank_list">
		<top name='一周热门榜'></top>
		<back></back>
		<ranklist-navbar></ranklist-navbar>.
	</div>
</template>

<script type="text/javascript">
	import top from '../../public/top.vue'
	import back from '../../public/back.vue'
	import ranklistNavbar from './rankList_navBar.vue'
	export default {
		components:{
			top,
			back,
			ranklistNavbar
		}
	}
</script>

<style type="text/css">
	.rank_list{
		height: 100%;
		background-color: #E6E6E6;
	}
</style>