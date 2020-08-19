<template>
  <div class="app-pages">
    <header class="app-top-bar">
      <span class="icons icon-back pull-left" @click="backURL"></span>
      <h1 class="titles">设备详情</h1>
    </header>
    <div class="app-content">
      <div class="app-content-rows">
        <div class="app-device-detail">
          <div class="ones">
            <h3>风机</h3>
            <span>编号：3215461464</span>
          </div>
          <div class="twos">
            <div class="bd-img">
              <img :src="require('@/assets/image/avatar.gif')" />
              <p>运行状态：正常</p>
            </div>
            <div class="bd-body">
              <p>设备型号：FJ1231462</p>
              <p>运行时长：16小时</p>
              <p>最近维保：2020-08-17</p>
              <p>品牌：XXX</p>
              <p>质保期：XXXX</p>
              <p>今日能耗：XXXX</p>
              <p>累计能耗：XXXX</p>
              <p>采购人：XXXX</p>
            </div>
          </div>
        </div>

        <div class="app-device-chart">
          <div class="ones">
            <h3>设备耗能图</h3>
            <span>单位：度</span>
          </div>
          <div class="echartbox">
            <div id="oneChart" class="echarts"></div>
          </div>
        </div>
        <!-- // -->
      </div>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      tabType: 2,
      page_cur: 1,
      page_data_total: 0,
      page_size: 20,
      page_total: 0,
      dataList: []
    };
  },
  mounted() {
    this.getEcharts();
  },
  created() {},
  methods: {
    backURL() {
      this.$router.go(-1); //返回上一层
    },
    getEcharts() {
      //let dataxAxis = data.data.x;
      //let dataSeries = data.data.data;
      let dataxAxis = [12, 13, 14, 15];
      let dataSeries = [20, 70, 50, 90];
      //
      let myChart = this.$echarts.init(document.getElementById("oneChart"));
      // if (data.data.length == 0) {
      //   myChart.showLoading({
      //     text: "暂无数据",
      //     color: "#fff",
      //     textColor: "#8a8e91",
      //     maskColor: "rgba(255, 255, 255, 0.8)"
      //   });
      // }
      var option = {
        backgroundColor: "#fff",
        tooltip: {
          trigger: "axis",
          axisPointer: {
            type: "shadow" // 默认为直线，可选为：'line' | 'shadow'
          }
        },
        toolbox: {
          feature: {
            saveAsImage: {}
          }
        },
        grid: {
          left: "1%",
          right: "2%",
          bottom: "2%",
          top: "10%",
          containLabel: true
        },
        // legend: {
        //   data: ["总能耗"],
        //   textStyle: {
        //     color: ["#00D98B"],
        //     fontSize: 15
        //   },
        //   itemWidth: 32,
        //   itemHeight: 15
        // },
        xAxis: {
          type: "category",
          data: dataxAxis,
          axisLine: {
            show: true,
            lineStyle: {
              color: "#869ec6"
            }
          },
          splitLine: {
            show: true,
            lineStyle: {
              color: "#eff4f6"
            }
          },
          axisLabel: {
            textStyle: {
              fontFamily: "Microsoft YaHei"
            }
          }
        },
        yAxis: {
          type: "value",
          // max: "1200",
          axisLine: {
            show: true,
            lineStyle: {
              color: "#869ec6"
            }
          },
          splitLine: {
            show: true,
            lineStyle: {
              color: "#eff4f6"
            }
          },
          axisLabel: {}
        },
        series: [
          {
            name: "总能耗",
            type: "line",
            barWidth: "12",
            label: {
              normal: {
                show: true,
                fontSize: 12,
                color: "#00D98B",
                position: "top"
              }
            },
            itemStyle: {
              normal: {
                color: "#00D98B"
              }
            },
            
            data: dataSeries
          }
        ]
      };
      myChart.setOption(option);
      myChart.resize();
      window.addEventListener("resize", function() {
        myChart.resize();
      });
    },
    getDataList() {
      let page = this.page_cur;
      let type = this.tabType;
      this.request({
        url: "/alert/getAlertPages",
        method: "get",
        params: { page, type }
      }).then(res => {
        let data = res.data;
        if (data.status == 1) {
          this.dataList = data.data.data;
          this.page_cur = parseInt(data.data.current_page);
          this.page_total = data.data.last_page;
          this.page_data_total = data.data.total;
          this.page_size = data.data.per_page;
        }
      });
    },
    pageChange(value) {
      this.page_cur = value;
      this.getDataList();
    },
    pageToFirst() {
      this.page_cur = 1;
      this.getDataList();
    },
    pageToLast() {
      this.page_cur = this.page_total;
      this.getDataList();
    }
  }
};
</script>
<style>
.app-device-detail {
  background: #fff;
  border-radius: 6px;
}
.app-device-detail .ones {
  background: #2b8cf9;
  display: block;
  overflow: hidden;
  border-radius: 6px 6px 0 0;
  padding: 10px 15px;
}
.app-device-detail .ones h3 {
  font-size: 16px;
  font-weight: 700;
  float: left;
  color: #fff;
}
.app-device-detail .ones span {
  float: right;
  font-size: 16px;
  color: #fff;
}
.app-device-detail .twos {
  padding: 13px 15px 15px 15px;
}
.app-device-detail .bd-img {
  float: left;
  margin-right: 14px;
}
.app-device-detail .bd-img img {
  background: #fafafa;
  max-width: 100px;
  height: 110px;
  border-radius: 3px;
  display: block;
  margin-top: 5px;
  margin-bottom: 20px;
}
.app-device-detail .bd-body {
  overflow: hidden;
}
.app-device-detail p {
  color: #747373;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  line-height: 24px;
}

.app-device-chart {
  background: #fff;
  border-radius: 6px;
  padding: 15px;
  margin-top: 15px;
}
.app-device-chart .ones h3 {
  font-size: 16px;
  font-weight: 700;
  float: left;
  color: #303030;
}
.app-device-chart .ones span {
  float: right;
  font-size: 14px;
  color: #747373;
}
.app-device-chart .echartbox {
  margin-top: 20px;
  overflow: hidden;
  width: 100%;
}
.app-device-chart .echarts {
  height: 300px;
  width: 100%;
}
</style>