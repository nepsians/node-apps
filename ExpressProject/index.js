const Expo = require("expo-server-sdk");
const express = require("express");
const app = express();
const Joi = require("joi");
// let expo = new Expo();
const ngrok = require("ngrok");

var JSONAPISerializer = require("json-api-serializer");
var Serializer = new JSONAPISerializer();

app.use(express.json());

var data = 
  {
    id: "1",
    title: "JSON API paints my bikeshed!",
    body: "The shortest article. Ever.",
    created: "2015-05-22T14:56:29.000Z",
    updated: "2015-05-22T14:56:28.000Z",
    author: {
      id: "1",
      firstName: "Kaley",
      lastName: "Maggio",
      email: "Kaley-Maggio@example.com",
      age: "80",
      gender: "male"
    },
    tags: [{id:"4", data:"Nihal"}, {id:"5", data:"Shrestha"}],
    photos: [
      "ed70cf44-9a34-4878-84e6-0c0e4a450cfe",
      "24ba3666-a593-498c-9f5d-55a4ee08c72e",
      "f386492d-df61-4573-b4e3-54f6f5d08acf"
    ],
    comments: [
      {
        _id: "1",
        body: "First !",
        created: "2015-08-14T18:42:16.475Z"
      },
      {
        _id: "2",
        body: "I Like !",
        created: "2015-09-14T18:42:12.475Z"
      },
      {
        _id: "3",
        body: "Awesome",
        created: "2015-09-15T18:42:12.475Z"
      }
    ]
  }


Serializer.register("article", {
  id: "id", // The attributes to use as the reference. Default = 'id'.
  blacklist: ["updated"], // An array of blacklisted attributes. Default = []
  relationships: {
    // An object defining some relationships.
    author: {
      type: "people", // The type of the resource
    },
    tags: {
      type: "tag"
    },
    photos: {
      type: "photo"
    },
    comments: {
      type: "comment",
      schema: "only-body" // A custom schema
    }
  },
  topLevelMeta: function(data, extraData) {
    // An object or a function that describes top level meta.
    return {
      count: extraData.count,
      total: data.length
    };
  }
});

// Register 'people' type
Serializer.register("people", {
  id: "id"
});

// Register 'tag' type
Serializer.register("tag", {
  id: "id"
});

// Register 'photo' type
Serializer.register("photo", {
  id: "id"
});

// Register 'comment' type with a custom schema
Serializer.register("comment", "only-body", {
  id: "_id"
});

app.get("/", async (req, res) => {
  const result = await Serializer.serializeAsync("article", data, {
    count: 3
  }).then(result => {
    return result;
  });
  res.send(result);
});

// const courses = [
//   {
//     id: 1,
//     name: "Nihal"
//   },
//   {
//     id: 2,
//     name: "Ram"
//   },
//   {
//     id: 3,
//     name: "Hari"
//   },
//   { id: 4, name: "Mama" }
// ];

// app.get("/api/courses", (req, res) => {
//   res.send({ data: courses });
// });

// app.get("/api/courses/:id", (req, res) => {
//   //res.send(req.query);
//   //res.send(req.params);
//   const course = courses.find(val => val.id === parseInt(req.params.id));

//   if (!course) return res.status(404).send("The course was on found.");
//   res.send(course);
// });

// app.post("/api/courses", (req, res) => {
//   const { error } = validateCourse(req.body);
//   if (error) return res.status(400).send(error.details[0].message);

//   const course = {
//     id: courses.length + 1,
//     name: req.body.name
//   };
//   courses.push(course);
//   res.send(course);
// });

// app.post("/api/send_notification", async (req, res) => {
//   const { error } = validateToken(req.body);
//   if (error) return res.status(400).send(error.details[0].message);

//   console.warn(req.body);

//   let messages = [];

//   const token = req.body.token;

//   if (!Expo.isExpoPushToken(token)) {
//     return res.status(400).send("Invalid Expo token");
//   }

//   messages.push({
//     to: token,
//     sound: "default",
//     body: "this is test notification.",
//     data: { withSome: "data" }
//   });
//   console.warn(messages);

//   //let chunks = expo.chunkPushNotifications(messages);

//   let tickets = [];
//   try {
//     // console.warn(chunks);

//     // let ticketChunck = await expo.sendPushNotificationsAsync(messages);
//     // tickets.push(...ticketChunck);

//     res.send("Notifcation send successfully.");
//   } catch (e) {
//     console.warn(e);
//     res.send("Error");
//   }
// });

// app.put("/api/courses/:id", (req, res) => {
//   const course = courses.find(c => c.id === parseInt(req.params.id));
//   if (!course) return res.status(404).send("No courses found.");

//   const { error } = validateCourse(req.body);
//   if (error) return res.status(400).send(errors.details[0].message);

//   course.name = req.body.name;
//   res.send(course);
// });

// app.delete("/api/courses/:id", (req, res) => {
//   const course = courses.find(c => c.id === parseInt(req.params.id));
//   if (!course) return res.status(404).send("No courses found.");

//   const index = courses.indexOf(course);
//   courses.splice(index, 1);

//   res.send(course);
// });

// function validateCourse(course) {
//   const schema = {
//     name: Joi.string()
//       .min(3)
//       .required()
//   };

//   return Joi.validate(course, schema);
// }

// function validateToken(body) {
//   const schema = {
//     token: Joi.strict().required()
//   };
//   return Joi.validate(body, schema);
// }

const port = process.env.PORT || 3000;
app.listen(port, async () => {
  console.log("Listening on port 3000...");

  // const url = await ngrok.connect(port);
  // console.warn(url);
});
