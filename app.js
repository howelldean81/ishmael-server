require("dotenv").config();

const express = require('express');
const app = express();
const port = 3011


// const controllers = require('./controllers')
const upload = require("./middleware/multer");

;(async() => {
    app.use(express.json())

    const user = require('./controllers/userController')
    app.use("/user", user)
  
    const auth = require('./controllers/Auth')
    app.use("/auth", auth)

    app.post("/albumcover", upload.single("image"), (req, res) => {
      console.log(req.file)
      coverName = res.req.file.filename
      res.send(coverName)
  })
  
    app.listen(port, () => {
      console.log(`Example app listening at http://localhost:${port}`)
    })
  })()