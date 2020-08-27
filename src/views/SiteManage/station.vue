<template>
  <div class="app-pages">
    <header class="app-top-bar">
      <span class="icons icon-back pull-left" @click="backURL"></span>
      <h1 class="titles">选择站点</h1>
    </header>
    <div class="app-content">
      <div class="station-so">
        <el-input
          placeholder="请输入站点名"
          v-model="chlidStationName"
          class="input-with-select"
          clearable
          @change="chlidStationNameEvent"
        >
          <el-select
            v-model="fatherStationId"
            slot="prepend"
            placeholder="请选择"
            @change="fatherStationEvent($event)"
          >
            <el-option label="全部" :value="0"></el-option>
            <el-option
              v-for="item in fatherStationList"
              :key="item.id+''"
              :label="item.name"
              :value="item.id"
            ></el-option>
          </el-select>
          <el-button slot="append" icon="el-icon-search" @click="chlidStationEvent"></el-button>
        </el-input>
      </div>
      <div class="app-content-rows">
        <div class="station-list">
          <h2>{{fatherStationName}}</h2>
          <div class="warp">
            <div
              class="item"
              v-for="item in childStationList"
              :key="item.id"
              @click="stationDetail(item.id)"
            >
              <div class="text">
                <h3>{{item.name}}</h3>
                <!-- <div class="status">
                  <span class="status1">正常运行</span>
                </div>-->
              </div>
              <h4>{{item.address}}</h4>
            </div>
          </div>
          <div v-if="childStationList.length==0" class="app-nodatas">暂无数据</div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      fatherStationId: 0,
      fatherStationName: "",
      fatherStationList: [],
      chlidStationName: "",
      childStationList: []
    };
  },
  created() {
    this.getStationList();
  },
  methods: {
    backURL() {
      this.$router.push("/sitemanage");
    },
    getStationList() {
      this.request({
        url: "/station/getStationLists",
        method: "get"
      }).then(response => {
        let res = response.data;
        if (res.status == 1) {
          let dataList = res.data;
          this.fatherStationList = dataList;
          let stationid = this.$route.query.sid;
          console.log(stationid);
          if (typeof stationid == "undefined" || stationid == 0) {
            stationid = 0;
             this.fatherStationName ="全部";
            let newJson = [];
            for (let i = 0; i < dataList.length; i++) {
              for (let y = 0; y < dataList[i].child.length; y++) {
                let tempJson = {
                  id: dataList[i].child[y].id,
                  name: dataList[i].child[y].name,
                  address: dataList[i].child[y].address
                };
                newJson.push(tempJson);
              }
            }
            this.childStationList = newJson;
          } else {
            this.fatherStationId = this.fatherStationList.find(
              item => item.id == stationid
            ).id;
            this.fatherStationName = this.fatherStationList.find(
              item => item.id == stationid
            ).name;
            this.fatherStationList.map(ele => {
              if (ele.id == stationid) {
                this.childStationList = ele.child;
              }
            });
          }
        }
      });
    },
    fatherStationEvent(id) {
      this.$router.push({
        path: "/sitemanage/station",
        query: { sid: id }
      });
    },
    chlidStationNameEvent() {
      let sname = this.chlidStationName;
      if (sname == "" || sname == null) {
        this.getStationList();
      }
    },
    chlidStationEvent() {
      let sname = this.chlidStationName;
      let json = this.childStationList;
      if (sname == "" || sname == null) {
        return json;
      } else {
        let newJson = [];
        for (var i = 0; i < json.length; i++) {
          if (json[i].name.indexOf(sname) > -1) {
            var tempJson = {
              id: json[i].id,
              name: json[i].name,
              address: json[i].address
            };
            newJson.push(tempJson);
          }
        }
        this.childStationList = newJson;
        return json;
      }
    },
    stationDetail(id) {
      this.$router.push({
        path: "/sitemanage/stationdetail",
        query: { sid: id }
      });
    }
    //end
  }
};
</script>
<style>
.station-so {
  padding: 15px 15px 1px 15px;
}
.station-so .el-input__inner {
  border: none;
}
.station-so .el-input-group__prepend {
  background: #dbecfd;
  border-radius: 30px 0 0 30px;
  border: none;
}
.station-so .el-input-group__append {
  background: #fff;
  border-radius: 0 30px 30px 0;
  border: none;
}
.station-so .el-select .el-input--suffix .el-input__inner {
  padding-right: 30px;
  width: 130px;
  text-align: center;
}
.station-so .el-select__caret {
  color: #338ff6 !important;
}
.station-so .el-button--medium {
  padding: 10px;
}
/* list */
.station-list h2 {
  font-size: 18px;
  color: #333;
  padding-left: 10px;
  margin-bottom: 20px;
}
.station-list .warp {
  background: #fff;
  border-radius: 6px;
  overflow: hidden;
}
.station-list .item {
  padding-bottom: 20px;
  margin: 20px;
  border-bottom: 1px #ddd solid;
  overflow: hidden;
}
.station-list .item:last-child {
  border: none;
  padding-bottom: 0;
}
.station-list .item .text {
  display: flex;
  justify-content: space-between;
  margin-bottom: 6px;
}
.station-list .item h3 {
  color: #303030;
  font-size: 15px;
  float: left;
  line-height: 20px;
  margin-top: 5px;
}
.station-list .item h4 {
  color: #7e7e7e;
  font-size: 14px;
  font-weight: 400;
}
.station-list .item .status {
  margin-top: 0;
  margin-left: 20px;
}
.station-list .item span {
  float: right;
  padding: 6px 15px;
  border-radius: 30px;
  color: #fff;
  white-space: nowrap;
}
.station-list .item .status1 {
  background: #00dd86;
}
.station-list .item .status2 {
  background: #fd3c5a;
}
</style>