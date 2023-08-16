<template>
  <section
    class="app-main"
    :style="computedHeaderStyle"
    :class="{ 'fixed-header': fixedHeader }"
  >
    <transition name="fade-transform" mode="out-in">
      <div style="height: 100%">
        <div class="header-wrap" :class="{ 'fixed-header': fixedHeader }">
          <CommonHeader />
        </div>
        <keep-alive>
          <router-view :key="key" />
        </keep-alive>
        
      </div>
    </transition>
  </section>
</template>

<script>
import { mapGetters } from "vuex";
import CommonHeader from "./CommonHeader.vue";
export default {
  name: "AppMain",
  components: {
    CommonHeader,
  },
  data() {
    return {
      headerHeight: 0,
    };
  },
  watch: {
    $route(to, from) {
      // this.key++; // 每次路由变化时更新 key，触发重新渲染 router-view
      this.$nextTick(() => {
        this.adjustHeight(); // 在 DOM 渲染后执行高度调整
      });
    },
  },
  computed: {
    ...mapGetters(["sidebar"]),
    key() {
      return this.$route.path;
    },
    fixedHeader() {
      return this.$store.state.settings.fixedHeader;
    },
    computedHeaderStyle() {
      return {
        height:
          this.headerHeight > 0
            ? `calc(100% - ${this.headerHeight}px)`
            : "100%",
      };
    },
  },
  methods: {
    adjustHeight() {
      const headerElement = document.querySelector(".common-header");
      this.headerHeight = headerElement ? headerElement.offsetHeight : 0;
    },
  },
};
</script>

<style lang="scss" scoped>
@import "~@/styles/variables.scss";
.app-main {
  height: 100%;
  min-height: calc(100vh - 144px);
  width: 100%;
  position: relative;
  // overflow: hidden;
  &.has-header {
    height: calc(100% - 144px);
  }
  &.fixed-header {
    padding-top: 144px;
  }
}

.header-wrap {
  &.fixed-header {
    position: fixed;
    top: 0;
    right: 0;
    z-index: 9;
    width: calc(100% - #{$sideBarWidth});
    transition: width 0.28s;
  }
}

.hideSidebar .fixed-header {
  width: calc(100% - 54px);
}

.mobile .fixed-header {
  width: 100%;
}

@media (max-width: 768px) {
  .app-main {
    min-height: calc(100vh - 108px);
    &.fixed-header {
      padding-top: 108px;
    }
  }
}
@media (max-width: 576px) {
  .app-main {
    min-height: calc(100vh - 65px);
    &.fixed-header {
      padding-top: 65px;
    }
  }
}
</style>

<!-- <style lang="scss">
// fix css style bug in open el-dialog
.el-popup-parent--hidden {
  .fixed-header {
    padding-right: 15px;
  }
}
</style> -->
