<template>
  <div class="com-image-drag">
    <div class="button-list">
      <el-button @click="openDrag" v-if="!drag_open" :disabled="banner_list.length <= 1" type="text" size="small" class="operation-success">拖拽</el-button>
      <el-button @click="save" v-if="drag_open" type="text" size="small" class="operation-success">保存</el-button>
      <el-button @click="cancle" v-if="drag_open" type="text" size="small" class="operation-error">取消</el-button>
    </div>
    <div class="image-list">
      <!-- 拖拽层 -->
      <div class="list-wrap" v-show="drag_open">
        <draggable
          v-model="banner_list"
          :options="{
            animation: 150,
            ghostClass: 'sortable-ghost',
            chosenClass: 'chosenClass',
            scroll: true,
            scrollSensitivity: 200
          }"
        >
          <div class="image-item" v-for="($item, $index) in banner_list" :key="$index" :style="{ backgroundImage: `url(${$item.url})` }"></div>
        </draggable>
      </div>
      <!-- 展示层 -->
      <div class="list-wrap" v-show="!drag_open">
        <div
          class="image-item"
          v-for="($item, $index) in banner_list"
          :key="$index"
          :style="{ backgroundImage: `url(${$item.url})` }"
          @mouseover.prevent="$item.is_hover = true"
          @mouseleave.prevent="$item.is_hover = false"
        >
          <div class="label" v-show="!$item.is_hover">
            <i class="el-icon-upload-success el-icon-check icon-success"></i>
          </div>
          <div class="mask" v-show="$item.is_hover">
            <i class="el-icon-delete bin" @click="deleteImage($index)"></i>
          </div>
        </div>
        <el-upload
          v-show="limit == 0 || banner_list.length < limit"
          list-type="picture-card"
          name="file"
          class="upload-machine"
          :disabled="drag_open"
          :action="action()"
          :on-error="onError"
          :on-success="onSuccess"
          :before-upload="beforeUpload"
          :show-file-list="false"
          :multiple="multiple"
          enctype="multipart/form-data"
        >
          <i class="el-icon-plus"></i>
        </el-upload>
      </div>
    </div>
  </div>
</template>
<script>
/**
 * @author LeeYunxiang
 * @description 为了方便上传图片组件可拖拽排序，不改变饿了么插件的逻辑，只做视图层的展示
 * @param {Array} list 图片数组
 * @param {Number} limit 最多可上传几张图片
 * @param {Function} action 上传接口地址
 * @param {Boolean} multiple 是否批量上传
 * @param {Function} beforeUpload 上传之前的回调，用于校验
 * @param {Function} onSuccess 上传成功的回调函数
 * @param {Function} onError 上传失败的回调函数
 */
import draggable from "vuedraggable";
export default {
  name: "ComImageShow",
  components: {
    draggable,
  },
  props: {
    list: {
      type: Array,
    },
    limit: {
      type: Number,
      default: 0,
    },
    multiple: {
      type: Boolean,
      default: false,
    },
    action: {
      type: Function,
      default: () => {},
    },
    beforeUpload: {
      type: Function,
      default: () => {},
    },
    onError: {
      type: Function,
      default: () => {},
    },
    onSuccess: {
      type: Function,
      default: () => {},
    },
  },
  data() {
    return {
      banner_list: [], //拖拽插件不建议直接改变父组件的传值，所以另建一个新数组
      file_list: [], //保存开启拖拽之前排序的数组
      drag_open: false, //拖拽开启开关
    };
  },
  methods: {
    // 删除图片
    deleteImage(i) {
      this.banner_list.splice(i, 1);
      this.$emit(
        "update",
        this.banner_list.map((item) => item.url)
      );
    },
    // 开启拖拽
    openDrag() {
      this.file_list = JSON.parse(JSON.stringify(this.banner_list)); //数组深拷贝
      this.drag_open = true;
    },
    // 取消拖拽
    cancle() {
      this.banner_list = this.file_list;
      this.drag_open = false;
    },
    // 拖拽保存
    save() {
      this.$emit(
        "update",
        this.banner_list.map((item) => item.url)
      );
      this.drag_open = false;
    },
  },
  mounted() {
    // 初始数组拷贝
    this.banner_list = this.list.map((url) => {
      let obj = {
        url: url,
        is_hover: false,
      };
      return obj;
    });
  },
  watch: {
    // 监听父组件传值改变
    list(arr) {
      if (arr.length > this.limit && this.limit != 0) {
        this.$message.warning(`当前最多可上传${this.limit}张图片`);
        return false;
      }
      this.banner_list = arr.map((url) => {
        let obj = {
          url: url,
          is_hover: false,
        };
        return obj;
      });
    },
  },
};
</script>
<style lang="scss" scoped>
.com-image-drag {
  &:after {
    display: block;
    clear: both;
    content: "";
  }

  .image-list {
    float: left;

    &:after {
      display: block;
      clear: both;
      content: "";
    }

    .list-wrap {
      float: left;
    }

    .image-item {
      width: 148px;
      height: 148px;
      position: relative;
      margin-right: 10px;
      margin-bottom: 10px;
      border: 1px solid #c0ccda;
      background-size: 100% 100%;
      border-radius: 6px;
      float: left;
      overflow: hidden;
      cursor: pointer;
    }

    .label {
      width: 49px;
      height: 20px;
      line-height: 25px;
      background-color: #13ce66;
      color: #ffffff;
      transform: rotate(45deg);
      text-align: center;
      position: absolute;
      right: -18px;
      top: -4px;

      .icon-success {
        font-size: 13px;
        transform: rotate(-45deg);
      }
    }

    .mask {
      width: 100%;
      height: 100%;
      border-radius: 6px;
      background-color: rgba(0, 0, 0, 0.5);
      position: relative;

      .bin {
        color: #ffffff;
        font-size: 20px;
        position: absolute;
        left: 45%;
        top: 43%;
      }
    }
  }

  .upload-machine {
    float: left;
  }
}
</style>