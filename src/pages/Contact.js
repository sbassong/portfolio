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
    <section id="contact" className="relative">
      <div className="container px-5 py-10 mx-auto flex sm:flex-nowrap flex-wrap">
        <div className="lg:w-2/3 md:w-1/2 bg-gray-900 rounded-lg overflow-hidden sm:mr-10 p-10 flex items-end justify-start relative">
          <iframe
            title="map"
            width="100%"
            height="100%"
            marginWidth={0}
            frameBorder={0}
            marginHeight={0}
            className="absolute inset-0"
            style={{ filter: "opacity(0.6)" }}
            src="https://www.google.com/maps/embed/v1/search?q=Seattle&key=AIzaSyBFw0Qbyq9zTFTd-tUY6dZWTgaQzuU17R8"
          />
          <div className="bg-gray-700 relative flex flex-wrap py-8 rounded shadow-md">
            <div className="lg:w-1/2 px-6 mt-4 lg:mt-0">
              <h2 className="title-font font-semibold text-white tracking-widest text-s">EMAIL</h2>
              <p className="text-indigo-400 leading-relaxed">sam.bassong@gmail.com</p>

              <h2 className="title-font font-semibold text-white tracking-widest text-s mt-4">PHONE</h2>
              <p className="leading-relaxed text-indigo-400">206-402-7371</p>

              <h2 className="title-font font-semibold text-white tracking-widest text-s mt-4">LOCATION</h2>
              <p className="mt-1 text-indigo-400">Seattle, WA <br />Remote</p>
            </div> <div className="lg:w-1/2 px-6"></div><div className="lg:w-1/2 px-6"></div>

          </div>
        </div>

        <form
          ref={form}
          onSubmit={handleSubmit}
          netlify
          name="contact"
          className="lg:w-1/3 md:w-1/2 flex flex-col md:ml-auto w-full md:py-8 mt-8 md:mt-0">
          <h2 className="text-blue sm:text-4xl text-3xl mb-1 font-medium title-font">
            Let's chat!
          </h2>
          <p className="leading-relaxed mb-5">
            Please fill out the fields below and submit to send me an email and I'll get back to you shortly.
          </p>
          <div className="relative mb-4">
            <label htmlFor="name" className="leading-7 text-sm text-gray-400">
              Name
            </label>
            <input
              type="text"
              id="name"
              name="name"
              className="w-full bg-gray-800 rounded border border-gray-700 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-900 text-base outline-none text-gray-100 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
            />
          </div>
          <div className="relative mb-4">
            <label htmlFor="subject" className="leading-7 text-sm text-gray-400">
              Subject
            </label>
            <input
              type="text"
              id="subject"
              name="subject"
              className="w-full bg-gray-800 rounded border border-gray-700 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-900 text-base outline-none text-gray-100 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
            />
          </div>
          <div className="relative mb-4">
            <label htmlFor="email" className="leading-7 text-sm text-gray-400">
              Email
            </label>
            <input
              type="email"
              id="email"
              name="email"
              className="w-full bg-gray-800 rounded border border-gray-700 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-900 text-base outline-none text-gray-100 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
            />
          </div>
          <div className="relative mb-4">
            <label
              htmlFor="message"
              className="leading-7 text-sm text-gray-400">
              Message
            </label>
            <textarea
              id="message"
              name="message"
              className="w-full bg-gray-800 rounded border border-gray-700 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-900 h-32 text-base outline-none text-gray-100 py-1 px-3 resize-none leading-6 transition-colors duration-200 ease-in-out"
            />
          </div>
          <button
            type="submit"
            className="text-white bg-indigo-500 border-0 py-2 px-6 focus:outline-none hover:bg-indigo-600 rounded text-lg">
            Submit
          </button>
        </form>
      </div>
    </section>
  );
}

export default Contact