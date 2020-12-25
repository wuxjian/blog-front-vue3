<template>
  <div class="row gx-2">
    <div class="col-md-6 d-flex flex-column align-items-end">
      <textarea v-model="originalVal" class="form-control no-resize" rows="15"></textarea>
      <button class="btn btn-primary my-2 w-25" @click="handleBtnClick">生成</button>
    </div>
    <div v-if="qrUrl" class="col-md-3 border d-flex flex-column p-2 h-75">
      <div class="flex-fill" id="qrCode">
        <img :src="qrUrl" class="w-100"/>
      </div>
      <div class="text-center save-tip">右键-保存图片</div>
    </div>
  </div>
</template>

<script lang="ts">
import {defineComponent, ref} from 'vue'
import QRCode from 'qrcode'

export default defineComponent({
  name: 'qrcode',
  setup() {
    const originalVal = ref('')
    const qrUrl = ref('')

    const handleBtnClick = () => {
      if (!originalVal.value.trim()) {
        return
      }
      QRCode.toDataURL(originalVal.value, {width: 300},  function (err, url) {
        qrUrl.value = url
      })
    }

    return {
      originalVal,
      handleBtnClick,
      qrUrl
    }
  }
});
</script>

<style scoped lang="scss">
.save-tip {
  font-size: 14px;
  line-height: 30px;
  border: 1px dashed #ccc;
}
</style>
