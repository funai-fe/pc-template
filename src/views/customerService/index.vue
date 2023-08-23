<template>
  <div class="customer-container">
    <div class="dialog-content">
      <div class="left-tab">
        <div
          class="tab-item"
          v-for="item in sliderBar"
          :key="item.key"
          @click="chooseAssistantType(item)"
        >
          <img
            class="icon"
            :src="item.isActive ? item.activeIcon : item.icon"
            alt=""
          />
          <span class="text" :class="item.isActive ? 'active' : ''">{{
            item.title
          }}</span>
        </div>
      </div>
      <div class="chat-box">
        <ChatSession
          :type="chatType"
          class="chat-session"
          :sessionId="currentSession"
          :isMiniSize="true"
        />
      </div>
    </div>
  </div>
</template>
  
  <script>
import { mapState } from "vuex";
import ChatSession from "@/components/ChatSession/index.vue";
// import robot from "@/assets/chat/icon_aliwangwang_nor@2x.png";
// import activeRobot from "@/assets/chat/icon_aliwangwang_sel@2x.png";
// import artificial from "@/assets/chat/icon_comment_nor@2x.png";
// import activeArtificial from "@/assets/chat/icon_comment_sel@2x.png";
import { chatTypeMap } from "@/config/index";

export default {
  name: "CustomerService",
  props: {},
  components: {
    ChatSession,
  },
  data() {
    return {
      chatType: chatTypeMap["customerChat"].chatType,
    //   sliderBar: [
    //     {
    //       title: "FunAI机器人客服",
    //       isActive: true,
    //       icon: robot,
    //       activeIcon: activeRobot,
    //     },
    //     {
    //       title: "FunAI人工客服",
    //       isActive: false,
    //       icon: artificial,
    //       activeIcon: activeArtificial
    //     },
    //   ],
    };
  },
  computed: {
    ...mapState("customerService", ["sliderBar"])
  },
  methods: {
    //选择客服类型
    chooseAssistantType(item) {
      this.sliderBar.forEach((i) => (i.isActive = false));
      item.isActive = true;
      //   this.$store.commit("changeCurrentChatType", item.title);
    },
  },
};
</script>
<style lang="scss">
</style>
  
  <style lang="scss" scoped>
.customer-container {
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #dbdbdb;
  overflow: h idden;
  width: 100%;
  height: 100%;
  .dialog-content {
    display: flex;
    width: 80%;
    height: 75%;
    background-color: #fff;
    border-radius: 30px;
    .left-tab {
      width: 200px;
      background: #eff0f4;
      border-radius: 30px 0px 0px 30px;
      padding: 25px 15px;
      .tab-item {
        height: 30px;
        display: flex;
        align-items: center;
        margin-bottom: 2px;
        cursor: pointer;
        .icon {
          width: 20px;
          height: 20px;
          margin-right: 5px;
        }
        .text {
          font-size: 16px;
          color: #6c727f;
          &.active {
            color: #000b58;
          }
        }
      }
    }
    .chat-box {
      flex: 1;
      border-radius: 0 30px 30px 0;
    }
  }
}
@media (max-width: 1440px) {
}
</style>
  