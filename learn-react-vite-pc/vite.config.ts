import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import path from "path"
// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],

  server:{
    host:'localhost',//启动后浏览器窗口输入地址就可以进行访问
    port:8080,// 端口号
    open:false,//是否自动打开浏览器
    cors:true,//为开发服务器配置 CORS , 默认启用并允许任何源
    https:false,//是否支持http2 如果配置成true 会打开https://localhost:3001/xxx;
    strictPort:true,//是否是严格的端口号，如果true，端口号被占用的情况下，vite会退出
    hmr:true,// 开启热更新
    proxy:{
      "/api":{
        target:"http://localhost:3000",
        changeOrigin:true,
        rewrite:path=> path.replace(/^\/api/, ''),
      }
    }
  },
//配置@文件路径
  resolve:{
    alias:{
      "@":path.resolve(__dirname,'./src'),
    }
  }
})
