<template>
  <div class="sidebar-logo-container" :class="{ collapse: collapse }">
    <transition name="sidebarLogoFade">
      <router-link
        v-if="collapse"
        key="collapse"
        class="sidebar-logo-link"
        to="/"
      >
        <img
          v-if="logo"
          :src="logo"
          class="sidebar-logo scale"
        />
        <hamburger
          v-else
          :is-active="sidebar.opened"
          class="hamburger-container"
          @toggleClick="toggleSideBar"
        />
        <!-- <h1 v-else class="sidebar-title">{{ title }} </h1> -->
      </router-link>
      <router-link v-else key="expand" class="sidebar-logo-link" to="/">
        <img
          v-if="logo"
          :src="logo"
          class="sidebar-logo"
        />
        <hamburger
          :is-active="sidebar.opened"
          class="hamburger-container"
          @toggleClick="toggleSideBar"
        />
        <!-- <h1 class="sidebar-title">{{ title }} </h1> -->
      </router-link>
    </transition>
  </div>
</template>

<script>
import { mapGetters } from "vuex";
import logo from '@/assets/common/image_logo@2x.png'
import Hamburger from "@/components/Hamburger";
export default {
  name: "SidebarLogo",
  props: {
    collapse: {
      type: Boolean,
      required: true,
    },
  },
  components: {
    // Breadcrumb,
    Hamburger,
  },
  computed: {
    ...mapGetters(["sidebar"]),
  },
  data() {
    return {
      // title: 'FunAi',
      logo: logo
    };
  },
  methods: {
    toggleSideBar() {
      this.$store.dispatch("app/toggleSideBar");
    },
  },
};
</script>

<style lang="scss" scoped>
.sidebarLogoFade-enter-active {
  transition: opacity 1.5s;
}

.sidebarLogoFade-enter,
.sidebarLogoFade-leave-to {
  opacity: 0;
}

.sidebar-logo-container {
  position: relative;
  width: 100%;
  height: 70px;
  line-height: 50px;
  background: #F9FAFB;
  overflow: hidden;
  border-bottom: 1px solid #E5E7EB;

  & .sidebar-logo-link {
    display: flex!important;
    align-items: center;
    justify-content: space-between;
    height: 100%;
    width: 100%;

    & .sidebar-logo {
      width: 78px;
      height: 70px;
      vertical-align: middle;
      margin-left: 13px;
      &.scale {
        transform: scale(.7);
        margin-left: -14px;
      }
    }

    // .hamburger-container {
    //   line-height: 46px;
    //   height: 100%;
    //   float: left;
    //   cursor: pointer;
    //   transition: background 0.3s;
    //   -webkit-tap-highlight-color: transparent;

    //   &:hover {
    //     background: rgba(0, 0, 0, 0.025);
    //   }
    // }

    // & .sidebar-title {
    //   display: inline-block;
    //   margin: 0;
    //   color: #fff;
    //   font-weight: 600;
    //   line-height: 50px;
    //   font-size: 14px;
    //   font-family: Avenir, Helvetica Neue, Arial, Helvetica, sans-serif;
    //   vertical-align: middle;
    // }
  }

  &.collapse {
    .sidebar-logo {
      margin-right: 0px;
    }
  }
}
</style>
