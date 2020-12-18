<template>
  <nav class="navbar navbar-expand-lg navbar-light bg-white shadow">
    <div class="container-fluid">
      <a class="navbar-brand" href="#">
        <img src="@/assets/logo.png" alt="" height="34">
        <span class="slogan">何以解忧，惟有暴富！</span>
      </a>
      <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent"
              aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="collapse navbar-collapse" id="navbarSupportedContent">
        <ul class="navbar-nav me-auto mb-2 mb-lg-0">
          <li class="nav-item">
            <a class="nav-link active" aria-current="page" href="#">首页</a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="#">工具</a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="#">管理</a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="#">关于</a>
          </li>
        </ul>
        <form class="d-flex">
          <input class="form-control me-2 search-input" type="search" placeholder="" aria-label="Search">
          <button class="btn btn-outline-primary search-button" type="submit">搜索</button>
        </form>
      </div>
    </div>
  </nav>
</template>

<script lang="ts">
import {defineComponent} from 'vue';

export default defineComponent({
  name: 'IndexHeader',
});
</script>

<style scoped lang="scss">
@import "@/styles/colors";
.navbar-brand img {
  border-radius: 4px;
  opacity: .9;
}
.navbar-brand .slogan {
  margin-left: 10px;
  font-size: 12px;
  color: $main-color;
}
.search-button {
  width: 80px;
  font-size: 14px;
}
.navbar-nav .nav-item {
  font-size: 14px;
}
.navbar-nav .nav-item .nav-link {
  color: #909399;
}
.navbar-nav .nav-item .nav-link.active {
  border-bottom: 2px solid $main-color;
  color: #303133;
}
</style>
