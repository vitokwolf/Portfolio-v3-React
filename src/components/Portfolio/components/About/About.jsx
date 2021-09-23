function About({ user }) {
  return (
    <div className="section">
      <p className="section-title">About Me</p>
      <div className="about">
        <div className="avatar">
          <img src={user.avatar_url} alt="avatar" className="avatar-img" />
        </div>
        <div className="bio">
          <p>
            For the good part of my life I've been working on cars as a
            mechanic. Started as a novice, was given easy tasks like oil
            changes. That was not satisfying me, so i was always sneak-peeking
            at my senior Techs, and trying to learn new things. In short time i
            moved to more complicated work. In short time I was feeling
            confident on taking apart engines, replace the needed part and
            assemble everything back toghether. Have been programming as a hobby
            since childhood(Turbo Pascal), and recently rekindled this passion
            by getting a certificate from University of Texas Coding Bootcamp.
          </p>
          <p>
            I have experience with HTML, CSS and vanilla JavaScript as frontend
            development and Node.js, Express and some SQL as backend
            development. Innovative problem-solver who is passionate about
            developing user-friendly applications. Known among co-workers for
            life-long dedication to learning, strong wit and attention to detail
            no matter the complexity of the project.
          </p>
        </div>
      </div>
    </div>
  )
}

export default About
