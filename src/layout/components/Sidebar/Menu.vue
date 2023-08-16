<template>
  <div class="sidebar-menu-container" :class="{ collapse: collapse }">
    <transition name="sidebarLogoFade">
      <div v-if="!collapse" key="collapse" class="sidebar-logo-link">
        <el-collapse accordion v-model="activeName">
          <el-collapse-item
            :name="menu.key"
            v-for="menu in menus"
            :key="menu.key"
          >
            <template slot="title">
              <img
                class="menu-icon"
                :src="
                  getImagePath(
                    activeName.includes(menu.key) ? menu.activeIcon : menu.icon
                  )
                "
              />
              {{ menu.name }}
            </template>
            <div
              :class="[
                'menu-item',
                session.key === 'add' ? 'add-item' : '',
                session.session_id === currentSession && session.key !== 'add'
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
      </div>

      <div v-else key="expand" class="sidebar-logo-link collapse">
        <div v-for="menu in menus" :key="menu.key">
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
      activeName: "normalChat",
    };
  },
  // beforeRouteEnter(to, from, next) {
  //   // const sessionId = to.params.sessionId;
  //   // if (sessionId) {
  //   //   this.setCurrentSessionId(sessionId);
  //   // }
  //   console.log("路由变化啦～～～～～");

  //   next();
  // },
  watch: {
    "$route.path"(newPath) {
      // this.updateMenuHighlight(newPath);
      console.log("路由变化啦～～～～～");
    },
  },
  computed: {
    ...mapGetters(["menus", "currentSession"]),
  },
  methods: {
    getImagePath(path) {
      return require("@/assets/" + path); // 假设图片在 assets 目录下
    },
    // ...mapMutations("menu", ['SET_CURRENT_SESSION']),
    ...mapActions("menu", ["selectSession", "fetchSessions"]),
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
  },
  async created() {
    // if (this.currentSession) {
    await this.fetchSessions();
    
    // }
  },
};
</script>