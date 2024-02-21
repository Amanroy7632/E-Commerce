import React,{useRef} from 'react'
import emailjs from '@emailjs/browser'
function Contact() {
  const form = useRef();
  const sendEmail = (e) => {
    e.preventDefault();
    emailjs
      .sendForm('service_hkvbkra', 'template_ua0hwpn', form.current, {
        publicKey: '20qu55NKpDz2aMPlK',
      })
      .then(
        () => {
          alert("Message Sent Successfully !");
        },
        (error) => {
          console.log("Something Went wrong !!");
        },
      );
  }
  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100 overflow-hidden dark:bg-black dark:border-gray-700">
      <div className="max-w-md w-full bg-white p-8 shadow-md rounded-md border dark:bg-gray-800 dark:border-gray-700 dark:text-white">
        <h2 className="text-2xl font-bold mb-4 text-black dark:text-white">Contact Me</h2>
        <form onSubmit={sendEmail} ref={form}>
          <div className="mb-4">
            <label htmlFor="name" className="block text-sm font-semibold mb-1">Name</label>
            <input type="text" id="name" name="user_name" className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:border-blue-400 dark:text-black" />
          </div>
          <div className="mb-4" style={{display:"none"}}>
            <label htmlFor="name" className="block text-sm font-semibold mb-1">Name</label>
            <input type="text" id="name" value="Mr. Aman Roy" name="to_name" className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:border-blue-400 dark:text-black" />
          </div>
          <div className="mb-4">
            <label htmlFor="email" className="block text-sm font-semibold mb-1">Email</label>
            <input type="email" id="email" name="user_email" className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:border-blue-400 dark:text-black" />
          </div>
          <div className="mb-4">
            <label htmlFor="message" className="block text-sm font-semibold mb-1">Message</label>
            <textarea id="message" name="message" rows="4" className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:border-blue-400 dark:text-black"></textarea>
          </div>
          <div className="text-center">
            <button type="submit" className="bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600 transition-colors duration-300">Submit</button>
          </div>
        </form>
      </div>
    </div>
  )
}

export default Contact
