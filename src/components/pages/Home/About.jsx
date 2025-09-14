import React from "react";
import JessProfile from "../../../assets/JessProfile.jpeg";

function About() {
  return (
    <div className="flex flex-col items-center justify-center gap-4 md:gap-12 bg-gradient-to-t from-green-900 to-green-80 md:h-[94vh]">
      {/* Heading */}
      <h1 className="text-xl md:text-3xl lg:text-4xl font-bold text-center">
        Hi I am Jessica 🙋🏻‍♀️
      </h1>

      {/* Profile Image */}
      <img
        className="rounded-full h-40 w-40 md:h-60 md:w-60 object-cover"
        src={JessProfile}
        alt="Jessica"
      />

      {/* Bio Section */}
      <section className=" rounded-lg p-4 max-w-3xl w-full text-center">
        <p className="mb-4 text-lg" >
          I'm a Cybersecurity professional with a passion for safeguarding
          digital landscapes.
        </p>

        <p className="mb-4 text-lg" >
          Currently, I'm immersed in the world of cyber defense, pursuing a
          Master's in Cyber Security at RMIT University, where I'm sharpening my
          skills to protect the digital realm 👩‍💻.
        </p>

        <p className="mb-4 text-lg" >
          With a Bachelor's degree in Forensic Science, I bring a unique blend
          of analytical thinking and attention to detail to cybersecurity. What
          truly fascinates me is the evolving landscape of digital threats and
          the diverse techniques we can employ to counter them.
        </p>

        <p className="mb-4 text-lg" >
          My interests extend to the intriguing intersection of Cyber Security
          for Space, where I explore the unique challenges of securing the final
          frontier.
        </p>
      </section>
    </div>
  );
}

export default About;
