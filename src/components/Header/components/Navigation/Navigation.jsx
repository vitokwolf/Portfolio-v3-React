import './Navigation.css'

function Navigation({ handleNav }) {
  return (
    <div className="nav">
      <li>
        <a
          className="nav-link"
          href="#about"
          onClick={() => handleNav('About')}
        >
          About
        </a>
      </li>
      <li>
        <a
          className="nav-link"
          href="#portfolio"
          onClick={() => handleNav('Projects')}
        >
          Portfolio
        </a>
      </li>
      <li>
        <a
          className="nav-link"
          href="#contact"
          onClick={() => handleNav('Contact')}
        >
          Contact
        </a>
      </li>
      <li>
        <a
          className="nav-link"
          href="#resume"
          onClick={() => handleNav('Resume')}
        >
          Resume
        </a>
      </li>
    </div>
  )
}

export default Navigation
