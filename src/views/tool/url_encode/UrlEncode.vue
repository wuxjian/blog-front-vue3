<template>
  <div class="row gx-3 justify-content-around">
    <div class="col-md-5">
      <textarea v-model="originalVal" class="form-control no-resize" rows="15"></textarea>
    </div>
    <div class="col-md-2">
      <div><button class="btn btn-primary w-100 mb-2" @click="encode">编码</button></div>
      <div><button class="btn btn-primary w-100 mb-2" @click="decode">解码</button></div>
    </div>
    <div class="col-md-5">
      <textarea v-model="formatVal" class="form-control no-resize" rows="15"></textarea>
    </div>
  </div>
</template>

<script lang="ts">
import {defineComponent, ref} from 'vue'


export default defineComponent({
  name: 'UrlEncode',
  setup() {
    const originalVal = ref('')
    const formatVal = ref('')

    const encode = () => {
      if (originalVal.value.trim() === '') {
        return
      }
      formatVal.value = encodeURI(originalVal.value.trim())

    }
    const decode = () => {
      if (formatVal.value.trim() === '') {
        return
      }
      originalVal.value = decodeURI(formatVal.value.trim())
    }

    return {
      originalVal,
      formatVal,
      encode,
      decode
    }
  }
});
</script>

<style scoped lang="scss">
</style>