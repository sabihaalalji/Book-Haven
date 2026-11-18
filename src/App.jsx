import { useState } from 'react'
import Header from './components/Header'
import Hero from './components/Hero'
import FeaturedBooks from './components/FeaturedBooks'


function App() {
const [searchTerm, setSearchTerm] = useState("harry potter")

  
  return (
    <>
      <Header />
     
 <Hero searchTerm={searchTerm} setSearchTerm={setSearchTerm} />
      <FeaturedBooks searchTerm={searchTerm} />
    </>
  )
}

export default App