<template>
  <div class="container text-center my-4 copyright">{{ copyright }}</div>
</template>

<script lang="ts">
import {defineComponent} from 'vue';

export default defineComponent({
  name: 'Bottom',
  setup() {
    const copyright = `Copyright © ${new Date().getFullYear()} by 建指所向`
    return {
      copyright
    }
  }
});
</script>

<style scoped lang="scss">
.copyright {
  color: #C0C4CC;
}
</style>
