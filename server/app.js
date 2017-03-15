const express = require('express');

const app = express();

//这里要引入项目打包后的文件路劲（这里是相对项目的根路劲）
// 如果这里的打包路劲没有写对，将会导致｀localhost:3000｀永远访问不到，结果就是‘can't get 3000’
app.use(express.static('/dist'));

app.get('/api', (req, res)=> {
  res.send("使用marked将markdown语法以及带有html标签的markdown 转换成html ！");
});

app.listen(3000, ()=> {
  console.log("Server started: http://localhost:3000")
});