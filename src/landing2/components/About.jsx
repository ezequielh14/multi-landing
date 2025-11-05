import { motion } from 'framer-motion';
export default function About(){ return (
  <section className="py-20 px-6 bg-white text-center">
    <motion.h2 initial={{opacity:0,y:-20}} whileInView={{opacity:1,y:0}} viewport={{once:true}} transition={{duration:0.5}} className="text-3xl font-bold text-gray-800 mb-6">Nuestra Filosofía</motion.h2>
    <motion.p initial={{opacity:0}} whileInView={{opacity:1}} viewport={{once:true}} transition={{delay:0.2}} className="max-w-3xl mx-auto text-gray-600 text-lg">En Ezih Software creemos que la innovación y la claridad deben ir de la mano. Diseñamos soluciones digitales pensadas para destacar la esencia de cada marca.</motion.p>
  </section>
); }
