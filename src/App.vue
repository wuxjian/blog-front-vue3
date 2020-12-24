<template>
  <router-view/>
</template>

<script lang="ts">
import {defineComponent} from 'vue';

export default defineComponent({
  name: 'App',
  setup() {
    document.body.removeChild(document.getElementById('loading') as Node)
  }
})
</script>

<style lang="scss">
#nprogress .bar {
  background: #dc3545 !important;
}
</style>
