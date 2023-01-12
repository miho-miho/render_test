const express = require('express');
const app = express();

app.set('view engine', 'ejs');
app.use(express.static('public'));

app.get('/', (req, res) => {
  res.render('index.ejs')
});


//エラー処理
app.use((req, res, next) => {
  res.status(404).send("<h1>準備中…</h1><p>404</p>");
});
app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).send("<h1>準備中…</h1><p>500</p>");
});

app.listen(3030);
console.log("サーバーを起動しました");
