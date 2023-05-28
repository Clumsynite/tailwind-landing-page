import { useEffect, useRef } from "react";
import { node } from "prop-types";
import "./cover.css"

function CoverImage({ children }) {
  const containerRef = useRef(null);

  const updateOnScroll = () => {
    const container = containerRef?.current;
    if (container) {
      const { scrollTop: pos } = document.documentElement;
      const backgroundPosition = "0% " + Math.round(-pos * 0.5) + "px";
      // container.style.backgroundPosition = backgroundPosition;
      document.documentElement.style.setProperty("--backgroundPosition", backgroundPosition);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", updateOnScroll);
    return () => {
      window.removeEventListener("scroll", updateOnScroll);
    };
  }, [containerRef]);

  return (
    <div className="cover_container " ref={containerRef}>
      <div className="cover_content">{children}</div>
    </div>
  );
}
CoverImage.propTypes = {
  children: node.isRequired,
};

export default CoverImage;
