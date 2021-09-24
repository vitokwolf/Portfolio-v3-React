import { useState } from 'react'

function Contact() {
  const [errorMessage, setErrorMessage] = useState('')
  const [formState, setFormState] = useState({
    name: '',
    email: '',
    message: '',
  })
  const { name, email, message } = formState

  function validateEmail(email) {
    var re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
    return re.test(String(email).toLowerCase())
  }
  function handleChange(e) {
    e.preventDefault()
    if (e.target.name === 'email') {
      const isValid = validateEmail(e.target.value)
      console.log(isValid)
      // isValid conditional statement
      if (!isValid) {
        setErrorMessage('Your email is invalid.')
      } else {
        setErrorMessage('')
      }
    } else {
      if (!e.target.value.length) {
        setErrorMessage(`${e.target.name} is required.`)
      } else {
        setErrorMessage('')
      }
    }

    if (!errorMessage) {
      setFormState({ ...formState, [e.target.name]: e.target.value })
    }
  }

  function handleSubmit(e) {
    e.preventDefault()
    console.log(formState)
  }
  return (
    <>
      <p className="section-title">Send me a message</p>
      <form className="contact">
        <label htmlFor="name">Name:</label>
        <input
          type="text"
          name="Name"
          defaultValue={name}
          onBlur={handleChange}
        />
        <label htmlFor="email">Email address:</label>
        <input
          type="email"
          name="Email"
          defaultValue={email}
          onBlur={handleChange}
        />
        <label htmlFor="message">Message:</label>
        <textarea
          name="Message"
          rows="5"
          defaultValue={message}
          onBlur={handleChange}
        />
        {errorMessage && (
          <div>
            <p className="error-text">{errorMessage}</p>
          </div>
        )}
        <button type="submit" onClick={handleSubmit} className="submit-btn">
          Submit
        </button>
      </form>
    </>
  )
}

export default Contact
