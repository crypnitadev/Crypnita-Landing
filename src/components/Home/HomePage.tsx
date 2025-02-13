
import type React from "react"
import { useState } from "react"
import { motion } from "framer-motion"
import { FaBars, FaTimes } from "react-icons/fa"

const HomePage: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  const menuItems = [
    { name: "World", href: "#" },
    { name: "Orbpoints", href: "#" },
    { name: "Beneficios", href: "#" },
    { name: "Cómo registrarme", href: "#" },
    { name: "App", href: "#" },
    { name: "Solicita información", href: "#" },
  ]

  return (
    <div className="bg-gradient-to-r from-purple-600 to-blue-500 min-h-screen text-white p-4">
      <nav className="flex justify-between items-center mb-8">
        <motion.div whileHover={{ scale: 1.1 }} className="text-2xl font-bold">
          CRYPNITA
        </motion.div>
        <div className="hidden md:flex space-x-4">
          {menuItems.map((item) => (
            <motion.a
              key={item.name}
              href={item.href}
              whileHover={{ scale: 1.1, color: "#FFA500" }}
              className="hover:text-yellow-300 transition-colors"
            >
              {item.name}
            </motion.a>
          ))}
        </div>
        <div className="md:hidden">
          <button onClick={() => setIsMenuOpen(!isMenuOpen)}>
            {isMenuOpen ? <FaTimes size={24} /> : <FaBars size={24} />}
          </button>
        </div>
      </nav>

      {isMenuOpen && (
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -20 }}
          className="md:hidden"
        >
          {menuItems.map((item) => (
            <a key={item.name} href={item.href} className="block py-2 hover:text-yellow-300 transition-colors">
              {item.name}
            </a>
          ))}
        </motion.div>
      )}

      <main className="mt-16">
        <motion.h1
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-4xl md:text-6xl font-bold mb-4"
        >
          Obtén tu Identidad anónima digital con
        </motion.h1>
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          className="text-5xl md:text-7xl font-bold mb-8"
        >
          WORLD
        </motion.div>
        <p className="text-xl mb-8">También recibe bonos en tu billetera y obtén tu pasaporte</p>
        <div className="flex flex-col md:flex-row space-y-4 md:space-y-0 md:space-x-4">
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="bg-teal-500 hover:bg-teal-600 text-white font-bold py-2 px-4 rounded"
          >
            Descargar World
          </motion.button>
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="bg-gray-700 hover:bg-gray-800 text-white font-bold py-2 px-4 rounded"
          >
            Quiero más info
          </motion.button>
        </div>
      </main>
    </div>
  )
}

export default HomePage

