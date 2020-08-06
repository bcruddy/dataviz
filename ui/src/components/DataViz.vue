<template>
  <div class="dataviz">
    <h1>dataviz</h1>
    <div id="container">[loading...]</div>
  </div>
</template>

<script>
import Highcharts from "highcharts";
import http from '@/utils/http';

export default {
  name: 'DataViz',
  async created() {
    const { data } = await http.get('/api/fake');

    Highcharts.chart('container', {
      chart: {
        zoomType: 'x',
      },
      title: {
        text: 'dataviz things',
      },
      subtitle: {
        text:
          document.ontouchstart === undefined
            ? 'Click and drag in the plot area to zoom in'
            : 'Pinch the chart to zoom in',
      },
      xAxis: {
        type: 'datetime',
      },
      yAxis: {
        title: {
          text: 'foo',
        },
      },
      legend: {
        enabled: false,
      },
      plotOptions: {
        area: {
          fillColor: {
            linearGradient: {
              x1: 0,
              y1: 0,
              x2: 0,
              y2: 1,
            },
            stops: [
              [0, Highcharts.getOptions().colors[0]],
              [
                1,
                Highcharts.color(Highcharts.getOptions().colors[0])
                  .setOpacity(0)
                  .get('rgba'),
              ],
            ],
          },
          marker: {
            radius: 2,
          },
          lineWidth: 1,
          states: {
            hover: {
              lineWidth: 1,
            },
          },
          threshold: null,
        },
      },
      series: [
        {
          data,
          type: 'area',
          name: 'USD to EUR'
        },
      ],
    });
  }
};
</script>

<style scoped lang="scss">
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
