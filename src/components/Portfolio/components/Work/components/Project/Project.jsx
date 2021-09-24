import { useState } from 'react'
import { FaGithub } from 'react-icons/fa'

function Project({ repo }) {
  const [isVisible, setIsVisible] = useState(false)
  return (
    <div
      className="img-div"
      onMouseEnter={() => setIsVisible(true)}
      onMouseLeave={() => setIsVisible(false)}
    >
      <img src={repo.project_image} alt="project" className="card-img" />
      {isVisible ? (
        <div className="contents">
          <a href={repo.live_url} target="blank" className="project-title">
            <p>{repo.name}</p>
          </a>
          <a href={repo.repo_url} className="card-link" target="blank">
            <FaGithub />
          </a>
        </div>
      ) : null}
    </div>
  )
}

export default Project
