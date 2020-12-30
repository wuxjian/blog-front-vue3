<template>
  <div>
    <div class="row px-2">
      <div class="col-sm-6 col-lg-4">
        <system-status ref="cpu" :unit="'%'"/>
      </div>
      <div class="col-sm-6 col-lg-4">
        <system-status ref="memo" :unit="'M'" />
      </div>
      <div class="col-sm-6 col-lg-4">
        <system-status ref="disk" :unit="'G'" />
      </div>
    </div>
  </div>
</template>

<script>
import {defineComponent} from 'vue';
import SystemStatus from '@/comments/system_status/SystemStatus.vue'
import {getToken} from '@/utils/auth'

export default defineComponent({
  name: 'Dashboard',
  components: {
    SystemStatus
  },
  data() {
    return {
      ws: null,
      cpuData: [],
      memoData: [],
      diskData: [],
      connected: false,
      timer: null
    }
  },
  created() {
    if (this.timer != null) {
      clearInterval(this.timer)
    }
    this.initWebSocket()
  },
  unmounted() {
    if (this.timer != null) {
      clearInterval(this.timer)
    }
    this.ws.close()
  },
  methods: {
    initWebSocket() {
      let protocol = 'ws'
      if (location.protocol.startsWith('https')) {
        protocol += 's'
      }
      let uri = ''
      if (process.env.NODE_ENV === 'production') {
        uri = `${protocol}://${location.host}/system/status`
      } else {
        uri = `${protocol}://${location.hostname}:9000/system/status`
      }
      this.ws = new WebSocket(uri, getToken())
      this.ws.onmessage = this.wsMessage
      this.ws.onopen = this.wsOpen
      this.ws.onerror = this.wsError
      this.ws.onclose = this.wsClose
    },
    wsOpen() {
      console.log('连接成功!')
      this.connected = true
      if (this.timer != null) {
        clearInterval(this.timer)
      }
    },
    // eslint-disable-next-line @typescript-eslint/no-empty-function
    wsError() {
    },
    wsMessage(e) {
      const data = JSON.parse(e.data)
      if (data.type === 1) {
        const cpuData = {}
        cpuData.dataList = [
          { value: data.data.cpu_percent, name: '已使用' },
          { value: 100 - data.data.cpu_percent, name: '未使用' }
        ]
        cpuData.cpuCores = data.data.cpu_cores
        // eslint-disable-next-line @typescript-eslint/camelcase
        cpuData.cpu_percent = data.data.cpu_percent
        cpuData.title = `CPU\n\n使用率${data.data.cpu_percent}%\n\n核心数:${data.data.cpu_cores}个`

        const memoData = {}
        memoData.dataList = [
          { value: data.data.memory_used, name: '已使用' },
          { value: data.data.memory_total - data.data.memory_used, name: '未使用' }
        ]
        memoData.title = `内存\n\n使用率${data.data.memory_percent}%\n\n共${data.data.memory_total}M`

        const diskData = {}
        diskData.dataList = [
          { value: data.data.disk_used, name: '已使用' },
          { value: data.data.disk_total - data.data.disk_used, name: '未使用' }
        ]
        diskData.title = `硬盘\n\n使用率${data.data.disk_percent}%\n\n共${data.data.disk_total}G`
        this.$refs.cpu.initData(cpuData)
        this.$refs.memo.initData(memoData)
        this.$refs.disk.initData(diskData)
      }
    },
    wsSend(Data) {
      this.ws.send(Data)
    },
    wsClose() {
      if (this.connected) {
        let timerId = null
        this.timer = timerId = setInterval(() => {
          if (this.$refs.cpu) {
            console.log('断开连接,正在重连')
            this.initWebSocket()
          } else {
            clearInterval(timerId)
          }
        }, 5000)
      }
      this.connected = false
    }
  }
});
</script>

<style scoped lang="scss">
</style>