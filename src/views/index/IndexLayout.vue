<template>
  <IndexHeader/>
  <IndexContent />
  <IndexBottom/>
</template>

<script lang="ts">
import {defineComponent} from 'vue';
import IndexHeader from "@/views/index/components/IndexHeader.vue";
import IndexContent from "@/views/index/components/IndexContent.vue";
import IndexBottom from "@/views/index/components/IndexBottom.vue";

export default defineComponent({
  name: 'IndexLayout',
  components: {IndexBottom, IndexContent, IndexHeader},
});
</script>

<style scoped lang="scss">
</style>
