import { FaGithub, FaLinkedin, FaGoogle } from 'react-icons/fa'
function Footer({ links }) {
  return (
    <div className="footer">
      <li
        onClick={(e) => {
          e.preventDefault()
          window.location = `mailto: ${links.email}`
        }}
      >
        <FaGoogle />
      </li>
      <li onClick={() => window.open(links.link_page, 'blank')}>
        <FaLinkedin />
      </li>
      <li onClick={() => window.open(links.github_page, 'blank')}>
        <FaGithub />
      </li>
    </div>
  )
}

export default Footer
