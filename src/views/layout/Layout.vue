<template>
  <Header/>
  <Content />
  <Bottom/>
</template>

<script lang="ts">
import {defineComponent} from 'vue';
import Header from "@/views/layout/header/Header.vue";
import Content from "@/views/layout/content/Content.vue";
import Bottom from "@/views/layout/bottom/Bottom.vue";

export default defineComponent({
  name: 'IndexLayout',
  components: {Bottom, Content, Header},
});
</script>

<style scoped lang="scss">
</style>
