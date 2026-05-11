import Navbar from './components/Navbar';
import Hero from './components/Hero';
import ProductCategories from './components/ProductCategories';
import GiftingSuite from './components/GiftingSuite';
import MadeInKenya from './components/MadeInKenya';
import CatalogueForm from './components/CatalogueForm';
import Footer from './components/Footer';
import WhatsAppFloat from './components/WhatsAppFloat';

export default function App() {
  return (
    <div className="min-h-screen bg-ivory">
      <Navbar />
      <Hero />
      <ProductCategories />
      <GiftingSuite />
      <MadeInKenya />
      <CatalogueForm />
      <Footer />
      <WhatsAppFloat />
    </div>
  );
}
