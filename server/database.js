import express, { urlencoded, json } from "express";
import cors from "cors";
import { MongoClient as mongoClient } from "mongodb";

var conString = "mongodb://127.0.0.1:27017";

var app = express();
app.use(cors());
app.use(urlencoded({ extended: true }));
app.use(json());

// app.get("/admin", (req, res) => {
//   mongoClient.connect(conString).then((clientObj) => {
//     var database = clientObj.db("mern-blog");
//     database
//       .collection("tbladmin")
//       .find({})
//       .toArray()
//       .then((docs) => {
//         res.send(docs);
//         res.end();
//       });
//   });
// });

app.get("/users", (req, res) => {
  mongoClient.connect(conString).then((clientObj) => {
    var database = clientObj.db("mern-blog");
    database
      .collection("tblusers")
      .find({})
      .toArray()
      .then((docs) => {
        res.send(docs);
        res.end();
      });
  });
});

app.get("/featuredtblogs", (req, res) => {
  mongoClient.connect(conString).then((clientObj) => {
    var database = clientObj.db("mern-blog");
    database
      .collection("tblfeatureblogs")
      .find({})
      .toArray()
      .then((docs) => {
        res.send(docs);
        res.end();
      });
  });
});

app.get("/latestblogs", (req, res) => {
  mongoClient.connect(conString).then((clientObj) => {
    var database = clientObj.db("mern-blog");
    database
      .collection("tbllatestposts")
      .find({})
      .toArray()
      .then((docs) => {
        res.send(docs);
        res.end();
      });
  });
});

app.get("/blogs", (req, res) => {
  mongoClient.connect(conString).then((clientObj) => {
    var database = clientObj.db("mern-blog");
    database
      .collection("tblblogs")
      .find({})
      .toArray()
      .then((docs) => {
        res.send(docs);
        res.end();
      });
  });
});

app.get("/subcriptionUsers", (req, res) => {
  mongoClient.connect(conString).then((clientObj) => {
    var database = clientObj.db("mern-blog");
    database
      .collection("tblsubcriptionusers")
      .find({})
      .toArray()
      .then((docs) => {
        res.send(docs);
        res.end();
      });
  });
});

app.get("/queries", (req, res) => {
  mongoClient.connect(conString).then((clientObj) => {
    var database = clientObj.db("mern-blog");
    database
      .collection("tblqueries")
      .find({})
      .toArray()
      .then((docs) => {
        res.send(docs);
        res.end();
      });
  });
});

app.get("/blogs/:id", (req, res) => {
  var id = parseInt(req.params.id);
  mongoClient.connect(conString).then((clientObj) => {
    var database = clientObj.db("mern-blog");
    database
      .collection("tblblogs")
      .find({ blogId: id })
      .toArray()
      .then((docs) => {
        res.send(docs);
        res.end();
      });
  });
});

app.post("/adduser", (req, res) => {
  var user = {
    username: req.body.username,
    email: req.body.email,
    mobile: req.body.mobile,
    password: req.body.password,
  };
  mongoClient.connect(conString).then((clientObj) => {
    var database = clientObj.db("mern-blog");
    database
      .collection("tblusers")
      .insertOne(user)
      .then(() => {
        console.log("user added successfully");
        res.redirect("/users");
        res.end();
      });
  });
});

app.post("/addblog", (req, res) => {
  var addblog = {
    blogId: req.body.blogId,
    title: req.body.title,
    image: req.body.image,
    description: req.body.description,
    update: req.body.update,
  };
  mongoClient.connect(conString).then((clientObj) => {
    var database = clientObj.db("mern-blog");
    database
      .collection("tblblogs")
      .insertOne(addblog)
      .then(() => {
        // console.log("blog added successfully");
        res.redirect("/blogs");
        res.end();
      });
  });
});

app.post("/addSubcriber", (req, res) => {
  var user = {
    username: req.body.username,
    email: req.body.email,
  };
  mongoClient.connect(conString).then((clientObj) => {
    var database = clientObj.db("mern-blog");
    database
      .collection("tblsubcriptionusers")
      .insertOne(user)
      .then(() => {
        console.log("New subcriber added successfully");
        res.redirect("/subcriptionUsers");
        res.end();
      });
  });
});

app.post("/addquery", (req, res) => {
  var user = {
    blogId: req.body.blogId,
    email: req.body.email,
    subject: req.body.subject,
    message: req.body.message,
  };
  mongoClient.connect(conString).then((clientObj) => {
    var database = clientObj.db("mern-blog");
    database
      .collection("tblqueries")
      .insertOne(user)
      .then(() => {
        console.log("Query sent successfully");
        res.redirect("/queries");
        res.end();
      });
  });
});

app.put("/editblog/:id", (req, res) => {
  var id = parseInt(req.params.id);
  mongoClient
    .connect(conString)
    .then((clientObj) => {
      var database = clientObj.db("mern-blog");
      database.collection("tblblogs").updateOne(
        { blogId: id },
        {
          $set: {
            blogId: parseInt(req.body.blogId),
            title: req.body.title,
            image: req.body.image,
            description: req.body.description,
            update: req.body.update,
          },
        }
      );
    })
    .then(() => {
      // console.log("Blog Modified Successfully");
      // res.redirect("/blogs");
      res.end();
    });
});

app.delete("/deleteblog/:id", (req, res) => {
  var id = parseInt(req.params.id);
  mongoClient.connect(conString).then((clientObj) => {
    var database = clientObj.db("mern-blog");
    database
      .collection("tblblogs")
      .deleteOne({ blogId: id })
      .then(() => {
        res.redirect("/blogs");
        res.end();
      });
  });
});

app.listen(2001);
console.log(`Server has been started : http://1270.0.0.1:2001`);
