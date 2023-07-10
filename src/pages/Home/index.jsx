import CoverImage from "../../Components/CoverImage";
import Navbar from "../../Components/Navbar";
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
    </div>
  );
}

export default Home;
