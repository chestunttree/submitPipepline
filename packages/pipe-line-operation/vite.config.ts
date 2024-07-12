import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import path from 'path'

const outputPath = path.resolve(__dirname, '../../out/web')
console.log(outputPath, 'outputPathoutputPathoutputPathoutputPathoutputPathoutputPathoutputPathoutputPathoutputPathoutputPath')
// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  build: {
    // 设置输出文件的目录
    outDir: outputPath
  }

})
