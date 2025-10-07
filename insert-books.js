// insert_books.js
const { MongoClient } = require("mongodb");

async function run() {
  const uri = "mongodb://127.0.0.1:27017";
  const client = new MongoClient(uri);

  try {
    await client.connect();
    const database = client.db("plp_bookstore");
    const books = database.collection("books");

    const sampleBooks = [
      {
        title: "The Silent Patient",
        author: "Alex Michaelides",
        genre: "Thriller",
        published_year: 2019,
        price: 1200,
        in_stock: true,
        pages: 336,
        publisher: "Celadon Books",
      },
      {
        title: "Atomic Habits",
        author: "James Clear",
        genre: "Self-help",
        published_year: 2018,
        price: 1500,
        in_stock: true,
        pages: 320,
        publisher: "Penguin Random House",
      },
      {
        title: "Rich Dad Poor Dad",
        author: "Robert Kiyosaki",
        genre: "Finance",
        published_year: 1997,
        price: 1000,
        in_stock: false,
        pages: 207,
        publisher: "Warner Books",
      },
      {
        title: "Becoming",
        author: "Michelle Obama",
        genre: "Biography",
        published_year: 2018,
        price: 1800,
        in_stock: true,
        pages: 448,
        publisher: "Crown Publishing",
      },
      {
        title: "The Alchemist",
        author: "Paulo Coelho",
        genre: "Fiction",
        published_year: 1988,
        price: 800,
        in_stock: true,
        pages: 208,
        publisher: "HarperTorch",
      },
      {
        title: "Think and Grow Rich",
        author: "Napoleon Hill",
        genre: "Finance",
        published_year: 1937,
        price: 950,
        in_stock: false,
        pages: 238,
        publisher: "Ralston Society",
      },
      {
        title: "Educated",
        author: "Tara Westover",
        genre: "Memoir",
        published_year: 2018,
        price: 1400,
        in_stock: true,
        pages: 352,
        publisher: "Random House",
      },
      {
        title: "Dune",
        author: "Frank Herbert",
        genre: "Science Fiction",
        published_year: 1965,
        price: 1100,
        in_stock: true,
        pages: 412,
        publisher: "Chilton Books",
      },
      {
        title: "The Power of Now",
        author: "Eckhart Tolle",
        genre: "Spirituality",
        published_year: 1997,
        price: 1300,
        in_stock: false,
        pages: 236,
        publisher: "New World Library",
      },
      {
        title: "Sapiens",
        author: "Yuval Noah Harari",
        genre: "History",
        published_year: 2011,
        price: 1600,
        in_stock: true,
        pages: 498,
        publisher: "Harper",
      },
    ];

    const result = await books.insertMany(sampleBooks);
    console.log("Books inserted:", result.insertedIds);
  } finally {
    await client.close();
  }
}

run().catch(console.dir);
