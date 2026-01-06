<template>
  <Scatter :data="chartData" :options="chartOptions" />
</template>

<script lang="ts">
import {
  Chart as ChartJS,
  LinearScale,
  PointElement,
  LineElement,
  Tooltip,
  Legend
} from 'chart.js'
import { Scatter } from 'vue-chartjs'

ChartJS.register(LinearScale, PointElement, LineElement, Tooltip, Legend)

export default {
  name: 'LineChart',
  components: {
    Scatter,
  },
  props: {
    chartData: {
      type: Object,
      required: true,
    },
    chartOptions: {
      type: Object,
      default: () => ({}),
    },
  },
};
</script>
