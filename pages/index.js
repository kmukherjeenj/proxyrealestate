// pages/index.js
import Head from 'next/head';

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen">
      <Head>
        <title>Proxy Real Estate - Redefining Commercial Real Estate</title>
        <meta name="description" content="Experience Meets Evolution in Commercial Real Estate" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <header className="bg-white shadow">
        <nav className="flex justify-between items-center py-6 px-10">
          <div className="text-xl">Proxy Real Estate</div>
          <div>
            <a href="#" className="text-blue-600 px-4">Home</a>
            <a href="#" className="text-blue-600 px-4">Our Concept</a>
            <a href="#" className="text-blue-600 px-4">How It Works</a>
            <a href="#" className="text-blue-600 px-4">About Us</a>
          </div>
        </nav>
      </header>

      <main className="flex-grow container mx-auto text-center px-4">
        <h1 className="text-5xl font-bold mt-20">Redefining the Commercial Real Estate Experience</h1>
        <p className="mt-4 text-xl">The world of commercial real estate is evolving. Proxy Real Estate is at the forefront, merging decades of industry expertise with innovative technology to transform how real estate deals are done.</p>
        <div className="mt-8">
          <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full mr-4">Get Started</button>
          <button className="bg-transparent hover:bg-blue-500 text-blue-700 hover:text-white py-2 px-4 border border-blue-500 rounded-full">Learn More</button>
        </div>
      </main>

      <footer className="bg-white p-6 text-center">
        Copyright © 2023 Proxy Real Estate
      </footer>
    </div>
  )
}
