<template>
  <div class="app-wrapper">
    <router-view :key="$route.fullPath"></router-view>
    <div class="menus" @click="showMenu">菜单</div>
    <el-dialog title="临时菜单" :visible.sync="dialogVisible" width="90%" :before-close="handleClose">
      <div class="navss">
        <a @click="hideMenu" href="#/sitemanage/station" class>选择站点</a>
        <a @click="hideMenu" href="#/sitemanage/stationDetail" class>站点详情</a>
        <!-- <a  href="#/sitemanage/main" class>运行图</a> -->
        <a @click="hideMenu" href="#/dispatch" class>运维派单</a>
        <a @click="hideMenu" href="#/record" class>报表统计</a>
        <a @click="hideMenu" href="#/warning" class>告警列表</a>
        <a @click="hideMenu" href="#/attendance" class>考勤打卡</a>
      </div>
    </el-dialog>
  </div>
</template>
<script>
export default {
  data() {
    return { dialogVisible: false };
  },
  methods: {
    showMenu() {
      this.dialogVisible=true;
    },
    hideMenu(){
         this.dialogVisible=false;
    }
  }
};
</script>
<style >
.menus {
  position: fixed;
  background: rgba(0, 0, 0, 0.7);
  bottom: 20px;
  right: 20px;
  width: 40px;
  height: 40px;
  line-height: 40px;
  text-align: center;
  color: #fff;
  border-radius: 100%;
  z-index: 99999;
}
.navss {
  padding:20px 10px ;
}
.navss a {
  padding: 10px;
  color: #333;
  white-space: nowrap;
  text-decoration: none;
  display: inline-block;
  font-weight: 700;
}
</style>