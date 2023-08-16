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
        return
      }

      this.selectSession({
        page: this,
        menu,
        session
      })

      
      return
      let { addRouteName = "", routeName = "" } = menu || {};
      let creatParams = null;
      let linkFn = undefined;
      switch (session.type) {
        case 0:
          linkFn = () => {
            this.SET_CURRENT_SESSION(session.session_id);
          };
          break;
        case 1:
          creatParams = { type: "single" };
          linkFn = () => {
            this.fileChatSelectSession(session.session_id);
          };
          break;
        case 2:
          linkFn = () => {
            // this.gameChatSelectSession(session.session_id);
          };
          break;
        case 4:
          creatParams = { type: "multiple" };
          linkFn = () => {
            this.fileChatSelectSession(session.session_id);
          };
      }

      if (session.key === "add") {
        this.selectSession(null);
        creatParams
          ? this.$router.push({ name: addRouteName, params: creatParams })
          : this.$router.push({ name: addRouteName });
      } else {
        linkFn();
        // 跳转对应路由页面
        this.$router.push({
          name: routeName,
          params: { sessionId: session.session_id },
        });
      }
    },
  },
  created() {
    this.fetchSessions()


    // },1000)
    // console.log(this.menus, 'pppppp', this.sessions)
    // this.fetchSessions()
  }
};
</script>