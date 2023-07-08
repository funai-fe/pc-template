<template>
  <div class="sidebar-nav-container" :class="{'collapse':collapse}">
    <transition name="sidebarLogoFade" v-for="item in navs">
      <!-- <div v-if="collapse" class="sidebar-logo-link">
        <img v-if="logo" :src="logo" class="sidebar-logo">
        <h1 class="sidebar-title">{{ item.name }} </h1>
      </div> -->
      <div v-if="!collapse" class="sidebar-logo-link">
        <!-- <img v-if="logo" :src="logo" class="sidebar-logo"> -->
        <h1 class="sidebar-title">{{ item.name }} </h1>
      </div>
    </transition>
    <transition name="sidebarLogoFade">
      <div v-if="!collapse" class="sidebar-logo-link">
        <!-- <img v-if="logo" :src="logo" class="sidebar-logo"> -->
        <h1 class="sidebar-title">FUNAI {{ title }} </h1>
      </div>
    </transition>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'
export default {
  name: 'SidebarNavigation',
  props: {
    collapse: {
      type: Boolean,
      required: true
    }
  },
  data() {
    return {
      test: 'Vue Admin Template',
      logo: 'https://wpimg.wallstcn.com/69a1c46c-eb1c-4b46-8bd4-e9e686ef5251.png',
      navs: [{
        name: '切换主题'
      }, {
        name: '联系我们'
      }]
    }
  },
  computed: {
    ...mapGetters([
      'name'
    ]),
    title() {
      return this.$store.state.settings.title
    }
  }
}
</script>
<style lang="scss" scoped>
.sidebarLogoFade-enter-active {
  transition: opacity 1.5s;
}

.sidebarLogoFade-enter,
.sidebarLogoFade-leave-to {
  opacity: 0;
}

.sidebar-nav-container {
  position: absolute;
  bottom: 0;
  width: 100%;
  // height: 50px;
  // line-height: 50px;
  background: #2b2f3a;
  text-align: center;
  overflow: hidden;

  & .sidebar-logo-link {
    height: 100%;
    width: 100%;

    & .sidebar-logo {
      width: 32px;
      height: 32px;
      vertical-align: middle;
      margin-right: 12px;
    }

    & .sidebar-title {
      display: inline-block;
      margin: 0;
      color: #fff;
      font-weight: 600;
      line-height: 33px;
      font-size: 14px;
      font-family: Avenir, Helvetica Neue, Arial, Helvetica, sans-serif;
      vertical-align: middle;
    }
  }

  &.collapse {
    .sidebar-logo {
      margin-right: 0px;
    }
  }
}
</style>