
import { useState, useEffect } from 'react'

function FeaturedBooks() {
  const [books, setBooks] = useState([])

  useEffect(() => {
    async function fetchBooks() {
      const response = await fetch(
        "https://openlibrary.org/search.json?q=harry+potter&limit=8"
      )

      const data = await response.json()

      setBooks(data.docs)
    }

    fetchBooks()
  }, [])

  return (
    <section>
      <div>
        <h2>HANDPICKED FOR YOU</h2>
        <h1>Discover Your Next Read</h1>
        <p>Explore stories worth adding to your reading list.</p>
      </div>

      <div>
        {books.map((book) => (
          <div key={book.key}>
            <h3>{book.title}</h3>

            <img
              src={`https://covers.openlibrary.org/b/id/${book.cover_i}-M.jpg`}
              alt={book.title}
            />

            <p>{book.author_name?.[0] || "Unknown author"}</p>

            <p>{book.first_publish_year || "Year unknown"}</p>
          </div>
        ))}
      </div>
    </section>
  )
}

export default FeaturedBooks
