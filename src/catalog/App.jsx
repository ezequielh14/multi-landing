import Navbar from '../shared/components/Navbar';
import Footer from '../shared/components/Footer';
import CatalogList from './components/CatalogList';
export default function CatalogApp(){
  return (
    <div className="min-h-screen bg-[#f8f9ff]">
      <Navbar />
      <main><CatalogList /></main>
      <Footer />
    </div>
  );
}
