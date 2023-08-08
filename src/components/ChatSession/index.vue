<template>
  <div class="chatgpt-page">
    <!-- <ChatHeader /> -->
    <ChatMessages :messages="sessionMessages" />
    <ChatInput class="chat-input" @newMessage="addMessage" />
  </div>
</template>
    
<script>
import { mapGetters, mapActions } from "vuex";
//   import ChatHeader from "@/components/ChatHeader";
import ChatMessages from "@/components/ChatMessages/index.vue";
import ChatInput from "@/components/ChatInput/index.vue";

export default {
  // props: {
  //   sessionId: {
  //     type: [String, Number],
  //     required: true,
  //   },
  // },
  components: {
    //   ChatHeader,
    ChatMessages,
    ChatInput,
  },
  data() {
    return {};
  },
  watch: {
    "sessions.messages"(sessions) {
      console.log("AAAA", sessions);
      // if (newSessionId) {
      //   this.fetchMessages(newSessionId);
      // }
    },
  },
  computed: {
    ...mapGetters(["sessions", "currentSession"]),
    sessionMessages() {
      console.log(this.sessions, this.currentSession);
      // 根据当前的 sessionId 获取对应会话的消息列表
      const session = this.sessions.find((session) => {
        // console.log(session, this.currentSession)
        return session.session_id === this.currentSession;
      });
      // console.log(session.messages, this.currentSession);

      return session ? session.messages : [];
    },
  },
  methods: {
    ...mapActions("chat", [
      "addMessageToSession",
      "fetchSessions",
      "fetchMessages",
    ]),
    addMessage(message) {
      if (this.currentSession) {
        this.addMessageToSession({ sessionId: this.currentSession, message });
      }
    },
  },
  async created() {
    console.log(this.currentSession, "qqqqqq");
    if (this.currentSession) {
      await this.fetchSessions({ user_id: this.userId, type: 0 });
      await this.fetchMessages(this.currentSession);
    }
  },
  mounted() {
    // setTimeout(() => {
    console.log(this.sessionMessages, "pppppppp");
    // }, 5000);
  },
};
</script>
<style lang="scss" scoped>
/* 添加样式以布局页面 */
.chatgpt-page {
  height: 100%;
  display: flex;
  flex-direction: column;
  /* padding: 0 80px; */
}

.chat-input {
  max-width: 70rem;
  // width: calc(100% - 70px);
  width: 90%;
  margin: auto;
}
</style>
    