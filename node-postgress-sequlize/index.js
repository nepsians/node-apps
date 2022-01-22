var express = require('express');

var indexRouter = require('./routes/index');

var app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use('/', indexRouter);


const port = process.env.PORT || 3000;
app.listen(port, async () => {
  console.log("Listening on port 3000...");

  // const url = await ngrok.connect(port);
  // console.warn(url);
});