<template>
  <div>
    <logo :collapse="isCollapse" />
    <el-scrollbar wrap-class="scrollbar-wrapper">
      <Menu :collapse="isCollapse" />
    </el-scrollbar>
    <Navigation :collapse="isCollapse" @showCallUsDialog="$emit('showCallUsDialog')"/>
  </div>
</template>

<script>
import { mapGetters } from "vuex";
import Logo from "./Logo";
import Navigation from "./Navigation";
import Menu from "./Menu";
// import variables from "@/styles/variables.scss";

export default {
  components: { Logo, Navigation, Menu },
  computed: {
    ...mapGetters([
      "sidebar",
    ]),
    showLogo() {
      return this.$store.state.settings.sidebarLogo;
    },
    // variables() {
    //   return variables;
    // },
    isCollapse() {
      return !this.sidebar.opened;
    },
  },
};
</script>
