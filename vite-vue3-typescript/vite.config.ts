import {defineConfig} from 'vite'
import vue from '@vitejs/plugin-vue'
import AutoImport from 'unplugin-auto-import/vite'
import Components from 'unplugin-vue-components/vite'
import {ElementPlusResolver,AntDesignVueResolver} from 'unplugin-vue-components/resolvers'
import path from "path"
export default defineConfig({
    plugins: [
        vue(),
        AutoImport({
            resolvers: [ElementPlusResolver(),AntDesignVueResolver()],
        }),
        Components({
            resolvers: [ElementPlusResolver(),AntDesignVueResolver()],
        }),
    ],
    //配置反向代理
    server: {
        host: 'localhost',  // 启动后浏览器窗口输入地址就可以进行访问
        port: 8080, // 端口号
        open: false, //是否自动打开浏览器
        cors: true, //为开发服务器配置 CORS , 默认启用并允许任何源
        https: false, //是否支持http2 如果配置成true 会打开https://localhost:3001/xxx;
        strictPort: true, //是否是严格的端口号，如果true，端口号被占用的情况下，vite会退出
        hmr: true, // 开启热更新
        proxy: {
            '/api': {
                // 配置接口调用目标地址
                target: 'http://localhost:3000',
                // 当进行代理时，Host 的源默认会保留（即Host是浏览器发过来的host），如果将changeOrigin设置为true，则host会变成target的值。
                changeOrigin: true,
                // 前缀 /api 是否被替换为特定目标，不过大多数后端给到的接口都是以/api打头，这个没有完全固定的答案，根据自己的业务需求进行调整
                rewrite: path => path.replace(/^\/api/, ''),
            }
        }
    },
    //
    resolve:{
        alias:{
            "@":path.resolve(__dirname,'./src')
        }
    }
})
