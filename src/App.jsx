import { useState } from "react";
import Header from './components/Header';
import Hero from './components/Hero';
import About from './components/About';
import GetItSold from './components/GetItSold';
import SearchListings from './components/SearchListings';
import LogosRow from './components/LogosRow';
import Gallery from './components/Gallery';
import Services from './components/Services';
import Contact from './components/Contact';
import Footer from './components/Footer';
import Sidebar from './components/Sidebar';
import FooterSocials from "./components/FooterSocials";


function App() {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  return (
    <div className="bg-white text-gray-900 min-h-screen font-sans">
      <div id="home">
        <Header onOpenSidebar={() => setIsSidebarOpen(true)} />
        <Hero />
      </div>
      <Sidebar isOpen={isSidebarOpen} onClose={() => setIsSidebarOpen(false)} />
      <About />
      <GetItSold />
      <SearchListings />
      <LogosRow />
      <Gallery />
      <Services />
      {/* FooterSocials should be placed here, spaced from Services */}
      <div className="mt-12 mb-12">
        <FooterSocials />
      </div>
      <Contact />

      {/* Diamond divider between Contact and Footer */}
      <div className="flex justify-center -mb-6 z-30 relative">
        <div
          className="w-8 h-8 bg-black border border-gray-700 shadow"
          style={{
            clipPath: "polygon(50% 0%, 100% 50%, 50% 100%, 0% 50%)"
          }}
        />
      </div>
      <Footer />
    </div>
  );
}
export default App;
