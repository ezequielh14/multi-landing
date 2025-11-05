import { motion } from 'framer-motion';
export default function Hero(){ return (
  <section className="bg-gradient-to-r from-green-500 to-emerald-600 text-white text-center py-24 px-6">
    <motion.h1 initial={{opacity:0,y:-20}} animate={{opacity:1,y:0}} transition={{duration:0.7}} className="text-5xl font-bold mb-4">Nueva Colección 2025</motion.h1>
    <motion.p initial={{opacity:0,y:20}} animate={{opacity:1,y:0}} transition={{delay:0.3,duration:0.7}} className="text-lg mb-8">Estilo, confort y tecnología en cada producto. ¡Descubrí las novedades!</motion.p>
    <a href="#productos" className="bg-white text-green-600 font-semibold px-6 py-3 rounded-lg shadow hover:bg-gray-100 transition">Ver productos</a>
  </section>
); }
