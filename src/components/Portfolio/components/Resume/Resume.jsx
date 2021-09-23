function Resume() {
  return (
    <div className="section">
      <p className="section-title">Resume</p>
      <a
        href="https://drive.google.com/file/d/1E-O2UM6UkVEwh3kibf_qZqd7eMqgqilJ/view?usp=sharing"
        className="resume"
        target="blank"
      >
        Download
      </a>
      <div className="resume-body">
        <ul className="skills">
          <p className="skills-title">Front End</p>
          <li>HTML</li>
          <li>CSS</li>
          <li>JavaScript</li>
          <li>React</li>
        </ul>
        <ul className="skills">
          <p className="skills-title">Back-end</p>
          <li>Node</li>
          <li>Express</li>
          <li>MySql</li>
          <li>Mongo</li>
        </ul>
      </div>
    </div>
  )
}

export default Resume
