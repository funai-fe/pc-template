<template>
  <div
    class="chat-messages"
    :class="{ 'mini-size': isMiniSize, 'hide-scrollbar': hideScrollbar }"
  >
    <div
      class="message-content"
      v-for="message in messages"
      :key="message.session_chat_id"
    >
      <div v-if="message.role === 'user' || (isCustomerChat && message.from_id == userId)" class="message user-message">
        <div class="head-icon">
          <img src="@/assets/chat/image_head_ sculpture@2x.png" alt="" />
        </div>
        <div class="chat-content">
          <div class="user-info">
            <span class="name">{{ name }}</span>
            <span class="time">{{ message.create_time }}</span>
          </div>
          <div class="chat-text">
            <div class="text">{{ message.content }}</div>
          </div>
        </div>
      </div>
      <div v-else class="message">
        <div class="head-icon">
          <img src="@/assets/chat/head_robot.jpg" alt="" />
        </div>
        <div class="chat-content">
          <div class="user-info">
            <span class="name">{{ message.name || 'FunAI机器人' }}</span>
            <span class="time">{{ message.create_time }}</span>
          </div>
          <div class="chat-text">
            <div class="text">{{ message.content }}</div>
            <div class="tools">
              <div class="tools-item" @click="copyMessage(message.content)">
                <img src="@/assets/chat/icon_copy_nor@2x.png" alt="" />
                <span>复制内容</span>
              </div>
              <div class="tools-item" @click="playSound(message.session_chat_id, message.content)">
                <img src="@/assets/chat/icon_audio_sel@2x.png" alt="" />
                <span>播放语音</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
  
<script>
import { mapGetters, mapActions } from "vuex";
import { chatTypeMap } from "@/config/index";
export default {
  props: {
    messages: {
      type: Array,
      default: () => [],
    },
    isMiniSize: {
      type: Boolean,
      default: false,
    },
    hideScrollbar: {
      type: Boolean,
      default: false,
    },
    type: {
      type: Number,
      default: -1,
    }
  },
  data() {
    return {
      curPlaySoundMsgIndex: -1,
    };
  },
  computed: {
    ...mapGetters(["name", "userId"]),
    // 是否聊天客服，它不是通过role === 'user'来判断当前用户，而是通过from_id == userId来确定
    isCustomerChat() {
      return this.type == chatTypeMap["customerChat"].chatType
    }
  },
  methods: {
    // 复制内容
    copyMessage(text) {
      // 创建一个临时文本输入框，将消息文本添加到其中
      const textArea = document.createElement("textarea");
      textArea.value = text;

      // 将文本输入框添加到文档中
      document.body.appendChild(textArea);

      // 选中文本输入框的内容
      textArea.select();

      // 尝试复制文本到剪贴板
      try {
        document.execCommand("copy");
        this.$message.success("复制成功!");
      } catch (err) {
        this.$message.error("复制失败，请手动复制文本!");
      }

      // 清除和移除文本输入框
      document.body.removeChild(textArea);
    },
    // 播放语音
    playSound(msgIndex, msg) {
      if (!this.isPlaySound) {
        speechSynthesis.speak(new SpeechSynthesisUtterance(msg));
        this.curPlaySoundMsgIndex = msgIndex;
        this.isPlaySound = !this.isPlaySound;
      } else {
        speechSynthesis.cancel();
        if (this.curPlaySoundMsgIndex != msgIndex) {
          speechSynthesis.speak(new SpeechSynthesisUtterance(msg));
          this.curPlaySoundMsgIndex = msgIndex;
        } else {
          this.isPlaySound = !this.isPlaySound;
        }
      }
    },
  },
  beforeDestroy() {
    speechSynthesis.cancel();
    this.curPlaySoundMsgIndex = -1;
    this.isPlaySound = !this.isPlaySound;
  }
};
</script>
  
<style lang="scss" scoped>
$headMargin: 16px;
@mixin message-mini {
  .head-icon {
    margin-right: 8px !important;
    align-self: flex-start;
    img {
      width: 30px !important;
      height: 30px !important;
    }
  }
  .chat-content {
    .user-info {
      span {
        font-size: 12px !important;
      }
      .name {
        margin-right: 5px !important;
      }
    }
    .chat-text {
      padding: 10px !important;
      .text {
        line-height: 20px !important;
      }
    }
    .tools {
      padding-top: 10px !important;
      .tools-item {
        margin-right: 10px !important;
        line-height: 15px !important;
      }
    }
  }
}
@mixin user-message-mini {
  .head-icon {
    margin-left: 8px !important;
  }
}
/* 添加样式以美化消息列表 */
.chat-messages {
  flex: 1;
  display: flex;
  flex-direction: column;
  align-items: center;
  overflow-y: auto;
  padding: 10px;
  &.hide-scrollbar {
    scrollbar-width: none; /* Firefox */
    -ms-overflow-style: none; /* IE and Edge */
    &::-webkit-scrollbar {
      display: none;
    }
  }

  .message-content {
    display: flex;
    flex-direction: column;
    max-width: 70rem;
    padding: 10px 0;
    width: 90%;

    .message {
      display: flex;
      max-width: 80%;
      margin-bottom: 10px;
      border-radius: 8px;

      .head-icon {
        margin-right: $headMargin;
        align-self: flex-start;
        img {
          border-radius: 50%;
          width: 56px;
          height: 56px;
          background: #ccc;
        }
      }
      .chat-content {
        display: flex;
        flex-direction: column;
        align-items: flex-start;
        .user-info {
          display: flex;
          align-items: center;
          font-size: 14px;
          // font-family: PingFangSC-Regular, PingFang SC;
          color: #6c727f;
          margin-bottom: 8px;
          line-height: 20px;
          .name {
            margin-right: 10px;
            white-space: nowrap;
            overflow: hidden;
            text-overflow: ellipsis;
            // max-width: 60%;
            max-width: 100%;
          }
        }
        .chat-text {
          padding: 20px;
          background: #f9fafb;
          border-radius: 8px;
          .text {
            font-size: 14px;
            word-break: break-word;
            // font-family: PingFangSC-Medium, PingFang SC;
            color: #333333;
            line-height: 25px;
            padding-bottom: 20px;
            border-bottom: 1px solid #e5e7eb;
          }
          .tools {
            display: flex;
            padding-top: 20px;
            .tools-item {
              display: flex;
              align-items: center;
              color: #6c727f;
              margin-right: 20px;
              line-height: 20px;
              cursor: pointer;
              span {
                font-size: 12px;
              }
              img {
                width: 16px;
                height: 16px;
              }
            }
          }
        }
      }
    }

    .user-message {
      flex-direction: row-reverse;
      align-self: flex-end;

      .head-icon {
        margin-left: $headMargin;
        margin-right: 0 !important;
      }

      .chat-content {
        align-items: flex-end;
        .user-info {
          justify-content: flex-end;
        }
        .chat-text {
          background: linear-gradient(138deg, #5b80f7 0%, #8376f7 100%);
          .text {
            color: #ffffff;
            padding-bottom: 0;
            line-height: 20px;
            border-bottom: none;
          }
        }
      }
    }
  }
}

// 样式mini版，主要是兼容文件聊天时候聊天面板较窄
.mini-size {
  @include message-mini;
  @include user-message-mini;
}

@media (max-width: 768px) {
  @include message-mini;
  @include user-message-mini;
}

@media (max-width: 576px) {
  .message {
    .chat-content {
      .user-info {
        width: 200px;
        .name {
          max-width: 100%;
        }
        .time {
          display: none;
        }
      }
    }
  }
}
</style>
  