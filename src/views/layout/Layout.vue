<template>
  <Header/>
  <Middle />
  <Bottom/>
</template>

<script lang="ts">
import {defineComponent} from 'vue';
import Header from "@/views/layout/header/Header.vue";
import Middle from "@/views/layout/middle/Middle.vue";
import Bottom from "@/views/layout/bottom/Bottom.vue";

export default defineComponent({
  name: 'IndexLayout',
  components: {Bottom, Middle, Header},
});
</script>

<style scoped lang="scss">
</style>
