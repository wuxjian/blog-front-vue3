<template>
  <div class="container vh-100 px-0 bg-white">
    <router-view/>
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
