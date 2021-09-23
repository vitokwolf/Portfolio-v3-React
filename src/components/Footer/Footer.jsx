import './Footer.css'
function Footer({ links }) {
  return (
    <div className="footer">
      <button
        onClick={(e) => {
          e.preventDefault()
          window.location = `mailto: ${links.email}`
        }}
      >
        Gmail
      </button>
      <button onClick={() => window.open(links.link_page, 'blank')}>
        LinkedIn
      </button>
      <button onClick={() => window.open(links.github_page, 'blank')}>
        Github
      </button>
    </div>
  )
}

export default Footer
