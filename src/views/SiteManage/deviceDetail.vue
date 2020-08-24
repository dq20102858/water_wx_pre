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
            <h3>{{deviceDetailData.name}}</h3>
            <span v-if="deviceDetailData.type==1">风机</span>
            <span v-if="deviceDetailData.type==2">水泵</span>
            <span v-if="deviceDetailData.type==3">紫外灯</span>
            <span v-if="deviceDetailData.type==4">PLC</span>
          </div>
          <div class="twos">
            <div class="bd-img">
              <img :src="deviceDetailData.img" />
              <p>设备状态：{{deviceDetailData.work_status==1?"正常":"异常"}}</p>
            </div>
            <div class="bd-body">
              <p>设备编号：{{deviceDetailData.number}}</p>
              <p>设备型号：{{deviceDetailData.model}}</p>
              <p>运行时长：{{deviceDetailData.days}}</p>
              <p>最近维保：{{deviceDetailData.latest_time|formatGetDate}}</p>
              <p>品牌：{{deviceDetailData.brand}}</p>
              <p>质保期：{{deviceDetailData.warranty_time|formatGetDate}}</p>
              <p>今日能耗：{{deviceDetailData.energy}}</p>
              <p>累计能耗：{{deviceDetailData.total_energy}}</p>
              <p>采购人：{{deviceDetailData.purchaser}}</p>
            </div>
          </div>
        </div>

        <div class="app-device-chart">
          <div class="ones">
            <h3>设备耗能图</h3>
            <!-- <span>单位：度</span> -->
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
      deviceDetailData: []
    };
  },
  mounted() {
    this.getEcharts();
  },
  created() {
    this.getDeviceDetailData();
  },
  methods: {
    backURL() {
      this.$router.go(-1); //返回上一层
    },
    getEcharts() {
      this.request({
        url: "/device/getDeviceData",
        method: "get",
        params: { did: this.$route.query.id }
      }).then(res => {
        let data = res.data;
        if (data.status == 1) {
          this.deviceDetailData = data.data;
          let dataxAxis = data.data.x;
          let dataSeries = data.data.result;
          //  let dataxAxis = [12, 13, 14, 15];
          //   let dataSeries = [20, 70, 50, 90];
          //
          let myChart = this.$echarts.init(document.getElementById("oneChart"));
          if (data.data.x.length == 0) {
            myChart.showLoading({
              text: "暂无数据",
              color: "#fff",
              textColor: "#8a8e91",
              maskColor: "rgba(255, 255, 255, 0.8)"
            });
          }
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
          //
        }
      });
    },
    getDeviceDetailData() {
      this.request({
        url: "/device/getDeviceDetail",
        method: "get",
        params: { id: this.$route.query.id }
      }).then(res => {
        let data = res.data;
        if (data.status == 1) {
          this.deviceDetailData = data.data;
        }
      });
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
  width: 80%;
  overflow: hidden;
  white-space: nowrap;
  text-overflow: ellipsis;
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