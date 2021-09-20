function Contact() {
  return (
    <div className="contact">
      <form>
        <label htmlFor="">
          Name
          <input placeholder="name" type="text" name="firstName" required />
        </label>
        <label htmlFor="">
          Email{' '}
          <input
            placeholder="Email address"
            type="email"
            name="email"
            required
          />
        </label>
        <label htmlFor="">
          Your Message{' '}
          <input placeholder="message" type="text" name="message" required />
        </label>
        <button type="submit">Submit</button>
      </form>
    </div>
  )
}

export default Contact
