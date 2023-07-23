<template>
    <div ref="headerEl" :class="['header', isOpen ? 'open' : '', isSticky ? 'sticky' : '']">
        <div class="left-menu menu">
            <img class="logo" src="@/assets/index/image_bczj.png" alt="">
            <div class="nav">
                <router-link v-for="nav in leftNavs" :to="nav.link">
                    <span class="nav-item">{{ nav.name }}</span>
                </router-link>
            </div>
        </div>
        <div class="right-menu nav">
            <router-link v-for="nav in rightNavs" :to="nav.link">
                <span class="nav-item">{{ nav.name }}</span>
            </router-link>
        </div>

        <i class="burger" :class="isOpen ? 'el-icon-close' : 'el-icon-s-fold'" @click="openNav"></i>
        <div class="mobile-nav">
            <router-link v-for="nav in leftNavs.concat(rightNavs)" :to="nav.link">
                <span class="nav-item">{{ nav.name }}</span>
            </router-link>
        </div>
    </div>
</template>

<script>
export default {
    name: 'Index',
    data() {
        return {
            isOpen: false,
            isSticky: false,
            leftNavs: [{
                name: 'AI助手',
                link: '/'
            }, {
                name: '单文件阅读',
                link: '/'
            }, {
                name: '多文件阅读',
                link: '/'
            }, {
                name: 'AI画图',
                link: '/'
            }, {
                name: '冒险游戏',
                link: '/'
            }, {
                name: '语言专家',
                link: '/'
            }],
            rightNavs: [{
                name: '联系我们',
                link: '/'
            }, {
                name: '开源地址',
                link: '/'
            }, {
                name: '开始使用',
                link: '/'
            }]
        }
    },

    watch: {
    },
    methods: {
        handleScroll() {
            if (this.isOpen) {
                this.isOpen = false;
            }

            let height = this.$refs.headerEl.getBoundingClientRect().height;
            if (window.pageYOffset - height > 600) {
                this.isSticky = true;
            } else {
                this.isSticky = false;
            }
        },
        openNav() {
            this.isOpen = !this.isOpen
        }
    },
    mounted() {
    },
    beforeDestroy() {
    },
}
</script>
<style lang="scss" scoped>
// 头部
.header {
    width: 100vw;
    height: 62px;
    display: flex;
    justify-content: space-between;
    padding: 0 100px;
    align-items: center;
    position: absolute;
    top: 0;
    z-index: 200;

    .left-menu {
        display: flex;
        align-items: center;
        margin-right: 35px;

        .logo {
            width: 67px;
            height: 57px;
            margin-right: 30px;
            background-color: #ccc;
        }
    }

    .right-menu {
        display: flex;
        align-items: center;
    }

    .nav {
        .nav-item {
            margin-left: 25px;
            font-size: 9px;
            font-family: PingFangSC-Semibold, PingFang SC;
            font-weight: 600;
            color: #FFFFFF;
            cursor: pointer;

            &:hover {
                color: #61baf1;
            }
        }
    }

    // 小屏幕时展示的图标
    .burger {
        color: #fff;
        display: none;
    }

    // 小屏幕时下啦的头部菜单
    .mobile-nav {
        flex-direction: column;
        position: absolute;
        left: 0;
        top: 0;
        width: 100vw;
        height: 100vh;
        display: none;
        background-color: white;
        padding: 62px 6% 20px;
        opacity: 0;
        box-shadow: 0 0 18px rgba(0, 0, 0, 0.2);
        animation: slideDown 0.4s ease-out forwards;

        &>* {
            color: #000B58;
            animation: showMenu 0.5s linear forwards 0.3s;
            font-size: 18px;
            opacity: 0;
        }

        .nav-item {
            margin: 7px 0;
            display: inline-block;
            width: 100%;

            &:hover {
                color: #61baf1;
            }
        }
    }

    // 滚动到一定距离后展示的头部样式
    &.sticky {
        position: fixed;
        background-color: #fff;
        box-shadow: 0 0 18px rgba(0, 0, 0, 0.2);
        animation: dropDown 0.5s ease-in-out forwards;

        .nav-item {
            color: #000B58;
        }

        .burger {
            color: #000B58;
        }
    }
}

@keyframes slideDown {
    from {
        height: 0;
        opacity: 0;
    }

    to {
        height: 60vh;
        padding-top: 80px;
        padding-bottom: 20px;
        opacity: 1;
    }
}

@keyframes showMenu {
    from {
        opacity: 0;
        transform: translateY(-1vh);
    }

    to {
        opacity: 1;
        transform: translateY(0);
    }
}

@keyframes dropDown {
    from {
        transform: translateY(-100%);
    }

    to {
        transform: translateY(0);
    }
}


// 响应式适配
@media (max-width: 1100px) {
    .header {
        .nav {
            display: none;
        }

        .burger {
            display: block !important;
            font-size: 26px;
            position: relative;
            cursor: pointer;
        }

        .mobile-nav {
            display: none;
            padding: 62px 100px 20px;
        }
    }

    .header.open {
        .logo {
            z-index: 10;
        }

        .burger {
            z-index: 10;
            color: #000B58;
        }

        .mobile-nav {
            display: flex;
        }
    }
}

@media(max-width: 992px) {}

@media(max-width: 768px) {}

@media (max-width: 576px) {
    .header {
        padding: 0 6%;

        .mobile-nav {
            // display: none;
            padding: 62px 6% 20px;
        }
    }
}
</style>
