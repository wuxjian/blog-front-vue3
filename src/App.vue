<template>
  <router-view/>
</template>

<script lang="ts">
import {defineComponent} from 'vue';

export default defineComponent({
  name: 'App',
  setup() {
    setTimeout(() => {
      document.body.removeChild(document.getElementById('loading') as Node)
      const app = document.getElementById('app') as HTMLElement
      document.body.style.backgroundColor = '#E9EAED'
      app.style.display = 'block'
    }, 500)
  }
})
</script>

<style lang="scss">
#nprogress .bar {
  background: #dc3545 !important;
}
</style>
