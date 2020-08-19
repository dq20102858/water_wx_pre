<template>
  <div class="app-pages">
    <header class="app-top-bar">
      <span class="icons icon-back pull-left" @click="backURL"></span>
      <h1 class="titles">XXX站点运行图</h1>
    </header>
    <div class="app-content">
      <div class="app-site">
        <div class="app-site-body">
          <div class="app-site-content">
            <!-- <div class="nenghao">
              <span @click="statisticsEnergyDetail">查看能耗分析</span>
              当前控制室温度{{stationViewDetail.temp}}
            </div>-->
            <div class="jcname" @click="statisticsWaterDetail">进水口</div>
            <div class="ccname" @click="statisticsWaterDetail">出水口</div>
            <canvas id="line1" class="wline"></canvas>
            <canvas id="line2" class="wline"></canvas>
            <canvas id="line3" class="wline rotate270"></canvas>
            <canvas id="line4" class="wline"></canvas>
            <canvas id="line5" class="wline rotate90"></canvas>
            <canvas id="line6" class="wline rotate270"></canvas>
            <canvas id="line7" class="wline rotate270"></canvas>
            <canvas id="line8" class="wline rotate270"></canvas>
            <canvas id="line9" class="wline"></canvas>
            <canvas id="line10" class="rotate270 wline"></canvas>
            <canvas id="line11" class="wline"></canvas>
            <canvas id="line12" class="wline"></canvas>
            <canvas id="line13" class="wline"></canvas>
            <canvas id="line14" class="wline"></canvas>
            <canvas id="line15" class="wline rotate90"></canvas>
            <canvas id="line16" class="wline rotate90"></canvas>
            <canvas id="line17" class="wline"></canvas>
            <canvas id="line18" class="wline"></canvas>
            <canvas id="line19" class="wline"></canvas>
            <canvas id="line20" class="wline rotate90"></canvas>
            <canvas id="line21" class="wline rotate180"></canvas>
            <canvas id="line22" class="wline rotate180"></canvas>
            <canvas id="line23" class="wline rotate180"></canvas>
            <canvas id="line24" class="wline"></canvas>
            <canvas id="line25" class="wline rotate90"></canvas>
            <canvas id="line26" class="wline rotate270"></canvas>
            <canvas id="line27" class="wline rotate180"></canvas>
            <canvas id="line28" class="wline rotate180"></canvas>
            <canvas id="line29" class="wline rotate90"></canvas>
            <div class="adapter1 ad1"></div>
            <div class="adapter2 ad2"></div>
            <div class="adapter1 ad3"></div>
            <div class="adapter1 ad4"></div>
            <div class="adapter1 ad5"></div>
            <div class="adapter4 ad6"></div>
            <div class="adapter1 ad7"></div>
            <div class="adapter2 ad8"></div>
            <div class="adapter2 ad9"></div>
            <div class="adapter2 ad10"></div>
            <div class="adapter3 ad11"></div>
            <div class="adapter1 ad12"></div>
            <div class="adapter2 ad13"></div>
            <div class="adapter3 ad14"></div>
            <div class="adapter4 ad15"></div>
            <div class="j2text" @click="statisticsWaterQualityDetail">
              <div>PH：60</div>
              <div>电导率：60</div>
              <div>液位：60</div>
            </div>
            <div class="shbeng">
              <h3>排水泵</h3>
              <p class="zhtai">
                <em>设备状态：</em>
                <span class="start0">运行中</span>
              </p>
            </div>
            <div class="huiliu">
              <h3>硝酸液回流泵</h3>
              <p class="zhtai">
                <em>设备状态：</em>
                <span class="start1">停止运行</span>
              </p>
            </div>
            <div class="huiliu" style="top: -115px;left:830px;">
              <h3>淤泥回流泵</h3>
              <p class="zhtai">
                <em>设备状态：</em>
                <span class="start1">停止运行</span>
              </p>
            </div>
            <div class="fengji">
              <h3>1#风机</h3>
              <p class="zhtai">
                <em>设备状态：</em>
                <span class="start0">运行中</span>
              </p>
            </div>
            <div class="fengji" style="top: -170px; left:1115px;">
              <h3>2#风机</h3>
              <p class="zhtai">
                <em>设备状态：</em>
                <span class="start1">故障中</span>
              </p>
            </div>
            <div class="ziwai">
              <h3>紫外线消毒灯光</h3>
              <p class="zhtai">
                <em>设备状态：</em>
                <span class="start0">运行中</span>
              </p>
            </div>
            <div class="itembox1">
              <div class="wbox">
                <div class="bwater"></div>
                <div class="ble"></div>
              </div>
              <div class="bnames">栅格池</div>
            </div>
            <div class="itembox2">
              <div class="wbox">
                <div class="bwater"></div>
                <div class="ble"></div>
                <div class="bban"></div>
              </div>
              <div class="bnames">调节池</div>
            </div>
            <div class="itembox3">
              <div class="wbox">
                <div class="bwater"></div>
                <div class="ble"></div>
              </div>
              <div class="bnames">厌氧池</div>
            </div>
            <div class="itembox4">
              <div class="wbox">
                <div class="bwater"></div>
                <div class="ble"></div>
                <div class="bban"></div>
              </div>
              <div class="bnames">好氧池</div>
            </div>
            <div class="itembox5">
              <div class="wbox">
                <div class="bwater"></div>
                <div class="ble"></div>
                <div class="bban"></div>
              </div>
              <div class="bnames">二沉池</div>
            </div>
            <div class="itembox6">
              <div class="wbox">
                <div class="bwater"></div>
                <div class="ble"></div>
              </div>
              <div class="bnames">预留池</div>
            </div>
            <div class="itembox7">
              <div class="wboxs">
                <div class="bwater"></div>
                <div class="ble"></div>
              </div>
              <div class="bnames">消毒池</div>
            </div>
            <div class="itembox8">
              <div class="wbox">
                <div class="bwater"></div>
                <div class="ble"></div>
              </div>
              <div class="bnames">排放池</div>
            </div>
            <div class="itembox0">
              <div class="wbox0">
                <div class="bbans"></div>
                <div class="bbans" style="top:150px"></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import { Createline } from "../../utils/flowAnimation.js";
