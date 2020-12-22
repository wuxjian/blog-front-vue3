<template>
  <nav class="navbar fixed-top navbar-expand-lg navbar-light bg-white shadow">
    <div class="container">
      <router-link to="/" class="navbar-brand">
        <img src="@/assets/logo.png" alt="" height="34">
        <span class="slogan text-primary">何以解忧，惟有暴富！</span>
      </router-link>
      <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent"
              aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="collapse navbar-collapse justify-content-end" id="navbarSupportedContent">
        <ul class="navbar-nav mb-2 mb-lg-0">
          <li v-for="(item, index) in navItemList" :key="index" class="nav-item px-1 pointer" @click.prevent="handleItemClick(item)">
            <a :class="currentKey === item.key ? 'active' : ''" class="nav-link" aria-current="page">
              {{item.name}}
            </a>
          </li>
        </ul>
      </div>
    </div>
  </nav>
</template>

<script lang="ts">
import {defineComponent, ref} from 'vue';
import {useRouter} from 'vue-router'
interface NavItem {
  key: string;
  name: string;
}
const navItemList: Array<NavItem> = [
  {
    key: 'home',
    name: '首页',
  },
  {
    key: 'tool',
    name: '工具',
  },
  {
    key: 'manage',
    name: '管理',
  },
  {
    key: 'about',
    name: '关于',
  },
]

export default defineComponent({
  name: 'Header',
  setup() {
    const router = useRouter()
    const currentKey = ref('home')
    const handleItemClick = (item: NavItem) => {
      currentKey.value = item.key
      if (item.key === 'home') {
        router.push('/')
      } else if (item.key === 'tool') {
        router.push('/tool')
      }
    }

    return {
      currentKey,
      navItemList,
      handleItemClick
    }
  }
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
