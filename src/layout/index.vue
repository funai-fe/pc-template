<template>
  <div :class="classObj" class="app-wrapper">
    <div v-if="device==='mobile'&&sidebar.opened" class="drawer-bg" @click="handleClickOutside" />
    <sidebar class="sidebar-container" @showCallUsDialog="$refs.CallUsDialog.open()" />
    <div class="main-container">
      <hamburger v-show="!sidebar.opened" :is-active="sidebar.opened" class="hamburger-container" @toggleClick="toggleSideBar" />
      <app-main />
    </div>
    <CallUsDialog ref="CallUsDialog" />
    <AddSessionDialog />
  </div>
</template>

<script>
import { mapGetters } from 'vuex'
import { Sidebar, AppMain } from './components'
import ResizeMixin from './mixin/ResizeHandler'
import Hamburger from '@/components/Hamburger'
import CallUsDialog from "@/layout/components/Sidebar/CallUsDialog.vue";
import AddSessionDialog from '@/components/AddSessionDialog/index.vue'

export default {
  name: 'Layout',
  components: {
    Sidebar,
    AppMain,
    Hamburger,
    CallUsDialog,
    AddSessionDialog
  },
  mixins: [ResizeMixin],
  computed: {
    ...mapGetters([
      'sidebar'
    ]),
    sidebar() {
      return this.$store.state.app.sidebar
    },
    device() {
      return this.$store.state.app.device
    },
    fixedHeader() {
      return this.$store.state.settings.fixedHeader
    },
    classObj() {
      return {
        hideSidebar: !this.sidebar.opened,
        openSidebar: this.sidebar.opened,
        withoutAnimation: this.sidebar.withoutAnimation,
        mobile: this.device === 'mobile'
      }
    }
  },
  methods: {
    toggleSideBar() {
      this.$store.dispatch('app/toggleSideBar')
    },
    handleClickOutside() {
      this.$store.dispatch('app/closeSideBar', { withoutAnimation: false })
    }
  }
}
</script>

<style lang="scss" scoped>
  @import "~@/styles/mixin.scss";
  @import "~@/styles/variables.scss";
  .app-wrapper {
    @include clearfix;
    position: relative;
    height: 100%;
    width: 100%;
    &.mobile.openSidebar{
      position: fixed;
      top: 0;
    }
    &.mobile{
      .hamburger-container {
        left: 0;
      }
    }
  }
  .drawer-bg {
    background: #000;
    opacity: 0.3;
    width: 100%;
    top: 0;
    height: 100%;
    position: absolute;
    z-index: 999;
  }
  .hamburger-container {
    position: fixed;
    top: 0px;
    left: 54px;
    z-index: 10;
    padding: 0 15px;
    line-height: 68px;
    cursor: pointer;
    transition: background .3s;
    -webkit-tap-highlight-color:transparent;

    &:hover {
      background: rgba(0, 0, 0, .025)
    }
  }
</style>
