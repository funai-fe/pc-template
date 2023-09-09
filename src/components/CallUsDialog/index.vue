
<template>
    <el-dialog
      :visible.sync="showCallUsDialog"
      :width="dialogWidth"
      @close="close"
      title="联系我们"
    >
      <div class="qr-code-container">
        <div
          v-for="(qrCode, index) in callUsInfo"
          :key="index"
          class="qr-code-item"
        >
          <img :src="qrCode.url" class="qr-code-image" />
          <span>{{ qrCode.name }}</span>
        </div>
      </div>
    </el-dialog>
  </template>
  
  <script>
  
  import { mapState, mapMutations } from "vuex";
  export default {
    data() {
      return {
        dialogWidth: "60%",
        callUsInfo: [
          {
            name: "最新微信群",
            url: "https://funai-hpl.oss-cn-guangzhou.aliyuncs.com/homePage/contact-1.png",
          },
          {
            name: "合作微信",
            url: "https://funai-hpl.oss-cn-guangzhou.aliyuncs.com/homePage/cooperate-1.png",
          },
          {
            name: "管理员微信",
            url: "https://funai-hpl.oss-cn-guangzhou.aliyuncs.com/homePage/contact-3.png",
          },
        ],
      }
    },
    computed: {
      ...mapState("app", ["showCallUsDialog"]),
    },
    methods: {
      ...mapMutations("app", ["SET_CALL_US_DIALOG"]),
      close() {
        this.SET_CALL_US_DIALOG(false);
      },
    }
  }
  </script>
  <style lang="scss" scoped>
  .qr-code-container {
    display: flex;
    justify-content: space-between;
    flex-wrap: wrap;
    margin: -5px; /* Adjust as needed */
  }
  
  .qr-code-item {
    flex-basis: 33.3333%; /* Each item occupies 1/3 of the container */
    padding: 5px; /* Adjust as needed */
    box-sizing: border-box;
  }
  
  .qr-code-image {
    width: 100%;
    height: auto;
  }
  </style>
  