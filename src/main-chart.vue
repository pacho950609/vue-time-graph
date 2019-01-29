<script>
  import { Line, mixins } from 'vue-chartjs'
  const { reactiveProp } = mixins
  export default {
    extends: Line,
    mixins: [reactiveProp],
    props: ['chartData', 'options'],
    watch: {
      'chartData.labels' (newVal, lastVal) {
        if (newVal !== lastVal) {
          this.renderChart(this.chartData, this.options)
        }
      }
    },
    mounted () {
      if (this.chartData && this.options) {
        this.renderChart(this.chartData, this.options)
      }
    }
  }
</script>