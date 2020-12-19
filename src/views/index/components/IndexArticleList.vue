<template>
  <div v-for="item in list" :key="item.id" class="container p-3 d-flex article">
    <img class="rounded-1 pointer" :src="item.cover ? item.cover : require('../../../assets/cover.png')" alt="">
    <div class="d-flex flex-column flex-fill ps-3">
      <div class="article-title overflow-hidden text-nowrap pointer">{{item.title}}</div>
      <div class="article-summary flex-grow-1 overflow-hidden">{{item.summary}}</div>
      <div class="divider py-1"></div>
      <div class="article-other pb-0">{{item.created_at.replace('T', ' ').substring(0, 19) }}</div>
    </div>
  </div>
</template>

<script lang="ts">
import {defineComponent, onMounted, ref} from 'vue';
import {fetchClientList} from '@/api/article.js';
import {ListQuery} from '@/model/model'

interface Article {
  id: number;
  cover: string;
  title: string;
  summary: string;
  created_at: string;
}

export default defineComponent({
  name: 'IndexArticleList',
  setup() {
    const listQuery = new ListQuery()
    const list = ref<Array<Article>>([])
    onMounted(() => {
      fetchClientList(listQuery).then(res => {
        list.value = res.data.list as Array<Article>
        console.log(res)
      })
    })
    return {
      list,
      listQuery
    }
  }
});
</script>

<style scoped lang="scss">
@import "@/styles/colors";
.article {
  border-bottom: 1px solid #eee;
  height: 142px;
}
.article:hover {
  box-shadow: 0 0.5rem 1rem rgba(0, 0, 0, 0.15);
}
.container {
  img {
    width: 150px;
    height: 110px;
  }
}
.article-title {
  display: inline-block;
  font-size: 24px;
  font-family: "Source Sans Pro","Hiragino Sans GB","Microsoft Yahei",SimSun,Helvetica,Arial,Sans-serif,monospace;
}
.article-title:hover {
  color: $main-color;
}
.article-summary {
  color: #a0a0a0;
  font-size: 14px;
  height: 45px;
  font-family: "Source Sans Pro","Hiragino Sans GB","Microsoft Yahei",SimSun,Helvetica,Arial,Sans-serif,monospace;
}
.article-other {
  color: #a0a0a0;
  font-size: 13px;
}
.divider {
  border-top: 1px solid #eee;
}
.article {
}
</style>
