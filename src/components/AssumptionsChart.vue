<template>
  <div>
    <apexchart :height="height" :width="width" :options="chartOptions" :series="series"></apexchart>
  </div>
</template>

<script>
import VueApexCharts from "vue-apexcharts";
import Vue from "vue";

export default {
  components: {
    apexchart: VueApexCharts
  },
  props: ["data", "height", "width", "showLabels", "boldLabels"],
  data() {
    return {};
  },
  computed: {
    chartOptions() {
      return {
        chart: {
          type: "heatmap",
          toolbar: { show: false }
        },
        grid: {
          padding: { top: -30, bottom: -20 }
        },
        legend: { show: false },
        dataLabels: {
          enabled: true,
          formatter: function(val, opts) {
            return (val * 100).toFixed(0) + "%";
          },
          style: { fontWeight: 400, fontSize: "0.8rem" }
        },
        xaxis: {
          tooltip: {
            enabled: false
          },
          labels: {
            style: {
              fontSize: "0.9rem"
            },
            rotate: -30,
            rotateAlways: true
          }
        },
        yaxis: {
          labels: {
            show: this.showLabels,
            minWidth: this.showLabels ? 325 : 20,
            maxWidth: this.showLabels ? 325 : 20,
            style: {
              fontSize: "0.9rem",
              fontWeight: this.boldLabels ? "bold" : "normal"
            }
          }
        },
        tooltip: {
          y: {
            formatter: function(value, opts) {
              return (value * 100).toFixed(0) + "%";
            }
          },
          x: { show: true },
          style: { fontSize: "1rem" },
          enabled: window.screen.width <= 1024
        },

        plotOptions: {
          heatmap: {
            radius: 2,
            enableShades: false,
            colorScale: {
              ranges: [
                {
                  from: 0,
                  to: 0.1,
                  color: "#fdd0bc"
                },
                {
                  from: 0.1,
                  to: 0.2,
                  color: "#fcb499"
                },
                {
                  from: 0.2,
                  to: 0.3,
                  color: "#fc9576"
                },
                {
                  from: 0.3,
                  to: 0.4,
                  color: "#fb7858"
                },
                {
                  from: 0.4,
                  to: 0.5,
                  color: "#f7593f"
                },
                {
                  from: 0.5,
                  to: 0.6,
                  color: "#ec382b"
                },
                {
                  from: 0.6,
                  to: 0.7,
                  color: "#d11e1f"
                },
                {
                  from: 0.7,
                  to: 0.8,
                  color: "#b61319"
                },
                {
                  from: 0.81,
                  to: 1.0,
                  color: "#b61319"
                }
              ]
            }
          }
        }
      };
    },
    series() {
      let out = [],
        r = [];

      let d = this.data;

      for (let irow = d["index"].length - 1; irow >= 0; irow--) {
        r = [];
        for (let icol = 0; icol < d["columns"].length; icol++) {
          r.push({
            x: d["columns"][icol],
            y: d["data"][irow][icol]
          });
        }
        out.push({
          name: d["index"][irow],
          data: r
        });
      }
      return out;
    }
  },
  mounted() {
    this.$nextTick(() => {
      $(this.$el)
        .find(".apexcharts-datalabel")
        .each((i, x) => {
          let p = parseFloat(x.innerHTML.slice(0, -1));
          if (p < 40) {
            $(x).attr("fill", "#121516");
          }
        });

      $(this.$el)
        .find(".apexcharts-yaxis-label")
        .each((i, x) => {
          let t = x.innerHTML;
          if (t.indexOf(">Total<") !== -1) {
            $(x).attr("font-weight", "bold");
          }
        });
    });
  }
};
</script>

<style>
</style>