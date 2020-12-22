<template>
  <div v-for="item in list" :key="item.id" class="container p-3 d-flex article">
    <img class="rounded-1 pointer d-sm-inline-block d-none" @click="gotoDetail(item.id)" :src="item.cover ? item.cover : require('../../assets/cover.png')" alt="">
    <div class="d-flex flex-column flex-fill ps-3">
      <div class="article-title overflow-hidden text-nowrap pointer" @click="gotoDetail(item.id)">{{item.title}}</div>
      <div class="article-summary flex-grow-1 overflow-hidden">{{item.summary}}</div>
      <div class="divider py-1"></div>
      <div class="article-other pb-0">{{item.created_at.replace('T', ' ').substring(0, 19) }}</div>
    </div>
  </div>
  <nav v-if="page.totalPage > 1" class="pt-3 pb-1 pe-1" aria-label="Page navigation">
    <ul class="pagination justify-content-end">
      <li
          :class="1 === page.currentPage ? 'disabled' : ''"
          @click.prevent="handlePageChange(page.currentPage - 1)"
          class="page-item">
        <a class="page-link" href="#" aria-label="Previous">
          <span aria-hidden="true">&laquo;</span>
        </a>
      </li>
      <li v-for="(i, index) of page.totalPage"
          :key="index"
          :class="i === page.currentPage ? 'active' : ''"
          @click.prevent="handlePageChange(i)"
          class="page-item">
        <a class="page-link" href="#">{{i}}</a>
      </li>
      <li
          :class="page.totalPage === page.currentPage ? 'disabled' : ''"
          @click.prevent="handlePageChange(page.currentPage + 1)"
          class="page-item"
      >
        <a class="page-link" href="#" aria-label="Next">
          <span aria-hidden="true">&raquo;</span>
        </a>
      </li>
    </ul>
  </nav>
</template>

<script lang="ts">
import {defineComponent, onMounted, ref, reactive, watch} from 'vue'
import {useRouter, useRoute} from 'vue-router'
import {fetchClientList} from '@/api/article.js'
import {ListQuery, Article, Page} from '@/model/model'


export default defineComponent({
  name: 'IndexArticleList',
  setup() {
    const listQuery = new ListQuery()
    const list = ref<Array<Article>>([])
    const router = useRouter()
    const route = useRoute()
    let currentPage = +route.params['page']
    if (!currentPage) {
      currentPage = 1
    }
    listQuery.currentPage = currentPage

    // 分页对象
    const page = reactive<Page>({
      currentPage: currentPage,
      totalPage: 1
    })

    const fetchData = () => {
      fetchClientList(listQuery).then(res => {
        list.value = res.data.list as Array<Article>
        page.totalPage = res.data.totalPage
        page.currentPage = res.data.currentPage
      })
    }

    onMounted(() => {
      fetchData()
    })


    const gotoDetail = (id: number) => {
      router.push(`/article/${id}`)
    }

    // 点击分页事件
    const handlePageChange = (p: number) => {
      if (p === page.currentPage) {
        return
      }
      if (p === 1) {
        router.push('/')
      } else {
        router.push(`/page/${p}`)
      }
    }
    watch(router.currentRoute, (to, from) => {
      currentPage = +route.params['page']
      if (!currentPage) {
        currentPage = 1
      }
      listQuery.currentPage = currentPage
      if ((from.path.startsWith('/page') || from.path === '/') && !to.path.startsWith('/article')) {
        fetchData()
      }
    });
    return {
      list,
      listQuery,
      gotoDetail,
      page,
      handlePageChange
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
  transition:all .1s;
  box-shadow: 0 0.5rem 1rem rgba(0, 0, 0, 0.15);
}
.article img{
  width: 150px;
  height: 110px;
}
.article img:hover {
  transition:all .3s;
  transform:scale(1.08);
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
</style>
