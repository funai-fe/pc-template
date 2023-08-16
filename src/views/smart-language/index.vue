<template>
  <div class="smart-container">
    <div class="choice-list">
      <div :class="['choice-item', tabIndex === 0 && 'choice-active', 'hover']" @click="onChangeTab(0)">
        智能翻译
      </div>
      <div :class="['choice-item', tabIndex === 1 && 'choice-active', 'hover']" @click="onChangeTab(1)">
        语言润色/语法修改
      </div>
    </div>
    <!-- 智能翻译 -->
    <div class="transition-container">
      <div class="header-tool">
        <svg-icon icon-class="hand-off" className="svg-icon" />
      </div>
      <div class="content">
        <div class="left">1</div>
        <div class="right">2</div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'SmartLanguage',
  data() {
    return {
      tabIndex: 0
    }
  },
  methods: {
    onChangeTab(value) {
      this.tabIndex = value
    },
    onTranslate(value) { }
  },
  mounted() {
  }
}
</script>
<style lang='scss' scoped>
.smart-container {
  .choice-list {
    border-radius: 8px;
    height: 32px;
    width: 346px;
    margin: 0 auto;
    display: flex;
    background-color: #F0F2F5;
    padding: 4px;
    color: #6C727F;
    gap: 4px;

    .choice-item {
      flex: 1;
      text-align: center;
      line-height: 24px;
      border-radius: 8px;
    }

    .choice-active {
      background-color: #fff;
      color: #000B58;
      font-weight: bold;
    }
  }

  .transition-container {
    width: 80%;
    background-color: #F9FAFB;
    border-radius: 8px;
    margin: 40px auto 0;
    height: 330px;

    .header-tool {
      height: 50px;
      align-items: center;
      border-bottom: 1px solid #E5E7EB;
      display: flex;
      padding: 12px;
      gap: 16px;
    }

    .content {
      display: flex;
      height: calc(100% - 50px);
      align-items: center;

      .left {
        flex: 1;
        padding: 12px;
        height: 100%;
        border-right: 1px #E5E7EB solid;
      }

      .right {
        padding: 12px;
        height: 100%;
        flex: 1;
      }

    }
  }
}

.svg-icon {
  width: 20px;
  height: 20px;
}
</style>