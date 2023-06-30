<template>
  <image-drag
    :list="file_list"
    :multiple="true"
    :action="uploadUrl"
    :on-error="uploadError"
    :on-success="bannerPicSuccess"
    :before-upload="beforeAvatarUpload"
    @update="updateFile"
  />
</template>
<script>
import ImageDrag from '@/components/upLoad/index.vue'
// import { Loading } from 'element-ui'
export default {
  components: {
    ImageDrag
  },
  data() {
    return {
      banner_list: [], // ele用的
      file_list: [] // 自己用的
    }
  },
  methods: {
    // 上传图片路径
    uploadUrl() {
      return 'https://kyy-business-test1.yaochufa.com/upload/uploadImage'
    },
    // 图片长传-之前
    beforeAvatarUpload(file) {
      const type_arr = ['image/jpeg', 'image/png']
      const type = file.type
      if (!type_arr.includes(type)) {
        this.$message.error('图片格式不正确,只支持jpg和png类型图片')
        return false
      }
      return true
    //   const is_size = new Promise((resolve, reject) => {
    //     let width = 400;
    //     let height = 320;
    //     let img = new Image();
    //     img.src = window.URL.createObjectURL(file);
    //     img.onload = () => {
    //       let valid = img.width === width && img.height === height;
    //       if (valid) {
    //         Loading.service({ fullscreen: true, text: "图片上传中，请稍后" });
    //         resolve(file);
    //       } else {
    //         self.$message.error("请上传400*320px大小的图片!");
    //         reject();
    //       }
    //     };
    //   });
    //   return is_size;
    },
    // Banner图-成功
    bannerPicSuccess(res) {
      this.file_list.push(res.content)
    },
    // Banner图片上传报错
    uploadError() {
      this.$message.error('上传失败，请重新上传')
    },
    updateFile(val) {
      this.file_list = val
      console.log(this.file_list)
    }
  }
}
</script>
