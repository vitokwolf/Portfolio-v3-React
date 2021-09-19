import Navigation from './components/Navigation'
import './Header.css'

function Header(props) {
  return (
    <div className="header">
      <h2 id="nav-name">Victor Lupascu</h2>
      <Navigation handleNav={props.handleNav} />
    </div>
  )
}

export default Header
