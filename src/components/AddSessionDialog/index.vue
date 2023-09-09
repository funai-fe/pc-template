
<template>
  <el-dialog
    title="新建会话"
    :visible.sync="showAddSessionDialog"
    @close="close"
  >
    <el-form :model="form">
      <el-form-item label="活动名称">
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
    };
  },
  computed: {
    ...mapState("app", ["showAddSessionDialog"]),
  },
  methods: {
    ...mapMutations("app", ["SET_ADD_SESSION_DIALOG"]),
    ...mapActions("menu", ["addMessge"]),
    close() {
      this.SET_ADD_SESSION_DIALOG(false);
    },
    confirmAddSession() {
      this.addMessge();
      this.SET_ADD_SESSION_DIALOG(false);
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
