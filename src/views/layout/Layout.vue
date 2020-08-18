<template>
    <div class="app-wrapper" :class="classObj">
            <!-- <page-navbar></page-navbar> -->
            <page-main></page-main>
    </div>
</template>
<script>
    import { PageMain } from "./components";
    export default {
      data() {
        return {
          msg: 0,
        }
      },
      components: {
        PageMain
      },
      computed: {
        sidebar() {
          console.log(this.$store.state.app);
          return this.$store.state.app.sidebar;
        },
        device() {
          return this.$store.state.app.device;
        },
        classObj() {
          return {
            withoutAnimation: this.sidebar.withoutAnimation,
            mobile: this.device === "mobile"
          };
        }
      },
      methods: {
      
      }
    };
</script>