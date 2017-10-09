<template>
	<div class="book_info">
		<top name='一念永恒'></top>
		<back></back>
		<div class="book_status">
			<div class="book_attr">
				<img src="../../../assets/book.jpg" height="174" width="134">
				<div class="book_text">
					<p class="book_name">一念永恒</p>
					<p class="book_author">耳根</p>
					<p class="book_simpleinfo">
						<span>10小时前	|</span>
						<span>311万</span>
					</p>
				</div>
			</div>
			<div class="book_action">
				<span class='action_addUpdate'>追更新</span>
				<span class='action_addBookShelf'>加入书架</span>
			</div>
			<div class="book_data">
				<div class="book_dataItems">
					<p class="book_dataItem">追书人气</p>
					<p class='book_dataItemVal'>252008</p>
				</div>
				<div class="book_dataItems">
					<p class="book_dataItem">读者留存率</p>
					<p class='book_dataItemVal'>72.77%</p>
				</div>
				<div class="book_dataItems">
					<p class="book_dataItem">日更新字数</p>
					<p class='book_dataItemVal'>5556</p>
				</div>
			</div>
		</div>
		<div class="book_tags">
			<span>仙侠</span>
			<span>幻想修仙</span>
		</div>
		<div class='book_intro'>
			<p>一念成沧海，一念化桑田。一念斩千魔，一念诛万仙。
    唯我念……永恒
    这是耳根继《仙逆》《求魔》《我欲封天》后，创作的第四部长篇小说《一念永恒》</p>
		</div>
	</div>
</template>

<script type="text/javascript">
	import top from '../../public/top.vue'
	import back from '../../public/back.vue'
	export default {
		components:{
			top,
			back
		}
	}
</script>

<style type="text/css">
	.book_status{
		margin: 1rem 0.5rem 0rem 0.5rem;
		padding-bottom: 0.5rem;
		border-bottom: 1px solid #000;
	}
	.book_status .book_attr img{
		height: 3.2rem;
		width: 2.7rem;
		margin-right: 0.4rem;
		float: left;
	}
	.book_status .book_attr .book_text{
		padding-top: 0.2rem;
		padding-bottom: 0.2rem;
	}
	.book_status .book_attr .book_text p{
		text-align: left;
		font-size: 16px;
		line-height: 1rem;
	}
	.book_action{
		margin-top: 0.2rem;
	}
	.book_action span{
		display: inline-block;
		line-height: 1rem;
		border-radius: 0.1rem;
		background-color: #A4DDF6;
		font-size: 16px;
		width: 3.7rem;
		height: 1rem;
		border:none;
		margin-left: 0.2rem;
	}
	.book_data{
		margin-top: 0.6rem;
	}
	.book_data .book_dataItems{		display: inline-block;
		width: 2.8rem;
	}
	.book_data .book_dataItems .book_dataItem{
		font-size: 18px;
		color: #6C5D5C;
	}
	.book_data .book_dataItems .book_dataItemVal{
		font-size: 16px;
	}
	.book_tags{
		border-bottom: 1px solid #000;
		margin:0.2rem 0.5rem 0;
		padding-bottom: 0.2rem;
		text-align: left;
	}
	.book_tags span{
		border:none;
		display: inline-block;
		width: 1.4rem;
		height: 0.6rem;
		line-height: 0.6rem;
		border-radius: 0.1rem;
		margin-left: 0.2rem;
		text-align: center;
		color:#fff;
	}
	.book_tags span:nth-child(odd){
		background-color: #00AB46;
	}
	.book_tags span:nth-child(even){
		background-color: #3DB4CE;
	}
	.book_intro{
		margin: 0.2rem 0.5rem 0.2rem 0.5rem;
		font-size: 16px;
		text-align: left;
	}
</style>