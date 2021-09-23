function Project({ repo }) {
  return (
    <div className="card">
      <p>{repo.name}</p>
      <div>
        <img src={repo.project_image} alt="project image" />
      </div>
      <div className="links">
        <a href={repo.live_url}>Live </a> <br />
        <a href={repo.repo_url}>Github</a>
      </div>
    </div>
  )
}

export default Project
