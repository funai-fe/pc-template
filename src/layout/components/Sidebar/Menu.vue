<template>
  <div class="sidebar-menu-container" :class="{ collapse: collapse }">
    <transition name="sidebarLogoFade">
      <div v-if="!collapse" key="collapse" class="sidebar-logo-link">
        <div v-for="menu in menus" :key="menu.key">
          <el-collapse accordion v-model="activeName" v-if="menu.hadSubMenu">
            <el-collapse-item :name="menu.key">
              <template slot="title">
                <img
                  class="menu-icon"
                  :src="
                    getImagePath(
                      activeName.includes(menu.key)
                        ? menu.activeIcon
                        : menu.icon
                    )
                  "
                />
                {{ menu.name }}
              </template>
              <div
                :class="[
                  'menu-item',
                  session.key == 'add' ? 'add-item' : '',
                  session.session_id == currentSession && session.key != 'add'
                    ? 'active'
                    : '',
                ]"
                v-for="session in menu.sessions"
                :key="session.session_id"
                @click="selectSessionItem(menu, session)"
              >
                <template v-if="session.key === 'add'">
                  <i class="el-icon-plus"></i>
                  {{ session.session_name }}
                </template>
                <template v-else>
                  <span>{{ session.session_name }}</span>
                  <i class="el-icon-circle-close"></i>
                </template>
              </div>
            </el-collapse-item>
          </el-collapse>
          <div class="single-menu-item" v-else @click="selectMenu(menu)">
            <img
              class="menu-icon"
              :src="
                getImagePath(
                  activeName.includes(menu.key) ? menu.activeIcon : menu.icon
                )
              "
            />
            {{ menu.name }}
          </div>
        </div>
      </div>

      <div v-else key="expand" class="sidebar-logo-link collapse">
        <div v-for="menu in menus" :key="menu.key" @click="toggleSideBar(menu)">
          <el-tooltip
            v-if="menu.icon"
            class="tooltip-item"
            effect="dark"
            :content="menu.name"
            placement="right"
          >
            <img
              :src="
                getImagePath(
                  activeName.includes(menu.key) ? menu.activeIcon : menu.icon
                )
              "
              class="menu-icon"
            />
          </el-tooltip>
        </div>
      </div>
    </transition>
  </div>
</template>

<script>
import { mapGetters, mapMutations, mapActions } from "vuex";
import { getCurrentType } from "@/utils/auth";

export default {
  name: "Menu",
  props: {
    collapse: {
      type: Boolean,
      required: true,
    },
  },
  data() {
    return {
      activeName: "",
    };
  },
  computed: {
    ...mapGetters(["menus", "currentSession", "currentType"]),
  },
  methods: {
    init() {
      // 通过当前聊天类型来自动触发菜单展开状态
      const foundMenu = this.menus.find(
        (item) => item.type === this.currentType
      );
      this.activeName = foundMenu ? foundMenu.key : "";
    },
    getImagePath(path) {
      return path ? require("@/assets/" + path) : ""; // 假设图片在 assets 目录下
    },

    ...mapActions("menu", ["selectSession", "fetchSessions", "fetchMessages"]),

    toggleSideBar(menu) {
      this.$store.dispatch("app/toggleSideBar");
      this.activeName = menu.key;
    },

    // 点击子菜单
    selectSessionItem(menu, session) {
      if (session.session_id === this.currentSession) {
        return;
      }

      this.selectSession({
        page: this,
        menu,
        session,
      });
    },

    // 没有子菜单点击直接路由跳转
    selectMenu(menu) {
      this.activeName = menu.key;
      this.$router.push(menu.pageRoute);
    },
  },
  async created() {
    this.init();

    await this.fetchSessions({
      page: this,
    });
  },
};
</script>