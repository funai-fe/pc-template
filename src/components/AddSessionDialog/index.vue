
<template>
  <el-dialog
    title="新建会话"
    :visible.sync="showAddSessionDialog"
    @close="close"
  >
    <el-form :model="form" ref="form" :rules="rules">
      <el-form-item label="活动名称" prop="name">
        <el-input v-model="form.name" autocomplete="off"></el-input>
      </el-form-item>
    </el-form>
    <div slot="footer" class="dialog-footer">
      <el-button @click="close">取 消</el-button>
      <el-button type="primary" @click="confirmAddSession">确 定</el-button>
    </div>
  </el-dialog>
</template>

<script>
import { mapState, mapMutations, mapActions } from "vuex";
export default {
  data() {
    return {
      form: {
        name: "",
      },
      rules: {
        name: { required: true, message: "请输入会话名称", trigger: "blur" },
      },
    };
  },
  computed: {
    ...mapState("app", ["showAddSessionDialog"]),
  },
  methods: {
    ...mapMutations("app", ["SET_ADD_SESSION_DIALOG"]),
    ...mapMutations("menu", ["SET_CREATE_MENU_TYPE"]),
    ...mapActions("menu", ["createSession"]),
    close() {
      this.SET_ADD_SESSION_DIALOG(false);
      this.SET_CREATE_MENU_TYPE(null)
      this.form.name = "";
    },
    confirmAddSession() {
      this.$refs["form"].validate((valid) => {
        if (valid) {
          this.createSession({
            name: this.form.name,
            page: this
          });
        } else {
          console.log("error submit!!");
          return false;
        }
      });
    },
  },
};
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
