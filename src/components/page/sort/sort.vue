<template>
	<div class="sort">
		<top name='分类'></top>
		<div class="sort_container">
			<div class="man">
			<p class="sort_name">男生</p>
			<ul class="sort_content clearfloat">
				<li><router-link to='/sort/details_m_xh'>玄幻</router-link></li>
				<li><router-link to='/sort/details_m_qh'>奇幻</router-link></li>
				<li><router-link to='/sort/details_m_wx'>武侠</router-link></li>
				<li><router-link to='/sort/details_m_xx'>仙侠</router-link></li>
				<li><router-link to='/sort/details_m_ds'>都市</router-link></li>
				<li><router-link to='/sort/details_m_zc'>职场</router-link></li>
				<li><router-link to='/sort/details_m_ls'>历史</router-link></li>
				<li><router-link to='/sort/details_m_js'>军事</router-link></li>
				<li><router-link to='/sort/details_m_yx'>游戏</router-link></li>
				<li><router-link to='/sort/details_m_jj'>竞技</router-link></li>
				<li><router-link to='/sort/details_m_kh'>科幻</router-link></li>
				<li><router-link to='/sort/details_m_ly'>灵异</router-link></li>
				<li><router-link to='/sort/details_m_tr'>同人</router-link></li>
				<li><router-link to='/sort/details_m_qxs'>轻小说</router-link></li>
			</ul>
		</div>
		<div class="woman">
			<p class="sort_name">女生</p>
			<ul class="sort_content clearfloat">
				<li><router-link to='/sort/details_wm_dm'>耽美</router-link></li>
				<li><router-link to='/sort/details_wm_gdyq'>古代言情</router-link></li>
				<li><router-link to='/sort/details_wm_xdyq'>现代言情</router-link></li>
				<li><router-link to='/sort/details_wm_qqxy'>青春校园</router-link></li>
				<li><router-link to='/sort/details_wm_ca'>纯爱</router-link></li>
				<li><router-link to='/sort/details_wm_xhqh'>玄幻奇幻</router-link></li>
				<li><router-link to='/sort/details_wm_wxxx'>武侠仙侠</router-link></li>
				<li><router-link to='/sort/details_wm_kh'>科幻</router-link></li>
				<li><router-link to='/sort/details_wm_yxjj'>游戏竞技</router-link></li>
				<li><router-link to='/sort/details_wm_xyly'>悬疑灵异</router-link></li>
				<li><router-link to='/sort/details_wm_tr'>同人</router-link></li>
				<li><router-link to='/sort/details_wm_nz'>女尊</router-link></li>
				<li><router-link to='/sort/details_wm_ll'>莉莉</router-link></li>
			</ul>
		</div>
		</div>
    <bottom index='1'></bottom>
		
	</div>
</template>

<script type="text/javascript">
import top from '../../public/top.vue'
import bottom from '../../public/bottom.vue'
	export default{
		components:{
			top,
			bottom
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