export default {
  data() {
    return {
      bodyWidth: "",
      bodyHeight: "",
      fatherStationList: [],
      childStationList: [],
      fatherStationId: this.$route.query.pid,
      chlidStationId: this.$route.query.sid,
      chlidStationName: "",
      stationViewDetail: []
    };
  },
  mounted() {
    this.flowAnimations("line1", 145, 6, "w");
    this.flowAnimations("line2", 145, 6, "w");
    this.flowAnimations("line3", 100, 6, "w");
    this.flowAnimations("line4", 100, 6, "w");
    this.flowAnimations("line5", 100, 6, "w");
    this.flowAnimations("line6", 200, 6, "w");
    this.flowAnimations("line7", 150, 6, "w");
    this.flowAnimations("line8", 100, 6, "w");
    this.flowAnimations("line9", 300, 6, "w");
    this.flowAnimations("line10", 60, 6, "w");
    this.flowAnimations("line11", 100, 6, "w");
    this.flowAnimations("line12", 100, 6, "w");
    this.flowAnimations("line13", 450, 6, "w");
    this.flowAnimations("line14", 200, 6, "w");
    this.flowAnimations("line15", 90, 6, "w");
    this.flowAnimations("line16", 150, 6, "w");
    this.flowAnimations("line17", 100, 6, "w");
    this.flowAnimations("line18", 100, 6, "w");
    this.flowAnimations("line19", 70, 6, "w");
    this.flowAnimations("line20", 290, 6, "w");
    this.flowAnimations("line21", 100, 6, "w");
    this.flowAnimations("line22", 200, 6, "w");
    this.flowAnimations("line23", 140, 6, "w");
    this.flowAnimations("line24", 140, 6, "w");
    this.flowAnimations("line25", 80, 6, "w");
    this.flowAnimations("line26", 80, 6, "w");
    this.flowAnimations("line27", 220, 6, "w");
    this.flowAnimations("line28", 150, 6, "w");
    this.flowAnimations("line29", 250, 6, "w");

    this.bodyWidth = document.documentElement.clientWidth;
    this.bodyHeight = document.documentElement.clientHeight;

    // let that = this;
    // this.timer = setInterval(function() {
    //   that.getStationViewList();
    // }, 5000);
  },
  beforeDestroy() {
    clearInterval(this.timer);
  },
  created() {
    // this.getFatherStationList();
    // this.getStationViewList();
  },
  methods: {
    backURL() {
      this.$router.go(-1); //返回上一层
    },
    flowAnimations(canvas, canvas_w, canvas_h, fx) {
      var data = {
        time: 150, //运动速度
        mx: 0, //起点位置
        my: 3,
        ly: 3,
        canvas_w: canvas_w,
        canvas_h: canvas_h,
        color: "#51b9d4", //颜色
        vx: 4,
        vy: 4,
        line_w: 2,
        fx: fx,
        width: 10, //线长
        jiange: 10 //间隔
      };
      //debugger;
      var res = new Createline(data);
      res.begin(canvas, data);
    },
    getStationViewList() {
      let sid = 2; //this.$route.query.sid
      this.request({
        url: "/station/getStationViewDetail",
        method: "get",
        params: { sid }
      }).then(response => {
        let data = response.data;
        if (data.status == 1) {
          id(data.data.length > 0);
          {
            this.stationViewDetail = data.data[0];
            console.log(this.stationViewDetail);
            console.log(this.stationViewDetail.temp);
          }
        }
      });
    },
    statisticsEnergyDetail() {
      this.$router.push({
        path: "/sitemanage/statisticsenergy",
        query: { id: this.$route.query.id }
      });
    },
    statisticsWaterDetail() {
      this.$router.push({
        path: "/sitemanage/statisticswater",
        query: { id: this.$route.query.id }
      });
    },
    statisticsWaterQualityDetail() {
      this.$router.push({
        path: "/sitemanage/statisticswaterquality",
        query: { id: this.$route.query.id }
      });
    }
    //end
  },
  beforeCreate() {
    document.querySelector("body").setAttribute("style", "background:#182175;");
  },
  beforeDestroy() {
    document.querySelector("body").removeAttribute("style");
  }
};
</script>
<style>

