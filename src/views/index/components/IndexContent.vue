<template>
  <div class="container px-0 bg-white" style="margin-top: 80px">
    <router-view #="{ Component }">
      <keep-alive include="IndexArticleList">
        <component :is="Component" />
      </keep-alive>
    </router-view>
<!--    <router-view></router-view>-->
  </div>
</template>

<script lang="ts">
import {defineComponent} from 'vue';

export default defineComponent({
  name: 'IndexContent',
});
</script>

<style scoped lang="scss">
</style>
