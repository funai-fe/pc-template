<template>
  <div class="file-upload-container">
    <el-upload
      class="upload-box"
      drag
      action="https://jsonplaceholder.typicode.com/posts/"
      multiple
    >
      <img src="@/assets/file/icon_upload_nor@2x.png" class="upload-icon" />
      <div class="el-upload__text">点击选择文件，或将文件拖动到这里</div>
      <div class="el-upload__tip">
        支持上传pdf, word, docx, excel, ppt类型的单个或多个文件
      </div>
    </el-upload>
    <div class="display-container">
      <div class="display-card"></div>
      <div class="display-card"></div>
      <div class="display-card"></div>
    </div>
  </div>
</template>
  
  <script>
import { mapGetters, mapActions } from "vuex";

export default {
  components: {},
  computed: {},
  methods: {},
};
</script>
<style lang="scss" scoped>
.file-upload-container {
  padding: 0 150px;
  .upload-box {
    margin-bottom: 100px;
    .upload-icon {
      width: 48px;
      height: 48px;
      margin-bottom: 16px;
    }
    .el-upload__text {
      font-size: 20px;
    }
    .el-upload__tip {
      font-size: 12px;
    }
  }
  .display-container {
    display: flex;
    flex-wrap: wrap;
    justify-content: space-evenly;
    align-items: center;
    .display-card {
      width: 380px;
      height: 300px;
      background: #ccc;
    }
  }
}
</style>
<style>
.file-upload-container .el-upload {
  width: 100%;
}
.file-upload-container .el-upload .el-upload-dragger {
  width: 100%;
  height: 316px;
  padding: 0 40px;
  display: flex;
  align-items: center;
  flex-direction: column;
  justify-content: center;
  color: #6c727f;
  background: #f9fafb;
}

@media (max-width: 768px) {
  .file-upload-container {
    padding: 0 100px!important;
  }
  .upload-box .el-upload__text {
    font-size: 16px!important;
  }

  .file-upload-container .el-upload .el-upload-dragger {
    height: 270px!important;
  }
}

@media (max-width: 576px) {
  .file-upload-container {
    padding: 0 50px!important;
    margin-top: 30px;
  }
  .file-upload-container .upload-box .upload-icon {
      width: 40px!important;
      height: 40px!important;
      margin-bottom: 16px!important;
    }
  .upload-box .el-upload__text {
    font-size: 13px!important;
  }

  .file-upload-container .el-upload .el-upload-dragger {
    height: 220px!important;
  }
}
</style>