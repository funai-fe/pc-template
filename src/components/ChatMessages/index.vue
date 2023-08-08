<template>
  <div class="chat-messages">
    <div
      class="message-content"
      v-for="message in messages"
      :key="message.session_chat_id"
    >
      <div v-if="message.role === 'user'" class="message user-message">
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
            <span class="name">{{ name }}</span>
            <span class="time">{{ message.create_time }}</span>
          </div>
          <div class="chat-text">
            <div class="text">{{ message.content }}</div>
            <div class="tools">
              <div class="tools-item">
                <img src="@/assets/chat/icon_copy_nor@2x.png" alt="" />
                <span>复制内容</span>
              </div>
              <div class="tools-item">
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
export default {
  props: {
    messages: {
      type: Array,
      default: () => [],
      required: true,
    },
  },
  computed: {
    ...mapGetters(["name"]),
  },
};
</script>
  
<style lang="scss" scoped>
$headMargin: 16px;
/* 添加样式以美化消息列表 */
.chat-messages {
  flex: 1;
  display: flex;
  flex-direction: column;
  align-items: center;
  overflow-y: auto;
  padding: 10px;

  .message-content {
    display: flex;
    flex-direction: column;
    max-width: 70rem;
    // width: calc(100% - 70px);
    width: 90%;
  }
}

.message {
  display: flex;
  max-width: 80%;
  margin-bottom: 10px;
  // padding: 8px;
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
      }
    }
    .chat-text {
      padding: 20px;
      background: #f9fafb;
      border-radius: 8px;
      .text {
        font-size: 14px;
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

  .chat-content .chat-text {
    background: linear-gradient(138deg, #5b80f7 0%, #8376f7 100%);
    .text {
      color: #ffffff;
      padding-bottom: 0;
      line-height: 20px;
      border-bottom: none;
    }
  }
}

@media (max-width: 768px) {
  .message {
    .head-icon {
      margin-right: 8px;
      align-self: flex-start;
      img {
        width: 30px;
        height: 30px;
      }
    }
    .chat-content {
      .user-info {
        span {
          font-size: 12px;
        }
        .name {
          margin-right: 5px;
        }
      }
      .chat-text {
        padding: 10px;
        .text {
          line-height: 20px;
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

  .user-message {
    .head-icon {
      margin-left: 8px;
    }
  }
}
</style>
  