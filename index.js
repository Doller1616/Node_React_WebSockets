const express = require("express"); //
const cors = require("cors");
const mongoose = require("mongoose");
const app = express();
const PORT = 4000;

app.use(cors());
app.use(express.json());
                            // Table Name
const model = mongoose.model( "employee", new mongoose.Schema({ name:String, 
                                                                age: String, 
                                                                qualification: String,
                                                                gender: String  })
);

async function dbInitialization() {
  try {
    const uri =
      "mongodb+srv://ajay..."
    const db = await mongoose.connect(uri);
    db && console.log("Dababase connected");
  } catch (err) {
    console.log(err);
  }
}
dbInitialization();

// rest --------- best way (Representation state transfer)
//   - 5 methods
//   - get - frontend wants get to data
//   - post - frontend wants post/send to data
//   - put - frontend wants replace data with new
//   - patch - frontend wants update data
//   - delete - frontend wants delete data
//   - crud employee

// ------ DB ---------------------------------------------------------------------------------------------------


// TO Send Data to the FE (query, params)
app.get("/employee", (req, res) => {
  model.find({}, (err, result) => {
    console.log("result", result);
    res.status(200).send({data: result});
  });
});

// Send + get data
app.post("/employee", (req, res) => {
  const new_record = req.body;
console.log("new_record",new_record);
  model(new_record).save((err, result) => {
    res.status(201).send(result);
  });
});

// Delete API (query, params)
// params FE :localhost:4000/employee/123
// params BE :"/employee/:id"
app.delete("/employee", (req, res) => {
  const { id } = req.query;
  data.data.splice(id, 1);
  res.status(201).send(data);
});

app.listen(PORT, () => {
  console.log("Server Started at port : ", PORT);
});
