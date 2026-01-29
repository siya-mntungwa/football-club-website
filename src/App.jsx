import Navbar from "./components/Navbar"
import HeroCinematic from "./components/HeroCinematic";
import MissionVision from "./components/MissionVision";
import Gallery from "./components/Gallery";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

export default function App() {
  return (
    <div className="font-body">
      <Navbar />
      <HeroCinematic />
      <MissionVision />
      <Gallery />
      <Contact />
      <Footer />
    </div>
  );
}