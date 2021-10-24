import React, {useRef} from "react";
import { FaPhoneSquareAlt } from "react-icons/fa"
import { MdOutlineAlternateEmail, MdOutlineLocationOn} from "react-icons/md"
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
      <div className="container h-screen lg:h-screen top-0 px-5 py-0 pt-48 mx-auto flex sm:flex-nowrap flex-wrap">
        <div className="lg:w-1/2 lg:h-2/3 md:w-1/2 bg-gray-700 rounded-lg overflow-hidden sm:mr-10 p-10 flex items-end justify-start relative">
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
          
          <div className="bg-black relative bg-opacity-70 text-white font-semibold text-xl flex flex-col my-5 mt-14 shadow-md p-3 rounded items-center">
            <p className="w-3/4 my-2 inline-flex items-center py-1 px-1 focus:outline-none rounded text-base mt-4 md:mt-0"><FaPhoneSquareAlt className="w-5 h-5 mr-1" /> 206-402-7371</p>
            <p className="my-2 inline-flex items-center py-1 px-1 focus:outline-none rounded text-base mt-4 md:mt-0"><MdOutlineAlternateEmail className="w-5 h-5 mr-1" /> sam.bassong@gmail.com</p>
            <p className="my-2 inline-flex items-center py-1 px-1 focus:outline-none rounded text-base mt-4 md:mt-0"><MdOutlineLocationOn className="w-5 h-5 mr-1" /> Seattle, WA | Remote</p>
          </div>
        </div>

        <form
          ref={form}
          onSubmit={handleSubmit}
          netlify
          name="contact"
          className="lg:w-1/2 md:w-1/2 flex flex-col md:ml-auto w-full md:py-8 mt-8 md:mt-0">
          <h2 className="text-yellow-500 sm:text-4xl text-3xl mb-1 font-medium title-font">
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