<template>
  <div class="sidebar-nav-container" :class="{ collapse: collapse }">
    <transition
      name="sidebarLogoFade"
      v-for="(item, index) in navs"
      :key="index"
    >
      <div v-if="!collapse" class="sidebar-logo-link">
        <p class="sidebar-title">{{ item.name }}</p>
      </div>
    </transition>
    <transition name="sidebarLogoFade">
      <div v-if="!collapse" class="sidebar-logo-link user-dropdown">
        <el-dropdown placement="right-start">
          <span class="el-dropdown-link">
            FUNAI {{ name }}
            <i class="el-icon-arrow-right"></i>
          </span>
          <el-dropdown-menu slot="dropdown">
            <el-dropdown-item>其他账号</el-dropdown-item>
            <el-dropdown-item>退出账号</el-dropdown-item>
          </el-dropdown-menu>
        </el-dropdown>
      </div>
    </transition>
  </div>
</template>

<script>
import { mapGetters } from "vuex";
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
        },
        {
          name: "联系我们",
        },
      ],
    };
  },
  computed: {
    ...mapGetters(["name"]),
  },
};
</script>