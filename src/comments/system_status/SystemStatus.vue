<template>
  <div :style="{height:height}"  style="background-color: #fff;width: 100%" />
</template>

<script>
import {defineComponent} from 'vue';
import echarts from 'echarts'

export default defineComponent({
  name: 'SystemStatus',
  props: {
    height: {
      type: String,
      default: '300px'
    },
    unit: {
      type: String,
      default: '%'
    }
  },
  data() {
    return {
      chart: null
    }
  },
  mounted() {
    this.$nextTick(() => {
      this.initChart()
    })
  },
  beforeUnmount() {
    if (!this.chart) {
      return
    }
    this.chart.dispose()
    this.chart = null
  },
  methods: {
    initChart() {
      // eslint-disable-next-line @typescript-eslint/no-this-alias
      const _this = this
      setTimeout(() => {
        _this.chart = echarts.init(_this.$el)
      }, 500)

    },
    initData(data) {
      this.chart.setOption({
        title: {
          text: data.title,
          top: '35%',
          textAlign: 'center',
          left: '49%',
          textStyle: {
            fontSize: 12,
            fontWeight: '400'
          }
        },
        tooltip: {
          trigger: 'item',
          formatter: '{a} <br/>{b}: {c} ({d}%)',
          show: false
        },
        legend: {
          top: 10,
          left: 'left',
          data: ['已使用', '未使用']
        },
        series: [
          {
            name: data.title,
            radius: ['50%', '70%'],
            type: 'pie',
            color: ['#c23531', '#2d8240', '#2f4554', '#61a0a8', '#d48265', '#91c7ae', '#749f83', '#ca8622', '#bda29a', '#6e7074', '#546570', '#c4ccd3'],
            avoidLabelOverlap: false,
            label: {
              show: true,
              position: 'outside',
              formatter: params => {
                return `${params.name}:${params.value}${this.unit}`
              }
            },
            data: data.dataList
          }
        ]
      })
    }
  }
});
</script>

<style scoped lang="scss">
</style>