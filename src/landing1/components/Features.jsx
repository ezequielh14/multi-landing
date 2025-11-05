import { motion } from 'framer-motion';
import { Code2, Palette, Rocket } from 'lucide-react';
const features = [
  { icon: <Code2 className='w-8 h-8 text-purple-600' />, title: 'Desarrollo Web Moderno', desc: 'Aplicamos las últimas tecnologías para lograr sitios rápidos y eficientes.' },
  { icon: <Palette className='w-8 h-8 text-fuchsia-500' />, title: 'Diseño Creativo', desc: 'Combinamos estética y funcionalidad para destacar tu marca.' },
  { icon: <Rocket className='w-8 h-8 text-cyan-500' />, title: 'Optimización Total', desc: 'Rendimiento, SEO y experiencia de usuario a otro nivel.' },
];
export default function Features(){ return (
  <section className="py-20 px-6 text-center bg-white">
    <h2 className="text-3xl sm:text-4xl font-bold mb-12 text-gray-800">¿Por qué elegir Ezih Software?</h2>
    <div className="grid gap-10 sm:grid-cols-3 max-w-6xl mx-auto">
      {features.map((f,i)=>(
        <motion.div key={i} initial={{opacity:0,y:30}} whileInView={{opacity:1,y:0}} viewport={{once:true}} transition={{delay:i*0.2}} className="bg-gray-50 rounded-2xl p-8 shadow-md hover:shadow-xl transition">
          <div className="flex justify-center mb-4">{f.icon}</div>
          <h3 className="font-semibold text-lg mb-2">{f.title}</h3>
          <p className="text-gray-600">{f.desc}</p>
        </motion.div>
      ))}
    </div>
  </section>
); }
