// pages/index.js
import Head from 'next/head';
import Header  from '../components/header';


export default function Home() {
  return (
    <div className="flex flex-col min-h-screen">
      <Head>
        <title>Proxy Real Estate - Redefining Commercial Real Estate</title>
        <meta name="description" content="Experience Meets Evolution in Commercial Real Estate" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Header/>
      <main className="flex-grow">
        {/* Hero Section */}
        <div className="relative bg-white overflow-hidden">
          <div className="max-w-7xl mx-auto">
            <div className="relative z-10 pb-8 bg-white sm:pb-16 md:pb-20 lg:max-w-2xl lg:w-full lg:pb-28 xl:pb-32">
              <svg className="hidden lg:block absolute right-0 inset-y-0 h-full w-48 text-white transform translate-x-1/2" fill="currentColor" viewBox="0 0 100 100" preserveAspectRatio="none" aria-hidden="true">
                <polygon points="50,0 100,0 50,100 0,100" />
              </svg>
              <div className="pt-10 sm:pt-12 md:pt-16 lg:pt-20 xl:pt-28">
                <div className="sm:text-center lg:text-left">
                  <h1 className="text-4xl tracking-tight font-extrabold text-gray-900 sm:text-5xl md:text-6xl">
                    <span className="block xl:inline">Redefining the</span> 
                    <span className="block text-blue-600 xl:inline">Commercial Real Estate Experience</span>
                  </h1>
                  <p className="mt-3 text-base text-gray-500 sm:mt-5 sm:text-lg sm:max-w-xl sm:mx-auto md:mt-5 md:text-xl lg:mx-0">
                  The world of commercial real estate is evolving rapidly, and the time-honored methods of leasing and investing need a refresh. Enter proxyrealestate.io: a vanguard of dedicated pioneers disrupting the conventional to revolutionize your real estate journey.
                  </p>
                  <div className="mt-5 sm:mt-8 sm:flex sm:justify-center lg:justify-start">
                    <div className="rounded-md shadow">
                      <a href="#" className="w-full flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-white bg-blue-500 hover:bg-blue-700 md:py-4 md:text-lg md:px-10">
                        Get Started
                      </a>
                    </div>
                    <div className="mt-3 sm:mt-0 sm:ml-3">
                      <a href="#" className="w-full flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-blue-700 bg-blue-100 hover:bg-blue-200 md:py-4 md:text-lg md:px-10">
                        Learn More
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="lg:absolute lg:inset-y-0 lg:right-0 lg:w-1/2">
            <img className="h-56 w-full object-cover sm:h-72 md:h-96 lg:w-full lg:h-full" src="/proxyrealestate.jpg" alt="" />
          </div>
        </div>

        {/* Additional Content Sections */}
      </main>

      <footer className="bg-white p-6 text-center">
        Copyright © 2024 proxyrealestate.io
      </footer>
    </div>
  )
}
