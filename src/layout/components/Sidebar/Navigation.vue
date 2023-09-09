<template>
  <div class="sidebar-nav-container" :class="{ collapse: collapse }">
    <transition
      name="sidebarLogoFade"
      v-for="(item, index) in navs"
      :key="index"
    >
      <div
        v-if="!collapse"
        class="sidebar-logo-link"
        @click="hanldeNavItem(item)"
      >
        <p class="sidebar-title">{{ item.name }}</p>
      </div>
    </transition>
    <transition name="sidebarLogoFade">
      <div v-if="!collapse" class="sidebar-logo-link user-dropdown">
        <el-dropdown placement="right-start" @command="handleCommand">
          <span class="el-dropdown-link">
            FUNAI {{ name }}
            <i class="el-icon-arrow-right"></i>
          </span>
          <el-dropdown-menu class="dropdown-item" slot="dropdown">
            <el-dropdown-item>其他账号</el-dropdown-item>
            <el-dropdown-item command="logOut">退出账号</el-dropdown-item>
          </el-dropdown-menu>
        </el-dropdown>
      </div>
    </transition>
  </div>
</template>

<script>
import { mapGetters, mapActions } from "vuex";
export default {
  name: "SidebarNavigation",
  props: {
    collapse: {
      type: Boolean,
      required: true,
    },
  },
  data() {
    return {
      navs: [
        {
          name: "AI客服",
          callBackFn: "customerService",
        },
        {
          name: "联系我们",
          callBackFn: "callUs",
        },
      ]
    };
  },
  computed: {
    ...mapGetters(["name"])
  },
  methods: {
    ...mapActions("user", ["logOut"]),
    handleCommand(command) {
      if (command === "logOut") {
        this.logOut();
      }
    },
    hanldeNavItem(item) {
      this[item.callBackFn]();
    },
    callUs() {
      this.$emit('showCallUsDialog')
    },
    customerService() {
      this.$router.push('/customerService')
    },
  },
};
</script>