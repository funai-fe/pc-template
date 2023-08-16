<template>
  <div class="chatgpt-container">
    <FileViewer :fileUrl="fileUrl" width="45%" class="file-viewer" />
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
import { chatTypeMap } from "@/config/index";

export default {
  components: {
    ChatSession,
    FileViewer,
  },
  data() {
    return {
      chatType: chatTypeMap["pdfChat"].chatType,
    };
  },
  computed: {
    ...mapGetters(["menus", "currentSession"]),
    fileUrl() {
      const sessions =
        this.menus.find((session) => session.type === this.chatType) || [];
      const session =
        sessions.sessions &&
        sessions.sessions.find(
          (item) => item.session_id === this.currentSession
        );
      return session && session.file ? session.file[0].fileUrl : "";
    },
  },
  methods: {},
  async created() {},
};
</script>
<style lang="scss" scoped>
/* 添加样式以布局页面 */
.chatgpt-container {
  display: flex;
  height: 100%;
  .chat-session {
    flex: 1;
  }
}
</style>
  