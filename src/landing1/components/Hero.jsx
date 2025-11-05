import { motion } from 'framer-motion';
export default function Hero(){ return (
  <section className="relative overflow-hidden">
    <div className="absolute inset-0 bg-gradient-to-tr from-purple-600 via-fuchsia-500 to-cyan-400 opacity-90"></div>
    <div className="relative z-10 flex flex-col items-center justify-center text-center py-28 px-6 text-white">
      <motion.h1 initial={{opacity:0,y:-30}} animate={{opacity:1,y:0}} transition={{duration:0.8}} className="text-5xl sm:text-6xl font-bold mb-4">Ezih Software</motion.h1>
      <motion.p initial={{opacity:0,y:20}} animate={{opacity:1,y:0}} transition={{delay:0.3,duration:0.8}} className="max-w-2xl text-lg sm:text-xl">Creamos experiencias digitales únicas para potenciar tu negocio.</motion.p>
      <motion.button whileHover={{scale:1.05}} className="mt-8 bg-white text-purple-700 font-semibold py-3 px-8 rounded-full shadow-lg">Conocé nuestros proyectos</motion.button>
    </div>
  </section>
); }
