<template>
  <table class="table table-bordered p-2 align-middle">
    <thead>
    <tr>
      <th scope="col">作者</th>
      <th scope="col">等级</th>
      <th scope="col">状态</th>
      <th scope="col">标题</th>
      <th scope="col">操作</th>
    </tr>
    </thead>
    <tbody>
      <tr v-for="item in list" :key="item.id">
        <th scope="row">{{item.author}}</th>
        <td>{{item.importance}}</td>
        <td>
          <span v-if="item.status === '1'" class="badge bg-success">已发布</span>
          <span v-if="item.status === '2'" class="badge bg-warning">草稿</span>
          <span v-if="item.status === '0'" class="badge bg-danger">已删除</span>
        </td>
        <td>{{item.title}}</td>
        <td>
          <button class="btn btn-primary">编辑</button>
        </td>
      </tr>
    </tbody>
  </table>
</template>

<script lang="ts">
import {defineComponent, onMounted, reactive, ref} from 'vue';
import { fetchList } from '@/api/article'
import {ListQuery, Article, Page} from '@/model/model'

export default defineComponent({
  name: 'ArticleList',
  setup() {
    const listQuery = new ListQuery();
    const list = ref<Array<Article>>([])
    // 分页对象
    const page = reactive<Page>({
      currentPage: listQuery.currentPage,
      totalPage: 1
    })

    const getList = () => {
      fetchList(listQuery).then(response => {
        list.value = response.data.list
        page.totalPage = response.data.totalPage
        page.currentPage = response.data.currentPage
      })
    }

    onMounted(() => {
      getList()
    })

    return {
      list,
      page
    }
  }
});
</script>

<style scoped lang="scss">
</style>