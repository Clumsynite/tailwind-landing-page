import CoverImage from "../../Components/CoverImage";
import Navbar from "../../Components/Navbar";
import Footer from "./Footer";
import Introduction from "./Introduction";
import Welcome from "./Welcome";

function Home() {
  return (
    <div className="bg-[#3c3c62]">
      <CoverImage>
        <div className="home_content w-screen">
          <Navbar />
          <Introduction />
        </div>
      </CoverImage>
      <Welcome />
      <Footer />
    </div>
  );
}

export default Home;
