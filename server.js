const express = require('express');
const fs = require('fs/promises');
const bodyParser = require("body-parser");
const path = require("path");
const app =  express();
const Page = require('./pages/post');
const FrontPage = require('./pages/frontPage')
const GetPost = require("./pages/getPost");
const PORT = 8080;


app.use(bodyParser.urlencoded({extended: true}));
app.use(express.static("public"));

app.get("/", (req, res, next) => {
  const frontpage = new FrontPage(PORT);
  res.send(frontpage.getHtml());
});

app.get("/index.html", (req, res, next) => {
  res.redirect("/")
});

app.post('/post',(req,res, next) => {
  const {postName , postContent } = req.body;
  const filePath = path.join(__dirname, "posts", `${postName}.txt`);

  fs.access(filePath)
  .then(() => {
    res.redirect("/duplicate");
  })
  .catch(() => {
    fs.writeFile(filePath, postContent)
      .then(() => {
        const display = `Post "${postName}" Created !`;
        const html = new Page(display, "#e91e63").getHtml();
        res.send(html);
      })
      .catch((err) => {
        const display = err;
        const html = new Page(display).getHtml();
        res.send(html);
      });
  });
});


app.get("/duplicate", (req, res, next) => {
  const display = "Error : Duplicate Post Name";
  const html = new Page(display, "#c68f8f").getHtml();
  res.send(html);
});


app.get("/post/:title", (req, res, next) => {
  const { title } = req.params;
  const filePath = path.join(__dirname, "posts", `${title}.txt`);
  fs.readFile(filePath)
  .then((data) => {
    const html = new GetPost(title, data)
    res.send(html.getHtml());
  })
  .catch(()=>{
    const display = "Post Not Found";
    const html = new Page(display, "#00bcd4").getHtml();
    res.send(html);  
  })
});

app.use("*",(req, res, next) => {
    const display = "Page Not Found";
    const html = new Page(display, "ff9800").getHtml();
    res.send(html);
});

app.listen(PORT, () => {
  console.log(`Connet to Port ${PORT}`);
});