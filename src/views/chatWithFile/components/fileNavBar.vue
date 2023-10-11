<template>
  <div class="navbar">
    <el-select
      v-if="fileList.length > 1"
      class="file-select"
      v-model="value"
      @change="change"
      placeholder="请选择"
    >
      <el-option
        v-for="item in fileList"
        :key="item.id"
        :label="item.fileName"
        :value="item.fileUrl"
      >
        <p class="file-name">{{ item.fileName }}</p>
        <img class="close-icon" src="@/assets/common/icon_close_sel@2x.png" />
        <!-- <span style="float: right; color: #8492a6; font-size: 13px">{{
          item.value
        }}</span> -->
      </el-option>
    </el-select>
  </div>
</template>

<script>
import { mapGetters } from "vuex";

export default {
  props: {
    fileList: {
      type: Array,
      default: () => [],
    },
    defaultFile: {
      type: Object,
      default: () => {},
    },
  },
  name: "Navbar",
  components: {},
  data() {
    return {
      value: "",
    };
  },
  watch: {
    defaultFile() {
      this.value = this.defaultFile.fileUrl || ''
      console.log('yyyyy', this.defaultFile)
    }
  },
  computed: {
    ...mapGetters(["sidebar"]),
  },
  methods: {
    change(fileUrl) {
      const curFile = this.fileList.find(file => fileUrl === file.fileUrl)
      this.$emit("changeFile", curFile);
    },
    toggleSideBar() {
      this.$store.dispatch("app/toggleSideBar");
    },
  },
};
</script>

<style lang="scss" scoped>
@import "~@/styles/variables.scss";

.navbar {
  display: flex;
  justify-content: flex-end;
  padding: 0 22px;
  align-items: center;
  height: $pageNavbar;
  overflow: hidden;
  position: relative;
  background: #fff;
  border-bottom: 1px solid #e5e7eb;

  .file-select {
    width: 346px;
    outline-color: red;
  }
}
.el-select-dropdown__item.selected {
  color: #000b58 !important;
}
.el-select-dropdown__item {
  display: flex;
  justify-content: space-between;
  align-items: center;
}
.file-name {
  max-width: 250px;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
}
.close-icon {
  width: 16px;
  height: 16px;
  margin-left: 4px;
  transition: transform 0.3s cubic-bezier(0.68, -0.55, 0.27, 1.55);

  /* 弹性过渡效果 */
  &:hover {
    transform: scale(1.3);
  }
}
</style>
<style>
.el-select .el-input.is-focus .el-input__inner {
  border-color: #e1e1e3;
}
.el-select .el-input__inner:focus {
  border-color: #e1e1e3;
}
</style>

