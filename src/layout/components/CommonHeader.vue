<template>
  <div class="common-header" v-if="shouldShowHeaderComponent">
    <div class="page-main-title">
      <span class="fixed-title">欢迎使用</span>

      <img src="@/assets/common/image_logo@2x.png" class="sidebar-logo" />
      <span v-if="title || defaultTitle" class="async-page-title"><span class="comma"> ，</span>{{ title ||
        defaultTitle }}</span>
      <div v-if="secondTitle" class="second-title">{{ secondTitle }}</div>

    </div>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'

export default {
  name: "CommonHeader",
  props: {
    title: {
      type: String,
      default: "",
    },
  },
  computed: {
    ...mapGetters(['pageHeaderTitle']),
    defaultTitle() {
      const route = this.$route;
      return this.title || this.pageHeaderTitle || (route.meta && route.meta.showHeader && route.meta.headerTitle)
    },
    shouldShowHeaderComponent() {
      // 访问当前路由对象的meta信息
      const route = this.$route;
      return route.meta && route.meta.showHeader
    },
    secondTitle() {
      const route = this.$route;
      return route.meta && route.meta.secondTitle
    }
  },
  methods: {
    // async logout() {
    //   await this.$store.dispatch('user/logout')
    //   this.$router.push(`/login?redirect=${this.$route.fullPath}`)
    // }
  }
};
</script>

<style lang="scss" scoped>
.common-header {
  display: flex;
  justify-content: center;
  align-items: center;
  padding-top: 40px;
  overflow: hidden;
  position: relative;
  background: #fff;

  & .page-main-title {
    position: relative;
    height: 104px;
    padding-top: 22px;

    span {
      font-size: 36px;
      font-family: PingFangSC-Medium, PingFang SC;
      color: #333333;
      line-height: 50px;

      &.async-page-title {
        margin-left: 118px;
      }
    }

    .sidebar-logo {
      position: absolute;
      top: -5px;
      height: 104px;
    }

    .second-title {
      text-align: center;
      color: #6C727F;
      margin: 10px;
    }
  }
}

@media (max-width: 768px) {
  .common-header {
    padding-top: 30px;

    & .page-main-title {
      height: 78px;
      padding-top: 12px;

      span {
        font-size: 28px;
        line-height: 50px;

        &.async-page-title {
          margin-left: 88px;
        }
      }

      .sidebar-logo {
        top: -3px;
        height: 80px;
      }
    }
  }
}

@media (max-width: 576px) {
  .common-header {
    padding-top: 5px;

    & .page-main-title {
      display: flex;
      flex-direction: column;
      align-items: center;
      height: 60px;

      span {
        font-size: 16px;
        line-height: 24px;

        &.fixed-title {
          margin-right: 60px;
        }

        &.async-page-title {
          margin-left: 0;

          & .comma {
            display: none;
          }
        }
      }

      .sidebar-logo {
        margin-left: 60px;
        top: -3px;
        height: 52px;
      }
    }
  }
}
</style>
