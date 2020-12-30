<template>
  <header class="container-fluid shadow-lg p-0">
    <a @click="toggleFunc" class="btn btn-default" href="#"><i class="fa fa-align-justify fa-2x" style="color: #eee"></i></a>
  </header>

  <div class="container-fluid p-0">

    <div class="d-flex flex-row">
      <transition enter-active-class="animate__fadeInTopLeft" leave-active-class="animate__backOutLeft">
        <nav v-if="toggle" id="sidebarMenu" class="bg-white p-0 shadow-lg">
          <ul class="list-group">
            <li @click="handleMenuClick('dashboard')"
                :class="currentMenu === 'dashboard' ? 'choose' : ''"
                class="list-group-item ps-4">
              <i class="fa fa-dashboard me-3"></i>
              <span class=" d-sm-inline-block d-none">首页</span>
            </li>
            <li @click="handleMenuClick('upgrade')"
                :class="currentMenu === 'upgrade' ? 'choose' : ''"
                class="list-group-item ps-4">
              <i class="fa fa-arrow-circle-up me-3"></i>
              <span class=" d-sm-inline-block d-none">升级</span>
            </li>
            <li class="list-group-item ps-4">
              <i class="fa fa-photo me-3"></i>
              <span class=" d-sm-inline-block d-none">相册</span>
            </li>
            <li class="list-group-item ps-4">
              <i class="fa fa-book me-3"></i>
              <span class=" d-sm-inline-block d-none">文章</span>
            </li>
            <li class="list-group-item ps-4">
              <i class="fa fa-file me-3"></i>
              <span class=" d-sm-inline-block d-none">资源</span>
            </li>
          </ul>
        </nav>
      </transition>

      <main class="p-2 flex-grow-1">
        <div class="bg-white rounded-2 shadow-sm content">
          <router-view></router-view>
        </div>
      </main>
    </div>
  </div>

</template>

<script lang="ts">
import {defineComponent, ref} from 'vue';
import {useRouter} from 'vue-router'
import 'animate.css/animate.min.css'

export default defineComponent({
  name: 'Admin',
  setup() {
    const router = useRouter()

    const toggle = ref(true)
    const currentMenu = ref('dashboard')

    const toggleFunc = () => {
      toggle.value = !toggle.value
    }

    const handleMenuClick = (menu: string) => {
      if (menu === 'dashboard') {
        router.push('/admin/dashboard')
      } else if (menu === 'upgrade') {
        router.push('/admin/upgrade')
      }
      currentMenu.value = menu
    }

    return {
      toggle,
      currentMenu,
      toggleFunc,
      handleMenuClick
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

main {
  min-height: calc(100vh - 60px);
}
@media screen and (max-width: 576px) {
  #sidebarMenu {
    width: 80px;
  }
  .list-group-ite {
    text-align: center;
  }
}

.list-group-item {
  line-height: 36px;
  font-size: 14px;
  border: none !important;
  border-bottom: 1px solid #e8e8e8 !important;
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
.content {
  overflow: hidden;
  height: 100%;
}
</style>
