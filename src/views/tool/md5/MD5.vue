<template>
  <div class="row gx-3 justify-content-around md5">
    <div class="col-md-6 d-flex flex-column align-items-end">
      <textarea v-model="originalVal" class="form-control no-resize" rows="15"></textarea>
      <button @click="md5Func" class="btn btn-outline-primary mt-2 w-25">MD5加密</button>
    </div>
    <div class="col-md-6">
      <table class="table table-hover table-striped table-bordered text-start">
        <thead>
        <tr class="table-secondary">
          <th class="col-4 fw-normal" scope="col">格式</th>
          <th class="col-8 fw-normal" scope="col">数据</th>
        </tr>
        </thead>
        <tbody v-if="md5Val">
        <tr>
          <td class="text-center" >16位小写</td>
          <td class="text-center" >{{md5Val.substring(8, 24)}}</td>
        </tr>
        <tr>
          <td class="text-center" >16位大写</td>
          <td class="text-center" >{{md5Val.substring(8, 24).toUpperCase()}}</td>
        </tr>
        <tr>
          <td class="text-center" >32位小写</td>
          <td class="text-center" >{{md5Val}}</td>
        </tr>
        <tr>
          <td class="text-center" >32位大写</td>
          <td class="text-center" >{{md5Val.toUpperCase()}}</td>
        </tr>
        </tbody>
      </table>
      <div v-if="!md5Val" class="text-center">暂无数据</div>
    </div>
  </div>
</template>

<script lang="ts">
import {defineComponent, ref} from 'vue'
import CryptoJS from 'crypto-js'


export default defineComponent({
  name: 'MD5',
  setup() {
    const originalVal = ref('')
    const md5Val = ref('')

    const md5Func = () => {
      if (originalVal.value.trim()) {
        md5Val.value = CryptoJS.MD5(originalVal.value.trim()).toString(CryptoJS.enc.HEX)
      }

    }
    return {
      originalVal,
      md5Val,
      md5Func
    }
  }
});
</script>

<style scoped lang="scss">
.md5 {
  font-size: 14px;
}
</style>