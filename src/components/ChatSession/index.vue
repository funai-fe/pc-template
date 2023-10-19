<template>
  <div class="chatgpt-page">
    <ChatMessages
      :type="type"
      :messages="sessionMessages"
      :isMiniSize="isMiniSize"
      :hideScrollbar="hideScrollbar"
    />
    <ChatInput
      class="chat-input"
      @addMessage="newMessage"
      :isMiniSize="isMiniSize"
    />
  </div>
</template>
    
<script>
import { mapState, mapGetters, mapActions } from "vuex";
import ChatMessages from "@/components/ChatMessages/index.vue";
import ChatInput from "@/components/ChatInput/index.vue";
import { chatTypeMap } from "@/config/index";

export default {
  props: {
    sessionId: {
      type: Number,
    },
    // mini样式
    isMiniSize: {
      type: Boolean,
      default: false,
    },
    // 隐藏滚动条(目前客服聊天窗口需要隐藏)
    hideScrollbar: {
      type: Boolean,
      default: false,
    },
    type: {
      type: Number,
      default: -1,
    },
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
    ...mapState("customerService", ["sliderBar"]),

    sessionMessages() {
      // 客服聊天类型则在sliderBar中拿数据
      if (this.type == chatTypeMap["customerChat"].chatType) {
        const session = this.sliderBar.find((session) => session.isActive);
        return session.messages;
      }

      // 否则通过sessionId 去查菜单下的数据
      const sessions =
        this.menus.find((session) => session.type === this.type) || [];
      const session =
        sessions.sessions &&
        sessions.sessions.find((item) => item.session_id === this.sessionId);
      // debugger
      return session ? session.messages : [];
    },
  },
  methods: {
    ...mapActions("menu", ["addMessge"]),
    newMessage(option) {
      if (this.type == chatTypeMap["customerChat"].chatType) {
        // todo
        return
      }
      
      this.addMessge({
        page: this,
        stream: option.stream,
        messageText: option.messageText,
        callBack: option.callBack
      })

    },
  },
  async created() {
    // console.log(this.type, 'uuuuuuuu')
  },
  mounted() {},
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
    