<!--
 * @Author: error: error: git config user.name & please set dead value or install git && error: git config user.email & please set dead value or install git & please set dead value or install git
 * @Date: 2023-08-10 22:25:25
 * @LastEditors: lxj 1851816672@qq.com
 * @LastEditTime: 2023-09-08 19:01:42
 * @FilePath: /pc-template/src/views/index/index.vue
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
-->
<template>
    <div class="index-container">
        <div class="choice-content">
            <div class="choice-box flx-center">
                <img src="@/assets/index/image_yiliaozushou.png" alt="">
                <div class="title">冒险</div>
            </div>
        </div>
    </div>
</template>
  
<script>
import { mapGetters } from 'vuex'

export default {
    name: 'Index',
    computed: {
        ...mapGetters([
            'name',
            'roles'
        ])
    },
    data() {
        return {
            tabs: [
                { id: 1, name: '全部' },
                { id: 2, name: '收藏' },
                { id: 3, name: '日常' },
                { id: 4, name: '工作' },
                { id: 5, name: '休闲' },
                { id: 6, name: '文案' },
                { id: 7, name: '教育' },
                { id: 8, name: '论文' },
                { id: 9, name: '出行' },
                { id: 10, name: '企业' },
                { id: 11, name: '故事' },
                { id: 12, name: '语言' },
            ],
            tabIndex: 1,
            queryParams: ''
        }
    },
    methods: {
        onChangeTab(value) {
            this.tabIndex = value.id
        }
    },
    mounted() {
    }
}
</script>
  
<style lang='scss' scoped>
.index-container {
    padding: 0 150px 123px;

    .choice-content {
        .choice-box {
            width: 210px;
            height: 187px;
            background: #F9FAFB;
            border-radius: 8px;
            flex-direction: column;
            padding: 28px 64px;

            img {
                height: 81px;
                width: 81px;
                margin-bottom: 20px;
            }

            .title {
                margin-bottom: 9px;
                font-size: 20px;
                font-family: PingFangSC-Medium, PingFang SC;
                font-weight: 500;
                color: #333333;
            }

            .content {

                font-size: 14px;
                font-family: PingFangSC-Light, PingFang SC;
                font-weight: 300;
                color: #6C727F;
            }
            &:hover {
                border: 2px solid #000B58;
            }
        }
        
    }
}

.svg-icon {
    width: 20px;
    height: 20px;
}
</style>
  