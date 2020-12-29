<template>
  <header class="container-fluid shadow">
    <a @click="toggleFunc" class="btn btn-default" href="#"><i class="fa fa-align-justify fa-2x" style="color: #eee"></i></a>
  </header>

  <div class="container-fluid p-0">

    <div class="d-flex flex-row">
      <transition enter-active-class="animate__fadeInTopLeft" leave-active-class="animate__backOutLeft">
        <nav v-if="toggle" id="sidebarMenu" class="bg-light p-0 shadow-lg animated animate__fadeOutLeft">
          <ul class="list-group">
            <li class="list-group-item ps-4 choose">
              <i class="fa fa-dashboard me-3"></i>
              首页
            </li>
            <li class="list-group-item ps-4">
              <i class="fa fa-arrow-circle-up me-3"></i>
              升级
            </li>
            <li class="list-group-item ps-4">
              <i class="fa fa-photo me-3"></i>
              相册
            </li>
            <li class="list-group-item ps-4">
              <i class="fa fa-book me-3"></i>
              文章
            </li>
            <li class="list-group-item ps-4">
              <i class="fa fa-file me-3"></i>
              资源
            </li>
          </ul>
        </nav>
      </transition>

      <main class="p-2 flex-fill">
        <div class="bg-white">234242</div>
      </main>
    </div>
  </div>

</template>

<script lang="ts">
import {defineComponent, ref} from 'vue';
import 'animate.css/animate.min.css'

export default defineComponent({
  name: 'Admin',
  setup() {
    const toggle = ref(true)

    const toggleFunc = () => {
      toggle.value = !toggle.value
    }

    return {
      toggle,
      toggleFunc
    }
  }
});
</script>

<style scoped lang="scss">
header {
  height: 60px;
  line-height: 60px;
  background-color: #1976d2;
  color: #fff;
}
#sidebarMenu {
  height: calc(100vh - 60px);
  color: #444;
  width: 260px;
}
.list-group-item {
  line-height: 36px;
  font-size: 14px;
  border: none !important;
  border-bottom: 1px solid #ccc !important;
  cursor: pointer;
}
.list-group-item:hover{
  background-color: #d6d7d9;
  color: #0d6efd;
}
.list-group-item.choose {
  background-color: #eaecee;
  color: #0d6efd;
}
.list-group-item .fa {
  font-size: 16px
}
</style>
