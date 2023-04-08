import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import postcsspxtoviewport from "postcss-px-to-viewport"


// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],

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

  // 配置反向代理
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

  //预览设置  npm run build　打包之后，会生成dist文件 然后运行npm run preview；vite会创建一个服务器来运行打包之后的文件
  preview: {
    host: 'localhost',
    port: 4200,//端口号
    open: true,//是否自动打开浏览器
    cors: true, // 配置 CORS
    proxy: { // 配置自定义代理规则
      '/api': {
        target: 'http://localhost:2345/',
        changeOrigin: true,
        rewrite: (path) => path.replace(/^\/api/, '')
      }
    },
  },
  //配置打包
  // build: {
  //   outDir: "dist"
  // },

})
