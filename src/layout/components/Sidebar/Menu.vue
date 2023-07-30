<template>
  <div class="sidebar-menu-container" :class="{ collapse: collapse }">
    <transition name="sidebarLogoFade">
      <router-link
        v-if="!collapse"
        key="collapse"
        class="sidebar-logo-link"
        to="/index"
      >
        <el-collapse accordion>
          <el-collapse-item>
            <template slot="title">
              <img
                class="menu-icon"
                :src="icons.duihua"
                alt=""
              />
              AI对话
            </template>
            <div>默认对话名称为第一个问题</div>
          </el-collapse-item>

          <el-collapse-item>
            <template slot="title">
              <img
                class="menu-icon"
                :src="icons.danwenjian"
                alt=""
              />
              单文件阅读
            </template>
          </el-collapse-item>

          <el-collapse-item>
            <template slot="title">
              <img
                class="menu-icon"
                :src="icons.duowenjian"
                alt=""
              />
              多文件阅读
            </template>
          </el-collapse-item>

          <el-collapse-item>
            <template slot="title">
              <img
                class="menu-icon"
                :src="icons.huatu"
                alt=""
              />
              AI画图
            </template>
          </el-collapse-item>

          <el-collapse-item>
            <template slot="title">
              <img
                class="menu-icon"
                :src="icons.game"
                alt=""
              />
              冒险游戏
            </template>
          </el-collapse-item>

          <el-collapse-item>
            <template slot="title">
              <img
                class="menu-icon"
                :src="icons.yuyan"
                alt=""
              />
              语言专家
            </template>
          </el-collapse-item>
        </el-collapse>
      </router-link>

      <router-link
        v-else
        key="expand"
        class="sidebar-logo-link collapse"
        to="/index"
      >
        <el-tooltip v-if="icons.duihua" class="tooltip-item" effect="dark" content="AI对话" placement="right">
          <img :src="icons.duihua" class="menu-icon" />
        </el-tooltip>
        <el-tooltip v-if="icons.danwenjian" class="tooltip-item" effect="dark" content="单文件阅读" placement="right">
          <img :src="icons.danwenjian" class="menu-icon" />
        </el-tooltip>
        <el-tooltip v-if="icons.duowenjian" class="tooltip-item" effect="dark" content="多文件阅读" placement="right">
          <img :src="icons.duowenjian" class="menu-icon" />
        </el-tooltip>
        <el-tooltip v-if="icons.huatu" class="tooltip-item" effect="dark" content="AI画图" placement="right">
          <img :src="icons.huatu" class="menu-icon" />
        </el-tooltip>
        <el-tooltip v-if="icons.game" class="tooltip-item" effect="dark" content="冒险游戏" placement="right">
          <img :src="icons.game" class="menu-icon" />
        </el-tooltip>
        <el-tooltip v-if="icons.yuyan" class="tooltip-item" effect="dark" content="语言专家" placement="right">
          <img :src="icons.yuyan" class="menu-icon" />
        </el-tooltip>
      </router-link>
    </transition>
  </div>
</template>

<script>
import { mapGetters } from "vuex";
import duihua from "@/assets/common/icon_ai_duihua_sel@2x.png";
import danwenjian from "@/assets/common/icon_danwenjian_nor@2x.png";
import duowenjian from "@/assets/common/icon_duowenjian_nor@2x.png";
import huatu from "@/assets/common/icon_ai_huatu_nor@2x.png";
import game from "@/assets/common/icon_maoxianyouxi_nor@2x.png";
import yuyan from "@/assets/common/icon_yuyanzhuanjia_nor@2x.png";

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
      icons: {
        duihua: duihua,
        danwenjian: danwenjian,
        duowenjian: duowenjian,
        huatu: huatu,
        game: game,
        yuyan: yuyan
      },
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
    // ...mapGetters(["name"]),
  },
};
</script>