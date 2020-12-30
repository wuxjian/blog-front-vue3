<template>
  <div class="row">
    <div class="col-md-3 p-3">
      <button @click="upgradeBackendFunc" class="btn btn-primary me-2">后端升级</button>
      <button class="btn btn-success" @click="upgradeFrontFunc">前端升级</button>
    </div>
    <div v-if="log.length > 0" class="col-md-9 border">
      <pre type="shell">
          <code>
            {{ log }}
          </code>
        </pre>
    </div>
  </div>
</template>

<script lang="ts">
import {defineComponent, ref} from 'vue';
import {upgradeBackend, upgradeFront} from '@/api/system'
import alertify from '@/utils/alert'

export default defineComponent({
  name: 'Upgrade',
  setup() {
    const log = ref('')
    const upgradeFrontFunc = () => {
      upgradeFront().then(response => {
        log.value = response.data
      }).catch(e => {
        alertify.error(e.message)
      })
    }
    const upgradeBackendFunc = () => {
      upgradeBackend().then(response => {
        log.value = response.data
      }).catch(e => {
        alertify.error(e.message)
      })
    }
    return {
      log,
      upgradeFrontFunc,
      upgradeBackendFunc
    }
  }
});
</script>

<style scoped lang="scss">
</style>