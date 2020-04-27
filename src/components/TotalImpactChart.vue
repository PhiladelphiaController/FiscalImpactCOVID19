<template>
  <div class="d-flex justify-content-center">
    <div class="d-flex flex-column justify-content-center">
      <div class="chart-title mb-3 w-100">
        Estimated Tax Revenue Impact for Major Taxes:
        <br />Combined Total for FY20 and FY21
      </div>
      <apexchart :height="height" :width="width" :options="chartOptions" :series="series"></apexchart>
      <div class="chart-footer">
        <span>Note: Baseline estimates from FY21-FY25 Five Year Financial Plan, as proposed March 5, 2020.</span>
        <br />
        <span>&#42;&nbsp;Includes both the City and PICA portion of the tax.</span>
      </div>
    </div>
  </div>
</template>

<script>
import VueApexCharts from "vue-apexcharts";
import Vue from "vue";

export default {
  components: {
    apexchart: VueApexCharts
  },
  data() {
    return {
      data: require("@/data/total_impact.json"),
      height: 500
    };
  },
  computed: {
    width() {
      return Math.min(window.screen.width * 0.95, 800);
    },
    chartOptions() {
      return {
        chart: {
          type: "bar",
          toolbar: { show: false }
        },
        legend: {
          position: "top",
          fontSize: "20px",
          fontFamily: '"Avenir", Helvetica, Arial, sans-serif',
          onItemClick: {
            toggleDataSeries: false
          },
          onItemHover: {
            highlightDataSeries: false
          },
          markers: { width: 16, height: 16, radius: 16 }
        },
        colors: ["#2176d2", "#58c04d"],
        dataLabels: {
          enabled: false
        },
        xaxis: {
          categories: this.categories,
          labels: {
            style: { fontSize: "1rem" },
            hideOverlappingLabels: false
          },
          position: "bottom"
        },
        yaxis: {
          labels: {
            formatter: function(value) {
              let out = "$" + Math.abs(value).toFixed("0") + "M";
              if (value < 0) out = "\u2212" + out;
              return out;
            },
            style: { fontSize: "1rem" }
          }
        },
        tooltip: {
          y: {
            formatter: function(value) {
              let out = "$" + Math.abs(value).toFixed("1") + "M";
              if (value < 0) out = "\u2212" + out;
              return out;
            }
          },
          style: { fontSize: "1rem" }
        }
      };
    },
    categories() {
      let out = [],
        t;
      for (let i = 0; i < this.data["index"].length; i++) {
        t = this.data["index"][i];
        if (t == "BIRT" || t == "Net Profits") t = t + "\u002A";
        out.push(t);
      }
      return out;
    },
    series() {
      let out = [],
        row = [];
      for (let icol = 0; icol < this.data["columns"].length; icol++) {
        row = [];
        for (let irow = 0; irow < this.data["index"].length; irow++) {
          row.push(this.data["data"][irow][icol]);
        }
        out.push({
          name: this.data["columns"][icol],
          data: row
        });
      }
      return out;
    }
  }
};
</script>

<style  scoped>
.chart-title {
  font-weight: 500;
  font-size: 1.8rem;
  text-align: center;
}
.chart-footer {
  font-size: 0.8rem;
  font-style: italic;
}
</style>