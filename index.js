const express = require("express");
const app = express();
const port = 5000;

const mongoose = require("mongoose");
mongoose
  .connect("mongodb+srv://hjs926:1234@boiler.vqy2zh3.mongodb.net/test", {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => console.log("MongoDB Connected"))
  .catch((err) => console.log(err));

app.get("/", (req, res) => res.send("Hello wolrdQ!"));

app.post("/register", (req, res) => {
  //회원가입 할때 필요한 정보들을 클라이언트에서 가져오면
  //그것들을 데이터베이스에 넣어준다.
});

app.listen(port, () => console.log(`Example app listening on port ${port}!`));
