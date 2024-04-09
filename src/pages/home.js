import MyImg from "../assets/MyImg/Pugazhendhi.jpeg";
import "./styles/home.css";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";

function Homepage() {
  gsap.registerPlugin(useGSAP);
  useGSAP(() => {
    gsap.from(".homeIntro", { duration: 1, opacity: 0, delay: 2, stagger: 1 });
  });

  return (
    <>
      <div className="homeIntro bg-purple-300 mx-auto p-5 text-center rounded-2xl">
        <img
          src={MyImg}
          alt="Pugazhendhi"
          className="myImg homeIntro mx-auto rounded-full"
        />
        <div className="homeIntro bg-white mx-auto lg:w-[50%] mt-5 p-5 border-2 border-purple-500 rounded-2xl">
          <h1 className="homeIntro uppercase text-3xl font-bold text-purple-600">
            Pugazhendhi
          </h1>
          <h1 className="homeIntro uppercase text-xl font-bold text-purple-500">
            A WEB DESIGNER
          </h1>
          <p className="homeIntro uppercase font-semibold">
            I am a Web Designer based in India
          </p>
        </div>
      </div>
    </>
  );
}

export default Homepage;
