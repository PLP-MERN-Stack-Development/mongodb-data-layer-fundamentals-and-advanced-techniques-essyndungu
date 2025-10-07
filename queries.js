// queries.js
// 📚 PLP Bookstore - MongoDB Assignment

// Task 1 - CRUD Operations

// Insert 10 sample books (done separately in insert_books.js)
// Example insert:
db.books.insertOne({
  title: "Sapiens",
  author: "Yuval Noah Harari",
  genre: "History",
  published_year: 2011,
  price: 1600,
  in_stock: true,
  pages: 498,
  publisher: "Harper"
});

// READ - Find all books
db.books.find();

// READ - Find books by a specific author
db.books.find({ author: "Yuval Noah Harari" });

// UPDATE - Update book price
db.books.updateOne(
  { title: "Sapiens" },
  { $set: { price: 1800 } }
);

// DELETE - Remove one book
db.books.deleteOne({ title: "Sapiens" });


//  Task 2 - Filtering & Sorting

// Find all books in stock
db.books.find({ in_stock: true });

// Find all books published after 2015
db.books.find({ published_year: { $gt: 2015 } });

// Sort books by price (ascending)
db.books.find().sort({ price: 1 });

// Sort books by published_year (descending)
db.books.find().sort({ published_year: -1 });


//  Task 3 - Advanced Queries


// Find books with more than 300 pages
db.books.find({ pages: { $gt: 300 } });

// Find books by multiple authors
db.books.find({ author: { $in: ["Yuval Noah Harari", "Chimamanda Ngozi Adichie"] } });

// Find books cheaper than 2000 and in stock
db.books.find({ price: { $lt: 2000 }, in_stock: true });

// Count total books in the collection
db.books.countDocuments();


// Task 4 - Aggregation Pipelines


// Average price of books by genre
db.books.aggregate([
  { $group: { _id: "$genre", avgPrice: { $avg: "$price" } } }
]);

// Find author with most books
db.books.aggregate([
  { $group: { _id: "$author", totalBooks: { $sum: 1 } } },
  { $sort: { totalBooks: -1 } },
  { $limit: 1 }
]);

// Group books by publication decade
db.books.aggregate([
  { $group: { _id: { $floor: { $divide: ["$published_year", 10] } }, count: { $sum: 1 } } },
  { $project: { decade: { $multiply: ["$_id", 10] }, count: 1, _id: 0 } },
  { $sort: { decade: 1 } }
]);



//  Task 5 - Indexing

// Create index on title
db.books.createIndex({ title: 1 });

// Create compound index on author + published_year
db.books.createIndex({ author: 1, published_year: -1 });

// Test query performance with explain()
db.books.find({ title: "Sapiens" }).explain("executionStats");
