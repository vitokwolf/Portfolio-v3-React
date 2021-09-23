import { useState } from 'react'
import repos from '../../data/repos.json'
import user from '../../data/user.json'

import About from './components/About'
import Header from '../Header'
import Footer from '../Footer'
import Work from './components/Work'
import Contact from './components/Contact'
import Resume from './components/Resume'

function Portfolio() {
  const [main, setMain] = useState('About')

  function mainPage() {
    switch (main) {
      case 'Projects':
        return <Work repos={repos} />
      case 'Contact':
        return <Contact />
      case 'Resume':
        return <Resume />
      default:
        return <About user={user} />
    }
  }

  function handleNav(e) {
    setMain(e)
  }

  return (
    <div>
      <Header handleNav={handleNav} user={user.name} main={main} />
      <div className="section"> {mainPage(main)}</div>
      <Footer links={user} />
    </div>
  )
}

export default Portfolio
