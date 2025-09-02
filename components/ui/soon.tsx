"use client"

import Image from "next/image"
import { motion } from "framer-motion"

export default function ComingSoon() {
  return (
    <div className="fixed inset-0 bg-gradient-to-b from-black via-yellow-700 to-black flex flex-col items-center justify-center z-50 font-sans">
      <motion.div
        initial={{ opacity: 0, y: -60, scale: 0.95 }}
        animate={{ opacity: 1, y: 0, scale: 1 }}
        transition={{ duration: 1.2, ease: "easeOut" }}
        className="mb-8"
      >
        <Image
          src="/images/vinland-smp-main-logo.png"
          alt="Vinland SMP Logo"
          width={360}
          height={220}
          className="drop-shadow-2xl"
        />
      </motion.div>

      <motion.h1
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.5, duration: 1.8, ease: "easeOut" }}
        className="text-center max-w-lg px-4 text-3xl md:text-5xl lg:text-6xl font-extrabold tracking-tight text-white drop-shadow-xl"
      >
        <span className="block text-yellow-400">Vinland SMP çok yakında açılıyor!</span>
        <span className="block mt-4 text-gray-300 text-xl md:text-2xl font-medium">
          Kendi krallığını kurmaya hazır ol, epik savaşlara katıl ve özel hazineleri keşfet.
        </span>
      </motion.h1>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.2, duration: 2 }}
        className="mt-12 text-gray-400 text-sm md:text-base text-center max-w-md px-4"
      >
      </motion.div>
    </div>
  )
}
