import { useState } from 'react'
import About from './components/About'
import Header from '../Header'
import Footer from '../Footer'
import Work from './components/Work'
import Contact from './components/Contact'
import Resume from './components/Resume'

function Portfolio() {
  const [main, setMain] = useState()

  function mainPage() {
    switch (main) {
      case 'Projects':
        return <Work />
      case 'Contact':
        return <Contact />
      case 'Resume':
        return <Resume />
      default:
        return <About />
    }
  }

  function handleNav(e) {
    setMain(e)
  }

  return (
    <div>
      <Header handleNav={handleNav} />
      {mainPage(main)}
      <Footer />
    </div>
  )
}

export default Portfolio
