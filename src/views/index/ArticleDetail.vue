<template>
  <div class="container p-3">
    <h2 class="text-center mb-4">{{article.title}}</h2>
    <div v-html="article.content"/>
  </div>
</template>

<script lang="ts">
import {defineComponent, onMounted, ref} from 'vue'
import {useRoute} from 'vue-router'
import {fetchClientArticle} from "@/api/article";
import {Article, title} from "@/model/model";


export default defineComponent({
  name: 'IndexArticleDetail',
  setup() {
    const route = useRoute()
    const id = +route.params['id']
    const article = ref<Article>({})

    onMounted(() => {
      fetchClientArticle(id).then(res => {
        article.value = res.data as Article
        document.title = article.value.title + ' - ' + title
      })
    })
    return {
      article
    }
  }
});
</script>

<style scoped lang="scss">
@import "~highlight.js/styles/monokai-sublime.css";
:deep pre{
  font-size: 14px;
  padding: 1rem;
  max-height: 35rem;
  line-height: 1.5;
  background-color: #282a36;
  color: #fff;
  overflow: auto;
  font-family: Operator Mono, Consolas, Monaco, Menlo, monospace;
}
</style>
