<template>
  <div>
    <div class="drag" ref="parentBox">
      <img class="upload-img" src="https://ss0.bdstatic.com/70cFvHSh_Q1YnxGkpoWK1HF6hhy/it/u=841410969,921591573&fm=26&gp=0.jpg" alt />
      <div class="drag_box" v-drag="parentDom"></div>
    </div>
    <div class="btn" @click="submit">保存最终</div>
  </div>
</template>

<script>
import html2canvas from "html2canvas";
export default {
  data() {
    return {
      parentDom: null,
    };
  },
  mounted() {
    this.parentDom = this.$refs.parentBox;
  },
  methods: {
    submit() {
      html2canvas(this.$refs.parentBox, {
        allowTaint: true,
        useCORS: true,
        scrollY: 0,
      }).then((resolve) => {
        let imgUrl = resolve.toDataURL("image/png"); //此时就得到了dom元素转成了base64的图片
        console.log(imgUrl);
      });
    },
  },
  directives: {
    drag: function (el, binding) {
      var parentDom = binding.value;
      const dragBox = el; // 获取当前元素
      dragBox.onmousedown = (e) => {
        console.log(parentDom.clientWidth);

        // 算出鼠标相对元素的位置
        const disX = e.clientX - dragBox.offsetLeft;
        const disY = e.clientY - dragBox.offsetTop;
        document.onmousemove = (e) => {
          // 用鼠标的位置减去鼠标相对元素的位置，得到元素的位置
          let left = e.clientX - disX;
          let top = e.clientY - disY;

          if (left < 0) {
            left = 0;
          }
          if (top < 0) {
            top = 0;
          }
          // 限定右边界的距离(当l=父元素宽-子元素宽时，刚好子元素放在父元素最右边)
          if (left > parentDom.clientWidth - dragBox.clientWidth) {
            left = parentDom.clientWidth - dragBox.clientWidth;
          }
          // 限定下边界的距离(当t=父元素高-子元素高时，刚好子元素放在父元素最下边)
          if (top > parentDom.clientHeight - dragBox.clientHeight) {
            top = parentDom.clientHeight - dragBox.clientHeight;
          }

          // 移动当前元素
          dragBox.style.left = left + "px";
          dragBox.style.top = top + "px";
        };
        document.onmouseup = (e) => {
          // 鼠标弹起来的时候不再移动
          document.onmousemove = null;
          // 预防鼠标弹起来后还会循环（即预防鼠标放上去的时候还会移动）
          document.onmouseup = null;
        };
      };
    },
  },
};
</script>
<style scoped>
.drag {
  display: inline-block;
  position: relative;
  /* width: 100%; */
  /* height: 500px; */
  background-color: #fff;
  border: 1px solid #ccc;
}
.upload-img {
  width: auto;
  height: 500px;
}
.drag_box {
  width: 50px;
  height: 50px;
  border: 1px solid #666;
  background-color: rgba(107, 227, 248, 0.61);
  /* 使用定位，脱离文档流 */
  position: absolute;
  bottom: 100px;
  right: 100px;
  /* 鼠标移入变成拖拽手势 */
  cursor: move;
  z-index: 3000;
}
.btn {
    display: inline-block;
    border: 1px solid #ccc;
    border-radius: 8px;
    padding: 6px;
}
</style>
