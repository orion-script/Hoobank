import Navbar from "./components/Navbar";
import SideBar from "./components/SideBar";
import Payment from "./components/Payment";
import Bussiness from "./components/Bussiness";
import Billing from "./components/Billing";
import Card from "./components/Card";
import Gallery from "./components/Gallery";
import Partners from "./components/Partners";
import Service from "./components/Service";
import Footer from "./components/Footer";
import Scroll from "./components/ScrollArrow";

function App() {
  return (
    <div>
      <Navbar />
      <SideBar />
      <Payment />
      <Bussiness />
      <Billing />
      <Card />
      <Gallery />
      <Partners />
      <Service />
      <Footer />
      <Scroll />
    </div>
  );
}

export default App;
