import Navigation from './components/Navigation'

function Header(props) {
  return (
    <div>
      <h2 id="nav-name">Victor Lupascu</h2>

      <Navigation handleNav={props.handleNav} />
    </div>
  )
}

export default Header
