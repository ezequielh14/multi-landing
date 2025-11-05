import { Link } from 'react-router-dom';
export default function CatalogList(){
  const cards = [
    { id:'landing1', title:'Landing 1 — Tech', desc:'Moderna, animada y vibrante', img:'/tech-preview.svg', color:'from-purple-600 to-cyan-400' },
    { id:'landing2', title:'Landing 2 — Agencia', desc:'Sobria, profesional y elegante', img:'/agency-preview.svg', color:'from-slate-800 to-cyan-700' },
    { id:'landing3', title:'Landing 3 — E-commerce', desc:'Tienda moderna y responsiva', img:'/shop-preview.svg', color:'from-green-500 to-emerald-600' },
  ];
  return (
    <section className="py-20 px-6">
      <h1 className="text-4xl font-bold text-center mb-8">Catálogo de Landings</h1>
      <div className="max-w-6xl mx-auto grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
        {cards.map(c=>(
          <div key={c.id} className="bg-white rounded-2xl shadow-md overflow-hidden border">
            <img src={c.img} alt={c.title} className="w-full h-44 object-cover"/>
            <div className="p-4">
              <h3 className="font-semibold text-lg mb-1">{c.title}</h3>
              <p className="text-sm text-gray-600 mb-4">{c.desc}</p>
              <div className="flex gap-3">
                <Link to={`/${c.id}`} className="inline-block px-4 py-2 bg-gradient-to-r from-purple-600 to-pink-500 text-white rounded-full">Ver demo</Link>
                <a href="#" className="inline-block px-4 py-2 border rounded-full text-sm">Comprar</a>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
