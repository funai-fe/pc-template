<template>
  <div class="upload">
    <draggable v-model="productForm.productPicList" class="list-group" tag="ul" v-bind="dragOptions" @start="productForm.drag = true" @end="productForm.drag = false">
      <div
        v-for="(item,index) in productForm.productPicList"
        :key="index"
        v-loading="productForm.loadingapp"
        class="listitem"
        @mouseenter="showDelBtn(index)"
        @mouseleave="hiddenDelBtn"
      >
        <img v-if="item" :src="item" width="148" height="148" class="imgSty" />
        <i v-show="index==productForm.currentDelBtn" class="el-icon-delete delIcon" @click="deleImg(item,index)" />
      </div>
    </draggable>
    <div class="uploadIcon">
      <el-upload  action="https://jsonplaceholder.typicode.com/posts/" list-type="picture-card" :on-success="handlePictureSuccess">
        <i class="el-icon-plus" />
      </el-upload>
    </div>
  </div>
</template>

<script>
import draggable from "vuedraggable";
export default {
  data() {
    return {
      productForm: {
        productPicList: [],
        currentDelBtn: -1,
        loadingapp: false,
        drag: false,
      },
    };
  },
  components: {
      draggable,
    },
  computed: {
    //这一部分直接拿过来用的
    dragOptions() {
      return {
        animation: 200,
        group: "description",
        disabled: false,
        ghostClass: "ghost",
      };
    },
  },
  methods: {
    //显示删除图片的图标
    showDelBtn(index) {
      console.log(index);
      this.productForm.currentDelBtn = index;
    },
    //隐藏删除图片的图标
    hiddenDelBtn() {
      this.productForm.currentDelBtn = -1;
    },
    // 删除图片
    deleImg(data, index) {
      this.productForm.productPicList.splice(index, 1);
    },
    //图片上传成功之后的校验：
    // 最多只能上传5张、必须是1：1的 ；不能超过100k
    //这里为什么没有用el-upload自带图片上传之前的验证before-upload 呢 因为 一但上传了失败的图片以前上传的所有图片都不显示了 （目前不太清楚原因）
    //以下函数 里为什么一直用的 是file 而不是fileList  因为涉及到了编辑回显，如果没有编辑回显可以直接用fileList这个参数来处理代码逻辑；
    handlePictureSuccess(response, file, fileList) {
      console.log(file);
      const isJPG = file.raw.type === "image/jpeg";
      const isJPG2 = file.raw.type === "image/jpg";
      const isPNG = file.raw.type === "image/png";
      const isGIF = file.raw.type === "image/gif";
      const isLt5M = file.raw.size / 1024 < 100;
      // const isSize = this.imgSize(file)
      if (!isJPG && !isJPG2 && !isPNG && !isGIF) {
        this.$message.warning("只支持jpg或png或gif格式图片");
        return;
      }
      if (!isLt5M) {
        this.$message.warning("商品图片须小于100K!");
        return;
      }

      if (this.productForm.productPicList.length >= 5) {
        this.$message.warning(`当前限制选择 5 张图片`);
        return;
      }
      //以下代码是验证是否符合比例，如果不需要验证比例可以直接把图片push到数组里
      this.productForm.productPicList.push(file.response.data)
    //   const _this = this;
    //   new Promise(function (resolve, reject) {
    //     const url = window.URL || window.webkitURL;
    //     const img = new Image();
    //     img.onload = function () {
    //       // 图片比例校验
    //       const valid = img.width / img.height === 1;
    //       valid ? resolve() : reject();
    //     };
    //     img.src = url.createObjectURL(file.raw);
    //   }).then(
    //     () => {
    //       //只有验证通过了才添加到  productForm.productPicList这个数组里，这个数组就是用来显示上传的图片的file.response.data  这个是后台接口返回来的值
    //       _this.productForm.productPicList.push(file.response.data);
    //       return file.raw;
    //     },
    //     () => {
    //       this.$message.warning("商品图片尺寸仅支持方形!");
    //       return Promise.reject();
    //     }
    //   );
    },
  },
};
</script>

