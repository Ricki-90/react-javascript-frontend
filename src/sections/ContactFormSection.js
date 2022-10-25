import React, {useState} from 'react'

const ContactFormSection = () => {
    const [contactForm, setContactForm] = useState ({name: '', email: '', comment: ''})
    const [formErrors, setFormErrors] = useState({})

    const validate = (values) => {
      const errors = {}

      if(!values.name)
        errors.name = "You must enter a name"

      if(!values.email)
      errors.email = "You must enter an e-mail address"

      if(!values.comment)
      errors.name = "You must enter a comment"

      return errors;
    }


    const handleChange = (e) => {
      const {id, value} = e.target
      setContactForm({...contactForm, [id]: value})
    }

    const handleSubmit = (e) => {
      e.preventDefault()
      setFormErrors(validate(contactForm))
    }




  return (
    <section className="contact-form">
        <div className="container">
            <h2>Come in Contact with Us</h2>
            <pre></pre>
            <form onSubmit={handleSubmit} noValidate>
                <div>
                    <input id="name" typ="text" placeholder="Your Name" value={contactForm.name} onChange={handleChange} />
                    <div className="errorMessage">{formErrors.name}</div>
                </div>
                <div>
                    <input id="email" typ="email" placeholder="Your Mail" value={contactForm.email} onChange={handleChange} />
                    <div className="errorMessage">{formErrors.email}</div>
                </div>
                <div className="textarea">
                    <textarea id="comment" placeholder="Comments" value={contactForm.comment} onChange={handleChange}></textarea>
                    <div className="errorMessage">{formErrors.comment}</div>
                </div>
                <div className="formBtn">
                  <button type="submit" className="btn-theme">Post Comments</button>
                </div>
            </form>
        </div>
    </section>
  )
}

export default ContactFormSection