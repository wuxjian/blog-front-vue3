<template>
  <div class="container p-2 mb-2 border-bottom d-flex article">
    <img src="@/assets/cover.png" alt="">
    <div class="d-flex flex-column flex-fill ps-3">
      <div class="article-header">并发的Web爬虫</div>
      <div class="article-summary flex-fill overflow-hidden">我们做了一个简单的web爬虫我们做我们做了一个简单的web爬虫我们做了一个简单的web爬虫我们做了一个简单的web爬虫了一个简单的web爬虫我们做了一个简单的web爬虫我们做了一个简单的web爬虫</div>
      <div class="mb-2 divider"></div>
      <div class="article-other">2020-12-08 10:57:32</div>
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
  height: 124px;
}
.container {
  img {
    width: 150px;
    height: 110px;
  }
}
.article-header {
  font-size: 22px;
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