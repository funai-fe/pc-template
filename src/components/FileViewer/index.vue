<template>
    <div class="chat-window">
      <div class="top-microsoft-office">
      </div>
      <div class="bottom" v-if="showPdf" >
          <div style="width:100%; height: 100%">
            <iframe :src="source1" width="100%" height="100%"></iframe>
          </div>
      </div>
  
      <div class="bottom" v-else>
          <div style="width:100%; height: 100%">
            <iframe class="microsoft-office"
              :src="source1"
              frameborder="0"
            ></iframe>
          </div>
  
      </div>
    </div>
  </template>
  
  <script>
  
  import Cookies from 'js-cookie'
//   import VuePdfEmbed from 'vue-pdf-embed/dist/vue2-pdf-embed'
  
  export default {
    components: {
    //   VuePdfEmbed,
    },
    
    props: {
      fileUrl: "",
      isPDF: true,
      default() {
        return {};
      },
    },
    data() {
      return {
        chatList: [],
        inputMsg: "",
        showEmoji: false,
        srcImgList: [],
        isSend: false,
        isMobile: false,
        username: Cookies.get("username"),
        stream: "流式输出",    // 是否支持流式输出
        source1: 'https://funai.oss-cn-beijing.aliyuncs.com/file/welcome-funai-chatgpt.pdf',
        page: null,
        pageCount: 1,
        showAllPages: false,
        scale: 1,  // 缩放比例
        showPdf: true,
        microsoftOffice: "https://view.officeapps.live.com/op/view.aspx?src=",
      };
    },
    computed: {
      scaleFun(index) { // 缩放
       var scale = this.scale;
        return `transform:scale(${scale}); transform-origin: left top;`;
      },
    },
    watch: {
      showAllPages() {
        this.page = this.showAllPages ? null : 1
      },
      fileUrl(){
        if(this.isPDF){
          const pdfjsUrl = 'pdfjs/web/viewer.html';
          this.source1 = pdfjsUrl + '?file=' + this.fileUrl;
        }else{
          this.source1 = this.microsoftOffice + this.fileUrl;
        }
      },
      isPDF(){
        this.showPdf = this.isPDF;
      },
    },
    mounted() {
      this.showAllPages = false;
      this.page = 1;
      this.checkIfMobile();
      window.addEventListener('resize', this.checkIfMobile);
    },
    beforeDestroy() {
      window.removeEventListener('resize', this.checkIfMobile);
    },
    methods: {
  
      checkIfMobile() {
        const isMobile = window.innerWidth <= 1024;
        this.isMobile = isMobile;
      },
  
      handleDocumentRender(args) {
        this.pageCount = this.$refs.pdfRef.pageCount
      },
      zoomA() {
        this.scale += 0.1;
      },
      zoomB() {
        this.scale -= 0.1;
      },
  
    }
  };
  
  </script>
  
  <style>
  
  .vue-pdf-embed > div {
      position: relative;
      display: flex;
      justify-content: center;
      margin-bottom: 8px;
      box-shadow: 10px 2px 8px 4px rgba(0, 0, 0, 0.1);
  }
  
  .microsoft-office {
    width: 100%;
    height: 100%;
    box-shadow: 10px 2px 8px 4px rgba(0, 0, 0, 0.1);
  }
  
  
  </style>
  
  <style lang="scss" scoped>
  
  
  .chat-window {
    width: 100%;
    height: 100%;
    position: relative;
  
    .top {
      display: flex;
      justify-content: space-between;
  
      &::after {
        content: "";
        display: block;
        clear: both;
      }
      .right {
          float: right;
      }
    }
    .top-microsoft-office {
      margin-bottom: 20px;
      &::after {
        content: "";
        display: block;
        clear: both;
      }
      .right {
          float: right;
      }
    }
    // 聊天窗口控制
    .bottom {
      width: 100%;
      height: 85vh;
      background-color: #ccc;
      border-radius: 20px;
      padding: 10px;
      box-sizing: border-box;
      position: relative;
      overflow: auto;
  
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