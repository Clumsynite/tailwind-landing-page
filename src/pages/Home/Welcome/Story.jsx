import { useState } from "react";
import { node } from "prop-types";

function Story() {
  const [readMore, setReadMore] = useState(false);

  const onReadMoreClick = () => setReadMore(!readMore);

  return (
    <div className="flex flex-row items-center justify-center py-24 w-[70vw]" id="story">
      <div className="flex-[3]">
        <div className="flex flex-row justify-end" data-aos="fade-up">
          <img src={"/images/story.jpg"} alt="Story Image" className="w-[25vw] h-[25vw] rounded-full object-center" />
        </div>
      </div>
      <div className="flex-[4] pl-8">
        <div className="text-5xl" data-aos="fade-up">
          <h5 className="uppercase font-extrabold text_border_white ">Read</h5>
          <h5 className="uppercase font-extrabold">The Story</h5>
        </div>
        <div>
          <StoryPara>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et
            dolore magna aliqua. Dapibus ultrices in iaculis nunc sed augue lacus. Vestibulum rhoncus est pellentesque
            elit ullamcorper dignissim cras tincidunt. Iaculis nunc sed augue lacus viverra vitae congue. Feugiat in
            ante metus dictum at tempor commodo ullamcorper. Eu feugiat pretium nibh ipsum consequat nisl vel pretium
            lectus. Et magnis dis parturient montes. Dis parturient montes nascetur ridiculus. Sit amet consectetur
            adipiscing elit duis tristique sollicitudin nibh sit. Egestas congue quisque egestas diam in. Sodales ut
            etiam sit amet nisl purus in.
          </StoryPara>
          <StoryPara>
            Lacus viverra vitae congue eu consequat ac felis. Et malesuada fames ac turpis egestas maecenas pharetra
            convallis. Erat velit scelerisque in dictum. Interdum velit euismod in pellentesque massa placerat duis
            ultricies lacus. Nec tincidunt praesent semper feugiat nibh sed pulvinar. Risus nullam eget felis eget nunc
            lobortis mattis. Et netus et malesuada fames ac turpis egestas. Semper viverra nam libero justo laoreet sit.
            Ipsum dolor sit amet consectetur adipiscing elit duis tristique. Purus gravida quis blandit turpis cursus.
            Dui nunc mattis enim ut tellus elementum sagittis.
          </StoryPara>
          {readMore && (
            <>
              <StoryPara>
                Bibendum neque egestas congue quisque egestas diam. Nunc congue nisi vitae suscipit tellus mauris.
                Dignissim cras tincidunt lobortis feugiat vivamus at augue eget arcu. Praesent tristique magna sit amet
                purus gravida quis blandit turpis. Sed arcu non odio euismod lacinia at quis risus. Eget mi proin sed
                libero. In aliquam sem fringilla ut morbi tincidunt augue interdum. Purus viverra accumsan in nisl nisi
                scelerisque eu ultrices. Adipiscing diam donec adipiscing tristique. Lectus urna duis convallis
                convallis tellus id. Vitae nunc sed velit dignissim sodales ut. Mollis aliquam ut porttitor leo a. Ac
                feugiat sed lectus vestibulum mattis ullamcorper velit sed. Urna nunc id cursus metus aliquam eleifend.
                Accumsan tortor posuere ac ut consequat semper viverra. Ac felis donec et odio pellentesque diam
                volutpat. Integer malesuada nunc vel risus commodo viverra maecenas accumsan.
              </StoryPara>
              <StoryPara>
                Lobortis scelerisque fermentum dui faucibus in ornare quam viverra orci. Amet dictum sit amet justo
                donec enim. Non sodales neque sodales ut etiam sit amet. Mi tempus imperdiet nulla malesuada. Tellus
                orci ac auctor augue mauris. Odio eu feugiat pretium nibh ipsum. Morbi blandit cursus risus at. In
                aliquam sem fringilla ut morbi tincidunt augue. Massa sapien faucibus et molestie ac feugiat sed lectus.
                In dictum non consectetur a erat nam at lectus urna. Malesuada nunc vel risus commodo viverra maecenas
                accumsan lacus vel. Varius morbi enim nunc faucibus a pellentesque sit amet porttitor. Vulputate eu
                scelerisque felis imperdiet proin fermentum. Adipiscing vitae proin sagittis nisl rhoncus mattis rhoncus
                urna neque.
              </StoryPara>
              <StoryPara>
                Libero justo laoreet sit amet cursus sit amet dictum sit. Facilisi morbi tempus iaculis urna id volutpat
                lacus laoreet non. At in tellus integer feugiat scelerisque. Facilisis leo vel fringilla est ullamcorper
                eget nulla. Ipsum a arcu cursus vitae congue mauris rhoncus. Quisque sagittis purus sit amet volutpat.
                At urna condimentum mattis pellentesque. Duis at consectetur lorem donec massa sapien faucibus. Eget
                magna fermentum iaculis eu non diam. Quis vel eros donec ac odio tempor orci dapibus. Netus et malesuada
                fames ac. Id nibh tortor id aliquet lectus. Tincidunt lobortis feugiat vivamus at augue eget arcu.
                Integer quis auctor elit sed vulputate mi. Pharetra sit amet aliquam id diam maecenas ultricies. Aliquam
                nulla facilisi cras fermentum odio eu. Auctor urna nunc id cursus metus aliquam. Volutpat consequat
                mauris nunc congue. Sed ullamcorper morbi tincidunt ornare.
              </StoryPara>
            </>
          )}
          <div
            title="Read More"
            onClick={onReadMoreClick}
            className="text-xl font-bold py-2 cursor-pointer hover:text-[orange] transition-all w-fit"
            data-aos="fade-up"
          >
            Read {readMore ? "Less" : "More"}
          </div>
        </div>
      </div>
    </div>
  );
}

const StoryPara = ({ children }) => (
  <p className="text-xl font-medium py-2" data-aos="fade-up">
    {children}
  </p>
);
StoryPara.propTypes = { children: node };

export default Story;
