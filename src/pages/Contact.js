import React, {useRef} from "react";
import emailjs from 'emailjs-com'

const Contact = () => {
  const form = useRef()

  const handleSubmit = async (e) => {
    e.preventDefault()
    //send contact formData here via emailjs
    emailjs.sendForm('service_ptzclcr', 'template_7y7ftfd', form.current, 'user_JuA2JWnC5u4koiSoQ48Rb')
      .then((result) => {
          console.log(result.text)
      }, (error) => {
          console.log(error.text)
      })
    
    e.target.reset()
  }

  return (
    <section id="contact">
      <div className="container h-screen top-0 px-5 pt-20 mx-auto flex sm:flex-nowrap flex-wrap flex-col bg-opacity-60">
        <form
          ref={form}
          onSubmit={handleSubmit}
          name="contact"
          className="w-full md:w-4/5 lg:w-2/3 flex flex-col mx-auto sm:py-2 md:py-8 mt-8 md:mt-0 bg-black bg-opacity-50 p-4 md:p-12 lg:p-24 rounded-xl ">
          <h2 className="text-yellow-500 sm:text-4xl mb-2 font-medium title-font">
            Let's chat!
          </h2>
          <p className="leading-relaxed mb-6 font-medium text-xl text-white">
            Please fill out the fields below and submit to send me an email and I'll get back to you shortly.
          </p>
          <div className="relative mb-4">
            <label htmlFor="name" className="leading-7 text-sm text-white">
              Name
            </label>
            <input
              type="text"
              id="name"
              name="name"
              className="w-full bg-white rounded border border-gray-700 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-600 text-base outline-none text-black py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
            />
          </div>
          <div className="relative mb-4">
            <label htmlFor="subject" className="leading-7 text-sm text-white">
              Subject
            </label>
            <input
              type="text"
              id="subject"
              name="subject"
              className="w-full bg-white rounded border border-gray-700 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-600 text-base outline-none text-black py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
            />
          </div>
          <div className="relative mb-4">
            <label htmlFor="email" className="leading-7 text-sm text-white">
              Email
            </label>
            <input
              type="email"
              id="email"
              name="email"
              className="w-full bg-white rounded border border-gray-700 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-600 text-base outline-none text-black py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
            />
          </div>
          <div className="relative mb-4">
            <label
              htmlFor="message"
              className="leading-7 text-sm text-white">
              Message
            </label>
            <textarea
              id="message"
              name="message"
              className="w-full bg-white rounded border border-gray-700 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-600 h-32 text-base outline-none text-black py-1 px-3 resize-none leading-6 transition-colors duration-200 ease-in-out"
            />
          </div>
          <button
            type="submit"
            className="text-white bg-indigo-600 w-1/2 mx-auto border-0 py-2 px-6 focus:outline-none hover:bg-indigo-500 rounded text-lg">
            Submit
          </button>
        </form>
      </div>
    </section>
  );
}

export default Contact