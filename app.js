const express = require('express');
// 加载 .env 环境变量
require('dotenv').config()

// 全局错误处理
process.on('uncaughtException', (err) => {
  console.error('未捕获的异常:', err)
})

const app = express();

// 解析json, 并且挂到req.body上
app.use(express.json())

// 读取环境变量 PORT
const port = process.env.PORT;
// 托管静态资源
app.use(express.static('vite-template/dist'))
//路由文件
const notesRouter = require('./router/notes')


app.use('/api', notesRouter)

app.listen(port, () => {
    console.log(`App listening on port ${port}`);
})