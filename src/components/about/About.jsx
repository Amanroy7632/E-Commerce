import React from 'react'
import Responsive from '../../../../slider/src/assets/Responsive'
function About() {
  return (
    // <div>
    //   <Responsive/>
    // </div>
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
    <div className="max-w-2xl w-full bg-white p-8 shadow-md rounded-md">
      <h2 className="text-2xl font-bold mb-4">About Us</h2>
      <p className="mb-4">
        Welcome to our shopping website! At SwiftBuy, we are committed to providing high-quality products and excellent customer service to our valued customers.
      </p>
      <p className="mb-4">
        Our mission is to make online shopping a seamless and enjoyable experience for everyone. Whether you're looking for clothing, electronics, home decor, or anything in between, we've got you covered.
      </p>
      <p className="mb-4">
        Meet our dedicated team of professionals who work tirelessly to ensure that your shopping experience is nothing short of amazing:
      </p>
      <ul className="list-disc pl-6 mb-4">
        <li>Aman Roy - Founder & CEO</li>
        <li>Raja Babu - Head of Operations</li>
        <li>Ishan Roy - Chief Technology Officer</li>
        {/* Add more team members as needed */}
      </ul>
      <p>
        Thank you for choosing SwiftBuy. We look forward to serving you!
      </p>
    </div>
    </div>
  )
}

export default About
