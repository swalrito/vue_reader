<template>
	<div class="sort">
		<top name='分类'></top>
		<div class="sort_container">
			<div class="man">
			<p class="sort_name">男生</p>
			<ul class="sort_content clearfloat">
				<li><router-link to=''>玄幻</router-link></li>
				<li><router-link to=''>奇幻</router-link></li>
				<li><router-link to=''>武侠</router-link></li>
				<li><router-link to=''>仙侠</router-link></li>
				<li><router-link to=''>都市</router-link></li>
				<li><router-link to=''>职场</router-link></li>
				<li><router-link to=''>历史</router-link></li>
				<li><router-link to=''>军事</router-link></li>
				<li><router-link to=''>游戏</router-link></li>
				<li><router-link to=''>竞技</router-link></li>
				<li><router-link to=''>科幻</router-link></li>
				<li><router-link to=''>灵异</router-link></li>
				<li><router-link to=''>同人</router-link></li>
				<li><router-link to=''>轻小说</router-link></li>
			</ul>
		</div>
		<div class="woman">
			<p class="sort_name">女生</p>
			<ul class="sort_content clearfloat">
				<li><router-link to=''>耽美</router-link></li>
				<li><router-link to=''>古代言情</router-link></li>
				<li><router-link to=''>现代言情</router-link></li>
				<li><router-link to=''>青春校园</router-link></li>
				<li><router-link to=''>纯爱</router-link></li>
				<li><router-link to=''>玄幻奇幻</router-link></li>
				<li><router-link to=''>武侠仙侠</router-link></li>
				<li><router-link to=''>科幻</router-link></li>
				<li><router-link to=''>游戏竞技</router-link></li>
				<li><router-link to=''>悬疑灵异</router-link></li>
				<li><router-link to=''>同人</router-link></li>
				<li><router-link to=''>女尊</router-link></li>
				<li><router-link to=''>莉莉</router-link></li>
			</ul>
		</div>
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
	.sort_container{
		padding: 0.53rem;
	}
	.sort_name{
		font-size: 18px;
		text-align: left;
		border-bottom: 1px solid #DDD9D9;
	}
	.sort_content{
		width: 100%;
	}
	.sort_content li{
		display: block;
		width: 33.3%;
		float: left;
		margin-top: 0.53rem;
	}
	.sort_content li a{
		font-size: 18px;
		color: #000;
	}
	.woman{
		margin-top: 0.53rem;
	}
</style>