import Navigation from './components/Navigation'

function Header(props) {
  return (
    <div className="header">
      <p id="nav-name">{props.user}</p>
      <Navigation handleNav={props.handleNav} main={props.main} />
    </div>
  )
}

export default Header
