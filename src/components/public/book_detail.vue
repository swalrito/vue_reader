<template>
	<div class="book_detail">
		<ul class="book_list">
			<li v-for='item in booklist'>
				<router-link :to='item.src'>
				<img :src="item.imgsrc">
				<div class="book_info">
					<p class="book_name">{{item.name}}</p>
					<p class="book_author">{{item.author}}</p>
					<p class="book_intro">{{item.details}}</p>
					<p class="book_status">{{item.popular}}万人气		|	{{item.keep}}%读者留存率</p>
				</div>
			</router-link>
			</li>
		</ul>
		</div>
</template>

<script type="text/javascript">
	export default{
		data:function(){
			return {
				booklist:[{
					name:"一念永恒",
					src:"/book_info&一念永恒",
					imgsrc:'/static/img/book.jpg',
					author:'耳根',
					details:'一念成沧海，一念化桑田。一念斩千魔，一念诛万仙。唯我念……永恒这是耳根继《仙逆》《求魔》《我欲封天》后，创作的第四部长篇小说《一念永恒》',
					popular:20.5,
					keep:85.9
				},{
					name:"一念永恒",
					src:"/book&一念永恒",
					imgsrc:'/static/img/book.jpg',
					author:'耳根',
					details:'一念成沧海，一念化桑田。一念斩千魔，一念诛万仙。唯我念……永恒这是耳根继《仙逆》《求魔》《我欲封天》后，创作的第四部长篇小说《一念永恒》',
					popular:20.5,
					keep:85.9
				},{
					name:"一念永恒",
					src:"/book&一念永恒",
					imgsrc:'/static/img/book.jpg',
					author:'耳根',
					details:'一念成沧海，一念化桑田。一念斩千魔，一念诛万仙。唯我念……永恒这是耳根继《仙逆》《求魔》《我欲封天》后，创作的第四部长篇小说《一念永恒》',
					popular:20.5,
					keep:85.9
				},{
					name:"一念永恒",
					src:"/book&一念永恒",
					imgsrc:'/static/img/book.jpg',
					author:'耳根',
					details:'一念成沧海，一念化桑田。一念斩千魔，一念诛万仙。唯我念……永恒这是耳根继《仙逆》《求魔》《我欲封天》后，创作的第四部长篇小说《一念永恒》',
					popular:20.5,
					keep:85.9
				},{
					name:"一念永恒",
					src:"/book&一念永恒",
					imgsrc:'/static/img/book.jpg',
					author:'耳根',
					details:'一念成沧海，一念化桑田。一念斩千魔，一念诛万仙。唯我念……永恒这是耳根继《仙逆》《求魔》《我欲封天》后，创作的第四部长篇小说《一念永恒》',
					popular:20.5,
					keep:85.9
				},{
					name:"一念永恒",
					src:"/book&一念永恒",
					imgsrc:'/static/img/book.jpg',
					author:'耳根',
					details:'一念成沧海，一念化桑田。一念斩千魔，一念诛万仙。唯我念……永恒这是耳根继《仙逆》《求魔》《我欲封天》后，创作的第四部长篇小说《一念永恒》',
					popular:20.5,
					keep:85.9
				},{
					name:"一念永恒",
					src:"/book&一念永恒",
					imgsrc:'/static/img/book.jpg',
					author:'耳根',
					details:'一念成沧海，一念化桑田。一念斩千魔，一念诛万仙。唯我念……永恒这是耳根继《仙逆》《求魔》《我欲封天》后，创作的第四部长篇小说《一念永恒》',
					popular:20.5,
					keep:85.9
				}]
			}
		}
	}
</script>

<style type="text/css">
	.book_list{
		width: 100%;
		overflow-y: scroll;
		background-color: #E6E6E6;

	}
	.book_list li{
		width: 100%;
		margin: 0.2rem;
		height: 3rem;
		border-bottom: 1px solid #524344;
	}
	.book_list li a{
		color:#000;
	}
	.book_list li img{
		height: 2.8rem;
		width: 2rem;
		margin-right: 0.4rem;
		float: left;
	}
	.book_list li .book_info p{
		text-align: left;
		margin-bottom: 0.2rem;
		font-size: 14px;

	}
	.book_list li .book_info p.book_name{
		font-weight: 600;
		font-size: 16px;
	}
	.book_list li .book_info p.book_author{
		color: #524344;
	}
	.book_list li .book_info p.book_intro{
		color: #524344;
		text-overflow: ellipsis;
		white-space: nowrap;
		overflow: hidden;
	}
	.book_list li .book_info p.book_status{
		font-weight: 500;
	}
</style>