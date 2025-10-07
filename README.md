📚 PLP Bookstore – MongoDB Assignment
🚀 Objective

This project demonstrates the fundamentals and advanced techniques of MongoDB, including installation, creating collections, performing CRUD operations, using aggregation pipelines, and implementing indexing for performance optimization.

📂 Project Structure
plp_bookstore/
│
├── insert_books.js   # Script to insert sample book documents
├── queries.js        # MongoDB queries (CRUD + advanced + aggregation + indexing)
├── screenshots/      # Screenshots of MongoDB Compass
└── README.md         # Documentation

⚙️ Setup

Install MongoDB Community Edition (or set up a free MongoDB Atlas
 cluster).

Make sure mongod (the MongoDB server) is running.

mongod


By default, it runs at:

mongodb://127.0.0.1:27017


Open MongoDB Shell:

mongosh

📝 Tasks
✅ Task 1: MongoDB Setup

Create a new database:

use plp_bookstore


Create a collection:

db.createCollection("books")

✅ Task 2: Basic CRUD Operations

Run the provided script to insert 10 book documents:

mongosh < insert_books.js


Each book includes:

title (string)

author (string)

genre (string)

published_year (number)

price (number)

in_stock (boolean)

pages (number)

publisher (string)

Run queries from queries.js inside the shell:

load("queries.js")


Queries include:

Find all books in a specific genre

Find books published after a certain year

Find books by a specific author

Update the price of a specific book

Delete a book by its title

✅ Task 3: Advanced Queries

Find books that are in stock and published after 2010

Use projection to return only title, author, and price

Implement sorting by price (ascending & descending)

Use limit and skip to implement pagination (5 books per page)

✅ Task 4: Aggregation Pipelines

Calculate the average price of books by genre

Find the author with the most books

Group books by publication decade and count them

✅ Task 5: Indexing

Create an index on the title field:

db.books.createIndex({ title: 1 })


Create a compound index on author and published_year:

db.books.createIndex({ author: 1, published_year: -1 })


Use the explain() method to analyze performance:

db.books.find({ title: "Sapiens" }).explain("executionStats")

📸 Screenshots

Include screenshots from MongoDB Compass/Atlas showing:

The plp_bookstore database

The books collection with sample documents

✅ Submission Instructions

Accept the GitHub Classroom assignment invitation.

Clone your personal repository created by GitHub Classroom.

Add the following files:

insert_books.js

queries.js

README.md

Screenshots folder

Commit and push your work:

git add .
git commit -m "MongoDB Assignment Submission"
git push origin main

🎯 Expected Outcome

A functioning MongoDB database with properly structured data

Queries demonstrating CRUD operations

Advanced queries with filtering, projection, sorting, pagination

Aggregation pipelines for data analysis

Indexes implemented and analyzed with explain()
