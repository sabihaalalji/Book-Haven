
import BookCard from '../BookCard'
import { useState, useEffect } from 'react'

function FeaturedBooks({ searchTerm }) {
  const [books, setBooks] = useState([])

  useEffect(() => {
    async function fetchBooks() {
      const query = searchTerm.trim() || "harry potter"

      const response = await fetch(
        `https://openlibrary.org/search.json?q=${query}&limit=8`
      )

      const data = await response.json()
      setBooks(data.docs || [])
    }

    fetchBooks()
  }, [searchTerm])

  return (
    <section className="bg-white px-10 py-16">
      <div className="max-w-7xl mx-auto">

        <div className="mb-12">
          <h2 className="text-sm font-semibold tracking-[0.2em] text-blue-600 mb-3">
            HANDPICKED FOR YOU
          </h2>

          <h1 className="text-4xl font-bold text-slate-900 mb-4">
            Discover Your Next Read
          </h1>

          <p className="text-slate-500 text-lg">
            Explore stories worth adding to your reading list.
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
          {books.map((book) => (
            <BookCard
              key={book.key}
              title={book.title}
              author={book.author_name?.[0] || "Unknown author"}
              image={`https://covers.openlibrary.org/b/id/${book.cover_i}-M.jpg`}
            />
          ))}
        </div>

      </div>
    </section>
  )
}

export default FeaturedBooks

