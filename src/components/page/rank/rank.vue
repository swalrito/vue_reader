<template>
	<div class="rank">
		<div class="man_rank rank_content">
			男生
			<ul>
				<li><router-link to=''><img src="static/img/下载.svg"> 一周热门榜</router-link></li>
				<li><router-link to=''><img src="static/img/下载.svg"> 当月热门榜</router-link></li>
				<li><router-link to=''><img src="static/img/下载.svg"> 完结热门榜</router-link></li>
				<li><router-link to=''><img src="static/img/下载.svg"> 收藏热门榜</router-link></li>
			</ul>
		</div>
		<div class="woman_rank rank_content">
			女生
			<ul>
				<li><router-link to=''><img src="static/img/下载.svg"> 一周热门榜</router-link></li>
				<li><router-link to=''><img src="static/img/下载.svg"> 当月热门榜</router-link></li>
				<li><router-link to=''><img src="static/img/下载.svg"> 完结热门榜</router-link></li>
				<li><router-link to=''><img src="static/img/下载.svg"> 收藏热门榜</router-link></li>
			</ul>
		</div>
	</div>
</template>

<script type="text/javascript">
import top from '../../public/top.vue'
	export default{
		components:{
			top
		}
	}
</script>

<style type="text/css">
	.rank_content{
		margin-top: 0.33rem;
		padding: 0.27rem;
		font-size: 24px;
		text-align: left;
	}
	.rank_content ul{
		margin-top: 0.27rem;
	}
	.rank_content ul li{
		border-bottom: 1px solid #E0E0E0;
		padding-left: 0.43rem;
		font-size: 20px;
		margin-bottom: 0.27rem;
	}
	.rank_content ul li a{
		color: #000;
		outline: none;
	}
	.rank_content ul li img{
		width: 24px;
		height: 24px;
		display: inline-block;
	}

</style>
