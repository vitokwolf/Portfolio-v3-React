import './Navigation.css'

function Navigation({ handleNav }) {
  return (
    <>
      <ul>
        <li>
          <a href="#about" onClick={() => handleNav('About')}>
            About
          </a>
        </li>
        <li>
          <a href="#portfolio" onClick={() => handleNav('Projects')}>
            Portfolio
          </a>
        </li>
        <li>
          <a href="#contact" onClick={() => handleNav('Contact')}>
            Contact
          </a>
        </li>
        <li>
          <a href="#resume" onClick={() => handleNav('Resume')}>
            Resume
          </a>
        </li>
      </ul>
    </>
  )
}

export default Navigation
