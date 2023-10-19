<template>
  <div class="chat-input-wrapper" :class="{ 'mini-size': isMiniSize }">
    <div class="chat-input-container">
      <img class="voice" src="@/assets/chat/icon_audio_sel@2x.png" alt="" />
      <textarea
        class="chat-textarea"
        rows="1"
        v-model="currentMessage"
        @input="adjustTextareaHeight"
        @keydown.enter="handleEnterKey"
        :placeholder="placeholder"
      ></textarea>
      <el-tooltip
        v-if="!isSending"
        class="item"
        effect="dark"
        content="发送消息"
        placement="top"
      >
        <button
          class="send-button"
          :class="{ disabled: !currentMessage }"
          :disabled="!currentMessage"
          @click="sendMessage"
        >
          发送
        </button>
      </el-tooltip>
      <el-tooltip
        v-else
        class="item"
        effect="dark"
        content="停止发送"
        placement="top"
      >
        <button class="send-button stop">
          <img
            class="stop-icon"
            src="@/assets/chat/icon_stop_sel@2x.png"
            alt=""
          />
          停止发送
        </button>
      </el-tooltip>
      <!-- 百宝箱按钮 -->
      <el-tooltip effect="dark" content="百宝功能箱✨" placement="top">
        <el-popover placement="top-end" width="100" trigger="click">
          <div class="treasure-box">
            <el-tooltip :content="'输出模式: ' + stream" placement="top">
              <el-switch
                v-model="stream"
                active-color="#13ce66"
                inactive-color="#438EDB"
                active-value="流式输出"
                inactive-value="普通输出"
                class="el-switch--vertical"
              >
              </el-switch>
            </el-tooltip>
            <el-tooltip content="下载" placement="top">
              <i class="el-icon-download"></i>
              <!-- <span class="iconfont icon-xiazai" @click="downloadSessionMessage"  style="cursor: pointer;"></span> -->
            </el-tooltip>
            <el-tooltip content="长按时说话" placement="top">
              <i class="el-icon-microphone"></i>
            </el-tooltip>
          </div>
          <i slot="reference" class="el-icon-setting"></i>
          <!-- <span  class="iconfont icon-gongneng" style="cursor: pointer;"></span> -->
        </el-popover>
      </el-tooltip>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    placeholder: {
      type: String,
      default: "这里输入内容…(Shift+Enter换行)",
    },
    isMiniSize: {
      type: Boolean,
      default: false,
    },
  },
  data() {
    return {
      isSending: false,
      currentMessage: "",
      stream: "普通输出", // 是否支持流式输出
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
    handleEnterKey() {
      console.log("111");
    },
    sendMessage() {
      const messageText = this.currentMessage.trim();
      if (messageText) {
        this.isSending = true;
        this.$emit("addMessage", {
          stream: this.stream,
          messageText,
          callBack: () => {
            this.isSending = false;
          },
        });
        this.currentMessage = "";
      } else {
        this.$message({
          message: "消息不能为空哦~",
          type: "warning",
        });
      }
    },
  },
};
</script>
  
<style lang="scss" scoped>
@mixin mini {
  .chat-input-container {
    padding: 8px !important;
    .chat-textarea {
      font-size: 14px !important;
      padding-top: 10px !important;
      padding-left: 4px !important;
    }
    .send-button {
      padding: 10px 12px !important;
    }
  }
}
.chat-input-wrapper {
  background: #f3f4f6;
  border-radius: 12px;
  border: 1px solid #e1e1e3;
  position: relative;
  .chat-input-container {
    display: flex;
    align-items: center;
    padding: 14px;
    .voice {
      width: 16px;
      height: 16px;
      margin-right: 4px;
      cursor: pointer;
    }
    .chat-textarea {
      display: -webkit-box;
      height: 30px;
      resize: none;
      flex: 1;
      border: none;
      padding: 8px;
      font-size: 18px;
      box-shadow: none;
      background: #f3f4f6;
      min-height: 36px; /* 设置最小高度，避免没有内容时过小 */
      max-height: 200px; /* 设置最大高度为200px */
      overflow-y: auto; /* 超过最大高度时显示滚动条 */
      outline: none;
      scrollbar-width: none; /* Firefox */
      -ms-overflow-style: none; /* IE and Edge */
      &::-webkit-scrollbar {
        display: none;
      }
    }
    .send-button {
      display: flex;
      align-items: center;
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

      &.disabled {
        background-color: rgba(172, 172, 190, 1);
        cursor: inherit;
      }
    }
    .el-icon-setting {
      cursor: pointer;
      font-size: 28px;
      margin-left: 10px;
      color: #6c727f;
    }
  }
}

.mini-size {
  @include mini;
}

@media (max-width: 768px) {
  .chat-input-container {
    padding: 10px !important;
    .chat-textarea {
      padding-top: 10px !important;
      font-size: 16px !important;
    }
  }
}

@media (max-width: 576px) {
  @include mini;
}
</style>
<style>
.treasure-box {
  justify-content: space-around;
  display: flex;
  align-items: center;
}
.el-icon-download,
.el-icon-microphone {
  font-size: 24px;
  cursor: pointer;
}
</style>