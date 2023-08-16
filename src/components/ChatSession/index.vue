<template>
  <div class="chatgpt-page">
    <ChatMessages :messages="sessionMessages" :isMiniSize="isMiniSize"/>
    <ChatInput class="chat-input" @newMessage="addMessage" :isMiniSize="isMiniSize"/>
  </div>
</template>
    
<script>
import { mapGetters, mapActions } from "vuex";
import ChatMessages from "@/components/ChatMessages/index.vue";
import ChatInput from "@/components/ChatInput/index.vue";

export default {
  props: {
    isMiniSize: {
      type: Boolean,
      default: false,
    },
    type: {
      type: Number,
      default: -1
    }
  },
  components: {
    ChatMessages,
    ChatInput,
  },
  data() {
    return {};
  },
  computed: {
    ...mapGetters(["menus", "currentSession"]),
    sessionMessages() {
      console.log(this.menus, this.currentSession, this.type);
      // debugger
      const sessions = this.menus.find((session) => session.type === this.type) || [];
      const session = sessions.sessions && sessions.sessions.find((item) => item.session_id === this.currentSession)
      return session ? session.messages : [];
    },
  },
  watch: {
    // currentSession(newSessionId) {
    //   if (newSessionId) {
    //     this.$nextTick(() => {

    //     })
    //   }
    // },
  },
  methods: {
    // ...mapActions("chat", [
      // "addMessageToSession",
      // "fetchSessions",
      // "fetchMessages",
    // ]),
    addMessage(message) {
      if (this.currentSession) {
        // this.addMessageToSession({ sessionId: this.currentSession, message });
      }
    },
  },
  async created() {
    // console.log(this.type)
    // if (this.currentSession) {
    //   await this.fetchSessions({ user_id: this.userId, type: 0 });
    //   await this.fetchMessages(this.currentSession);
    // }
  },
  mounted() {
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
    