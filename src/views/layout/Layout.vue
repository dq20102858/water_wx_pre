<template>
  <div class="app-wrapper">
    <router-view  :key="$route.fullPath"></router-view>
  </div>
</template>
<script>
export default {
  data() {
    return {
    };
  },
  methods: {}
};
</script>