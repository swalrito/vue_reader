<template>
	<div class="book">
		<menu-top book_name='一念永恒'></menu-top>
		<article-text></article-text>
		<catalog></catalog>
		<menu-bottom></menu-bottom>
	</div>
</template>

<script type="text/javascript">
	import articleText from './article.vue'
	import menuTop from './menu_top.vue'
	import menuBottom from './menu_bottom.vue'
	import catalog from './catalog.vue'
		export default {
		components:{
			articleText,
			menuTop,
			catalog,
			menuBottom
		}
	}
</script>
<style type="text/css">
	.book{
		overflow-y: scroll;
	}
</style>