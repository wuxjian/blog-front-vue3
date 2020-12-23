<template>
  <div class="row gx-3 justify-content-around">
    <div class="col-md-5">
      <textarea v-model="originalVal" class="form-control no-resize" rows="15"></textarea>
    </div>
    <div class="col-md-2">
      <div><button class="btn btn-primary w-100 mb-2" @click="format">格式化</button></div>
      <div><button class="btn btn-primary w-100 mb-2" @click="compress">压缩</button></div>
      <select v-model="indent" class="form-select">
        <option value="0" selected>缩进量</option>
        <option value="1">1</option>
        <option value="2">2</option>
        <option value="3">3</option>
        <option value="4">4</option>
      </select>
    </div>
    <div class="col-md-5">
      <textarea v-model="formatVal" class="form-control no-resize" rows="15"></textarea>
    </div>
  </div>
</template>

<script lang="ts">
import {defineComponent, ref} from 'vue'
import alertify from '@/utils/alert'


export default defineComponent({
  name: 'JsonFormat',
  setup() {
    const originalVal = ref('')
    const formatVal = ref('')
    const indent = ref('0')

    const format = () => {
      if (originalVal.value.trim() === '') {
        return
      }
      try {
        let n = parseInt(indent.value)
        if (n === 0) {
          n = 2
        }
        formatVal.value = JSON.stringify(JSON.parse(originalVal.value), null, n);
      } catch (e) {
        alertify.error(e.message);
      }
    }
    const compress = () => {
      if (originalVal.value.trim() === '') {
        return
      }
      try {
        formatVal.value = JSON.stringify(JSON.parse(originalVal.value), null, 0)
            .replaceAll("\r", '')
            .replaceAll('\n', '')
            .replaceAll('\r\n', '')
      } catch (e) {
        alertify.error(e.message);
      }
    }

    return {
      originalVal,
      formatVal,
      indent,
      format,
      compress
    }
  }
});
</script>

<style scoped lang="scss">
</style>