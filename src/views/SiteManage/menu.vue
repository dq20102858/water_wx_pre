<template>
  <div class="app-pages">
    <div class="navss">
      <div class="navss">
        <a target="_blank" href="#/sitemanage/station" class>选择站点</a>
        <a target="_blank" href="#/sitemanage/stationDetail" class>站点详情</a>
        <!-- <a target="_blank"  href="#/sitemanage/main" class>运行图</a> -->
        <a target="_blank" href="#/dispatch" class>运维派单</a>
        <a target="_blank" href="#/record" class>报表统计</a>
        <a target="_blank" href="#/warning" class>告警列表</a>
        <a target="_blank" href="#/attendance" class>考勤打卡</a>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {};
  },
  created() {},
  methods: {}
};
</script>

<style>
.bm-view {
  width: 100%;
  height: calc(100vh - 100px);
}
.baidumap {
  position: relative;
}
.baidumap-so {
  position: absolute;
  top: 10px;
  left: 10px;
  z-index: 99999;
}
.map-so-input .el-button {
  background: #409eff;
  border: 1px #409eff solid;
  padding: 5px 5px 5px 10px;
  color: #fff;
}
.map-so-input .el-input-group__append {
  background: #409eff;
  border: 1px #409eff solid;
  color: #fff;
}
.navss {
  padding: 10px;
}
.navss a {
  padding: 5px;
  color: #333;
  white-space: nowrap;
  text-decoration: none;
  display: inline-block;
  font-weight: 700;
}
</style>