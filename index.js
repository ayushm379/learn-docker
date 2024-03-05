const express = require("express");
const app = express();
const {sequelize, Person} = require("./db.js");

const people = [
    { id: 1, firstName: "Modi", lastName: "Singh" },
    { id: 2, firstName: "Suhani", lastName: "Shah" },
    { id: 3, firstName: "Abdul", lastName: "Kalam" },
    { id: 4, firstName: "Shahrukh", lastName: "Khan" },
    { id: 5, firstName: "Akshay", lastName: "Kumar" },
  ];

const PORT = process.env.PORT; // Access docker variable directly

app.get("/status", (req, res) => {
    console.log("api called /status");
    sequelize
    .sync({ force: true })
    .then(() => {
        console.log("Sync complete")
        Person.bulkCreate(people, { validate: true })
        .then((response) => {
            console.log(response);
        })
        .catch((error) => {
            console.error("Failed to retrieve data : ", error);
        });
    })
    .catch((error) => {
        console.error("Unable to create the table : ", error);
    });
    console.log("Done");
    return res.json({"status": "OK"})
})

sequelize
    .authenticate()
    .then(() => {
        console.log("Connected to Database")
        app.listen(PORT, () => console.log(`Server running at PORT ${PORT}`));
    })
    .catch((error) => console.log("Failed to connect the database:", error));