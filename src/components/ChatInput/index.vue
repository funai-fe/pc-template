<template>
  <div class="chat-input-wrapper">
    <div class="chat-input-container">
      <img class="voice" src="@/assets/chat/icon_audio_sel@2x.png" alt="" />
      <textarea
        class="chat-textarea"
        rows="1"
        v-model="currentMessage"
        @input="adjustTextareaHeight"
        :placeholder="placeholder"
      ></textarea>
      <el-tooltip class="item" effect="dark" content="发送消息" placement="top">
        <button class="send-button">发送</button>
      </el-tooltip>
      <el-tooltip class="item" effect="dark" content="停止发送" placement="top">
        <button class="send-button stop">
          <img
            class="stop-icon"
            src="@/assets/chat/icon_stop_sel@2x.png"
            alt=""
          />
          停止发送
        </button>
      </el-tooltip>
    </div>
  </div>
</template>
  
  <script>
export default {
  props: {
    placeholder: {
      type: String,
      default: "这里输入内容…..（Shift+Enter换行）",
    },
  },
  data() {
    return {
      currentMessage: "",
    };
  },
  methods: {
    adjustTextareaHeight() {
      // 通过JS来调整textarea的高度，以适应内容，如果超过最大高度则显示滚动条
      const textarea = this.$el.querySelector(".chat-textarea");
      textarea.style.height = "auto";
      const height = Math.min(200, textarea.scrollHeight);
      textarea.style.height = height + "px";
    },
    sendMessage() {
      const messageText = this.currentMessage.trim();
      if (messageText) {
        const message = {
          id: Date.now(),
          text: messageText,
          isMe: true, // Indicate if the message is sent by the user
        };
        this.$emit("newMessage", message);
        this.currentMessage = "";
      }
    },
  },
};
</script>
  
<style lang="scss" scoped>
.chat-input-wrapper {
  background: #f3f4f6;
  border-radius: 12px;
  border: 1px solid #e1e1e3;
  position: relative;
}

.chat-input-container {
  display: flex;
  align-items: center;
  padding: 14px 0 14px 14px;

  .voice {
    width: 16px;
    height: 16px;
    margin-right: 4px;
  }
}

.chat-textarea {
  height: 30px;
  /* line-height: 32px; */
  resize: none;
  flex: 1;
  border: none;
  padding-right: 96px;
  /* border-radius: 5px; */
  padding: 8px;
  padding-right: 140px;
  font-size: 18px;
  box-shadow: none;
  background: #f3f4f6;
  min-height: 36px; /* 设置最小高度，避免没有内容时过小 */
  max-height: 200px; /* 设置最大高度为200px */
  //   overflow: hidden;
  overflow-y: auto; /* 超过最大高度时显示滚动条 */
  outline: none;
}

.send-button {
  display: flex;
  align-items: center;
  position: absolute;
  right: 14px;
  bottom: 12px;
  height: 40px;
  padding: 10px 18px;

  background: #000b58;
  box-shadow: 0px 2px 7px 0px rgba(0, 11, 88, 0.07);
  border-radius: 8px;
  border: 1px solid #e1e1e3;
  font-size: 14px;
  font-family: PingFangSC-Medium, PingFang SC;
  color: #fff;
  cursor: pointer;
  align-self: end;
  &.stop {
    background: #ffffff;
    box-shadow: 0px 2px 7px 0px rgba(0, 11, 88, 0.07);
    border-radius: 8px;
    border: 1px solid #e1e1e3;
    color: #000b58;
    .stop-icon {
      width: 16px;
      height: 16px;
    }
  }
}

.send-button:hover {
  /* background-color: #0056b3; */
}


@media (max-width: 768px) {
    .chat-input-container {
      padding: 10px 0 10px 10px;
      .chat-textarea {
        font-size: 16px;
      }
    }
}
</style>
  