const express = require("express");
const app = express();
const port = process.env.PORT || 3000;
const cors = require("cors");


app.use(cors());
app.use(express.json());

app.get("/", (req, res) => {
  res.send("user server is available");
});

const users = [

    {id: 1 , name : 'sabana', email: 'sabana@gmail.com'},
    {id: 2 , name : 'sabnur', email: 'sabnur@gmail.com'},
    {id: 3 , name : 'sabina', email: 'sabina@gmail.com'}
]

app.get('/users', (req, res)=>{
 res.send(users)
})

app.post('/users', (req, res) => {
  const newUser = req.body;

  newUser.id = users.length + 1;

  users.push(newUser);

  res.send(newUser);
});

app.listen(port, () => {
  console.log(`user server started on port: ${port}`);
});
