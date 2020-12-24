<template>
  <div class="p-3 border-1">
    <ul class="nav nav-tabs" id="myTab" role="tablist">
      <li class="nav-item" role="presentation">
        <a class="nav-link active" id="general-tab" data-bs-toggle="tab" href="#general" role="tab" aria-controls="general" aria-selected="true">常用</a>
      </li>
    </ul>
    <div class="tab-content py-3" id="myTabContent">
      <div class="btn-group" role="group">
        <button type="button"
                @click="handleButtonClick('json')"
                :class="currentKey === 'json' ? 'active' : ''"
                class="btn btn-outline-primary">
          JSON格式化
        </button>
        <button
            type="button"
            @click="handleButtonClick('md5')"
            :class="currentKey === 'md5' ? 'active' : ''"
            class="btn btn-outline-primary">
          MD5
        </button>
<!--        <button
            type="button"
            @click="handleButtonClick('url')"
            :class="currentKey === 'url' ? 'active' : ''"
            class="btn btn-outline-primary">
          URL Encoder
        </button>-->
      </div>
    </div>
    <div class="mt-2 tool-wrap">
      <router-view></router-view>
    </div>
  </div>

</template>

<script lang="ts">
import {defineComponent, ref} from 'vue';
import {useRouter} from 'vue-router'

export default defineComponent({
  name: 'Tool',
  setup() {
    const currentKey = ref('json')
    const router = useRouter()
    const handleButtonClick = (name: string) => {
      currentKey.value = name
      if (name === 'json') {
        router.push('/tool/json')
      } else if (name === 'md5') {
        router.push('/tool/md5')
      }
    }

    return {
      currentKey,
      handleButtonClick
    }
  }
});
</script>

<style scoped lang="scss">
</style>
