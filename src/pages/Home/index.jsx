import CoverImage from "../../Components/CoverImage";
import Navbar from "../../Components/Navbar";
import Introduction from "./Introduction";

function Home() {
  return (
    <div className="">
      <CoverImage>
        <div className="home_content w-screen">
          <Navbar />
          <Introduction />
        </div>
      </CoverImage>
    </div>
  );
}

export default Home;
