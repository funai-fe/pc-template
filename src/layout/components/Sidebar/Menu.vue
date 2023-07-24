<template>
  <div class="sidebar-menu-container" :class="{ collapse: collapse }">
    <transition name="sidebarLogoFade">
      <router-link
        v-if="!collapse"
        key="collapse"
        class="sidebar-logo-link"
        to="/"
      >
        <!-- <img
          v-if="logo"
          :src="logo"
          class="sidebar-logo scale"
        /> -->
        <el-collapse accordion>
          <el-collapse-item>
            <template slot="title">
              <img
                class="menu-icon"
                src="@/assets/common/icon_ai_duihua_sel@2x.png"
                alt=""
              />
              AI对话
            </template>
            <div>
              与现实生活一致：与现实生活的流程、逻辑保持一致，遵循用户习惯的语言和概念；
            </div>
            <div>
              与现实生活一致：与现实生活的流程、逻辑保持一致，遵循用户习惯的语言和概念；
            </div>
          </el-collapse-item>
          <el-collapse-item title="反馈 Feedback">
            <div>
              控制反馈：通过界面样式和交互动效让用户可以清晰的感知自己的操作；
            </div>
            <div>页面反馈：操作后，通过页面元素的变化清晰地展现当前状态。</div>
          </el-collapse-item>
        </el-collapse>
      </router-link>
      <router-link v-else key="expand" class="sidebar-logo-link" to="/">
        <img
          v-if="logo"
          :src="logo"
          class="menu-icon"
        />
      </router-link>
    </transition>
  </div>
</template>

<!-- <template>
  <div class="sidebar-nav-container" :class="{ collapse: collapse }">
    <transition name="sidebarLogoFade">
      <div v-if="!collapse" class="sidebar-logo-link">
        <el-collapse accordion>
          <el-collapse-item>
            <template slot="title">
              <img
                class="menu-icon"
                src="@/assets/common/icon_ai_duihua_sel@2x.png"
                alt=""
              />
              AI对话
            </template>
            <div>
              与现实生活一致：与现实生活的流程、逻辑保持一致，遵循用户习惯的语言和概念；
            </div>
            <div>
              与现实生活一致：与现实生活的流程、逻辑保持一致，遵循用户习惯的语言和概念；
            </div>
          </el-collapse-item>
          <el-collapse-item title="反馈 Feedback">
            <div>
              控制反馈：通过界面样式和交互动效让用户可以清晰的感知自己的操作；
            </div>
            <div>页面反馈：操作后，通过页面元素的变化清晰地展现当前状态。</div>
          </el-collapse-item>
        </el-collapse>
      </div>
      <div v-else class="sidebar-logo-link">
        <img
          class="menu-icon collapse"
          src="@/assets/common/icon_ai_duihua_sel@2x.png"
          alt=""
        />
      </div>
    </transition>
  </div>
</template> -->

<script>
import { mapGetters } from "vuex";
import logo from '@/assets/common/icon_ai_duihua_sel@2x.png'

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
      logo: logo,
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

.sidebar-menu-container {
  width: 100%;
  background: #f9fafb;
  padding: 10px 30px;
  // overflow: hidden;

  & .sidebar-logo-link {
    overflow: inherit !important;
  }
  .menu-icon {
    width: 24px;
    height: 24px;
    margin-right: 10px;
  }
}
</style>
<style>
.sidebar-menu-container .el-collapse-item__header {
  background-color: #f9fafb;
  border-bottom: none;
  height: 42px;
  font-size: 18px;
  font-family: PingFangSC-Medium, PingFang SC;
  color: #6c727f;
}

.sidebar-menu-container .el-collapse-item__wrap {
  background-color: #f9fafb;
  border-bottom: none;
}
.sidebar-menu-container .el-collapse {
  border: none;
}
</style>