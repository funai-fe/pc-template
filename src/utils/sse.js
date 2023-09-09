import Vue from 'vue'
import VueSSE from 'vue-sse';
// 全局注册 VueSse 插件
Vue.use(VueSSE)

import { getToken } from '@/utils/auth'
import { getCurrentSession } from '@/utils/auth'
class SSEManager {
    constructor(options) {
        this.sseInstance = null
        // 默认配置
        const defaultOptions = {
            url: `${process.env.VUE_APP_BASE_API}/chat/getSseEmitter/${getCurrentSession()}`,
            format: 'text/event-stream', // 数据格式，可以根据需求更改
            polyfill: true,
            forcePolyfill: true,
            polyfillOptions: {
                // 超时时间，调长点，要不频繁重连
                heartbeatTimeout: 10 * 60 * 1000,
                // 携带认证token
                headers: {
                    'token': getToken(),
                },
            },
            onMessage: null, // 自定义消息监听器
        };

        // 合并默认配置和传入的配置参数
        this.options = { ...defaultOptions, ...options };
        console.log(Vue.prototype.$sse, 'oooopopop')

        this.sseInstance = Vue.prototype.$sse.create(this.options);

        // 添加 SSE 事件监听器
        if (this.options.onMessage) {
            this.sseInstance.on('message', this.options.onMessage);
        } else {
            this.sseInstance.on('message', this.handleSSEMessage);
        }

        this.sseInstance.on('error', (err) => {
            console.error('Failed to parse or lost connection:', err);
        });
    }

    // 默认的 SSE 消息处理方法
    handleSSEMessage(data) {
        // 在这里处理 SSE 消息
    }

    // 开始 SSE 连接，并返回一个 Promise
    start() {
        return new Promise((resolve, reject) => {
            this.sseInstance.connect().then(sse => {
                resolve(sse);
            }).catch((err) => {
                reject(err);
            });
        });
    }

    // 关闭 SSE 连接
    stop() {
        this.sseInstance.disconnect();
    }
}

export default SSEManager;
