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
    <el-dialog
      :visible.sync="dialogVisible"
      :width="dialogWidth"
      title="联系我们"
    >
      <div class="qr-code-container">
        <div
          v-for="(qrCode, index) in callUsInfo"
          :key="index"
          class="qr-code-item"
        >
          <img :src="qrCode.url" class="qr-code-image" />
          <span>{{ qrCode.name }}</span>
        </div>
      </div>
    </el-dialog>
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
      dialogVisible: false,
      dialogWidth: "60%",
      navs: [
        {
          name: "AI客服",
          callBackFn: "customerService",
        },
        {
          name: "联系我们",
          callBackFn: "callUs",
        },
      ],
      callUsInfo: [
        {
          name: "最新微信群",
          url: "https://funai-hpl.oss-cn-guangzhou.aliyuncs.com/homePage/contact-1.png",
        },
        {
          name: "合作微信",
          url: "https://funai-hpl.oss-cn-guangzhou.aliyuncs.com/homePage/cooperate-1.png",
        },
        {
          name: "管理员微信",
          url: "https://funai-hpl.oss-cn-guangzhou.aliyuncs.com/homePage/contact-3.png",
        },
      ],
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
      this.dialogVisible = true;
    },
    customerService() {
    },
  },
};
</script>
<style lang="scss" scoped>
.qr-code-container {
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
  margin: -5px; /* Adjust as needed */
}

.qr-code-item {
  flex-basis: 33.3333%; /* Each item occupies 1/3 of the container */
  padding: 5px; /* Adjust as needed */
  box-sizing: border-box;
}

.qr-code-image {
  width: 100%;
  height: auto;
}
</style>