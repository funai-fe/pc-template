<template>
  <div class="sidebar-nav-container" :class="{ collapse: collapse }">
    <transition
      name="sidebarLogoFade"
      v-for="(item, index) in navs"
      :key="index"
    >
      <div v-if="!collapse" class="sidebar-logo-link">
        <h1 class="sidebar-title">{{ item.name }}</h1>
      </div>
    </transition>
    <transition name="sidebarLogoFade">
      <div v-if="!collapse" class="sidebar-logo-link user-dropdown">
        <el-dropdown placement="right-start">
          <span class="el-dropdown-link">
            FUNAI {{ name }}
            <i class="el-icon-arrow-right"></i>
            <!-- <img
              class="icon_right_nor"
              src="@/assets/common/icon_right_nor.png"
              alt=""
            /> -->
          </span>
          <el-dropdown-menu slot="dropdown">
            <el-dropdown-item>其他账号</el-dropdown-item>
            <el-dropdown-item>退出账号</el-dropdown-item>
          </el-dropdown-menu>
        </el-dropdown>

        <!-- <h1 class="sidebar-title"></h1>
        <img
          class="icon_right_nor"
          src="@/assets/common/icon_right_nor.png"
          alt=""
        /> -->
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
<style lang="scss" scoped>
.sidebarLogoFade-enter-active {
  transition: opacity 1.5s;
}

.sidebarLogoFade-enter,
.sidebarLogoFade-leave-to {
  opacity: 0;
}

.sidebar-nav-container {
  height: 142px;
  display: flex;
  flex-direction: column;
  position: absolute;
  bottom: 0;
  width: 100%;
  background: #f9fafb;
  padding: 16px 30px;
  overflow: hidden;
  border-top: 1px solid #e5e7eb;

  & .sidebar-logo-link {
    display: flex;
    align-items: center;
    height: 100%;
    width: 100%;

    &.user-dropdown {
      display: flex;
      justify-content: space-between;
      align-items: center;
    }

    // & .sidebar-logo {
    //   width: 32px;
    //   height: 32px;
    //   vertical-align: middle;
    //   margin-right: 12px;
    // }

    & .sidebar-title {
      font-size: 14px;
      font-family: PingFangSC-Medium, PingFang SC;
      display: inline-block;
      margin: 0;
      color: #6c727f;
      // line-height: 30px;
      vertical-align: middle;
    }
    // & .el-icon-arrow-right {
    //   cursor: pointer;
    // }

    .el-dropdown {
      width: 100%;
      cursor: pointer;


      .el-dropdown-link {
        align-items: center;
        width: 100%;
        display: flex;
        justify-content: space-between;
        // line-height: 30px;
        font-size: 14px;
        font-family: PingFangSC-Medium, PingFang SC;
        color: #6c727f;
      }
    }
  }

  // &.collapse {
  //   .sidebar-logo {
  //     margin-right: 0px;
  //   }
  // }
}
</style>