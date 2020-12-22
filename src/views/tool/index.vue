<template>
  <div class="p-3 border-1">
    <ul class="nav nav-tabs" id="myTab" role="tablist">
      <li class="nav-item" role="presentation">
        <a class="nav-link active" id="general-tab" data-bs-toggle="tab" href="#general" role="tab" aria-controls="general" aria-selected="true">常用</a>
      </li>
    </ul>
    <div class="tab-content pt-3" id="myTabContent">
      <span class="badge bg-primary me-1 pointer">json格式化</span>
      <span class="badge bg-success pointer">md5</span>
    </div>
    <div class="row mt-2">
      <div class="col-md-4">
        <textarea class="form-control" rows="15"></textarea>
      </div>
      <div class="col-md-4">

      </div>
      <div class="col-md-4">
        <textarea></textarea>
      </div>
    </div>
  </div>

</template>

<script lang="ts">
import {defineComponent} from 'vue';

export default defineComponent({
  name: 'Tool',
});
</script>

<style scoped lang="scss">
</style>