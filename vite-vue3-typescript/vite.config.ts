import {defineConfig} from 'vite'
import vue from '@vitejs/plugin-vue'
import AutoImport from 'unplugin-auto-import/vite'
import Components from 'unplugin-vue-components/vite'
import {ElementPlusResolver,AntDesignVueResolver,VantResolver} from 'unplugin-vue-components/resolvers'
import postcsspxtoviewport from "postcss-px-to-viewport"
import path from "path"
export default defineConfig({
    plugins: [
        vue(),
        AutoImport({
            resolvers: [ElementPlusResolver(),AntDesignVueResolver(),VantResolver()],
        }),
        Components({
            resolvers: [ElementPlusResolver(),AntDesignVueResolver(),VantResolver()],
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
    },
    css: {
        postcss: {
          plugins: [
            postcsspxtoviewport({
              unitToConvert: "px", // 要转化的单位
              viewportWidth: 375, // UI设计稿的宽度
              unitPrecision: 3, // 转换后的精度，即小数点位数
              propList: ["*"], // 指定转换的css属性的单位，*代表全部css属性的单位都进行转换
              viewportUnit: "vw", // 指定需要转换成的视窗单位，默认vw
              fontViewportUnit: "vw", // 指定字体需要转换成的视窗单位，默认vw
              selectorBlackList: [], // 指定不转换为视窗单位的类名，
              minPixelValue: 1, // 默认值1，小于或等于1px则不进行转换
              mediaQuery: true, // 是否在媒体查询的css代码中也进行转换，默认false
              replace: true, // 是否转换后直接更换属性值
              // exclude: [/node_modules/], // 设置忽略文件，用正则做目录名匹配
              exclude: [],
              landscape: false, // 是否处理横屏情况
            }),
          ],
        },
      },
})
