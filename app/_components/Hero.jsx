import React from 'react'

function Hero() {
  return (
    <section className="relative bg-white">
      <div className="absolute inset-0 bg-gradient-to-r from-purple-100 to-purple-300"></div>
      <div className="relative mx-auto max-w-screen-xl px-4 py-32 lg:flex lg:h-screen lg:items-center">
        <div className="lg:w-1/2 lg:pr-8">
          <h1 className="text-3xl font-extrabold text-purple-700 sm:text-5xl">
            AI Form Builder –
            <strong className="block text-purple-500 sm:text-6xl">
              Revolutionize Your Forms with AI
            </strong>
          </h1>
          <p className="mt-4 text-lg text-gray-700">
            Transform form creation with AI Form Builder. Instantly generate smart, customizable forms tailored to your needs. Enjoy seamless integration, real-time analytics, and top-notch security.
          </p>
          <div className="mt-8 flex flex-wrap justify-center gap-4">
            <a
              className="block rounded bg-purple-600 px-8 py-3 text-sm font-medium text-white shadow-lg hover:bg-purple-700 focus:outline-none focus:ring active:bg-purple-800"
              href="/dashboard"
            >
              + Create AI Form
            </a>
            <a
              className="block rounded px-8 py-3 text-sm font-medium text-purple-600 shadow-lg hover:text-purple-700 focus:outline-none focus:ring active:text-purple-800"
              href="/dashboard"
            >
              Learn More
            </a>
          </div>
        </div>
        <div className="hidden lg:block lg:w-1/2 lg:pl-8">
          <img
            src="home_page.png"
            alt="Placeholder"
            className="object-cover w-full h-full rounded-lg shadow-lg"
          />
        </div>
      </div>
    </section>
  )
}

export default Hero
