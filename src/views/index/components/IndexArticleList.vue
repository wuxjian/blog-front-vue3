<template>
  <div class="container p-3 d-flex article">
    <img class="rounded-1" src="@/assets/cover.png" alt="">
    <div class="d-flex flex-column flex-fill ps-3">
      <div class="article-header">并发的Web爬虫</div>
      <div class="article-summary flex-fill overflow-hidden">我们做了一个简单的web爬虫我们做我们做了一个简单的web爬虫我们做了一个简单的web爬虫我们做了一个简单的web爬虫了一个简单的web爬虫我们做了一个简单的web爬虫我们做了一个简单的web爬虫</div>
      <div class="divider py-1"></div>
      <div class="article-other pb-0">2020-12-08 10:57:32</div>
    </div>
  </div>
</template>

<script lang="ts">
import {defineComponent} from 'vue';

export default defineComponent({
  name: 'IndexArticleList',
});
</script>

<style scoped lang="scss">
.article {
  border-bottom: 1px solid #eee;
  height: 142px;
}
.container {
  img {
    width: 150px;
    height: 110px;
  }
}
.article-header {
  font-size: 24px;
  font-family: "Source Sans Pro","Hiragino Sans GB","Microsoft Yahei",SimSun,Helvetica,Arial,Sans-serif,monospace;
}
.article-summary {
  color: #a0a0a0;
  font-size: 14px;
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
