import { motion } from 'framer-motion';
const images = [
  'https://images.unsplash.com/photo-1519389950473-47ba0277781c',
  'https://images.unsplash.com/photo-1522202176988-66273c2fd55f',
  'https://images.unsplash.com/photo-1556761175-129418cb2dfe'
];
export default function Gallery(){ return (
  <section className="py-20 px-6 bg-gray-50">
    <h2 className="text-3xl font-bold text-center mb-10 text-gray-800">Proyectos Recientes</h2>
    <div className="grid sm:grid-cols-3 gap-6 max-w-6xl mx-auto">
      {images.map((img,i)=>(
        <motion.div key={i} initial={{opacity:0,scale:0.9}} whileInView={{opacity:1,scale:1}} viewport={{once:true}} transition={{delay:i*0.2}} className="rounded-xl overflow-hidden shadow-lg hover:shadow-2xl transition">
          <img src={img} alt={`Project ${i}`} className="w-full h-64 object-cover" />
        </motion.div>
      ))}
    </div>
  </section>
); }
