<template>
	<div class="book">
		<article-text></article-text>
		<change-article></change-article>
	</div>
</template>

<script type="text/javascript">
	import articleText from './article.vue'
		export default {
		components:{
			articleText
		}
	}
</script>
<style type="text/css">
	.book{
		overflow-y: scroll;
	}
</style>