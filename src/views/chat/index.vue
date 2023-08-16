<template>
  <div class="chatgpt-container">
    <ChatSession :type="chatType" :sessionId="currentSession" :isMiniSize="false"/>
  </div>
</template>
  
  <script>
import { mapGetters, mapActions } from "vuex";
import ChatSession from "@/components/ChatSession/index.vue";
import { chatTypeMap } from '@/config/index'

export default {
  components: {
    ChatSession,
  },
  data() {
    return {
      chatType: chatTypeMap['normalChat'].chatType
    };
  },
  computed: {
    ...mapGetters(["currentSession"]),
  },
  methods: {
  },
  async created() {
  },
};
</script>
<style lang="scss" scoped>
/* 添加样式以布局页面 */
.chatgpt-container {
  height: 100%;
}
</style>
  