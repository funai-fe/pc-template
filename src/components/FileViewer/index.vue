<template>
  <div class="chat-window" :style="{ width: width }">
    <div class="file-viewer-wrap" :style="{ height: height }" v-if="isPDF">
      <iframe :src="source" width="100%" height="100%"></iframe>
    </div>

    <div class="file-viewer-wrap" :stype="{ height: height }" v-else>
      <iframe class="microsoft-office" :src="source" frameborder="0"></iframe>
    </div>
  </div>
</template>
  
<script>
import { isPDFFile } from "@/utils/index";
const G_DEFAULT_PDF_URL =
  "https://funai.oss-cn-beijing.aliyuncs.com/file/welcome-funai-chatgpt.pdf";
const G_PDF_PRE_LINK = "pdfjs/web/viewer.html?file=";
const G_MICROSOFT_OFFICE_PRE_LINK =
  "https://view.officeapps.live.com/op/view.aspx?src=";
export default {
  props: {
    fileUrl: {
      type: String,
      default: '',
    },
    width: {
      type: String,
      default: "100%", // 默认宽度为100%
    },
    height: {
      type: String,
      default: "100vh", // 默认高度为100%视窗高度
    }
  },
  data() {
    return {
      source: G_DEFAULT_PDF_URL
    };
  },
  computed: {
    isPDF() {
      return isPDFFile(this.fileUrl)
    }
  },
  watch: {
    fileUrl(url) {
      this.source = this.isPDF
        ? `${this.fileUrl}`
        : `${G_MICROSOFT_OFFICE_PRE_LINK}${this.fileUrl}`;
    },
  },
  mounted() {},
  methods: {},
};
</script>
  
  <style lang="scss" scoped>
.chat-window {
  width: 100%;
  // height: 100%;
  position: relative;

  .file-viewer-wrap {
    width: 100%;
    // height: 100vh;
    // background-color: #ccc;
    // border-radius: 20px;
    // padding: 10px;
    box-sizing: border-box;
    position: relative;
    // overflow: auto;

    &::-webkit-scrollbar {
      width: 8px;
      /* Safari,Chrome 隐藏滚动条 */
      height: 8px;
      /* Safari,Chrome 隐藏滚动条 */
      // display: none;
      /* 移动端、pad 上Safari，Chrome，隐藏滚动条 */
    }
    &::-webkit-scrollbar-thumb {
      background-color: #ccc;
      border-radius: 5px;
    }
    &::-webkit-scrollbar-track {
      background-color: #f2f2f2;
      border-radius: 5px;
    }
  }

  .pagenum {
    margin-left: 20px;
    text-align: left;
    z-index: 1000;
  }

  .showPage {
    margin-left: auto;
  }

  .btn {
    display: flex;
    padding-left: 45%;
    position: absolute;
    z-index: 999;
  }

  //   .enlarge {
  //     width: 50px;
  //     height: 50px;
  //   }

  .zoomout {
    margin-left: 10px;
  }
}
</style>