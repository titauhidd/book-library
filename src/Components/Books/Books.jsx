import React, { useEffect, useState } from "react";
import Book from "../Book/Book";

const Books = () => {
  const [books, setBooks] = useState([]);

  useEffect(() => {
    fetch("books.json")
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        setBooks(data);
      });
  }, []);
  return (
    <div>
      <h2>Books: {books.length}</h2>
      <div>
        {books.map((booksdata) => {
          return <Book key={booksdata.id} book={booksdata}></Book>;
        })}
      </div>
    </div>
  );
};

export default Books;
