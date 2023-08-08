<template>
  <div class="sidebar-logo-container" :class="{ collapse: collapse }">
    <transition name="sidebarLogoFade">
      <div
        v-if="collapse"
        class="sidebar-logo-link"
      >
        <img
          v-if="logo && showLogo"
          :src="logo"
          class="sidebar-logo scale"
        />
        <hamburger
          v-else
          :is-active="sidebar.opened"
          class="hamburger-container"
          :class="{ hidden: !showLogo }"
          @toggleClick="toggleSideBar"
        />
      </div>
      <div v-else class="sidebar-logo-link" :class="{ hideLogo: !showLogo }">
        <img
          v-if="logo && showLogo"
          :src="logo"
          class="sidebar-logo"
        />
        <hamburger
          :is-active="sidebar.opened"
          class="hamburger-container"
          @toggleClick="toggleSideBar"
        />
      </div>
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
    Hamburger,
  },
  computed: {
    ...mapGetters(["sidebar"]),
    showLogo() {
      return this.$store.state.settings.sidebarLogo;
    },
  },
  data() {
    return {
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
