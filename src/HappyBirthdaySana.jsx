import React, { useState } from 'react'
import { motion } from 'framer-motion'
import { Menu, ChevronDown, Heart, Gift } from 'lucide-react'

export default function HappyBirthdaySana() {
  const [menuOpen, setMenuOpen] = useState(false)
  const [aiLoading, setAiLoading] = useState(false)
  const [aiMessage, setAiMessage] = useState('')

  const reasons = [
    "Your laugh — it's contagious and makes my day brighter.",
    "The way you listen when I talk — you make me feel seen.",
    "You're thoughtful — you remember the little things.",
    "Your sense of adventure — you push me to try new things.",
    "Your kindness to others — I admire your heart.",
    "Your creativity — everything you do has your special touch.",
    "You support my dreams — and that means everything.",
    "You make ordinary days feel special."
  ]

  function localLoveNote(name) {
    const templates = [
      `Happy Birthday ${name}! Every moment with you is my favorite. You light up my life in ways words can't fully catch — but I promise to spend my days trying.`,
      `${name}, on your special day I wish you all the joy you give to others. Thank you for being you — brilliant, warm, and wonderfully kind. Happy Birthday!`,
      `To ${name}, my constant smile: you make the ordinary extraordinary. Today I celebrate you and the love you bring into my life. Happy Birthday!`
    ]
    return templates[Math.floor(Math.random() * templates.length)]
  }

  async function generateLoveNote() {
    setAiMessage('')
    setAiLoading(true)
    try {
      const fallback = localLoveNote('Sana')
      setAiMessage(fallback)
    } finally {
      setAiLoading(false)
    }
  }

  return (
    <div className="min-h-screen bg-gradient-to-b from-pink-50 via-white to-rose-50 font-sans text-gray-800">
      <header className="sticky top-0 bg-white/60 backdrop-blur-md shadow-sm z-40">
        <nav className="max-w-5xl mx-auto px-6 py-3 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="p-2 rounded-full bg-rose-100">
              <Heart className="w-6 h-6 text-rose-600" />
            </div>
            <div>
              <h1 className="text-lg font-bold">Happy Birthday — Sana</h1>
              <p className="text-sm text-gray-500">A little corner of the web made just for you 😚 </p>
            </div>
          </div>
          <div className="flex items-center gap-4">
            <div className="relative">
              <button
                onClick={() => setMenuOpen(!menuOpen)}
                className="flex items-center gap-2 px-3 py-2 rounded-md hover:bg-gray-100"
              >
                <Menu className="w-5 h-5" />
                <span className="hidden sm:inline">Menu</span>
                <ChevronDown className="w-4 h-4" />
              </button>
              {menuOpen && (
                <motion.div
                  initial={{ opacity: 0, y: -6 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="absolute right-0 mt-2 w-48 bg-white rounded-md shadow-lg ring-1 ring-black/5"
                >
                  <ul className="py-2">
                    <li className="px-3 py-2 hover:bg-rose-50">
                      <a href="#reasons">Reasons</a>
                    </li>
                    <li className="px-3 py-2 hover:bg-rose-50">
                      <a href="#gallery">Gallery</a>
                    </li>
                    <li className="px-3 py-2 hover:bg-rose-50">
                      <a href="#surprise">Surprise</a>
                    </li>
                  </ul>
                </motion.div>
              )}
            </div>
            <a
              href="#surprise"
              className="inline-flex items-center gap-2 bg-rose-600 text-white px-3 py-2 rounded-md shadow hover:scale-105 transition-transform"
            >
              <Gift className="w-4 h-4" /> Surprise
            </a>
          </div>
        </nav>
      </header>

      <main className="max-w-5xl mx-auto px-6 py-12">
        <section className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
          <motion.div
            initial={{ x: -30, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-4xl md:text-5xl font-extrabold leading-tight">
              Happy Birthday, <span className="text-rose-600">Sana</span> 🎉
            </h2>
            <p className="mt-4 text-lg text-gray-700">
              Today I celebrate you — your smile, your warmth, and every little thing that makes you, you.
            </p>
            <div className="mt-6 flex gap-3">
              <button
                onClick={generateLoveNote}
                className="px-4 py-2 rounded-md bg-rose-600 text-white font-medium shadow hover:brightness-110"
              >
                {aiLoading ? 'Creating...' : 'Generate a Love Note'}
              </button>
              <a
                href="#reasons"
                className="px-4 py-2 rounded-md border border-rose-600 text-rose-600 hover:bg-rose-50"
              >
                Why I really really really like you
              </a>
            </div>
            {aiMessage && (
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                className="mt-6 p-4 rounded-lg bg-rose-50 border border-rose-100"
              >
                <strong className="block">A note for Sana:</strong>
                <p className="mt-2">{aiMessage}</p>
              </motion.div>
            )}
          </motion.div>
        </section>

        {/* Reasons Section */}
        <section id="reasons" className="mt-16">
          <h3 className="text-2xl font-bold mb-6">Why I really really really like you <3 </h3>
          <ul className="grid sm:grid-cols-2 gap-4">
            {reasons.map((reason, i) => (
              <motion.li
                key={i}
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="p-4 rounded-lg bg-white shadow"
              >
                {reason}
              </motion.li>
            ))}
          </ul>
        </section>

        {/* Gallery Section */}
        <section id="gallery" className="mt-16">
          <h3 className="text-2xl font-bold mb-6">Few of Sid's favourite photos 📸</h3>
          <div className="grid grid-cols-2 md:grid-cols-3 gap-6">
            {[1,2,3,4,5,6].map((num) => (
              <motion.div key={num} whileHover={{ scale: 1.05 }} className="overflow-hidden rounded-2xl shadow-lg border-4 border-white">
                <img src={`/sana${num}.jpg`} alt={`Sana ${num}`} className="w-full h-48 object-cover" />
              </motion.div>
            ))}
          </div>
          <p className="text-sm text-gray-500 mt-3">.</p>
        </section>

        {/* Surprise Section */}
        <section id="surprise" className="mt-16 text-center">
          <h3 className="text-2xl font-bold mb-4">🎁 A Little Surprise</h3>
          <p className="text-lg">
            No matter how many reasons I list, they’ll never capture all the ways you’re special to me.
          </p>
          <p className="mt-4 text-rose-600 font-semibold">Happy Birthday Sana 💛</p>
        </section>
      </main>
    </div>
  )
}
