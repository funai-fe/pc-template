<template>
  <div class="chatgpt-container">
    <Navbar class="file-navbar" :defaultFile="defaultFile"  :fileList="fileList" @changeFile="changeFile"/>
    <FileViewer :fileUrl="fileUrl" width="40%" class="file-viewer" />
    <ChatSession
      :type="chatType"
      class="chat-session"
      :sessionId="currentSession"
      :isMiniSize="true"
    />
  </div>
</template>
  
  <script>
import { mapGetters } from "vuex";
import ChatSession from "@/components/ChatSession/index.vue";
import FileViewer from "@/components/FileViewer/index.vue";
import Navbar from "./components/fileNavBar.vue";
import { chatTypeMap } from "@/config/index";

export default {
  components: {
    ChatSession,
    FileViewer,
    Navbar,
  },
  data() {
    return {
      chatType: chatTypeMap["multiPdfChat"].chatType,
      fileList: [],
      fileUrl: ''
    };
  },
  computed: {
    ...mapGetters(["menus", "currentSession"]),
    defaultFile() {
      const sessions =
        this.menus.find((session) => session.type === this.chatType) || [];
      // console.log('uuuu', sessions)

      const session =
        sessions.sessions &&
        sessions.sessions.find(
          (item) => item.session_id === this.currentSession
        );
      console.log('uuuu', session)
      // debugger
      if (session && session.file) {
        // console.log('uuuu', session)
        this.fileList = session.file
        this.fileUrl = session.file[0].fileUrl
      }
      
      return session && session.file ? session.file[0] : {};
    },
  },
  methods: {
    changeFile(file) {
      this.fileUrl = file.fileUrl
    }
  },
  async created() {
    // console.log(this.chatType, 'lklklklklklllkl')
  },
  beforeDestroy() {
    this.fileUrl = ''
  }
};
</script>
<style lang="scss" scoped>
@import "~@/styles/variables.scss";

/* 添加样式以布局页面 */
.chatgpt-container {
  display: flex;
  height: 100%;
  padding-top: $pageNavbar;
  .file-navbar {
    position: fixed;
    top: 0;
    right: 0;
    z-index: 99;
    width: calc(100% - #{$sideBarWidth});
    transition: width 0.28s;
  }
  .chat-session {
    flex: 1;
  }
}

.hideSidebar .file-navbar {
  width: calc(100% - 54px);
}

.mobile .file-navbar {
  width: 100%;
}
</style>
  