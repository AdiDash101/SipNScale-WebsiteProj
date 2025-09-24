import Head from 'next/head'
import { motion } from 'framer-motion'
import { useState, useEffect } from 'react'
import { Button } from '@/components/ui/button'
import { Card, CardContent } from '@/components/ui/card'
import { ArrowRight } from 'lucide-react'
import CompanyLogo from './CompanyLogo'
import Navbar from './Navbar'

const rotatingInfo = [
  {
    title: "Sippin",
    text: "Sippin da scaling da groovin out loud with founders and operators."
  },
  {
    title: "Scalin",
    text: "Scalin the operation and growth of startups with the groovin"
  },
  {
    title: "Groovin",
    text: "Reversin the groovin and movin the founders and operators to sip and scale."
  }
]

export default function Homepage() {
  const [activeIndex, setActiveIndex] = useState(0)
  useEffect(() => {
    const interval = setInterval(() => {
      setActiveIndex((prev) => (prev + 1) % rotatingInfo.length)
    }, 4000) // switch every 4s
    return () => clearInterval(interval)
  }, [])

  return (
    <>
      <Head>
        <title>Sip N Scale</title>
        <meta name="description" content="Inspired by Swarm candid-convos" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
       
      {/* Hero Section */}
      <section className="relative flex flex-col items-center justify-center min-h-screen px-6 text-center bg-gradient-to-b from-[#0A0A0A] to-[#1A1A1A] text-white">
        <Navbar />
        <motion.h1 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 7.8 }}
          className="text-5xl font-bold max-w-4xl leading-tight"
        >
          Real conversations with <span className="text-[#FFD700]">real builders</span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 8 }}
          className="mt-6 text-lg max-w-2xl text-gray-300"
        >
          Explore candid discussions, insights, and journeys from founders, creators, and operators who are building the future.
        </motion.p>

        {/* Rotating Info */}
        <div className="mt-16 max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8">
          {rotatingInfo.map((item, idx) => (
            <div
              key={idx}
              className={`relative transition-opacity duration-500 ${
                activeIndex === idx ? "opacity-100" : "opacity-50"
              }`}
            >
              <h3 className="text-xl font-semibold mb-2 border-t border-gray-600 pt-4">
                {item.title}
              </h3>
              <p className="text-gray-300">{item.text}</p>

              {activeIndex === idx && (
                <motion.div
                  key={idx + "-bar"}
                  initial={{ width: "0%" }}
                  animate={{ width: "100%" }}
                  transition={{ duration: 4, ease: "linear" }}
                  className="h-0.5 bg-[#FFD700] mt-4"
                />
              )}
            </div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.6 }}
          className="mt-16"
        >
          <Button size="lg" className="bg-[#FFD700] text-black font-semibold px-6 py-3 rounded-full flex items-center gap-2">
            Explore Convos <ArrowRight className="w-5 h-5" />
          </Button>
        </motion.div>
      </section>

      {/* Company Logos Section */}
      <section className="bg-black">
        <CompanyLogo />
      </section>

      {/* Featured Conversations */}
      <section className="px-6 py-20 bg-white">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-12">Featured Conversations</h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[1,2,3].map((item) => (
              <Card key={item} className="rounded-2xl shadow-md hover:shadow-xl transition overflow-hidden">
                <CardContent className="p-6">
                  <h3 className="text-xl font-semibold mb-4">Conversation {item}</h3>
                  <p className="text-gray-600 mb-6">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque molestie.
                  </p>
                  <Button variant="outline" className="rounded-full">Read More</Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="px-6 py-20 bg-black text-white text-center">
        <h2 className="text-3xl font-bold mb-6">Join the Conversation</h2>
        <p className="max-w-2xl mx-auto text-gray-300 mb-8">
          Be part of a growing community of builders, thinkers, and doers who share insights and ideas candidly.
        </p>
        <Button size="lg" className="bg-[#FFD700] text-black font-semibold px-6 py-3 rounded-full">
          Get Started
        </Button>
      </section>
    </>
  )
}
