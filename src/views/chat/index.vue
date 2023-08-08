<template>
  <div class="chatgpt-container">
    <ChatSession :sessionId="currentSession" />
    <!-- <ChatInput @newMessage="sendMessage" /> -->
  </div>
</template>
  
  <script>
import { mapGetters, mapActions } from "vuex";
import { getSessionList, getSessionChatRecord } from "@/api/chat";
import ChatSession from "@/components/ChatSession/index.vue";
// import ChatInput from "@/components/ChatInput/index.vue";

export default {
  components: {
    ChatSession,
    // ChatInput,
  },
  computed: {
    ...mapGetters(["currentSession", "userId", "sessions"]),
  },
  methods: {
    ...mapActions("chat", ["fetchSessions", "fetchMessages"]),
    // sendMessage(message) {
    //     if (this.currentSession) {
    //     // const messages = sendMessageToSession(this.currentSession, message);
    //     // this.$store.commit('setSessionMessages', { sessionId: this.currentSession, messages });
    //   }
    // },
  },
//   async created() {
//     console.log(this.currentSession, "qqqqqq");
//     await this.fetchSessions({user_id: this.userId, type: 0})
//     await this.fetchMessages(this.currentSession)
//   },
};
</script>
<style lang="scss" scoped>
/* 添加样式以布局页面 */
.chatgpt-container {
  height: 100%;
}
</style>
  