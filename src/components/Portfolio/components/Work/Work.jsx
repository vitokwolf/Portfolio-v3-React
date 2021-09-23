import Project from './components/Project'
function Work({ repos }) {
  return (
    <div>
      Work
      {repos.map((repo, i) => (
        <Project key={i} repo={repo} />
      ))}
    </div>
  )
}

export default Work
