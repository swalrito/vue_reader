<template>
	<div class="bookshelf">
		<top name='书架'></top>
		<div class="books scroll">
		<ul class="clearfloat">
			<li 
				class="add">
				<router-link to='/sort'>
					<icon 
					name='add' 
					class='icon' 
					scale='5'>
					</icon>
				</router-link>
			</li>
			<li v-for='item in booklist'>
				<router-link :to="item.src">
					<img :src="item.imgsrc">
					<span class='bookName'>{{item.name}}</span>
				</router-link>
			</li>
		</ul>
		</div>    
		<bottom index=0></bottom>
	</div>
</template>

<script type="text/javascript">
import top from '../../public/top.vue'
import bottom from '../../public/bottom.vue'
	export default{
		data:function(){
			return {
				booklist:[{
				name:"一念永恒",
				imgsrc:"/static/img/book.jpg",
				src:'/book&一念永恒'
			},{
				name:"一念永恒",
				imgsrc:"/static/img/book.jpg",
				src:'/book&一念永恒'
			},{
				name:"一念永恒",
				imgsrc:"/static/img/book.jpg",
				src:'/book&一念永恒'
			},{
				name:"一念永恒",
				imgsrc:"/static/img/book.jpg",
				src:'/book&一念永恒'
			},{
				name:"一念永恒",
				imgsrc:"/static/img/book.jpg",
				src:'/book&一念永恒'
			},{
				name:"一念永恒",
				imgsrc:"/static/img/book.jpg",
				src:'/book&一念永恒'
			},{
				name:"一念永恒",
				imgsrc:"/static/img/book.jpg",
				src:'/book&一念永恒'
			}]
		}
		},
		components:{
			top,
			bottom
		}
	}
</script>

<style type="text/css" lang='scss'>
$color_gray:#C5C4C4;
	.bookshelf{
		width: 100%;
		height: 100%;
	}
	.bookshelf .books{
		position: absolute;
		top: 1rem;
		bottom: 1.5rem;
		width: 100%;
		padding: 1rem;
		overflow-y: scroll;
	}
	.bookshelf .books ul{
		width: 100%;
		height: 15.31rem;
	}
	.bookshelf .books ul li{
		float: left;
		margin: 0.2rem;
		margin-bottom: 0.8rem;
		border: 1px solid $color_gray;
		text-align: center;
		width: 2.2rem;
		height: 3.2rem;
	}
	.bookshelf .books ul li.add{
		line-height: 4.2rem;
	}
	.bookshelf .books ul li img{
		width: 100%;
		height: 100%;
		overflow:hidden;
	}
	.bookshelf .books ul li .bookName{
		position: relative;
		color: #000;
		font-size: 12px;
	}
</style>