/*.app-site*/
.app-site{
  transform: rotate(90deg);
  transform-origin: bottom left;
  position: absolute;
  top: -100vw;
  height: 100vw;
  width: 100vh;
}

.app-site .app-site-content {
  position: relative;
  background:#24284d;
  height: 360px;
  width: 100%;
}
.nenghao {
  color: #fff;
  font-size: 20px;
  position: absolute;
  top: -340px;
  left: 10px;
}
.nenghao span {
  background: #3d88f5;
  color: #fff;
  border-radius: 3px;
  font-size: 16px;
  padding: 8px 10px;
  margin-right: 30px;
  cursor: pointer;
}
.app-site .itembox1 {
  position: absolute;
  top: 140px;
  left: 130px;
}
.app-site .itembox2 {
  position: absolute;
  top: 140px;
  left: 350px;
}
.app-site .itembox3 {
  position: absolute;
  top: 140px;
  left: 570px;
}
.app-site .itembox4 {
  position: absolute;
  top: 140px;
  left: 790px;
}
.app-site .itembox5 {
  position: absolute;
  top: 140px;
  left: 1010px;
}
.app-site .itembox6 {
  position: absolute;
  top: 260px;
  left: 1010px;
}
.app-site .itembox7 {
  position: absolute;
  top: 230px;
  left: 650px;
}
.app-site .itembox8 {
  position: absolute;
  top: 260px;
  left: 350px;
}
.app-site .itembox0 {
  position: absolute;
  top: 20px;
  left: 1010px;
}
.app-site .wbox {
  margin: 0 auto;
  background: url("~@/assets/image/site-01.png") no-repeat;
  width: 70px;
  height: 59px;
  z-index: 999;
  overflow: hidden;
  position: relative;
}
.app-site .wboxs {
  margin: 0 auto;
  background: url("~@/assets/image/site-001.png") no-repeat;
  background-size: 100%;
  width: 120px;
  height: 102px;
  z-index: 999;
  overflow: hidden;
  position: relative;
}
.app-site .wbox .bwater {
  margin-top: 40px;
  display: block;
  margin-bottom: 10px;
  background: url("~@/assets/image/site-02.png") no-repeat;
  height: 67px;
}
.app-site .wbox .ble {
  background: #1d689e;
  height: 2px;
  width: 150px;
}
.app-site .wbox .bban {
  background: url("~@/assets/image/site-04.png") no-repeat;
  background-size: 100%;
  width: 19px;
  height: 30px;
  position: absolute;
  right: 5px;
  bottom: 12px;
}
.app-site .wbox0 {
  margin: 0 auto;
  background: url("~@/assets/image/site-03.png") no-repeat;
  background-size: 100%;
  width: 100px;
  height: 85px;
  z-index: 999;
  overflow: hidden;
}
.app-site .wbox0 .bbans {
  background: url("~@/assets/image/site-05.png") no-repeat;
  background-size: 100%;
  width: 30px;
  height: 21px;
  position: absolute;
  left: 50px;
  top: 72px;
}
.app-site .bnames {
  color: #fff;
  text-align: center;
  font-size: 16px;
  padding-top: 10px;
}
.app-site .jcname {
  background: rgba(32, 95, 156, 0.5);
  color: #fff;
  width: 80px;
  text-align: center;
  padding: 4px 0px;
  border-radius: 2px;
  border: 1px #4274a5 solid;
  position: absolute;
  top: 30px;
  cursor: pointer;
}
.app-site .ccname {
  background: rgba(32, 95, 156, 0.5);
  color: #fff;
  width: 80px;
  text-align: center;
  padding: 4px 0px;
  border-radius: 2px;
  border: 1px #4274a5 solid;
  position: absolute;
  left: 150px;
  top: 313px;
  cursor: pointer;
}
.app-site .j2text {
  cursor: pointer;
  position: absolute;
  top: -120px;
  left: 150px;
  font-size: 12px;
}
.app-site .j2text div {
  background: rgba(32, 95, 156, 0.5);
  color: #fff;
  width: 105px;
  padding: 5px 0px;
  border-radius: 2px;
  border: 1px #4274a5 solid;
  margin-bottom: 10px;
  text-indent: 10px;
}
.shbeng {
  position: absolute;
  top: 80px;
  left: 470px;
  z-index: 9999;
  text-align: center;
}
.shbeng h3 {
  color: #fff;
  font-weight: 400;
  margin-bottom: 35px;
}
.huiliu {
  position: absolute;
  top: -75px;
  left: 700px;
  z-index: 9999;
  text-align: center;
}
.huiliu h3 {
  display: inline-block;
  color: #fff;
  font-weight: 400;
  font-size: 12px;
  margin-right: 5px;
}
.huiliu p {
  display: inline-block;
}
.fengji {
  position: absolute;
  top: -250px;
  left: 1115px;
  z-index: 9999;
  width: 118px;
}
.fengji h3 {
  color: #fff;
  font-weight: 400;
  font-size: 12px;
  margin-bottom: 5px;
}
.ziwai {
  position: absolute;
  top: 290px;
  left: 702px;
  z-index: 9999;
  text-align: center;
}
.ziwai h3 {
  color: #fff;
  font-weight: 400;
  margin-bottom: 15px;
}
.zhtai {
  border: 1px #4274a5 solid;
  color: #fff;
  border-radius: 2px;
  background: rgba(40, 70, 124, 0.5);
  font-size: 12px;
}
.zhtai em {
  display: inline-block;
  padding: 3px 0 3px 6px;
}
.zhtai span {
  display: inline-block;
  background: #3d88f5;
  padding: 3px 5px;
}
.zhtai .start1 {
  background: #ec450f;
}
/* line */
.app-site .wline {
  position: absolute;
  background: #1f5880;
  border-radius: 2px;
}
.app-site #line1 {
  left: 40px;
  top: 160px;
}
.app-site #line2 {
  left: 240px;
  top: 140px;
}
.app-site #line3 {
  left: 415px;
  top: 100px;
}
.app-site #line4 {
  left: 480px;
  top: 40px;
}
.app-site #line5 {
  left: 545px;
  top: 105px;
}
.app-site #line6 {
  left: 530px;
  top: -90px;
}
.app-site #line7 {
  left: 590px;
  top: 80px;
}
.app-site #line8 {
  left: 645px;
  top: 105px;
}
.app-site #line9 {
  left: 645px;
  top: 110px;
}
.app-site #line10 {
  left: 920px;
  top: 110px;
}
.app-site #line11 {
  left: 960px;
  top: 150px;
}
.app-site #line12 {
  left: 960px;
  top: 171px;
}
.app-site #line13 {
  left: 670px;
  top: 0px;
}
.app-site #line14 {
  left: 700px;
  top: 40px;
}
.app-site #line15 {
  left: 860px;
  top: 100px;
}
.app-site #line16 {
  left: 1050px;
  top: -10px;
}
.app-site #line17 {
  left: 705px;
  top: 170px;
}
.app-site #line18 {
  left: 925px;
  top: 100px;
}
.app-site #line19 {
  left: 1145px;
  top: 100px;
}
.app-site #line20 {
  left: 1080px;
  top: 260px;
}
.app-site #line21 {
  left: 1120px;
  top: 330px;
}
.app-site #line22 {
  left: 830px;
  top: 320px;
}
.app-site #line23 {
  left: 690px;
  top: 260px;
}
.app-site #line24 {
  left: 690px;
  top: 360px;
}
.app-site #line25 {
  left: 645px;
  top: 310px;
}
.app-site #line26 {
  left: 795px;
  top: 310px;
}
.app-site #line27 {
  left: 460px;
  top: 320px;
}
.app-site #line28 {
  left: 250px;
  top: 320px;
}
.app-site #line29 {
  left: 690px;
  top: -70px;
}
/* */
.adapter1 {
  position: absolute;
  width: 21px;
  height: 22px;
  background: url("~@/assets/image/w-g1.png") no-repeat;
}
.adapter2 {
  position: absolute;
  width: 21px;
  height: 22px;
  background: url("~@/assets/image/w-g2.png") no-repeat;
}
.adapter3 {
  position: absolute;
  width: 21px;
  height: 22px;
  background: url("~@/assets/image/w-g3.png") no-repeat;
}
.adapter4 {
  position: absolute;
  width: 21px;
  height: 22px;
  background: url("~@/assets/image/w-g4.png") no-repeat;
}
.ad1 {
  left: 460px;
  top: -50px;
}
.ad2 {
  left: 580px;
  top: -50px;
}
.ad3 {
  left: 625px;
  top: -200px;
}
.ad4 {
  left: 660px;
  top: -90px;
}
.ad5 {
  left: 945px;
  top: -240px;
}
.ad6 {
  left: 945px;
  top: -170px;
}
.ad7 {
  left: 690px;
  top: -50px;
}
.ad8 {
  left: 890px;
  top: -50px;
}
.ad9 {
  left: 1110px;
  top: -90px;
}
.ad10 {
  left: 1210px;
  top: 10px;
}
.ad11 {
  left: 1210px;
  top: 321px;
}
.ad12 {
  left: 680px;
  top: 260px;
}
.ad13 {
  left: 820px;
  top: 260px;
}
.ad14 {
  left: 820px;
  top: 351px;
}
.ad15 {
  left: 680px;
  top: 351px;
}
.rotate360 {
  transform: rotate(360deg);
  -ms-transform: rotate(360deg);
  -moz-transform: rotate(360deg);
  -webkit-transform: rotate(360deg);
  -o-transform: rotate(360deg);
}
.rotate270 {
  transform: rotate(270deg);
  -ms-transform: rotate(270deg);
  -moz-transform: rotate(270deg);
  -webkit-transform: rotate(270deg);
  -o-transform: rotate(270deg);
}
.rotate180 {
  transform: rotate(180deg);
  -ms-transform: rotate(180deg);
  -moz-transform: rotate(180deg);
  -webkit-transform: rotate(180deg);
  -o-transform: rotate(180deg);
}
.rotate90 {
  transform: rotate(90deg);
  -ms-transform: rotate(90deg);
  -moz-transform: rotate(90deg);
  -webkit-transform: rotate(90deg);
  -o-transform: rotate(90deg);
}
</style>