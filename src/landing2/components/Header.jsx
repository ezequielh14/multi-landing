import { motion } from 'framer-motion';
export default function Header(){ return (
  <header className="bg-gradient-to-r from-slate-900 via-slate-800 to-cyan-800 text-white text-center py-28 px-6">
    <motion.h1 initial={{opacity:0,y:-30}} animate={{opacity:1,y:0}} transition={{duration:0.8}} className="text-5xl sm:text-6xl font-bold mb-4">Soluciones Digitales Profesionales</motion.h1>
    <motion.p initial={{opacity:0,y:20}} animate={{opacity:1,y:0}} transition={{delay:0.3}} className="text-lg sm:text-xl max-w-2xl mx-auto">Potenciamos tu negocio con herramientas modernas, diseño elegante y tecnología confiable.</motion.p>
  </header>
); }
