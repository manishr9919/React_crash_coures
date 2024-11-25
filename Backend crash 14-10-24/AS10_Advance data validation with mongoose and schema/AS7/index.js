const express = require("express");
const connection = require("./config/db");
const ContactMOdel = require("./contactModel/contact.model");

const PORT = process.env.PORT || 5000;
const app = express();

app.use(express.json());

app.post("/", async (req, res) => {
  const { name, email, phone, age } = req.body;
  try {
    const addNewContact = new ContactMOdel({
      name,
      email,
      phone,
      age,
    });

    const savaContact = await addNewContact.save();
    res.status(201).json({ message: "new contact created", savaContact });
  } catch (error) {
    res.status(400).json({ message: "Contact was not created", error });
  }
});

app.listen(PORT, async () => {
  await connection();
  console.log(`Server is running on port ${PORT}`);
});
