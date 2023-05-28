const express = require("express");
const app = express();
const cors = require("cors");
const Ajv = require("ajv");
const ajv = new Ajv();
var fs = require("fs");
path = require("path");
filePath = path.join(__dirname, "data/movies.json");
const { addMovieSchema } = require("../src/validators/index");
const bodyParser = require("body-parser");

app.use(
  cors({
    origin: "http://localhost:3000",
  })
);
app.use(bodyParser.json());

app.get("/", (req, res) => {
  res.send({ status: 200, data: [], message: "Backend Service is Running" });
});

app.get("/get-movies-list", (req, res) => {
  fs.readFile(filePath, { encoding: "utf-8" }, function (err, data) {
    if (!err) {
      res.send({
        status: 200,
        data: data,
        message: "",
      });
    } else {
      res.send({
        status: 500,
        data: [],
        message: err.message,
      });
    }
  });
});

app.post("/add-movie", (req, res) => {
  try {
    const validate = ajv.compile(addMovieSchema);
    const valid = validate(req.body);
    if (!valid) {
      return res.send({
        status: 400,
        data: [],
        message: validate.errors[0]?.message,
      });
    }
    fs.readFile(filePath, { encoding: "utf-8" }, function (err, data) {
      if (!err) {
        let bodyData = req.body;
        data = JSON.parse(data);
        let lastId = data[data.length - 1]?.Id;
        bodyData.Id = +lastId + 1;
        let images = bodyData.Images.split(",");
        bodyData.Images = images;
        data.push(bodyData);
        fs.writeFile(filePath, JSON.stringify(data), (error, data) => {
          if (!error) {
            res.send({
              status: 200,
              data: data,
              message: "Success",
            });
          } else {
            res.send({
              status: 500,
              data: [],
              message: "Error in file writing",
            });
          }
        });
      }
    });
  } catch (error) {
    res.send({
      status: 500,
      data: [],
      message: error.message,
    });
  }
});

const port = 3002;
app.listen(port, () => {
  console.log(`API service is running on port ${port}`);
});
