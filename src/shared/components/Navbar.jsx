import { Link } from 'react-router-dom';
export default function Navbar(){ 
  return (
    <nav className="bg-white/80 backdrop-blur sticky top-0 z-40 border-b">
      <div className="max-w-6xl mx-auto px-6 py-3 flex items-center justify-between">
        <Link to="/" className="flex items-center gap-3">
          <img src="/favicon.svg" alt="Ezih" className="w-10 h-10 rounded-md"/>
          <span className="font-bold text-lg text-purple-700">Ezih Software</span>
        </Link>
        <div className="hidden md:flex gap-6">
          <Link to="/" className="text-sm text-gray-700 hover:text-purple-600">Catálogo</Link>
          <Link to="/landing1" className="text-sm text-gray-700 hover:text-purple-600">Landing 1</Link>
          <Link to="/landing2" className="text-sm text-gray-700 hover:text-purple-600">Landing 2</Link>
          <Link to="/landing3" className="text-sm text-gray-700 hover:text-purple-600">Landing 3</Link>
        </div>
      </div>
    </nav>
  );
}
