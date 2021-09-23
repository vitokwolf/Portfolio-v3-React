import './Navigation.css'

function Navigation({ handleNav }) {
  return (
    <div className="nav">
      <li className="nav-link" onClick={() => handleNav('About')}>
        About
      </li>
      <li className="nav-link" onClick={() => handleNav('Projects')}>
        Portfolio
      </li>
      <li className="nav-link" onClick={() => handleNav('Contact')}>
        Contact
      </li>
      <li className="nav-link" onClick={() => handleNav('Resume')}>
        Resume
      </li>
    </div>
  )
}

export default Navigation
