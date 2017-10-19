<template>
	<div class="book">
		<div :class="[article,{day:day},{night:night}]" @click='action($event)'>
			<h2>第1章 他叫白小纯</h2>
			<br>
			<p>帽儿山，位于东林山脉中，山下有一个村子，民风淳朴，以耕田为生，与世隔绝。
			</p>
			<p>清晨，村庄的大门前，整个村子里的乡亲，正为一个十五六岁少年送别，这少年瘦弱，但却白白净净，看起来很是乖巧，衣着尽管是寻常的青衫，可却洗的泛白，穿在这少年的身上，与他目中的纯净搭配在一起，透出一股子灵动。</p>
			<p>他叫白小纯。</p>
			<p>“父老乡亲们，我要去修仙了，可我舍不得你们啊。”少年满脸不舍，原本就乖巧的样子，此刻看起来更为纯朴。</p>
			<p>四周的乡亲，面面相觑，顿时摆出难舍之色。</p>
			<p>“小纯，你爹娘走的早，你是个……好孩子！！难道你不想长生了么，成为仙人就可以长生，能活的很久很久，走吧，雏鹰长大，总有飞出去的那一天。”人群内走出一个头发花白的老者，说道好孩子三个字时，他顿了一下。</p>
			<p>“在外面遇到任何事情，都要坚持下去，走出村子，就不要回来，因为你的路在前方！”老人神色慈祥，拍了拍少年的肩膀。</p>
			<p>“长生……”白小纯身体一震，目中慢慢坚定起来，在老者以及四周乡亲鼓励的目光下，他重重的点了点头，深深的看了一眼四周的乡亲，转身迈着大步，渐渐走出了村子。</p>
			<p>眼看少年的身影远去，村中的众人，一个个都激动起来，目中的难舍刹那就被喜悦代替，那之前满脸慈祥的老者，此刻也在颤抖，眼中流下泪水。</p>
			<p>
			“苍天有眼，这白鼠狼，他终于……终于走了，是谁告诉他在附近看到仙人的，你为村子立下了大功！”
			</p>
			<p>
				“这白鼠狼终于肯离开了，可怜我家的几只鸡，就因为这白鼠狼怕鸡打鸣，不知用了什么方法，唆使一群孩子吃鸡肉，把全村的鸡都给吃的干干净净……”
			</p>
			<change-article></change-article>
		</div>
	</div>
</template>

<script type="text/javascript">
	import changeArticle from './change_article.vue'
	export default{
		data:function(){
			return {
				day:true,
				night:false,
				article:"article"
			}
		},
		components:{
			changeArticle
		},
		methods:{
			action:function($event){
				//隐藏目录catalog组件
				this.$root.hub.$emit('hideCatalog');
				//判断点击位置
				//在中央部位则显示菜单
				//在顶部或头部则滚动文章
				const clientHeight=document.body.clientHeight;//客户端高度
				const eventHeight=$event.clientY;//点击事件发生位置
				const clientGap=clientHeight/3;
				//显示
				if(eventHeight>clientGap&&eventHeight<clientHeight-clientGap)
				{
					this.$root.hub.$emit('showMenu');
				}

			}
		},
		created(){
			//切换白天黑夜模式
			this.$root.hub.$on("tiggle",()=>{
				this.day=!this.day;
				this.night=!this.day
			})
		}
	}
</script>

<style type="text/css">
	.day{
		background-color: #D2D1CA;
	}
	.night{
		background-color: #2A2728;
	}
	.night p,.night h2{
		color:#807d7d;
	}
	.book{
		width: 100%;
		height: 100%;
		overflow-y: scroll;
		}
	.book .article{
		padding: 0.4rem;
	}
	.book .article p{
		font-size: 16px;
		text-align: left;
		text-indent: 32px;
	}
</style>