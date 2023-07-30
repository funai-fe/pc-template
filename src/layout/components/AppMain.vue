<template>
  <section class="app-main">
    <transition name="fade-transform" mode="out-in">
      <router-view :key="key" />
    </transition>
  </section>
</template>

<script>
import { mapGetters } from 'vuex'
export default {
  name: 'AppMain',
  computed: {
    ...mapGetters([
      'sidebar'
    ]),
    key() {
      return this.$route.path
    }
  },
  methods: {}
}
</script>

<style lang="scss" scoped>
.app-main {
  min-height: calc(100vh - 144px);
  width: 100%;
  position: relative;
  overflow: hidden;
}

.fixed-header+.app-main {
  padding-top: 144px;
}

@media (max-width: 768px) {
  .app-main {
    min-height: calc(100vh - 108px);
  }
  .fixed-header+.app-main {
    padding-top: 108px;
  }
}
@media (max-width: 576px) {
  .app-main {
    min-height: calc(100vh - 65px);
  }
  .fixed-header+.app-main {
    padding-top: 65px;
  }
}
</style>

<style lang="scss">
// fix css style bug in open el-dialog
.el-popup-parent--hidden {
  .fixed-header {
    padding-right: 15px;
  }
}
</style>
