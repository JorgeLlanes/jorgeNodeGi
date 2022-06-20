// const express = require("express");
// const app = express();

// // CRUD - Create, Read, Update, and Delete
// // HTTP Methods - Post, Get, Put, Delete

// const books = [
//   {
//     title: "Leather Face",
//     author: "Jorge Llanes",
//   },
//   {
//     title: "Nightmare on Elm Street",
//     author: "Jorge Llanes",
//   },
// ];

// app.use(express.json());
// app.use(express.urlencoded()); // Parse URL-encoded bodies

// app.get("", (req, res) => {
//   console.log("Hello World");
//   res.send("Hello World");
// });

// app.get("/books", (req, res) => {
//   res.send(books);
// });

// app.get("/books/:id", (req, res) => {
//   const id = req.params.id;
//   res.send(books[id]);
// });

// app.post("/books", (req, res) => {
//   console.log(req.body);
//   const book = req.body;
//   books.push(book);
//   res.send(book);

//   // Get book data out of the body
//   // Save that book
//   // Return book that we saved
// });

// app.put("/books/:id", (req, res) => {
//   const id = req.params.id;
//   const updateBook = req.body;
//   books[id] = updateBook;
//   res.send(updateBook);
// });

// app.delete("/books/:id", (req, res) => {
//   const id = req.params.id;
//   books.splice(id, 1);
//   res.send(id);
// });

// const port = process.env.port || 3000;

// app.listen(port, () => {
//   console.log(`listening on port ${port}`);
// });
